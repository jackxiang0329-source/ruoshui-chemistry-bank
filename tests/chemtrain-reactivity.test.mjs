import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makeQuestions,validateFixture,questionId} from '../scripts/import-chemtrain-reactivity.mjs';
const fixture=JSON.parse(readFileSync(new URL('../harvest/pinned_reactivity_regioselectivity.json',import.meta.url),'utf8'));
test('pinned source, attribution and exclusions',()=>{
 assert.equal(validateFixture(fixture),fixture);
 assert.equal(fixture.cards.length,20);
 assert.equal(fixture.source_regio_questions,61);
 assert.equal(fixture.mayr_measured_values_imported,0);
 assert.equal(fixture.molecule_drawings_imported,0);
});
test('20 distinct organic text-only candidate questions, no publishing',()=>{
 const rows=makeQuestions(fixture);
 assert.equal(rows.length,20);
 assert.equal(new Set(rows.map(x=>x.id)).size,20);
 for(const row of rows){
  assert.equal(row.id,questionId(row.question));
  assert.equal(row.subject,'organic');
  assert.equal(row.level,'undergraduate');
  assert.equal(row.quality_status,'awaiting_expert_review');
  assert.equal(row.publishable,false);
  assert.equal(row.source.content_rights_verified,true);
  assert.equal(row.source.license,'CC BY 4.0');
  assert.equal(row.source.original_exam_question,false);
  assert.equal(row.options.length,new Set(row.options.map(x=>x.text)).size);
  assert.equal(row.options.filter(x=>row.answer===x.key+'. '+x.text).length,1);
  assert.equal(row.options.find(x=>x.key===row.correct_option).key,row.correct_option);
  assert.ok(!Object.hasOwn(row,'structure')&&!Object.hasOwn(row,'pka'));
 }
});
test('reject source manifest mutation, duplicate site, unexpected measured values',()=>{
 assert.throws(()=>validateFixture({...fixture,source_git_blob_sha:'0'.repeat(40)}));
 assert.throws(()=>validateFixture({...fixture,mayr_measured_values_imported:1}));
 const dup=structuredClone(fixture);
 dup.cards[1].source_index=dup.cards[0].source_index;
 assert.throws(()=>validateFixture(dup));
 const polluted=structuredClone(fixture);
 polluted.cards[0].value=4.2;
 assert.throws(()=>validateFixture(polluted));
});
