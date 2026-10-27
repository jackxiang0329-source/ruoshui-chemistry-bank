import test from 'node:test';
import assert from 'node:assert/strict';
import {CASES,independentlyCalculate} from '../scripts/review-openstax-chemistry-numerics.mjs';
import {candidateId,makeCandidates} from '../scripts/import-curated-openstax-chemistry.mjs';
const items=CASES.map((c,i)=>({
 source_id:'OSCHEM-'+String(i).repeat(24),source_path:c.path,
 source_exercise_ordinal:c.ordinal,source_url:'https://example.org/source/'+i,
 question_sha256:'a'.repeat(64),issue:c.keyDiscrepancy||null,
 independently_calculated_results:independentlyCalculate(c.tag),
 release_eligible:false,source_item_rights_verified:false,
 independent_human_chemist_review_completed:false,machine_computation_checked:true,
 material_requires_manual_rights_check:true
}));
const r={reviewed_source_cases:8,publishable:0,scholarly_human_confirmations:0,
 rights_confirmations:0,source_commit:'a'.repeat(40),items};
test('eight distinct Chinese course exercises are explicitly reviewer-only and source-attributed',()=>{
 const qs=makeCandidates(r);
 assert.equal(qs.length,8);
 assert.equal(new Set(qs.map(x=>x.id)).size,8);
 assert.equal(qs.filter(x=>x.subject==='analytical').length,4);
 assert.equal(qs.filter(x=>x.subject==='inorganic').length,2);
 assert.equal(qs.filter(x=>x.subject==='physical').length,2);
 for(const q of qs){
  assert.equal(candidateId(q.question),q.id);
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.source.content_rights_verified,false);
  assert.equal(q.source.item_level_rights_review_pending,true);
  assert.equal(q.scientifically_machine_checked,true);
  assert.equal(q.scientifically_expert_approved,false);
  assert.equal(q.numeric_answers.length>0,true);
  assert.ok(q.question.length>45&&q.answer.length>65);
 }
});
test('textbook pH/pOH correction is included, not blindly copied',()=>{
 const item=makeCandidates(r).find(x=>x.topic==='strong_acid_base_ph_poh_with_key_errata');
 assert.ok(item);
 assert.match(item.answer,/pH≈13\.32/);
 assert.match(item.answer,/pOH≈−0\.40/);
 assert.equal(item.source_key_issue,'textbook_swaps_pH_and_pOH_for_b_and_d');
});
test('no publication or quiet numerical changes after scientific staging',()=>{
 assert.throws(()=>makeCandidates({...r,publishable:1}),/Unsafe/);
 assert.throws(()=>makeCandidates({...r,items:items.map((q,i)=>i===0?{...q,release_eligible:true}:q)}),/Missing verified/);
 assert.throws(()=>makeCandidates({...r,items:items.map((q,i)=>i===0?{...q,
  independently_calculated_results:[999,999,999,999]}:q)}),/Scientific source numbers/);
});
