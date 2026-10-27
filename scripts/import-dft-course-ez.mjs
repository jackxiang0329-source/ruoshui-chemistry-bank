#!/usr/bin/env node
// 12 attributable, source-anchored original applied questions from CC BY 4.0
// DFT Course (Nathan Lui). No diagrams, third-party article text or output files.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const INPUT=join(ROOT,'harvest/pinned_dft_course_isomers.json');
const OWNER='thisisntnathan/dftCourse';
const PIN='94e9a45154fe6e8b014fd18f09b87993c599f7de';
const SOURCE_BLOB='7f46142948141cbbe18914c50cced8a45db35193';
const README_BLOB='552dccdf024ef9f7de6c571b55d59554bb2cde80';
const Rkcal=8.31446261815324/4184; // kcal mol^-1 K^-1
const T=298.15;
export const questionId=s=>createHash('sha256').update(String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function calculate(kind,p){
 switch(kind){
  case 'relative_energy':return p.Z-p.E;
  case 'minor_isomer_fraction':return 100/(1+Math.exp((p.Z-p.E)/(Rkcal*T)));
  case 'walltime_overhead':return (p.minutes_Z/p.minutes_E-1)*100;
  default:throw Error('Unknown DFT course activity '+kind);
 }
}
export function independentVerify(kind,p,v){
 let left,right;
 switch(kind){
  case 'relative_energy':left=p.E+v;right=p.Z;break;
  case 'minor_isomer_fraction':
   if(v<=0||v>=50)throw Error('Invalid equilibrium minor isomer fraction');
   left=Math.log((100-v)/v);
   right=(p.Z-p.E)/(Rkcal*T);break;
  case 'walltime_overhead':left=p.minutes_E*(1+v/100);right=p.minutes_Z;break;
  default:throw Error('Unsupported independent check');
 }
 if(!Number.isFinite(v)||Math.abs(left-right)>1e-8*Math.max(1,Math.abs(right)))
  throw Error('DFT sample independently checked arithmetic mismatch: '+kind);
 return true;
}
export function generate(data){
 if(data?.schema_version!==1||data.upstream!==OWNER||data.upstream_commit!==PIN||
  data.source_path!=='_pages/Problems/2_EZ-isomers.md'||
  data.source_blob_sha!==SOURCE_BLOB||data.license_readme_blob_sha!==README_BLOB||
  data.content_license!=='CC BY 4.0'||data.original_author!=='Nathan Lui'||
  !Array.isArray(data.source_data)||data.source_data.length!==4)
  throw Error('Source evidence drift: do not import');
 const expectedKeys=['def2svp','mixed_def2tzvp','aug_cc_pvtz_nitro','def2tzvpd_nitro'];
 const expected={
  def2svp:[-973863.597,-973862.450,37,47],
  mixed_def2tzvp:[-974540.402,-974539.491,87,92],
  aug_cc_pvtz_nitro:[-974540.579,-974539.693,120,134],
  def2tzvpd_nitro:[-974542.096,-974541.205,99,110]
 };
 const make=(p,kind,question,answer,explanation,numeric,unit,topic)=>({
  schema_version:1,id:questionId(question),subject:'physical',topic,
  level:'upper_undergraduate',question_type:'adapted_cc_by_computational_chemistry_exercise',
  resource_type:'new_calculation_using_attributed_cc_by_teaching_table',
  question,answer,explanation,numeric_answers:[numeric],unit,
  quality_status:'awaiting_expert_review',publishable:false,
  semantic_duplicate_review_pending:true,
  source:{repository:OWNER,commit:PIN,file:data.source_path,git_blob_sha:SOURCE_BLOB,
    license:'CC BY 4.0',license_evidence:data.license_evidence,
    license_readme_blob_sha:README_BLOB,author:'Nathan Lui',
    attribution:'The DFT Course by Nathan Lui, CC BY 4.0 (2026). Source: https://thisisntnathan.github.io/dftCourse/',
    content_rights_verified:true,original_exam_question:false,
    changes:'New Chinese calculation stem and independently checked numeric answer using tabulated E/Z energies and computation times. No figures, paper text or external computational log copied.'},
  review_notes:'These corrected electronic/free energies are used for educational numerical comparisons. Predicted populations require the explicitly stated illustrative thermodynamic assumptions; they are not measured product ratios.'
 });
 const records=[];
 for(let i=0;i<data.source_data.length;i++){
  const p=data.source_data[i];
  if(p.key!==expectedKeys[i]||!Array.isArray(expected[p.key])||
   [p.E,p.Z,p.minutes_E,p.minutes_Z].some((v,j)=>v!==expected[p.key][j])||
   !p.name||p.name.length>150)throw Error('Pinned data table differs from confirmed author-supplied values');
  const delta=calculate('relative_energy',p);
  if(!(delta>0.5&&delta<2))throw Error('E/Z order inconsistent with quoted data table');
  independentVerify('relative_energy',p,delta);
  const pct=calculate('minor_isomer_fraction',p);
  independentVerify('minor_isomer_fraction',p,pct);
  const wall=calculate('walltime_overhead',p);
  independentVerify('walltime_overhead',p,wall);
  const anchor='数据取自 Nathan Lui《The DFT Course》的 E/Z 异构体基组比较；'+p.name+'。';
  const fmt=x=>Number(x).toFixed(3);
  records.push(make(p,'relative_energy',
   '物理化学·计算化学：'+anchor+'在相同基组下 E 构型校正能量为 '+fmt(p.E)+' kcal/mol，Z 构型为 '+fmt(p.Z)+' kcal/mol。计算 ΔG(Z−E)，并指出能量较低的构型。',
   'ΔG(Z−E) = G(Z)−G(E) = '+fmt(p.Z)+'−('+fmt(p.E)+') = '+fmt(delta)+' kcal/mol；E 构型能量较低。',
   '两种异构体的绝对能量只能在相同计算模型下相减；ΔG(Z−E)>0，按该计算模型 E 更稳定。',
   delta,'kcal/mol','relative_ez_free_energy'));
  records.push(make(p,'minor_isomer_fraction',
   '物理化学·异构体统计热力学：'+anchor+'此基组给出 ΔG(Z−E)='+fmt(delta)+' kcal/mol。若仅考虑 E、Z 两态，温度 298.15 K、简并度相同且达到理想平衡，求 Z 构型平衡摩尔百分数（%）。本题不讨论动力学控制下的产物分布。',
   'x(Z) = [1+exp(ΔG/RT)]⁻¹×100% = [1+exp('+fmt(delta)+'/(0.0019872043×298.15))]⁻¹×100% ≈ '+pct.toFixed(3)+'%。',
   '由 nZ/nE=exp[−(GZ−GE)/(RT)] 得 xZ=(nZ/nE)/(1+nZ/nE)；取 R=8.314462618 J/(mol·K)=0.0019872043 kcal/(mol·K)。',
   pct,'percent','hypothetical_isomer_equilibrium_fraction'));
  records.push(make(p,'walltime_overhead',
   '物理化学·计算资源评估：'+anchor+'对相同分子分别运行 E、Z 两种异构体计算，前者用时 '+p.minutes_E+' min，后者用时 '+p.minutes_Z+' min。问 Z 构型计算相对于 E 构型多耗时百分之多少？',
   '额外耗时 = ('+p.minutes_Z+'−'+p.minutes_E+')/'+p.minutes_E+'×100% = '+wall.toFixed(3)+'%。',
   '比较同一组计算基组下两种构型的墙钟用时；百分比的分母为 E 构型所需时间。',
   wall,'percent','isomer_computation_time_overhead'));
 }
 if(records.length!==12||new Set(records.map(x=>x.id)).size!==12)throw Error('Unexpected count/duplicate DFT-derived questions');
 return records;
}
export function run(){
 const data=JSON.parse(readFileSync(INPUT,'utf8')),rows=generate(data);
 const dir=join(ROOT,'data/candidates');
 for(const q of rows){
  const file=join(dir,q.id+'.json');
  if(!existsSync(file))continue;
  const prev=JSON.parse(readFileSync(file,'utf8'));
  if(prev.question!==q.question||prev.answer!==q.answer||
   prev.source?.repository!==OWNER||prev.source?.commit!==PIN||prev.publishable!==false)
   throw Error('Previously imported DFT source candidate collision '+q.id);
 }
 mkdirSync(dir,{recursive:true});let added=0,skipped=0;
 for(const q of rows){
  const file=join(dir,q.id+'.json');
  if(existsSync(file)){skipped++;continue;}
  writeFileSync(file,JSON.stringify(q,null,2)+'\n');added++;
 }
 const reportPath=join(ROOT,'harvest/import_reports/dft_course_isomers.json');
 const report={schema_version:1,author:'Nathan Lui',source:OWNER,pin:PIN,source_blob:SOURCE_BLOB,
  rights:'CC BY 4.0',source_original_problem_sets_copied:0,
  new_attributable_calculation_tasks:rows.length,source_basis_set_rows:4,
  by_subject:{physical:12},initial_import_added:added,initial_already_imported:skipped,
  quality_status:'awaiting_expert_review',expert_approved:0,publishable:false,
  note:'Author-licensed computational chemistry table values are attributed. Twelve new Chinese numerical exercises, not independent official exam problems, four rows × three concepts; illustrative equilibrium fraction must not be labeled measured reaction yields.'};
 mkdirSync(dirname(reportPath),{recursive:true});
 if(!existsSync(reportPath))writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
 else if(JSON.parse(readFileSync(reportPath,'utf8')).new_attributable_calculation_tasks!==12)
  throw Error('DFT import report conflict');
 const msg='DFT Course CC BY 4.0: eligible=12; newly added='+added+'; existing='+skipped+'; expert approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,skipped};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
