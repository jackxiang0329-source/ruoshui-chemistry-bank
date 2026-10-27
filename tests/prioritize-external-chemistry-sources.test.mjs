import test from 'node:test';
import assert from 'node:assert/strict';
import {rankExternal,choose} from '../scripts/prioritize-external-chemistry-sources.mjs';
const row=(id,license='mit',other={})=>({platform:'huggingface',id,title:id,
 url:'https://huggingface.co/datasets/'+id,description:'',subjects:['analytical'],claimed_license:license,...other});
test('licensed looking undergraduate question source goes to human review, never auto approves',()=>{
 const item=rankExternal(row('Example/analytical-chemistry-problem-set'));
 assert.ok(item.metadata_score>40);
 assert.equal(item.import_eligible,false);
 assert.equal(item.item_license_verified,false);
 assert.equal(item.question_and_answer_presence_verified,false);
 assert.equal(item.source_rights,'UNVERIFIED_ITEM_LEVEL');
});
test('metadata-only triage penalizes school tests, publications, synthetic models and NC claims',()=>{
 const good=rankExternal(row('Example/analytical-chemistry-questions'));
 const high=rankExternal(row('Example/high-school-chemistry-questions'));
 const synth=rankExternal(row('Example/chemistry-alpaca-questions'));
 const noncom=rankExternal(row('Example/analytical-chemistry-questions','cc-by-nc-4.0'));
 assert.ok(good.metadata_score>high.metadata_score);
 assert.ok(good.metadata_score>synth.metadata_score);
 assert.ok(good.metadata_score>noncom.metadata_score);
 assert.equal(rankExternal(row('Example/physics-math-questions')),null);
});
test('selection removes duplicate source IDs and deterministically sorts scores',()=>{
 const a=row('Example/analytical-chemistry-questions'),
  b=row('Example/organic-chemistry-practice',{toString(){return 'mit'}}),
  c=row('Example/analytical-chemistry-questions');
 const q=choose([a,b,c]);
 assert.equal(q.length,2);
 assert.ok(q[0].metadata_score>=q[1].metadata_score);
 assert.deepEqual(q,choose([c,b,a]));
 assert.throws(()=>choose([a],1000),/Unsafe/);
});
