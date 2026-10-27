#!/usr/bin/env node
// Bounded provenance preflight for prioritized chemistry repositories.
// Only LICENSE/README metadata, no question data, no approval or import.
import {readFileSync,writeFileSync,existsSync,appendFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const ROOT=new URL('../',import.meta.url),QUEUE=new URL('harvest/source_review_queue.json',ROOT);
const OUT=new URL('harvest/license_preflight.json',ROOT);
const TOKEN=process.env.GITHUB_TOKEN;
export const sortKeys=r=>Object.fromEntries(Object.entries(r).sort(([a],[b])=>a.localeCompare(b)));
export function selectedForReview(queue,reviewed,limit=40){
 if(!Array.isArray(queue)||!Number.isInteger(limit)||limit<1||limit>48)throw Error('Invalid preflight query');
 const seen=new Set();
 return queue.filter(x=>{
  const name=String(x.repository||'');
  if(!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(name)||seen.has(name.toLowerCase())||
    Object.hasOwn(reviewed,name.toLowerCase()))return false;
  seen.add(name.toLowerCase());return true;
 }).sort((a,b)=>{
  const al=a.repository_license_spdx&&!['UNKNOWN','NOASSERTION'].includes(a.repository_license_spdx)?1:0;
  const bl=b.repository_license_spdx&&!['UNKNOWN','NOASSERTION'].includes(b.repository_license_spdx)?1:0;
  return (bl-al)*15+(b.score-a.score);
 }).slice(0,limit);
}
export function summariseEvidence(row,license,readme){
 const text=String(readme?.text||'').slice(0,150000);
 const thirdParty=/(past exam|past quiz|textbook|solution manual|previous exam|copyrighted|reproduced from|based on.+textbook|commercial course|third.party|考试真题|教材习题|历年真题)/i.test(text+' '+(row.repository||''));
 const authorClaims=/(?:original|created by|authored by|our own).{0,70}(?:questions|exercises|problem set)|(?:questions|exercises).{0,90}(?:cc.by|cc0|public domain)/i.test(text);
 const fileLicense=Boolean(license?.sha);
 return {repository:row.repository,url:row.url,subjects:row.subjects,
  discovery_license_spdx:row.repository_license_spdx||'UNKNOWN',
  repository_license_file_present:fileLicense,
  license_file_git_blob_sha:license?.sha||null,
  readme_file_git_blob_sha:readme?.sha||null,
  third_party_content_risk:thirdParty,
  claimed_original_exercise_rights_in_readme:authorClaims,
  candidate_for_content_rights_review:fileLicense&&!thirdParty,
  question_content_rights:'NOT_VERIFIED',
  automatic_question_import_allowed:false,
  note:'Repository-level SPDX/license and README claims are only review evidence. Individual questions, answers, images and embedded third-party material require separate, affirmative reuse rights.'
 };
}
async function fetchMetadata(path){
 const response=await fetch('https://api.github.com/repos/'+path,{
  headers:{Accept:'application/vnd.github+json','User-Agent':'ruoshui-chemistry-license-preflight',
   'X-GitHub-Api-Version':'2022-11-28',Authorization:'Bearer '+TOKEN},
  signal:AbortSignal.timeout(20000)});
 if(response.status===404)return null;
 if(!response.ok)throw Error('GitHub API HTTP '+response.status+' for '+path);
 const json=await response.json();
 let content='';
 if(typeof json.content==='string'&&json.encoding==='base64'&&json.size<=180000)
  content=Buffer.from(json.content.replace(/\s+/g,''),'base64').toString('utf8');
 return {sha:json.sha||null,text:content};
}
export async function run(){
 if(!TOKEN)throw Error('Missing GITHUB_TOKEN');
 const q=JSON.parse(readFileSync(QUEUE,'utf8'));
 if(!Array.isArray(q.queue))throw Error('Invalid rights-review source queue');
 const report=existsSync(OUT)?JSON.parse(readFileSync(OUT,'utf8')):{
  schema_version:1,checked:{},note:'License preflight does not approve, copy or release any question data.'};
 if(report.schema_version!==1||!report.checked||typeof report.checked!=='object')throw Error('Malformed evidence ledger');
 const batch=selectedForReview(q.queue,report.checked);
 let success=0,errors=[],idx=0;
 const worker=async()=>{
  for(;;){
   const i=idx++;if(i>=batch.length)return;
   const row=batch[i];
   try{
    const [license,readme]=await Promise.all([
      fetchMetadata(row.repository+'/license'),
      fetchMetadata(row.repository+'/readme')]);
    report.checked[row.repository.toLowerCase()]=summariseEvidence(row,license,readme);
    success++;
   }catch(e){errors.push(row.repository+': '+String(e.message||e).slice(0,150));}
  }
 };
 await Promise.all(Array.from({length:4},()=>worker()));
 report.checked=sortKeys(report.checked);
 report.total_checked=Object.keys(report.checked).length;
 report.candidates_with_repository_license_evidence=Object.values(report.checked).filter(x=>x.repository_license_file_present).length;
 report.affirmatively_licensed_question_sets=0;
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(OUT)||readFileSync(OUT,'utf8')!==content)writeFileSync(OUT,content);
 const message=['### Chemistry source rights preflight (not content approval)',
  '- Reviewed metadata for this run: '+success+'/'+batch.length,
  '- Total sources checked: '+report.total_checked,
  '- Repository license-file present: '+report.candidates_with_repository_license_evidence,
  '- Question sets authorized automatically: 0',
  '- Failures: '+errors.length,
  ...errors.slice(0,6).map(e=>'- Warning: '+e)].join('\n');
 console.log(message);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,message+'\n');
 return {success,errors};
}
if(process.argv[1]===fileURLToPath(import.meta.url))run().catch(e=>{console.error(e.stack);process.exitCode=1;});
