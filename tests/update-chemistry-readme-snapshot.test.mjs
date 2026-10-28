import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {snapshot,rewrite} from '../scripts/update-chemistry-readme-snapshot.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const q=JSON.parse(read('harvest/quality_audit.json'));
const v=JSON.parse(read('harvest/coverage_report.json'));
test('README numbers come only from audit and preserve no-publish gates',()=>{
 const result=rewrite(read('README.md'),q,v);
 assert.ok(result.includes(snapshot(q,v)));
 assert.equal(result,rewrite(result,q,v));
 assert.ok(result.includes(q.total_candidates.toLocaleString('en-US')));
 assert.match(result,/正式批准 \*\*0\*\*/);
});
test('stale totals, spurious approvals, or duplicate headings fail closed',()=>{
 assert.throws(()=>snapshot({...q,total_candidates:q.total_candidates+1},v),/Inconsistent/);
 assert.throws(()=>snapshot({...q,expert_approved_publishable_count:1},v),/Inconsistent/);
 assert.throws(()=>snapshot(q,{...v,main_unique_candidate_records_machine_replayed:v.main_unique_candidate_records_machine_replayed-1}),/Inconsistent/);
 assert.throws(()=>rewrite(read('README.md').replace(/^## 原则/m,'## 其它'),q,v),/missing or duplicated/);
});
