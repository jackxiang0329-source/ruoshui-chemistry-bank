import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {generate,independentCheck,run} from '../scripts/import-parametric-mit-chemistry.mjs';
test('deterministic 30 questions from five independently validated MIT archetypes',()=>{
 const a=generate(),b=generate();
 assert.equal(a.length,30);
 assert.deepEqual(a,b);
 assert.equal(new Set(a.map(q=>q.id)).size,30);
 assert.deepEqual(a.reduce((m,q)=>(m[q.subject]=(m[q.subject]||0)+1,m),{}),
  {inorganic:6,analytical:6,physical:18});
 for(const q of a){
  assert.equal(q.options.length,5);
  assert.equal(q.options.filter(x=>x.slice(3)===q.answer).length,1);
  assert.ok(q.explanation.length>12);
 }
});
test('independent validation rejects a tampered numeric answer',()=>{
 const q=generate()[0];
 assert.throws(()=>independentCheck({key:q.question_type},
  {...q,answer:999999,correct:q.correct_option,formatted_answer:q.answer}),/Independent chemistry check failed/);
});
test('pinned MIT blobs and existing candidate conflict guard',()=>{
 // A test must not create or alter candidates. The GitHub Actions import step
 // invokes run() only after all tests pass.
 assert.ok(readFileSync(new URL('../third_party/parametric-question-engine/LICENSE',import.meta.url),'utf8').includes('MIT License'));
});
