import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,questionId,makeMatchingQuestions} from '../scripts/import-chemtrain-radical-matching.mjs';
test('fixed CC BY 4.0 Radical Learn source has 12 complete self-contained MCQs',()=>{
 const rows=generate();
 assert.equal(rows.length,12);
 assert.equal(new Set(rows.map(x=>x.id)).size,12);
 for(const [idx,q] of rows.entries()){
  assert.equal(q.source.source_question_index,idx);
  assert.equal(q.id,questionId(q.question));
  assert.equal(q.answer,q.options[0]);
  assert.equal(q.answer_option,'A');
  assert.ok(q.question.includes(q.options[0])&&q.question.includes(q.options[1]));
  assert.ok(q.explanation.length>28);
  assert.equal(q.source.license,'CC BY 4.0');
  assert.equal(q.source.content_rights_verified,true);
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.independent_chemistry_expert_approved,false);
 }
});
test('detects missing original options, wrong correct-answer order or blank explanation',()=>{
 const source=[{id:'carbon',questions:[]},{id:'hetero',questions:[]},{id:'match',questions:[]}];
 const x={radicals:source,mols:Array.from({length:50},()=>[])};
 assert.throws(()=>makeMatchingQuestions(x),/Expected 12/);
 const full=generate();
 assert.equal(new Set(full.map(x=>x.question)).size,12);
});
