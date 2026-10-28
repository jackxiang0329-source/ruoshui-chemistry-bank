import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {buildPending,markdown} from '../scripts/build-pending-chemistry-source-review.mjs';
const dir=new URL('../data/candidates/',import.meta.url);
const rows=readdirSync(dir).filter(x=>x.endsWith('.json')).sort()
 .map(x=>JSON.parse(readFileSync(new URL(x,dir),'utf8')));
const read=x=>JSON.parse(readFileSync(new URL('../harvest/'+x,import.meta.url),'utf8'));
const quality=read('quality_audit.json'),coverage=read('coverage_report.json');
test('190 unreviewed exercises are explicitly separated from 1525 source replays',()=>{
 const q=buildPending(rows,quality,coverage);
 assert.equal(q.pending_source_replay_candidate_records,190);
 assert.equal(q.pending_is_exercise_candidates,190);
 assert.equal(q.pending_is_study_cards,0);
 assert.equal(q.already_source_replayed_candidate_records,1525);
 assert.equal(q.pending_source_groups.reduce((n,x)=>n+x.count,0),190);
 assert.equal(new Set(q.review_queue.map(x=>x.candidate_id)).size,190);
 assert.ok(q.review_queue.every(x=>x.approved_for_publication===false));
 assert.ok(markdown(q).includes('bem130/chemquiz'));
 assert.ok(markdown(q).includes('](../data/candidates/'));
 assert.ok(!markdown(q).includes('](../../data/candidates/'));
});
test('changed source count, publication flag and missing source records block report',()=>{
 assert.throws(()=>buildPending(rows,{...quality,source_counts:
   {...quality.source_counts,'bem130/chemquiz':70}},coverage),/source/);
 assert.throws(()=>buildPending(rows,{...quality,total_candidates:1716},coverage),/stale/);
 const wrong=rows.map((x,i)=>i===0?{...x,publishable:true}:x);
 assert.throws(()=>buildPending(wrong,quality,coverage),/already published/);
 assert.throws(()=>buildPending(rows,quality,{...coverage,
  main_unique_candidate_records_machine_replayed:1715}),/stale/);
});
