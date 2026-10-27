import test from 'node:test';
import assert from 'node:assert/strict';
import {inspectTree,selectForInventory} from '../scripts/inventory-chemistry-question-files.mjs';
test('metadata-only inventory prioritizes plausible question+answer file pairs and never approves reuse',()=>{
 const t=inspectTree('school/chemistry','a'.repeat(40),[
 {type:'blob',path:'docs/analytical_questions.md'},
 {type:'blob',path:'answers/analytical_solutions.tex'},
 {type:'blob',path:'lesson1.ipynb'},
 {type:'blob',path:'assets/question_plot.png'},
 {type:'blob',path:'third_party/exam_answers.csv'}
 ]);
 assert.equal(t.candidate_question_files,1);
 assert.equal(t.candidate_answer_files,1);
 assert.equal(t.notebook_files,1);
 assert.equal(t.import_eligible,false);
 assert.equal(t.content_rights,'NOT_VERIFIED');
 assert.ok(t.metadata_priority_score>0);
});
test('inventory skips previously inspected and obvious third-party-risk sources',()=>{
 const p={
  'alpha/analytical-chemistry':{repository_license_file_present:true,subjects:['analytical']},
  'beta/physical-chemistry':{repository_license_file_present:true,subjects:['physical']},
  'gamma/chemistry-exams':{repository_license_file_present:true,third_party_content_risk:true},
  'delta/organic-chemistry':{repository_license_file_present:false}
 };
 assert.deepEqual(selectForInventory(p,{},2),['alpha/analytical-chemistry','beta/physical-chemistry']);
 assert.deepEqual(selectForInventory(p,{'alpha/analytical-chemistry':{}},12),['beta/physical-chemistry']);
 assert.throws(()=>selectForInventory(p,{},20));
});
