#!/usr/bin/env node
// Author-written Chinese derivation notes for 34 historical textbook numerics.
// The original questions and all output remain under rights-review quarantine.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {CASES,independentlyCalculate,verifyScientificCase} from './review-openstax-chemistry-numerics.mjs';
import {MORE,independentlySolve,checkAdditional} from './review-openstax-chemistry-numerics-more.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const DIR=join(ROOT,'external_sources/openstax_chemistry');
const DEFINITIONS={
 dilution_isopropanol_target_volume:['分析化学','异丙醇稀释后的总体积',['最终体积'],['L'],[
 '已知稀释只加溶剂，溶质的物质的量在操作前后不变；体积、浓度必须使用配套单位。',
 '写出 c₁V₁=c₂V₂，并将 0.3556 mol/L、0.1718 L 与 0.1222 mol/L 代入反求 V₂。',
 'V₂≈0.499935 L，有效数字约 0.5000 L；用 V₂c₂=V₁c₁ 做反向一致性检查。']],
 sucrose_stock_dilution_volume:['分析化学','蔗糖储备液取用体积',['原液体积'],['mL'],[
 '储备液浓度 0.33 mol/L 大于最终 0.025 mol/L，原液取样体积应小于总体积 25 mL。',
 '稀释不改变溶质物质的量，V₁=c₂V₂/c₁=(0.025×25)/0.33 mL。',
 '结果约 1.89394 mL，按两位有效数字约 1.9 mL；以原液溶质的量反查。']],
 lab_hcl_stock_molarity:['分析化学','HCl 储备液的摩尔浓度',['HCl 浓度'],['mol/L'],[
 '明确 868.8 g 是 HCl 溶质质量，2.00 L 是溶液定容体积，不可直接把 g/L 视为 mol/L。',
 '计算 M(HCl)=1.008+35.45=36.458 g/mol，由 c=m/(MV) 得 868.8/(36.458×2.00)。',
 'c≈11.9144 mol/L，按原始量精度约 11.9 mol/L；复算 cVM 应为 868.8 g。']],
 potassium_sulfate_solution_volume:['分析化学','硫酸钾溶液的总体积',['体积'],['L'],[
 '化学式 K₂SO₄ 含两 K、一 S、四 O，先求摩尔质量，防止漏乘下标。',
 'M=2×39.0983+32.06+4×15.999 g/mol；由 n=m/M、V=n/c 得 V=(57/M)/0.20。',
 '求得约 1.63556 L，按给定精度约 1.6 L；由 cVM 验算溶质质量。']],
 spray_can_heating_ideal_gas:['物理化学','定容气体受热的理论压强',['理论末态压强'],['torr'],[
 '只在理想气体、定容和摩尔数不变的数学模型中使用 P/T=常数；摄氏温度不能直接相除。',
 '将 23 ℃ 与 475 ℃ 转为 296.15 K 与 748.15 K，代入 P₂=1344×748.15/296.15 torr。',
 '约 3395.28 torr，即 3.40×10³ torr；这是理论计算，不代表实际加热压力容器安全。']],
 hydrogen_gas_charles_law:['物理化学','等压氢气升温时的体积',['末态体积'],['L'],[
 '假设气体的量和压强不变，运用 V/T=常数，先将 −196 ℃ 和 100 ℃ 转为绝对温度。',
 '两端温度分别是 77.15 K、373.15 K，因此 V₂=2.50×373.15/77.15 L。',
 '结果约 12.0917 L，按三位有效数字 12.1 L；以 V₂/T₂ 与 V₁/T₁ 的相等性反查。']],
 boron_trifluoride_ideal_gas_mass:['物理化学','三氟化硼的气体摩尔数与质量',['物质的量','质量'],['mol','g'],[
 '采用 P=1.220 atm、V=4.3410 L、T=788.0 K 和 R=0.082057338 L·atm/(mol·K)。',
 '先求 n=PV/(RT)，再以 M(BF₃)=10.81+3×18.998 g/mol 计算 m=nM。',
 '得到 n≈0.0819042 mol 与 m≈5.55343 g；m/M 反推 n 应与理想气体计算一致。']],
 medical_oxygen_cylinder_normal_body:['物理化学','高压氧气折算到人体温度与常压',['末态体积'],['L'],[
 '初态为 151 atm、35.4 L、298.15 K，目标为 1 atm、310.15 K，假设理想气体和物质的量不变。',
 '使用 P₁V₁/T₁=P₂V₂/T₂，得到 V₂=151×35.4×310.15/298.15 L。',
 '约 5560.54 L，源答案按四位有效数字约 5561 L；实际高压气体非理想性另行复核。']],
 fat_diet_energy_fraction:['物理化学','脂肪在膳食中的能量占比',['能量百分比'],['%'],[
 '食品 Cal 为千卡；脂肪 65 g、能量密度 9.1 Cal/g，已知每日总能量 2000 Cal。',
 '脂肪提供 65×9.1=591.5 Cal，故占比=591.5/2000×100%。',
 '计算为 29.575%，按题设精度取约 30%；分子分母必须使用同一能量单位。']],
 diet_soda_max_carbohydrate:['物理化学','低热量饮料中的碳水质量严格上限',['质量上限'],['g'],[
 '已给碳水化合物能量密度 4.1 Cal/g，若饮料热量严格小于 1 Cal，应该保留不等号。',
 '令质量为 m，列 4.1m<1，得 m<1/4.1 g。',
 '边界值约 0.243902 g，教材的 0.24 g 是近似说明；边界等号自身不符合严格小于条件。']],
 ph_to_ion_concentrations:['分析化学','从 pH 独立求两种离子浓度',['水合氢离子浓度','氢氧根离子浓度'],['mol/L','mol/L'],[
 '稀溶液下近似以浓度代替活度，25 ℃ 时采用 K_w≈10⁻¹⁴。',
 '由 pH=6.52 求 [H₃O⁺]≈10⁻⁶·⁵²，再以 [OH⁻]≈K_w/[H₃O⁺] 计算。',
 '两者分别约 3.020×10⁻⁷ 和 3.311×10⁻⁸ mol/L，乘积反算约 10⁻¹⁴。']],
 ammonia_hydronium_mislabeled_in_key:['分析化学','氨水离子积及原参考答案标签错误',['水合氢离子浓度'],['mol/L'],[
 '原数据给定的是 [OH⁻]=3.2×10⁻³ mol/L，但要求计算的是 [H₃O⁺]，必须辨别符号。',
 '25 ℃ 下按 [H₃O⁺]=K_w/[OH⁻]，代入 10⁻¹⁴/(3.2×10⁻³)。',
 '结果约 3.125×10⁻¹² mol/L；原答案将该数值误标为 OH⁻，必须作为来源疑点保留。']],
 oxygen_mass_molecule_choice:['无机化学','比较三种化合物中的氧元素质量',['乙醇中的氧','甲酸中的氧','水中的氧'],['g','g','g'],[
 '乙醇与水每分子各含一个氧原子，甲酸含两个，因此不能只比较各化合物的摩尔数。',
 '对三种样品用 m(O)=n(化合物)×每粒子氧原子数×15.999 g/mol，分别取 0.75、0.60、1.00 mol。',
 '氧质量约为 12.00、19.20、16.00 g，故甲酸所含氧元素质量最多。']],
 five_formula_molar_masses:['无机化学','五种物质的摩尔质量核算',['S₈','戊烷','硫酸钪','丙酮','葡萄糖'],['g/mol','g/mol','g/mol','g/mol','g/mol'],[
 '拆分分子式下标，尤其 Sc₂(SO₄)₃ 中 2 个 Sc、3 个 S、12 个 O；丙酮含三个 C。',
 '按 M=Σ n_i A_i 求和，例如 M(Sc₂(SO₄)₃)=2A(Sc)+3A(S)+12A(O)。',
 '所用标准原子量小数位可能与教材旧表不同，复核时先检查组成和量纲，再比较末位舍入。']],
 five_medicinal_formula_masses:['无机化学','五种含杂原子有机物的式量',['氟烷','百草枯盐式','咖啡因','尿素','钠皂'],['g/mol','g/mol','g/mol','g/mol','g/mol'],[
 '按已给物质的化学式计算而非只凭名称猜测盐型；含 Br、Cl、F 的组成尤其要逐原子计数。',
 '将 C₂HBrClF₃、C₁₂H₁₄N₂Cl₂、C₈H₁₀N₄O₂、CO(NH₂)₂、C₁₈H₃₅O₂Na 的各元素贡献求和。',
 '保留化学式和所用原子量表，源答案末位与现代原子量常有微差，须人工审定而非强行取齐。']],
 oxygen_atom_molecule_ozone_mass:['无机化学','等摩尔氧原子、氧气、臭氧的质量',['氧原子','氧气','臭氧'],['g','g','g'],[
 '三组都是 0.600 mol，但作为粒子的 O、O₂、O₃ 每粒子分别含 1、2、3 个氧原子。',
 '利用 m=nM，分别求 0.600×15.999、0.600×31.998、0.600×47.997 g。',
 '结果约 9.60、19.2、28.8 g；等摩尔粒子并不是等摩尔氧原子。']],
 zircon_element_mass_and_atom_count:['无机化学','锆石的元素质量与原子数',['锆原子数','锆质量','硅原子数','硅质量','氧原子数','氧质量'],['个','g','个','g','个','g'],[
 '硅酸锆化学式 ZrSiO₄，0.3384 mol 中锆、硅各有 0.3384 mol 原子，而氧原子为四倍。',
 '原子数用 6.02214076×10²³ mol⁻¹ 求得；元素质量为各元素原子物质的量乘其摩尔质量。',
 '氧原子数必须是锆原子数四倍，结果分别标注“个”和“克”，避免混用元素数量与质量。']],
 aluminum_mass_from_three_salts:['无机化学','三种铝盐中的铝质量比较',['磷酸铝中的 Al','氯化铝二聚体中的 Al','硫化铝中的 Al'],['g','g','g'],[
 '原题出现 C1 与 Cl 易混的化学式，当前只按原答案暗示的 Al₂Cl₆ 解释，保留原文疑点。',
 '对 122 g AlPO₄、266 g Al₂Cl₆、225 g Al₂S₃ 分别计算 m(Al)=m(样品)×n_Al A(Al)/M(物质)。',
 '三者比较以 Al₂S₃ 含铝质量最大；若原化学式解释改变必须重算，不能自动抹除错字警告。']],
 diamond_carat_carbon_atom_count:['无机化学','钻石克拉质量换算至原子数',['碳原子数'],['个'],[
 '按题设 1 克拉等于 0.200 g，1.25 克拉钻石质量就是 0.250 g。',
 '假设金刚石纯碳，先计算 n=0.250/12.011 mol，再乘阿伏伽德罗常数 N_A。',
 '得到约 1.253×10²² 个原子；源教材无附答案，钻石纯度是应单独审阅的假设。']],
 permanganate_molarity_mass:['分析化学','高锰酸钾质量配液浓度',['KMnO₄ 浓度'],['mol/L'],[
 'KMnO₄ 摩尔质量等于 A(K)+A(Mn)+4A(O)，在计算前逐一清点下标。',
 '先用 0.0908 g 除以式量得到摩尔数，再除以 0.500 L 得浓度 c。',
 '约 1.149×10⁻³ mol/L，有效数字约 1.15×10⁻³ mol/L；逆算 cVM 应回到称样质量。']],
 four_solutions_molarities:['分析化学','胆固醇、氨、异丙醇和碘的浓度',['胆固醇','氨','异丙醇','碘'],['mol/L','mol/L','mol/L','mol/L'],[
 '四组都先检查溶质化学式和质量单位，异丙醇质量 1.49 kg 须转换为 1490 g。',
 '分别计算 c=m/(MV)，体积依次 0.100、0.500、2.50、0.100 L；摩尔质量分别按 C₂₇H₄₆O、NH₃、C₃H₈O、I₂。',
 '碘为双原子分子，误用单个碘原子量会造成两倍偏差；其他数据也要按各自精度舍入。']],
 milk_calcium_ion_concentration:['分析化学','牛奶中钙离子的浓度',['钙离子浓度'],['mol/L'],[
 '题设含 1.0 g 钙元素（作为 Ca²⁺），不是 1.0 g 的其他钙盐。',
 'n(Ca²⁺)=1.0 g/(40.078 g/mol)，再除以 1.0 L 溶液体积。',
 '约 0.02495 mol/L，按输入有效数字取 0.025 mol/L，需区分元素质量与化合物质量。']],
 ferric_nitrate_dilution_volume:['分析化学','硝酸铁的原液取样体积',['原液体积'],['L'],[
 '原液 1.00 mol/L，目标为 1.00 L、0.250 mol/L；假设稀释前后溶质的量守恒。',
 '依 c₁V₁=c₂V₂，V₁=(0.250×1.00)/1.00 L。',
 '计算 0.250 L 即 250 mL；取样体积小于最终溶液体积，是合理性检查。']],
 four_diluted_solution_molarities:['分析化学','四组溶液稀释及原答案题号勘误',['Fe(NO₃)₃','丙醇','H₃PO₄','蔗糖'],['mol/L','mol/L','mol/L','mol/L'],[
 '所有小问用 c_f=c_iV_i/V_f，确保体积单位在每个小问中前后一致。',
 '四个浓度计算分别为 (1.00×0.250)/2.00、(0.5000×0.1222)/1.250、(2.35×0.350)/4.00、(22.50×0.025)/100.0。',
 '第四个小问教材参考答案误写成 (e) 而非 (d)，这属于编号错位，不影响溶质守恒的公式。']],
 engine_radiator_heat_transfer:['物理化学','汽车冷却水降温传热',['传热量绝对值'],['kJ'],[
 '按美制 1 gallon≈3.78541 L、密度约 1 g/mL 得水质量约 3785 g。',
 '华氏温差 240−175=65 °F，相当于 65×5/9 K；因此 Q=mcΔT。',
 '计算热量绝对值约 572 kJ，按题设精度为 5.7×10² kJ；系统取水时放热符号为负。']],
 barium_hydroxide_endothermic_calorimetry:['物理化学','吸热反应的近似量热',['吸热量'],['kJ'],[
 '温度下降 3.1 ℃，说明反应体系吸热；近似按溶液质量与水相近的比热处理。',
 'm≈100+3.15+1.52 g，Q≈m×4.20×3.1 J，再除以 1000。',
 '约 1.363 kJ（教材约 1.4 kJ）；真实值须考虑量热器热容和溶液比热偏差。']],
 bomb_calorimeter_TNT_heat_release:['物理化学','弹式量热热容与放热量',['热量绝对值'],['kJ'],[
 '量热器热容 534 J/K，675 mL 水在近似密度 1 g/mL 时热容为 675×4.184 J/K。',
 '总热容为两项相加，温差为 26.9−23.4=3.5 K；Q=C_totalΔT。',
 '绝对值为 11.7537 kJ，教材舍入约 11.7 kJ；燃烧反应作为系统的热量符号为负。']],
 cereal_macronutrient_calories:['物理化学','谷物食品的营养热量',['每份热量'],['Cal'],[
 '食品单位 Cal 是千卡；蛋白质 3 g、碳水 18 g、脂肪 6 g。',
 '能量=3×4.1+18×4.1+6×9.1 Cal，以各营养素的单位质量能量分别求和。',
 '计算为 140.7 Cal，按给定精度约 1.4×10² Cal。']],
 iodine_vapor_bulb_temperature:['物理化学','碘蒸气的理想气体温度',['绝对温度'],['K'],[
 '碘蒸气分子 I₂ 的摩尔质量为 2×126.90447 g/mol，不能按单个 I 原子求摩尔数。',
 '气室 73.3 mL 转成 0.0733 L；n=0.292/M(I₂)，T=0.462×0.0733/(nR)。',
 '约为 358.72 K（约 85.6 ℃）。原题不附答案，气体模型还需人工审查。']],
 three_gas_samples_masses:['物理化学','三种气体的压力体积单位换算',['CO₂','C₂H₄','Ar'],['g','g','g'],[
 '三份数据的压力分别使用 torr、kPa、torr；计算前必须统一为 atm，221 mL 改为 0.221 L。',
 '三组分别用 n=PV/(RT)，温度为 299.15、483、219.15 K，再乘各自气体摩尔质量。',
 '三份质量约 7.24×10⁻⁵、23.12、1.49×10⁻⁴ g；注意第一项是 0.100 L，不能错用 100 L。']],
 resting_oxygen_moles:['物理化学','给定呼吸耗氧体积的摩尔数',['氧气物质的量'],['mol'],[
 '给定 14 L、100 kPa 与 25 ℃ 的气态氧，温度必须改为 298.15 K。',
 '使用 R=8.314462618 kPa·L/(mol·K)，代入 n=100×14/(R×298.15)。',
 '得到约 0.56475 mol，按给定精度约 0.56 mol；只针对给定时间的实验模型。']],
 two_refrigerants_stp_molar_volumes:['物理化学','不同含氟化合物的标准状况体积',['CCl₂F₂','C₂H₅F'],['L','L'],[
 '明确使用教材 STP=273.15 K 和 1 atm；若采用 1 bar 版本 STP 会略有不同。',
 '分别求两种气体的摩尔质量，再用 V=(10.0/M)×RT/P 计算相同质量时的体积。',
 '约 1.85 L 和 4.66 L；分子量越大相同质量的气体物质的量越小。']],
 pure_water_40c_ionization_and_ph:['分析化学','40 ℃ 下纯水的浓度与 pH',['水合氢离子浓度','pH'],['mol/L','无量纲'],[
 '纯水中性条件是 [H₃O⁺]=[OH⁻]，而不是任何温度下 pH 均为 7。',
 '40 ℃ 时 K_w=2.9×10⁻¹⁴，因此 [H₃O⁺]=√K_w≈1.70294×10⁻⁷ mol/L。',
 'pH=−log₁₀([H₃O⁺]/1 mol/L)≈6.7688；教材无参考答案，活度近似应另行复核。']],
 rainwater_hydroxide_25c:['分析化学','雨水中氢氧根离子浓度',['氢氧根浓度'],['mol/L'],[
 '25 ℃ 时按稀溶液近似，取 K_w≈1.0×10⁻¹⁴。',
 '雨水 [H₃O⁺]=1.7×10⁻⁶ mol/L，代入 [OH⁻]=K_w/[H₃O⁺]。',
 '得到 [OH⁻]≈5.882×10⁻⁹ mol/L；两浓度相乘反验 K_w，教材原题未附答案。']]
};
const fmt=x=>Number(x).toPrecision(7);
export function buildChineseDerivations(review,pin){
 if(review?.reviewed_source_cases!==42||review.items?.length!==42||
  review.source_commit!==pin?.commit||review.publishable!==0||
  review.rights_confirmations!==0||review.scholarly_human_confirmations!==0||
  pin.edition_rights_conflict_pending!==true||
  pin.import_source_derived_exercises_into_main_prohibited!==true)
  throw Error('Rights quarantine or 42-source scientific check missing');
 const wanted=[...CASES.slice(8),...MORE];
 if(Object.keys(DEFINITIONS).length!==34||wanted.length!==34)throw Error('Missing Chinese derivation cases');
 const bySource=new Map(review.items.map(x=>[x.source_path+':'+x.source_exercise_ordinal,x]));
 if(bySource.size!==42)throw Error('Duplicate source ordinals');
 const items=[];
 for(const c of wanted){
  const t=DEFINITIONS[c.tag],row=bySource.get(c.path+':'+c.ordinal);
  if(!t||!row||t.length!==5||t[3].length!==c.expected.length||
   t[2].length!==c.expected.length||t[4].length!==3||
   t[4].some(s=>s.length<24)||row.release_eligible!==false||
   row.machine_computation_checked!==true||
   row.independent_human_chemist_review_completed!==false||
   row.source_item_rights_verified!==false||
   row.source_url!=='https://github.com/'+pin.repository+'/blob/'+pin.commit+'/'+c.path)
   throw Error('Missing or unsafe source-linked Chinese derivation '+c.tag);
  const isMore=MORE.some(x=>x.tag===c.tag);
  const vals=isMore?independentlySolve(c.tag):independentlyCalculate(c.tag);
  if(isMore)checkAdditional(c,vals);else verifyScientificCase(c,vals);
  if(vals.length!==row.independently_calculated_results.length||
   vals.some((v,i)=>Math.abs(v-row.independently_calculated_results[i])>
     Math.max(1e-27,Math.abs(v)*1e-11)))
   throw Error('Stale independently verified scientific quantity '+c.tag);
  items.push({tag:c.tag,subject:t[0],topic:t[1],
   source_id:row.source_id,source_url:row.source_url,
   chapter_file:c.path,source_exercise_ordinal:c.ordinal,
   source_question_sha256:row.question_sha256,
   independent_solution_steps_zh:t[4],
   computed_answers:vals.map((v,i)=>({label:t[2][i],value:v,unit:t[3][i],display:fmt(v)})),
   source_answer_present:row.source_answer_present,
   source_answer_issue:row.issue||null,source_question_typo:row.source_question_typo||null,
   is_full_question_translation:false,human_science_approval:false,
   individual_reuse_rights_approved:false,publishable:false});
 }
 if(items.length!==34||new Set(items.map(x=>x.source_id)).size!==34)
   throw Error('34 unique Chinese derivations required');
 return {schema_version:1,source_revision:pin.commit,numeric_review_count:42,
  previous_full_chinese_drafts:8,new_chinese_independent_derivations:items.length,
  new_notes_missing_source_answers:items.filter(x=>!x.source_answer_present).length,
  new_notes_answer_issues:items.filter(x=>x.source_answer_issue).length,
  new_notes_question_typos:items.filter(x=>x.source_question_typo).length,
  edition_rights_unresolved:true,expert_approved:0,reuse_rights_approved:0,
  released_for_exams:0,
  notice:'Original formula-based Chinese commentary only. Does not reproduce entire copyrighted problem statements. Source rights and human science review remain blocked.',
  items};
}
export function renderResearchIndex(result){
 const lines=['# 34 道大学化学教材计算题：中文独立推导隔离稿','',
 '仅供内部审核，不包含教材原题全文。版本、逐题权利、答案及专家审查均未批准。','',
 '固定版本：'+result.source_revision,''];
 for(const q of result.items){
  lines.push('## '+q.topic+'（'+q.subject+'）','',
   '来源：['+q.chapter_file+'，第 '+q.source_exercise_ordinal+' 题]('+q.source_url+')','',
   ...(q.source_answer_present?[]:['原教材未附参考答案，必须人工复核。','']),
   ...(q.source_answer_issue?['参考答案疑点：'+q.source_answer_issue,'']:[]),
   ...(q.source_question_typo?['原题化学式疑点：'+q.source_question_typo,'']:[]));
  q.independent_solution_steps_zh.forEach((step,i)=>lines.push((i+1)+'. '+step));
  lines.push('','计算值：'+q.computed_answers.map(a=>a.label+' = '+a.display+
   (a.unit==='无量纲'?'':' '+a.unit)).join('；'),'','---','');
 }
 return lines.join('\n');
}
export function run(){
 const review=JSON.parse(readFileSync(join(DIR,'independent_numeric_review.json'),'utf8'));
 const pin=JSON.parse(readFileSync(join(ROOT,'harvest/pinned_openstax_chemistry.json'),'utf8'));
 const result=buildChineseDerivations(review,pin);
 const outputs=[
 [join(DIR,'chinese_independent_derivations.json'),JSON.stringify(result,null,2)+'\n'],
 [join(DIR,'chinese_independent_derivations.md'),renderResearchIndex(result)]
 ];
 for(const [file,body] of outputs)
  if(!existsSync(file)||readFileSync(file,'utf8')!==body)writeFileSync(file,body);
 console.log('Chinese independent derivations staged='+result.new_chinese_independent_derivations+
  ' original answer gaps='+result.new_notes_missing_source_answers+
  ' expert approved=0 reuse approved=0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
