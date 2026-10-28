import test from 'node:test';
import assert from 'node:assert/strict';
import {CASES,independentlyCalculate} from '../scripts/review-openstax-chemistry-numerics.mjs';
import {MORE,independentlySolve} from '../scripts/review-openstax-chemistry-numerics-more.mjs';
import {buildChineseDerivations,renderResearchIndex}
 from '../scripts/build-chemistry-chinese-derivations.mjs';
const cases=[...CASES,...MORE],pin={commit:'a'.repeat(40),
 repository:'philschatz/chemistry-book',
 edition_rights_conflict_pending:true,
 import_source_derived_exercises_into_main_prohibited:true};
const items=cases.map((c,i)=>({
 source_id:'OSCHEM-'+i.toString(16).padStart(24,'0'),source_path:c.path,
 source_exercise_ordinal:c.ordinal,
 source_url:'https://github.com/'+pin.repository+'/blob/'+pin.commit+'/'+c.path,
 question_sha256:i.toString(16).padStart(64,'0'),
 source_answer_present:'hasAnswer' in c?c.hasAnswer:c.answerExpected,
 independently_calculated_results:MORE.some(x=>x.tag===c.tag)?
   independentlySolve(c.tag):independentlyCalculate(c.tag),
 machine_computation_checked:true,release_eligible:false,
 independent_human_chemist_review_completed:false,source_item_rights_verified:false,
 issue:c.keyDiscrepancy||c.keyIssue||null,source_question_typo:c.questionTypo||null
}));
const good={reviewed_source_cases:42,items,source_commit:pin.commit,publishable:0,
 rights_confirmations:0,scholarly_human_confirmations:0};
test('34 unique substantial source-linked Chinese derivations stay under quarantine',()=>{
 const result=buildChineseDerivations(good,pin);
 assert.equal(result.numeric_review_count,42);
 assert.equal(result.previous_full_chinese_drafts,8);
 assert.equal(result.new_chinese_independent_derivations,34);
 assert.equal(result.new_notes_missing_source_answers,6);
 assert.equal(result.new_notes_answer_issues,2);
 assert.equal(result.new_notes_question_typos,1);
 assert.equal(new Set(result.items.map(x=>x.source_id)).size,34);
 assert.ok(result.items.every(x=>x.independent_solution_steps_zh.length===3&&
  x.human_science_approval===false&&x.individual_reuse_rights_approved===false&&
  x.publishable===false));
 const md=renderResearchIndex(result);
 assert.match(md,/原题化学式疑点/);
 assert.match(md,/参考答案疑点/);
 assert.match(md,/原教材未附参考答案/);
});
test('rights status, source url and scientific values cannot silently change',()=>{
 assert.throws(()=>buildChineseDerivations({...good,publishable:1},pin),/quarantine/);
 assert.throws(()=>buildChineseDerivations(good,{...pin,edition_rights_conflict_pending:false}),/quarantine/);
 const alter=(n,k,v)=>({...good,items:items.map((x,i)=>i===n?{...x,[k]:v}:x)});
 assert.throws(()=>buildChineseDerivations(alter(8,'source_item_rights_verified',true),pin),/unsafe/);
 assert.throws(()=>buildChineseDerivations(alter(9,'independently_calculated_results',[0]),pin),/Stale/);
 assert.throws(()=>buildChineseDerivations(alter(10,'source_url','https://example.org'),pin),/unsafe/);
});
