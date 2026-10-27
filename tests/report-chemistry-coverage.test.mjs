import test from 'node:test';
import assert from 'node:assert/strict';
import {summarize} from '../scripts/report-chemistry-coverage.mjs';
const main={total_candidates:1715,by_content_kind:{exercise_candidate:1437,study_card:278}};
const ext={raw_staged_candidates:549,with_source_solution:277,work_license:'CC-BY-3.0',
 item_rights_approved:0,expert_approved:0,exam_ready:0,chapters_inspected:40,discovered_source_chapters:149};
const rel={total_candidates:1715,approved_count:0};
const rqa={staged_total:8056,examined:8400};
const rqareview={evaluated_count:8056,staging_only:true,all_qa_are_unverified:true,automatic_approved_questions:0};
test('physical-style raw candidates and solved chemistry candidates are never confused',()=>{
 const r=summarize(main,ext,rel,rqa,rqareview);
 assert.equal(r.combined_record_count_not_unique_exercises,10320);
 assert.equal(r.main_exercise_candidates,1437);
 assert.equal(r.main_study_cards,278);
 assert.equal(r.external_source_exercise_blocks_with_original_solution,277);
 assert.equal(r.nvidia_synthetic_research_quarantine_records,8056);
 assert.equal(r.confirmed_official_exam_ready,0);
});
test('refuse inaccurate provenance, totals and externally approved flags',()=>{
 assert.throws(()=>summarize({...main,total_candidates:2000},ext,rel,rqa,rqareview),/Unsafe/);
 assert.throws(()=>summarize(main,{...ext,exam_ready:1},rel,rqa,rqareview),/Unsafe/);
 assert.throws(()=>summarize(main,ext,{...rel,total_candidates:1716},rqa,rqareview),/Unsafe/);
});

test('do not count unverified synthetic chemistry RQA as exam ready',()=>{
 assert.throws(()=>summarize(main,ext,rel,rqa,{...rqareview,automatic_approved_questions:1}),/Unsafe/);
 assert.throws(()=>summarize(main,ext,rel,{...rqa,staged_total:9000},rqareview),/Unsafe/);
});
