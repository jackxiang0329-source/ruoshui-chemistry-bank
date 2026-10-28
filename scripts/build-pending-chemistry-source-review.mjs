#!/usr/bin/env node
// Editorial queue ONLY: exactly 5 main records not yet subject to stored
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
 'ChemTrain/reaction-learn':278,
 'bem130/chemquiz':67,
 'ChemTrain/radical-learn':38,
 'ChemTrain/pg-learn':22,
 'ChemTrain/pka-learn':20,
 'ChemTrain/reactivity-learn':20,
 'ChemTrain/photoredox-learn':18,
 'MuzaPro/Organic-Chemistry-Quiz-JS':5
};
const TODO={};
const sha256=s=>createHash('sha256').update(s).digest('hex');
export function buildPending(rows,quality,coverage){
 const added=coverage?.main_new_original_general_chemistry_inverse_replayed||0;
 const reasoning=coverage?.main_new_original_reasoning_source_replayed||0;
 const integrated=coverage?.main_new_integrated_chemistry_source_replayed||0;
 const apTopics=coverage?.main_new_analytical_physical_topics_source_replayed||0;
 const multistep=coverage?.main_new_multistep_source_replayed||0;
 const rapid=coverage?.main_new_rapid_240_source_replayed||0;
 const chapter=coverage?.main_new_chapter_1152_source_replayed||0;
 const dual=coverage?.main_new_dual_3072_source_replayed||0;
 const mega=coverage?.main_new_mega_2304_source_replayed||0;
 if(!Number.isInteger(mega)||mega<0||mega>2304)throw Error('Unsafe mega source replay count');
 if(!Number.isInteger(dual)||dual<0||dual>3072)throw Error('Unsafe source review extension from 3072 candidates');
 if(!Number.isInteger(chapter)||chapter<0||chapter>1152)throw Error('Unsafe chapter 1152 provenance count');
 if(!Number.isInteger(rapid)||rapid<0||rapid>240)throw Error('Unsafe new rapid topic replay extension');
 if(!Number.isInteger(multistep)||multistep<0||multistep>12)throw Error('Unsafe new multistep replay extension');
 if(!Number.isInteger(apTopics)||apTopics<0||apTopics>20)throw Error('Unsafe analytical/physical topic replay extension');
 if(!Number.isInteger(integrated)||integrated<0||integrated>20)throw Error('Unsafe integrated chemistry replay extension');
 if(!Number.isInteger(reasoning)||reasoning<0||reasoning>33)throw Error('Unsafe new reasoning replay extension');
 if(!Number.isInteger(added)||added<0||added>120)throw Error('Unsafe chemistry replay extension');
 if(!Array.isArray(rows)||rows.length!==quality?.total_candidates||
  coverage?.main_candidate_records!==rows.length||
  coverage?.main_unique_candidate_records_machine_replayed!==1715+added+reasoning+integrated+apTopics+multistep+rapid+chapter+dual+mega||
  coverage?.main_exercise_candidates!==1437+added+reasoning+integrated+apTopics+multistep+rapid+chapter+dual+mega||
  coverage?.main_study_cards!==278||
  coverage?.main_candidate_records_not_yet_machine_replayed!==0||
  coverage?.confirmed_official_exam_ready!==0)
  throw Error('Remaining source audit queue based on stale or unapproved corpus');
 const expected={...COVERED,...TODO,
  'jackxiang0329-source/ruoshui-chemistry-bank':304+added+reasoning+integrated+apTopics+multistep+rapid+chapter+dual+mega};
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
   candidate_id:q.id,subject:q.subject,topic:q.topic||'legacy_organic_question',
   source_repository:source,question_type:q.question_type||'legacy_unstructured_question',
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
 if(covered.size!==rows.length||items.length!==0||seen.size!==rows.length||
  Object.entries(TODO).some(([name,count])=>counts[name]!==count))
  throw Error('Expected 1715 covered and 5 uncovered with exact source taxonomy');
 items.sort((a,b)=>(TODO[b.source_repository]-TODO[a.source_repository])||
  a.source_repository.localeCompare(b.source_repository)||
  String(a.topic||'').localeCompare(String(b.topic||''))||
  a.candidate_id.localeCompare(b.candidate_id));
 return {schema_version:1,main_candidates:rows.length,
  already_source_replayed_candidate_records:covered.size,
  pending_source_replay_candidate_records:items.length,
  pending_is_study_cards:0,pending_is_exercise_candidates:0,
  pending_source_groups:Object.entries(TODO).map(([source,count])=>({source,count})),
  pending_candidate_ids_sha256:sha256(items.map(x=>x.candidate_id).sort().join('\n')),
  external_scientific_human_approvals:0,newly_approved_for_exam:0,
  review_queue:items,
  note:'Zero pending source-replay candidates. 1715 historic records plus added original candidates have matched stored source; mathematical agreement is not expert chemistry correctness, individual rights approval or publication permission.'};
}
export function markdown(report){
 const count=report.already_source_replayed_candidate_records,total=report.main_candidates;
 const lines=['# 大学化学题库：尚未覆盖的 '+report.pending_source_replay_candidate_records+' 份主库候选题','','- 来源落盘复核已覆盖 '+count+'/'+total+'；此处列出剩余 '+report.pending_source_replay_candidate_records+' 份练习候选，**没有一份因此获得专家批准**。','',
 '主库文件来源复核覆盖率 '+count+'/'+total+'；科学审定和逐题权利确认仍未完成。','',
 'Muza 原始五题已核对来源，q2、q4、q5 的科学条件仍需人工审核，见 [Muza 五题审核报告](main_muza_pinned_source_replay.json)。','',
 '| 来源 | 未核验记录数 |','|---|---:|'];
 for(const x of report.pending_source_groups)lines.push('| '+x.source+' | '+x.count+' |');
 lines.push('','## 具体复核队列','','请先按来源锁定 Git blob SHA，重生原题、独立复算/核对正确选项并对照已存 JSON，再进行人工化学审定。','',
 '| 记录 | 课程类别 | 题型 | 来源 |','|---|---|---|---|');
 for(const x of report.review_queue)
  lines.push('| ['+x.candidate_id.slice(0,12)+'](../'+x.candidate_json+
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
