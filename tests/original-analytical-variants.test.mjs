import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,verifyByMoles,questionId} from '../scripts/import-original-analytical-variants.mjs';
test('96 original variants, eight analytical chemistry methods and no auto publication',()=>{
 const rows=generate();
 assert.equal(rows.length,96);
 assert.equal(new Set(rows.map(q=>q.id)).size,96);
 assert.equal(new Set(rows.map(q=>q.topic)).size,8);
 const subjects=rows.reduce((o,x)=>(o[x.topic]=(o[x.topic]||0)+1,o),{});
 assert.ok(Object.values(subjects).every(n=>n===12));
 assert.ok(rows.every(x=>x.subject==='analytical'&&x.quality_status==='awaiting_expert_review'&&
  x.publishable===false&&!x.source.original_exam_question&&
  x.source.method_reference.license==='MIT'&&x.source.license==='CC0-1.0'));
 for(const x of rows){
  assert.equal(questionId(x.question),x.id);
  assert.ok(x.answer.length>=15&&x.explanation.length>=20);
  assert.ok(x.numeric_answers.every(y=>Number.isFinite(y)&&y>0));
 }
});
test('all 96 numeric answers agree with independent mole-balance crosscheck',()=>{
 const rows=generate();
 const mapping={
  primary_standard_acid_standardization:'hcl_standardization',
  edta_zinc_complexometric_standardization:'edta_standardization',
  iodometric_kio3_standardization:'iodometry_kio3',
  permanganate_oxalate_standardization:'permanganate_oxalate',
  double_indicator_carbonate_bicarbonate:'mixed_alkali',
  copper_iodometric_mass_fraction:'copper_iodometry',
  calcium_oxalate_indirect_assay:'calcium_oxalate',
  stepwise_pb_bi_complexometry:'pb_bi_edta'};
 for(const x of rows)assert.ok(verifyByMoles(mapping[x.topic],x.parameters,x.numeric_answers));
 const damaged=rows.find(x=>x.topic==='calcium_oxalate_indirect_assay');
 assert.throws(()=>verifyByMoles('calcium_oxalate',damaged.parameters,[99]),/mismatch/);
});
test('analytical scientific invariants and realistic mass fractions',()=>{
 const rows=generate();
 assert.ok(rows.filter(x=>x.topic==='double_indicator_carbonate_bicarbonate').every(
  x=>x.parameters.additional_methyl_orange_ml>x.parameters.phenolphthalein_ml));
 assert.ok(rows.filter(x=>x.topic==='calcium_oxalate_indirect_assay').every(
  x=>x.parameters.sample_titrant_ml>x.parameters.blank_titrant_ml&&x.numeric_answers[0]<100));
 assert.ok(rows.filter(x=>x.topic==='copper_iodometric_mass_fraction').every(
  x=>x.numeric_answers[0]<100));
});
