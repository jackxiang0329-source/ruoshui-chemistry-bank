import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,FAMILIES,validate,qid} from '../scripts/import-original-chapter-1152.mjs';
test('1152 original cases, 48 source families, four equal discipline groups',()=>{
 const q=generate();assert.equal(q.length,1152);assert.equal(FAMILIES.length,48);
 assert.equal(new Set(q.map(x=>x.id)).size,1152);assert.equal(new Set(q.map(x=>x.topic_family)).size,48);
 for(const s of ['inorganic','analytical','organic','physical']){
  assert.equal(q.filter(x=>x.subject===s).length,288);
  assert.equal(new Set(q.filter(x=>x.subject===s).map(x=>x.topic_family)).size,12);
 }
});
test('1152 numerical inverses recompute with independent algebraic conservation witnesses',()=>{
 for(const f of FAMILIES)for(let i=0;i<24;i++){
  const a=+(f.a+i*f.da).toPrecision(10),b=+(f.b+i*f.db).toPrecision(10),n=f.calc(a,b);
  assert.equal(validate(f,a,b,n),true);
  assert.throws(()=>validate(f,a,b,n*1.01),/conservation check failed/);
 }
});
test('strict original CC0 rights gates with no automatic scientific approval',()=>{
 for(const q of generate()){
  assert.equal(q.id,qid(q.question));assert.ok(q.question.length>=45&&q.explanation.length>=35);
  assert.equal(q.publishable,false);assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.source.license,'CC0-1.0');assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
 }
});
