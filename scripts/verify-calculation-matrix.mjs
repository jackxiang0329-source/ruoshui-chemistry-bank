#!/usr/bin/env node
// Independently recompute each quantitative equation from generated private inputs.
import assert from 'node:assert/strict';
import { generateQuantitativePractice } from '../src/chemistry/quantitative.mjs';
import { gradeQuantitative } from '../src/chemistry/grade-quantitative.mjs';

function equationResidual(answer) {
  const p=answer.inputs, y=answer.expected;
  switch(answer.template) {
    case 'ANAL-ACID': {
      const x=10**(-y);
      return Math.abs((x*x/(p.C-x))/p.Ka-1);
    }
    case 'ANAL-EDTA':
      return Math.abs((p.Kprime*y*y+y-p.C)/p.C);
    case 'ANAL-PRECIP': {
      const hydroxide=10**(y-p.pKw);
      return Math.abs((p.C*hydroxide**2)/p.Ksp-1);
    }
    case 'PHYS-EQ': {
      const predicted=-(p.deltaH-p.T*p.deltaS)/(p.R*p.T);
      return Math.abs(Math.log(y)-predicted);
    }
    case 'PHYS-ARR': {
      const predicted=p.Ea/p.R*(1/p.T1-1/p.T2);
      return Math.abs(Math.log(y)-predicted);
    }
    case 'PHYS-ENTROPY':
      return Math.abs(y/(p.n*p.R)-Math.log(p.V2/p.V1));
    default:
      throw new Error('Unknown quantitative chemistry template: '+answer.template);
  }
}
export function runMatrix({seeds=75,count=60}={}) {
  const tracks=['analytical','physical'];
  let generated=0,verified=0,gradingFailures=0,maxResidual=0;
  const templates=new Set();
  for(const track of tracks){
    for(let seed=0;seed<seeds;seed++){
      const paper=generateQuantitativePractice({track,seed,count});
      const same=generateQuantitativePractice({track,seed,count});
      assert.deepEqual(paper,same,'Same seed must reproduce the same paper');
      assert.equal(new Set(paper.student.questions.map(x=>x.id)).size,count);
      const signatures=new Set();
      const responses={};
      for(const answer of paper.teacher.answers){
        templates.add(answer.template);
        const key=answer.template+'|'+JSON.stringify(answer.inputs);
        assert.ok(!signatures.has(key),'Duplicate parameter set in paper: '+key);
        signatures.add(key);
        const res=equationResidual(answer);
        maxResidual=Math.max(maxResidual,res);
        assert.ok(Number.isFinite(res)&&res<1e-9,'Large equation residual: '+answer.id+': '+res);
        verified++;
        responses[answer.id]={value:answer.expected.toPrecision(12),unit:answer.unit};
      }
      const scored=gradeQuantitative(paper.student,paper.teacher,responses);
      if(scored.correct_count!==count)gradingFailures++;
      assert.ok(!JSON.stringify(paper.student).includes('"expected":'));
      assert.ok(!JSON.stringify(paper.student).includes('"derivation":'));
      generated+=count;
    }
  }
  assert.equal(templates.size,6,'Six template types must be present');
  assert.equal(gradingFailures,0,'Answer grader must match all internally derived correct values');
  return {tracks,template_count:templates.size,seeds_per_track:seeds,questions_per_seed:count,
    generated,independently_checked:verified,max_equation_residual:maxResidual,
    grading_failures:gradingFailures,publication_status:'UNREVIEWED_DO_NOT_PUBLISH'};
}
if(process.argv[1]===import.meta.filename){
  const result=runMatrix();
  console.log(JSON.stringify(result,null,2));
}
