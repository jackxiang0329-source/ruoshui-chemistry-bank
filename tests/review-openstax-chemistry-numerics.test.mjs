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
  answer:c.keyDiscrepancy?(
   c.tag==='ammonia_hydronium_mislabeled_in_key'?'[OH<sup>−</sup>] = 3.1 × 10<sup>−12</sup> M':
   '(b) pH = 0.68; pOH = 13.32; (d) pH = −0.40; pOH = 14.4'):
  (c.answerExpected?'Test source numeric result':null),
  requires_media:false,requires_mathml:false,
  exam_ready:false,publishable:false,content_rights_verified:false,
  item_level_rights_review_pending:true};
});
test('twenty pinned source based chemistry calculations pass independent inverse crosschecks',()=>{
 assert.equal(CASES.length,20);
 for(const c of CASES){
  const calc=independentlyCalculate(c.tag);
  assert.equal(verifyScientificCase(c,calc),true);
  assert.throws(()=>verifyScientificCase(c,calc.map((n,i)=>i===0?n+Math.max(1,Math.abs(n))*.15:n)),/mismatch/);
 }
});
test('curated source reviews cannot become exam-ready or rights-approved',()=>{
 const x=curateScientificReviews(rows,manifest);
 assert.equal(x.reviewed_source_cases,20);
 assert.equal(x.source_answer_discrepancies,2);
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

test('second independent source-key error: dilute ammonia hydronium value mislabeled as hydroxide',()=>{
 const item=CASES.find(x=>x.tag==='ammonia_hydronium_mislabeled_in_key');
 assert.equal(item.keyDiscrepancy,'textbook_labels_hydronium_numeric_result_as_hydroxide');
 const r=curateScientificReviews(rows,manifest);
 assert.equal(r.items.filter(x=>x.issue).length,2);
 assert.throws(()=>curateScientificReviews(rows.map(x=>
  x.source_path==='contents/m51117.md'&&x.source_exercise_ordinal===11?
  {...x,answer:'[H3O+] = 3.1 × 10−12 M'}:x),manifest),/wrongly labeled/);
});
test('tiny scientific ion concentrations cannot pass loose absolute tolerance',()=>{
 const c=CASES.find(x=>x.tag==='ammonia_hydronium_mislabeled_in_key');
 assert.throws(()=>verifyScientificCase(c,[3.1e-11]),/mismatch/);
});
