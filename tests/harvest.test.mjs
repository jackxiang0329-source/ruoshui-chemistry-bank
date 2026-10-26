import test from 'node:test';
import assert from 'node:assert/strict';
import {subjects,canonicalRepo} from '../scripts/harvest-chemistry-sources.mjs';
import {safePath,questionId,normalizeQuestion,validateSource} from '../scripts/import-approved-chemistry.mjs';
test('classifies chemistry subject',()=>{
  assert.deepEqual(subjects('organic chemistry study'),['organic']);
  assert.deepEqual(subjects('物理化学 thermodynamics'),['physical']);
});
test('license field never means content-rights approval',()=>{
  const row=canonicalRepo({full_name:'someone/chemistry-quiz',license:{spdx_id:'MIT'},description:'chemistry quiz'},'2026-10-26');
  assert.equal(row.repository_license_spdx,'MIT');
  assert.equal(row.status,'unreviewed_not_importable');
});
test('rejects unsafe paths',()=>{
  assert.equal(safePath('data/questions.jsonl'),true);
  assert.equal(safePath('../secret'),false);
  assert.equal(safePath('a/../../secret'),false);
});
test('deduplication normalizes whitespace and case',()=>{
  assert.equal(questionId('  What  is pH?  '),questionId('what is ph?'));
  assert.equal(normalizeQuestion('a  b'),'a b');
});
test('refuses sources without approval and pinned revision',()=>{
  assert.throws(()=>validateSource({id:'demo',repository:'owner/repo',commit:'bad',files:[]}));
});
