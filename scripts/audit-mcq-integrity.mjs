#!/usr/bin/env node
// Read-only, fail-closed review flags for imported, text-only chemistry MCQs.
// A repository SPDX label alone is NOT evidence of ownership of its question text.
import {readFileSync,readdirSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=dirname(dirname(fileURLToPath(import.meta.url)));
const normalize=s=>String(s||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
const validSha=s=>typeof s==='string'&&/^[a-f0-9]{40}$/.test(s);
// Only approved structural schemas are covered; new MCQ types require explicit tests.
const isMcq=q=>['licensed_text_only_multiple_choice','licensed_radical_matching_mcq'].includes(q.question_type);

export function auditMcqs(rows){
 const issues=[],sourceIndices=new Map(),bySubject={};
 let checked=0;
 const flag=(q,reason)=>issues.push({id:q.id||null,reason});
 for(const q of rows){
  if(!isMcq(q))continue;
  checked++;
  bySubject[q.subject]=(bySubject[q.subject]||0)+1;
  const opts=q.options;
  if(!Array.isArray(opts)||opts.length<2||opts.length>6||opts.some(x=>typeof x!=='string'||!x.trim())){
   flag(q,'missing_or_invalid_options');continue;
  }
  if(new Set(opts.map(normalize)).size!==opts.length)flag(q,'duplicate_options');
  const letter=String(q.answer_option||'');
  const idx=letter.length===1?letter.charCodeAt(0)-65:-1;
  if(idx<0||idx>=opts.length||!Number.isInteger(idx))flag(q,'invalid_answer_option');
  else if(normalize(q.answer)!==normalize(opts[idx]))flag(q,'answer_option_mismatch');
  if(q.publishable!==false||q.quality_status!=='awaiting_expert_review')
   flag(q,'publication_or_review_status_not_protected');
  const s=q.source||{};
  if(!s.repository||!s.file||!validSha(s.commit)||!s.license||!s.license_evidence||
     s.content_rights_verified!==true)
   flag(q,'incomplete_source_or_content_rights_evidence');
  if(!Number.isInteger(s.source_question_index)||s.source_question_index<0)
   flag(q,'missing_source_question_index');
  else if(s.repository&&s.file&&validSha(s.commit)){
   const key=[s.repository,s.commit,s.file,s.source_question_index].join('|');
   if(!sourceIndices.has(key))sourceIndices.set(key,[]);
   sourceIndices.get(key).push(q.id);
  }
 }
 const collisions=[...sourceIndices.entries()].filter(([,ids])=>ids.length>1)
  .map(([source_record,ids])=>({source_record,ids})).sort((a,b)=>a.source_record.localeCompare(b.source_record));
 return {schema_version:1,checked_mcq_candidates:checked,by_subject:bySubject,
  issue_count:issues.length,issues:issues.slice(0,100),
  repeated_upstream_record_count:collisions.length,repeated_upstream_records:collisions.slice(0,100),
  expert_approved:0,
  note:'Automated MCQ consistency and upstream-record reuse flags only; not a chemical correctness or third-party copyright determination. No publication rights are granted.'};
}
export function run(){
 const dir=join(root,'data','candidates');
 const rows=readdirSync(dir).filter(n=>n.endsWith('.json')).sort()
  .map(n=>JSON.parse(readFileSync(join(dir,n),'utf8')));
 const report=auditMcqs(rows);
 const output=join(root,'harvest','mcq_integrity_audit.json');
 const serialized=JSON.stringify(report,null,2)+'\n';
 mkdirSync(dirname(output),{recursive:true});
 if(!existsSync(output)||readFileSync(output,'utf8')!==serialized)writeFileSync(output,serialized);
 console.log('Chemistry MCQ integrity: checked='+report.checked_mcq_candidates+
  '; issues='+report.issue_count+'; repeated_source_records='+report.repeated_upstream_record_count);
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
