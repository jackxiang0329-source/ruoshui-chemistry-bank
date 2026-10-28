#!/usr/bin/env node
// 112 original chemistry teaching models used to construct paired-case comparison
// exercises. 10,080 combinations from two validated source collections.
// Mechanical consistency is not expert scientific review.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ALL_FAMILIES as mega} from './import-original-mega-2304.mjs';
import {FAMILIES as dual} from './import-original-dual-3072.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
const render=x=>String(Number(x.toPrecision(10)));
const fmt=(s,a,b)=>s.replaceAll('{a}',render(a)).replaceAll('{b}',render(b));
export const totalTopicFamilies=mega.length+dual.length;
export const pairOffsets=[1,5];
export const problemId=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const near=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)/Math.max(1e-26,Math.abs(b))<1e-7;
function at(f,i){
 const a=Number((f.a+i*f.da).toPrecision(10)),b=Number((f.b+i*f.db).toPrecision(10));
 const values=f.calc(a,b),answer=Array.isArray(values)?values:[values];
 if(answer.some(x=>!Number.isFinite(x)))throw Error('Nonfinite original chemical model '+(f.family||f.id));
 const check=f.inverse(a,b,...answer);
 const residuals=Array.isArray(check)?check:[check];
 if(residuals.length!==answer.length||residuals.some(x=>!Number.isFinite(x)||x>1e-7))
  throw Error('Source chemical equation regression '+(f.family||f.id));
 return {a,b,answer,question:fmt(f.question,a,b),reason:fmt(f.reason||f.worked,a,b),residuals};
}
export function comparison(f,i,offset,source){
 const first=at(f,i),second=at(f,i+offset);
 if(first.answer.length!==second.answer.length)throw Error('Model answer count drift');
 const delta=first.answer.map((v,k)=>second.answer[k]-v);
 const unit=Array.isArray(f.unit)?f.unit:[f.unit||'无量纲'];
 const vals=[...first.answer,...second.answer,...delta];
 const units=[...unit,...unit,...unit];
 if(vals.length!==units.length)throw Error('Inconsistent quantitative units');
 if(!delta.every((d,k)=>near(first.answer[k]+d,second.answer[k])))
  throw Error('Mass, charge or numerical difference conservation failed');
 const question='双情境对照·'+f.subject+'·'+(source==='mega'?'三步骤专题':'双量联算专题')+
  '（相隔 '+offset+' 个已校验参数档）。\n'+
  '【情境甲】'+first.question+'\n'+
  '【情境乙】'+second.question+'\n'+
  '使用相同的公式和标准态约定分别求解甲、乙，然后逐项求有符号变化 Δ=乙−甲。'+
  '对于每个输出量均须保留原来的单位；两个情境是不同实验条件，并非一次实验中任意混用的参数。';
 const nfmt=v=>Number(v).toPrecision(8);
 const step1='步骤一：分别列出两组完整题设：甲(a,b)=('+render(first.a)+','+render(first.b)+
  ')、乙(a,b)=('+render(second.a)+','+render(second.b)+')。核对相应的化学计量、单位与模型前提；两个情境必须分别计算。';
 const step2='步骤二：使用已编写的化学原理。\n甲：'+first.reason+'\n乙：'+second.reason+
  '\n甲结果：'+first.answer.map((v,k)=>nfmt(v)+' '+unit[k]).join('；')+
  '\n乙结果：'+second.answer.map((v,k)=>nfmt(v)+' '+unit[k]).join('；')+'。';
 const step3='步骤三：逐量作差 Δ=乙−甲，得到 '+
  delta.map((v,k)=>nfmt(v)+' '+unit[k]).join('；')+
  '；分别对甲、乙结果作独立逆向方程检验，再检验“甲+Δ=乙”是否成立。机器公式复核不代表化学专家审定。';
 const topic=(f.family||f.id)+'_compare_'+source+'_d'+offset+'_v'+String(i+1).padStart(2,'0');
 return {subject:f.subject,topic,topic_family:f.family||f.id,question,answer:'甲：'+first.answer.map((v,k)=>nfmt(v)+' '+unit[k]).join('，')+
  '；乙：'+second.answer.map((v,k)=>nfmt(v)+' '+unit[k]).join('，')+
  '；乙−甲：'+delta.map((v,k)=>nfmt(v)+' '+unit[k]).join('，')+'。',
  explanation:[step1,step2,step3].join('\n\n'),solution_steps:[step1,step2,step3],
  numeric_answers:vals,units:units,source_model:source,
  source_parameter_indices:[i,i+offset],source_inverse_residuals:[first.residuals,second.residuals],
  model_output_count:unit.length,offset,parameter_case:i+1};
}
export function generate(){
 if(mega.length!==64||dual.length!==48)throw Error('Expected 112 pinned topic families');
 const out=[],ids=new Set(),families=new Set();
 for(const [source,models,max] of [['mega',mega,36],['dual',dual,64]]){
  for(const f of models){
   const key=source+'|'+(f.family||f.id);
   if(families.has(key))throw Error('Repeated model family '+key);
   families.add(key);
   for(const offset of pairOffsets)for(let i=0;i<max-offset;i++){
    const p=comparison(f,i,offset,source);
    const id=problemId(p.question);
    if(ids.has(id))throw Error('Duplicate comparative chemical question '+p.topic);
    ids.add(id);
    if(p.question.length<130||p.explanation.length<200||
       p.numeric_answers.some(x=>!Number.isFinite(x)))throw Error('Unfinished comparative explanation '+p.topic);
    out.push({schema_version:1,id,level:'undergraduate',difficulty:'intermediate_to_advanced',
     question_type:'original_two_scenario_comparison_and_difference',
     resource_type:'original_solved_exercise_not_upstream_question',
     ...p,human_expert_reviewed:false,requires_human_chemistry_review:true,
     semantic_duplicate_review_pending:true,
     quality_status:'awaiting_expert_review',publishable:false,
     source:{repository:OWN,file:'scripts/import-original-contrast-10080.mjs',
      original_model_file:source==='mega'?'scripts/import-original-mega-2304.mjs':'scripts/import-original-dual-3072.mjs',
      license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
      content_rights_verified:true,origin:'original_paired_condition_comparison',
      original_exam_question:false,third_party_question_text_copied:false,
      changes:'Independently composed source-bound two-scenario question; no external exam text.'}});
   }
  }
 }
 if(out.length!==10080||families.size!==112||
    ['inorganic','analytical','organic','physical'].some(s=>out.filter(x=>x.subject===s).length!==2520))
  throw Error('Expected 10080 completed comparison exercises with four equal disciplines');
 return out;
}
export function run(){
 const items=generate(),dir=join(ROOT,'data/candidates');
 for(const q of items){
  const p=join(dir,q.id+'.json');
  if(existsSync(p)&&JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(q))
   throw Error('Stored original candidate text, inverse or license changed: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 let added=0;
 for(const q of items){const p=join(dir,q.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:10080,distinct_preexisting_topic_families:112,
  newly_authored_independent_topic_families:0,
  cases_from_mega_64_models:64*(35+31),
  cases_from_dual_48_models:48*(63+59),
  comparison_offsets:[1,5],by_subject:{inorganic:2520,analytical:2520,organic:2520,physical:2520},
  source_equation_inverse_checks:10080,source_model_output_residual_checks:20160,
  source_model_difference_checks:10080,
  stored_source_replays:10080,source_license:'CC0-1.0',
  copied_external_exam_questions:0,expert_approved:0,publishable:false,
  note:'10,080 paired-scenario exercise records reuse 112 pre-existing original models; not 10,080 new scientific topics or expert-reviewed exam questions.'};
 const p=join(ROOT,'harvest/import_reports/original_contrast_10080.json');
 mkdirSync(dirname(p),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(p)||readFileSync(p,'utf8')!==body)writeFileSync(p,body);
 console.log('Paired original chemistry: new '+added+', old '+(10080-added)+', reused 112 topics; 0 expert approvals');
 return {added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
