import test from 'node:test';
import assert from 'node:assert/strict';
import {selectedForReview,summariseEvidence} from '../scripts/preflight-chemistry-sources.mjs';
const source=(n,license='UNKNOWN',score=15)=>({repository:n,url:'https://github.com/'+n,subjects:['analytical'],repository_license_spdx:license,score});
test('preflight skips previously reviewed repos and prefers licensed metadata',()=>{
 const list=[source('a/no-license'),source('b/open-MIT','MIT'),source('c/apology','GPL-3.0')];
 const set=selectedForReview(list,{'b/open-mit':{}},2);
 assert.equal(set.length,2);
 assert.ok(!set.some(x=>x.repository==='b/open-MIT'));
 assert.throws(()=>selectedForReview(list,{},49));
});
test('even confirmed repository MIT license never auto-approves question text',()=>{
 const x=summariseEvidence(source('a/chemistry-quiz','MIT'),{sha:'deadbeef'},{sha:'bead1234',text:'All question banks in this course came from the textbook'});
 assert.equal(x.repository_license_file_present,true);
 assert.equal(x.question_content_rights,'NOT_VERIFIED');
 assert.equal(x.automatic_question_import_allowed,false);
 assert.equal(x.third_party_content_risk,true);
 assert.equal(x.candidate_for_content_rights_review,false);
});
test('original exercise claim is only a weak provenance hint',()=>{
 const x=summariseEvidence(source('a/chemistry','CC-BY-4.0'),{sha:'deadbeef'},{sha:'bead1234',text:'Our own original questions CC BY 4.0'});
 assert.equal(x.claimed_original_exercise_rights_in_readme,true);
 assert.equal(x.question_content_rights,'NOT_VERIFIED');
 assert.equal(x.automatic_question_import_allowed,false);
});

test('high-volume preflight selects up to 40 unique sources, skips ledger entries',()=>{
 const q=Array.from({length:90},(_,i)=>source('course'+i+'/analytical-chemistry','MIT',100-i));
 const reviewed=Object.fromEntries(q.slice(0,10).map(x=>[x.repository.toLowerCase(),{}]));
 const picked=selectedForReview(q,reviewed);
 assert.equal(picked.length,40);
 assert.equal(new Set(picked.map(x=>x.repository)).size,40);
 assert.ok(picked.every(x=>!Object.hasOwn(reviewed,x.repository.toLowerCase())));
});
