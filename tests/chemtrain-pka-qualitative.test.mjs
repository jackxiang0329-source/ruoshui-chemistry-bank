import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makeQuestions,validateFixture,questionId} from '../scripts/import-chemtrain-pka-qualitative.mjs';
const fixture=JSON.parse(readFileSync(new URL('../harvest/pinned_pka_qualitative_sites.json',import.meta.url),'utf8'));
test('pinned author-licensed CC BY 4.0 text, excluding measured pKa and molecular images',()=>{
 assert.equal(validateFixture(fixture),fixture);
 assert.equal(fixture.source_site_questions,29);
 assert.equal(fixture.selected_questions,20);
 assert.equal(fixture.excluded_questions,9);
 assert.equal(fixture.third_party_numeric_values_imported,0);
 assert.equal(fixture.structure_images_imported,0);
 assert.match(fixture.attribution,/Quentin Bindschaedler/);
});
test('20 distinct undergraduate qualitative acidity comparisons with unique correct answer',()=>{
 const rows=makeQuestions(fixture);
 assert.equal(rows.length,20);
 assert.equal(new Set(rows.map(x=>x.id)).size,20);
 assert.equal(new Set(rows.map(x=>x.source.source_group_id+':'+x.source.source_question_index)).size,20);
 assert.deepEqual(rows.reduce((a,r)=>(a[r.correct_option]=(a[r.correct_option]||0)+1,a),{}),{A:5,B:5,C:5,D:5});
 for(const q of rows){
  assert.equal(q.subject,'organic');
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.source.license,'CC BY 4.0');
  assert.equal(q.source.content_rights_verified,true);
  assert.equal(q.options.filter(x=>x.key===q.correct_option).length,1);
  assert.equal(q.answer,q.correct_option+'. '+q.options.find(x=>x.key===q.correct_option).text);
  assert.doesNotMatch(q.question,/\bpKa\s*=\s*\d/i);
  assert.doesNotMatch(JSON.stringify(q),/"p"\s*:\s*"\d/);
 }
});
test('reject tampered license, duplicate source card and malformed options',()=>{
 const copy=()=>structuredClone(fixture);
 const a=copy();a.content_license='MIT';
 assert.throws(()=>validateFixture(a),/manifest mismatch/);
 const b=copy();b.cards[1].original_index=b.cards[0].original_index;
 assert.throws(()=>validateFixture(b),/Repeated source card|curated card order/);
 const c=copy();c.cards[0].options[1]=c.cards[0].options[0];
 assert.throws(()=>validateFixture(c),/Unsafe or malformed/);
 assert.equal(questionId('A   B'),questionId('a b'));
});
