import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,ITEMS,verifyNumeric,idFor} from '../scripts/import-original-integrated-chemistry.mjs';
test('twenty distinct original question topics across four college chemistry subjects',()=>{
 const q=generate();assert.equal(q.length,20);assert.equal(ITEMS.length,20);
 assert.equal(new Set(q.map(z=>z.id)).size,20);
 assert.equal(new Set(q.map(z=>z.topic)).size,20);
 for(const s of ['inorganic','analytical','organic','physical'])
  assert.equal(q.filter(z=>z.subject===s).length,5);
});
test('numeric witnesses fail when perturbed and are separate from conceptual review',()=>{
 let checked=0,conceptual=0;
 for(const x of ITEMS){if(x[5]===null){conceptual++;continue;}
  checked++;assert.equal(verifyNumeric(x[1],x[5]),true);
  assert.throws(()=>verifyNumeric(x[1],x[5]*1.1),/Invalid/);}
 assert.equal(checked,14);assert.equal(conceptual,6);
});
test('authorship, answers, provenance, license and manual review gate cannot silently disappear',()=>{
 for(const q of generate()){
  assert.equal(q.id,idFor(q.question));assert.ok(q.question.length>30&&q.answer.length>15&&q.explanation.length>30);
  assert.equal(q.source.license,'CC0-1.0');assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.quality_status,'awaiting_expert_review');assert.equal(q.publishable,false);
  assert.equal(q.scientific_human_approval,false);assert.equal(q.semantic_duplicate_review_pending,true);
 }
});
