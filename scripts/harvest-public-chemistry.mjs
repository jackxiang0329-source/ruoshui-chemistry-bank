#!/usr/bin/env node
// Metadata discovery ONLY: external source licenses are not question/content permissions.
import {readFileSync,writeFileSync,readdirSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const ROOT=new URL('../',import.meta.url);
const CONFIG=new URL('harvest/public_dataset_queries.json',ROOT);
const INDEX=new URL('harvest/external_source_catalog.json',ROOT);
const SHARDS=new URL('harvest/external_sources/',ROOT);
const CHEM=/chem|electrochem|spectro|titration|stoichiometr|thermodynamic|molecul|kinetic|分析化学|物理化学|有机化学|化学|滴定|色谱/i;
const TODAY=()=>new Date().toISOString().slice(0,10);
const safe=s=>String(s||'').replace(/[\u0000-\u001f]+/g,' ').replace(/\s+/g,' ').trim().slice(0,480);
export const bucket=item=>createHash('sha256').update(item.platform+':'+item.id.toLowerCase()).digest('hex')[0];
export const subjects=text=>{
 const t=String(text||'').toLowerCase(),a=[];
 if(/analytical|titration|chromatograph|spectrometr|gravimetr|分析化学|滴定|色谱/.test(t))a.push('analytical');
 if(/physical|thermodynam|kinetic|electrochem|calorimetr|量子化学|物理化学|热力学/.test(t))a.push('physical');
 if(/organic|synthesis|有机化学/.test(t))a.push('organic');
 if(/inorganic|coordination|无机化学/.test(t))a.push('inorganic');
 return a.length?a:['general'];
};
export function fromHf(item,term,stamp='2026-10-27'){
 if(!item||typeof item.id!=='string'||!/^[\w.-]+\/[\w.-]+$/.test(item.id)||
   item.private||item.gated&&item.gated!=='false')return null;
 const tags=Array.isArray(item.tags)?item.tags.filter(x=>typeof x==='string').slice(0,40):[];
 const corpus=[item.id,item.description||'',tags.join(' ')].join(' ');
 if(!CHEM.test(corpus))return null;
 const lic=tags.find(x=>x.startsWith('license:'))?.slice(8)||item.cardData?.license||'UNVERIFIED';
 return {platform:'huggingface',id:item.id,url:'https://huggingface.co/datasets/'+item.id,
  title:safe(item.id),subjects:subjects(corpus+' '+term),description:safe(item.description),
  claimed_license:safe(lic),upstream_sha:/^[0-9a-f]{40}$/.test(item.sha||'')?item.sha:null,
  rights:'metadata_claim_not_question_redistribution_approval',status:'unreviewed_not_importable',
  first_discovered:stamp};
}
export function fromZenodo(item,term,stamp='2026-10-27'){
 if(!item||!Number.isSafeInteger(item.id)||item.id<1)return null;
 const title=safe(item.metadata?.title),desc=safe(item.metadata?.description);
 if(!CHEM.test(title+' '+desc))return null;
 const lic=item.metadata?.license;
 return {platform:'zenodo',id:String(item.id),url:'https://zenodo.org/records/'+item.id,
  title,subjects:subjects(title+' '+desc+' '+term),description:desc,
  claimed_license:safe(typeof lic==='object'?lic?.id:lic)||'UNVERIFIED',
  upstream_sha:null,rights:'metadata_claim_not_question_redistribution_approval',
  status:'unreviewed_not_importable',first_discovered:stamp};
}
const id=item=>item.platform+':'+item.id.toLowerCase();
export function loadCatalog(){
 const map=new Map();
 if(!existsSync(SHARDS))return map;
 for(const name of readdirSync(SHARDS)){
  if(!/^[0-9a-f]\.jsonl$/.test(name))continue;
  for(const line of readFileSync(new URL(name,SHARDS),'utf8').split('\n')){
   if(!line.trim())continue;
   const row=JSON.parse(line);
   if(bucket(row)!==name[0])throw Error('Catalog shard mismatch: '+name);
   map.set(id(row),row);
  }
 }
 return map;
}
export function saveCatalog(map){
 mkdirSync(SHARDS,{recursive:true});
 const groups=new Map([... '0123456789abcdef'].map(k=>[k,[]]));
 for(const row of map.values())groups.get(bucket(row)).push(row);
 const shards=[];
 for(const [key,rows] of groups){
  if(!rows.length)continue;
  rows.sort((a,b)=>id(a).localeCompare(id(b)));
  const path=new URL(key+'.jsonl',SHARDS),content=rows.map(x=>JSON.stringify(x)).join('\n')+'\n';
  if(!existsSync(path)||readFileSync(path,'utf8')!==content)writeFileSync(path,content);
  shards.push({path:'harvest/external_sources/'+key+'.jsonl',count:rows.length});
 }
 const counts={huggingface:0,zenodo:0};
 for(const item of map.values())counts[item.platform]=(counts[item.platform]||0)+1;
 const index={schema_version:1,total_candidates:map.size,platform_counts:counts,shards,
  note:'Source metadata only. A claimed license is NOT question-text rights approval. All records are unreviewed and never imported as questions.'};
 const content=JSON.stringify(index,null,2)+'\n';
 if(!existsSync(INDEX)||readFileSync(INDEX,'utf8')!==content)writeFileSync(INDEX,content);
 return index;
}
async function getJSON(url,timeout){
 const res=await fetch(url,{headers:{Accept:'application/json','User-Agent':'ruoshui-chemistry-metadata-collector'},
  signal:AbortSignal.timeout(timeout)});
 if(!res.ok)throw Error('HTTP '+res.status+' from '+new URL(url).host);
 return res.json();
}
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
export async function run(fetchJSON=getJSON){
 const config=JSON.parse(readFileSync(CONFIG,'utf8'));
 if(config.schema_version!==1||!Array.isArray(config.hf_terms)||!Array.isArray(config.zenodo_terms)||
  config.max_parallel<1||config.max_parallel>4||config.max_records<500||
  config.request_timeout_ms<3000||config.request_timeout_ms>60000)throw Error('Unsafe external discovery config');
 const catalog=loadCatalog(),prior=catalog.size;
 const queue=[...config.hf_terms.map(term=>({platform:'huggingface',term})),
 ...config.zenodo_terms.map(term=>({platform:'zenodo',term}))];
 let next=0,successful=0,added=0,repeats=0,raw=0,filtered=0;
 const errors=[],stamp=TODAY();
 const worker=async()=>{
  for(;;){
   const i=next++;if(i>=queue.length)return;
   const job=queue[i],url=job.platform==='huggingface'
    ?'https://huggingface.co/api/datasets?search='+encodeURIComponent(job.term)+
      '&limit='+config.hf_limit
    :'https://zenodo.org/api/records?q='+encodeURIComponent(job.term)+'&size='+config.zenodo_limit;
   try{
    const data=await fetchJSON(url,config.request_timeout_ms);
    const found=job.platform==='huggingface'?data:data?.hits?.hits;
    if(!Array.isArray(found))throw Error('Expected array of '+job.platform+' records');
    successful++;raw+=found.length;
    for(const record of found){
     const item=job.platform==='huggingface'?fromHf(record,job.term,stamp):fromZenodo(record,job.term,stamp);
     if(!item){filtered++;continue;}
     const key=id(item);
     if(catalog.has(key)){repeats++;continue;}
     if(catalog.size>=config.max_records)break;
     catalog.set(key,item);added++;
    }
   }catch(e){errors.push(job.platform+' '+job.term+': '+String(e.message||e).slice(0,190));}
   await sleep(config.sleep_ms);
  }
 };
 await Promise.all(Array.from({length:config.max_parallel},()=>worker()));
 const idx=saveCatalog(catalog);
 const lines=['### Chemistry cross-platform metadata discovery',
 '- Queries: '+queue.length+'; successful: '+successful+'; failed: '+errors.length,
 '- Raw matches: '+raw+'; filtered: '+filtered+'; repeated: '+repeats,
 '- New unique external source records: '+added+'; catalog: '+prior+' -> '+idx.total_candidates,
 '- Content-license authorizations and new question files from this task: 0',
 ...errors.slice(0,15).map(e=>'- Warning: '+e)];
 console.log(lines.join('\n'));
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,lines.join('\n')+'\n');
 return {successful,failed:errors.length,added,total:idx.total_candidates};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 run().catch(e=>{console.error(e.stack);process.exitCode=1;});
}
