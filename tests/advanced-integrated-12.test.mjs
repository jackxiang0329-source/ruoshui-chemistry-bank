import test from 'node:test';
import assert from 'node:assert/strict';
import {CASES,verifyCase,candidateRecords,stableId,buildTex} from '../scripts/advanced-integrated-12.mjs';
test('twelve genuinely distinct authored models with full Chinese solutions',()=>{
 assert.equal(CASES.length,12);
 assert.equal(new Set(CASES.map(x=>x.title)).size,12);
 for(const s of ['inorganic','analytical','organic','physical'])assert.equal(CASES.filter(x=>x.subject===s).length,3);
 for(const x of CASES){
  assert.ok(x.question_tex.length>200);
  assert.ok(x.solution_tex.length>300);
  assert.ok(x.assumptions.length>20);
 }
});
test('57 inverse-equation and independent-reference checks, including falsification',()=>{
 let n=0;
 for(const x of CASES){
  const {numbers,witnesses}=verifyCase(x);
  assert.equal(numbers.length,witnesses.length);
  for(let i=0;i<numbers.length;i++){
   const corrupted=numbers.slice();
   corrupted[i]=corrupted[i]===0?0.01:corrupted[i]*1.01;
   assert.ok(x.verify(corrupted).some(v=>v>1e-5),'undetected numeric mutation '+x.id+' '+i);
  }
  n+=numbers.length;
 }
 assert.equal(n,57);
});
test('all twelve source candidates remain original, pending human review and non-publishable',()=>{
 const rows=candidateRecords();assert.equal(rows.length,12);
 assert.equal(new Set(rows.map(x=>x.id)).size,12);
 for(const r of rows){
  assert.equal(r.id,stableId(r.question));
  assert.equal(r.publishable,false);
  assert.equal(r.quality_status,'awaiting_expert_review');
  assert.equal(r.human_expert_reviewed,false);
  assert.equal(r.semantic_duplicate_review_pending,true);
  assert.equal(r.source.license,'CC0-1.0');
  assert.equal(r.source.original_exam_question,false);
  assert.equal(r.source.third_party_question_text_copied,false);
 }
});
test('Chinese typesetting produces complete question, solution and review sections',()=>{
 const tex=buildTex();
 assert.equal((tex.match(/\\section\{/g)||[]).length,24);
 assert.equal((tex.match(/\\sciencewarn\{/g)||[]).length,12);
 assert.ok(tex.includes('Noto Serif CJK SC'));
 assert.ok(tex.includes('严格解答与计算验证'));
 assert.ok(tex.includes('未通过专家审定'));
 assert.ok(tex.includes('\\end{document}'));
});
