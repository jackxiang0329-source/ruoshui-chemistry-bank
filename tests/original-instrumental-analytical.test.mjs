import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,FAMILIES,parameters,solve,verifyMeasurement,questionId} from '../scripts/import-original-instrumental-analytical.mjs';

test('64 genuinely authored undergraduate analytical exercises across eight instrument methods',()=>{
 const rows=generate();
 assert.equal(rows.length,64);
 assert.equal(FAMILIES.length,8);
 assert.equal(new Set(rows.map(q=>q.id)).size,64);
 const grouped=Object.groupBy(rows,x=>x.topic);
 assert.equal(Object.keys(grouped).length,8);
 assert.ok(Object.values(grouped).every(items=>items.length===8));
 for(const q of rows){
  assert.equal(q.id,questionId(q.question));
  assert.equal(q.subject,'analytical');
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.ok(q.question.length>65&&q.answer.length>20&&q.explanation.length>20);
  assert.ok(q.numeric_answers.every(Number.isFinite));
 }
});

test('all 64 answers reconstruct measured observables; corrupted answers fail',()=>{
 for(const kind of FAMILIES)for(let i=0;i<8;i++){
  const p=parameters(kind,i),value=solve(kind,p);
  assert.equal(verifyMeasurement(kind,p,value),true);
  assert.throws(()=>verifyMeasurement(kind,p,value*1.1),/mismatch/);
 }
});

test('physical sanity and units: standard additions, currents, gravimetry',()=>{
 const rows=generate();
 const only=topic=>rows.filter(q=>q.topic===topic);
 assert.ok(only('single_point_standard_addition').every(q=>q.numeric_answers[0]>0.2&&q.numeric_answers[0]<0.6));
 assert.ok(only('coulometric_copper_deposition').every(q=>q.numeric_answers[0]>0&&q.units==='mg'));
 assert.ok(only('gravimetric_chloride_silver').every(q=>q.numeric_answers[0]>0&&q.numeric_answers[0]<100));
 assert.ok(only('uv_vis_beer_lambert').every(q=>q.numeric_answers[0]>=30&&q.units==='μmol/L'));
 assert.throws(()=>parameters('beer_lambert',99),/Unsafe parameter grid/);
 assert.throws(()=>solve('wrong_method',{}),/No validated solver/);
});
