import test from 'node:test';
import assert from 'node:assert/strict';
import {reviewPriority,summarizeQuarantine} from '../scripts/triage-nvidia-rqa.mjs';
const qa=(uuid,subject='analytical')=>({
 uuid,source_row:Number(uuid.split('-').at(-1)||0),subject_suggestion:subject,
 publishable:false,exclude_from_official_bank:true,
 quality_status:'not_scientifically_verified',question_sha256:uuid.padEnd(64,'a'),
 question:'Calculate the concentration (mol/L) by titration at 25 C with 25 mL of chemistry solution, showing all steps.',
 unverified_model_answer:'Unverified answer: a calculation is performed with equations and explicit units. \\boxed{0.050 mol/L}'
});
test('prioritizes analytical/physical chemistry without endorsing model answers',()=>{
 const a=reviewPriority(qa('1')),b=reviewPriority(qa('2','physical'));
 assert.equal(a.subject,'analytical');assert.ok(a.priority_score>b.priority_score);
 assert.equal(a.publishable,false);assert.equal(a.scientifically_verified,false);
 assert.ok(a.review_required.includes('chemistry correctness'));
 assert.equal(reviewPriority({...qa('3'),publishable:true}),null);
});
test('excludes exact overlap with official question hashes and makes diversified queue',()=>{
 const rows=[qa('1'),qa('2','physical'),qa('3','inorganic'),qa('4','organic'),qa('5','needs_manual_classification')];
 const matched=new Set([rows[2].question_sha256]);
 const res=summarizeQuarantine(rows,matched,10);
 assert.equal(res.stats.exact_prompt_collisions_with_formal,1);
 assert.equal(res.review_queue_size,4);
 assert.ok(res.review_queue.every(x=>x.publishable===false&&x.scientifically_verified===false));
 assert.equal(res.automatic_approved_questions,0);
});
