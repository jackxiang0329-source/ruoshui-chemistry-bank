import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {calculateIndependent,makeQuestions,questionId} from '../scripts/import-analytical-calculator-mit.mjs';
const fixture=JSON.parse(readFileSync(new URL('../harvest/pinned_analytical_calculator_mit.json',import.meta.url),'utf8'));
test('eight new, independently solved and unpublishable analytical exercises',()=>{
 const rows=makeQuestions(fixture);
 assert.equal(rows.length,8);
 assert.equal(new Set(rows.map(x=>x.topic)).size,8);
 assert.equal(new Set(rows.map(x=>x.id)).size,8);
 assert.ok(rows.every(x=>x.subject==='analytical'&&!x.publishable&&x.quality_status==='awaiting_expert_review'));
 assert.ok(rows.every(x=>x.id===questionId(x.question)&&x.source.original_upstream_question===false&&x.source.license==='MIT'));
});
test('stoichiometry and units: analytical calculations match independent reference values',()=>{
 const values=Object.fromEntries(fixture.items.map(x=>[x.key,calculateIndependent(x.key,x.param)]));
 assert.ok(Math.abs(values.hcl_standardization[0]-.1000094348523)<1e-10);
 assert.ok(Math.abs(values.edta_standardization[0]-.05)<1e-12);
 assert.ok(Math.abs(values.iodometry_kio3[0]-.1)<1e-12);
 assert.ok(Math.abs(values.permanganate_oxalate[0]-.02)<1e-12);
 assert.ok(Math.abs(values.mixed_alkali[0]-.04)<1e-12);
 assert.ok(Math.abs(values.mixed_alkali[1]-.02)<1e-12);
 assert.ok(Math.abs(values.copper_iodometry[0]-12.7092)<1e-9);
 assert.ok(Math.abs(values.calcium_oxalate[0]-33.39833333333333)<1e-9);
 assert.ok(Math.abs(values.pb_bi_edta[0]-.008)<1e-12);
 assert.ok(Math.abs(values.pb_bi_edta[1]-.012)<1e-12);
});
test('rejects license tampering, wrong answers, overlapping methods and unphysical conditions',()=>{
 assert.throws(()=>makeQuestions({...fixture,license:'unlicensed'}),/rights scope mismatch|source lock/);
 const wrong=structuredClone(fixture);wrong.items[0].expect=[1];assert.throws(()=>makeQuestions(wrong),/stoichiometry mismatch/);
 const duplicate=structuredClone(fixture);duplicate.items[1].key=duplicate.items[0].key;assert.throws(()=>makeQuestions(duplicate));
 assert.throws(()=>calculateIndependent('mixed_alkali',{hcl_molarity:.1,sample_ml:25,phenolphthalein_ml:15,additional_methyl_orange_ml:10}));
 assert.throws(()=>calculateIndependent('calcium_oxalate',{...fixture.items[6].param,blank_titrant_ml:20}));
});
