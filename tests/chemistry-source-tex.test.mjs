import test from 'node:test';
import assert from 'node:assert/strict';
import {makeTex,esc} from '../scripts/build-chemistry-source-tex.mjs';
const sha='a'.repeat(40);
const pin={commit:sha,repository:'philschatz/chemistry-book',edition_rights_conflict_pending:true,
 import_source_derived_exercises_into_main_prohibited:true,items_rights_auto_approved:false};
const keys=['contents/m51011.md:1','contents/m51011.md:3','contents/m51014.md:4',
 'contents/m51014.md:6','contents/m51034.md:5','contents/m51034.md:6',
 'contents/m51117.md:3','contents/m51117.md:5'];
const scienceItems=Array.from({length:42},(_,i)=>{
 const [p,n]=i<8?keys[i].split(':'):['contents/m51034.md',String(i+100)];
 return {source_path:p,source_exercise_ordinal:Number(n),
  source_id:'OSCHEM-'+i.toString(16).padStart(24,'0'),
  source_url:'https://github.com/philschatz/chemistry-book/blob/'+sha+'/'+p,
  source_answer_present:true,question_sha256:'b'.repeat(64),
  independently_calculated_results:[i+0.25],
  machine_computation_checked:true,release_eligible:false,
  source_item_rights_verified:false,independent_human_chemist_review_completed:false,
  independent_method:'Independent calculation and inverse check.',
  issue:i===8?'answer_label_issue':null,
  source_question_typo:i===9?'formula_typo':null};
});
const science={reviewed_source_cases:42,items:scienceItems,source_commit:sha,publishable:0,
 rights_confirmations:0,scholarly_human_confirmations:0};
const chItems=scienceItems.slice(8).map((q,i)=>({
 chapter_file:q.source_path,source_exercise_ordinal:q.source_exercise_ordinal,
 source_id:q.source_id,source_url:q.source_url,source_question_sha256:q.question_sha256,
 subject:'物理化学',topic:'示范计算'+i,
 independent_solution_steps_zh:['依据化学守恒建立计算模型。','把给定数值代入单位一致的表达式。','用逆向计算检查结果。'],
 computed_answers:[{label:'独立值',unit:'mol',value:q.independently_calculated_results[0]}],
 human_science_approval:false,individual_reuse_rights_approved:false,
 publishable:false,is_full_question_translation:false}));
const chinese={new_chinese_independent_derivations:34,items:chItems,
 previous_full_chinese_drafts:8,numeric_review_count:42,
 edition_rights_unresolved:true,reuse_rights_approved:0,expert_approved:0,
 released_for_exams:0,source_revision:sha};
const full={chinese_independently_recomputed_review_items:8,
 imported_into_main_candidate_bank:0,publishable:0,expert_approved:0,item_rights_approved:0};
test('escape LaTeX special characters before rendering',()=>{
 assert.equal(esc('H_2O & 80%'),'H\\_2O \\& 80\\%');
});
test('book indexes 42 independently solved source exercises with 34 detailed Chinese derivations',()=>{
 const out=makeTex(science,chinese,full,pin);
 assert.equal((out.match(/\\section\{/g)||[]).length,42);
 assert.equal((out.match(/\\begin\{enumerate\}/g)||[]).length,34);
 assert.match(out,/\\documentclass.*ctexbook/);
 assert.match(out,/版权及科学审核声明/);
 assert.match(out,/来源章节/);
 assert.match(out,/参考答案差异/);
});
test('unapproved rights or source and numerical mutations stop typesetting',()=>{
 assert.throws(()=>makeTex(science,chinese,full,{...pin,edition_rights_conflict_pending:false}),/gate/);
 assert.throws(()=>makeTex(science,chinese,{...full,publishable:1},pin),/gate/);
 assert.throws(()=>makeTex(science,{...chinese,items:chItems.map((c,i)=>i===0?
  {...c,computed_answers:[{label:'a',unit:'mol',value:900}]}:c)},full,pin),/Stale/);
 assert.throws(()=>makeTex({...science,items:scienceItems.map((q,i)=>i===8?
  {...q,source_url:'https://attacker.example'}:q)},chinese,full,pin),/provenance/);
});
