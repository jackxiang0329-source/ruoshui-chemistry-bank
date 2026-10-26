import test from 'node:test';
import assert from 'node:assert/strict';
import { generateQuantitativePractice } from '../src/chemistry/quantitative.mjs';
import { buildUnifiedPaper } from '../src/chemistry/unified.mjs';
import { gradeQuantitative } from '../src/chemistry/grade-quantitative.mjs';
import { readVendorCatalog,readHolds } from '../src/chemistry/catalog-node.mjs';

test('six chemistry templates cover three analytical and three physical modules',()=>{
  for(const track of ['analytical','physical']){
    const paper=generateQuantitativePractice({track,count:12,seed:42});
    assert.equal(new Set(paper.student.questions.map(x=>x.template)).size,3);
    assert.deepEqual(paper,generateQuantitativePractice({track,count:12,seed:42}));
    assert.ok(!JSON.stringify(paper.student).includes('"expected":'));
    assert.ok(!JSON.stringify(paper.student).includes('derivation'));
    assert.ok(paper.student.questions.every(x=>x.review_status==='original_unreviewed_preview'));
  }
});
test('600 numerical variants satisfy mass action, formation, van t Hoff and kinetic checks',()=>{
  for(const track of ['analytical','physical'])
    for(const seed of [0,1,42,20261026,4294967295]){
      const paper=buildUnifiedPaper({track,count:60,seed});
      assert.equal(paper.student.questions.length,60);
      const signature=new Set();
      for(const ans of paper.teacher.answers){
        signature.add(ans.template+'|'+JSON.stringify(ans.inputs));
        for(const value of Object.values(ans.checks))
          assert.ok(value===true||(typeof value==='number'&&value<1e-9));
        assert.ok(Number.isFinite(ans.expected));
      }
      assert.equal(signature.size,60);
      assert.ok(!JSON.stringify(paper.student).includes('expected'));
    }
});
test('teacher-only answer key yields exact scoring without disclosing answers',()=>{
  for(const track of ['analytical','physical']){
    const {student,teacher}=buildUnifiedPaper({track,count:18,seed:103});
    const responses=Object.fromEntries(teacher.answers.map(a=>
      [a.id,{value:a.expected.toExponential(12),unit:a.unit}]));
    const score=gradeQuantitative(student,teacher,responses);
    assert.equal(score.correct_count,18);
    assert.equal(score.score_percent,100);
    assert.ok(!JSON.stringify(score).includes('"expected"'));
    assert.equal(gradeQuantitative(student,teacher,{}).correct_count,0);
    const invalid={...responses};
    invalid[teacher.answers[0].id]={value:'1e999',unit:teacher.answers[0].unit};
    assert.equal(gradeQuantitative(student,teacher,invalid).correct_count,17);
  }
});
test('numeric answers require matching units; do not silently convert',()=>{
 const {student,teacher}=buildUnifiedPaper({track:'physical',count:3,seed:1});
 const answers=Object.fromEntries(teacher.answers.map(a=>[a.id,{value:a.expected,unit:a.unit}]));
 const entropy=teacher.answers.find(a=>a.template==='PHYS-ENTROPY');
 assert.ok(entropy);
 answers[entropy.id]={value:entropy.expected,unit:'kJ/K'};
 const report=gradeQuantitative(student,teacher,answers);
 assert.equal(report.correct_count,2);
 assert.equal(report.details.find(x=>x.id===entropy.id).reason,'unit_mismatch');
});
test('student-teacher sheets reject mismatches and malformed submissions',()=>{
 const a=buildUnifiedPaper({track:'analytical',count:6,seed:3});
 const b=buildUnifiedPaper({track:'analytical',count:6,seed:4});
 assert.throws(()=>gradeQuantitative(a.student,b.teacher,{}),/Mismatched/);
 const tampered=structuredClone(a.student);
 tampered.questions[0].id='FALSE';
 assert.throws(()=>gradeQuantitative(tampered,a.teacher,{}),/Answer key mismatch/);
});
test('all four disciplines share the envelope without lying about data coverage',()=>{
 for(const track of ['inorganic','organic']){
   const m=buildUnifiedPaper({track,count:5,seed:42},
     {catalog:readVendorCatalog(track),heldIds:readHolds()});
   assert.equal(m.track,track);
   assert.equal(m.format,'single_choice');
   assert.equal(m.student.question_count,5);
 }
 for(const track of ['analytical','physical']){
   const m=buildUnifiedPaper({track,count:5,seed:42});
   assert.equal(m.track,track);
   assert.equal(m.format,'numerical');
 }
 assert.throws(()=>buildUnifiedPaper({track:'biochemistry'}),/Track must/);
 assert.throws(()=>buildUnifiedPaper({track:'inorganic'}),/explicit catalog/);
 assert.throws(()=>buildUnifiedPaper({track:'analytical',mode:'name_to_formula'}),/Numerical tracks/);
});
