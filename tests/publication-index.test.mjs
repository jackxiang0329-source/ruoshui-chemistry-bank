import test from 'node:test';
import assert from 'node:assert/strict';
import {publicationIndex,digest} from '../scripts/build-publication-index.mjs';
const q=(id='a'.repeat(64))=>({
 id,subject:'physical',topic:'isothermal_expansion',question:'Given n and T calculate entropy.',
 answer:'Delta S = nR ln(V2/V1)',level:'undergraduate',
 publishable:false,quality_status:'awaiting_expert_review',
 source:{repository:'author/chem',license:'CC0-1.0',license_evidence:'https://example.org/license',content_rights_verified:true}
});
test('existing candidates never leak to production exam manifest',()=>{
 const result=publicationIndex([q(),q('b'.repeat(64))],{schema_version:1,approved:[]});
 assert.equal(result.approved_count,0);
 assert.equal(result.excluded_candidate_count,2);
 assert.deepEqual(result.items,[]);
});
test('publication without independent manual provenance and signoffs fails',()=>{
 const item={...q(),publishable:true,quality_status:'expert_approved'};
 assert.throws(()=>publicationIndex([item],{schema_version:1,approved:[]}),/Missing signed-off/);
 assert.throws(()=>publicationIndex([item],{schema_version:1,approved:[{
  id:item.id,decision:'approve',reviewed_at:'2026-10-27',candidate_sha256:'0'.repeat(64),
  chemistry_reviewer:'chemistry faculty',rights_reviewer:'rights faculty',
  solution_reviewer:'solution faculty',latex_reviewer:'layout faculty'}]}),/Missing signed-off/);
});
test('valid explicit approvals are hash-pinned and exclude unrelated candidates',()=>{
 const item={...q(),publishable:true,quality_status:'expert_approved'},other=q('b'.repeat(64));
 const approval={id:item.id,decision:'approve',reviewed_at:'2026-10-27',
  candidate_sha256:digest(item),chemistry_reviewer:'chemistry faculty',
  rights_reviewer:'copyright reviewer',solution_reviewer:'solution reviewer',
  latex_reviewer:'layout reviewer'};
 const result=publicationIndex([other,item],{schema_version:1,approved:[approval]});
 assert.equal(result.approved_count,1);
 assert.equal(result.items[0].id,item.id);
 assert.equal(result.items[0].candidate_sha256,digest(item));
 assert.equal(result.excluded_candidate_count,1);
 assert.throws(()=>publicationIndex([other,item],{schema_version:1,approved:[{...approval,
 rights_reviewer:'chemistry faculty'}]}),/Missing signed-off/);
});
test('reject stale or orphaned publication registry entries',()=>{
 const approval={id:'b'.repeat(64),decision:'approve'};
 assert.throws(()=>publicationIndex([q()],{schema_version:1,approved:[approval]}),/missing candidate/);
 assert.throws(()=>publicationIndex([q()],{schema_version:1,approved:[approval,approval]}),/missing candidate|Duplicate/);
});
