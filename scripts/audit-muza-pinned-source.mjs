#!/usr/bin/env node
// Final five Muza source records: pinned Git blob and item-by-item stored replay.
// Source concordance DOES NOT equal chemical correctness, third-party rights clearance,
// experimental safety, or eligibility for an exam.
import {readFileSync,readdirSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {mapRecord,buildCandidate,validateSource} from './import-approved-chemistry.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='MuzaPro/Organic-Chemistry-Quiz-JS';
const REV='71f3262bce0eba6c7e1cb0814394f1e04b6a9dbc';
const BLOBS={'data/questions.json':'e4fde59d9f5faa1ff0ed82fa57ae7b05f276292a',
 'LICENSE':'4ef30f44a9a6ade70614188412f98c76aaa3b14e',
 'README.md':'b231e039fcacc2145a5275f197e55a645c22f99b'};
const IDs=['q1','q2','q3','q4','q5'];
const canonical=x=>Array.isArray(x)?'['+x.map(canonical).join(',')+']':
 (x&&typeof x==='object')?'{'+Object.keys(x).sort().map(k=>JSON.stringify(k)+':'+canonical(x[k])).join(',')+'}':JSON.stringify(x);
function sha(bytes){
 return createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
}
export function assertItem(expected,saved,s){
 if(expected?.id!==saved?.id||s.repository!==REPO||s.commit!==REV||
  saved.publishable!==false||saved.quality_status!=='awaiting_expert_review'||
  saved.source?.content_rights_verified!==true||
  saved.source?.original_id!==expected.source.original_id||
  !IDs.includes(saved.source.original_id))
  throw Error('Muza source item rights or approval changed');
 if(canonical(saved)!==canonical(expected))
  throw Error('Muza pinned question, answer or source provenance differs: '+expected.id);
 return true;
}
export function auditItems(raw,s,rows,review){
 validateSource(s);
 if(s.repository!==REPO||s.commit!==REV||s.license!=='MIT'||
   s.files.length!==1||s.files[0].path!=='data/questions.json'||
   s.files[0].format!=='organic-reaction-quiz'||
   !Array.isArray(raw?.questions)||raw.questions.length!==5||
   review?.repository!==REPO||review.upstream_commit!==REV||
   review.upstream_data_git_blob_sha!==BLOBS['data/questions.json']||
   review.license_git_blob_sha!==BLOBS.LICENSE||
   review.expert_approved!==0||review.publishable!==false||
   review.per_item_review?.length!==5)
  throw Error('Muza dataset rights, Git SHA or scientific exception review drift');
 const byId=new Map(),savedBySource=new Map(),items=[];
 for(const x of rows){
  if(byId.has(x.id))throw Error('Duplicated candidate hash');
  byId.set(x.id,x);
  if(x.source?.repository===REPO){
   if(savedBySource.has(x.source.original_id))throw Error('Repeated Muza source item');
   savedBySource.set(x.source.original_id,x);
  }
 }
 const notes=new Map(review.per_item_review.map(x=>[x.source_id,x]));
 if(notes.size!==5||savedBySource.size!==5||
  !['q2','q4','q5'].every(x=>['requires_conditions_review','requires_catalyst_review','requires_workup_review']
    .includes(notes.get(x)?.status)))
  throw Error('Three published-source chemistry caveats not retained');
 const rights=s.license_evidence;
 if(!rights?.scope_note?.includes('third-party content claims have not been independently proven'))
  throw Error('Muza third-party item rights disclaimer lost');
 for(let i=0;i<5;i++){
  const row=raw.questions[i],scientific=notes.get(row?.id);
  if(row?.id!==IDs[i]||!scientific||!Array.isArray(row.reagents)||
   !Array.isArray(row.correctReagents)||row.correctReagents.length!==2)
   throw Error('Muza pinned record order, source answer mapping, or review changed');
  const mapped=mapRecord(row,s.files[0]);
  const expected=buildCandidate(mapped,s,s.files[0],i);
  const saved=byId.get(expected?.id);
  if(!saved)throw Error('Missing five-question source candidate: '+row.id);
  assertItem(expected,saved,s);
  items.push({source_id:row.id,candidate_id:saved.id,
   source_git_blob_sha:BLOBS['data/questions.json'],
   source_and_saved_answer_match:true,
   existing_science_review_status:scientific.status,
   existing_scientific_review_concern:scientific.issue,
   source_rights_author_claims_human_verified:false,
   independent_scientific_expert_approved:false,
   eligible_for_exam:false});
 }
 return {schema_version:1,source_repository:REPO,source_commit:REV,
  source_git_blobs:BLOBS,matched_persisted_source_exercises:5,
  fixed_question_ids:IDs,scientifically_qualified_for_exam:0,
  source_only_licensing_evidence_not_third_party_item_proof:true,
  unresolved_science_condition_concerns:3,
  human_expert_approved:0,exam_ready:0,items,
  caveat:'Five saved candidate answers agree with one pinned MIT project question database; q2/q4/q5 require assumptions, catalyst, workup, and competing-reaction review. Not independent science verification or formal examination approval.'};
}
async function fetchPinned(path){
 const response=await fetch('https://raw.githubusercontent.com/'+REPO+'/'+REV+'/'+path,{
  signal:AbortSignal.timeout(90000)});
 if(!response.ok)throw Error('Pinned Muza source unavailable '+path);
 const bytes=Buffer.from(await response.arrayBuffer());
 if(sha(bytes)!==BLOBS[path])throw Error('Pinned Muza Git blob hash mismatch '+path);
 return bytes.toString('utf8');
}
export async function run(){
 const manifest=JSON.parse(readFileSync(join(ROOT,'harvest/approved_imports.json'),'utf8'));
 const s=manifest.approved_sources.find(x=>x.repository===REPO);
 const [raw,license,readme]=await Promise.all([
  fetchPinned('data/questions.json'),fetchPinned('LICENSE'),fetchPinned('README.md')]);
 if(!license.includes('MIT License')||!license.includes('Copyright (c) 2025 Muza Studio')||
   !readme.includes('data/questions.json')||!readme.includes('MIT'))
  throw Error('Author license statement or question database scope changed');
 const rows=readdirSync(join(ROOT,'data/candidates')).filter(x=>x.endsWith('.json')).sort()
  .map(x=>JSON.parse(readFileSync(join(ROOT,'data/candidates',x),'utf8')));
 const review=JSON.parse(readFileSync(join(ROOT,
  'harvest/source_reviews/2026-10-27-muzapro-reaction-quality.json'),'utf8'));
 const result=auditItems(JSON.parse(raw),s,rows,review);
 const path=join(ROOT,'harvest/main_muza_pinned_source_replay.json'),
   text=JSON.stringify(result,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==text)writeFileSync(path,text);
 console.log('Muza five pinned original source questions match stored candidates; chemical science 3 concerns, expert approved 0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 run().catch(e=>{console.error(e.stack);process.exitCode=1;});
}
