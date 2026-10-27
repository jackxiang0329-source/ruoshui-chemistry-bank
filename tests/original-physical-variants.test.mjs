import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,derive,checkInverse,questionId} from '../scripts/import-original-physical-variants.mjs';
test('72 physical chemistry problems from six distinct undergraduate methods',()=>{
 const rows=generate();
 assert.equal(rows.length,72);
 assert.equal(new Set(rows.map(x=>x.id)).size,72);
 const topics=Object.groupBy(rows,x=>x.topic);
 assert.equal(Object.keys(topics).length,6);
 assert.ok(Object.values(topics).every(g=>g.length===12));
 assert.ok(rows.every(x=>x.publishable===false&&x.quality_status==='awaiting_expert_review'&&
  x.source.license==='CC0-1.0'&&x.source.original_exam_question===false));
});
test('all numerical solutions pass independently inverted chemical equations',()=>{
 const types={
  nernst_equation:'nernst_cell',
  vant_hoff_equilibrium_temperature:'vant_hoff_shift',
  vapor_pressure_temperature:'clausius_clapeyron',
  dilute_solution_osmotic_pressure:'osmotic_pressure',
  dilute_solution_freezing_point:'freezing_point_depression',
  quantum_particle_in_box:'particle_box_transition'
 };
 for(const q of generate()){
  const type=types[q.topic];
  const expected=derive(type,q.parameters);
  assert.ok(Math.abs(expected-q.numeric_answers[0])<1e-11);
  assert.equal(checkInverse(type,q.parameters,expected),true);
  assert.equal(questionId(q.question),q.id);
  assert.ok(q.question.length>65&&q.answer.length>20&&q.explanation.length>20);
  assert.ok(/[0-9]/.test(q.question));
 }
});
test('correct sign, finite positive observables and explicit energy units',()=>{
 const r=generate();
 assert.ok(r.filter(x=>x.topic==='nernst_equation').every(x=>x.numeric_answers[0]>1));
 assert.ok(r.filter(x=>x.topic==='quantum_particle_in_box').every(x=>x.numeric_answers[0]>0&&x.units==='eV'));
 const q=r.find(x=>x.topic==='dilute_solution_osmotic_pressure');
 assert.throws(()=>checkInverse('osmotic_pressure',q.parameters,q.numeric_answers[0]*2),/mismatch/);
});
