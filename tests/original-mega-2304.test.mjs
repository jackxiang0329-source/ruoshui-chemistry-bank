import test from 'node:test';
import assert from 'node:assert/strict';
import {ALL_FAMILIES,generate,verify,idFor} from '../scripts/import-original-mega-2304.mjs';
test('64 original model families produce 2304 uniquely hashed worked cases',()=>{
 const q=generate();
 assert.equal(ALL_FAMILIES.length,64);
 assert.equal(q.length,2304);
 assert.equal(new Set(q.map(x=>x.id)).size,2304);
 assert.equal(new Set(q.map(x=>x.topic_family)).size,64);
 for(const s of ['inorganic','analytical','organic','physical']){
  assert.equal(q.filter(x=>x.subject===s).length,576);
  assert.equal(new Set(q.filter(x=>x.subject===s).map(x=>x.topic_family)).size,16);
 }
});
test('independent inverse conservation checks and 1% answer-mutation regression',()=>{
 for(const f of ALL_FAMILIES)for(let i=0;i<36;i++){
  const a=Number((f.a+i*f.da).toPrecision(10));
  const b=Number((f.b+i*f.db).toPrecision(10));
  const val=f.calc(a,b);
  assert.equal(verify(f,a,b,val),true);
  const wrong=val===0?.01:val*1.01;
  assert.throws(()=>verify(f,a,b,wrong),/inverse check failed/);
 }
});
test('all 2304 complete three-step original exercises remain unpublished',()=>{
 const q=generate();
 for(const r of q){
  assert.equal(r.id,idFor(r.question));
  assert.equal(r.solution_steps.length,3);
  assert.ok(r.solution_steps.every(s=>s.length>=80));
  assert.equal(r.publishable,false);
  assert.equal(r.quality_status,'awaiting_expert_review');
  assert.equal(r.requires_human_chemistry_review,true);
  assert.equal(r.semantic_duplicate_review_pending,true);
  assert.equal(r.source.original_exam_question,false);
  assert.equal(r.source.third_party_question_text_copied,false);
  assert.equal(r.source.license,'CC0-1.0');
 }
});
