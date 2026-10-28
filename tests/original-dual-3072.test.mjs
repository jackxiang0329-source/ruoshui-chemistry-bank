import test from 'node:test';
import assert from 'node:assert/strict';
import {FAMILIES,candidateId,verify,generate} from '../scripts/import-original-dual-3072.mjs';
test('48 new topics, 3072 unique Chinese two-result questions, 768 per subject',()=>{
 const q=generate();
 assert.equal(FAMILIES.length,48);
 assert.equal(new Set(FAMILIES.map(f=>f.id)).size,48);
 assert.equal(q.length,3072);
 assert.equal(new Set(q.map(x=>x.id)).size,3072);
 assert.equal(new Set(q.map(x=>x.topic_family)).size,48);
 for(const s of ['inorganic','analytical','organic','physical']){
  const rows=q.filter(x=>x.subject===s);
  assert.equal(rows.length,768);
  assert.equal(new Set(rows.map(x=>x.topic_family)).size,12);
 }
});
test('6144 independent chemistry algebra identities; mutation of either output must be caught',()=>{
 let checked=0;
 for(const f of FAMILIES)for(let i=0;i<64;i++){
  const a=Number((f.a+i*f.da).toPrecision(10));
  const b=Number((f.b+i*f.db).toPrecision(10));
  const values=f.calc(a,b);
  assert.equal(verify(f,a,b,values).length,2);
  for(let j=0;j<2;j++){
   const changed=values.slice();
   changed[j]=changed[j]===0?1e-3:changed[j]*1.01;
   assert.throws(()=>verify(f,a,b,changed),/conservation residual failed/);
  }
  checked+=2;
 }
 assert.equal(checked,6144);
});
test('all source records fail closed on rights, peer review and semantic de-duplication',()=>{
 for(const q of generate()){
  assert.equal(q.id,candidateId(q.question));
  assert.equal(q.numeric_answers.length,2);
  assert.equal(q.numeric_answer_units.length,2);
  assert.equal(q.solution_steps.length,3);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
 }
});
