import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,totalTopicFamilies,pairOffsets,problemId,comparison} from '../scripts/import-original-contrast-10080.mjs';
import {ALL_FAMILIES as mega} from '../scripts/import-original-mega-2304.mjs';
import {FAMILIES as dual} from '../scripts/import-original-dual-3072.mjs';
test('10080 new paired-scenario source-bound Chinese chemistry cases across 112 pre-existing topics',()=>{
 const a=generate();
 assert.equal(a.length,10080);
 assert.equal(totalTopicFamilies,112);
 assert.deepEqual(pairOffsets,[1,5]);
 assert.equal(new Set(a.map(q=>q.id)).size,10080);
 for(const s of ['inorganic','analytical','organic','physical']){
  assert.equal(a.filter(q=>q.subject===s).length,2520);
 }
 assert.equal(a.filter(q=>q.source_model==='mega').length,4224);
 assert.equal(a.filter(q=>q.source_model==='dual').length,5856);
});
test('paired chemistry models independently invert both input cases and preserve each numeric difference',()=>{
 const a=generate();
 let checks=0;
 for(const q of a){
  const n=q.model_output_count;
  assert.equal(q.numeric_answers.length,3*n);
  assert.equal(q.units.length,3*n);
  assert.equal(q.solution_steps.length,3);
  for(let k=0;k<n;k++){
   const x=q.numeric_answers[k],y=q.numeric_answers[n+k],d=q.numeric_answers[2*n+k];
   assert.ok(Math.abs(x+d-y)<=1e-8*Math.max(1,Math.abs(x),Math.abs(y)));
   checks++;
  }
  assert.equal(q.source_inverse_residuals.length,2);
  assert.ok(q.source_inverse_residuals.flat().every(x=>x<=1e-7));
  assert.equal(q.id,problemId(q.question));
 }
 assert.ok(checks>=10080);
});
test('all 10080 cases remain CC0 authored and unapproved; alteration of source model is detected',()=>{
 const a=generate();
 for(const q of a){
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.equal(q.human_expert_reviewed,false);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
 }
 const f=mega[0],i=0;
 const ok=comparison(f,i,1,'mega');
 assert.ok(ok.numeric_answers.length===3);
 const bad={...f,calc:(a,b)=>f.calc(a,b)*1.01};
 assert.throws(()=>comparison(bad,i,1,'mega'),/regression/);
 assert.equal(dual.length,48);
});
