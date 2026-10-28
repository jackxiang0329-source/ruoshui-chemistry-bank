#!/usr/bin/env node
// Count provenance-aware candidate tiers for apples-to-apples chemistry vs physics comparisons.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
export function summarize(main,external,publication,rqaState,rqaReview,science,derivations,replay,supplementary,tmc,daily,reaction,extra,muza,muzaScience,general={generated:0},reasoning={generated:0}){
 const reasoningCount=reasoning?.generated||0;
 if(!Number.isInteger(reasoningCount)||reasoningCount<0||reasoningCount>33||
 (reasoningCount>0&&(reasoning?.records_exactly_replayed!==reasoningCount||
 reasoning?.topic_families!==reasoningCount||reasoning?.source_license!=='CC0-1.0'||
 reasoning?.expert_approved!==0||reasoning?.publishable!==false||
 ['inorganic','analytical','organic','physical'].some(k=>reasoning?.by_subject?.[k]!==(k==='physical'?9:8)))))
 throw Error('Unsafe new original reasoning source ledger');
 const newlyReplayed=general?.generated||0;
 if(!Number.isInteger(newlyReplayed)||newlyReplayed<0||
  (newlyReplayed>0&&(general?.independently_inverse_checked!==newlyReplayed||
   general?.by_subject?.inorganic!==72||general?.by_subject?.organic!==48||
   general?.expert_approved!==0||general?.publishable!==false||
   general?.source_license!=='CC0-1.0')))throw Error('Unsafe original general chemistry replay report');
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
  derivations.released_for_exams!==0||
  replay?.checked_stored_candidate_records!==304||
  replay?.checked_distinct_candidate_ids!==304||
  replay?.provenance_bound_generator_families!==5||
  replay?.reviewed_physical_candidate_records!==144||
  replay?.reviewed_analytical_candidate_records!==160||
  replay?.coverage_vs_main_records?.total!==whole||
  replay?.coverage_vs_main_records?.audited!==304||
  replay?.coverage_vs_main_records?.other_candidates_not_yet_covered!==whole-304||
  replay?.expert_science_approved!==0||
  replay?.publishable_approved!==0||
  replay?.formally_exam_ready!==0||
  supplementary?.distinct_checked_stored_candidates!==82||
  supplementary?.source_groups_verified!==6||
  supplementary?.already_in_304_original_numeric_replay!==0||
  supplementary?.combined_unique_candidate_ids_304_plus_82!==386||
  supplementary?.main_library_total!==whole||
  supplementary?.main_records_outside_both_replays!==whole-386||
  supplementary?.source_linked_rights_pending_candidate_count!==21||
  supplementary?.source_linked_rights_newly_approved!==0||
  supplementary?.scientific_human_approved!==0||
  supplementary?.publishable_approved!==0||
  supplementary?.exam_ready!==0||
  supplementary?.groups?.length!==6||
  supplementary.groups.reduce((n,x)=>n+x.stored_candidate_records_checked,0)!==82||
  supplementary.groups.reduce((n,x)=>n+x.explicitly_recorded_numeric_answers,0)!==37||
  main?.source_counts?.['ChemTrain/tmc-learn']!==593||
  main?.source_counts?.['ChemTrain/chemtrain-daily']!==268||
  tmc?.source_repository!=='ChemTrain/tmc-learn'||
  tmc?.unique_source_complexes!==199||
  tmc?.persisted_question_candidates_replayed!==593||
  tmc?.distinct_question_ids!==593||
  tmc?.question_types?.valence_electrons!==199||
  tmc?.question_types?.oxidation_state!==197||
  tmc?.question_types?.d_electrons!==197||
  tmc?.expert_chemistry_approved!==0||
  tmc?.formally_exam_ready!==0||
  daily?.source_repository!=='ChemTrain/chemtrain-daily'||
  daily?.stored_text_only_mcq_candidates_replayed!==268||
  daily?.distinct_persisted_candidate_ids!==268||
  daily?.distinct_source_question_indexes!==268||
  daily?.expert_chemistry_approved!==0||
  daily?.formally_exam_ready!==0||
  main?.source_counts?.['ChemTrain/reaction-learn']!==278||
  reaction?.source_repository!=='ChemTrain/reaction-learn'||
  reaction?.matched_stored_study_cards!==278||
  reaction?.source_named_reaction_cards!==231||
  reaction?.source_reagent_function_cards!==47||
  reaction?.cards_are_not_exam_questions!==true||
  reaction?.source_independent_chemical_truth_verified!==false||
  reaction?.human_chemistry_approved!==0||
  reaction?.publication_approved!==0||
  reaction?.formal_exam_ready!==0||
  extra?.additional_source_replayed!==185||
  extra?.main_total!==whole||extra?.previously_replayed!==1525||
  extra?.main_coverage_after_addition!==1710||extra?.remaining_unreplayed!==whole-1710||
  extra?.chemquiz_mit_reference!==67||extra?.chemtrain_CC_BY4_source_exercises!==118||
  extra?.sources?.length!==6||extra.sources.reduce((n,x)=>n+x.expected,0)!==185||
  extra?.expert_approved!==0||extra?.exam_ready!==0||
  main?.source_counts?.['bem130/chemquiz']!==67||
  main?.source_counts?.['ChemTrain/radical-learn']!==38||
  main?.source_counts?.['ChemTrain/pg-learn']!==22||
  main?.source_counts?.['ChemTrain/pka-learn']!==20||
  main?.source_counts?.['ChemTrain/reactivity-learn']!==20||
  main?.source_counts?.['ChemTrain/photoredox-learn']!==18||
  muza?.source_repository!=='MuzaPro/Organic-Chemistry-Quiz-JS'||
  muza?.matched_persisted_source_exercises!==5||
  muza?.unresolved_science_condition_concerns!==3||
  muza?.scientifically_qualified_for_exam!==0||
  muza?.source_only_licensing_evidence_not_third_party_item_proof!==true||
  muza?.human_expert_approved!==0||muza?.exam_ready!==0||
  muzaScience?.source_repository!=='MuzaPro/Organic-Chemistry-Quiz-JS'||
  muzaScience?.source_items_reviewed!==5||
  muzaScience?.formal_element_balances_passed!==5||
  muzaScience?.special_science_conditions_pending!==3||
  muzaScience?.items?.length!==5||
  muzaScience.items.some(x=>x.publishable!==false||x.atom_balance?.balanced!==true||
   x.expert_approved!==false||x.needs_human_condition_review!==true)||
  muzaScience?.human_expert_approvals!==0||
  muzaScience?.individual_rights_approvals!==0||
  muzaScience?.exam_ready!==0||
  main?.source_counts?.['MuzaPro/Organic-Chemistry-Quiz-JS']!==5||
  whole<1715+newlyReplayed+reasoningCount||exercise<1437+newlyReplayed+reasoningCount||card!==278)
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
  main_original_numeric_stored_records_verified:replay.checked_stored_candidate_records,
  main_supplementary_source_records_replayed:supplementary.distinct_checked_stored_candidates,
  main_supplementary_with_explicit_numeric_values:37,
  main_tmc_persisted_source_records_replayed:tmc.persisted_question_candidates_replayed,
  main_tmc_source_complexes:tmc.unique_source_complexes,
  main_daily_text_mcq_source_records_replayed:daily.stored_text_only_mcq_candidates_replayed,
  main_previous_stored_replay_records:386,
  main_reaction_study_cards_replayed:reaction.matched_stored_study_cards,
  main_additional_source_exercises_replayed:extra.additional_source_replayed,
  main_muza_persisted_source_replayed:muza.matched_persisted_source_exercises,
  main_muza_science_condition_concerns:muza.unresolved_science_condition_concerns,
  main_independent_muza_formula_checks:muzaScience.formal_element_balances_passed,
  main_independent_muza_science_condition_caveats:muzaScience.special_science_conditions_pending,
  main_total_1715_source_concordance_does_not_imply_scientific_correctness:true,
  main_exercise_candidates_replayed:1437+newlyReplayed+reasoningCount,
  main_new_original_general_chemistry_inverse_replayed:newlyReplayed,
  main_new_original_reasoning_source_replayed:reasoningCount,
  main_exercise_candidates_not_replayed:exercise-1437-newlyReplayed-reasoningCount,
  main_study_cards_not_replayed:card-278,
  main_unique_candidate_records_machine_replayed:1715+newlyReplayed+reasoningCount,
  main_candidate_records_not_yet_machine_replayed:whole-1715-newlyReplayed-reasoningCount,
  main_stored_replay_coverage_fraction:Number(((1715+newlyReplayed+reasoningCount)/whole).toFixed(6)),
  main_replay_cannot_establish_chemistry_truth:true,
  main_replay_requires_expert_science_and_item_rights_review:true,
  main_original_numeric_stored_coverage_fraction:Number((304/whole).toFixed(6)),
  main_candidates_outside_original_numeric_replay:whole-304,
  main_numeric_replay_is_human_science_approval:false,
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
 const replay=JSON.parse(readFileSync(join(ROOT,
  'harvest/main_original_numeric_replay.json'),'utf8'));
 const supplementary=JSON.parse(readFileSync(join(ROOT,
  'harvest/main_supplementary_answer_replay.json'),'utf8'));
 const tmc=JSON.parse(readFileSync(join(ROOT,'harvest/main_tmc_stored_replay.json'),'utf8'));
 const daily=JSON.parse(readFileSync(join(ROOT,'harvest/main_daily_mcq_stored_replay.json'),'utf8'));
 const reaction=JSON.parse(readFileSync(join(ROOT,'harvest/main_reaction_card_stored_replay.json'),'utf8'));
 const extra=JSON.parse(readFileSync(join(ROOT,'harvest/main_additional_185_source_replay.json'),'utf8'));
 const muza=JSON.parse(readFileSync(join(ROOT,'harvest/main_muza_pinned_source_replay.json'),'utf8'));
 const muzaScience=JSON.parse(readFileSync(join(ROOT,
  'harvest/muza_independent_science_review.json'),'utf8'));
 const general=JSON.parse(readFileSync(join(ROOT,
  'harvest/import_reports/original_general_chemistry.json'),'utf8'));
 const reasoningPath=join(ROOT,'harvest/import_reports/original_reasoning_chemistry.json');
 const reasoning=existsSync(reasoningPath)?JSON.parse(readFileSync(reasoningPath,'utf8')):{generated:0};
 const summary=summarize(main,ext,release,rqaState,rqaReview,science,chinese,replay,supplementary,tmc,daily,reaction,extra,muza,muzaScience,general,reasoning),
  path=join(ROOT,'harvest/coverage_report.json');
 const body=JSON.stringify(summary,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Chemistry tiers: main_candidates='+summary.main_candidate_records+
  ' openstax_raw='+summary.external_oer_unreviewed_blocks+
  ' nvidia_rqa_quarantine='+summary.nvidia_synthetic_research_quarantine_records+
  ' combined_records='+summary.combined_record_count_not_unique_exercises+
  ' main_source_replayed='+summary.main_unique_candidate_records_machine_replayed+
  ' stored_original_numeric_replayed='+summary.main_original_numeric_stored_records_verified+
  ' external_independent_science='+summary.external_numeric_source_reviews+
  ' Chinese_external_notes='+summary.external_chinese_independent_derivation_notes+
  ' published='+summary.confirmed_official_exam_ready);
 return summary;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
