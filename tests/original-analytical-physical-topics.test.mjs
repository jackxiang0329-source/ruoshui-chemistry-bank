import test from 'node:test';
import assert from 'node:assert/strict';
import {CASES,generate,validateNumeric,digest} from '../scripts/import-original-analytical-physical-topics.mjs';
test('20 independently authored topics, exactly 10 each in analytical and physical chemistry',()=>{
 const qs=generate();
 assert.equal(qs.length,20);assert.equal(CASES.length,20);
 assert.equal(new Set(qs.map(x=>x.topic)).size,20);
 assert.equal(new Set(qs.map(x=>x.id)).size,20);
 assert.equal(qs.filter(x=>x.subject==='analytical').length,10);
 assert.equal(qs.filter(x=>x.subject==='physical').length,10);
});
test('all twenty numeric answers satisfy independently written inverse equations',()=>{
 for(const c of CASES){
  assert.equal(validateNumeric(c[1],c[6]),true);
  assert.throws(()=>validateNumeric(c[1],c[6]*1.01),/inverse check failed/);
  assert.throws(()=>validateNumeric(c[1],-c[6]),/inverse check failed/);
 }
 assert.throws(()=>validateNumeric('unlisted_topic',1),/inverse check failed/);
});
test('none of the stored-source model objects passes expert publication or copyright gates',()=>{
 for(const q of generate()){
  assert.equal(q.id,digest(q.question));
  assert.ok(q.answer.length>15&&q.question.length>=50&&q.explanation.length>=45);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.numerical_inverse_crosschecked,true);
  assert.equal(q.mathematical_identity_check_only_not_science_peer_review,true);
 }
});
