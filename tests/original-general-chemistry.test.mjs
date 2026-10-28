import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,METHODS,parameters,calculate,verifyInverse,qid} from '../scripts/import-original-general-chemistry.mjs';

test('120 original solved chemistry variants cover 10 distinct topics',()=>{
 const qs=generate();
 assert.equal(qs.length,120);
 assert.equal(METHODS.length,10);
 assert.equal(new Set(qs.map(q=>q.id)).size,120);
 assert.equal(new Set(qs.map(q=>q.topic)).size,10);
 assert.equal(qs.filter(q=>q.subject==='inorganic').length,72);
 assert.equal(qs.filter(q=>q.subject==='organic').length,48);
 for(const q of qs){
  assert.equal(q.id,qid(q.question));
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.ok(q.question.length>60&&q.answer.length>25&&q.explanation.length>35);
  assert.ok(Number.isFinite(q.numeric_answers[0]));
 }
});
test('each method reconstructs its input observable and rejects a corrupted answer',()=>{
 for(const method of METHODS)for(let i=0;i<12;i++){
  const p=parameters(method,i),x=calculate(method,p);
  assert.equal(verifyInverse(method,p,x),true,method+'/'+i);
  assert.throws(()=>verifyInverse(method,p,x*1.05),/mismatch/,method+'/'+i);
 }
 assert.throws(()=>parameters('bogus',1),/Invalid/);
 assert.throws(()=>parameters(METHODS[0],12),/Invalid/);
});
test('chemistry physical bounds and explicit conditions are internally consistent',()=>{
 const qs=generate(),topic=t=>qs.filter(q=>q.topic===t);
 assert.ok(topic('mixed_salt_ionic_strength').every(q=>q.numeric_answers[0]>0));
 assert.ok(topic('ionic_crystal_density').every(q=>q.numeric_answers[0]>1.8&&q.numeric_answers[0]<2.3));
 assert.ok(topic('born_haber_lattice_energy').every(q=>q.numeric_answers[0]>0));
 assert.ok(topic('hydroxide_salt_molar_solubility').every(q=>q.numeric_answers[0]<0.01));
 assert.ok(topic('hydroxide_precipitation_onset_ph').every(q=>q.numeric_answers[0]>8&&q.numeric_answers[0]<12));
 assert.ok(topic('metal_ligand_conditional_complexation').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<1));
 assert.ok(topic('esterification_equilibrium_conversion').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<1));
 assert.ok(topic('specific_rotation_enantiomeric_excess').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<100));
 assert.ok(topic('organic_aqueous_extraction_recovery').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<100));
});
