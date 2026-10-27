import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {CASES,independentlyCalculate,verifyScientificCase,curateScientificReviews}
 from '../scripts/review-openstax-chemistry-numerics.mjs';
const manifest={work_license:'CC-BY-3.0',items_rights_auto_approved:false,
 repository:'philschatz/chemistry-book',commit:'a'.repeat(40),
 files:CASES.map(x=>({path:x.path,sha:'b'.repeat(40)}))};
const sha=x=>createHash('sha256').update(String(x).toLowerCase()).digest('hex');
const rows=CASES.map((c,i)=>{
 const question=('Synthetic unit-test source exercise '+c.marker).replace(/\s+/g,' ').trim();
 return {id:'OSCHEM-'+sha(question).slice(0,24),source_path:c.path,
  source_exercise_ordinal:c.ordinal,source_repository:manifest.repository,
  source_commit:manifest.commit,source_blob_sha:'b'.repeat(40),
  question,question_sha256:sha(question),
  source_url:'https://example.org/source/'+i,
  has_source_solution:c.answerExpected,
  answer:c.keyDiscrepancy?'(b) pH = 0.68; pOH = 13.32; (d) pH = −0.40; pOH = 14.4':
  (c.answerExpected?'Test source numeric result':null),
  requires_media:false,requires_mathml:false,
  exam_ready:false,publishable:false,content_rights_verified:false,
  item_level_rights_review_pending:true};
});
test('all eight source-based thermochemistry, mole and acid-base computations cross-check',()=>{
 assert.equal(CASES.length,8);
 for(const c of CASES){
  const calc=independentlyCalculate(c.tag);
  assert.equal(verifyScientificCase(c,calc),true);
  assert.throws(()=>verifyScientificCase(c,calc.map((n,i)=>i===0?n+Math.max(1,Math.abs(n))*.15:n)),/mismatch/);
 }
});
test('curated source reviews cannot become exam-ready or rights-approved',()=>{
 const x=curateScientificReviews(rows,manifest);
 assert.equal(x.reviewed_source_cases,8);
 assert.equal(x.source_answer_discrepancies,1);
 assert.equal(x.original_questions_without_answer_independently_solved,1);
 assert.equal(x.publishable,0);
 assert.ok(x.items.every(q=>q.machine_computation_checked&&q.release_eligible===false&&
  q.source_item_rights_verified===false&&q.independent_human_chemist_review_completed===false));
 assert.throws(()=>curateScientificReviews(rows.map((r,i)=>i===0?{...r,publishable:true}:r),manifest),/Unsafe/);
 assert.throws(()=>curateScientificReviews(rows,{...manifest,items_rights_auto_approved:true}),/rights/);
});
test('original-key pH/pOH label swap must be preserved as a review blocker',()=>{
 const bad=rows.map(r=>r.source_path==='contents/m51117.md'&&r.source_exercise_ordinal===5?
  {...r,answer:'(b) pH=13.32; pOH=0.68; (d) pH=14.4; pOH=-0.40'}:r);
 assert.throws(()=>curateScientificReviews(bad,manifest),/mislabeling/);
});
test('abort on altered source chemistry instead of silently using outdated calculations',()=>{
 const changed=rows.map((r,i)=>i===0?{...r,source_blob_sha:'0'.repeat(40)}:r);
 assert.throws(()=>curateScientificReviews(changed,manifest),/Pinned raw/);
});
