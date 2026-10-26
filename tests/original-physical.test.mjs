import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,questionId,round3,verifyNumerics} from '../scripts/import-original-physical.mjs';
test('24 original physical chemistry questions, all distinct and unpublished',()=>{
 const q=generate();
 assert.equal(q.length,24);
 assert.equal(new Set(q.map(x=>x.id)).size,24);
 assert.deepEqual(q.reduce((a,x)=>(a[x.question_type]=(a[x.question_type]||0)+1,a),{}),
  {standard_gibbs_from_K:6,arrhenius_activation_energy:6,first_order_half_life:6,reversible_isothermal_expansion_work:6});
 for(const x of q){assert.equal(x.subject,'physical');assert.ok(x.question&&x.answer&&x.explanation);assert.ok(verifyNumerics(x));}
});
test('unit conventions and sign checks',()=>{
 const q=generate();
 assert.ok(q.filter(x=>x.question_type==='reversible_isothermal_expansion_work').every(x=>Number(x.answer.split(' ')[0])<0));
 assert.ok(q.filter(x=>x.question_type==='arrhenius_activation_energy').every(x=>Number(x.answer.split(' ')[0])>0));
 assert.ok(q.find(x=>x.question_type==='standard_gibbs_from_K'&&x.parameters.K_dimensionless<1).answer.startsWith('5.'));
 assert.equal(round3(Math.log(2)/0.1),6.931);
});
test('prompt IDs normalize Unicode and whitespace',()=>{
 assert.equal(questionId('Ａ  B'),questionId('a b'));
});
test('numeric verifier rejects altered answer',()=>{
 const q=generate()[0];q.answer='999.000 kJ/mol';
 assert.throws(()=>verifyNumerics(q),/Numeric mismatch/);
});
