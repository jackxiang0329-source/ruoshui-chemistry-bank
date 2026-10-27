#!/usr/bin/env node
// Maximize reproducible repository discovery within GitHub Search API limits.
// Sources are NOT approved question text. No code from discovered repositories runs.
import {readFileSync,writeFileSync,mkdirSync,readdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';

const root=new URL('../',import.meta.url);
const configFile=new URL('harvest/search_queries.json',root);
const indexFile=new URL('harvest/source_candidates.json',root);
const shardsDir=new URL('harvest/sources/',root);
const token=process.env.GITHUB_TOKEN;
const headers={Accept:'application/vnd.github+json','User-Agent':'ruoshui-chemistry-harvest',
  'X-GitHub-Api-Version':'2022-11-28'};
if(token) headers.Authorization='Bearer '+token;
const sleep=ms=>new Promise(ok=>setTimeout(ok,ms));
const stamp=()=>new Date().toISOString();
const chemistry=/(?:\bchemistry\b|\bchemical\b|\bchemie\b|\bchemia\b|chemtrain|chemquiz|chem[-_ ]|化学|化工|molecul|electrochem|physchem|inorganic|organic|titration|stoichiometr|spectroscop|chromatograph|electroanalys|potentiometr|voltammetr|calorimetr|spectrometr|gravimetr|chemkin|solvation|chemical[-_ ]?reaction|coordination[-_ ]chemistry)/i;
const educational=/(?:quest|quiz|exam|probl|exercis|practic|test|learn|study|educat|benchmar|assess|dataset|question.bank|mcq|trainer|题|练习|习题|课程|测验|试题|题库|chemtrain|tutorial|workbook|worksheet|notebook|\blab\b|lesson|assignment|course|calculator|simulation|simulator|experiment|interactive)/i;
const hex64=Array.from({length:64},(_,i)=>i.toString(16).padStart(2,'0'));

export function subjects(value){
  const t=String(value||'').toLowerCase();
  const rules=[['inorganic',/\binorganic\b|无机化学|无机/],
    ['organic',/\borganic\b|有机化学|有机/],
    ['analytical',/\banalytical\b|分析化学|色谱|滴定|titration|chromatograph|electroanalys|potentiometr|voltammetr|spectrometr|gravimetr/],
    ['physical',/physical chemistry|物理化学|热力学|动力学|thermodynamic|kinetic|electrochem|calorimetr|chemkin|solvation/]];
  const found=rules.filter(([,re])=>re.test(t)).map(([name])=>name);
  return found.length?found:['general'];
}
export function bucketKey(name){
  const h=createHash('sha256').update(String(name).toLowerCase()).digest();
  return (h[0]>>2).toString(16).padStart(2,'0');
}
export function requestedPages(total,perPage,maxPages){
  return Math.min(maxPages,10,Math.ceil(Math.min(Math.max(0,total),1000)/perPage));
}
export function canonicalRepo(row,today){
  const full=String(row.full_name||'');
  if(!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(full)||row.fork||row.archived)return null;
  const desc=String(row.description||'').slice(0,600);
  const topics=Array.isArray(row.topics)?row.topics.filter(x=>typeof x==='string').slice(0,20):[];
  const text=[full,desc,topics.join(' ')].join(' ').toLowerCase();
  if(!chemistry.test(text)||!educational.test(text))return null;
  return {repository:full,url:'https://github.com/'+full,description:desc,
    subjects:subjects(text),topics,
    default_branch:String(row.default_branch||'main'),
    repository_license_spdx:String(row.license?.spdx_id||'UNKNOWN'),
    license_scope:'repository_metadata_only_not_question_rights',
    archived:Boolean(row.archived),fork:Boolean(row.fork),
    last_upstream_push:String(row.pushed_at||''),
    first_discovered:today,status:'unreviewed_not_importable'};
}
function loadCatalog(){
  const map=new Map();
  if(existsSync(shardsDir)){
    for(const name of readdirSync(shardsDir).sort()){
      if(!/^[0-9a-f]{2}\.jsonl$/.test(name))continue;
      const text=readFileSync(new URL(name,shardsDir),'utf8');
      for(const line of text.split(/\r?\n/)){
        if(!line.trim())continue;
        const row=JSON.parse(line);
        if(!row.repository||bucketKey(row.repository)!==name.slice(0,2))throw Error('Invalid source shard: '+name);
        map.set(row.repository.toLowerCase(),row);
      }
    }
  }
  // One-time migration from the earlier monolithic source catalog.
  if(existsSync(indexFile)){
    const old=JSON.parse(readFileSync(indexFile,'utf8'));
    if(old.schema_version===1 && Array.isArray(old.sources)){
      for(const item of old.sources) if(item.repository && !map.has(item.repository.toLowerCase()))
        map.set(item.repository.toLowerCase(),item);
    }else if(old.schema_version!==2)throw Error('Unknown catalog schema');
  }
  return map;
}
function writeCatalog(map,stats){
  mkdirSync(shardsDir,{recursive:true});
  const shards=new Map(hex64.map(x=>[x,[]]));
  for(const row of map.values())shards.get(bucketKey(row.repository)).push(row);
  const used=[];
  for(const [key,rows] of shards){
    const filename=key+'.jsonl',path=new URL(filename,shardsDir);
    if(!rows.length)continue;
    rows.sort((a,b)=>a.repository.toLowerCase().localeCompare(b.repository.toLowerCase(),'en'));
    const contents=rows.map(x=>JSON.stringify(x)).join('\n')+'\n';
    if(!existsSync(path)||readFileSync(path,'utf8')!==contents)writeFileSync(path,contents);
    used.push({path:'harvest/sources/'+filename,count:rows.length});
  }
  const subjectsCount={inorganic:0,organic:0,analytical:0,physical:0,general:0};
  for(const row of map.values())for(const s of row.subjects||['general'])
    if(s in subjectsCount)subjectsCount[s]++;
  const index={schema_version:2,total_sources:map.size,shards:used,subjects:subjectsCount,
    note:'All listed sources are discovery candidates, NOT rights-approved questions. Details live in the linked JSONL shards.'};
  const content=JSON.stringify(index,null,2)+'\n';
  if(!existsSync(indexFile)||readFileSync(indexFile,'utf8')!==content)writeFileSync(indexFile,content);
}
class BudgetDone extends Error{}
class QueryError extends Error{}
// In fast scheduled discovery, split queries into three stable 10-minute shards.
export function selectQueryShard(queries,shard='all',atMs=Date.now()){
  if(!Array.isArray(queries)||!queries.length)throw Error('No queries');
  if(shard==='all')return queries;
  const n=shard==='auto'?Math.floor(atMs/(10*60*1000))%3:Number(shard);
  if(!Number.isInteger(n)||n<0||n>2)throw Error('Invalid fast discovery shard');
  return queries.filter((_,i)=>i%3===n);
}
export function rankingMode(cfg,atMs=Date.now()){
  const modes=cfg.ranking_modes||['updated'];
  if(!Array.isArray(modes)||!modes.length||
     modes.some(m=>!['updated','stars','best_match'].includes(m)))throw Error('Invalid ranking mode');
  return modes[Math.floor(atMs/(30*60*1000))%modes.length];
}
let lastCall=0,requestCount=0;
async function api(q,page,cfg,deadline,ranking){
  for(let attempt=0;attempt<4;attempt++){
    if(requestCount>=cfg.max_requests_per_run||Date.now()>deadline-30000)throw new BudgetDone('Request/time budget reached');
    const wait=Math.max(0,cfg.min_request_interval_ms-(Date.now()-lastCall));
    if(wait)await sleep(wait);
    lastCall=Date.now();requestCount++;
    const sortPart=ranking==='best_match'?'':'&sort='+ranking+'&order=desc';
    const endpoint='https://api.github.com/search/repositories?q='+encodeURIComponent(q)
      +sortPart+'&per_page='+cfg.per_page+'&page='+page;
    let response;
    try{response=await fetch(endpoint,{headers,signal:AbortSignal.timeout(45000)});}
    catch(e){
      if(attempt===3)throw new QueryError('Network error: '+e.message);
      await sleep(3000*(attempt+1));continue;
    }
    if(response.ok){
      const data=await response.json();
      if(!Array.isArray(data.items))throw new QueryError('Bad search response');
      return data;
    }
    if(response.status===422)throw new QueryError('Invalid or inaccessible GitHub query: '+q);
    if(response.status===403||response.status===429){
      const remain=response.headers.get('x-ratelimit-remaining');
      const reset=Number(response.headers.get('x-ratelimit-reset')||'0')*1000;
      const retry=Number(response.headers.get('retry-after')||'0');
      // Respect primary and secondary GitHub limits.
      const delay=retry>0?retry*1000+1000:remain==='0'&&reset>Date.now()
        ?reset-Date.now()+1000:60000*(2**attempt);
      if(Date.now()+delay>deadline-15000)throw new BudgetDone('API rate-limited near deadline');
      if(attempt===3)throw new QueryError('API rate limit persists: HTTP '+response.status);
      console.warn('Search rate limit; waiting '+Math.ceil(delay/1000)+'s');
      await sleep(delay);continue;
    }
    if(response.status>=500&&attempt<3){await sleep(3000*(attempt+1));continue;}
    throw new QueryError('GitHub search HTTP '+response.status+' for '+q+' page '+page);
  }
  throw new QueryError('Search failed after retries');
}
function summary(lines){
  console.log(lines.join('\n'));
  if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,lines.join('\n')+'\n');
}
export async function run(){
  if(!token)throw Error('GITHUB_TOKEN required');
  const cfg=JSON.parse(readFileSync(configFile,'utf8'));
  if(cfg.schema_version!==2||!Array.isArray(cfg.queries)||cfg.queries.length===0)throw Error('Invalid discovery config');
  if(cfg.per_page!==100||cfg.max_pages_per_query!==10||
    !Number.isInteger(cfg.max_requests_per_run)||!Number.isInteger(cfg.max_catalog_entries))throw Error('Invalid search bounds');
  const map=loadCatalog(),previous=map.size,day=stamp().slice(0,10);
  const ranking=rankingMode(cfg);
  const querySubset=selectQueryShard(cfg.queries,process.env.CHEMISTRY_QUERY_SHARD||'all');
  const deadline=Date.now()+cfg.max_runtime_minutes*60000;
  let searches=0,matched=0,added=0,updated=0,filtered=0,capped=0,incomplete=0;
  const errors=[],queryCaps=[];
  searchLoop: for(const query of querySubset){
    let maxPages=cfg.max_pages_per_query;
    for(let page=1;page<=maxPages;page++){
      let data;
      try{data=await api(query,page,cfg,deadline,ranking);}
      catch(e){
        if(e instanceof BudgetDone){errors.push(e.message);break searchLoop;}
        errors.push('Query '+query+' page '+page+': '+e.message);break;
      }
      searches++;matched+=data.items.length;
      if(page===1){
        maxPages=requestedPages(Number(data.total_count)||0,cfg.per_page,cfg.max_pages_per_query);
        if(data.total_count>1000)queryCaps.push(query+' ('+data.total_count+' results; API exposes first 1000)');
      }
      if(data.incomplete_results)incomplete++;
      for(const item of data.items){
        const row=canonicalRepo(item,day);
        if(!row){filtered++;continue;}
        const key=row.repository.toLowerCase(),prev=map.get(key);
        if(!prev){
          if(map.size>=cfg.max_catalog_entries){capped++;continue;}
          map.set(key,row);added++;continue;
        }
        const merged={...row,first_discovered:prev.first_discovered||day,status:prev.status||row.status};
        if(JSON.stringify(prev)!==JSON.stringify(merged)){map.set(key,merged);updated++;}
      }
      if(data.items.length<cfg.per_page)break;
    }
  }
  if(searches===0)throw Error('No successful GitHub Search request; '+errors.join('; '));
  writeCatalog(map);
  summary(['### University chemistry source harvest',
    '- Search ranking this run: '+ranking+' (30-minute rotation)',
    '- Queries scheduled this run: '+querySubset.length+'/'+cfg.queries.length+
     ' (shard='+String(process.env.CHEMISTRY_QUERY_SHARD||'all')+')',
    '- GitHub Search API requests: '+requestCount+' (successful: '+searches+')',
    '- Raw result hits (may repeat): '+matched,'- Filtered out as irrelevant/forks/archived: '+filtered,
    '- New unique source candidates: '+added,'- Refreshed metadata: '+updated,
    '- Catalog: '+previous+' -> '+map.size+' (64 possible catalog shards)',
    '- Over configured catalog cap: '+capped,'- Search responses marked incomplete: '+incomplete,
    '- Queries hitting GitHub 1,000-result ceiling: '+queryCaps.length,
    '- Nonfatal search interruptions: '+errors.length,
    '- NO unapproved question content was downloaded or published.',
    ...errors.slice(0,8).map(x=>'- Warning: '+x),
    ...queryCaps.slice(0,6).map(x=>'- Capped query: '+x)]);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  run().catch(e=>{console.error(e);process.exitCode=1;});
}
