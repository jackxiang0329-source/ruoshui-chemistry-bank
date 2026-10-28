#!/usr/bin/env node
// Editorial queue ONLY: exactly 190 main records not yet subject to stored
// source/question/answer replay. Does not recheck or endorse chemistry solutions.
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const COVERED={
 'jackxiang0329-source/ruoshui-chemistry-bank':304,
 'PWO-CHINA/Chemistry-Calculator-Toolkit':8,
 'PaulWAyers/IntroQChemProblems':21,
 'QC-Edu/IntroQM':3,
 'arya51-ai/parametric-question-engine':30,
 'kbknudsen/PyEIS':8,
 'thisisntnathan/dftCourse':12,
 'ChemTrain/tmc-learn':593,
 'ChemTrain/chemtrain-daily':268,
 'ChemTrain/reaction-learn':278
};
const TODO={
 'bem130/chemquiz':67,
 'ChemTrain/radical-learn':38,
 'ChemTrain/pg-learn':22,
 'ChemTrain/pka-learn':20,
 'ChemTrain/reactivity-learn':20,
 'ChemTrain/photoredox-learn':18,
 'MuzaPro/Organic-Chemistry-Quiz-JS':5
};
const sha256=s=>createHash('sha256').update(s).digest('hex');
export function buildPending(rows,quality,coverage){
 if(!Array.isArray(rows)||rows.length!==quality?.total_candidates||
  coverage?.main_candidate_records!==rows.length||
  coverage?.main_unique_candidate_records_machine_replayed!==1525||
  coverage?.main_exercise_candidates!==1437||
  coverage?.main_study_cards!==278||
  coverage?.main_candidate_records_not_yet_machine_replayed!==190||
  coverage?.confirmed_official_exam_ready!==0)
  throw Error('Remaining source audit queue based on stale or unapproved corpus');
 const expected={...COVERED,...TODO};
 if(Object.keys(quality.source_counts||{}).length!==Object.keys(expected).length||
   Object.entries(expected).some(([name,n])=>quality.source_counts[name]!==n))
  throw Error('New or changed chemistry source needs explicit audit family classification');
 const covered=new Set(),items=[],counts={},seen=new Set();
 for(const q of rows){
  const source=q.source?.repository;
  if(seen.has(q.id)||!source||!Object.hasOwn(expected,source)||
   q.quality_status!=='awaiting_expert_review'||q.publishable!==false)
   throw Error('Unknown or already published candidate in remaining audit queue');
  seen.add(q.id);
  if(Object.hasOwn(COVERED,source)){
   covered.add(q.id);
   continue;
  }
  if(!Object.hasOwn(TODO,source)||!q.question||!q.answer||
    ['open_ended_study_flashcard'].includes(q.question_type))
   throw Error('Unverified candidate lacks exercise question/answer');
  counts[source]=(counts[source]||0)+1;
  items.push({
   candidate_id:q.id,subject:q.subject,topic:q.topic,
   source_repository:source,question_type:q.question_type,
   source_commit:q.source.commit||null,
   source_file:q.source.file||null,
   source_rights_status:q.source.content_rights_verified===true?
    'source_manifest_or_author_rights_marked_verified_no_item_science_approval':
    'source_item_rights_not_confirmed',
   needs_persisted_source_replay:true,
   needs_chemistry_expert_review:true,
   needs_semantic_overlap_review:true,
   approved_for_publication:false,
   candidate_json:'data/candidates/'+q.id+'.json'
  });
 }
 if(covered.size!==1525||items.length!==190||seen.size!==1715||
  Object.entries(TODO).some(([name,count])=>counts[name]!==count))
  throw Error('Expected 1525 covered and 190 uncovered with exact source taxonomy');
 items.sort((a,b)=>(TODO[b.source_repository]-TODO[a.source_repository])||
  a.source_repository.localeCompare(b.source_repository)||
  a.topic.localeCompare(b.topic)||a.candidate_id.localeCompare(b.candidate_id));
 return {schema_version:1,main_candidates:rows.length,
  already_source_replayed_candidate_records:covered.size,
  pending_source_replay_candidate_records:items.length,
  pending_is_study_cards:0,pending_is_exercise_candidates:190,
  pending_source_groups:Object.entries(TODO).map(([source,count])=>({source,count})),
  pending_candidate_ids_sha256:sha256(items.map(x=>x.candidate_id).sort().join('\n')),
  external_scientific_human_approvals:0,newly_approved_for_exam:0,
  review_queue:items,
  note:'Editorial checklist only. It does NOT count these 190 source records as verified or ready; each still needs actual source regeneration, chemistry expert assessment, semantic/template deduplication and item rights where relevant.'};
}
export function markdown(report){
 const lines=['# 大学化学题库：尚未覆盖的 190 份主库候选题','','- 来源落盘复核已覆盖 1525/1715；此处列出剩余 190 份练习候选，**没有一份因为在本清单中就获得科学专家批准**。','',
 '| 来源 | 未核验记录数 |','|---|---:|'];
 for(const x of report.pending_source_groups)lines.push('| '+x.source+' | '+x.count+' |');
 lines.push('','## 具体复核队列','','请先按来源锁定 Git blob SHA，重生原题、独立复算/核对正确选项并对照已存 JSON，再进行人工化学审定。','',
 '| 记录 | 课程类别 | 题型 | 来源 |','|---|---|---|---|');
 for(const x of report.review_queue)
  lines.push('| ['+x.candidate_id.slice(0,12)+'](../../'+x.candidate_json+
   ') | '+x.subject+' · '+x.topic+' | '+x.question_type+' | '+x.source_repository+' |');
 lines.push('','*研究待审，正式组卷批准：0。*','');
 return lines.join('\n');
}
export function run(){
 const all=readdirSync(join(ROOT,'data/candidates')).filter(x=>x.endsWith('.json')).sort()
  .map(x=>JSON.parse(readFileSync(join(ROOT,'data/candidates',x),'utf8')));
 const quality=JSON.parse(readFileSync(join(ROOT,'harvest/quality_audit.json'),'utf8'));
 const coverage=JSON.parse(readFileSync(join(ROOT,'harvest/coverage_report.json'),'utf8'));
 const report=buildPending(all,quality,coverage);
 const files=[
  ['harvest/main_pending_source_replay_queue.json',JSON.stringify(report,null,2)+'\n'],
  ['harvest/main_pending_source_replay_queue.md',markdown(report)]];
 for(const [file,body] of files){
  const dest=join(ROOT,file);
  if(!existsSync(dest)||readFileSync(dest,'utf8')!==body)writeFileSync(dest,body);
 }
 console.log('Pending replay queue: '+report.pending_source_replay_candidate_records+
  ' not yet source-validated, approved 0.');
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
