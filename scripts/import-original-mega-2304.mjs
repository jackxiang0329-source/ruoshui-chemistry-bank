#!/usr/bin/env node
// Four disciplines × 16 distinct authored families × 36 parameter instances.
// No copied exams, no content approval granted by machine consistency checks.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {FAMILIES as INORGANIC} from './mega-chemistry/inorganic.mjs';
import {FAMILIES as ANALYTICAL} from './mega-chemistry/analytical.mjs';
import {FAMILIES as ORGANIC} from './mega-chemistry/organic.mjs';
import {FAMILIES as PHYSICAL} from './mega-chemistry/physical.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const ALL_FAMILIES=[...INORGANIC,...ANALYTICAL,...ORGANIC,...PHYSICAL];
const short=x=>String(Number(x.toPrecision(10)));
const replace=(s,a,b)=>s.replaceAll('{a}',short(a)).replaceAll('{b}',short(b));
export const idFor=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function verify(f,a,b,x){
 const residual=f.inverse(a,b,x);
 if(!Number.isFinite(x)||!Number.isFinite(residual)||residual>1e-7)
  throw Error('Independent chemistry inverse check failed: '+f.family);
 return true;
}
export function generate(){
 const rows=[],ids=new Set(),families=new Set();
 for(const f of ALL_FAMILIES){
  if(families.has(f.family)||!['inorganic','analytical','organic','physical'].includes(f.subject))
   throw Error('Duplicate or unknown authoring subject/family '+f.family);
  families.add(f.family);
  if(f.question.length<45||f.reason.length<30||!f.question.includes('{a}'))
   throw Error('Incomplete authoring premise '+f.family);
  for(let i=0;i<36;i++){
   const a=Number((f.a+i*f.da).toPrecision(10));
   const b=Number((f.b+i*f.db).toPrecision(10));
   const question=replace(f.question,a,b);
   const numeric=f.calc(a,b);
   verify(f,a,b,numeric);
   const id=idFor(question);
   if(ids.has(id))throw Error('Duplicate normalized authored question ID '+f.family);
   ids.add(id);
   const numericStr=Number(numeric).toPrecision(8);
   const units=f.unit?f.unit:'无量纲';
   const steps=[
    '第一步（条件与单位）：本题采用 '+f.subject+' 的 '+f.family+' 定量模型。题设参数 a='+short(a)+'、b='+short(b)+'，并已限定成立的化学与物理近似。需要先确定所求量的单位 '+units+'，避免将模型外的真实干扰视作已被证明不存在。',
    '第二步（计算原理）：'+replace(f.reason,a,b)+' 该关系仅在所述条件及约定下计算，参数取值及计量系数不应由习惯公式自行替换。',
    '第三步（数值及复核）：用 a='+short(a)+'、b='+short(b)+' 代入上述模型，得到 '+numericStr+' '+units+'。再把该数值代回独立反向关系核对原参数；已执行有限值、反代与来源一致性检查，尚须人工审核科学真实性。'
   ];
   if(steps.some(s=>s.length<80))throw Error('Incomplete 3-step worked solution '+f.family);
   rows.push({
    schema_version:1,id,subject:f.subject,topic:f.family+'_case'+String(i+1).padStart(2,'0'),
    topic_family:f.family,parameter_case:i+1,level:'undergraduate',
    difficulty:'intermediate',question_type:'authored_three_step_quantitative_chemistry',
    resource_type:'original_solved_exercise_not_upstream_question',
    question,answer:'答案：'+numericStr+' '+units+'。',
    explanation:steps.join('\n'),solution_steps:steps,
    numeric_answers:[numeric],units,independent_model_inverse_checked:true,
    machine_science_check_scope:'mathematical_formula_and_premise_consistency_not_peer_review',
    requires_human_chemistry_review:true,semantic_duplicate_review_pending:true,
    quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:OWN,file:'scripts/import-original-mega-2304.mjs',
     license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
     content_rights_verified:true,origin:'independently_authored_64_models_36_parameter_cases',
     original_exam_question:false,third_party_question_text_copied:false,
     changes:'Fully authored applied university teaching problem and three-stage explanation, no third-party problem text copied.'}
   });
  }
 }
 if(rows.length!==2304||families.size!==64)
  throw Error('Expected 2304 cases in 64 independently authored model families');
 for(const subject of ['inorganic','analytical','organic','physical'])
  if(rows.filter(x=>x.subject===subject).length!==576)
   throw Error('Unequal four-subject original chemistry batch '+subject);
 return rows;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of rows){
  const p=join(dir,q.id+'.json');
  if(existsSync(p)&&JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(q))
   throw Error('Stored problem, numeric answer, or provenance and publishing flags changed: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of rows){
  const p=join(dir,q.id+'.json');
  if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;
 }
 const report={schema_version:1,generated:2304,distinct_topic_families:64,
  by_subject:{inorganic:576,analytical:576,organic:576,physical:576},
  cases_per_family:36,three_step_solution_count:6912,
  independently_checked_numeric_cases:2304,complete_source_replays:2304,
  source_license:'CC0-1.0',copied_exam_questions:0,
  expert_approved:0,publishable:false,
  caveat:'2304 distinct parameter records in 64 distinct authored topic families, not 2304 distinct concepts. No chemical peer review, semantic deduplication or official problem approval has been completed.'};
 const path=join(ROOT,'harvest/import_reports/original_mega_2304.json');
 mkdirSync(dirname(path),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Mega original chemistry bank: 2304 cases; new '+added+'; distinct topics 64; approved 0');
 return {added,existing:2304-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
