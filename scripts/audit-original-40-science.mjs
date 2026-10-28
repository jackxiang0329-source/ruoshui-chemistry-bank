#!/usr/bin/env node
// Secondary independent formula and scientific-assumption review for 40 CC0 original cases.
// This NEVER upgrades expert, copyright, or semantic-deduplication approval.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {generate as apGenerate} from './import-original-analytical-physical-topics.mjs';
import {generate as integratedGenerate} from './import-original-integrated-chemistry.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
export const AP={"internal_standard_response_factor":{unit:"mol/L",token:"内标",calc:()=>(600/400)*0.05/1.2,note:"内标响应系数定义、共洗脱排除与浓度比单位"},
"stern_volmer_quenching_constant":{unit:"L/mol",token:"Stern",calc:()=>(1000/800-1)/.005,note:"单点 Stern–Volmer 斜率不能区分静态与动态猝灭"},
"electrogravimetric_copper_assay":{unit:"mol/L",token:"Cu²⁺",calc:()=>.1271/(63.546*.1000),note:"电极质量增加应仅来自定量沉积的金属铜"},
"sulfate_baso4_gravimetry":{unit:"%",token:"BaSO₄",calc:()=>100*.2334*96.06/(233.39*.2000),note:"BaSO₄ 纯度、恒重、共沉淀及洗涤损失"},
"two_step_partition_extraction_efficiency":{unit:"%",token:"两份",calc:()=>100*(100/(100+4*25))**2,note:"两次使用新鲜等体积有机相且分层完全"},
"carbonate_bicarbonate_distribution_pH":{unit:"%",token:"pKa₂",calc:()=>100*.1/(1+.1),note:"只按 HCO₃⁻ 和 CO₃²⁻ 两形态归一化"},
"edta_conditional_complex_fraction":{unit:"%",token:"Kf",calc:()=>100*(.01*1e10*1e-6)/(1+.01*1e10*1e-6),note:"条件稳定常数使用游离总 EDTA，且金属无水解"},
"faradaic_iron_coulometric_assay":{unit:"mol/L",token:"库仑",calc:()=>(.5*600)/(96485.33212*.1000),note:"一电子氧化、100% 电流效率及体积单位"},
"chromatography_baseline_resolution":{unit:"无量纲",token:"峰宽",calc:()=>2*(7.4-6.1)/(.8+.8),note:"使用基线峰宽定义而非半峰宽"},
"standard_addition_constant_final_volume":{unit:"mg/L",token:"标准加入",calc:()=>.24/((.4-.24)/2),note:"结果是最终测量体系的等效浓度，不是必然的原样浓度"},
"integrated_clausius_clapeyron":{unit:"kPa",token:"ΔHvap",calc:()=>20*Math.exp(-40000/8.31446261815324*(1/330-1/300)),note:"汽化焓恒定、理想蒸气和忽略液相体积"},
"vant_hoff_temperature_equilibrium_shift":{unit:"无量纲",token:"van't Hoff",calc:()=>10*Math.exp(-20000/8.31446261815324*(1/330-1/300)),note:"跨温度 K 需保持标准态一致，反应焓近似恒定"},
"debye_huckel_limit_divalent_activity":{unit:"无量纲",token:"Debye",calc:()=>10**(-.509*4*Math.sqrt(.001)),note:"极限定律适用于极稀溶液且活度系数无量纲"},
"consecutive_first_order_intermediate":{unit:"无量纲",token:"连续",calc:()=>Math.exp(-1)-Math.exp(-2),note:"A→B→C 依一级动力学且两速率常数不相等"},
"integrated_second_order_consumption":{unit:"mol/L",token:"−d[A]/dt",calc:()=>1/(1/.5+.2*10),note:"题设明确为 −dc/dt=kc²，速率常数单位需核验"},
"sucrose_osmotic_pressure":{unit:"atm",token:"蔗糖",calc:()=>.1*.082057*298.15,note:"蔗糖不电离且稀溶液近似理想"},
"ideal_gas_isothermal_expansion_entropy":{unit:"J/K",token:"等温",calc:()=>8.31446261815324*Math.log(3),note:"可逆等温理想气体熵变及体积比的对数"},
"freezing_point_depression_effective_factor":{unit:"K",token:"凝固点",calc:()=>1.86*.1*1.9,note:"有效 van't Hoff 因子是题设值，不可机械视为 2"},
"maxwell_entropy_volume_ideal_gas":{unit:"J/(K·m³)",token:"Maxwell",calc:()=>2*8.31446261815324/.05,note:"偏导保持温度不变，体积必须为 SI m³"},
"single_photon_planck_energy":{unit:"J",token:"光子",calc:()=>6.62607015e-34*299792458/(500e-9),note:"真空波长 nm→m，单光子能量不是每摩尔能量"}};
export const INTEGRATED={"spin_only_magnetic_moment_d5":{token:"Mn²⁺",calc:()=>Math.sqrt(35),note:"高自旋 d⁵ 的自旋-only 磁矩不包含轨道角动量",priority:'normal'},
"octahedral_d9_jahn_teller":{token:"Jahn–Teller",calc:null,note:"典型 Cu(II) 轴向拉长是常见而非绝对唯一结构",priority:'normal'},
"fcc_packing_efficiency":{token:"FCC",calc:()=>Math.PI/(3*Math.sqrt(2)),note:"等径硬球 FCC 堆积，需核验四个晶胞原子与面接触关系",priority:'normal'},
"magnetite_mixed_oxidation_state":{token:"Fe₃O₄",calc:()=>8/3,note:"氧化数平均值不等同于唯一的微观电子定位",priority:'normal'},
"agcl_common_ion_molar_solubility":{token:"AgCl",calc:()=>1.8e-10/.1,note:"0.1 M NaCl 物理上可能明显非理想；题目规定忽略活度、络合并以近似式求 s",priority:'high'},
"acetate_buffer_after_strong_acid":{token:"乙酸",calc:()=>4.75+Math.log10(.07/.06),note:"Henderson–Hasselbalch 近似忽略非理想活度及体积变化",priority:'normal'},
"analytical_detection_quantitation_limits":{token:"LOD",calc:()=>3*.006/.2,note:"检测限与定量限采用题设 3σ/m 与 10σ/m，需在文字答案中同时体现",priority:'normal'},
"two_point_external_calibration":{token:"标准",calc:()=>(.310-(-.010))/.8,note:"两点拟合需保留非零截距，不能据两点验证拟合精度",priority:'normal'},
"dichromate_fe2_titration_6_to_1":{token:"Cr₂O₇²⁻",calc:()=>6*.01*.012/.025,note:"酸性重铬酸根 6e⁻ 与 Fe²⁺ 1e⁻ 的计量",priority:'normal'},
"serial_dilution_reconstruction":{token:"定容",calc:()=>.05*(100/5)*(50/10),note:"连续定容倍数相乘，忽略移液回收损失",priority:'normal'},
"reductive_ozonolysis_methylbutene":{token:"臭氧",calc:null,note:"还原后处理裂解 2-甲基-2-丁烯为丙酮和乙醛",priority:'normal'},
"grignard_ethylmagnesium_acetone":{token:"MgBr",calc:null,note:"Grignard 反应必须先保持无水再酸性后处理",priority:'normal'},
"basic_epoxide_methoxide_opening":{token:"SN2",calc:null,note:"碱性开环时进攻空间阻力较小的环氧碳",priority:'normal'},
"benzoic_acid_meta_directing_nitration":{token:"硝化",calc:null,note:"—COOH 是失活间位定位基；不保证单一异构体",priority:'normal'},
"ethyl_acetate_1h_nmr_groups":{token:"NMR",calc:null,note:"乙酸乙酯三组 ¹H、3:2:3 积分、单四三重裂分",priority:'normal'},
"cu2_concentration_cell":{token:"Cu²⁺",calc:()=>.05916/2*Math.log10(100),note:"高浓度电池阴极和低浓度阳极；液接电位忽略",priority:'normal'},
"cell_gibbs_from_standard_emf":{token:"E°",calc:()=>-2*96485.33212*1.1/1000,note:"Gibbs 能用 −nFE° 换算且 kJ/J 单位一致",priority:'normal'},
"A_to_2B_equilibrium_extent":{token:"A(g)",calc:()=>(Math.sqrt(17)-1)/8,note:"题设需明确恒容和所用浓度型无量纲平衡常数，不能未说明就将理想气体标准压力 Kp 视为 Kc",priority:'high'},
"nitrogen_rms_speed_maxwell":{token:"N₂",calc:()=>Math.sqrt(3*8.314462618*300/.0280134),note:"摩尔质量使用 kg/mol，方均根速率与平均速率不同",priority:'normal'},
"two_level_boltzmann_degeneracy":{token:"g₀",calc:()=>2*Math.exp(-5000/(8.314462618*300)),note:"计算 N1/N0 而非激发态占比，包含二重简并度",priority:'normal'}};
const near=(x,y)=>Number.isFinite(x)&&Number.isFinite(y)&&
 Math.abs(x-y)/Math.max(Math.abs(y),1e-30)<=1e-6;
export function audit(storedAP,storedIntegrated){
 const originalAP=apGenerate(),originalIn=integratedGenerate();
 if(!Array.isArray(storedAP)||storedAP.length!==20||
    !Array.isArray(storedIntegrated)||storedIntegrated.length!==20)
  throw Error('Expected exactly 20 original advanced plus 20 integrated saved records');
 const observed=new Set(),out=[];
 const modes=[['analytical_physical',storedAP,originalAP,AP],['integrated_four_subject',storedIntegrated,originalIn,INTEGRATED]];
 let numeric=0,conceptual=0,high=0;
 for(const [family,rows,origin,rules] of modes){
  for(const q of rows){
   if(!q||observed.has(q.id))throw Error('Duplicate or malformed saved chemistry review input');
   observed.add(q.id);
   const expected=origin.find(x=>x.id===q.id),rule=rules[q.topic];
   if(!expected||!rule||JSON.stringify(q)!==JSON.stringify(expected))
    throw Error('Unverifiable source/answer/rights integrity: '+q?.topic);
   if(q.publishable!==false||q.quality_status!=='awaiting_expert_review'||
      q.source?.license!=='CC0-1.0'||q.source?.content_rights_verified!==true||
      q.source?.original_exam_question!==false||q.source?.third_party_question_text_copied!==false||
      q.semantic_duplicate_review_pending!==true)
    throw Error('Unapproved chemistry candidate attempted publication');
   if(!q.question.includes(rule.token)||!q.explanation||q.explanation.length<35)
    throw Error('Chemistry conditions or explanation missing: '+q.topic);
   if(family==='analytical_physical'&&q.units!==rule.unit)
    throw Error('Incorrect physical/analytical unit: '+q.topic);
   if(rule.calc===null){
    conceptual++;
    if(q.numeric_answers!==undefined)throw Error('Conceptual case incorrectly tagged quantitative');
   }else{
    const independentlyComputed=rule.calc();
    if(!Array.isArray(q.numeric_answers)||q.numeric_answers.length!==1||
       !near(q.numeric_answers[0],independentlyComputed))
      throw Error('Independent numeric science check failed: '+q.topic);
    numeric++;
   }
   if(rule.priority==='high')high++;
   out.push({id:q.id,topic:q.topic,subject:q.subject,source_family:family,
    quantitative:rule.calc!==null,independently_recomputed_value:rule.calc===null?null:rule.calc(),
    recorded_value:q.numeric_answers?.[0]??null,unit:family==='analytical_physical'?rule.unit:null,
    human_review_priority:rule.priority||'normal',
    manual_science_check:rule.note,
    mathematical_consistency_only:true,
    independent_human_science_reviewed:false,semantic_deduplication_completed:false,
    publishable:false});
  }
 }
 if(out.length!==40||numeric!==34||conceptual!==6||high!==2)
  throw Error('Incomplete 40-case independent chemistry review');
 return {schema_version:1,total:40,by_family:{analytical_physical:20,integrated_four_subject:20},
  numeric_independently_recomputed:34,conceptual_reasoning_requires_expert:6,
  explicit_high_priority_modeling_flags:2,
  full_saved_candidate_comparisons:40,question_premise_presence_checks:40,
  quality_status:'awaiting_expert_review',expert_approved:0,publishable:false,
  note:'Machine checks are arithmetic and condition-presence checks, not independent peer-reviewed chemical correctness, publication rights clearance or semantic deduplication.',
  records:out};
}
export function markdown(r){
 const lines=['# 40 道原创大学化学题：独立复算与人工审校队列','',
  '范围：20 道分析/物理专题计算题与 20 道四科综合题。自动复算 **34** 个数值答案；**6** 道纯概念题需要人工审定。',
  '全部候选 **未获专家批准，不可正式组卷发布**。自动验算不能替代化学事实核查或语义去重。','',
  '## 优先处理的两项科学条件',''];
 for(const q of r.records.filter(x=>x.human_review_priority==='high'))
  lines.push('- **'+q.topic+'**：'+q.manual_science_check+'。');
 lines.push('','## 逐题复核表','','| 来源 | 科目 | 专题 | 独立数值复算 | 待人工确认条件 |','|---|---|---|---|---|');
 for(const q of r.records){
  const v=q.quantitative?Number(q.independently_recomputed_value).toPrecision(6)+' '+(q.unit||''):'概念题：需人工复核';
  lines.push('| '+q.source_family+' | '+q.subject+' | '+q.topic+' | '+v+' | '+q.manual_science_check+' |');
 }
 lines.push('','- JSON 报告同时保留题目 ID、来源类别与正式审核门槛。','');
 return lines.join('\n');
}
export function run(){
 const load=rows=>rows.map(q=>JSON.parse(readFileSync(join(ROOT,'data/candidates',q.id+'.json'),'utf8')));
 const r=audit(load(apGenerate()),load(integratedGenerate()));
 const dir=join(ROOT,'harvest/review_notes');mkdirSync(dir,{recursive:true});
 writeFileSync(join(dir,'original_40_science_review.json'),JSON.stringify(r,null,2)+'\n');
 writeFileSync(join(dir,'original_40_science_review.md'),markdown(r));
 console.log('Science editorial audit: 40 records, 34 inverse rechecks, 2 high-priority modeling flags, 0 expert approvals');
 return r;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
