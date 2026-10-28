import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {FAMILIES,chemquizQuestions,checkStored,audit} from '../scripts/audit-additional-chemistry-sources.mjs';
const dir=new URL('../data/candidates/',import.meta.url);
const rows=readdirSync(dir).filter(x=>x.endsWith('.json'))
 .map(x=>JSON.parse(readFileSync(new URL(x,dir),'utf8')));
const qa=JSON.parse(readFileSync(new URL('../harvest/quality_audit.json',import.meta.url),'utf8'));
test('185 source-replayed exercises are still unapproved and five MuzaPro unreviewed',()=>{
 const result=audit(rows,qa);
 assert.equal(result.additional_source_replayed,185);
 assert.equal(result.main_coverage_after_addition,1710);
 assert.equal(result.remaining_unreplayed,rows.length-1710);
 assert.deepEqual(result.sources.map(x=>x.expected),[67,38,22,20,20,18]);
 assert.equal(result.exam_ready,0);
});
test('chemquiz 67 formula and chemical group exercises from locked MIT blobs',()=>{
 const q=chemquizQuestions();assert.equal(q.length,67);
 assert.equal(q.filter(x=>x.subject==='organic').length,25);
 assert.equal(q.filter(x=>x.subject==='analytical').length,19);
 assert.equal(q.filter(x=>x.subject==='inorganic').length,23);
});
test('deliberate answer, options, provenance, publication and source-rights tampering fail closed',()=>{
 for(const f of FAMILIES){
  const ref=f.build()[0],saved=rows.find(x=>x.id===ref.id);
  assert.ok(saved,f.repo);
  assert.equal(checkStored(ref,saved,f),true);
  assert.throws(()=>checkStored(ref,{...saved,answer:'tampered'},f),/drift/);
  assert.throws(()=>checkStored(ref,{...saved,publishable:true},f),/Unsafe/);
  assert.throws(()=>checkStored(ref,{...saved,source:{...saved.source,git_blob_sha:'0'.repeat(40)}},f),/drift/);
 }
});
test('fixed-count corpus and missing records are not silently counted as verified',()=>{
 assert.throws(()=>audit(rows.slice(1),{...qa,total_candidates:1714}),/changed/);
 assert.throws(()=>audit([...rows,rows[0]],qa),/changed/);
});
