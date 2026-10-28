import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {FAMILIES,buildStoredReplay,verifyStored} from '../scripts/audit-main-candidate-numerics.mjs';
const rows=readdirSync(new URL('../data/candidates/',import.meta.url))
 .filter(x=>x.endsWith('.json')).sort()
 .map(name=>JSON.parse(readFileSync(new URL('../data/candidates/'+name,import.meta.url),'utf8')));
const qa=JSON.parse(readFileSync(new URL('../harvest/quality_audit.json',import.meta.url),'utf8'));
test('304 actual stored exercise candidates in 5 deterministic provenance families, no rights upgrade',()=>{
 const result=buildStoredReplay(rows,qa);
 assert.equal(result.checked_stored_candidate_records,304);
 assert.equal(result.reviewed_analytical_candidate_records,160);
 assert.equal(result.reviewed_physical_candidate_records,144);
 assert.equal(result.provenance_bound_generator_families,5);
 assert.deepEqual(result.families.map(x=>x.records_on_disk_science_replayed),[24,72,48,96,64]);
 assert.equal(result.expert_science_approved,0);
 assert.equal(result.formally_exam_ready,0);
 assert.equal(result.coverage_vs_main_records.total,rows.length);
 assert.equal(result.representative_review_queue.length,5);
 assert.equal(new Set(result.representative_review_queue.map(x=>x.example_id)).size,5);
});
test('directly edited answer, units, formula parameters, rights or topic fails stored verification',()=>{
 const fm=FAMILIES[1],original=fm.generate()[0],
  real=rows.find(x=>x.id===original.id);
 assert.ok(real);
 assert.equal(verifyStored(original,real,fm),true);
 const mutate=(changes)=>({...real,...changes});
 assert.throws(()=>verifyStored(original,mutate({answer:real.answer+' wrong'}),fm),/answer differs/);
 assert.throws(()=>verifyStored(original,mutate({numeric_answers:[real.numeric_answers[0]*1.1]}),fm),/Stored numerical/);
 assert.throws(()=>verifyStored(original,mutate({parameters:{...real.parameters,Q:8}}),fm),/scientific parameters/);
 assert.throws(()=>verifyStored(original,mutate({publishable:true}),fm),/provenance or publication/);
 assert.throws(()=>verifyStored(original,mutate({units:'kg'}),fm),/physical units/);
});
test('audit is not allowed to hide missing or duplicate source-linked saved candidates',()=>{
 assert.throws(()=>buildStoredReplay(rows.filter(x=>x.id!==FAMILIES[0].generate()[0].id),
  {...qa,total_candidates:rows.length-1,by_content_kind:{exercise_candidate:1436,study_card:278},
   by_publishable:{false:rows.length-1}}),/missing/);
 assert.throws(()=>buildStoredReplay([...rows,rows[0]],{...qa,total_candidates:rows.length+1,
  by_content_kind:{exercise_candidate:1438,study_card:278},
  by_publishable:{false:rows.length+1}}),/Duplicate saved/);
});
