#!/usr/bin/env node
// Independently recompute a small, explicitly pinned set of OpenStax Chemistry
// source exercises. This is a scientific REVIEW AID, never publication approval.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const ROOT_OER=join(ROOT,'external_sources/openstax_chemistry');
const norm=s=>String(s||'').normalize('NFKC').replace(/\s+/g,' ').trim();
const digest=s=>createHash('sha256').update(norm(s.toLowerCase())).digest('hex');
const near=(a,b,tolerance=2e-4)=>Number.isFinite(a)&&Number.isFinite(b)&&
 Math.abs(a-b)<=tolerance*Math.max(1e-6,Math.abs(a),Math.abs(b));
export const CASES=[
 {tag:'carbon_atom_formula_mass',path:'contents/m51011.md',ordinal:1,
  marker:'total mass (amu) of carbon',kind:'formula_mass',answerExpected:true,
  note:'计算各化学式中碳原子的总质量；用 C=12.01 u。',
  expected:[12.01,12.01,144.12,60.05]},
 {tag:'molecular_formula_mass',path:'contents/m51011.md',ordinal:3,
  marker:'molecular or formula mass',kind:'formula_mass',answerExpected:true,
  note:'按元素原子量分别计算 P4、H2O、Ca(NO3)2、乙酸、蔗糖的式量。',
  expected:[123.896,18.015,164.086,60.052,342.297]},
 {tag:'solution_molarity_six_parts',path:'contents/m51014.md',ordinal:4,
  marker:'Determine the molarity for each of the following solutions',kind:'molarity',
  answerExpected:true,note:'质量先除摩尔质量，毫升换算为升，水合物按完整式量。',
  expected:[0.444/0.654,98/97.994,0.2074/74.092/0.04,
   10500/322.195/18.6,0.007/0.1,18/36.46/0.075]},
 {tag:'glucose_solution_mass',path:'contents/m51014.md',ordinal:6,
  marker:'mass of the solute in 0.500 L',kind:'molarity',
  answerExpected:true,note:'糖的物质的量为 0.500×0.30 mol，质量为 0.15×180.156 g。',
  expected:[0.500*0.30*180.156]},
 {tag:'coffee_silver_spoon_heat',path:'contents/m51034.md',ordinal:6,
  marker:'45 g silver spoon',kind:'calorimetry',
  answerExpected:true,note:'由咖啡放热和银勺吸热守恒计算咖啡温降，使用 c_water=4.184 J/(g·K)。',
  expected:[45*0.24*(95-25)/(180*4.184+45*0.24)]},
 {tag:'coffee_mixing_no_source_solution',path:'contents/m51034.md',ordinal:5,
  marker:'How many milliliters of water at 23',kind:'calorimetry',
  answerExpected:false,note:'在同密度和同热容、无热损假设下，以 m_hot(95−60)=m_cold(60−23) 求冷水体积。',
  expected:[180*(95-60)/(60-23)]},
 {tag:'pure_water_kw_60c',path:'contents/m51117.md',ordinal:3,
  marker:'9.311',kind:'acid_base_equilibrium',answerExpected:true,
  note:'纯水中 [H3O+]=[OH−]=sqrt(Kw)，pH=pOH=−log10(sqrt(Kw))。',
  expected:[Math.sqrt(9.311e-14),-Math.log10(Math.sqrt(9.311e-14)),
   -Math.log10(Math.sqrt(9.311e-14))]},
 {tag:'strong_electrolyte_ph_poh_answer_swap',path:'contents/m51117.md',ordinal:5,
  marker:'0.000259',kind:'acid_base_equilibrium',answerExpected:true,
  note:'按题目完全电离及理想浓度近似，pH+pOH=14。教材答案将 (b) NaOH 与 (d) KOH 的 pH、pOH 名称互换，必须指出，浓溶液还需考虑活度。',
  keyDiscrepancy:'textbook_swaps_pH_and_pOH_for_b_and_d',
  expected:[-Math.log10(0.000259),14+Math.log10(0.000259),
   14+Math.log10(0.21),-Math.log10(0.21),
   14+Math.log10(2*0.000071),-Math.log10(2*0.000071),
   14+Math.log10(2.5),-Math.log10(2.5)]}
];
export function independentlyCalculate(tag){
 switch(tag){
 case 'carbon_atom_formula_mass':return [12.01,12.01,12*12.01,5*12.01];
 case 'molecular_formula_mass':return [
 4*30.974,2*1.008+15.999,40.078+2*(14.007+3*15.999),
 2*12.011+4*1.008+2*15.999,
 12*12.011+22*1.008+11*15.999];
 case 'solution_molarity_six_parts':return [
 444e-3/654e-3,
 98/(3*1.008+30.974+4*15.999)/1,
 207.4e-3/(40.078+2*(15.999+1.008))/40e-3,
 10500/(2*22.990+32.06+4*15.999+10*(2*1.008+15.999))/18.6,
 7e-3/100e-3,
 1.8e4/1000/(1.008+35.45)/75e-3
 ];
 case 'glucose_solution_mass':return [0.15*(6*12.011+12*1.008+6*15.999)];
 case 'coffee_silver_spoon_heat':return [
   (45*.24*(95-25))/(180*4.184+45*.24)];
 case 'coffee_mixing_no_source_solution':return [180*(95-60)/(60-23)];
 case 'pure_water_kw_60c':{
  const concentration=Math.sqrt(9.311e-14),pH=-Math.log10(concentration);
  return [concentration,pH,pH];
 }
 case 'strong_electrolyte_ph_poh_answer_swap':{
  const a=-Math.log10(0.000259),b=-Math.log10(.21),
   c=-Math.log10(.000071*2),d=-Math.log10(2.5);
  return [a,14-a,14-b,b,14-c,c,14-d,d];
 }
 default:throw Error('Unrecognized scientific case: '+tag);
 }
}
export function verifyScientificCase(c,computed=independentlyCalculate(c.tag)){
 if(!Array.isArray(computed)||computed.length!==c.expected.length||
   computed.some((x,i)=>!near(x,c.expected[i],.0006)))
  throw Error('Independent scientific calculation mismatch: '+c.tag);
 const v=computed;
 switch(c.tag){
 case 'carbon_atom_formula_mass':
  if(!near(v[2]/12,v[0])||!near(v[3]/5,v[0]))throw Error('Mass atom count inverse');break;
 case 'molecular_formula_mass':
  if(!near(v[0]/4,30.974)||!near(v[1]-2*1.008,15.999))throw Error('Molecular formula inverse');break;
 case 'solution_molarity_six_parts':
  if(!near(v[0]*.654,.444)||!near(v[4]*.1,.007))throw Error('Molarity inverse');break;
 case 'glucose_solution_mass':
  if(!near(v[0]/180.156/.5,.30))throw Error('Glucose mass inverse');break;
 case 'coffee_silver_spoon_heat':{
  const tfinal=95-v[0];
  if(!near(180*4.184*(95-tfinal),45*.24*(tfinal-25)))throw Error('Coffee energy balance');break;
 }
 case 'coffee_mixing_no_source_solution':
  if(!near(v[0]*(60-23),180*(95-60)))throw Error('Calorimetry inverse');break;
 case 'pure_water_kw_60c':
  if(!near(v[0]*v[0],9.311e-14,1e-6)||!near(v[1],v[2]))throw Error('Water Kw identity');break;
 case 'strong_electrolyte_ph_poh_answer_swap':
  for(let j=0;j<8;j+=2)if(!near(v[j]+v[j+1],14))throw Error('pH and pOH cannot sum to 14');
  break;
 }
 return true;
}
export function curateScientificReviews(rows,manifest){
 if(!Array.isArray(rows)||manifest?.items_rights_auto_approved!==false||
    manifest.work_license!=='CC-BY-3.0')throw Error('Source rights must remain pending');
 const src=new Map(),fileMap=new Map(manifest.files.map(f=>[f.path,f]));
 for(const row of rows){
  const key=row.source_path+':'+row.source_exercise_ordinal;
  if(src.has(key))throw Error('Duplicate source exercise ordinals: '+key);
  src.set(key,row);
 }
 const review=[];
 for(const c of CASES){
  const item=src.get(c.path+':'+c.ordinal),pin=fileMap.get(c.path);
  if(!item||!pin||pin.sha!==item.source_blob_sha||
    item.source_commit!==manifest.commit||item.source_repository!==manifest.repository)
   throw Error('Pinned raw source missing, altered or wrong edition: '+c.tag);
  if(!item.question?.includes(c.marker)||item.question_sha256!==digest(item.question)||
    item.has_source_solution!==c.answerExpected||
    item.requires_media||item.requires_mathml||
    item.exam_ready!==false||item.publishable!==false||
    item.content_rights_verified!==false||item.item_level_rights_review_pending!==true)
   throw Error('Unsafe text source, missing solution or altered exercise: '+c.tag);
  if(c.keyDiscrepancy){
   const text=String(item.answer||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
   if(!/pH\s*=\s*0\.68/.test(text)||!/pOH\s*=\s*13\.32/.test(text)||
      !/pH\s*=\s*−0\.40/.test(text)||!/pOH\s*=?\s*14\.4/.test(text))
    throw Error('Known textbook pH/pOH mislabeling changed, require human re-evaluation');
  }
  const values=independentlyCalculate(c.tag);verifyScientificCase(c,values);
  review.push({source_id:item.id,source_path:c.path,source_exercise_ordinal:c.ordinal,
   question_sha256:item.question_sha256,source_url:item.source_url,
   source_answer_present:item.has_source_solution,source_answer_independently_agreed:
    c.keyDiscrepancy?false:null,
   issue:c.keyDiscrepancy||null,independent_method:c.note,
   independently_calculated_results:values,
   machine_computation_checked:true,
   independent_human_chemist_review_completed:false,
   question_translation_human_review_completed:false,
   source_item_rights_verified:false,
   semantic_duplicate_review_completed:false,
   material_requires_manual_rights_check:true,
   release_eligible:false});
 }
 return {schema_version:1,source_repository:manifest.repository,source_commit:manifest.commit,
  reviewed_source_cases:review.length,independent_numerical_method_checks:review.length,
  source_answer_discrepancies:review.filter(x=>x.issue).length,
  original_questions_without_answer_independently_solved:review.filter(x=>!x.source_answer_present).length,
  scholarly_human_confirmations:0,rights_confirmations:0,publishable:0,
  note:'These are pinned source-linked independently recomputed numerics, not licensed-to-publish or expert-approved full solutions. No change to source archive or released chemistry bank. pH/pOH label error in old OpenStax source is explicitly flagged.',
  items:review};
}
export function run(){
 const raw=readFileSync(join(ROOT_OER,'questions.jsonl'),'utf8').split(/\r?\n/).filter(Boolean)
  .map(x=>JSON.parse(x));
 const manifest=JSON.parse(readFileSync(join(ROOT,'harvest/pinned_openstax_chemistry.json'),'utf8'));
 const reviewed=curateScientificReviews(raw,manifest),
  path=join(ROOT_OER,'independent_numeric_review.json');
 const out=JSON.stringify(reviewed,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==out)writeFileSync(path,out);
 console.log('OpenStax scientific source reviews='+reviewed.reviewed_source_cases+
  ' source-key discrepancy='+reviewed.source_answer_discrepancies+
  ' expert approvals=0');
 return reviewed;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
