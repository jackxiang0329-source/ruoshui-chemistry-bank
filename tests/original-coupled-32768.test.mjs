import test from 'node:test';
import assert from 'node:assert/strict';
import {SYSTEMS,CASES_PER_SYSTEM,compute,generate,idFor} from '../scripts/import-original-coupled-32768.mjs';
test('32 chemical systems, four real calculation dependency methods, 32768 candidates',()=>{
 assert.equal(CASES_PER_SYSTEM,1024);
 assert.equal(SYSTEMS.length,32);
 assert.equal(new Set(SYSTEMS.map(x=>x.id)).size,32);
 assert.equal(new Set(SYSTEMS.map(x=>x.archetype)).size,4);
 const rows=generate();
 assert.equal(rows.length,32768);
 assert.equal(new Set(rows.map(x=>x.id)).size,32768);
 for(const s of ['inorganic','analytical','organic','physical'])assert.equal(rows.filter(x=>x.subject===s).length,8192);
});
test('every parameter case independently reverses each stage of the complete chemical model',()=>{
 let checks=0;
 for(const f of SYSTEMS)for(let i=0;i<1024;i++){
  const c=compute(f,i);
  assert.equal(c.answers.length,c.checks.length);
  assert.ok(c.checks.every(x=>Number.isFinite(x)&&x<1e-8));
  assert.ok(c.answers.every(x=>Number.isFinite(x)));
  checks+=c.checks.length;
 }
 assert.equal(checks,163840);
});
test('all imported examples remain nonpublishable with explicit original CC0 and source trace',()=>{
 for(const q of generate()){
  assert.equal(q.id,idFor(q.question));
  assert.equal(q.solution_steps.length,4);
  assert.equal(q.numeric_answers.length,q.independent_inverse_count);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.equal(q.human_expert_reviewed,false);
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
 }
});
test('hard fail on false parameter domains',()=>{
 for(const s of SYSTEMS)assert.throws(()=>compute(s,1024),/index out of range/);
});
