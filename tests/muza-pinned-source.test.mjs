import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {mapRecord,buildCandidate} from '../scripts/import-approved-chemistry.mjs';
import {assertItem,auditItems} from '../scripts/audit-muza-pinned-source.mjs';
const load=x=>JSON.parse(readFileSync(new URL('../harvest/'+x,import.meta.url),'utf8'));
const s=load('approved_imports.json').approved_sources[0],review=load('source_reviews/2026-10-27-muzapro-reaction-quality.json');
const dir=new URL('../data/candidates/',import.meta.url);
const stored=readdirSync(dir).filter(x=>x.endsWith('.json'))
 .map(n=>JSON.parse(readFileSync(new URL(n,dir),'utf8')));
const muza=stored.filter(q=>q.source?.repository===s.repository).sort((a,b)=>
 a.source.record_index-b.source.record_index);
function reconstruct(q){
 const [text,target,options]=q.question.split('\n');
 const m=target.match(/^Target: (.+) \(([^()]+)\)$/);
 const reagents=options.replace(/^Available reagents: /,'').split('; ').map((v,i)=>{
  const z=v.match(/^(.*) \(([^()]+)\)$/);
  return {id:'r'+i,name:z[1],formula:z[2]};
 });
 const answerNames=q.answer.split('; ');
 return {id:q.source.original_id,questionText:text,
  product:{name:m[1],formula:m[2]},reagents,
  correctReagents:answerNames.map(name=>reagents.find(x=>x.name===name).id)};
}
test('five stored source-backed Muza questions and scientist review warnings stay isolated',()=>{
 assert.equal(muza.length,5);
 const d={questions:muza.map(reconstruct)};
 const report=auditItems(d,s,stored,review);
 assert.equal(report.matched_persisted_source_exercises,5);
 assert.equal(report.unresolved_science_condition_concerns,3);
 assert.equal(report.scientifically_qualified_for_exam,0);
 assert.equal(report.exam_ready,0);
 assert.deepEqual(report.fixed_question_ids,['q1','q2','q3','q4','q5']);
});
test('fail closed when answers, rights status or catalyst/workup notes change',()=>{
 const q=muza[0],original=buildCandidate(mapRecord(reconstruct(q),s.files[0]),s,s.files[0],0);
 assert.equal(assertItem(original,q,s),true);
 assert.throws(()=>assertItem(original,{...q,answer:'changed'},s),/differs/);
 assert.throws(()=>assertItem(original,{...q,publishable:true},s),/rights or approval/);
 assert.throws(()=>auditItems({questions:muza.map(reconstruct)},s,stored,
  {...review,per_item_review:review.per_item_review.filter(q=>q.source_id!=='q5')}),/review drift/);
});
