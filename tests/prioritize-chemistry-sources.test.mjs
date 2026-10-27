import test from 'node:test';
import assert from 'node:assert/strict';
import {rankSource,choose} from '../scripts/prioritize-chemistry-sources.mjs';
test('boost underrepresented fields and never grant source text rights',()=>{
 const rows=[
  {repository:'a/chemistry-quiz',description:'Chemistry quiz for college',subjects:['general'],repository_license_spdx:'UNKNOWN'},
  {repository:'b/analytical-chemistry-exercises',description:'Undergraduate analytical chemistry exercises',subjects:['analytical'],repository_license_spdx:'MIT'},
  {repository:'c/md-to-pdf',description:'Chemistry cheat sheet converter',subjects:['general'],repository_license_spdx:'UNKNOWN'}
 ];
 const queue=choose(rows);
 assert.equal(queue[0].repository,'b/analytical-chemistry-exercises');
 assert.ok(queue.every(x=>x.question_content_rights==='not_verified_for_question_or_answer_redistribution'));
 assert.equal(queue.some(x=>x.repository==='c/md-to-pdf'),false);
});
test('no approval inferred from MIT license',()=>{
 const x=rankSource({repository:'y/organic-chemistry-quiz',description:'Chemistry quiz',
  subjects:['organic'],repository_license_spdx:'MIT'});
 assert.equal(x.source_license_metadata_only,true);
 assert.equal(x.state,'needs_per_question_provenance_and_answer_quality_review');
});

test('software-only electrochemistry projects rank below actual analytical exercises',()=>{
 const exercise=rankSource({repository:'a/analytical-chemistry-exercises',
  description:'Undergraduate analytical chemistry exercises with worked answers',
  subjects:['analytical'],repository_license_spdx:'MIT'});
 const tool=rankSource({repository:'b/electrolab-cv',
  description:'Electrochemistry peak analysis software and calculator for laboratory data',
  subjects:['analytical','physical'],repository_license_spdx:'MIT'});
 assert.ok(exercise&&tool);
 assert.ok(exercise.score>tool.score);
 assert.equal(exercise.question_presence_signal,'explicit_question_or_exercise_claim');
 assert.equal(tool.question_presence_signal,'software_or_tool_only_claim');
 assert.equal(tool.question_content_rights,'not_verified_for_question_or_answer_redistribution');
});
test('no license and explicit quiz metadata still require per-question review',()=>{
 const quiz=rankSource({repository:'c/chemistry-quiz',
  description:'Organic chemistry quiz with answers',subjects:['organic'],repository_license_spdx:'UNKNOWN'});
 assert.equal(quiz.question_presence_signal,'explicit_question_or_exercise_claim');
 assert.equal(quiz.question_content_rights,'not_verified_for_question_or_answer_redistribution');
 assert.equal(quiz.state,'needs_per_question_provenance_and_answer_quality_review');
});
