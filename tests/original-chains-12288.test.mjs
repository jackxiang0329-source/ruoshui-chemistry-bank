import test from 'node:test';
import assert from 'node:assert/strict';
import {FAMILIES,generate,verifyModel,hashQuestion} from '../scripts/import-original-chains-12288.mjs';
test('48 new three-output chemical templates yield exactly 12288 source-bound solved exercises',()=>{
 const q=generate();
 assert.equal(FAMILIES.length,48);
 assert.equal(new Set(FAMILIES.map(x=>x.id)).size,48);
 assert.equal(q.length,12288);
 assert.equal(new Set(q.map(x=>x.id)).size,12288);
 for(const s of ['inorganic','analytical','organic','physical']){
  const r=q.filter(x=>x.subject===s);
  assert.equal(r.length,3072);
  assert.equal(new Set(r.map(x=>x.topic_family)).size,12);
 }
});
test('36864 separately recomputed inverse identities across the complete chemical parameter grid',()=>{
 let total=0;
 for(const f of FAMILIES)for(let i=0;i<256;i++){
  const a=Number((f.a+i*f.da).toPrecision(10));
  const b=Number((f.b+i*f.db).toPrecision(10));
  const ans=f.calc(a,b);
  assert.equal(verifyModel(f,a,b,ans).length,3);
  for(let k=0;k<3;k++){
   const wrong=ans.slice();
   wrong[k]=ans[k]===0?1e-3:ans[k]*1.01;
   assert.throws(()=>verifyModel(f,a,b,wrong),/three-equation model audit failed/);
  }
  total+=3;
 }
 assert.equal(total,36864);
});
test('provenance and rights are CC0 and all 12288 authored candidates stay unpublished',()=>{
 for(const q of generate()){
  assert.equal(q.id,hashQuestion(q.question));
  assert.equal(q.numeric_answers.length,3);
  assert.equal(q.numeric_answer_units.length,3);
  assert.equal(q.solution_steps.length,3);
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
 }
});
