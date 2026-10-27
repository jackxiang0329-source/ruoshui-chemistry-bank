import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeUnpublished} from '../scripts/normalize-unpublished-candidates.mjs';
const base={id:'test',question:'Question',answer:'Answer',quality_status:'awaiting_expert_review',source:{license:'MIT'}};
test('legacy unreviewed question has explicit false publication gate',()=>{
 const x=normalizeUnpublished(base);
 assert.equal(x.changed,true);assert.equal(x.candidate.publishable,false);
 assert.equal(x.candidate.answer,base.answer);assert.deepEqual(x.candidate.source,base.source);
});
test('idempotent migration preserves already protected record',()=>{
 let x=normalizeUnpublished({...base,publishable:false});
 assert.equal(x.changed,false);assert.equal(x.candidate.publishable,false);
});
test('does not silently downgrade or upgrade an expert decision',()=>{
 assert.throws(()=>normalizeUnpublished({...base,quality_status:'expert_approved'}));
 let x=normalizeUnpublished({...base,quality_status:'expert_approved',publishable:true});
 assert.equal(x.changed,false);assert.equal(x.candidate.publishable,true);
});
