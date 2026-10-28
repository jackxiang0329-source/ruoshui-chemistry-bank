import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,FAMILIES,verifySet,candidateId} from '../scripts/import-original-rapid-240.mjs';
test('48 independent authored families and 240 distinct parameterized solved problems',()=>{
 const q=generate();
 assert.equal(q.length,240);assert.equal(FAMILIES.length,48);
 assert.equal(new Set(q.map(x=>x.id)).size,240);
 assert.equal(new Set(q.map(x=>x.topic_family)).size,48);
 for(const subject of ['inorganic','analytical','organic','physical']){
  assert.equal(q.filter(x=>x.subject===subject).length,60);
  assert.equal(new Set(q.filter(x=>x.subject===subject).map(x=>x.topic_family)).size,12);
 }
});
test('240 numerical witnesses checked against separately authored conservation equations',()=>{
 for(const f of FAMILIES)for(let i=0;i<5;i++){
  const a=Number((f.a+i*f.da).toPrecision(9)),b=Number((f.b+i*f.db).toPrecision(9));
  const v=f.calc(a,b);
  assert.equal(verifySet(f,a,b,v),true);
  assert.throws(()=>verifySet(f,a,b,v===0?.001:v*1.01),/conservation check failed/);
 }
});
test('strict source trace, distinct texts, no release until human review',()=>{
 for(const q of generate()){
  assert.equal(q.id,candidateId(q.question));
  assert.ok(q.question.length>=65&&q.explanation.length>=35);
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.human_expert_reviewed,false);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
 }
});
