import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,CASES,validateSource,verifyPhysics,questionId} from '../scripts/import-introqchem-2021.mjs';
import {readFileSync} from 'node:fs';
const pinned=JSON.parse(readFileSync(new URL('../harvest/pinned_introqchem_2021.json',import.meta.url)));
test('CC0 parent source with explicit third-party caveat and immutable exact blobs',()=>{
 assert.equal(validateSource(pinned),true);
 assert.throws(()=>validateSource({...pinned,item_level_rights_cleared:true}),/changed/);
 assert.throws(()=>validateSource({...pinned,key_notebook_blob_sha:'0'.repeat(40)}),/changed/);
});
test('21 fixed real course exercises, zero item rights or publication approval',()=>{
 const qs=generate();assert.equal(qs.length,21);
 assert.equal(new Set(qs.map(q=>q.topic)).size,21);
 assert.equal(new Set(qs.map(q=>q.id)).size,21);
 for(const q of qs){
  assert.equal(q.id,questionId(q.question));
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.equal(q.source.content_rights_verified,false);
  assert.equal(q.source.item_level_rights_review_pending,true);
  assert.equal(q.source.commit,pinned.commit);
  assert.ok(q.question.length>30&&q.answer.length>30);
 }
});
test('each numerical case matches an independent inverse physical law',()=>{
 for(const a of CASES){
  assert.equal(verifyPhysics(a,a.values),true);
  if(a.values.length)assert.throws(()=>verifyPhysics(a,a.values.map(x=>x*1.1)),/mismatch/);
 }
});
test('upstream errors remain clearly flagged rather than copied into answer key',()=>{
 const qs=generate(),byTopic=x=>qs.find(q=>q.topic===x);
 assert.ok(byTopic('complex_conjugate_tdse').answer.includes('ℏ²'));
 assert.ok(byTopic('momentum_vs_kinetic_operator_eigenstates').answer.includes('反之'));
 assert.ok(byTopic('photon_radiation_pressure_force').answer.includes('单位 N'));
 assert.equal(byTopic('hamiltonian_total_energy').source_key_issue,'source_answer_confirmed');
});

test('each fixed exercise maps to unique exact cell indices in student and answer notebooks',()=>{
 const rows=generate();
 assert.equal(new Set(rows.map(x=>x.source_question_cell_index)).size,21);
 assert.equal(new Set(rows.map(x=>x.source_key_cell_index)).size,21);
 const p=rows.find(x=>x.topic==='wavefunction_probability_density_nonnegative');
 assert.equal(p.source_question_cell_index,63);
 assert.equal(p.source_key_cell_index,70);
 assert.equal(p.scientifically_machine_checked,false);
 assert.equal(p.conceptual_answer_requires_expert_review,true);
});
test('additional authored numerical source cases pass inverse physical checks',()=>{
 const q=generate();
 for(const topic of ['photon_frequency_500nm','hene_single_photon_energy','baseball_debroglie_wavelength']){
  const x=q.find(r=>r.topic===topic),item=CASES.find(r=>r.topic===topic);
  assert.ok(x&&x.numeric_answers.length===1&&x.scientifically_machine_checked);
  assert.equal(verifyPhysics(item,x.numeric_answers),true);
  assert.throws(()=>verifyPhysics(item,x.numeric_answers.map(v=>v*1.1)),/mismatch/);
 }
});

test('original pinned student and answer notebooks: two false positives resolved, one unit error attributed to prompt',()=>{
 const issue=t=>CASES.find(x=>x.topic===t)?.issue;
 assert.equal(issue('complex_exponential_wavefunction'),'source_answer_confirmed');
 assert.equal(issue('electron_waves_vs_atomic_lines'),'source_answer_confirmed');
 assert.equal(issue('photon_radiation_pressure_force'),
   'student_question_unit_incorrect_for_momentum_rate');
 assert.equal(CASES.filter(x=>x.issue!=='source_answer_confirmed').length,11);
 const rows=generate();
 assert.equal(rows.filter(x=>x.source_key_issue!=='source_answer_confirmed').length,11);
 assert.match(rows.find(x=>x.topic==='complex_exponential_wavefunction').answer,
  /参考答案本已明确接受一般复参数形式/);
 assert.match(rows.find(x=>x.topic==='electron_waves_vs_atomic_lines').answer,
  /参考答案仅选择电子晶体散射/);
 assert.match(rows.find(x=>x.topic==='photon_radiation_pressure_force').answer,
  /学生题本把/);
 assert.ok(rows.every(x=>x.publishable===false&&
  x.source.content_rights_verified===false));
});
