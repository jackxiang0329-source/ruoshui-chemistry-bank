import test from 'node:test';
import assert from 'node:assert/strict';
import {summarize} from '../scripts/report-chemistry-coverage.mjs';
const main={total_candidates:1715,by_content_kind:{exercise_candidate:1437,study_card:278},
 source_counts:{'ChemTrain/tmc-learn':593,'ChemTrain/chemtrain-daily':268,'ChemTrain/reaction-learn':278,'bem130/chemquiz':67,'ChemTrain/radical-learn':38,'ChemTrain/pg-learn':22,'ChemTrain/pka-learn':20,'ChemTrain/reactivity-learn':20,'ChemTrain/photoredox-learn':18,'MuzaPro/Organic-Chemistry-Quiz-JS':5}};
const ext={raw_staged_candidates:549,with_source_solution:277,work_license:'CC-BY-3.0',
 item_rights_approved:0,expert_approved:0,exam_ready:0,chapters_inspected:40,discovered_source_chapters:149};
const rel={total_candidates:1715,approved_count:0};
const rqa={staged_total:8056,examined:8400};
const rqareview={evaluated_count:8056,staging_only:true,all_qa_are_unverified:true,automatic_approved_questions:0};
const science={reviewed_source_cases:42,items:Array.from({length:42},(_,i)=>({id:i})),
 publishable:0,rights_confirmations:0,scholarly_human_confirmations:0,
 source_answer_discrepancies:3,source_question_typographical_issues:1};
const chinese={numeric_review_count:42,previous_full_chinese_drafts:8,
 new_chinese_independent_derivations:34,items:Array.from({length:34},(_,i)=>({id:i})),
 edition_rights_unresolved:true,expert_approved:0,reuse_rights_approved:0,
 released_for_exams:0};
const replay={checked_stored_candidate_records:304,checked_distinct_candidate_ids:304,
 provenance_bound_generator_families:5,reviewed_physical_candidate_records:144,
 reviewed_analytical_candidate_records:160,
 coverage_vs_main_records:{total:1715,audited:304,other_candidates_not_yet_covered:1411},
 expert_science_approved:0,publishable_approved:0,formally_exam_ready:0};
const supplementary={distinct_checked_stored_candidates:82,source_groups_verified:6,
 already_in_304_original_numeric_replay:0,combined_unique_candidate_ids_304_plus_82:386,
 main_library_total:1715,main_records_outside_both_replays:1329,
 source_linked_rights_pending_candidate_count:21,source_linked_rights_newly_approved:0,
 scientific_human_approved:0,publishable_approved:0,exam_ready:0,
 groups:[{stored_candidate_records_checked:8,explicitly_recorded_numeric_answers:8},
 {stored_candidate_records_checked:8,explicitly_recorded_numeric_answers:8},
 {stored_candidate_records_checked:12,explicitly_recorded_numeric_answers:12},
 {stored_candidate_records_checked:3,explicitly_recorded_numeric_answers:2},
 {stored_candidate_records_checked:21,explicitly_recorded_numeric_answers:7},
 {stored_candidate_records_checked:30,explicitly_recorded_numeric_answers:0}]};
const tmc={source_repository:'ChemTrain/tmc-learn',unique_source_complexes:199,
 persisted_question_candidates_replayed:593,distinct_question_ids:593,
 question_types:{valence_electrons:199,oxidation_state:197,d_electrons:197},
 expert_chemistry_approved:0,formally_exam_ready:0};
const daily={source_repository:'ChemTrain/chemtrain-daily',
 stored_text_only_mcq_candidates_replayed:268,distinct_persisted_candidate_ids:268,
 distinct_source_question_indexes:268,expert_chemistry_approved:0,formally_exam_ready:0};
const reaction={source_repository:'ChemTrain/reaction-learn',matched_stored_study_cards:278,
 source_named_reaction_cards:231,source_reagent_function_cards:47,
 cards_are_not_exam_questions:true,source_independent_chemical_truth_verified:false,
 human_chemistry_approved:0,publication_approved:0,formal_exam_ready:0};
const extra={additional_source_replayed:185,main_total:1715,previously_replayed:1525,
 main_coverage_after_addition:1710,remaining_unreplayed:5,chemquiz_mit_reference:67,
 chemtrain_CC_BY4_source_exercises:118,expert_approved:0,exam_ready:0,
 sources:[{expected:67},{expected:38},{expected:22},{expected:20},{expected:20},{expected:18}]};
const muza={source_repository:'MuzaPro/Organic-Chemistry-Quiz-JS',
 matched_persisted_source_exercises:5,unresolved_science_condition_concerns:3,
 scientifically_qualified_for_exam:0,source_only_licensing_evidence_not_third_party_item_proof:true,
 human_expert_approved:0,exam_ready:0};
const summarizeWithExtra=(...args)=>summarize(...args,extra,muza);
test('physical-style raw candidates and solved chemistry candidates are never confused',()=>{
 const r=summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,tmc,daily,reaction);
 assert.equal(r.combined_record_count_not_unique_exercises,10320);
 assert.equal(r.main_exercise_candidates,1437);
 assert.equal(r.main_study_cards,278);
 assert.equal(r.external_source_exercise_blocks_with_original_solution,277);
 assert.equal(r.nvidia_synthetic_research_quarantine_records,8056);
 assert.equal(r.confirmed_official_exam_ready,0);
 assert.equal(r.main_original_numeric_stored_records_verified,304);
 assert.equal(r.main_candidates_outside_original_numeric_replay,1411);
 assert.equal(r.main_supplementary_source_records_replayed,82);
 assert.equal(r.main_unique_candidate_records_machine_replayed,1715);
 assert.equal(r.main_reaction_study_cards_replayed,278);
 assert.equal(r.main_exercise_candidates_replayed,1437);
 assert.equal(r.main_study_cards_not_replayed,0);
 assert.equal(r.main_exercise_candidates_not_replayed,0);
 assert.equal(r.main_tmc_persisted_source_records_replayed,593);
 assert.equal(r.main_daily_text_mcq_source_records_replayed,268);
 assert.equal(r.main_previous_stored_replay_records,386);
 assert.equal(r.main_stored_replay_coverage_fraction,Number((1715/1715).toFixed(6)));
 assert.equal(r.main_candidate_records_not_yet_machine_replayed,0);
 assert.equal(r.main_supplementary_with_explicit_numeric_values,37);
 assert.equal(r.main_numeric_replay_is_human_science_approval,false);
 assert.equal(r.external_numeric_source_reviews,42);
 assert.equal(r.external_chinese_independent_derivation_notes,34);
 assert.equal(r.external_chinese_full_draft_reviews,8);
 assert.equal(r.external_chinese_review_rights_blocked,true);
});
test('refuse inaccurate provenance, totals and externally approved flags',()=>{
 assert.throws(()=>summarizeWithExtra({...main,total_candidates:2000},ext,rel,rqa,rqareview,science,chinese,replay,supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,{...ext,exam_ready:1},rel,rqa,rqareview,science,chinese,replay,supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,{...rel,total_candidates:1716},rqa,rqareview,science,chinese,replay,supplementary,tmc,daily,reaction),/Unsafe/);
});

test('do not count unverified synthetic chemistry RQA as exam ready',()=>{
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,{...rqareview,automatic_approved_questions:1},science,chinese,replay,supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,{...rqa,staged_total:9000},rqareview,science,chinese,replay,supplementary,tmc,daily,reaction),/Unsafe/);
});

test('source derivations do not promote or double count raw OER research content',()=>{
 const r=summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,tmc,daily,reaction);
 assert.equal(r.combined_record_count_not_unique_exercises,1715+549+8056);
 assert.equal(r.external_source_answer_key_issue_records,3);
 assert.equal(r.external_source_formula_typo_records,1);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,
   {...chinese,edition_rights_unresolved:false},replay,supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,
   {...chinese,released_for_exams:34},replay,supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,
   {...chinese,new_chinese_independent_derivations:33},replay,supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,
   {...science,rights_confirmations:1},chinese,replay,supplementary,tmc,daily,reaction),/Unsafe/);
});

test('cannot inflate audited main questions, overwrite human approval or count source data twice',()=>{
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,
   {...replay,checked_stored_candidate_records:340},supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,
   {...replay,formally_exam_ready:1},supplementary,tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,
   {...replay,coverage_vs_main_records:{...replay.coverage_vs_main_records,total:1716}},supplementary,tmc,daily,reaction),/Unsafe/);
});

test('supplementary source rights quarantine and source replay cannot be reported as approval',()=>{
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,
   {...supplementary,exam_ready:1},tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,
   {...supplementary,combined_unique_candidate_ids_304_plus_82:400},tmc,daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,
   {...supplementary,groups:supplementary.groups.map((x,i)=>i===0?
    {...x,explicitly_recorded_numeric_answers:9}:x)},tmc,daily,reaction),/Unsafe/);
});

test('cannot manufacture extra TMC MCQs, skip source permission or mark published',()=>{
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
   {...tmc,persisted_question_candidates_replayed:597},daily,reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
   tmc,{...daily,formally_exam_ready:1},reaction),/Unsafe/);
 assert.throws(()=>summarizeWithExtra({...main,source_counts:{...main.source_counts,
   'ChemTrain/tmc-learn':598}},ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
   tmc,daily),/Unsafe/);
});

test('study flashcards must not masquerade as reviewed exam questions',()=>{
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
   tmc,daily,{...reaction,cards_are_not_exam_questions:false}),/Unsafe/);
 assert.throws(()=>summarizeWithExtra(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
   tmc,daily,{...reaction,matched_stored_study_cards:300}),/Unsafe/);
 assert.throws(()=>summarizeWithExtra({...main,source_counts:{...main.source_counts,
   'ChemTrain/reaction-learn':277}},ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
   tmc,daily,reaction),/Unsafe/);
});

test('185 new source checks do not confer human chemistry approval',()=>{
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,chinese,replay,supplementary,
 tmc,daily,reaction,{...extra,exam_ready:1},muza),/Unsafe/);
});

test('all five Muza source matches retain three unresolved scientific condition issues',()=>{
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,chinese,replay,
 supplementary,tmc,daily,reaction,extra,{...muza,unresolved_science_condition_concerns:0}),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,chinese,replay,
 supplementary,tmc,daily,reaction,extra,{...muza,exam_ready:5}),/Unsafe/);
});
