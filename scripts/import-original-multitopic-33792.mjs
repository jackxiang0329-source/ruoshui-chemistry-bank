#!/usr/bin/env node
/**
 * Original multi-topic chemistry assignments: unordered combinations of two
 * different 3-target topics from the same discipline.
 * 12 choose 2 = 66 combinations per discipline, four disciplines, 128 cases
 * each: 33,792 grouped cases and 202,752 numerical conservation witnesses.
 * These are original teaching assignments, NOT 33,792 new chemistry topics.
 */
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {FAMILIES as inorganic} from './advanced-chain/inorganic.mjs';
import {FAMILIES as analytical} from './advanced-chain/analytical.mjs';
import {FAMILIES as organic} from './advanced-chain/organic.mjs';
import {FAMILIES as physical} from './advanced-chain/physical.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWNER='jackxiang0329-source/ruoshui-chemistry-bank';
export const SOURCE_GROUPS={inorganic,analytical,organic,physical};
export const TOPIC_PAIR_COUNT=264;
export const PARAMETER_SET_COUNT=128;
export const OUTPUT_COUNT=6;
const nice=x=>String(Number(x.toPrecision(10)));
const fill=(s,a,b)=>s.replaceAll('{a}',nice(a)).replaceAll('{b}',nice(b));
export const idFromQuestion=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const close=(x,y)=>Math.abs(x-y)<=1e-7*Math.max(1,Math.abs(x),Math.abs(y));
export function caseOf(f,i){
 const a=Number((f.a+i*f.da).toPrecision(10));
 const b=Number((f.b+i*f.db).toPrecision(10));
 const numbers=f.calc(a,b),residuals=f.inverse(a,b,numbers);
 if(!Array.isArray(numbers)||numbers.length!==3||numbers.some(n=>!Number.isFinite(n))||
    !Array.isArray(residuals)||residuals.length!==3||
    residuals.some(n=>!Number.isFinite(n)||n>1e-7))
  throw Error('Original chemistry three-model inverse violation: '+f.id+' #'+i);
 if(i<0||i>=128||!Number.isFinite(a)||!Number.isFinite(b))
  throw Error('Parameter range unsupported by original chemistry premise '+f.id);
 // Strong premise checks for parameterized original examples.
 if(f.id==='redox_iron_dichromate_electron_balance'&&b>6*a)throw Error('Cr2O7 limiting premise');
 if(f.id==='mcl2_sulfate_precipitation_mass'&&b>a)throw Error('Ba2+ limiting premise');
 if(f.id==='zn_hcl_hydrogen_gas_electrons'&&b<2*a)throw Error('HCl limiting premise');
 if(f.id==='iodide_hydrogen_peroxide_iodine'&&b<2*a)throw Error('Iodide excess premise');
 if(f.id==='ethanol_dehydration_ethylene_water'&&b>1)throw Error('Fraction exceeds one');
 if(['ethanol_oxidation_acetaldehyde_oxygen_water','ethyl_acetate_saponification_products',
      'monoalkene_hydrogenation_partial_conversion','alkene_bromine_addition_partial_conversion',
      'benzene_mononitration_yield_and_unreacted','methyl_to_ethyl_acetate_transesterification',
      'acetaldehyde_to_acetic_acid_air_oxidation','ethanol_acetic_acid_esterification_with_conversion']
      .includes(f.id)&&(b<0||b>1))throw Error('Conversion must lie in [0,1]');
 const question=fill(f.question,a,b),method=fill(f.method,a,b);
 if(question.length<45||method.length<32||!question.includes(nice(a)))
  throw Error('Missing original question or derivation '+f.id);
 return {a,b,question,method,numbers,residuals,units:f.unit};
}
export function pairs(){
 const out=[];
 for(const subject of ['inorganic','analytical','organic','physical']){
  const models=SOURCE_GROUPS[subject];
  if(models.length!==12||new Set(models.map(f=>f.id)).size!==12)
   throw Error('Expected twelve unique three-stage models in '+subject);
  for(let x=0;x<models.length;x++)for(let y=x+1;y<models.length;y++)
   out.push({subject,left:models[x],right:models[y],pair_id:models[x].id+'__'+models[y].id});
 }
 if(out.length!==264)throw Error('Expected 264 unique two-topic combinations');
 return out;
}
export function combine(pair,index){
 if(index<0||index>=PARAMETER_SET_COUNT)throw Error('Unbounded parameter-set index');
 // Distinct and deterministic input selections. Both families remain in their
 // authored physical ranges 0..127, including dimensionless conversion limits.
 const aIndex=index,bIndex=(index+17)%PARAMETER_SET_COUNT;
 const a=caseOf(pair.left,aIndex),b=caseOf(pair.right,bIndex);
 const answers=[...a.numbers,...b.numbers],units=[...a.units,...b.units];
 const question='原创同科双专题综合训练 · '+pair.subject+' · '+pair.pair_id+
  ' · 条件组 '+String(index+1)+'。\n'+
  '【子问题甲：'+pair.left.id+'】'+a.question+'\n'+
  '【子问题乙：'+pair.right.id+'】'+b.question+'\n'+
  '要求在同一份作业中给出两类不同知识模型的完整推导，分别报告每个子问题的三个结果（合计六个）。'+
  '不同量纲的结果禁止直接相加或比较大小；必须逐一说明单位、假定和守恒或逆向验证。';
 const sol=[
  '第一阶段｜读题并界定两套模型。子问题甲参数 a='+nice(a.a)+'、b='+nice(a.b)+
  '；子问题乙参数 a='+nice(b.a)+'、b='+nice(b.b)+'。两组参数不可互换；本题是跨章节并列综合训练而非单一化学反应系统。',
  '第二阶段｜甲模型推导。'+a.method+
  ' 逐量代入条件，得到 '+a.numbers.map((n,i)=>'甲'+(i+1)+'='+Number(n).toPrecision(9)+' '+a.units[i]).join('；')+'。',
  '第三阶段｜甲模型验算。分别代回甲的三个独立逆向或守恒方程，三个残差为 '+a.residuals.map(x=>Number(x).toPrecision(4)).join('、')+'。',
  '第四阶段｜乙模型推导。'+b.method+
  ' 逐量代入条件，得到 '+b.numbers.map((n,i)=>'乙'+(i+1)+'='+Number(n).toPrecision(9)+' '+b.units[i]).join('；')+'。',
  '第五阶段｜乙模型验算。分别代回乙的三个独立逆向或守恒方程，三个残差为 '+b.residuals.map(x=>Number(x).toPrecision(4)).join('、')+'。',
  '第六阶段｜一致性检查。甲乙全部六个数值具有各自独立单位，不把不同量纲的量强行合并；指出各自的模型近似。机器恒等式验算不等于逐题专家科学审核。'
 ];
 const answer='甲：'+a.numbers.map((n,i)=>Number(n).toPrecision(9)+' '+a.units[i]).join('；')+
  '。乙：'+b.numbers.map((n,i)=>Number(n).toPrecision(9)+' '+b.units[i]).join('；')+'。';
 if(answers.length!==6||units.length!==6||sol.length!==6||
    [...a.residuals,...b.residuals].some(n=>!Number.isFinite(n)||n>1e-7))
  throw Error('Incomplete six-output science assignment');
 return {subject:pair.subject,pair_id:pair.pair_id,index,question,answer,explanation:sol.join('\n\n'),
  solution_steps:sol,numeric_answers:answers,numeric_answer_units:units,
  inverse_residuals:[...a.residuals,...b.residuals],
  model_source_ids:[pair.left.id,pair.right.id],parameter_indices:[aIndex,bIndex]};
}
export function generate(){
 const out=[],ids=new Set();
 for(const p of pairs())for(let i=0;i<PARAMETER_SET_COUNT;i++){
  const q=combine(p,i),id=idFromQuestion(q.question);
  if(ids.has(id))throw Error('Duplicate normalized mixed-topic question');
  ids.add(id);
  out.push({schema_version:1,id,subject:q.subject,
   topic:'multitopic_'+q.pair_id+'_case'+String(i+1).padStart(3,'0'),
   topic_family:q.pair_id,parameter_case:i+1,level:'undergraduate',
   difficulty:'advanced_multi_part',question_type:'original_two_topic_six_target_assignment',
   resource_type:'original_solved_exercise_not_upstream_question',
   ...q,source_model_pair_count:2,independent_inverse_check_count:6,
   disclosure:'264 distinct combinations of 48 pre-existing science topic models, 128 parameter sets per pair; zero new atomic knowledge topics.',
   human_expert_reviewed:false,requires_human_chemistry_review:true,
   semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:OWNER,file:'scripts/import-original-multitopic-33792.mjs',
    topic_source_files:['scripts/advanced-chain/'+q.subject+'.mjs'],
    license:'CC0-1.0',
    license_evidence:'https://github.com/'+OWNER+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_two_distinct_topic_assignment',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Original combined assignment of two independently authored science models; no source textbook/exam problem copied.'}});
 }
 if(out.length!==33792||ids.size!==33792||
   ['inorganic','analytical','organic','physical'].some(s=>out.filter(x=>x.subject===s).length!==8448))
  throw Error('Expected exactly 33,792 source-exact multi-topic chemistry assignments');
 return out;
}
export function run(){
 const data=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of data){const path=join(dir,q.id+'.json');
  if(existsSync(path)&&JSON.stringify(JSON.parse(readFileSync(path,'utf8')))!==JSON.stringify(q))
   throw Error('Saved chemistry assignment drift: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of data){const path=join(dir,q.id+'.json');if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:33792,distinct_multi_topic_combinations:264,
  independent_atomic_new_topic_models:0,underlying_original_topics:48,
  combinations_per_discipline:66,parameter_cases_per_combination:128,
  six_answer_records:33792,independent_inverse_checks:202752,
  source_replayed_records:33792,
  by_subject:{inorganic:8448,analytical:8448,organic:8448,physical:8448},
  license:'CC0-1.0',third_party_exam_text_copied:0,expert_approved:0,publishable:false,
  note:'33,792 independently stored two-topic assignments constructed from 48 prior atomic topic models. They increase multi-chapter training combinations but do not represent 33,792 independent chemistry concepts, lab-verified results or expert-approved problems.'};
 const reportPath=join(ROOT,'harvest/import_reports/original_multitopic_33792.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==body)writeFileSync(reportPath,body);
 console.log('Mixed original chemistry: new='+added+' existed='+(33792-added)+' pairs=264 inverse-checks=202752 expert=0');
 return {added,existing:33792-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
