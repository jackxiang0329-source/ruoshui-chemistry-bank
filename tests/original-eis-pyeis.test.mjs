import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {computeIndependent,makeQuestions,questionId} from '../scripts/import-original-eis-pyeis.mjs';
const pinned=JSON.parse(readFileSync(new URL('../harvest/pinned_pyeis_original_eis.json',import.meta.url),'utf8'));
test('rights pinned, eight distinct EIS topics and publication prohibited',()=>{
 const rows=makeQuestions(pinned);
 assert.equal(rows.length,8);assert.equal(new Set(rows.map(x=>x.topic)).size,8);
 assert.ok(rows.every(x=>x.id===questionId(x.question)&&x.subject==='physical'));
 assert.ok(rows.every(x=>x.source.license==='Apache-2.0'&&x.source.original_upstream_question===false));
 assert.ok(rows.every(x=>!x.publishable&&x.quality_status==='awaiting_expert_review'));
});
test('independent complex impedance and phase numerical regression',()=>{
 const a=Object.fromEntries(pinned.items.map(x=>[x.key,computeIndependent(x.key,x.params)]));
 const eq=(x,y)=>assert.ok(Math.abs(x-y)<1e-7,'value '+x+' differs from '+y);
 eq(a.angular_frequency[0],314.159265359);
 eq(a.ideal_capacitor[0],-31.830988618);
 eq(a.series_rc[0],15);eq(a.series_rc[1],-7.957747155);eq(a.series_rc[2],16.980157237);
 eq(a.parallel_rc[0],9.199966835);eq(a.parallel_rc[1],-28.902548222);
 eq(a.parallel_rc_peak[0],15.915494309);eq(a.parallel_rc_peak[1],50);
 eq(a.randles_simple[0],14.199966835);eq(a.randles_simple[1],-28.902548222);
 eq(a.cpe_phase[0],2.886862570);eq(a.cpe_phase[1],-72);
 eq(a.semi_infinite_warburg[0],5.046265044);eq(a.semi_infinite_warburg[1],-5.046265044);
});
test('rejects unlicensed source changes, inaccurate answers, invalid circuit inputs',()=>{
 assert.throws(()=>makeQuestions({...pinned,source_license:'UNKNOWN'}));
 const wrong=structuredClone(pinned);wrong.items[5].expected=[99,-30];assert.throws(()=>makeQuestions(wrong),/mismatch/);
 const duplicate=structuredClone(pinned);duplicate.items[2].key=duplicate.items[1].key;
 assert.throws(()=>makeQuestions(duplicate));
 assert.throws(()=>computeIndependent('cpe_phase',{frequency_hz:100,q_units_s_n_per_ohm:0.002,exponent_n:1.2}));
 assert.throws(()=>computeIndependent('parallel_rc',{frequency_hz:50,resistance_ohm:0,capacitance_f:0.0001}));
});
