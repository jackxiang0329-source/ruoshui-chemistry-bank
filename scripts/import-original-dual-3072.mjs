#!/usr/bin/env node
// Original undergraduate chemistry: 48 two-answer topics × 64 numeric parameter sets.
// This is source and algebra auditing, NOT independent chemical peer review or publication approval.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {FAMILIES as inorganic} from './bulk-original-4096-inorganic.mjs';
import {FAMILIES as analytical} from './bulk-original-4096-analytical.mjs';
import {FAMILIES as organic} from './bulk-original-4096-organic.mjs';
import {FAMILIES as physical} from './bulk-original-4096-physical.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const FAMILIES=[...inorganic,...analytical,...organic,...physical];
const display=x=>String(Number(x.toPrecision(10)));
const fill=(s,a,b)=>s.replaceAll('{a}',display(a)).replaceAll('{b}',display(b));
export const candidateId=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function verify(f,a,b,ans){
 if(!Array.isArray(ans)||ans.length!==2||ans.some(x=>!Number.isFinite(x)))
  throw Error('Expected exactly two finite answers for '+f.id);
 const residual=f.inverse(a,b,ans[0],ans[1]);
 if(!Array.isArray(residual)||residual.length!==2||
    residual.some(x=>!Number.isFinite(x)||x>1e-7))
  throw Error('Independent equation or conservation residual failed: '+f.id);
 return residual;
}
export function generate(){
 if(FAMILIES.length!==48)throw Error('Expected exactly forty-eight independently authored dual-result topics');
 const out=[],ids=new Set(),topics=new Set();
 for(const f of FAMILIES){
  if(topics.has(f.id)||!['inorganic','analytical','organic','physical'].includes(f.subject)||
     !Array.isArray(f.unit)||f.unit.length!==2||f.unit.some(u=>!u))
   throw Error('Invalid original chemistry family '+f.id);
  topics.add(f.id);
  for(let i=0;i<64;i++){
   const a=Number((f.a+i*f.da).toPrecision(10)),b=Number((f.b+i*f.db).toPrecision(10));
   const question=fill(f.question,a,b),reason=fill(f.worked,a,b);
   const ans=f.calc(a,b);
   const residuals=verify(f,a,b,ans);
   if(question.length<50||reason.length<27||!question.includes(display(a)))
    throw Error('Incomplete scientific premises or derivation: '+f.id);
   const id=candidateId(question);
   if(ids.has(id))throw Error('Identical problem stem across unrelated topics '+f.id);
   ids.add(id);
   const numbers=ans.map(x=>Number(x).toPrecision(8));
   const steps=[
     '题设固定化学物种、实验条件、单位及理想模型。已知参数 a='+display(a)+'、b='+display(b)+'；使用题干给出的化学计量、热力学或动力学假设。',
     reason,
     '分别计算第一个结果 '+numbers[0]+' '+f.unit[0]+' 和第二个结果 '+numbers[1]+' '+f.unit[1]+'，并独立代回两个守恒方程或逆向模型检查；不能据此声称完成专家科学性审核。'
   ];
   out.push({schema_version:1,id,subject:f.subject,
    topic:f.id+'_case'+String(i+1).padStart(2,'0'),topic_family:f.id,parameter_case:i+1,
    level:'undergraduate',difficulty:'intermediate_to_advanced',
    question_type:'original_dual_result_quantitative_with_conditions',
    resource_type:'original_solved_exercise_not_upstream_question',
    question,answer:'结果一 = '+numbers[0]+' '+f.unit[0]+'；结果二 = '+numbers[1]+' '+f.unit[1]+'。',
    explanation:steps.join('\n'),solution_steps:steps,
    numeric_answers:ans,numeric_answer_units:f.unit,units:f.unit,
    independent_equation_residuals:residuals,independent_formula_checks:2,
    original_topic_count_disclosure:'48 distinct authored topic models; each with 64 parameter variants.',
    human_expert_reviewed:false,requires_human_chemistry_review:true,
    semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:OWN,file:'scripts/import-original-dual-3072.mjs',
     subject_family_file:'scripts/bulk-original-4096-'+f.subject+'.mjs',
     license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
     content_rights_verified:true,origin:'independently_authored_chinese_dual_result_models',
     original_exam_question:false,third_party_question_text_copied:false,
     changes:'Original undergraduate teaching exercise and independent inverse-algebra audit; no external copyrighted exam content copied.'}});
  }
 }
 if(out.length!==3072||topics.size!==48||['inorganic','analytical','organic','physical'].some(s=>out.filter(x=>x.subject===s).length!==768))
  throw Error('Missing one of 3072 four-discipline dual-result candidate exercises');
 return out;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of rows){const p=join(dir,q.id+'.json');
  if(existsSync(p)&&JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(q))
   throw Error('Saved question, answer or source/rights flags changed: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of rows){const p=join(dir,q.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:3072,distinct_topic_families:48,
  numerical_variants_per_family:64,two_answer_cases:3072,
  independent_inverse_checks:6144,stored_source_replays:3072,
  by_subject:{inorganic:768,analytical:768,organic:768,physical:768},
  source_license:'CC0-1.0',copied_external_exam_questions:0,
  human_expert_approved:0,publishable:false,
  limitation:'3072 parameter variants in 48 authored topics; two numerical identities per variant. Does not prove empirical chemical correctness, semantic uniqueness, teaching quality or individual expert approval.'};
 const path=join(ROOT,'harvest/import_reports/original_dual_3072.json');
 mkdirSync(dirname(path),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Original dual-output chemistry: added='+added+' existing='+(3072-added)+
             ' topics=48, independent identities=6144, approved=0');
 return {added,existing:3072-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
