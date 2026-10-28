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

for(const p of ['data/integrated_challenges','data/research_quarantine','external_sources',
 'third_party','.github/workflows/chemistry-harvest.yml','.github/workflows/chemistry-discovery-fast.yml',
 '.github/workflows/chemistry-rqa-intake.yml','scripts/import-original-coupled-32768.mjs'])
 assert.equal(exists(p),false,'Deprecated low-difficulty resource returned: '+p);
const release=JSON.parse(read('release/chemistry-approved-manifest.json'));
assert.equal(release.advanced_editorial_items,86);
assert.equal(release.approved_count,0);
assert.deepEqual(release.items,[]);
console.log('PASS: 12+12+12+50 = 86 independent advanced chemistry cases, zero low-difficulty candidates, zero expert approvals');
