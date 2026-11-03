import test from 'node:test';import assert from 'node:assert/strict';import {audit} from '../scripts/audit-chemtrain.mjs';
test('ChemTrain complete upstream snapshots and all imported candidates match source data',()=>{
 const x=audit();assert.deepEqual(x.errors,[]);
 assert.equal(x.upstream_projects,8);assert.equal(x.original_files,55);
 assert.equal(x.direct_files_verified,54);assert.equal(x.assembled_files_verified,1);
 assert.equal(x.child_learning_records,801);assert.equal(x.derived_daily_mcq,2892);
 assert.equal(x.published,0);
});