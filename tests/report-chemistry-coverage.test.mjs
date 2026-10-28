import test from 'node:test';
import assert from 'node:assert/strict';
import {summarize} from '../scripts/report-chemistry-coverage.mjs';
const main={total_candidates:1715,by_content_kind:{exercise_candidate:1437,study_card:278}};
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
test('physical-style raw candidates and solved chemistry candidates are never confused',()=>{
 const r=summarize(main,ext,rel,rqa,rqareview,science,chinese,replay);
 assert.equal(r.combined_record_count_not_unique_exercises,10320);
 assert.equal(r.main_exercise_candidates,1437);
 assert.equal(r.main_study_cards,278);
 assert.equal(r.external_source_exercise_blocks_with_original_solution,277);
 assert.equal(r.nvidia_synthetic_research_quarantine_records,8056);
 assert.equal(r.confirmed_official_exam_ready,0);
 assert.equal(r.main_original_numeric_stored_records_verified,304);
 assert.equal(r.main_candidates_outside_original_numeric_replay,1411);
 assert.equal(r.main_numeric_replay_is_human_science_approval,false);
 assert.equal(r.external_numeric_source_reviews,42);
 assert.equal(r.external_chinese_independent_derivation_notes,34);
 assert.equal(r.external_chinese_full_draft_reviews,8);
 assert.equal(r.external_chinese_review_rights_blocked,true);
});
test('refuse inaccurate provenance, totals and externally approved flags',()=>{
 assert.throws(()=>summarize({...main,total_candidates:2000},ext,rel,rqa,rqareview,science,chinese,replay),/Unsafe/);
 assert.throws(()=>summarize(main,{...ext,exam_ready:1},rel,rqa,rqareview,science,chinese,replay),/Unsafe/);
 assert.throws(()=>summarize(main,ext,{...rel,total_candidates:1716},rqa,rqareview,science,chinese,replay),/Unsafe/);
});

test('do not count unverified synthetic chemistry RQA as exam ready',()=>{
 assert.throws(()=>summarize(main,ext,rel,rqa,{...rqareview,automatic_approved_questions:1},science,chinese,replay),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,{...rqa,staged_total:9000},rqareview,science,chinese,replay),/Unsafe/);
});

test('source derivations do not promote or double count raw OER research content',()=>{
 const r=summarize(main,ext,rel,rqa,rqareview,science,chinese,replay);
 assert.equal(r.combined_record_count_not_unique_exercises,1715+549+8056);
 assert.equal(r.external_source_answer_key_issue_records,3);
 assert.equal(r.external_source_formula_typo_records,1);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,
   {...chinese,edition_rights_unresolved:false},replay),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,
   {...chinese,released_for_exams:34},replay),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,
   {...chinese,new_chinese_independent_derivations:33},replay),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,
   {...science,rights_confirmations:1},chinese,replay),/Unsafe/);
});

test('cannot inflate audited main questions, overwrite human approval or count source data twice',()=>{
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,chinese,
   {...replay,checked_stored_candidate_records:340}),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,chinese,
   {...replay,formally_exam_ready:1}),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,rqa,rqareview,science,chinese,
   {...replay,coverage_vs_main_records:{...replay.coverage_vs_main_records,total:1716}}),/Unsafe/);
});
