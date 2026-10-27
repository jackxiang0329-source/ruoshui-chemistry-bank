import test from 'node:test';
import assert from 'node:assert/strict';
import {buildPlan,templateKey,reviewFlags} from '../scripts/build-expert-review-plan.mjs';
const q=(id,subject='analytical',topic='spectroscopy',number=1)=>({
 id,subject,topic,question_type:'original_instrumental_analytical_calculation',
 question:'测量第 '+number+' 组浓度 '+number+'.00 mol/L 的样品并求吸光度。',
 answer:'A = '+number+'.0',numeric_answers:[number],quality_status:'awaiting_expert_review',
 publishable:false,semantic_duplicate_review_pending:true,
 source:{repository:'author/repo',file:'generator.mjs',license:'CC0-1.0',
 content_rights_verified:true,license_evidence:'https://example.edu/license'}
});
test('numeric variants form one human-review cluster without approving sibling items',()=>{
 const plan=buildPlan([q('c', 'analytical','spectrum',3),q('b','analytical','spectrum',2),
  q('a','analytical','spectrum',1)]);
 assert.equal(plan.total_candidates,3);
 assert.equal(plan.template_source_clusters,1);
 assert.equal(plan.multi_variant_candidates,3);
 assert.equal(plan.selected_representatives,1);
 assert.equal(plan.queue[0].candidate_count,3);
 assert.equal(plan.queue[0].representative_id,'a');
 assert.equal(plan.queue[0].approved_for_publication,false);
 assert.equal(plan.publishable_count,0);
 assert.equal(plan.source_rights_approved_by_this_process,0);
});
test('deterministic irrespective of input order and capped per subject/topic',()=>{
 const rows=[];
 for(const subject of ['analytical','physical','inorganic','organic'])
  for(let k=0;k<9;k++)rows.push({...q(subject+k,subject,'topic',k+1),
   question:'Independent family '+k+' chemistry exercise'});
 const a=buildPlan(rows,{perSubject:5,maxPerTopic:3});
 const b=buildPlan([...rows].reverse(),{perSubject:5,maxPerTopic:3});
 assert.deepEqual(a,b);
 assert.equal(a.selected_representatives,12);
 assert.ok(Object.values(a.selected_by_subject).every(n=>n===3));
});
test('unknown source rights and absent answer remain review flags',()=>{
 const row=q('z');delete row.answer;delete row.source.license_evidence;
 row.source.content_rights_verified=false;
 const flags=reviewFlags(row);
 assert.ok(flags.includes('missing_question_or_answer'));
 assert.ok(flags.includes('source_question_rights_not_explicitly_verified'));
 assert.ok(flags.includes('item_or_source_license_evidence_not_attached'));
});
test('any publication state change is fail closed',()=>{
 assert.throws(()=>buildPlan([{...q('published'),publishable:true,quality_status:'expert_approved'}]),/Unsafe/);
 assert.throws(()=>buildPlan([q('dup'),q('dup')]),/Duplicate/);
 assert.notEqual(templateKey('体积 1.05 ml'),templateKey('体积 10.05 mol'));
});
