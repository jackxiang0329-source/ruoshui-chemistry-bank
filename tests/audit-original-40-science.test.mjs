import test from 'node:test';
import assert from 'node:assert/strict';
import {generate as ap} from '../scripts/import-original-analytical-physical-topics.mjs';
import {generate as integrated} from '../scripts/import-original-integrated-chemistry.mjs';
import {audit,markdown,AP,INTEGRATED} from '../scripts/audit-original-40-science.mjs';
test('all 40 distinct stored models carry source-bound rights and 34 separately evaluated numbers',()=>{
 const r=audit(ap(),integrated());
 assert.equal(r.total,40);
 assert.equal(r.numeric_independently_recomputed,34);
 assert.equal(r.conceptual_reasoning_requires_expert,6);
 assert.equal(r.explicit_high_priority_modeling_flags,2);
 assert.equal(r.publishable,false);assert.equal(r.expert_approved,0);
 assert.equal(Object.keys(AP).length,20);
 assert.equal(Object.keys(INTEGRATED).length,20);
 assert.equal(new Set(r.records.map(x=>x.id)).size,40);
 assert.match(markdown(r),/40 道原创大学化学题/);
 assert.match(markdown(r),/标准压力 Kp/);
});
test('changed stored facts, authorship, source rights, units, and numerical answers are rejected',()=>{
 const a=ap(),b=integrated();
 assert.throws(()=>audit(a.map((q,i)=>i===0?{...q,numeric_answers:[999]}:q),b),/integrity/);
 assert.throws(()=>audit(a.map((q,i)=>i===0?{...q,units:'kg'}:q),b),/integrity/);
 assert.throws(()=>audit(a,b.map((q,i)=>i===0?{...q,publishable:true}:q)),/integrity/);
 assert.throws(()=>audit(a,b.slice(1)),/exactly 20/);
 assert.throws(()=>audit([...a.slice(0,-1),a[0]],b),/Duplicate/);
});
