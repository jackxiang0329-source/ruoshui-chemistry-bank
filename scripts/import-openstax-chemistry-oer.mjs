#!/usr/bin/env node
// High-volume university chemistry OER staging: PINNED source, SHA-1 verified,
// no inferred item rights, no candidate publication, no misleading solved count.
// OpenStax Chemistry historical Markdown mirror (CC BY 3.0 work-level notice).
import {readFileSync,existsSync,mkdirSync,writeFileSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const PIN=join(ROOT,'harvest/pinned_openstax_chemistry.json');
const DIR=join(ROOT,'external_sources/openstax_chemistry');
const OUT=join(DIR,'questions.jsonl'),STATE=join(DIR,'state.json');
const gitSha=content=>{const data=Buffer.from(content,'utf8');return createHash('sha1').update('blob '+data.length+'\0').update(data).digest('hex');};
const sha256=s=>createHash('sha256').update(s).digest('hex');
const normalize=s=>String(s||'').normalize('NFKC').replace(/\s+/g,' ').trim();
export function extractDivBlocks(text,tag){
 const openClose=/<div\b[^>]*>|<\/div\s*>/gi;
 const stack=[],results=[];let match;
 while((match=openClose.exec(text))!==null){
  const isClose=/^<\/div/i.test(match[0]);
  if(!isClose){
   const attr=match[0].match(/\bdata-type\s*=\s*["']([^"']+)["']/i);
   stack.push({kind:attr?.[1]||null,start:match.index,bodyStart:openClose.lastIndex});
  }else{
   const item=stack.pop();
   if(!item)throw Error('Unbalanced exercise HTML closing div');
   if(item.kind===tag)results.push({start:item.start,body:text.slice(item.bodyStart,match.index)});
  }
 }
 if(stack.length)throw Error('Unclosed exercise HTML div');
 return results.sort((a,b)=>a.start-b.start);
}
export function parseChapter(text,{path,sha,repository,commit}){
 if(!/^contents\/m\d+\.md$/.test(path)||!/^[a-f0-9]{40}$/.test(sha)||
    !/^[a-f0-9]{40}$/.test(commit)||repository!=='philschatz/chemistry-book')
  throw Error('Unpinned or unsafe chapter input');
 if(gitSha(text)!==sha)throw Error('Pinned upstream Git blob SHA mismatch: '+path);
 const title=String(text.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1]||path).replace(/["']$/,'');
 const blocks=extractDivBlocks(text,'exercise'),found=[];
 let number=0;
 for(const block of blocks){
  number++;
  const p=extractDivBlocks(block.body,'problem');
  const sol=extractDivBlocks(block.body,'solution');
  if(p.length!==1)continue;
  const question=normalize(p[0].body);
  if(question.length<20||question.length>18000)continue;
  const answer=sol.length===1?normalize(sol[0].body):null;
  const fp=sha256(question.toLowerCase());
  const requiresMedia=/!\[|<img\b|data-type\s*=\s*["']media|(?:\.\.\/resources\/)/i.test(question);
  const requiresMathML=/<math\b/i.test(question);
  found.push({id:'OSCHEM-'+fp.slice(0,24),question_sha256:fp,
   question,answer:answer?.length?answer:null,
   source_repository:repository,source_commit:commit,source_path:path,source_blob_sha:sha,
   source_exercise_ordinal:number,chapter_title:title,
   source_url:'https://github.com/'+repository+'/blob/'+commit+'/'+path,
   work_license:'CC-BY-3.0',work_license_notice:'Copyright 2014 OpenStax College',
   content_rights_verified:false,item_level_rights_review_pending:true,
   requires_media:requiresMedia,requires_mathml:requiresMathML,
   has_source_solution:Boolean(answer?.length),
   quality_status:'unverified_external_staging',publishable:false,exam_ready:false,
   scientific_solution_verified:false,semantic_duplicate_review_pending:true});
 }
 return {exercises:found,blocks_seen:blocks.length};
}
export function validateManifest(m){
 if(m?.schema_version!==1||m.repository!=='philschatz/chemistry-book'||
   m.commit!=='a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2'||
   m.tree_sha!==m.commit||m.license_blob_sha!=='83863a52718b273acbf27c1a0dc91a28f9c94ea5'||
   m.work_license!=='CC-BY-3.0'||m.items_rights_auto_approved!==false||
   !Array.isArray(m.files)||m.files.length<140)throw Error('Unsafe OpenStax work license or pin');
 const seen=new Set();
 for(const x of m.files){
  if(!/^contents\/m\d+\.md$/.test(x.path)||!/^[a-f0-9]{40}$/.test(x.sha)||
     !Number.isInteger(x.size)||x.size<1||x.size>2_000_000||seen.has(x.path))
    throw Error('Unsafe OpenStax pinned chapter list');
  seen.add(x.path);
 }
 return true;
}
export function mergeStaging(old,more){
 const byId=new Map();
 for(const row of [...old,...more]){
  if(row.publishable!==false||row.exam_ready!==false||row.quality_status!=='unverified_external_staging'||
     row.content_rights_verified!==false||row.item_level_rights_review_pending!==true)
    throw Error('Unapproved exercise cannot be promoted via staging');
  const prior=byId.get(row.id);
  if(prior){
   if(prior.question!==row.question||prior.question_sha256!==row.question_sha256)
    throw Error('Staging ID collision with altered exercise');
   continue;
  }
  byId.set(row.id,row);
 }
 return [...byId.values()].sort((a,b)=>a.id.localeCompare(b.id));
}
function atomic(path,data){
 const tmp=path+'.tmp';writeFileSync(tmp,data);renameSync(tmp,path);
}
export async function run({maxFiles=40,maxExercises=1000,fetchText=async url=>{
 const res=await fetch(url,{headers:{'User-Agent':'ruoshui-chemistry-oer-pin-audit'},
  signal:AbortSignal.timeout(20000)});
 if(!res.ok)throw Error('HTTP '+res.status);return res.text();
}}={}){
 if(!Number.isInteger(maxFiles)||maxFiles<1||maxFiles>70||
  !Number.isInteger(maxExercises)||maxExercises<1||maxExercises>2500)
  throw Error('Invalid bounded fetch limits');
 const pin=JSON.parse(readFileSync(PIN,'utf8'));validateManifest(pin);
 const existing=existsSync(OUT)?readFileSync(OUT,'utf8').split(/\r?\n/).filter(Boolean).map(x=>JSON.parse(x)):[];
 const state=existsSync(STATE)?JSON.parse(readFileSync(STATE,'utf8')):{schema_version:1,processed_paths:[]};
 if(state.schema_version!==1||!Array.isArray(state.processed_paths)||
    state.processed_paths.some(x=>!pin.files.find(f=>f.path===x)))
  throw Error('Invalid historic OER staging state');
 const done=new Set(state.processed_paths),todo=pin.files.filter(x=>!done.has(x.path)).slice(0,maxFiles);
 const additions=[],completed=[],failures=[];let cursor=0,blocks=0;
 const worker=async()=>{
  for(;;){
   const j=cursor++;if(j>=todo.length)return;
   const item=todo[j];
   try{
    const url='https://raw.githubusercontent.com/'+pin.repository+'/'+pin.commit+'/'+item.path;
    const raw=await fetchText(url);
    const {exercises,blocks_seen}=parseChapter(raw,{path:item.path,sha:item.sha,
     repository:pin.repository,commit:pin.commit});
    blocks+=blocks_seen;
    additions.push(...exercises);
    completed.push(item.path);
   }catch(e){failures.push({path:item.path,reason:String(e.message||e).slice(0,180)});}
  }
 };
 await Promise.all(Array.from({length:6},()=>worker()));
 if(todo.length&&completed.length===0)throw Error('Every OER fetch failed; preserve previous state');
 if(additions.length>maxExercises)throw Error('Exercise extraction exceeded bounded per-run budget; preserve previous state');
 const merged=mergeStaging(existing,additions);
 const added=merged.length-existing.length;
 const processed=[...done,...completed].sort();
 const stats={schema_version:1,source:'OpenStax Chemistry (historical 2014 mirror)',
  source_repository:pin.repository,source_commit:pin.commit,work_license:pin.work_license,
  discovered_source_chapters:pin.files.length,chapters_inspected:processed.length,
  chapters_remaining:pin.files.length-processed.length,
  raw_staged_candidates:merged.length,last_batch_new:added,
  last_batch_source_exercise_blocks:blocks,last_batch_chapters:completed.length,
  last_batch_failures:failures,
  with_source_solution:merged.filter(x=>x.has_source_solution).length,
  requiring_media:merged.filter(x=>x.requires_media).length,
  requiring_mathml:merged.filter(x=>x.requires_mathml).length,
  item_rights_approved:0,expert_approved:0,exam_ready:0,
  note:'Separate archived OpenStax CC BY 3.0 work-level OER. Extracted exercise blocks are UNVERIFIED English raw candidate content, not independent validated questions or approved exam bank. Figures, MathML, source accuracy, any third-party content and item reuse rights require review.'};
 mkdirSync(DIR,{recursive:true});
 atomic(OUT,merged.map(x=>JSON.stringify(x)).join('\n')+(merged.length?'\n':''));
 atomic(STATE,JSON.stringify({schema_version:1,processed_paths:processed},null,2)+'\n');
 atomic(join(DIR,'coverage.json'),JSON.stringify(stats,null,2)+'\n');
 console.log('OpenStax Chemistry raw staged='+merged.length+' new='+added+
  ' chapters='+processed.length+'/'+pin.files.length+
  ' with_answer='+stats.with_source_solution+' exam_ready=0 failed='+failures.length);
 if(process.env.GITHUB_STEP_SUMMARY)
  writeFileSync(process.env.GITHUB_STEP_SUMMARY,
   '\n### OpenStax chemistry archive\nStaged '+merged.length+' source exercises; new '+added+
   '; chapters '+processed.length+'/'+pin.files.length+
   '; expert approved 0; work-license only, individual rights pending.\n',{flag:'a'});
 return stats;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 run({maxFiles:70,maxExercises:2500}).catch(e=>{console.error(e.stack);process.exitCode=1;});
}
