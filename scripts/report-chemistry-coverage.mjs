#!/usr/bin/env node
// Count provenance-aware candidate tiers for apples-to-apples chemistry vs physics comparisons.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
export function summarize(main,external,publication,rqaState,rqaReview,science,derivations){
 const whole=main?.total_candidates,exercise=main?.by_content_kind?.exercise_candidate,
  card=main?.by_content_kind?.study_card,raw=external?.raw_staged_candidates;
 if(!Number.isInteger(whole)||!Number.isInteger(exercise)||!Number.isInteger(card)||
  whole!==exercise+card||!Number.isInteger(raw)||raw<0||
  publication?.total_candidates!==whole||!Number.isInteger(publication.approved_count)||
  publication.approved_count<0||publication.approved_count>whole||
  external.item_rights_approved!==0||external.expert_approved!==0||external.exam_ready!==0||
  !Number.isInteger(rqaState?.staged_total)||rqaState.staged_total<0||
  !Number.isInteger(rqaState.examined)||rqaState.examined<rqaState.staged_total||
  rqaReview?.evaluated_count!==rqaState.staged_total||
  rqaReview.staging_only!==true||rqaReview.all_qa_are_unverified!==true||
  rqaReview.automatic_approved_questions!==0||
  !Number.isInteger(science?.reviewed_source_cases)||
  science.reviewed_source_cases!==science.items?.length||
  science.publishable!==0||science.rights_confirmations!==0||
  science.scholarly_human_confirmations!==0||
  !Number.isInteger(science.source_answer_discrepancies)||
  !Number.isInteger(science.source_question_typographical_issues)||
  derivations?.numeric_review_count!==science.reviewed_source_cases||
  derivations?.new_chinese_independent_derivations!==derivations?.items?.length||
  derivations?.previous_full_chinese_drafts+derivations?.new_chinese_independent_derivations!==
    science.reviewed_source_cases||
  derivations.edition_rights_unresolved!==true||
  derivations.expert_approved!==0||derivations.reuse_rights_approved!==0||
  derivations.released_for_exams!==0)
  throw Error('Unsafe or inconsistent chemistry coverage sources: '+
   JSON.stringify({
    main_total:whole,main_exercises:exercise,main_cards:card,
    raw_external:raw,publication_total:publication?.total_candidates,
    approved:publication?.approved_count,
    rqa_staged:rqaState?.staged_total,
    rqa_examined:rqaState?.examined,
    rqa_reviewed:rqaReview?.evaluated_count,
    rqa_is_staging_only:rqaReview?.staging_only,
    rqa_unverified:rqaReview?.all_qa_are_unverified,
    science_count:science?.reviewed_source_cases,
    science_items:science?.items?.length,
    science_issues:science?.source_answer_discrepancies,
    science_typos:science?.source_question_typographical_issues,
    chinese_numeric_count:derivations?.numeric_review_count,
    chinese_full:derivations?.previous_full_chinese_drafts,
    chinese_derivations:derivations?.new_chinese_independent_derivations,
    chinese_items:derivations?.items?.length,
    quarantine:derivations?.edition_rights_unresolved,
    external_rights:external?.item_rights_approved,
    science_publish:science?.publishable,
    chinese_release:derivations?.released_for_exams
   }));
 return {schema_version:1,
  main_candidate_records:whole,main_exercise_candidates:exercise,main_study_cards:card,
  external_oer_unreviewed_blocks:raw,
  nvidia_synthetic_research_quarantine_records:rqaState.staged_total,
  nvidia_research_rows_examined:rqaState.examined,
  combined_record_count_not_unique_exercises:whole+raw+rqaState.staged_total,
  confirmed_official_exam_ready:publication.approved_count,
  external_numeric_source_reviews:science.reviewed_source_cases,
  external_source_answer_key_issue_records:science.source_answer_discrepancies,
  external_source_formula_typo_records:science.source_question_typographical_issues,
  external_chinese_full_draft_reviews:derivations.previous_full_chinese_drafts,
  external_chinese_independent_derivation_notes:derivations.new_chinese_independent_derivations,
  external_chinese_review_rights_blocked:true,
  external_openstax_work_license:external.work_license,
  external_source_exercise_blocks_with_original_solution:external.with_source_solution,
  external_sections_inspected:external.chapters_inspected,
  external_sections_total:external.discovered_source_chapters,
  exam_eligibility_note:'Main candidates include numerical variants and study cards; OpenStax is unverified raw exercises; NVIDIA RQA is synthetic research QAs with a high unclassified fraction. Totals are not independent, scientifically correct or released chemistry exam questions. Cross-tier semantic overlap may exist.',
  counting_policy:'Keep OpenStax raw OER, NVIDIA research quarantine, main candidate exercises, study cards and approved exam bank numerically separate.'};
}
export function run(){
 const main=JSON.parse(readFileSync(join(ROOT,'harvest/quality_audit.json'),'utf8'));
 const ext=JSON.parse(readFileSync(join(ROOT,'external_sources/openstax_chemistry/coverage.json'),'utf8'));
 const release=JSON.parse(readFileSync(join(ROOT,'release/chemistry-approved-manifest.json'),'utf8'));
 const rqaState=JSON.parse(readFileSync(join(ROOT,'harvest/nvidia_rqa_state.json'),'utf8'));
 const rqaReview=JSON.parse(readFileSync(join(ROOT,'harvest/nvidia_rqa_review_queue.json'),'utf8'));
 const science=JSON.parse(readFileSync(join(ROOT,
  'external_sources/openstax_chemistry/independent_numeric_review.json'),'utf8'));
 const chinese=JSON.parse(readFileSync(join(ROOT,
  'external_sources/openstax_chemistry/chinese_independent_derivations.json'),'utf8'));
 const summary=summarize(main,ext,release,rqaState,rqaReview,science,chinese),
  path=join(ROOT,'harvest/coverage_report.json');
 const body=JSON.stringify(summary,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Chemistry tiers: main_candidates='+summary.main_candidate_records+
  ' openstax_raw='+summary.external_oer_unreviewed_blocks+
  ' nvidia_rqa_quarantine='+summary.nvidia_synthetic_research_quarantine_records+
  ' combined_records='+summary.combined_record_count_not_unique_exercises+
  ' external_independent_science='+summary.external_numeric_source_reviews+
  ' Chinese_external_notes='+summary.external_chinese_independent_derivation_notes+
  ' published='+summary.confirmed_official_exam_ready);
 return summary;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
