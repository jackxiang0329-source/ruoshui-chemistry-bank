#!/usr/bin/env node
// Fast, deterministic, metadata-only triage. No question or media import.
// Repository SPDX license is never interpreted as permission to copy its questions.
import {readFileSync,writeFileSync,readdirSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url);
const shards=new URL('harvest/sources/',root);
const output=new URL('harvest/source_review_queue.json',root);
const rights='not_verified_for_question_or_answer_redistribution';
export function rankSource(x){
 const description=String(x.description||'').toLowerCase();
 const text=String(x.repository||'')+' '+description+' '+(x.topics||[]).join(' ');
 const subjects=Array.isArray(x.subjects)?x.subjects:[];
 const licensed=x.repository_license_spdx&&!['UNKNOWN','NOASSERTION','NONE'].includes(x.repository_license_spdx);
 const topical=/(chemistry|chemical|analytical|electrochem|spectroscop|titration|stoichiomet|inorganic|organic|chemtrain|chemquiz|physical.chemistry|化学)/i.test(text);
 const education=/(quiz|exam|questions?|problem|exercise|worksheet|practice|course|lesson|tutorial|notebook|dataset|calculator|simulation|educat|lab|chemtrain|试题|练习|习题|题库)/i.test(text);
 // Topic + MIT metadata does not establish that a repository contains reusable questions.
 const directExercise=/(quiz|exams?|questions?|exercises?|worksheets?|problem.?sets?|practice.?problems?|assessments?|题库|试题|练习|习题)/i.test(text);
 const toolOnly=!directExercise&&/(calculator|simulat|analy[sz]|visualiz|toolkit|software|data.?processing|web.?app)/i.test(text);
 if(!topical||!education)return null;
 let score=0;
 if(subjects.includes('analytical'))score+=18;
 if(subjects.includes('physical'))score+=17;
 if(subjects.includes('organic'))score+=9;
 if(subjects.includes('inorganic'))score+=8;
 if(licensed)score+=12;
 if(directExercise)score+=14;
 if(toolOnly)score-=24;
 if(/(question.?bank|quiz|exercises?|problem.?set|assessment|题库|试题)/i.test(text))score+=8;
 if(/(calculator|simulation|notebook|tutorial|course)/i.test(text))score+=4;
 if(/(class 10|class 12|jee |neet|ap chemistry|high.school|school olympiad|gcse)/i.test(text))score-=15;
 if(/(thesis|portfolio|resume|cheat.?sheet|chatgpt.?to.?pdf|converter)/i.test(text))score-=22;
 if(score<6)return null;
 return {repository:x.repository,url:x.url,subjects,score,
  repository_license_spdx:x.repository_license_spdx||'UNKNOWN',
  source_license_metadata_only:true,
  question_presence_signal:directExercise?'explicit_question_or_exercise_claim':toolOnly?'software_or_tool_only_claim':'education_material_claim_only',
  question_content_rights:rights,
  state:'needs_per_question_provenance_and_answer_quality_review',
  rationale:licensed?'Repository license metadata exists, but individual question rights require separate verification.':
   'Repository license unknown; request permissions before any reuse.',
  original_source_record:'harvest/sources/'};
}
// Advance beyond already-preflighted repos instead of stalling at the first 160.
export function choose(rows,max=160,reviewed={}){
 if(!reviewed||typeof reviewed!=='object'||Array.isArray(reviewed))throw Error('Invalid checked-source ledger');
 const seen=new Set();
 const ranked=[];
 for(const row of rows){
  const item=rankSource(row);
  if(!item)continue;
  const key=item.repository.toLowerCase();
  if(seen.has(key)||Object.hasOwn(reviewed,key))continue;seen.add(key);
  ranked.push(item);
 }
 ranked.sort((a,b)=>b.score-a.score||a.repository.localeCompare(b.repository));
 return ranked.slice(0,max);
}
export function run(){
 const rows=[];
 if(existsSync(shards)){
  for(const name of readdirSync(shards).sort()){
   if(!/^[0-9a-f]{2}\.jsonl$/.test(name))continue;
   for(const line of readFileSync(new URL(name,shards),'utf8').split('\n'))
    if(line.trim())rows.push(JSON.parse(line));
  }
 }
 const ledgerPath=new URL('harvest/license_preflight.json',root);
 const ledger=existsSync(ledgerPath)?JSON.parse(readFileSync(ledgerPath,'utf8')):{checked:{}};
 if(!ledger.checked||typeof ledger.checked!=='object'||Array.isArray(ledger.checked))throw Error('Bad LICENSE preflight ledger');
 const queue=choose(rows,160,ledger.checked),report={schema_version:1,source_records_considered:rows.length,
  already_preflighted_sources:Object.keys(ledger.checked).length,
  unreviewed_queued_for_metadata_rights_check:queue.length,
  prioritized_for_manual_rights_check:queue.length,
  question_text_or_answers_downloaded:0,question_license_approvals_added:0,
  note:'Priorities are based ONLY on repository metadata. They do not authorize copying questions, data or images.',
  queue};
 const str=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(output)||readFileSync(output,'utf8')!==str)writeFileSync(output,str);
 console.log('Chemistry license review queue: scanned='+rows.length+', preflighted='+Object.keys(ledger.checked).length+', new_queue='+queue.length+', approved=0');
 return report;
}
if(process.argv[1]===fileURLToPath(import.meta.url))run();
