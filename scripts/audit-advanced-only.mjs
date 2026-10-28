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
for(const p of ['data/integrated_challenges','data/research_quarantine','external_sources',
 'third_party','.github/workflows/chemistry-harvest.yml','.github/workflows/chemistry-discovery-fast.yml',
 '.github/workflows/chemistry-rqa-intake.yml','scripts/import-original-coupled-32768.mjs'])
 assert.equal(exists(p),false,'Deprecated low-difficulty resource returned: '+p);
const release=JSON.parse(read('release/chemistry-approved-manifest.json'));
assert.equal(release.advanced_editorial_items,24);
assert.equal(release.approved_count,0);
assert.deepEqual(release.items,[]);
console.log('PASS: 12 original + 12 newly authored advanced problems, zero low-difficulty candidates, zero expert approvals');
