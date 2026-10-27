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
