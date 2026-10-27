import test from 'node:test';
import assert from 'node:assert/strict';
import {fromHf,fromZenodo,bucket,subjects,selectExternalShard} from '../scripts/harvest-public-chemistry.mjs';
test('records Hugging Face metadata without conflating MIT with question ownership',()=>{
 const a=fromHf({id:'lab/analytical-chemistry-questions',tags:['license:mit','chemistry'],
  sha:'a'.repeat(40),private:false},'chemistry');
 assert.equal(a.platform,'huggingface');assert.equal(a.claimed_license,'mit');
 assert.equal(a.status,'unreviewed_not_importable');
 assert.equal(a.rights,'metadata_claim_not_question_redistribution_approval');
 assert.deepEqual(a.subjects,['analytical']);
 assert.equal(fromHf({id:'x/chemistry',gated:'auto'},'chemistry'),null);
 assert.equal(fromHf({id:'../../a',tags:['chemistry']},'chemistry'),null);
});
test('Zenodo licenses remain metadata claims, even for CC0',()=>{
 const a=fromZenodo({id:998,metadata:{title:'Chemistry spectroscopy dataset',license:{id:'cc0-1.0'}}},'spectroscopy');
 assert.equal(a.claimed_license,'cc0-1.0');assert.equal(a.status,'unreviewed_not_importable');
 assert.equal(fromZenodo({id:'bad'},'chemistry'),null);
});
test('stable catalog shard and subject classifier',()=>{
 const a={platform:'huggingface',id:'school/chemistry-qa'};
 assert.match(bucket(a),/^[0-9a-f]$/);
 assert.equal(bucket(a),bucket({...a,id:'School/CHEMISTRY-QA'}));
 assert.deepEqual(subjects('electrochemistry'),['physical']);
});

test('fast external shards cover all 22 tasks exactly once over 30 minutes',()=>{
 const tasks=Array.from({length:22},(_,i)=>({term:'q'+i}));
 const parts=[0,1,2].map(i=>selectExternalShard(tasks,'auto',i*600000));
 assert.equal(parts.flat().length,22);
 assert.equal(new Set(parts.flat().map(x=>x.term)).size,22);
 assert.deepEqual(selectExternalShard(tasks),tasks);
 assert.throws(()=>selectExternalShard(tasks,'5'));
});
