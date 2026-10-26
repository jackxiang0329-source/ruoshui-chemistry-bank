// Grading is separate from the student paper: clients must never receive answerKey.
export function gradeChoices(student, answerKey, submissions = {}) {
  if (student?.kind !== 'ruoshui-chemistry-practice-preview' ||
      answerKey?.kind !== 'ruoshui-chemistry-practice-answer-key')
    throw new Error('Incompatible paper or answer key');
  const questions = student.questions;
  const answers = answerKey.answers;
  if (!Array.isArray(questions) || !Array.isArray(answers) || questions.length !== answers.length)
    throw new Error('Question and answer lengths differ');
  if (student.seed !== answerKey.seed || student.track !== answerKey.track ||
      student.mode !== answerKey.mode || student.status !== 'UNREVIEWED_DO_NOT_PUBLISH' ||
      answerKey.status !== 'UNREVIEWED_DO_NOT_PUBLISH')
    throw new Error('Paper/answer key metadata mismatch');
  let correct = 0;
  const details = questions.map((question, i) => {
    const key = answers[i];
    if (question.id !== key.id || !Array.isArray(question.options) ||
        question.options[key.correct_index] !== key.correct_answer)
      throw new Error('Answer key mismatch at ' + question.id);
    const response = submissions[question.id];
    const isCorrect = Number.isInteger(response) && response === key.correct_index;
    if (isCorrect) correct++;
    return { id: question.id, correct: isCorrect, submitted_index:
      Number.isInteger(response) ? response : null };
  });
  return { evaluated_count: questions.length, correct_count: correct,
    score_percent: questions.length ? Math.round(correct * 10000 / questions.length) / 100 : 0,
    details, status: 'practice_feedback_only' };
}
export function gradeNumerical({ expected, submitted, unit = '', submittedUnit = '',
    absTolerance = 0, relTolerance = 0 }) {
  if (![expected, submitted, absTolerance, relTolerance].every(v => typeof v === 'number' && Number.isFinite(v)))
    throw new Error('Numerical grading requires finite number inputs');
  if (absTolerance < 0 || relTolerance < 0)
    throw new Error('Tolerances cannot be negative');
  // Without a unit-conversion engine, never silently accept different units.
  if (String(unit).trim() !== String(submittedUnit).trim())
    return { correct: false, reason: 'unit_mismatch' };
  const tolerance = Math.max(absTolerance, relTolerance * Math.abs(expected));
  return { correct: Math.abs(expected - submitted) <= tolerance,
    reason: 'numeric_comparison', error: Math.abs(expected - submitted), tolerance };
}
