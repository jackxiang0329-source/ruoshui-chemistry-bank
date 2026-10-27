import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateFixture,generate,verifyNumerics,questionId} from '../scripts/import-qcedu-introqm.mjs';
const d=JSON.parse(readFileSync(new URL('../harvest/pinned_qcedu_introqm.json',import.meta.url),'utf8'));
test('pinned CC0 scope and exact Git blob hashes',()=>{
 assert.equal(validateFixture(d),d);
 assert.equal(d.third_party_pdfs_imported,0);
 assert.equal(d.images_imported,0);
});
test('three independent physical-chemistry candidates, unpublished',()=>{
 const rows=generate(d);
 assert.equal(rows.length,3);
 assert.equal(new Set(rows.map(q=>q.id)).size,3);
 for(const q of rows){
  assert.equal(q.id,questionId(q.question));
  assert.equal(q.subject,'physical');
  assert.equal(q.topic,'quantum_chemistry');
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.source.license,'CC0-1.0');
 }
});
test('numerical values and Morse eigenvalue residual are independently checked',()=>{
 for(const q of d.cards)assert.equal(verifyNumerics(q),true);
 const broken=structuredClone(d.cards[1]);
 broken.numeric_answer.energy_j=1e-17;
 assert.throws(()=>verifyNumerics(broken),/mismatch/);
});
test('tampered source rights or ID fail closed',()=>{
 const wrong=structuredClone(d);wrong.content_license='MIT';
 assert.throws(()=>validateFixture(wrong),/license mismatch/);
 const wrong2=structuredClone(d);wrong2.cards[0].git_blob_sha='bad';
 assert.throws(()=>validateFixture(wrong2),/hash/);
 const wrong3=structuredClone(d);wrong3.cards[0].question+=' altered';
 assert.throws(()=>validateFixture(wrong3),/ID/);
});
