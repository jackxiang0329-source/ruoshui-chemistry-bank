import test from 'node:test';
import assert from 'node:assert/strict';
import {pairs,combine,generate,caseOf,idFromQuestion,PARAMETER_SET_COUNT} from '../scripts/import-original-multitopic-33792.mjs';
test('264 unique same-discipline topic pairs and 33792 mixed science problem records',()=>{
 const pp=pairs();assert.equal(pp.length,264);assert.equal(new Set(pp.map(p=>p.pair_id)).size,264);
 const list=generate();assert.equal(list.length,33792);
 assert.equal(new Set(list.map(q=>q.id)).size,33792);
 for(const s of ['inorganic','analytical','organic','physical']){
  const q=list.filter(x=>x.subject===s);
  assert.equal(q.length,8448);assert.equal(new Set(q.map(x=>x.topic_family)).size,66);
 }
});
test('202752 per-topic independent equations, no mixed-dimension operations',()=>{
 let seen=0;
 for(const p of pairs())for(let i=0;i<PARAMETER_SET_COUNT;i++){
  const q=combine(p,i);
  assert.equal(q.numeric_answers.length,6);assert.equal(q.numeric_answer_units.length,6);
  assert.equal(q.solution_steps.length,6);assert.equal(q.inverse_residuals.length,6);
  assert.ok(q.inverse_residuals.every(v=>Number.isFinite(v)&&v<=1e-7));
  assert.notEqual(q.model_source_ids[0],q.model_source_ids[1]);
  assert.ok(q.question.length>160&&q.explanation.length>300);
  seen+=6;
 }
 assert.equal(seen,202752);
});
test('source inverse falsification and rights flags remain fail-closed',()=>{
 const pp=pairs();
 for(const p of pp){
  const x=caseOf(p.left,4);
  const bad={...p.left,calc:(a,b)=>p.left.calc(a,b).map(z=>z===0?.001:z*1.01)};
  assert.throws(()=>caseOf(bad,4),/inverse violation/);
  assert.equal(x.numbers.length,3);
 }
 for(const q of generate()){
  assert.equal(q.id,idFromQuestion(q.question));
  assert.equal(q.publishable,false);
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.human_expert_reviewed,false);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.third_party_question_text_copied,false);
 }
});
