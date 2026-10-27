import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {generate,calculate,independentVerify,questionId} from '../scripts/import-dft-course-ez.mjs';
const fixture=JSON.parse(readFileSync(new URL('../harvest/pinned_dft_course_isomers.json',import.meta.url),'utf8'));
test('twelve source-licensed teaching-table calculations from four basis-set data rows',()=>{
 const rows=generate(fixture);
 assert.equal(rows.length,12);
 assert.equal(new Set(rows.map(x=>x.id)).size,12);
 assert.deepEqual(Object.values(Object.groupBy(rows,x=>x.topic)).map(x=>x.length),[4,4,4]);
 for(const row of rows){
  assert.equal(row.subject,'physical');
  assert.equal(row.source.license,'CC BY 4.0');
  assert.equal(row.quality_status,'awaiting_expert_review');
  assert.equal(row.publishable,false);
  assert.equal(questionId(row.question),row.id);
  assert.ok(row.explanation.length>30&&row.answer.length>25);
 }
});
test('source E/Z energy gaps use quoted precision, positive sign and independent verification',()=>{
 const deltas=fixture.source_data.map(p=>calculate('relative_energy',p));
 for(const [i,v] of deltas.entries()){
  assert.ok(Math.abs(v-[1.147,.911,.886,.891][i])<1e-8);
  assert.equal(independentVerify('relative_energy',fixture.source_data[i],v),true);
 }
});
test('hypothetical equilibrium Z populations and time overheads are independently invertible',()=>{
 for(const p of fixture.source_data){
  const pop=calculate('minor_isomer_fraction',p);
  assert.ok(pop>10&&pop<20);
  assert.equal(independentVerify('minor_isomer_fraction',p,pop),true);
  const t=calculate('walltime_overhead',p);
  assert.ok(t>0);
  assert.equal(independentVerify('walltime_overhead',p,t),true);
 }
});
test('modified source rights or energies block import before any writes',()=>{
 assert.throws(()=>generate({...fixture,content_license:'Unknown'}),/rights|evidence drift|Source evidence/);
 const change=structuredClone(fixture);change.source_data[0].E+=.01;
 assert.throws(()=>generate(change),/Pinned data table/);
});
