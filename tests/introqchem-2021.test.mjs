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
test('nine fixed exercises: no parameter variants, no rights or publication approval',()=>{
 const qs=generate();assert.equal(qs.length,9);
 assert.equal(new Set(qs.map(q=>q.topic)).size,9);
 assert.equal(new Set(qs.map(q=>q.id)).size,9);
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
