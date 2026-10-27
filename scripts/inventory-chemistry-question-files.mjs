#!/usr/bin/env node
// Enumerate candidate files for licensed-looking chemistry repositories.
// Metadata-only: NEVER fetch question text, images or datasets, or approve redistribution.
import {readFileSync,writeFileSync,existsSync,appendFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const ROOT=new URL('../',import.meta.url);
const LEDGER=new URL('harvest/license_preflight.json',ROOT);
const OUTPUT=new URL('harvest/content_inventory.json',ROOT);
const FILES=/\.(?:json|jsonl|csv|tsv|md|markdown|tex|ipynb|txt|yaml|yml)$/i;
const QUESTION=/(?:questions?|quiz|exams?|worksheets?|exercises?|problems?|assignments?|homework|assessments?|testbank|test_bank|practice.?test|习题|试题|练习|题库)/i;
const ANSWER=/(?:answers?|solutions?|worked|explanations?|(?:^|[-_. ])key(?:[-_. ]|$)|解析|解答|答案)/i;
const METADATA=/(?:^|[_-])(?:meta|metadata|manifest|index|README)(?:[_-]|\.)/i;
const EXTERNAL_EXAM_FOLDER=/(?:^|\/)(?:mds_exams|scraped_exams|copied_exams|publisher_content|third_party_questions|past_papers)(?:\/|$)/i;
export const INSPECTION_VERSION=2;
const basename=path=>path.slice(path.lastIndexOf('/')+1);
const stem=path=>basename(path).replace(/\.[^.]+$/,'').toLowerCase()
 .replace(/(?:^|[-_. ])(?:answers?|solutions?|key)(?:[-_. ]|$)/g,' ')
 .replace(/[-_. ]+(?:meta|metadata)$/,'').replace(/[-_. ]+/g,' ').trim();

const SKIP=/(?:^|\/)(?:node_modules|dist|build|vendor|third_party|\.git|assets|images|img|figures|venv|site-packages)\//i;
const limited=(x,n)=>String(x||'').slice(0,n);
export function inspectTree(repo,sha,items,truncated=false){
 if(!Array.isArray(items))throw Error('Unparseable repository git tree');
 const paths=items.filter(x=>x.type==='blob'&&typeof x.path==='string'&&
  x.path.length<260&&!SKIP.test(x.path)&&FILES.test(x.path) &&
  !/(?:^|\/)\.ipynb_checkpoints\//i.test(x.path)).map(x=>x.path);
 const questionPaths=[],answerPaths=[];
 for(const path of paths){
  const name=basename(path);
  if(METADATA.test(name)||/_(?:meta|metadata)\.(?:json|yaml|yml)$/i.test(name))continue;
  if(ANSWER.test(name)||/(?:^|\/)(?:answers?|solutions?|答案|解答)\//i.test(path)){
   answerPaths.push(path);continue;
  }
  if(QUESTION.test(name))questionPaths.push(path);
 }
 const notebooks=paths.filter(x=>/\.ipynb$/i.test(x));
 const exerciseFiles=questionPaths.filter(x=>/\.(?:csv|json|jsonl|tex|md|txt|ipynb)$/i.test(x));
 const answerStems=new Set(answerPaths.map(stem));
 const possiblePairs=questionPaths.filter(x=>answerStems.has(stem(x))).length;
 const externalExamPaths=paths.filter(path=>EXTERNAL_EXAM_FOLDER.test(path));
 const score=Math.min(50,questionPaths.length*4)+Math.min(30,answerPaths.length*8)+
  Math.min(15,notebooks.length*2)+(possiblePairs?15:0)-(truncated?15:0)-
  (externalExamPaths.length?25:0);
 return {repository:repo,source_head_sha:sha,source_tree_truncated:Boolean(truncated),
  inspection_rule_version:INSPECTION_VERSION,
  candidate_question_files:questionPaths.length,candidate_answer_files:answerPaths.length,
  notebook_files:notebooks.length,exercise_data_file_count:exerciseFiles.length,
  possible_filename_matched_question_answer_pairs:possiblePairs,
  external_assessment_directory_signals:externalExamPaths.length,
  suspect_third_party_assessment_material:externalExamPaths.length>0,
  candidate_question_paths:questionPaths.slice(0,30),
  candidate_answer_paths:answerPaths.slice(0,20),
  metadata_priority_score:score,
  content_rights:'NOT_VERIFIED',question_answers_scientifically_verified:false,
  import_eligible:false,third_party_rights_must_be_checked:true,
  interpretation:'Filenames, NOT file contents. Matching stems are only hints, not confirmed answers; suspect external assessments require item-level permission. Nothing approved for import.'};
}
export function selectLegacyRefresh(preflight,reviewed,limit=4){
 if(!Number.isInteger(limit)||limit<1||limit>8)throw Error('Unsafe legacy refresh budget');
 return Object.entries(reviewed).filter(([repo,x])=>
  preflight[repo]?.repository_license_file_present===true &&
  (x?.inspection_rule_version||0)<INSPECTION_VERSION)
  .sort((a,b)=>(b[1]?.candidate_question_files||0)-(a[1]?.candidate_question_files||0)||
    a[0].localeCompare(b[0]))
  .slice(0,limit).map(([repo])=>repo);
}
export function selectForInventory(preflight,reviewed,limit=12){
 if(!preflight||typeof preflight!=='object'||!reviewed||typeof reviewed!=='object')throw Error('Missing metadata inventories');
 if(!Number.isInteger(limit)||limit<1||limit>16)throw Error('Unsafe metadata inventory budget');
 const a=Object.entries(preflight).filter(([key,x])=>
  /^[\w.-]+\/[\w.-]+$/.test(key)&&!Object.hasOwn(reviewed,key)&&
  x?.repository_license_file_present===true&&x?.third_party_content_risk!==true);
 a.sort((a,b)=>{
  const rank=x=>(x.subjects?.includes('analytical')?20:0)+(x.subjects?.includes('physical')?19:0)+
    (x.claimed_original_exercise_rights_in_readme?10:0);
  return rank(b[1])-rank(a[1])||a[0].localeCompare(b[0]);
 });
 return a.slice(0,limit).map(([repo])=>repo);
}
async function github(path,token){
 const url='https://api.github.com/repos/'+path;
 const response=await fetch(url,{headers:{'User-Agent':'ruoshui-chemistry-repo-metadata-inventory',
   Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28',
   Authorization:'Bearer '+token},signal:AbortSignal.timeout(22000)});
 if(!response.ok)throw Error('GitHub metadata API HTTP '+response.status+' '+limited(path,120));
 return response.json();
}
export async function run({token=process.env.GITHUB_TOKEN,fetchJSON=github}={}){
 if(!token)throw Error('GITHUB_TOKEN required for public repository metadata inventory');
 const p=JSON.parse(readFileSync(LEDGER,'utf8'));
 if(p.schema_version!==1||!p.checked||typeof p.checked!=='object')throw Error('Malformed license ledger');
 const old=existsSync(OUTPUT)?JSON.parse(readFileSync(OUTPUT,'utf8')):{
  schema_version:1,checked:{},note:'Filename inventory only; all item-level rights and answer correctness remain unverified.'};
 if(old.schema_version!==1||!old.checked||typeof old.checked!=='object')throw Error('Unsafe prior inventory');
 const refresh=selectLegacyRefresh(p.checked,old.checked,4);
 const batch=[...refresh,...selectForInventory(p.checked,old.checked,8)];
 let cursor=0,added=0;const errors=[];
 const worker=async()=>{
  for(;;){
   const i=cursor++;if(i>=batch.length)return;
   const name=batch[i];
   try{
    const repo=await fetchJSON(name,token);
    if(!repo?.default_branch||!/^[\w./-]{1,140}$/.test(repo.default_branch))throw Error('Unknown default branch');
    const tree=await fetchJSON(name+'/git/trees/'+encodeURIComponent(repo.default_branch)+'?recursive=1',token);
    if(!/^[a-f0-9]{40}$/.test(tree.sha||''))throw Error('Source tree SHA missing');
    old.checked[name]=inspectTree(name,tree.sha,tree.tree,tree.truncated);
    added++;
   }catch(e){errors.push(name+' '+String(e.message||e).slice(0,110));}
  }
 };
 await Promise.all(Array.from({length:3},()=>worker()));
 old.checked=Object.fromEntries(Object.entries(old.checked).sort(([a],[b])=>a.localeCompare(b)));
 old.total_inventoried=Object.keys(old.checked).length;
 old.with_question_file_signal=Object.values(old.checked).filter(x=>x.candidate_question_files>0).length;
 old.with_filename_matched_question_answer_signals=Object.values(old.checked).filter(x=>x.possible_filename_matched_question_answer_pairs>0).length;
 old.suspected_third_party_assessment_sources=Object.values(old.checked).filter(x=>x.suspect_third_party_assessment_material===true).length;
 old.inspection_rule_version=INSPECTION_VERSION;
 old.with_question_and_answer_file_signals=Object.values(old.checked).filter(x=>x.candidate_question_files>0&&x.candidate_answer_files>0).length;
 old.content_reuse_approved=0;
 old.last_batch_new=added;
 old.last_batch_errors=errors;
 const data=JSON.stringify(old,null,2)+'\n';
 if(!existsSync(OUTPUT)||readFileSync(OUTPUT,'utf8')!==data)writeFileSync(OUTPUT,data);
 const msg='Chemistry candidate file inventory: new='+added+'/'+batch.length+
  ', inventoried_total='+old.total_inventoried+
  ', with_question_files='+old.with_question_file_signal+
  ', possible_filename_pairs='+old.with_filename_matched_question_answer_signals+
  ', external_exam_flags='+old.suspected_third_party_assessment_sources+
  ', with_question_and_answer_files='+old.with_question_and_answer_file_signals+
  ', approved_question_copies=0, errors='+errors.length;
 console.log(msg);for(const e of errors.slice(0,6))console.warn(e);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,errors};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 run().catch(e=>{console.error(e.stack);process.exitCode=1;});
}
