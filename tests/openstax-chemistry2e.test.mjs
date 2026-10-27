import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makeQuestions,independentlyRecompute,questionId} from '../scripts/import-openstax-chemistry2e.mjs';
const d=JSON.parse(readFileSync(new URL('../harvest/pinned_openstax_chemistry2e.json',import.meta.url),'utf8'));
test('license-gated eight textbook adaptations across underrepresented fields',()=>{
 const rows=makeQuestions(d);
 assert.equal(rows.length,8);
 assert.deepEqual(rows.reduce((a,c)=>(a[c.subject]=(a[c.subject]||0)+1,a),{}),{analytical:3,physical:3,inorganic:2});
 for(const c of rows){assert.equal(c.id,questionId(c.question));assert.equal(c.publishable,false);assert.equal(c.quality_status,'awaiting_expert_review');assert.equal(c.source.license,'CC BY 4.0');}
});
test('independent numerical chemistry solution regression',()=>{
 const values=Object.fromEntries(d.items.map(x=>[x.id,independentlyRecompute(x)]));
 assert.ok(Math.abs(values['os2e-a-mgf2']-0.001169607095)<1e-8);
 assert.equal(values['os2e-a-kclo4'],0.004000000000000001);
 assert.ok(Math.abs(values['os2e-a-titration']-1.5118833609788744)<1e-9);
 assert.equal(values['os2e-p-rate-order'],3);
 assert.ok(Math.abs(values['os2e-p-acetaldehyde']-6.726530612e-6)<1e-10);
 assert.ok(Math.abs(values['os2e-p-galvanic']-0.4596)<1e-10);
 assert.ok(Math.abs(values['os2e-i-formation']/5e23-1)<1e-12);
 assert.equal(values['os2e-i-lewis'],1);
});
test('blocks tampered licenses, answer values, and duplicated licensed IDs',()=>{
 assert.throws(()=>makeQuestions({...d,license:'UNKNOWN'}));
 const wrong=structuredClone(d);wrong.items[0].expected_value=0.9;assert.throws(()=>makeQuestions(wrong));
 const dupe=structuredClone(d);dupe.items[1].id=dupe.items[0].id;assert.throws(()=>makeQuestions(dupe));
});
