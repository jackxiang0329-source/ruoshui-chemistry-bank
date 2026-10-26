// Server-side or offline checking only. Teacher key must never be serialized to students.
import { gradeNumerical } from './grading.mjs';
function parseAnswer(value) {
  if (typeof value==='number') return Number.isFinite(value)?value:null;
  if (typeof value!=='string') return null;
  const text=value.trim();
  if (!/^[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:[eE][+-]?\d+)?$/.test(text)) return null;
  const parsed=Number(text);
  return Number.isFinite(parsed)?parsed:null;
}
export function gradeQuantitative(student, teacher, submissions={}) {
  if (student?.kind!=='ruoshui-chemistry-quantitative-preview'||
      teacher?.kind!=='ruoshui-chemistry-quantitative-answer-key'||
      student.status!=='UNREVIEWED_DO_NOT_PUBLISH'||
      teacher.status!=='UNREVIEWED_DO_NOT_PUBLISH'||
      student.track!==teacher.track||student.seed!==teacher.seed)
    throw new Error('Mismatched or unauthorized quantitative student/teacher sheets');
  if (!Array.isArray(student.questions)||!Array.isArray(teacher.answers)||
      student.questions.length!==teacher.answers.length)
    throw new Error('Wrong quantitative answer count');
  let correct=0;
  const details=student.questions.map((q,i)=>{
    const key=teacher.answers[i];
    if(q.id!==key.id||q.expected_unit!==key.unit||
       q.template!==key.template||q.track!==key.track)
      throw new Error('Answer key mismatch for '+q.id);
    const raw=Object.prototype.hasOwnProperty.call(submissions,q.id)?
      submissions[q.id]:null;
    const submitted=(typeof raw==='number'||typeof raw==='string')?raw:raw?.value;
    const submittedUnit=(typeof raw==='object'&&raw!==null)?raw.unit:'';
    const number=parseAnswer(submitted);
    if(number===null) return {id:q.id,correct:false,reason:'missing_or_invalid_number'};
    const check=gradeNumerical({expected:key.expected,submitted:number,
      unit:key.unit,submittedUnit:submittedUnit??'',
      absTolerance:key.absTolerance,relTolerance:key.relTolerance});
    if(check.correct) correct++;
    return {id:q.id,correct:check.correct,reason:check.reason};
  });
  return {status:'unreviewed_practice_feedback_only',evaluated_count:student.questions.length,
    correct_count:correct,score_percent:student.questions.length?
      Math.round(correct*10000/student.questions.length)/100:0,details};
}
