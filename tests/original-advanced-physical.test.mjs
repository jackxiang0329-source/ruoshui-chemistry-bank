import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,METHODS,parameters,calculate,verifyInverse,questionId} from '../scripts/import-original-advanced-physical.mjs';
test('48 original physical chemistry exercises cover eight independent physical methods',()=>{
 const rows=generate();
 assert.equal(rows.length,48);
 assert.equal(METHODS.length,8);
 assert.equal(new Set(rows.map(x=>x.id)).size,48);
 const counts=Object.groupBy(rows,x=>x.topic);
 assert.equal(Object.keys(counts).length,8);
 assert.ok(Object.values(counts).every(x=>x.length===6));
 for(const q of rows){
  assert.equal(q.id,questionId(q.question));
  assert.equal(q.subject,'physical');
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.ok(q.question.length>80&&q.answer.length>20&&q.explanation.length>25);
  assert.ok(q.numeric_answers.every(Number.isFinite));
 }
});
test('all calculated answers reproduce independently observed measurements',()=>{
 for(const method of METHODS)for(let i=0;i<6;i++){
  const p=parameters(method,i),values=calculate(method,p);
  assert.equal(verifyInverse(method,p,values),true);
  assert.throws(()=>verifyInverse(method,p,values.map(x=>x*1.1)),/mismatch|Impossible/);
 }
});
test('thermodynamic admissibility, spectroscopy dimensions and mathematical bounds',()=>{
 const rows=generate();
 const select=x=>rows.filter(q=>q.topic===x);
 assert.ok(select('ideal_binary_vle_raoult').every(q=>q.numeric_answers[1]>q.parameters.xA&&q.numeric_answers[1]<1));
 assert.ok(select('debye_huckel_mean_activity_coefficient').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<1&&q.parameters.ionic_strength_mol_L<0.01));
 assert.ok(select('langmuir_surface_coverage').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<1));
 assert.ok(select('arrhenius_activation_energy_two_temperatures').every(q=>q.numeric_answers[0]>35));
 assert.ok(select('isothermal_ideal_gas_entropy').every(q=>q.numeric_answers[0]>0));
 assert.ok(select('harmonic_oscillator_vibrational_spacing').every(q=>q.numeric_answers[0]>0&&q.units==='kJ/mol'));
 assert.ok(select('molecular_electronic_transition_photon').every(q=>q.numeric_answers[0]>400&&q.numeric_answers[0]<1000));
 assert.ok(select('eyring_activation_free_energy').every(q=>q.numeric_answers[0]>0&&q.units==='kJ/mol'));
 assert.throws(()=>parameters('binary_raoult_vle',100),/Unsafe/);
});
