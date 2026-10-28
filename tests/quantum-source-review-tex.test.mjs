import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {CASES,generate} from '../scripts/import-introqchem-2021.mjs';
import {audit} from '../scripts/audit-introqchem-key-reconciliation.mjs';
import {renderQuantumScienceReview} from '../scripts/build-quantum-source-review-tex.mjs';
const pin=JSON.parse(readFileSync(new URL('../harvest/pinned_introqchem_2021.json',import.meta.url),'utf8'));
const good=audit(CASES,generate(),pin);
test('complete source-linked Chinese review book distinguishes 11 claims, 2 resolved false positives',()=>{
 const tex=renderQuantumScienceReview(good);
 assert.equal((tex.match(/\\section\{/g)||[]).length,18);
 assert.equal((tex.match(/\\chapter\{/g)||[]).length,4);
 assert.match(tex,/学生本与参考答案本差异/);
 assert.match(tex,/误报修正/);
 assert.match(tex,/\\documentclass.*ctexbook/);
 assert.match(tex,/第三方内容权利例外/);
 assert.doesNotMatch(tex,/原教材完整试题翻译已出版/);
});
test('quantum source reconciliation cannot accidentally promote restricted questions',()=>{
 assert.throws(()=>renderQuantumScienceReview({...good,source_rights_confirmed:1}),/gate/);
 assert.throws(()=>renderQuantumScienceReview({...good,released_for_exams:1}),/gate/);
 assert.throws(()=>renderQuantumScienceReview({...good,issues:good.issues.slice(1)}),/gate/);
 assert.throws(()=>renderQuantumScienceReview({...good,issues:good.issues.map((x,i)=>
   i===0?{...x,formally_approved:true}:x)}),/Unsafe/);
 assert.throws(()=>renderQuantumScienceReview({...good,source_commit:'changed'}),/gate/);
});
