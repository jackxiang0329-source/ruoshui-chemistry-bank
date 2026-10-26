import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makeQuestions,validateFixture,questionId} from '../scripts/import-chemtrain-pg-learn.mjs';
const fixture=JSON.parse(readFileSync(new URL('../harvest/pinned_pg_learn_deprotection.json',import.meta.url),'utf8'));
test('explicitly pinned CC BY 4.0 content and MIT code with source Git blob SHAs',()=>{
 assert.equal(validateFixture(fixture),fixture);
 assert.match(fixture.attribution,/Quentin Bindschaedler/);
 assert.match(fixture.source_git_blob_sha,/^[a-f0-9]{40}$/);
 assert.match(fixture.source_license_git_blob_sha,/^[a-f0-9]{40}$/);
});
test('22 distinct undergraduate organic protecting-group MCQs with exactly one X',()=>{
 const rows=makeQuestions(fixture);
 assert.equal(rows.length,22);
 assert.equal(new Set(rows.map(x=>x.id)).size,22);
 assert.equal(new Set(rows.map(x=>x.source.original_group_id)).size,22);
 assert.deepEqual(rows.reduce((o,r)=>(o[r.correct_option]=(o[r.correct_option]||0)+1,o),{}),{A:6,B:6,C:5,D:5});
 for(const row of rows){
  assert.equal(row.subject,'organic');
  assert.equal(row.quality_status,'awaiting_expert_review');
  assert.equal(row.publishable,false);
  assert.equal(row.source.license,'CC BY 4.0');
  assert.equal(row.source.content_rights_verified,true);
  assert.equal(row.options.filter(x=>x.source_chart_cell==='X').length,1);
  assert.equal(row.options.filter(x=>x.source_chart_cell==='.').length,3);
  assert.equal(row.options.find(x=>x.key===row.correct_option).source_chart_cell,'X');
  assert.match(row.answer,/^[ABCD]\. /);
 }
});
test('refuse conditional source cells, changed license pin and duplicate groups',()=>{
 const copy=()=>structuredClone(fixture);
 const conditional=copy();conditional.cards[0].options[0].chart_cell='~';
 assert.throws(()=>makeQuestions(conditional),/Unsafe\/ambiguous/);
 const license=copy();license.content_license='MIT';
 assert.throws(()=>validateFixture(license),/manifest mismatch/);
 const duplicate=copy();duplicate.cards[1].group_id=duplicate.cards[0].group_id;
 assert.throws(()=>validateFixture(duplicate),/Malformed group/);
 assert.equal(questionId('A  B'),questionId('a b'));
});
