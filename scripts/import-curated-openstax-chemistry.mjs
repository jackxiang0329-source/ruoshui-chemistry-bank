#!/usr/bin/env node
// Convert ONLY the fixed eight independently recomputed OpenStax OER exercises
// into richly explained Chinese REVIEW CANDIDATES. No publication authorization.
import {readFileSync,existsSync,writeFileSync,readdirSync,mkdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {CASES,independentlyCalculate,verifyScientificCase}
 from './review-openstax-chemistry-numerics.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const norm=s=>String(s||'').normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const candidateId=s=>createHash('sha256').update(norm(s)).digest('hex');
const fixed=n=>Number(n).toPrecision(5);
const TEMPLATES={
 carbon_atom_formula_mass:{
 subject:'inorganic',topic:'atomic_mass_counting_from_molecular_formula',
 question:'无机化学·式量：取碳相对原子质量 12.01，分别求 CH₄、CHCl₃、C₁₂H₁₀O₆ 和直链戊烷 CH₃(CH₂)₃CH₃ 中碳原子的总相对质量（u）。请写出碳原子个数。',
 solution:'四种分子依次含 1、1、12、5 个碳原子。分别乘以 12.01 u 得到 12.01、12.01、144.12、60.05 u。这里仅求碳元素的贡献，不是整分子的分子量。',
 labels:['CH₄','CHCl₃','C₁₂H₁₀O₆','戊烷'],unit:'u'},
 molecular_formula_mass:{
 subject:'inorganic',topic:'molecular_formula_mass_calculation',
 question:'无机化学·摩尔质量基础：计算 P₄、H₂O、Ca(NO₃)₂、乙酸 CH₃CO₂H 和蔗糖 C₁₂H₂₂O₁₁ 的相对式量（u）。可用 P=30.974、H=1.008、O=15.999、Ca=40.078、N=14.007、C=12.011。',
 solution:'利用组成原子的相对原子质量求和。P₄：4×30.974；H₂O：2×1.008+15.999；Ca(NO₃)₂：40.078+2(14.007+3×15.999)；CH₃CO₂H：2×12.011+4×1.008+2×15.999；蔗糖：12×12.011+22×1.008+11×15.999。',
 labels:['P₄','H₂O','Ca(NO₃)₂','乙酸','蔗糖'],unit:'u'},
 solution_molarity_six_parts:{
 subject:'analytical',topic:'molarity_from_mass_moles_and_hydrates',
 question:'分析化学·溶液物质的量浓度：分别求下列溶液的 c（mol/L）：(a) 0.444 mol CoCl₂ 定容至 0.654 L；(b) 98.0 g H₃PO₄ 定容至 1.00 L；(c) 0.2074 g Ca(OH)₂ 定容至 40.00 mL；(d) 10.5 kg Na₂SO₄·10H₂O 定容至 18.60 L；(e) 7.0×10⁻³ mol I₂ 定容至 100.0 mL；(f) 1.8×10⁴ mg HCl 定容至 0.075 L。取标准原子量近似值。',
 solution:'统一用 c=n/V。对于质量题先用 n=m/M，再以升作体积单位，尤其注意 40.00 mL=0.04000 L、10.5 kg=10500 g、1.8×10⁴ mg=18 g。十水合硫酸钠必须将结晶水的质量全部计入式量。参考计算使用 M(H₃PO₄)≈97.994、M[Ca(OH)₂]≈74.092、M(Na₂SO₄·10H₂O)≈322.195、M(HCl)≈36.46 g/mol。',
 labels:['(a) CoCl₂','(b) H₃PO₄','(c) Ca(OH)₂','(d) Na₂SO₄·10H₂O','(e) I₂','(f) HCl'],unit:'mol/L'},
 glucose_solution_mass:{
 subject:'analytical',topic:'concentration_to_solute_mass',
 question:'分析化学·配液计算：用葡萄糖 C₆H₁₂O₆ 配制 0.500 L、0.30 mol/L 的葡萄糖溶液，需称取葡萄糖多少克？取 M(C₆H₁₂O₆)=180.156 g/mol。',
 solution:'先求物质的量 n=cV=(0.30 mol/L)(0.500 L)=0.150 mol。再用 m=nM=0.150×180.156=27.0234 g，依有效数字结果约为 27 g。',
 labels:['葡萄糖'],unit:'g'},
 coffee_silver_spoon_heat:{
 subject:'physical',topic:'coffee_metal_equilibrium_calorimetry',
 question:'物理化学·量热平衡：180 g、95 ℃ 的咖啡放入 45 g、25 ℃ 的银勺。已知咖啡比热近似水 4.184 J/(g·K)，银比热 0.24 J/(g·K)，忽略杯体及环境热交换。求咖啡最终降温多少开尔文。',
 solution:'设咖啡降温 ΔT，则平衡温度为 95−ΔT。热量守恒：180×4.184×ΔT=45×0.24×[(95−ΔT)−25]。解得 ΔT=(45×0.24×70)/(180×4.184+45×0.24)，约 0.990 K，约降 1 ℃。',
 labels:['咖啡温降'],unit:'K'},
 coffee_mixing_no_source_solution:{
 subject:'physical',topic:'hot_cold_water_mixing_calorimetry',
 question:'物理化学·混合量热：将 180 mL、95 ℃ 的咖啡与 23 ℃ 的水混合，要求最终达到 60 ℃。假设咖啡与水密度均为 1.00 g/mL、比热相同，忽略热量散失。需要加入多少毫升冷水？',
 solution:'高温咖啡释放的热量与冷水吸收的热量相等：180 c (95−60)=V冷 c (60−23)，因为密度相同可约去 c 及密度。V冷=180×35/37≈170.27 mL。教材原练习未附答案，此结果为独立求解，仍需人工确认原题边界条件。',
 labels:['冷水体积'],unit:'mL'},
 pure_water_kw_60c:{
 subject:'analytical',topic:'pure_water_ph_at_nonstandard_temperature',
 question:'分析化学·温度变化下的纯水 pH：在 60 ℃ 时水的离子积 K_w=9.311×10⁻¹⁴（按浓度近似）。求纯水的 [H₃O⁺]、pH 和 pOH，并解释为何此时中性溶液 pH 并非 7。',
 solution:'纯水电中性要求 [H₃O⁺]=[OH⁻]=√K_w=3.0514×10⁻⁷ mol/L。故 pH=−log₁₀(3.0514×10⁻⁷)=6.5155，pOH 同为 6.5155。中性意味着两种离子浓度相等，而非任何温度下 pH 均为 7。',
 labels:['[H₃O⁺]','pH','pOH'],units:['mol/L','无量纲','无量纲']},
 strong_electrolyte_ph_poh_answer_swap:{
 subject:'analytical',topic:'strong_acid_base_ph_poh_with_key_errata',
 question:'分析化学·强酸强碱与教材纠错：25 ℃ 时假设强电解质完全电离，按理想浓度近似计算 (a) 0.000259 mol/L HClO₄、(b) 0.21 mol/L NaOH、(c) 0.000071 mol/L Ba(OH)₂、(d) 2.5 mol/L KOH 的 pH 和 pOH，并核对 pH+pOH=14。',
 solution:'取 pK_w=14。强酸 (a) [H₃O⁺]=0.000259；其余强碱的 [OH⁻] 分别为 0.21、2×0.000071、2.5 mol/L。先计算对应离子浓度的负常用对数，再用 pH+pOH=14。教材原答案对 (b)、(d) 的 pH 与 pOH 标签颠倒；正确的 (b) pH≈13.32、pOH≈0.68；(d) pH≈14.40、pOH≈−0.40。注意 2.5 mol/L 浓碱并非理想溶液，严格活度 pH 与此近似有差别。',
 labels:['(a) pH','(a) pOH','(b) pH','(b) pOH','(c) pH','(c) pOH','(d) pH','(d) pOH'],unit:'无量纲'}
};
export function makeCandidates(reviews){
 if(!reviews||!Array.isArray(reviews.items)||reviews.reviewed_source_cases!==8||
  reviews.publishable!==0||reviews.scholarly_human_confirmations!==0||
  reviews.rights_confirmations!==0)throw Error('Unsafe curated source review');
 const byTag=new Map(CASES.map(x=>[x.path+':'+x.ordinal,x]));
 const output=[],ids=new Set();
 for(const item of reviews.items){
  const c=byTag.get(item.source_path+':'+item.source_exercise_ordinal),
   template=c&&TEMPLATES[c.tag];
  if(!template||item.release_eligible!==false||
     item.source_item_rights_verified!==false||
     item.independent_human_chemist_review_completed!==false||
     item.machine_computation_checked!==true||
     item.material_requires_manual_rights_check!==true||
     item.issue!==(c.keyDiscrepancy||null))
   throw Error('Missing verified source identity or release quarantine');
  const expected=independentlyCalculate(c.tag);
  verifyScientificCase(c,expected);
  if(expected.length!==item.independently_calculated_results.length||
     expected.some((v,i)=>Math.abs(v-item.independently_calculated_results[i])>1e-10*Math.max(1e-9,Math.abs(v))))
   throw Error('Scientific source numbers changed since independent check');
  const list=expected.map((n,i)=>{
   const units=template.units?.[i]||template.unit;
   return template.labels[i]+': '+fixed(n)+(units==='无量纲'?'':' '+units);
  });
  const answer=template.solution+'\n数值答案：'+list.join('；')+'。'+
   (item.issue?'\n教材更正：'+c.note:'');
  const id=candidateId(template.question);
  if(ids.has(id))throw Error('Duplicate Chinese curated review candidate');
  ids.add(id);
  output.push({schema_version:1,id,subject:template.subject,topic:template.topic,
   question_type:'openstax_real_course_source_exercise_independent_science_review',
   resource_type:'fixed_source_chinese_curated_quantitative_exercise',
   level:'undergraduate_general_chemistry',question:template.question,
   answer,explanation:template.solution,
   numeric_answers:expected,
   quality_status:'awaiting_expert_review',publishable:false,
   scientifically_machine_checked:true,
   scientifically_expert_approved:false,
   semantic_duplicate_review_pending:true,
   source_key_issue:item.issue||'source_numeric_key_awaits_independent_human_confirmation',
   original_english_question_in_external_staging:true,
   source:{repository:'philschatz/chemistry-book',
    commit:reviews.source_commit,file:item.source_path,
    source_exercise_ordinal:item.source_exercise_ordinal,
    original_id:item.source_id,original_question_sha256:item.question_sha256,
    license:'CC-BY-3.0',
    license_evidence:{
      source_license:'https://github.com/philschatz/chemistry-book/blob/'+reviews.source_commit+'/LICENSE.txt',
      scope_note:'The 2014 work has a CC BY 3.0 license notice; diagrams, third-party material and the item author chain have not been separately verified.'},
    url:item.source_url,content_rights_verified:false,
    item_level_rights_review_pending:true,
    attribution:'OpenStax College, Chemistry (2014), CC BY 3.0; Chinese adapted question and independently calculated solution. Human source attribution, rights and chemistry verification still required.',
    original_exam_question:false,source_exercise:true,
    changes:'Source-linked Chinese reformulation and independently recomputed numbers; original textbook answer discrepancies flagged. Not approved for publication.'}});
 }
 if(output.length!==8||output.some(q=>q.publishable!==false||
   q.source.content_rights_verified!==false||q.source.item_level_rights_review_pending!==true))
  throw Error('Eight source exercises must remain unpublished');
 return output;
}
export function run(){
 const path=join(ROOT,'external_sources/openstax_chemistry/independent_numeric_review.json');
 const rows=makeCandidates(JSON.parse(readFileSync(path,'utf8')));
 // An earlier OpenStax Chemistry 2e reuse-license conflict caused a real retraction.
 // Do NOT reinstall source-derived materials into data/candidates pending explicit
 // edition-level, item-level and usage-scope rights confirmation.
 const dir=join(ROOT,'external_sources/openstax_chemistry');
 const reviewed={schema_version:1,source_work:'OpenStax Chemistry historical mirror',
  edition_and_item_rights_status:'blocked_pending_canonical_license_review',
  source_license_claim:'CC-BY-3.0 (historical GitHub mirror)',
  first_party_current_reuse_guidance:'https://openstax.org/books/chemistry-2e/pages/preface',
  2015_original_chemistry_claim:'https://openstax.org/books/chemistry/pages/preface',
  previous_retraction:'harvest/run_logs/2026-10-27-openstax-quality-audit.md',
  chinese_independently_recomputed_review_items:rows.length,
  imported_into_main_candidate_bank:0,publishable:0,expert_approved:0,
  item_rights_approved:0,
  note:'The historical source mirror and current first-party reuse guidance describe different editions and license scopes. Independent calculations and Chinese drafts remain quarantine-only until a human verifies rights and the licensing for the actual 2014 text and question content.',
  items:rows};
 const quarantinedPath=join(dir,'chinese_science_review.json');
 const body=JSON.stringify(reviewed,null,2)+'\n';
 if(!existsSync(quarantinedPath)||readFileSync(quarantinedPath,'utf8')!==body)
  writeFileSync(quarantinedPath,body);
 const report={schema_version:1,source:'OpenStax Chemistry historical edition',
  distinct_curated_real_exercises:rows.length,
  chinese_drafts_quarantined:rows.length,main_candidates_added:0,
  source_answer_errata:rows.filter(q=>q.source_key_issue==='textbook_swaps_pH_and_pOH_for_b_and_d').length,
  original_questions_with_missing_source_answer_solved_independently:1,
  computational_checks_passed:rows.length,expert_approved:0,
  item_rights_approved:0,publishable:0,
  rights_status:'blocked_pending_canonical_edition_specific_reuse_confirmation',
  note:'Historical original Chemistry and current Chemistry 2e license terms must not be conflated. All eight corrected Chinese source-derived drafts remain EXTERNAL QUARANTINE ONLY, never automatically written to main candidate data.'};
 const loc=join(ROOT,'harvest/import_reports/openstax_curated_science.json'),data=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(loc)||readFileSync(loc,'utf8')!==data)writeFileSync(loc,data);
 console.log('OpenStax Chinese scientific reviews: quarantined='+rows.length+
  ' main_import=0 license_pending=true approved=0');
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
