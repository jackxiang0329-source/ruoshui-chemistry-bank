import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {SECONDARY,replaySecondary,assertSecondaryStored}
 from '../scripts/audit-supplementary-candidate-replay.mjs';
const dir=new URL('../data/candidates/',import.meta.url);
const rows=readdirSync(dir).filter(x=>x.endsWith('.json')).sort()
 .map(name=>JSON.parse(readFileSync(new URL(name,dir),'utf8')));
const quality=JSON.parse(readFileSync(new URL('../harvest/quality_audit.json',import.meta.url),'utf8'));
test('82 persisted records replayed against six pinned sources with no publication rights upgrade',()=>{
 const r=replaySecondary(rows,quality);
 assert.equal(r.distinct_checked_stored_candidates,82);
 assert.equal(r.source_groups_verified,6);
 assert.deepEqual(r.groups.map(x=>x.stored_candidate_records_checked),[8,8,12,3,21,30]);
 assert.equal(r.source_linked_rights_pending_candidate_count,21);
 assert.equal(r.exam_ready,0);
 assert.equal(r.combined_unique_candidate_ids_304_plus_82,386);
 assert.equal(r.groups.reduce((n,x)=>n+x.explicitly_recorded_numeric_answers,0),37);
 assert.equal(r.groups.reduce((n,x)=>n+x.other_solution_or_option_records,0),45);
 assert.equal(r.groups.filter(x=>x.item_rights_restriction).length,1);
 assert.equal(r.examples.length,6);
});
test('answer, option, source pin and blocked McMaster item rights may never drift',()=>{
 for(const fam of SECONDARY){
  const original=fam.generate()[0],saved=rows.find(x=>x.id===original.id);
  assert.ok(saved,'Saved source candidate must exist '+fam.name);
  assert.equal(assertSecondaryStored(original,saved,fam),true);
  assert.throws(()=>assertSecondaryStored(original,{...saved,answer:'corrupted'},fam),/content mismatch/);
  assert.throws(()=>assertSecondaryStored(original,{...saved,publishable:true},fam),/Provenance/);
  assert.throws(()=>assertSecondaryStored(original,{...saved,source:{...saved.source,repository:'other/repo'}},fam),/Provenance/);
  if(original.numeric_answers?.length)
   assert.throws(()=>assertSecondaryStored(original,{...saved,numeric_answers:original.numeric_answers.map(x=>x*2)},fam),/metadata mismatch/);
  if(fam.name==='mcmaster_course_21')
   assert.throws(()=>assertSecondaryStored(original,{...saved,
     source:{...saved.source,item_level_rights_review_pending:false}},fam),/quarantine/);
 }
});
test('reject concealed saved IDs, duplicate IDs and false main library totals',()=>{
 assert.throws(()=>replaySecondary([...rows,rows[0]],{
  ...quality,total_candidates:rows.length+1,by_publishable:{false:rows.length+1},
  by_content_kind:{study_card:278,exercise_candidate:rows.length+1-278}}),/Duplicate persisted/);
 const family=SECONDARY[0],missing=family.generate()[0].id;
 assert.throws(()=>replaySecondary(rows.filter(x=>x.id!==missing),{
  ...quality,total_candidates:rows.length-1,by_publishable:{false:rows.length-1},
  by_content_kind:{study_card:278,exercise_candidate:rows.length-1-278}}),/missing/);
});
