#!/usr/bin/env node
// Human review queue for synthetic NVIDIA chemistry research QA.
// This ranks tasks for independent chemistry experts. It NEVER validates answers.
import {readFileSync,writeFileSync,readdirSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {questionHash,decodeArchiveRows} from './stage-nvidia-rqa.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const ARCHIVE=join(ROOT,'data','research_quarantine','nvidia-rqa');
const CANDIDATES=join(ROOT,'data','candidates');
const OUTPUT=join(ROOT,'harvest','nvidia_rqa_review_queue.json');
const SUBJECTS=['analytical','physical','inorganic','organic','needs_manual_classification'];
const excerpt=s=>String(s||'').replace(/\s+/g,' ').trim().slice(0,220);
export function reviewPriority(q){
 if(!q||q.publishable!==false||q.exclude_from_official_bank!==true||
   !q.question_sha256||q.quality_status!=='not_scientifically_verified')return null;
 const subject=SUBJECTS.includes(q.subject_suggestion)?q.subject_suggestion:'needs_manual_classification';
 let score=subject==='analytical'?30:subject==='physical'?29:subject==='inorganic'?16:subject==='organic'?15:1;
 if(q.question.length>=150&&q.question.length<=3500)score+=6;
 if(q.unverified_model_answer.length>=100&&q.unverified_model_answer.length<=2500)score+=4;
 if(/\\boxed\s*\{/.test(q.unverified_model_answer))score+=4;
 if(/\d/.test(q.question)&&/mol|mL|kJ|K\b|pH|eV|s\^|constant|rate|equilibrium|spectr|ligand/i.test(q.question))score+=4;
 if(/figure\s+\d+|diagram below|image below|as shown in the figure|from table\s+\d+|refer to the graph/i.test(q.question))score-=16;
 return {uuid:q.uuid,source_row:q.source_row,subject,priority_score:score,
  prompt_sha256:q.question_sha256,question_preview:excerpt(q.question),
  unverified_answer_preview:excerpt(q.unverified_model_answer),
  review_required:['individual source rights','chemistry correctness','answer derivation/units',
   'semantic and translated duplicate review','undergraduate syllabus fit'],
  publishable:false,scientifically_verified:false};
}
export function summarizeQuarantine(records,officialHashes,limit=125){
 if(!Array.isArray(records)||!(officialHashes instanceof Set)||!Number.isInteger(limit)||limit<5||limit>300)
  throw Error('Unsafe review queue inputs');
 const stats={total:records.length,by_subject:Object.fromEntries(SUBJECTS.map(x=>[x,0])),
  exact_prompt_collisions_with_formal:0,invalid_quarantine_records:0,ready_for_review:0,
  note:'Human-review priorities only. Never infer answer correctness or permission to publish.'};
 const seen=new Set(),items=[];
 for(const q of records){
  const x=reviewPriority(q);
  if(!x){stats.invalid_quarantine_records++;continue;}
  stats.by_subject[x.subject]++;
  if(officialHashes.has(x.prompt_sha256)){stats.exact_prompt_collisions_with_formal++;continue;}
  if(seen.has(x.prompt_sha256))continue;
  seen.add(x.prompt_sha256);items.push(x);
 }
 const rank=(a,b)=>b.priority_score-a.priority_score||a.source_row-b.source_row;
 const allocations={analytical:40,physical:40,inorganic:20,organic:20,needs_manual_classification:5};
 const selected=[],picked=new Set();
 for(const subject of SUBJECTS){
  for(const x of items.filter(z=>z.subject===subject).sort(rank).slice(0,allocations[subject])){
   if(!picked.has(x.uuid)){picked.add(x.uuid);selected.push(x);}
  }
 }
 for(const x of items.sort(rank)){
  if(selected.length>=limit)break;
  if(!picked.has(x.uuid)){picked.add(x.uuid);selected.push(x);}
 }
 selected.sort(rank);
 const result={schema_version:1,dataset:'nvidia/Nemotron-Science-v1',
  staging_only:true,automatic_approved_questions:0,all_qa_are_unverified:true,
  evaluated_count:stats.total,review_queue_size:selected.length,
  stats,review_queue:selected.slice(0,limit)};
 stats.ready_for_review=selected.length;
 return result;
}
export function run(){
 let records=[];
 if(existsSync(ARCHIVE)){
  for(const f of readdirSync(ARCHIVE).sort()){
   if(!/^\d{6}-\d{6}\.jsonl(?:\.gz)?$/.test(f))continue;
   records.push(...decodeArchiveRows(f,readFileSync(join(ARCHIVE,f))));
  }
 }
 const officialHashes=new Set();
 if(existsSync(CANDIDATES))for(const f of readdirSync(CANDIDATES)){
  if(!/^[a-f0-9]{64}\.json$/.test(f))continue;
  const q=JSON.parse(readFileSync(join(CANDIDATES,f),'utf8'));
  if(q.question)officialHashes.add(questionHash(q.question));
 }
 const report=summarizeQuarantine(records,officialHashes);
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(OUTPUT)||readFileSync(OUTPUT,'utf8')!==content)writeFileSync(OUTPUT,content);
 console.log('NVIDIA chemistry expert review shortlist: staged='+report.evaluated_count+
  ', queue='+report.review_queue_size+', exact_official_overlaps='+report.stats.exact_prompt_collisions_with_formal+
  ', subject_breakdown='+JSON.stringify(report.stats.by_subject)+', automatic_approved=0');
 return report;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run()}catch(e){console.error(e.stack);process.exitCode=1;}
}
