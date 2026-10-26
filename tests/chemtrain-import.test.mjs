import test from 'node:test';import assert from 'node:assert/strict';import {audit} from '../scripts/audit-chemtrain.mjs';
test('Eight ChemTrain repos, 42 mirrored blobs and 801 quarantined entries',()=>{
 const r=audit();assert.deepEqual(r.errors,[]);assert.equal(r.sources,8);
 assert.equal(r.upstream_files,55);assert.equal(r.mirrored_files_verified,42);
 assert.equal(r.unmirrored_files,13);assert.equal(r.quarantined_records,801);assert.equal(r.formal_published,0);
});