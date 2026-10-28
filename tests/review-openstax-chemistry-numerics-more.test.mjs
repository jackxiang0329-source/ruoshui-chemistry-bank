import test from 'node:test';
import assert from 'node:assert/strict';
import {MORE,independentlySolve,checkAdditional,extendPinnedScientificReview}
 from '../scripts/review-openstax-chemistry-numerics-more.mjs';
import {CASES as ORIGINAL} from '../scripts/review-openstax-chemistry-numerics.mjs';
import {createHash} from 'node:crypto';
const sha=s=>createHash('sha256').update(s.toLowerCase().normalize('NFKC').replace(/\s+/g,' ').trim()).digest('hex');
const rights={edition_rights_conflict_pending:true,
 import_source_derived_exercises_into_main_prohibited:true,
 items_rights_auto_approved:false,commit:'a'.repeat(40),repository:'philschatz/chemistry-book',
 files:MORE.map(x=>({path:x.path,sha:'b'.repeat(40)}))};
const base={reviewed_source_cases:20,items:ORIGINAL.map((c,i)=>({source_id:'OLD'+i})),
 source_commit:rights.commit,publishable:0,rights_confirmations:0,scholarly_human_confirmations:0,
 source_answer_discrepancies:2,original_questions_without_answer_independently_solved:1};
const rows=MORE.map((c,i)=>{
 const question=('Test chemistry '+c.marker+' '+(c.keyIssue?'(d)':'')+
  (c.questionTypo?' C1<sub>6</sub>':'')).trim();
 return {id:'OSCHEM-'+String(i.toString(16)).padStart(24,'0'),source_path:c.path,
  source_exercise_ordinal:c.ordinal,source_commit:rights.commit,
  source_repository:rights.repository,source_blob_sha:'b'.repeat(40),
  question,question_sha256:sha(question),
  source_url:'https://github.com/fixture/'+i,
  has_source_solution:c.hasAnswer,answer:c.keyIssue?'(e) 0.0056':c.hasAnswer?'some published solution':null,
  requires_media:false,requires_mathml:false,publishable:false,exam_ready:false,
  content_rights_verified:false,item_level_rights_review_pending:true};
});
test('22 new distinct historical source exercises compute correct physical quantities',()=>{
 assert.equal(MORE.length,22);
 assert.equal(new Set(MORE.map(x=>x.path+':'+x.ordinal)).size,22);
 for(const c of MORE){
  const value=independentlySolve(c.tag);
  assert.equal(checkAdditional(c,value),true);
  const wrong=value.map((v,i)=>i===0?v*1.10:v);
  assert.throws(()=>checkAdditional(c,wrong),/differs/);
 }
});
test('42 total source-locked numerical exercises retain explicitly blocked license and no publishing',()=>{
 const review=extendPinnedScientificReview(rows,rights,base);
 assert.equal(review.reviewed_source_cases,42);
 assert.equal(review.source_answer_discrepancies,3);
 assert.equal(review.source_question_typographical_issues,1);
 assert.equal(review.original_questions_without_answer_independently_solved,7);
 assert.equal(review.items.filter(x=>x.release_eligible).length,0);
 assert.ok(review.items.slice(20).every(x=>
  x.machine_computation_checked&&x.source_item_rights_verified===false));
 assert.throws(()=>extendPinnedScientificReview(rows,{...rights,edition_rights_conflict_pending:false},base),/gate/);
 assert.throws(()=>extendPinnedScientificReview(rows,{...rights,import_source_derived_exercises_into_main_prohibited:false},base),/gate/);
});
test('source answer-key mislabel, chemistry formula typo and exact provenance cannot be ignored',()=>{
 assert.throws(()=>extendPinnedScientificReview(
  rows.map(x=>x.source_exercise_ordinal===20&&x.source_path==='contents/m51014.md'?
    {...x,answer:'(d) 0.0056'}:x),rights,base),/dilution answer key/);
 assert.throws(()=>extendPinnedScientificReview(
  rows.map(x=>x.source_exercise_ordinal===25&&x.source_path==='contents/m51011.md'?
    {...x,question:x.question.replace('C1<sub>6</sub>','Cl<sub>6</sub>'),
     question_sha256:sha(x.question.replace('C1<sub>6</sub>','Cl<sub>6</sub>'))}:x),rights,base),/formula source typo/);
 assert.throws(()=>extendPinnedScientificReview(
  rows.map((x,i)=>i===0?{...x,source_blob_sha:'f'.repeat(40)}:x),rights,base),/Pinned real/);
});
