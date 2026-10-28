#!/usr/bin/env node
// 48 newly authored 3-linked-target chemistry chains × 256 parameter cases.
// Mechanical identities prove only the model arithmetic, NOT scientific peer-review.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {FAMILIES as inorganic} from './advanced-chain/inorganic.mjs';
import {FAMILIES as analytical} from './advanced-chain/analytical.mjs';
import {FAMILIES as organic} from './advanced-chain/organic.mjs';
import {FAMILIES as physical} from './advanced-chain/physical.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='jackxiang0329-source/ruoshui-chemistry-bank';
export const FAMILIES=[...inorganic,...analytical,...organic,...physical];
const number=x=>String(Number(x.toPrecision(10)));
const substitute=(s,a,b)=>s.replaceAll('{a}',number(a)).replaceAll('{b}',number(b));
export const hashQuestion=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function verifyModel(f,a,b,answers){
 if(!Array.isArray(answers)||answers.length!==3||answers.some(v=>!Number.isFinite(v)))
  throw Error('Three linked finite answers required: '+f.id);
 const residuals=f.inverse(a,b,answers);
 if(!Array.isArray(residuals)||residuals.length!==3||
    residuals.some(v=>!Number.isFinite(v)||v>1e-7))
  throw Error('Independent three-equation model audit failed: '+f.id);
 return residuals;
}
export function generate(){
 if(FAMILIES.length!==48)throw Error('Expected 48 distinct new authored chain templates');
 const rows=[],families=new Set(),ids=new Set(),units=new Set();
 for(const f of FAMILIES){
  if(families.has(f.id)||!['inorganic','analytical','organic','physical'].includes(f.subject)||
    !Array.isArray(f.unit)||f.unit.length!==3||f.unit.some(s=>!s))
   throw Error('Invalid authoring template identity or units: '+f.id);
  families.add(f.id);units.add(f.subject);
  for(let i=0;i<256;i++){
   const a=Number((f.a+i*f.da).toPrecision(10));
   const b=Number((f.b+i*f.db).toPrecision(10));
   const question='原创三目标综合计算题 · '+f.subject+' · '+f.id+
    '（第 '+(i+1)+' 组条件）。\n'+substitute(f.question,a,b);
   const method=substitute(f.method,a,b);
   const vals=f.calc(a,b),residuals=verifyModel(f,a,b,vals);
   if(question.length<85||method.length<35||!question.includes(number(a)))
    throw Error('Incomplete Chinese chemistry problem or method: '+f.id);
   const id=hashQuestion(question);
   if(ids.has(id))throw Error('Repeated normalized Chinese problem');
   ids.add(id);
   const v=vals.map(x=>Number(x).toPrecision(9));
   const step1='第一步｜明确条件与模型：'+f.id+
    '。题设参数 a='+number(a)+'、b='+number(b)+
    '；化学种类、反应比例、有效单位与近似条件以原题为准。确定三个求解目标：'+
    f.unit.join('、')+'，不可省略前提。';
   const step2='第二步｜建立关系并联立求解：'+method+
    ' 把符号条件逐一代入，而不是仅套用无化学解释的数字公式。';
   const step3='第三步｜三个结果与复核：'+
    vals.map((x,k)=>'结果'+(k+1)+' = '+v[k]+' '+f.unit[k]).join('；')+
    '。对三个结果逐项代回独立写出的逆向关系；本题逆向残差分别为 '+
    residuals.map(x=>Number(x).toPrecision(4)).join('、')+
    '。数值一致不代表已完成实验真实性或专家推导审查。';
   rows.push({schema_version:1,id,subject:f.subject,topic:f.id+'_set'+String(i+1).padStart(3,'0'),
    topic_family:f.id,parameter_case:i+1,level:'undergraduate',
    difficulty:'intermediate_to_advanced',question_type:'original_three_linked_outputs_quantitative',
    resource_type:'original_solved_exercise_not_upstream_question',
    question,answer:vals.map((x,k)=>'('+String(k+1)+') '+v[k]+' '+f.unit[k]).join('；')+'。',
    explanation:[step1,step2,step3].join('\n\n'),solution_steps:[step1,step2,step3],
    numeric_answers:vals,numeric_answer_units:f.unit,units:f.unit,
    numerical_witnesses:residuals,
    independent_inverse_checks:3,
    original_template_count_note:'48 authored three-target templates, each with 256 numeric variants; not 12,288 independent chemical concepts.',
    human_expert_reviewed:false,requires_human_chemistry_review:true,
    semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:REPO,file:'scripts/import-original-chains-12288.mjs',
     source_template:'scripts/advanced-chain/'+f.subject+'.mjs',
     license:'CC0-1.0',
     license_evidence:'https://github.com/'+REPO+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
     content_rights_verified:true,origin:'independently_authored_linked_three_target_science_model',
     original_exam_question:false,third_party_question_text_copied:false,
     changes:'Independently written Chinese exercises, not copied textbook or exam questions; original 3-stage model.'}});
  }
 }
 if(rows.length!==12288||families.size!==48||units.size!==4||
    ['inorganic','analytical','organic','physical'].some(x=>rows.filter(r=>r.subject===x).length!==3072))
  throw Error('Expected four equal subject groups × 12 authored topics × 256 numerical cases');
 return rows;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of rows){
  const path=join(dir,q.id+'.json');
  if(existsSync(path)&&JSON.stringify(JSON.parse(readFileSync(path,'utf8')))!==JSON.stringify(q))
   throw Error('Stored original candidate provenance or answer was altered: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of rows){
  const path=join(dir,q.id+'.json');
  if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;
 }
 const report={schema_version:1,generated:12288,authored_three_target_templates:48,
  parameter_cases_per_template:256,numeric_independent_inverse_checks:36864,
  three_result_records:12288,source_replay_count:12288,
  subject_counts:{inorganic:3072,analytical:3072,organic:3072,physical:3072},
  source_license:'CC0-1.0',copied_exam_questions:0,expert_approved:0,publishable:false,
  note:'12,288 are parameter variations of 48 newly authored multi-goal templates; not distinct concepts, independent peer-reviewed chemistry claims, or exam-ready publications.'};
 const path=join(ROOT,'harvest/import_reports/original_chains_12288.json');
 mkdirSync(dirname(path),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Original chemistry 3-target chain cases: added='+added+' already_saved='+(12288-added)+' models=48 inverse_checks=36864 approved=0');
 return {added,already_saved:12288-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
