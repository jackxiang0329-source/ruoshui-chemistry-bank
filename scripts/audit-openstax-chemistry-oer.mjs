#!/usr/bin/env node
// Prioritize HUMAN validation of pinned OpenStax chemistry exercise blocks.
// Never promote an item from the external source archive to a publishable bank.
import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const normalizeQuestion=s=>String(s||'').normalize('NFKC').toLowerCase()
 .replace(/<sub>([\s\S]*?)<\/sub>/gi,'$1')
 .replace(/<sup>([\s\S]*?)<\/sup>/gi,'$1')
 .replace(/<[^>]*>/g,' ')
 .replace(/[*_]/g,'')
 .replace(/\s+/g,' ').trim();
const needsPriorContext=s=>/\[\[link\]\]|\]\(#|(?:previous|preceding|above|below)\s+(?:item|problem|question|exercise|figure|table)|\b(?:figure|diagram|graph|table)\s+(?:shown|above|below)/i.test(String(s||''));
const templateQuestion=s=>normalizeQuestion(s).replace(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*10\s*[\^−-]?\d+)?/g,'#');
export function buildReview(rows,limit=180,mainQuestions=[],scientific=null){
 if(!Array.isArray(rows)||!Number.isInteger(limit)||limit<1||limit>1000)
  throw Error('Invalid raw OER review batch');
 const ids=new Set(),byChapter=new Map(),templateGroups=new Map(),flags={missing_answer:0,requires_media:0,
  requires_mathml:0,plain_text_with_source_solution:0,
  source_problem_context_reference:0,solution_requires_mathml_or_media:0,
  clean_self_contained_with_source_solution:0,strict_text_overlap_with_main:0};
 if(!Array.isArray(mainQuestions))throw Error('Main candidate comparison must be explicit array');
 if(scientific!==null&&(scientific.schema_version!==1||
   !Array.isArray(scientific.items)||scientific.items.length!==scientific.reviewed_source_cases||
   scientific.scholarly_human_confirmations!==0||
   scientific.rights_confirmations!==0||scientific.publishable!==0))
  throw Error('Source scientific review is unapproved or inconsistent');
 const checks=new Map();
 for(const review of scientific?.items||[]){
  if(!/^OSCHEM-[a-f0-9]{24}$/.test(review.source_id||'')||
     checks.has(review.source_id)||review.machine_computation_checked!==true||
     review.source_item_rights_verified!==false||review.release_eligible!==false||
     review.independent_human_chemist_review_completed!==false)
   throw Error('Cannot use unapproved or duplicate OER scientific review');
  checks.set(review.source_id,review);
 }
 const matchedCheckIds=new Set();
 const mainNorm=new Set(mainQuestions.map(x=>normalizeQuestion(x)).filter(Boolean));
 for(const q of rows){
  if(!/^OSCHEM-[a-f0-9]{24}$/.test(q.id||'')||ids.has(q.id)||
     !/^contents\/m\d+\.md$/.test(q.source_path||'')||
     q.quality_status!=='unverified_external_staging'||q.publishable!==false||
     q.exam_ready!==false||q.content_rights_verified!==false||
     q.item_level_rights_review_pending!==true)
   throw Error('Unsafe, duplicated or promoted external chemistry exercise');
  ids.add(q.id);
  if(!q.has_source_solution)flags.missing_answer++;
  if(q.requires_media)flags.requires_media++;
  if(q.requires_mathml)flags.requires_mathml++;
  if(q.has_source_solution&&!q.requires_media&&!q.requires_mathml)
   flags.plain_text_with_source_solution++;
  const reference=needsPriorContext(q.question),answerDepend=
   /<math\b|<img\b|!\[|\[\[link\]\]|(?:\.\.\/resources\/)/i.test(String(q.answer||''));
  const strictOverlap=mainNorm.has(normalizeQuestion(q.question))&&Boolean(q.question);
  const chk=checks.get(q.id);
  if(chk){
   if(chk.source_path!==q.source_path||
      chk.source_exercise_ordinal!==q.source_exercise_ordinal||
      chk.question_sha256!==q.question_sha256||
      chk.source_url!==q.source_url)
    throw Error('Scientific review is stale, mismatched or wrong OpenStax exercise');
   matchedCheckIds.add(q.id);
  }
  const ready=q.has_source_solution&&!q.requires_media&&!q.requires_mathml&&
   !reference&&!answerDepend&&!strictOverlap;
  if(reference)flags.source_problem_context_reference++;
  if(answerDepend)flags.solution_requires_mathml_or_media++;
  if(strictOverlap)flags.strict_text_overlap_with_main++;
  if(ready)flags.clean_self_contained_with_source_solution++;
  if(q.question?.length>=25){
   const key=templateQuestion(q.question);
   if(!templateGroups.has(key))templateGroups.set(key,[]);
   templateGroups.get(key).push(q.id);
  }
  const chapter=q.source_path,plain=q.has_source_solution&&!q.requires_media&&!q.requires_mathml,
   score=(ready?100:0)+(plain?20:0)+(q.has_source_solution?15:0)+
    (chk?.issue?60:0)+(chk?35:0)+
    (reference?-85:0)+(answerDepend?-60:0)+(strictOverlap?-95:0)+
    (q.requires_media?-50:0)+(q.requires_mathml?-20:0)+
    (!q.has_source_solution?-30:0);
  const item={id:q.id,source_path:chapter,source_url:q.source_url,
   source_exercise_ordinal:q.source_exercise_ordinal,source_sha:q.source_blob_sha,
   original_solution_attached:q.has_source_solution,
   media_required:q.requires_media,mathml_required:q.requires_mathml,
   external_context_reference:reference,answer_dependency_requires_review:answerDepend,
   possible_strict_duplicate_in_main:strictOverlap,
   standalone_text_with_answer_candidate:ready,
   independently_recomputed_numerics:Boolean(chk),
   verified_arithmetic_not_expert_approval:Boolean(chk),
   source_key_error_detected:chk?.issue||null,
   manual_review_priority:score,rights_review_required:true,
   science_review_required:true,approved:false};
  if(!byChapter.has(chapter))byChapter.set(chapter,[]);
  byChapter.get(chapter).push(item);
 }
 const chapters=[...byChapter].sort(([a],[b])=>a.localeCompare(b));
 for(const [,items] of chapters)items.sort((a,b)=>b.manual_review_priority-a.manual_review_priority||
  a.source_exercise_ordinal-b.source_exercise_ordinal||a.id.localeCompare(b.id));
 // Round-robin prevents a single heavily exercised topic from monopolizing review.
 const queue=[];let round=0;
 while(queue.length<limit){
  let took=0;
  for(const [,items] of chapters){
   if(queue.length>=limit)break;
   if(items[round]){queue.push(items[round]);took++;}
  }
  if(!took)break;round++;
 }
 if(matchedCheckIds.size!==checks.size)
  throw Error('Orphan scientific review not found in pinned OER archive');
 const allScienceCases=[...byChapter.values()].flat().filter(x=>x.independently_recomputed_numerics);
 const scienceIssues=allScienceCases.filter(x=>x.source_key_error_detected);
 const high=queue.filter(x=>x.original_solution_attached&&!x.media_required&&!x.mathml_required).length;
 const selfContained=queue.filter(x=>x.standalone_text_with_answer_candidate).length;
 const repeatedTemplates=[...templateGroups.values()].filter(ids=>ids.length>1);

 return {schema_version:1,total_unreviewed_exercise_blocks:rows.length,
  source_chapters_with_exercises:chapters.length,
  review_queue_size:queue.length,likely_text_only_with_answer_in_review_queue:high,
  independent_numeric_source_reviews:allScienceCases.length,
  detected_source_key_errors:scienceIssues.length,
  source_key_errata_priority:scienceIssues.map(x=>({
    id:x.id,source_path:x.source_path,source_exercise_ordinal:x.source_exercise_ordinal,
    source_url:x.source_url,error_code:x.source_key_error_detected,
    rights_review_required:true,expert_solution_check_required:true,approved:false})),
  independently_checked_numerics_queue:allScienceCases.map(x=>({
    id:x.id,source_path:x.source_path,source_exercise_ordinal:x.source_exercise_ordinal,
    original_solution_attached:x.original_solution_attached,
    source_key_error_detected:x.source_key_error_detected,
    rights_review_required:true,expert_solution_check_required:true,approved:false})),
  ready_for_manual_scientific_review_in_queue:selfContained,
  possible_same_wording_numeric_template_families:repeatedTemplates.length,
  possible_numeric_template_candidates:repeatedTemplates.reduce((sum,x)=>sum+x.length,0),
  possible_numeric_template_examples:repeatedTemplates.slice(0,12).map(x=>x.slice(0,5)),
  total_by_flag:flags,expert_approved:0,source_rights_approved:0,
  publication_eligible:0,
  note:'Unresolved references, missing figures, linked context, answer MathML/media and strict cross-bank duplicate risk are REVIEW FLAGS, not automatic exclusions. Numeric-template matching is only lexical, not a scientifically validated semantic duplicate test. No item rights or expert approval granted.',
  review_queue:queue};
}
export function run(){
 const root=join(ROOT,'external_sources/openstax_chemistry');
 const src=join(root,'questions.jsonl');
 if(!existsSync(src))throw Error('Missing actual downloaded OER exercise archive');
 const rows=readFileSync(src,'utf8').split(/\r?\n/).filter(Boolean).map(x=>JSON.parse(x));
 const candidateDir=join(ROOT,'data/candidates');
 const main=readdirSync(candidateDir).filter(x=>/^[a-f0-9]{64}\.json$/.test(x))
  .map(x=>JSON.parse(readFileSync(join(candidateDir,x),'utf8')).question);
 const sciencePath=join(root,'independent_numeric_review.json');
 const scientific=JSON.parse(readFileSync(sciencePath,'utf8'));
 const review=buildReview(rows,180,main,scientific),path=join(root,'review_priority.json');
 const data=JSON.stringify(review,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==data)writeFileSync(path,data);
 console.log('OpenStax chemistry human-review queue='+review.review_queue_size+
  ' from='+rows.length+' self_contained_candidates='+review.total_by_flag.clean_self_contained_with_source_solution+
  ' independent_numeric_reviews='+review.independent_numeric_source_reviews+
  ' known_source_key_errors='+review.detected_source_key_errors+
  ' lexical_templates='+review.possible_same_wording_numeric_template_families+
  ' approved=0');
 return review;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
