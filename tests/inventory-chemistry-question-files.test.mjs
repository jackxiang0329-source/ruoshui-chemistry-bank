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

test('does not count files under exam folder or metadata JSON as question stems',()=>{
 const tree=inspectTree('owner/chem-mcq','b'.repeat(40),[
  {type:'blob',path:'dataFolder/mds_exams/Answers-to-E1/Answers-to-E1.md'},
  {type:'blob',path:'dataFolder/mds_exams/Answers-to-E1/Answers-to-E1_meta.json'},
  {type:'blob',path:'dataFolder/mds_exams/CHEM110-Practice-Exam-1-Key/CHEM110-Practice-Exam-1-Key.md'},
  {type:'blob',path:'dataFolder/mds_exams/AIST-Chemistry-Practice-Test/AIST-Chemistry-Practice-Test.md'},
  {type:'blob',path:'dataFolder/mds_exams/AIST-Chemistry-Practice-Test/AIST-Chemistry-Practice-Test_meta.json'}
 ]);
 assert.equal(tree.candidate_question_files,1);
 assert.equal(tree.candidate_answer_files,2);
 assert.equal(tree.suspect_third_party_assessment_material,true);
 assert.equal(tree.import_eligible,false);
 assert.equal(tree.possible_filename_matched_question_answer_pairs,0);
});
test('filename-matched answers are a hint only and never grant rights',()=>{
 const t=inspectTree('owner/chem','c'.repeat(40),[
  {type:'blob',path:'exercises/stoichiometry-questions.md'},
  {type:'blob',path:'answers/stoichiometry-questions-solution.md'},
  {type:'blob',path:'notebooks/pH-tutorial.ipynb'}
 ]);
 assert.equal(t.candidate_question_files,1);
 assert.equal(t.candidate_answer_files,1);
 assert.equal(t.possible_filename_matched_question_answer_pairs,1);
 assert.equal(t.content_rights,'NOT_VERIFIED');
 assert.equal(t.import_eligible,false);
});
test('old-v1 records can be refreshed without blocking unseen sources',async()=>{
 const {selectLegacyRefresh,INSPECTION_VERSION}=await import('../scripts/inventory-chemistry-question-files.mjs');
 const checked={'owner/old':{repository_license_file_present:true},
  'owner/new':{repository_license_file_present:true}};
 assert.equal(INSPECTION_VERSION,2);
 assert.deepEqual(selectLegacyRefresh(checked,{'owner/old':{candidate_question_files:3}},3),['owner/old']);
 assert.deepEqual(selectForInventory(checked,{'owner/old':{candidate_question_files:3}},12),['owner/new']);
});
