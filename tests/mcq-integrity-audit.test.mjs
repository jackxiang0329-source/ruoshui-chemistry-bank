import test from 'node:test';
import assert from 'node:assert/strict';
import {auditMcqs} from '../scripts/audit-mcq-integrity.mjs';

const mcq=(id,index=0)=>({
 id,subject:'inorganic',question_type:'licensed_text_only_multiple_choice',
 question:'Which complex is octahedral?',answer:'Octahedral',answer_option:'B',
 options:['Tetrahedral','Octahedral','Square planar'],
 publishable:false,quality_status:'awaiting_expert_review',
 source:{repository:'ChemTrain/chemtrain-daily',
  commit:'327eb915764dbcdf7bce4974a0542f3b3d626554',
  file:'chemtrain_daily.html',source_question_index:index,
  license:'CC BY 4.0',license_evidence:'https://github.com/ChemTrain/chemtrain-daily/blob/327eb915764dbcdf7bce4974a0542f3b3d626554/LICENSE-CONTENT.md',
  content_rights_verified:true}
});
test('valid pinned MCQs pass and unrelated study cards are ignored',()=>{
 const x=auditMcqs([mcq('a'),{id:'card',question_type:'open_ended_study_flashcard'}]);
 assert.equal(x.checked_mcq_candidates,1);
 assert.equal(x.issue_count,0);
 assert.equal(x.repeated_upstream_record_count,0);
 assert.equal(x.by_subject.inorganic,1);
});
test('flag incorrect answer index, duplicate options and missing content rights',()=>{
 const x=mcq('b');x.answer_option='C';x.options=['Tetrahedral','Tetrahedral','Square planar'];
 x.source.content_rights_verified=false;
 const result=auditMcqs([x]);
 assert.deepEqual(result.issues.map(y=>y.reason).sort(),[
  'answer_option_mismatch','duplicate_options','incomplete_source_or_content_rights_evidence'
 ].sort());
});
test('flag re-used upstream question even if local hashes differ',()=>{
 const x=auditMcqs([mcq('a',7),mcq('b',7),mcq('c',8)]);
 assert.equal(x.repeated_upstream_record_count,1);
 assert.deepEqual(x.repeated_upstream_records[0].ids,['a','b']);
});
test('missing provenance and publication safeguards remain review flags',()=>{
 const x=mcq('a');delete x.source.source_question_index;
 x.publishable=true;x.quality_status='expert_approved';
 const report=auditMcqs([x]);
 assert.ok(report.issues.some(y=>y.reason==='missing_source_question_index'));
 assert.ok(report.issues.some(y=>y.reason==='publication_or_review_status_not_protected'));
 assert.equal(report.expert_approved,0);
});

test('author-licensed radical partner cards enter the same MCQ integrity checks',()=>{
 const r=mcq('r',2);
 r.subject='organic';r.question_type='licensed_radical_matching_mcq';
 r.answer='ethyl vinyl ether';r.options=['ethyl vinyl ether','methyl acrylate'];r.answer_option='A';
 r.source.repository='ChemTrain/radical-learn';
 r.source.file='radical_learn.html';
 r.source.commit='a1c6d4cb567db370fec10a2f258048f7e89f466c';
 const result=auditMcqs([r]);
 assert.equal(result.checked_mcq_candidates,1);
 assert.equal(result.issue_count,0);
 r.answer='methyl acrylate';
 const bad=auditMcqs([r]);
 assert.ok(bad.issues.some(x=>x.reason==='answer_option_mismatch'));
});
test('radical source index collisions trigger review even when stems differ',()=>{
 const a=mcq('r1',4),b=mcq('r2',4);
 for(const x of [a,b]){
  x.question_type='licensed_radical_matching_mcq';
  x.source.repository='ChemTrain/radical-learn';
  x.source.commit='a1c6d4cb567db370fec10a2f258048f7e89f466c';
  x.source.file='radical_learn.html';
 }
 assert.equal(auditMcqs([a,b]).repeated_upstream_record_count,1);
});
