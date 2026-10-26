import test from 'node:test';
import assert from 'node:assert/strict';
import {reviewQueue} from '../scripts/build-review-queue.mjs';
test('chemquiz reviewer queue includes six held records and excludes publication',()=>{
  const q=reviewQueue('chemquiz','all',200);
  assert.equal(q.total,273);
  assert.equal(q.items.filter(x=>x.risk_flag==='structure_hold').length,6);
  assert.ok(q.items.every(x=>x.publication==='blocked'&&x.proposed_chinese_prompt===null));
});
test('ChemIQ sources are benchmark held out and IUPAC answers are not presented as names',()=>{
  const q=reviewQueue('chemiq','all',25);
  assert.equal(q.total,814);
  assert.ok(q.items.every(x=>x.risk_flag==='benchmark_held_out'));
  const inorganic=reviewQueue('chemiq','inorganic',20);
  assert.equal(inorganic.total,0);
});
test('review queue rejects invalid filters',()=>{
  assert.throws(()=>reviewQueue('unknown'),/Unknown source/);
  assert.throws(()=>reviewQueue('chemquiz','all',300),/Limit/);
});
