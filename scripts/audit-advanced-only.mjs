#!/usr/bin/env node
// Active university chemistry bank: high-difficulty originals only.
import assert from 'node:assert/strict';
import {readdirSync,readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)), read=p=>readFileSync(root+p,'utf8'), exists=p=>existsSync(root+p);
const ids=JSON.parse(read('editorial/advanced_integrated_v1/candidate_ids.json'));
assert.equal(ids.length,12);
const filenames=readdirSync(root+'data/candidates').sort();
assert.deepEqual(filenames,ids.map(x=>x.id+'.json').sort(),'Unexpected low-level candidate added');
const groups={inorganic:0,analytical:0,organic:0,physical:0};
for(const x of ids){
 const d=JSON.parse(read('data/candidates/'+x.id+'.json'));
 assert.equal(d.id,x.id);
 assert.equal(d.difficulty,'advanced_integrated');
 assert.equal(d.quality_status,'awaiting_expert_review');
 assert.equal(d.publishable,false);
 assert.ok(d.question.length>100&&d.explanation.length>100);
 groups[d.subject]++;
}
assert.deepEqual(groups,{inorganic:3,analytical:3,organic:3,physical:3});
const newset=read('editorial/advanced_integrated_v2/advanced_authored_set01.jsonl').trim().split('\n').map(JSON.parse);
assert.equal(newset.length,12);
const unique=new Set(),newgroups={inorganic:0,analytical:0,organic:0,physical:0};
for(const d of newset){
 assert.ok(!unique.has(d.id));unique.add(d.id);
 assert.equal(d.authoring.individually_authored,true);
 assert.equal(d.authoring.numeric_parameter_variants,false);
 assert.equal(d.quality_status,'awaiting_expert_review');
 assert.equal(d.publishable,false);
 assert.ok(d.problem_zh.length>150&&d.solution_zh_steps.length>=7);
 newgroups[d.subject]++;
}
assert.deepEqual(newgroups,groups);
const thirdGroupCodes={inorganic:'I',analytical:'A',organic:'O',physical:'P'};
const thirdIDs=new Set(),thirdTitles=new Set();
for(const [subject,code] of Object.entries(thirdGroupCodes)){
 const rows=read('editorial/advanced_integrated_v3/'+subject+'.jsonl').trimEnd().split('\n').map(JSON.parse);
 assert.equal(rows.length,3,'Third series expected 3 per subject '+subject);
 rows.forEach((d,i)=>{
  assert.equal(d.id,'UC-ADV3-'+code+String(i+4).padStart(2,'0'));
  assert.equal(d.subject,subject);
  assert.equal(d.authorship.independent_original_model,true);
  assert.equal(d.authorship.parameter_variant,false);
  assert.equal(d.authorship.third_party_question_copied,false);
  assert.equal(d.publishable,false);
  assert.equal(d.exclude_from_official_bank,true);
  assert.equal(d.quality_status,'awaiting_expert_review');
  assert.equal(d.verification.human_approved,false);
  assert.ok(d.problem_zh.length>180&&d.solution_zh_steps.length>=7);
  assert.ok(!thirdIDs.has(d.id)&&!thirdTitles.has(d.title));
  thirdIDs.add(d.id);thirdTitles.add(d.title);
 });
}
assert.equal(thirdIDs.size,12);

const series4Groups={inorganic:13,analytical:13,organic:12,physical:12};
const v4IDs=new Set(),v4Titles=new Set();
for(const [subject,target] of Object.entries(series4Groups)){
 let n=0;
 for(const part of [1,2]){
  const records=read('editorial/advanced_integrated_v4/'+subject+'_part'+part+'.jsonl').trimEnd().split('\n').map(JSON.parse);
  assert.equal(records.length,part===1?(target===13?7:6):6);
  for(const q of records){
   assert.equal(q.subject,subject);
   assert.equal(q.original_independent_model,true);
   assert.equal(q.numeric_variant,false);
   assert.equal(q.quality_status,'awaiting_expert_review');
   assert.equal(q.publishable,false);
   assert.equal(q.exclude_from_official_bank,true);
   assert.equal(q.verification.human_expert_reviewed,false);
   assert.ok(!v4IDs.has(q.id)&&!v4Titles.has(q.title));
   v4IDs.add(q.id);v4Titles.add(q.title);n++;
  }
 }
 assert.equal(n,target);
}
assert.equal(v4IDs.size,50);

const fifthGroups={inorganic:['inorganic.jsonl',13],analytical:['analytical_part1.jsonl','analytical_part2.jsonl',13],organic:['organic_part1.jsonl','organic_part2.jsonl',12],physical:['physical_part1.jsonl','physical_part2.jsonl',12]};
const fifthNames=new Set(),fifthIDs=new Set();
for(const [subject,spec] of Object.entries(fifthGroups)){
 let count=0; const expectedCount=spec[spec.length-1];
 for(const path of spec.slice(0,-1)){
  const part=read('editorial/advanced_integrated_v5/'+path).trimEnd().split('\n').map(JSON.parse);
  for(const q of part){
   assert.equal(q.subject,subject);
   assert.equal(q.individual_model,true);assert.equal(q.parametric_variant,false);
   assert.equal(q.quality_status,'awaiting_expert_review');
   assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
   assert.ok(q.solution_zh_steps.length>=7&&q.problem_zh.length>=130);
   assert.ok(!fifthNames.has(q.title)&&!fifthIDs.has(q.id));
   fifthNames.add(q.title);fifthIDs.add(q.id);count++;
  }
 }
 assert.equal(count,expectedCount,subject+' newly authored cases');
}
assert.equal(fifthIDs.size,50);

const sixthFiles={inorganic:['inorganic.jsonl',13],analytical:['analytical_part1.jsonl','analytical_part2.jsonl',13],organic:['organic_part1.jsonl','organic_part2.jsonl',12],physical:['physical_part1.jsonl','physical_part2.jsonl',12]};
const sixthIDs=new Set(),sixthTitles=new Set();
for(const [subject,spec] of Object.entries(sixthFiles)){
 let count=0;
 for(const name of spec.slice(0,-1)){
  const part=read('editorial/advanced_integrated_v6/'+name).trimEnd().split('\n').map(JSON.parse);
  for(const q of part){
   assert.equal(q.subject,subject);
   assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
   assert.equal(q.parametric_variant,null);
   assert.equal(q.quality_status,'awaiting_expert_review');
   assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
   assert.ok(q.solution_zh_steps.length>=6&&q.problem_zh.length>75);
   assert.ok(!sixthIDs.has(q.id)&&!sixthTitles.has(q.title));
   sixthIDs.add(q.id);sixthTitles.add(q.title);count++;
  }
 }
 assert.equal(count,spec[spec.length-1]);
}
assert.equal(sixthIDs.size,50);
const overlap=JSON.parse(read('editorial/advanced_integrated_v6/overlap_review_queue.json'));
assert.equal(overlap.status,'manual_cross_series_review_required');
assert.equal(overlap.total_new_records,50);

const v7Specs={inorganic:'I',analytical:'A',organic:'O',physical:'P'};
const v7IDs=new Set(),v7Titles=new Set();
for(const [subject,code] of Object.entries(v7Specs)){
 let count=0;
 for(let n=1;n<=3;n++){
  const records=read('editorial/advanced_integrated_v7/'+subject+'_part'+n+'.jsonl').trimEnd().split('\n').map(JSON.parse);
  assert.equal(records.length,5);
  for(const q of records){
   assert.equal(q.subject,subject);
   assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
   assert.equal(q.parametric_variant,null);
   assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
   assert.equal(q.quality_status,'awaiting_expert_review');
   assert.ok(q.problem_zh.length>=110&&q.solution_zh_steps.length>=8);
   assert.ok(!v7IDs.has(q.id)&&!v7Titles.has(q.title));
   v7IDs.add(q.id);v7Titles.add(q.title);count++;
  }
 }
 assert.equal(count,15,subject+' must have 15 added cases');
}
assert.equal(v7IDs.size,60);
const v7review=JSON.parse(read('editorial/advanced_integrated_v7/overlap_review_queue.json'));
assert.equal(v7review.new_records,60);
assert.equal(v7review.state,'pending_manual_cross_series_comparison');

const v8IDs=new Set(),v8Titles=new Set();
for(const [subject,letter] of Object.entries({inorganic:'I',analytical:'A',organic:'O',physical:'P'})){
 let count=0;
 for(let part=1;part<=3;part++){
  const records=read('editorial/advanced_integrated_v8/'+subject+'_part'+part+'.jsonl').trimEnd().split('\n').map(JSON.parse);
  assert.equal(records.length,5,'eighth series five per part');
  for(const d of records){
   assert.equal(d.subject,subject);
   assert.equal(d.quality_status,'awaiting_expert_review');
   assert.equal(d.publishable,false);assert.equal(d.exclude_from_official_bank,true);
   assert.equal(d.novelty_review_status,'pending_cross_series_model_review');
   assert.equal(d.parametric_variant,null);
   assert.ok(d.solution_zh_steps.length>=7&&d.problem_zh.length>=90);
   assert.ok(!v8IDs.has(d.id)&&!v8Titles.has(d.title));
   v8IDs.add(d.id);v8Titles.add(d.title);count++;
  }
 }
 assert.equal(count,15,'eighth '+subject+' allocation');
}
assert.equal(v8IDs.size,60);
const v8queue=JSON.parse(read('editorial/advanced_integrated_v8/overlap_review_queue.json'));
assert.equal(v8queue.status,'manual_cross_series_review_required');
assert.ok(v8queue.suspected_pairs.length>0);
assert.equal(v8queue.expert_approved_count,0);

const v9Groups={
 inorganic:['inorganic_part1','inorganic_part2','inorganic_part3a','inorganic_part3b'],
 analytical:['analytical_part1','analytical_part2','analytical_part3'],
 organic:['organic_part1','organic_part2a','organic_part2b','organic_part3'],
 physical:['physical_part1','physical_part2','physical_part3']
};
const v9IDs=new Set(),v9Titles=new Set(),v9Families=new Set();
for(const [subject,parts] of Object.entries(v9Groups)){
 let count=0;
 for(const part of parts){
  const records=read('editorial/advanced_integrated_v9/'+part+'.jsonl').trimEnd().split('\n').map(JSON.parse);
  for(const q of records){
   assert.equal(q.subject,subject);
   assert.equal(q.quality_status,'awaiting_expert_review');
   assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
   assert.equal(q.parametric_variant,null);
   assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
   assert.ok(q.problem_zh.length>=95&&q.solution_zh_steps.length>=7);
   assert.ok(!v9IDs.has(q.id)&&!v9Titles.has(q.title)&&!v9Families.has(q.model_family));
   v9IDs.add(q.id);v9Titles.add(q.title);v9Families.add(q.model_family);count++;
  }
 }
 assert.equal(count,25,'v9 must have exactly 25 '+subject+' models');
}
assert.equal(v9IDs.size,100);
const v9Queue=JSON.parse(read('editorial/advanced_integrated_v9/overlap_review_queue.json'));
assert.equal(v9Queue.total_new_editorial_records,100);
assert.equal(v9Queue.review_state,'manual_core_model_comparison_required');
assert.ok(v9Queue.potential_overlaps.length>0);
assert.equal(v9Queue.expert_approved,0);

const v10Subjects=['inorganic','analytical','organic','physical'];
const v10IDs=new Set(),v10Titles=new Set(),v10Families=new Set();
const v10Distribution={};
for(const subject of v10Subjects){
 const rows=read('editorial/advanced_integrated_v10/'+subject+'.jsonl').trimEnd().split('\n').map(JSON.parse);
 v10Distribution[subject]=rows.length;
 assert.ok(rows.length>=1&&rows.length<=25,'v10 per-subject count');
 for(const q of rows){
  assert.equal(q.subject,subject);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  assert.equal(q.parametric_variant,null);
  assert.ok(q.problem_zh.length>=150&&q.solution_zh_steps.length>=7);
  assert.ok(!v10IDs.has(q.id)&&!v10Titles.has(q.title)&&!v10Families.has(q.model_family));
  v10IDs.add(q.id);v10Titles.add(q.title);v10Families.add(q.model_family);
 }
}
assert.ok(v10IDs.size>=4&&v10IDs.size<=100);



assert.ok(v7review.suspected_pairs.length>0);

assert.ok(overlap.suspected_pairs.length>0);



for(const p of ['data/integrated_challenges','data/research_quarantine','external_sources',
 'third_party','.github/workflows/chemistry-harvest.yml','.github/workflows/chemistry-discovery-fast.yml',
 '.github/workflows/chemistry-rqa-intake.yml','scripts/import-original-coupled-32768.mjs'])
 assert.equal(exists(p),false,'Deprecated low-difficulty resource returned: '+p);
const v11Ids=new Set();for(const sub of ['inorganic','analytical','organic','physical']){const rows=read('editorial/advanced_integrated_v11/'+sub+'.jsonl').trim().split('\n').map(JSON.parse);assert.ok(rows.length>=1&&rows.length<=25);for(const q of rows){assert.ok(!v11Ids.has(q.id));v11Ids.add(q.id);assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);assert.equal(q.quality_status,'awaiting_expert_review');assert.equal(q.novelty_review_status,'pending_cross_series_model_review');}}
const release=JSON.parse(read('release/chemistry-approved-manifest.json'));
const v12Ids=new Set();
for(const sub of ['inorganic','analytical','organic','physical']){
 const rows=read('editorial/advanced_integrated_v12/'+sub+'.jsonl').trim().split('\n').map(JSON.parse);
 assert.ok(rows.length>=1&&rows.length<=25);
 for(const q of rows){
  assert.ok(!v12Ids.has(q.id));
  v12Ids.add(q.id);
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
 }
}
assert.equal(release.twelfth_series_work_in_progress_items,v12Ids.size);
assert.equal(release.twelfth_series_pending_cross_series_novelty_review,v12Ids.size);
assert.equal(release.advanced_editorial_items,406+v10IDs.size+v11Ids.size+v12Ids.size+(release.thirteenth_series_work_in_progress_items||0));
assert.equal(release.eleventh_series_work_in_progress_items,v11Ids.size);
assert.equal(release.tenth_series_work_in_progress_items,v10IDs.size);
assert.equal(release.tenth_series_pending_cross_series_novelty_review,v10IDs.size);
assert.equal(release.ninth_series_pending_cross_series_novelty_review,100);
assert.equal(release.eighth_series_pending_cross_series_novelty_review,60);
assert.equal(release.seventh_series_pending_cross_series_novelty_review,60);
assert.equal(release.sixth_series_pending_cross_series_novelty_review,50);
assert.equal(release.approved_count,0);
assert.deepEqual(release.items,[]);
console.log('PASS: 406 historical + tenth + eleventh + twelfth-series provisional records; independent witnesses checked separately, 0 expert approvals');
