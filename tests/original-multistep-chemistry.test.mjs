import test from 'node:test';
import assert from 'node:assert/strict';
import {CASES,generate,validateBalances,qid} from '../scripts/import-original-multistep-chemistry.mjs';
test('twelve independently authored three-stage solutions across two subjects',()=>{
 const a=generate();assert.equal(a.length,12);
 assert.equal(new Set(a.map(x=>x.topic)).size,12);
 assert.equal(new Set(a.map(x=>x.id)).size,12);
 assert.equal(a.filter(x=>x.subject==='analytical').length,6);
 assert.equal(a.filter(x=>x.subject==='physical').length,6);
 assert.equal(a.reduce((n,x)=>n+x.solution_steps.length,0),36);
});
test('24 independent physical/chemical balances; 1% perturbation must fail',()=>{
 for(const row of CASES){
  const [subject,topic,q,steps,n1,x,u1,n2,y,u2]=row;
  assert.equal(validateBalances(topic,x,y),true);
  const bump=(n)=>n===0?.01:n*1.01;
  assert.throws(()=>validateBalances(topic,bump(x),y),/verification failed/);
  assert.throws(()=>validateBalances(topic,x,bump(y)),/verification failed/);
 }
 assert.throws(()=>validateBalances('not_a_real_problem',1,2),/Uncheckable/);
});
test('authorship, explicit derivation, immutable reference and no auto-approval',()=>{
 for(const q of generate()){
  assert.equal(q.id,qid(q.question));
  assert.equal(q.numeric_answers.length,2);
  assert.equal(q.numeric_answer_units.length,2);
  assert.ok(q.explanation.length>150&&q.question.length>80);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.mathematical_balance_checks_only_not_chemistry_peer_review,true);
 }
});
