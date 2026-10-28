import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {CASES,generate} from '../scripts/import-introqchem-2021.mjs';
import {audit,markdown,verifyIndependentIdentities} from '../scripts/audit-introqchem-key-reconciliation.mjs';
const pin=JSON.parse(readFileSync(new URL('../harvest/pinned_introqchem_2021.json',import.meta.url),'utf8'));
test('21 source questions: 13 older flags, 2 resolved false alarms, 11 actionable source issues',()=>{
 const r=audit(CASES,generate(),pin);
 assert.equal(r.all_fixed_course_exercises,21);
 assert.equal(r.previously_flagged_disputes,13);
 assert.equal(r.false_positive_dispute_labels_corrected,2);
 assert.equal(r.remaining_source_answer_or_question_issues,11);
 assert.equal(r.issues.filter(x=>x.numerical_results_independently_recomputed.length>0).length,3);
 assert.equal(r.source_issue_types.source_question_unit_or_formula_error,2);
 assert.equal(r.source_issue_types.source_notebook_variable_or_condition_typo,2);
 assert.equal(r.source_issue_types.logical_options_or_wording_interpretation,3);
 assert.equal(r.source_issue_types.source_assumption_or_outdated_terminology,2);
 assert.equal(r.source_issue_types.scientific_evidence_interpretation,2);
 assert.equal(r.source_rights_confirmed,0);
 assert.equal(r.expert_review_approved,0);
 assert.equal(r.released_for_exams,0);
 assert.match(markdown(r),/复数模/);
});
test('force is momentum transfer per second, not kg m/s',()=>{
 const p=verifyIndependentIdentities();
 assert.equal(p.radiation_pressure_examples.length,3);
 for(const x of p.radiation_pressure_examples)
  assert.ok(Math.abs(x.force_N*299792458/.1-1)<1e-12);
 assert.match(p.kinetic_counterexample,/cos/);
});
test('no unlicensed material, changed source notebook or invented expert signoff',()=>{
 const rows=generate();
 assert.throws(()=>audit(CASES,rows,{...pin,item_level_rights_cleared:true}),/metadata changed/);
 assert.throws(()=>audit(CASES,rows.map((x,i)=>i===0?
  {...x,source_key_issue:'source_answer_confirmed'}:x),pin),/Source-locked/);
 assert.throws(()=>audit(CASES,rows.map((x,i)=>i===4?
  {...x,source:{...x.source,content_rights_verified:true}}:x),pin),/Source-locked/);
});
