#!/usr/bin/env node
// 96 ORIGINAL analytical chemistry parameter variants inspired by MIT-licensed
// calculator METHODS. No upstream exam text, graphics or lab data copied.
// Each answer is cross-checked using a separately authored stoichiometry function.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {calculateIndependent} from './import-analytical-calculator-mit.mjs';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const PIN='879205657e777c00621a461e975218b395ee32ea';
const TOOLKIT='PWO-CHINA/Chemistry-Calculator-Toolkit';
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
const REF=new URL('../harvest/pinned_analytical_calculator_mit.json',import.meta.url);
const KEYS=['hcl_standardization','edta_standardization','iodometry_kio3','permanganate_oxalate',
 'mixed_alkali','copper_iodometry','calcium_oxalate','pb_bi_edta'];
const fmt=(n,d)=>Number(n).toFixed(d);
export const questionId=s=>createHash('sha256').update(String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const p4=n=>fmt(n,4);
const pct=n=>fmt(n,2)+'%';
function parameters(kind,i){
 const t=i+1;
 switch(kind){
 case 'hcl_standardization':return {mass_g:0.126+0.004*t,molar_mass:105.99,hcl_volume_ml:21+t*0.8};
 case 'edta_standardization':return {zinc_molarity:0.027+0.001*t,zinc_volume_ml:19+t*0.5,edta_volume_ml:16+t*0.7};
 case 'iodometry_kio3':return {kio3_molarity:0.008+0.0003*t,kio3_volume_ml:20+t,thiosulfate_volume_ml:13+t*0.8};
 case 'permanganate_oxalate':return {sodium_oxalate_mass_g:0.116+0.005*t,sodium_oxalate_molar_mass:134,permanganate_volume_ml:17+t*0.85};
 case 'mixed_alkali':return {hcl_molarity:0.08+t*0.003,sample_ml:25,phenolphthalein_ml:7+t*0.5,additional_methyl_orange_ml:10+t*0.85};
 case 'copper_iodometry':return {thiosulfate_molarity:0.075+t*0.003,thiosulfate_volume_ml:9+t*0.5,sample_mass_g:0.52+t*0.03,copper_molar_mass:63.546};
 case 'calcium_oxalate':return {permanganate_molarity:0.015+t*0.0005,sample_titrant_ml:7+t*0.55,blank_titrant_ml:0.1+t*0.01,total_ml:250,aliquot_ml:25,sample_mass_g:0.65+t*0.055,calcium_molar_mass:40.078};
 case 'pb_bi_edta':return {edta_molarity:0.014+t*0.0007,aliquot_ml:20,bi_edta_ml:6+t*0.35,pb_additional_ml:10+t*0.55};
 default:throw Error('Unreviewed analytical method '+kind);
 }
}
// Secondary, independently expressed calculations (different stoichiometric decomposition).
export function verifyByMoles(kind,p,values){
 const mol=x=>x/1000;
 let result;
 switch(kind){
 case 'hcl_standardization':result=[(p.mass_g/p.molar_mass*2)/mol(p.hcl_volume_ml)];break;
 case 'edta_standardization':result=[(p.zinc_volume_ml*mol(p.zinc_molarity*1000))/p.edta_volume_ml];break;
 case 'iodometry_kio3':result=[6*p.kio3_molarity*mol(p.kio3_volume_ml)/mol(p.thiosulfate_volume_ml)];break;
 case 'permanganate_oxalate':result=[(p.sodium_oxalate_mass_g/p.sodium_oxalate_molar_mass/5*2)/mol(p.permanganate_volume_ml)];break;
 case 'mixed_alkali':{
  const m1=p.hcl_molarity*mol(p.phenolphthalein_ml);
  const m2=p.hcl_molarity*mol(p.additional_methyl_orange_ml)-m1;
  result=[m1/mol(p.sample_ml),m2/mol(p.sample_ml)];break;
 }
 case 'copper_iodometry':{
  const amount=p.thiosulfate_molarity*mol(p.thiosulfate_volume_ml);
  result=[100*amount*p.copper_molar_mass/p.sample_mass_g];break;
 }
 case 'calcium_oxalate':{
  const permanganateMol=p.permanganate_molarity*mol(p.sample_titrant_ml-p.blank_titrant_ml);
  const calciumMol=permanganateMol*(5/2)*(p.total_ml/p.aliquot_ml);
  result=[100*calciumMol*p.calcium_molar_mass/p.sample_mass_g];break;
 }
 case 'pb_bi_edta':
  result=[p.edta_molarity*mol(p.bi_edta_ml)/mol(p.aliquot_ml),
   p.edta_molarity*mol(p.pb_additional_ml)/mol(p.aliquot_ml)];break;
 default:throw Error('Unreviewed analytical verification '+kind);
 }
 if(result.length!==values.length||result.some((x,j)=>!Number.isFinite(x)||
  Math.abs(x-values[j])>1e-10*Math.max(1,Math.abs(x))))throw Error('Independent molar balance mismatch for '+kind);
 if(result.some(x=>x<=0))throw Error('Chemically impossible zero/negative assay');
 if(['copper_iodometry','calcium_oxalate'].includes(kind)&&result[0]>=100)
  throw Error('Unphysical mass fraction');
 return true;
}
function author(kind,p,val){
 const c=x=>fmt(x,5);
 const m=x=>fmt(x,4);
 let question,answer,explanation,topic;
 switch(kind){
 case 'hcl_standardization':
  topic='primary_standard_acid_standardization';
  question='分析化学·盐酸标定：以无水碳酸钠为基准物，称取 '+p4(p.mass_g)+' g（M = 105.99 g/mol），滴定完全消耗 HCl '+fmt(p.hcl_volume_ml,2)+' mL。反应 Na₂CO₃ + 2H⁺ → 2Na⁺ + H₂O + CO₂。求 HCl 的物质的量浓度（mol/L）。';
  explanation='先求 n(Na₂CO₃)=m/M，再按 1:2 换算 n(HCl)，最后除以滴定剂体积（L）。';
  answer='c(HCl) = 2×('+p4(p.mass_g)+'/105.99)/('+fmt(p.hcl_volume_ml,2)+'/1000) = '+c(val[0])+' mol/L。';break;
 case 'edta_standardization':
  topic='edta_zinc_complexometric_standardization';
  question='分析化学·EDTA 配位滴定：取 Zn²⁺ 标准溶液 '+fmt(p.zinc_volume_ml,2)+' mL，浓度 '+c(p.zinc_molarity)+' mol/L；以 EDTA 滴定消耗 '+fmt(p.edta_volume_ml,2)+' mL。已知形成 1:1 配合物，且终点无干扰，求 EDTA 浓度。';
  explanation='Zn²⁺ 与 EDTA 计量比 1:1，按 c(Zn)V(Zn) = c(EDTA)V(EDTA)；两体积单位一致即可相除。';
  answer='c(EDTA) = '+c(p.zinc_molarity)+'×'+fmt(p.zinc_volume_ml,2)+'/'+fmt(p.edta_volume_ml,2)+' = '+c(val[0])+' mol/L。';break;
 case 'iodometry_kio3':
  topic='iodometric_kio3_standardization';
  question='分析化学·碘量法：取 '+fmt(p.kio3_volume_ml,2)+' mL、浓度 '+c(p.kio3_molarity)+' mol/L 的 KIO₃ 基准溶液，在足量酸和 KI 存在下析出 I₂，用 Na₂S₂O₃ 滴定消耗 '+fmt(p.thiosulfate_volume_ml,2)+' mL。按 IO₃⁻:S₂O₃²⁻ = 1:6 求硫代硫酸钠浓度。';
  explanation='先求 n(IO₃⁻)，每摩尔碘酸根对应 6 摩尔硫代硫酸根，除以滴定体积（L）。';
  answer='c(Na₂S₂O₃) = 6×'+c(p.kio3_molarity)+'×'+fmt(p.kio3_volume_ml,2)+'/'+fmt(p.thiosulfate_volume_ml,2)+' = '+c(val[0])+' mol/L。';break;
 case 'permanganate_oxalate':
  topic='permanganate_oxalate_standardization';
  question='分析化学·氧化还原标定：用 Na₂C₂O₄ 基准物 '+p4(p.sodium_oxalate_mass_g)+' g（M = 134.00 g/mol）在足量酸性条件下与 KMnO₄ 反应，消耗 '+fmt(p.permanganate_volume_ml,2)+' mL。已知 MnO₄⁻:C₂O₄²⁻ = 2:5，求 KMnO₄ 浓度。';
  explanation='先把基准物质量换算为草酸根的量，再乘 2/5 得 MnO₄⁻ 的量，除以滴定体积（L）。';
  answer='c(KMnO₄) = (2/5)×('+p4(p.sodium_oxalate_mass_g)+'/134.00)/('+fmt(p.permanganate_volume_ml,2)+'/1000) = '+c(val[0])+' mol/L。';break;
 case 'mixed_alkali':
  topic='double_indicator_carbonate_bicarbonate';
  question='分析化学·双指示剂法：取 25.00 mL 仅含 Na₂CO₃、NaHCO₃ 的溶液，用 '+c(p.hcl_molarity)+' mol/L HCl 滴定。到酚酞终点耗 '+fmt(p.phenolphthalein_ml,2)+' mL，此后到甲基橙终点**追加** '+fmt(p.additional_methyl_orange_ml,2)+' mL。按理想计量反应计算两种盐的浓度。';
  explanation='第一终点耗酸为 n(CO₃²⁻)，甲基橙阶段的追加耗酸为 n(CO₃²⁻)+n(原有 HCO₃⁻)，故后者由追加耗酸量减去第一阶段耗酸量求得。';
  answer='c(Na₂CO₃) = '+c(val[0])+' mol/L；c(NaHCO₃) = '+c(val[1])+' mol/L。';break;
 case 'copper_iodometry':
  topic='copper_iodometric_mass_fraction';
  question='分析化学·间接碘量测铜：铜试样质量 '+p4(p.sample_mass_g)+' g，酸性条件将全部铜转为 Cu²⁺ 后与足量 I⁻ 放碘，以 '+c(p.thiosulfate_molarity)+' mol/L Na₂S₂O₃ 滴定耗 '+fmt(p.thiosulfate_volume_ml,2)+' mL。已知 n(Cu)=n(S₂O₃²⁻)，M(Cu)=63.546 g/mol，求 Cu 的质量分数（%）。';
  explanation='Na₂S₂O₃ 的物质的量等于试样中 Cu 的物质的量；用 63.546 g/mol 求 Cu 元素质量，除以试样总质量×100%。';
  answer='w(Cu) = '+pct(val[0])+'。';break;
 case 'calcium_oxalate':
  topic='calcium_oxalate_indirect_assay';
  question='分析化学·钙的间接滴定：样品 '+p4(p.sample_mass_g)+' g 处理为草酸盐后定容至 250.0 mL，取 25.00 mL 用 '+c(p.permanganate_molarity)+' mol/L KMnO₄ 滴定，样品耗 '+fmt(p.sample_titrant_ml,2)+' mL，空白耗 '+fmt(p.blank_titrant_ml,2)+' mL。按 n(Ca)=2.5 n(MnO₄⁻)，M(Ca)=40.078 g/mol，求样品中钙的质量分数。';
  explanation='扣除空白后以 5/2 换算草酸钙的量，再考虑 250/25 的分取倍数，用元素 Ca 的摩尔质量计算质量百分数。';
  answer='w(Ca) = '+pct(val[0])+'。';break;
 case 'pb_bi_edta':
  topic='stepwise_pb_bi_complexometry';
  question='分析化学·分步 EDTA 配位滴定：取 20.00 mL 同时含 Bi³⁺、Pb²⁺ 的试液。用 '+c(p.edta_molarity)+' mol/L EDTA 在经过验证的选择性条件下先测 Bi³⁺，消耗 '+fmt(p.bi_edta_ml,2)+' mL；再测 Pb²⁺，**追加**消耗 '+fmt(p.pb_additional_ml,2)+' mL。均为 1:1 配位，求原试液中两离子浓度。';
  explanation='Bi³⁺、Pb²⁺ 分别用两个阶段单独耗液量求得；第二阶段不是累计体积。';
  answer='c(Bi³⁺) = '+c(val[0])+' mol/L；c(Pb²⁺) = '+c(val[1])+' mol/L。';break;
 default:throw Error('Unapproved question family');
 }
 return {question,answer,explanation,topic};
}
export function generate(){
 const fixture=JSON.parse(readFileSync(REF,'utf8'));
 if(fixture?.schema_version!==1||fixture.source!==TOOLKIT||fixture.commit!==PIN||
  fixture.license!=='MIT'||fixture.source_original_question_count_imported!==0||
  fixture.files?.LICENSE!=='49c2c01eba000fe4138e79b45083eee284f9f3bb'||
  fixture.files?.['src/calculations.js']!=='20378fe9af77e64932b9f412a6c51be9b0c433b5')
  throw Error('Previously verified external reference or license changed; stop');
 const rows=[],seen=new Set();
 for(const kind of KEYS)for(let i=0;i<12;i++){
  const p=parameters(kind,i),a=calculateIndependent(kind,p);
  verifyByMoles(kind,p,a);
  const content=author(kind,p,a);
  const id=questionId(content.question);
  if(seen.has(id))throw Error('Duplicate analytical parametric question: '+kind+':'+i);
  seen.add(id);
  rows.push({schema_version:1,id,subject:'analytical',topic:content.topic,
   level:'undergraduate',difficulty:'introductory_to_intermediate',
   question_type:'original_parametric_analytical_calculation',
   resource_type:'original_problem_variant_not_upstream_question',
   question:content.question,answer:content.answer,explanation:content.explanation,
   numeric_answers:a,parameters:p,
   quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,original_chemistry_experiment:false,
   source:{repository:OWN,file:'scripts/import-original-analytical-variants.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    origin:'original_deterministic_generation',content_rights_verified:true,
    original_exam_question:false,third_party_question_text_copied:false,
    method_reference:{repository:TOOLKIT,commit:PIN,license:'MIT',file:'src/calculations.js',
     blob_sha:fixture.files['src/calculations.js'],license_blob_sha:fixture.files.LICENSE,
     attribution:fixture.attribution},
    changes:'Independently written Chinese numerical practice variants, no questions, solutions, graphics or datasets copied from toolkit.'}});
 }
 if(rows.length!==96)throw Error('Expected exactly 96 original analytical exercises');
 return rows;
}
export function run(){
 const rows=generate(),dest=join(ROOT,'data/candidates');
 for(const x of rows){
  const file=join(dest,x.id+'.json');if(!existsSync(file))continue;
  const old=JSON.parse(readFileSync(file,'utf8'));
  if(old.question!==x.question||old.answer!==x.answer||old.publishable!==false||
   old.quality_status!=='awaiting_expert_review')
   throw Error('Existing question ID conflict '+x.id);
 }
 mkdirSync(dest,{recursive:true});let added=0,exists=0;
 for(const x of rows){
  const file=join(dest,x.id+'.json');
  if(existsSync(file)){exists++;continue;}
  writeFileSync(file,JSON.stringify(x,null,2)+'\n');added++;
 }
 const reportPath=join(ROOT,'harvest/import_reports/original_analytical_variants.json');
 const report={schema_version:1,original_questions_generated:96,
  originally_authored:96,upstream_questions_copied:0,
  by_subject:{analytical:96},method_count:8,variants_per_method:12,
  reference_source:TOOLKIT,reference_pin:PIN,reference_license:'MIT',
  original_content_license:'CC0-1.0',independent_stoichiometry_check:true,
  first_run_added:added,already_present:exists,
  quality_status:'awaiting_expert_review',publishable:false,expert_approved:0,
  note:'96 original analytical chemistry practice variants, not 96 imported exam questions; 8 formula families with 12 changed parameter sets each. Requires expert review and semantic/template dedup prior to any public exam use.'};
 mkdirSync(dirname(reportPath),{recursive:true});
 if(!existsSync(reportPath))writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
 else{
  const old=JSON.parse(readFileSync(reportPath,'utf8'));
  if(old.original_questions_generated!==96||old.reference_pin!==PIN)throw Error('Prior report/source version conflicts');
 }
 const line='Original analytical variants: generated=96; newly_added='+added+
  '; previously_present='+exists+'; official_expert_approved=0';
 console.log(line);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,line+'\n');
 return {added,exists};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
