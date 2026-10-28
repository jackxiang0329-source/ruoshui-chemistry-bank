import test from 'node:test';
import assert from 'node:assert/strict';
import {generate} from '../scripts/import-original-multistep-chemistry.mjs';
import {SCIENCE,audit,markdown} from '../scripts/audit-original-multistep-science.mjs';
test('12 independent formula systems, 24 results, 12 condition checks remain unpublished',()=>{
 const result=audit(generate());
 assert.equal(Object.keys(SCIENCE).length,12);
 assert.equal(result.total,12);
 assert.equal(result.independent_numeric_recomputations,24);
 assert.equal(result.assumption_presence_checks,12);
 assert.equal(result.expert_approved,0);
 assert.equal(result.publishable,false);
 assert.ok(result.records.every(x=>x.science_checked_by_human===false));
 assert.match(markdown(result),/学科专家人工复核/);
});
test('reject changed numbers, units, rights, missing source, and duplicated candidate',()=>{
 const rows=generate();
 const mutate=(idx,changes)=>rows.map((r,i)=>idx===i?{...r,...changes}:r);
 assert.throws(()=>audit(mutate(0,{numeric_answers:[.1,.2]})),/drift/);
 assert.throws(()=>audit(mutate(0,{numeric_answer_units:['kg','mL']})),/drift/);
 assert.throws(()=>audit(mutate(0,{publishable:true})),/drift/);
 assert.throws(()=>audit([...rows.slice(0,11),rows[0]]),/Duplicate/);
 assert.throws(()=>audit(rows.slice(1)),/exactly 12/);
});
