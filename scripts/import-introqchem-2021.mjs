#!/usr/bin/env node
// Twenty-one fixed CHEM 3PA3 quantum-chemistry exercises linked to the CC0 (+ third-party exception)
// author source. All remain unpublished pending item-rights and expert review.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REF=new URL('../harvest/pinned_introqchem_2021.json',import.meta.url);
const OWN='PaulWAyers/IntroQChemProblems',COMMIT='0491272e0b8e71059e601537b196181ab6b367cd';
const SOURCE_SHA='1f21cc7c7850e29d265e8e6c619e52c397fbad8b';
const KEY_SHA='8dd5ad17f6ee0659c599e17826d776c8aeb47d79';
const LICENSE_SHA='657f1ed2aefefde5d2aa65b66bc3a85f46ceeb3b';
const README_SHA='e3b12b3b510392bf42ddd3c6dec476fc483e8a45';
const H=6.62607015e-34,C=299792458,NA=6.02214076e23,HBAR=H/(2*Math.PI);
export const questionId=s=>createHash('sha256').update(String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const exp=x=>x.toExponential(6);
export function validateSource(m){
 if(m?.schema_version!==1||m.repository!==OWN||m.commit!==COMMIT||m.license!=='CC0-1.0'||
  m.license_blob_sha!==LICENSE_SHA||m.readme_blob_sha!==README_SHA||
  m.question_notebook_blob_sha!==SOURCE_SHA||m.key_notebook_blob_sha!==KEY_SHA||
  m.third_party_exceptions_explicit!==true||m.item_level_rights_cleared!==false)
  throw Error('Pinned author rights or quantum notebook metadata changed');
 return true;
}
export const CASES=[
 {topic:'photon_radiation_pressure_force',question_cell:25,key_cell:25,
  issue:'student_question_unit_incorrect_for_momentum_rate',
  question:'量子化学·辐射压：532 nm、平均功率 100 mW 的单色光垂直照射完全吸收且不反射的表面，求平均光压力作用下的力（N），并明确其单位。',
  explanation:'单光子动量为 h/λ；每秒的光子数为 P/(hc/λ)。单位时间动量转移是力 F=P/c，单位 N，而不是 kg·m/s。学生题本把“每秒动量转移”要求以 kg·m/s 报告，这是动量而非动量变化率的单位；答案键计算出 P/c 的数值本身正确，不能把单位错误归咎于答案键。',
  values:[0.1/C]},
 {topic:'gamma_radiation_molar_energy',question_cell:28,key_cell:28,
  issue:'key_has_inconsistent_python_variable',
  question:'量子化学·辐射摩尔能量：已知一摩尔相同光子的能量为 1.29×10¹¹ J/mol。假设光子在真空中传播，求单光子的波长（m）。',
  explanation:'单光子能量 E=E_m/N_A，而 E=hc/λ；因此 λ=N_A hc/E_m。原答案代码中 Co60 的波长变量名出现不一致。',
  values:[NA*H*C/1.29e11]},
 {topic:'hydrogen_ground_state_first_absorption',question_cell:38,key_cell:42,
  issue:'source_n1_inequality_typo',
  question:'量子化学·氢原子里德伯公式：一个基态氢原子（n=1）吸收光子跃迁到更高能级。求所需最小光频率（Hz），取 R_H=1.0974×10⁷ m⁻¹。',
  explanation:'允许吸收的最小能级差来自 n=1 → n=2，因此 ν=cR_H(1−1/4)=3cR_H/4。原笔记不等式把 n=1 错误排除，与题述基态冲突。',
  values:[C*1.0974e7*3/4]},
 {topic:'photon_angular_wavenumber',question_cell:49,key_cell:56,
  issue:'source_answer_confirmed',
  question:'量子化学·光子角波数：某真空光子的角波数 k=1.00×10⁷ rad/m。求光子动量（kg·m/s）和能量（J），注意角波数与普通波数的区别。',
  explanation:'角波数满足 k=2π/λ，故 p=ℏk、E=cp=ℏck，不能误用 p=hk。',
  values:[HBAR*1e7,HBAR*1e7*C]},
 {topic:'complex_conjugate_tdse',question_cell:57,key_cell:64,
  issue:'reference_answer_missing_hbar_squared',
  question:'量子化学·波函数共轭方程：实数势 V(x,t) 下，已知 iℏ∂Ψ/∂t=−(ℏ²/2m)∂²Ψ/∂x²+VΨ。写出 Ψ* 满足的时间依赖方程。',
  explanation:'对方程逐项取复共轭，利用 i*=−i、V*=V，得 −iℏ∂Ψ*/∂t=−(ℏ²/2m)∂²Ψ*/∂x²+VΨ*。原答案键动能算符系数缺少 ℏ 的平方。',
  values:[]},
 {topic:'hamiltonian_total_energy',question_cell:59,key_cell:66,
  issue:'source_answer_confirmed',
  question:'量子化学·哈密顿算符：在通常的非相对论量子力学中，H 对应系统的总能量还是仅仅对应动能？解释其一般构成。',
  explanation:'H 是总能量算符，通常可写为 H=T+V，包含动能和势能，不应将其与单独的动能算符混淆。',
  values:[]},
 {topic:'complex_conjugation_nonnegative_norm',question_cell:66,key_cell:73,
  issue:'source_option_set_interpretation_caveat',
  question:'量子化学数学基础：给定复数 z=a+bi，a、b 为实数。证明 zz* 恒为非负实数，并指出它何时等于 0。',
  explanation:'zz*=(a+bi)(a−bi)=a²+b²≥0；当且仅当 a=b=0 时等于零。因此“必为非零实数”的断言错误。',
  values:[]},
 {topic:'complex_exponential_wavefunction',question_cell:69,key_cell:76,
  issue:'source_answer_confirmed',
  question:'量子化学数学基础：设 Ψ(x,t)=A exp[(a+bi)(kx−ωt)]，其中 A,a,b,k,ω,x,t 均为实数。写出 Ψ*(x,t)，并指出若 A 为复数须作的修改。',
  explanation:'实系数情形 Ψ*=A exp[(a−bi)(kx−ωt)]。若 A 以及 a、b、k、ω 为复数，应对这些参数一同取共轭。原参考答案本已明确接受一般复参数形式，先前把它标记为“答案仅假设实参数”属于误报。',
  values:[]},
 {topic:'momentum_vs_kinetic_operator_eigenstates',question_cell:71,key_cell:78,
  issue:'student_problem_is_biconditional_but_key_one_way',
  question:'量子化学·算符本征态：判断“动量算符的每个本征函数必是动能算符的本征函数，反之也成立”是否正确。以一维自由粒子 p̂=−iℏ∂/∂x、T̂=p̂²/(2m) 给出证明或反例。',
  explanation:'双向结论为假，反之不成立：p̂φ=pφ 蕴含 T̂φ=p²φ/(2m)，但 cos(kx) 是 T̂ 的本征函数却不是 p̂ 的本征函数。原题保留双向说法，答案键只回答单向命题，必须标注版本差异。',
  values:[]},
 {topic:'photon_particle_evidence',question_cell:5,key_cell:5,
  issue:'blackbody_quantization_is_not_direct_photon_detection',
  question:'量子化学·光的粒子性：从光电效应、康普顿散射、电子晶体衍射和 Stern–Gerlach 实验中，选出直接体现光子粒子性的现象并说明为什么。',
  explanation:'光电效应表明光子与电子有离散能量交换；康普顿散射揭示光子与电子发生能量及动量交换。电子衍射和 Stern–Gerlach 实验检验物质波与原子束量子化，不是直接光子证据。原参考答案包括黑体辐射，它主要是能量量子化的历史证据。',
  values:[]},
 {topic:'photon_frequency_500nm',question_cell:9,key_cell:9,issue:'source_answer_confirmed',
  question:'量子化学·光的频率：真空中波长为 500 nm 的单色光，其频率 ν（Hz）是多少？取 c=299792458 m/s，注意纳米与米的换算。',
  explanation:'频率 ν=c/λ；波长应写成 500×10⁻⁹ m，再代入真空光速计算，不能把 500 直接作为米。',
  values:[C/(500e-9)]},
 {topic:'photon_wavelength_frequency_scaling',question_cell:13,key_cell:13,
  issue:'source_answer_confirmed',
  question:'量子化学·光波长变化：在真空中若单色光波长增加为原来的两倍，其频率将增倍、保持不变还是减半？请证明。',
  explanation:'因为 ν=c/λ，光速 c 在真空中保持不变，故波长变为两倍时频率变为原来的 1/2。',
  values:[]},
 {topic:'vacuum_light_speed_dispersion',question_cell:16,key_cell:16,
  issue:'vacuum_assumption_added_to_remove_medium_ambiguity',
  question:'量子化学·真空光速：在同一真空中传播的 400 nm 光与 800 nm 光，哪个传播得更快？理由是什么？',
  explanation:'在真空中电磁波传播速度均为 c，与波长无关；频率则按 ν=c/λ 改变。不能无条件推广到存在色散的介质。',
  values:[]},
 {topic:'hene_single_photon_energy',question_cell:19,key_cell:19,issue:'source_answer_confirmed',
  question:'量子化学·氦氖激光：已知真空中激光波长 632.8 nm，取 h=6.62607015×10⁻³⁴ J·s、c=299792458 m/s。求一个光子的能量（J）。',
  explanation:'单光子能量 E=hc/λ；将 λ=632.8×10⁻⁹ m 代入，得到的是单个光子而不是一摩尔光子的能量。',
  values:[H*C/(632.8e-9)]},
 {topic:'photon_energy_doubling_relations',question_cell:22,key_cell:22,
  issue:'relativistic_mass_terminology_requires_modern_clarification',
  question:'量子化学·光子能量比例：对于真空光子 E=hν=pc=hc/λ，分别说明频率翻倍、动量翻倍和波长翻倍会怎样改变能量。',
  explanation:'频率翻倍或动量翻倍使能量翻倍；波长翻倍使能量减半。光速 c 是真空常数，不可独立通过“将 c 翻倍”调整。原题采用“相对论质量”说法，重新表述时优先使用能量动量关系。',
  values:[]},
 {topic:'davisson_germer_electron_waves',question_cell:31,key_cell:31,
  issue:'source_answer_confirmed',
  question:'量子化学·戴维孙—革末实验：该实验是否为电子波动性的直接证据？解释电子束遇到晶体后出现衍射峰的原因。',
  explanation:'是。电子具有德布罗意波长 λ=h/p，晶体周期排列使电子波发生相干散射，在特定方向出现衍射增强；现象不能仅靠经典粒子轨道描述。',
  values:[]},
 {topic:'electron_diffraction_bragg_scattering',question_cell:35,key_cell:35,
  issue:'source_answer_confirmed',
  question:'量子化学·电子衍射：电子束照射金属晶体时，发现散射强度随角度出现峰值。是晶格衍射还是单纯原子光谱吸收？解释理论依据。',
  explanation:'主要是电子物质波被周期性晶格衍射，可采用布拉格型条件与德布罗意波长说明其散射峰；并非电子完全被吸收而产生类似光谱的离散能级跃迁。',
  values:[]},
 {topic:'electron_waves_vs_atomic_lines',question_cell:42,key_cell:46,
  issue:'source_answer_confirmed',
  question:'量子化学·物质波证据：电子束被晶体衍射和氢原子的离散光谱中，哪一现象更直接证明电子具有德布罗意波长？说明区别。',
  explanation:'电子晶体衍射直接显示电子的波动干涉；原子离散谱线主要证明束缚态能级量子化。原学生题本含氢原子谱线选项，但参考答案仅选择电子晶体散射，没有把谱线当作物质波的直接证据；此前的答案差异标签属于误报。',
  values:[]},
 {topic:'photon_particles_vs_matter_waves',question_cell:45,key_cell:49,
  issue:'blackbody_quantization_evidence_requires_qualification',
  question:'量子化学·波粒二象性：比较光电效应、康普顿散射和电子晶体衍射，它们分别揭示的是光还是电子的哪种性质？',
  explanation:'光电效应和康普顿散射说明光子能量与动量的离散交换；电子晶体衍射显示电子的波动性。原选择题还包含黑体辐射，它是能量量子化的历史证据，不能不加限定地当作单光子检测。',
  values:[]},
 {topic:'baseball_debroglie_wavelength',question_cell:53,key_cell:60,
  issue:'source_answer_confirmed',
  question:'量子化学·宏观德布罗意波：质量 145 g 的棒球以 45 m/s 运动。取 h=6.62607015×10⁻³⁴ J·s，求球的德布罗意波长（m），解释量级。',
  explanation:'λ=h/(mv)，先换算 m=0.145 kg，因此 λ=h/(0.145×45)≈10⁻³⁴ m，远小于通常晶格或实验障碍物尺度。',
  values:[H/(0.145*45)]},
 {topic:'wavefunction_probability_density_nonnegative',question_cell:63,key_cell:70,
  issue:'student_and_answer_notebook_questions_are_opposite_wording',
  question:'量子化学·玻恩规则：任意复值波函数 Ψ(x,t) 的位置概率密度 |Ψ|² 可以为负吗？写出数学证明并指出何时为零。',
  explanation:'不能。令 Ψ=a+bi，有 Ψ*Ψ=a²+b²≥0，且可在 a=b=0 时为零。学生版问“绝不会为负”应回答真；答案键反问“能否为负”应回答假，二者结论一致但题目措辞反向。',
  values:[]}
];
export function verifyPhysics(item,vals){
 if(vals.length!==item.values.length||vals.some(x=>!Number.isFinite(x)||x<=0))
  throw Error('Invalid independently computed physical answer');
 const close=(a,b)=>Math.abs(a-b)<=1e-10*Math.max(Math.abs(b),1e-36);
 switch(item.topic){
  case 'photon_radiation_pressure_force':
   if(!close(vals[0]*C,0.1))throw Error('Photon-force inverse mismatch');break;
  case 'gamma_radiation_molar_energy':
   if(!close(NA*H*C/vals[0],1.29e11))throw Error('Gamma wavelength inverse mismatch');break;
  case 'hydrogen_ground_state_first_absorption':
   if(!close(vals[0]/(C*1.0974e7),0.75))throw Error('Hydrogen Rydberg inverse mismatch');break;
  case 'photon_frequency_500nm':
   if(!close(vals[0]*500e-9,C))throw Error('Frequency wavelength mismatch');break;
  case 'hene_single_photon_energy':
   if(!close(vals[0]*632.8e-9/H,C))throw Error('HeNe single photon energy mismatch');break;
  case 'baseball_debroglie_wavelength':
   if(!close(vals[0]*.145*45,H))throw Error('Ball De Broglie wavelength mismatch');break;
  case 'photon_angular_wavenumber':
   if(!close(vals[0]/HBAR,1e7)||!close(vals[1]/vals[0],C))
    throw Error('Angular wavenumber inverse mismatch');break;
 }
 return true;
}
export function generate(){
 validateSource(JSON.parse(readFileSync(REF,'utf8')));
 const out=[],ids=new Set();
 for(const item of CASES){
  const vals=item.values;verifyPhysics(item,vals);
  const answer=item.explanation+(vals.length?'\n精确常数计算：'+vals.map(exp).join('；')+'（依题目单位依次对应）。':'');
  const id=questionId(item.question);
  if(ids.has(id))throw Error('Duplicate source-linked course exercise');ids.add(id);
  out.push({schema_version:1,id,subject:'physical',topic:item.topic,level:'undergraduate',
   difficulty:'introductory_to_intermediate',question_type:'source_linked_quantum_course_exercise',
   resource_type:'translated_fixed_course_exercise_not_parametric',
   question:item.question,answer,explanation:item.explanation,numeric_answers:vals,
   source_key_issue:item.issue,source_question_cell_index:item.question_cell,
   source_key_cell_index:item.key_cell,
   quality_status:'awaiting_expert_review',publishable:false,semantic_duplicate_review_pending:true,
   scientifically_machine_checked:vals.length>0,conceptual_answer_requires_expert_review:vals.length===0,source:{
    repository:OWN,commit:COMMIT,file:'ipynb/IntroQM2021.ipynb',
    key_notebook:'ipynb/IntroQMkey.ipynb',
    license:'CC0-1.0',content_rights_verified:false,item_level_rights_review_pending:true,
    license_evidence:{license:'https://github.com/'+OWN+'/blob/'+COMMIT+'/LICENSE',
      readme:'https://github.com/'+OWN+'/blob/'+COMMIT+'/README.md',
      exception:'Third-party content retains third-party rights; no human item-level determination yet.'},
    source_git_blobs:{notebook:SOURCE_SHA,key:KEY_SHA,license:LICENSE_SHA,readme:README_SHA},
    url:'https://github.com/'+OWN+'/blob/'+COMMIT+'/ipynb/IntroQM2021.ipynb',
    attribution:'CHEM 3PA3 course by Paul Ayers, McMaster University; adapted and corrected Chinese explanations.',
    source_fixed_2021_exercise:true,question_rights_await_human_confirmation:true,
    changes:'Source-linked Chinese adaptation. Distinct original fixed exercise, not numeric variant. Errors and mismatches disclosed.'}});
 }
 if(out.length!==21)throw Error('Expected exactly 21 fixed source-linked exercises');
 return out;
}
export function run(){
 const rows=generate(),dest=join(ROOT,'data/candidates');
 for(const q of rows){
  const path=join(dest,q.id+'.json');if(!existsSync(path))continue;
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.question!==q.question||old.answer!==q.answer||old.publishable!==false||
   old.source?.commit!==COMMIT)throw Error('Imported candidate hash or rights state collision');
 }
 mkdirSync(dest,{recursive:true});let added=0;
 for(const q of rows){
  const path=join(dest,q.id+'.json');if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;
 }
 const reportFile=join(ROOT,'harvest/import_reports/introqchem_2021_source_exercises.json');
 const report={schema_version:1,repository:OWN,commit:COMMIT,
  fixed_course_exercises:rows.length,newly_added:added,already_present:rows.length-added,
  source_key_issue_counts:Object.fromEntries(CASES.map(x=>[x.topic,x.issue])),
  source_license:'CC0-1.0',third_party_exception_retained:true,
  item_rights_confirmed:0,science_expert_approved:0,publication_approved:0,
  note:'21 fixed source-linked university exercises; student and teacher keys pinned. Ambiguous and inconsistent original answers are flagged. Item-level rights and human expert approval remain pending.'};
 mkdirSync(dirname(reportFile),{recursive:true});
 const serialized=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportFile)||readFileSync(reportFile,'utf8')!==serialized)writeFileSync(reportFile,serialized);
 const msg='CHEM 3PA3 fixed exercises: new='+added+' existing='+(rows.length-added)+' total='+rows.length+' approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
