// Original parameterized undergraduate chemistry calculation exercises.
// Designed for isolated draft previews; no licensed third-party question text is used.
export const QUANTITATIVE_TRACKS = Object.freeze(['analytical', 'physical']);
export const TEMPLATE_CODES = Object.freeze({
  analytical: ['ANAL-ACID', 'ANAL-EDTA', 'ANAL-PRECIP'],
  physical: ['PHYS-EQ', 'PHYS-ARR', 'PHYS-ENTROPY']
});
const R = 8.31446261815324;
function assert(condition, message) { if (!condition) throw new Error(message); }
function random(seed) {
  assert(Number.isSafeInteger(seed) && seed>=0 && seed<=4294967295,
    'Seed must be an unsigned 32-bit integer');
  let state=(seed>>>0)||0x9e3779b9;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state>>>0)/4294967296;
  };
}
const pick=(rng, values)=>values[Math.floor(rng()*values.length)];
const sig=(value,digits=4)=>Number(value).toPrecision(digits);
const sci=(value,digits=4)=>Number(value).toExponential(digits-1);
function weakAcid(rng) {
  const C=pick(rng,[0.020,0.025,0.030,0.040,0.050,0.060,0.075,0.080]);
  const Ka=pick(rng,[1.0,1.5,1.8,2.0,3.0,4.0,6.0])*1e-5;
  // x = positive root of x^2 + Ka*x - Ka*C = 0.
  const x=2*Ka*C/(Ka+Math.sqrt(Ka*Ka+4*Ka*C));
  const expected=-Math.log10(x);
  const residual=x*x/(C-x)/Ka-1;
  assert(x>1e-7 && x<C && Math.abs(residual)<1e-10,'Weak acid mass-action failure');
  return {
    code:'ANAL-ACID', inputs:{C,Ka},
    title:'一元弱酸解离平衡',
    prompt:'25 °C，下列一元弱酸 HA 的分析浓度 C='+sig(C,3)+' mol/L，Ka='+sci(Ka,3)+'。忽略水的自偶电离、活度修正和其他副反应，求平衡 pH（无单位），保留约三位小数。不得使用 x≪C 的近似直接代替精确解。',
    expected, unit:'', absTolerance:0.006,relTolerance:0,
    derivation:'设 [H+]=x，[A-]=x，[HA]=C−x，满足 x²/(C−x)=Ka。正根 x=2KaC/(Ka+√(Ka²+4KaC))='+sci(x,6)+' mol/L；pH=−log10(x)='+sig(expected,8)+'。',
    checks:{mass_action_relative_residual:Math.abs(residual), concentration_positive:x>0&&C-x>0}
  };
}
function edta(rng) {
  const C=pick(rng,[0.001,0.0015,0.002,0.003,0.004,0.005]);
  const alpha=pick(rng,[0.12,0.20,0.35,0.50,0.65,0.80]);
  const Kf=10**10.65, Kp=alpha*Kf;
  // stable quadratic solution for equal analytical totals of M and EDTA
  const x=2*C/(1+Math.sqrt(1+4*Kp*C));
  const residual=(Kp*x*x+x-C)/C;
  assert(x>0&&x<C&&Math.abs(residual)<1e-10,'EDTA formation balance failure');
  return {
    code:'ANAL-EDTA', inputs:{C,alpha,Kf,Kprime:Kp},
    title:'EDTA 条件形成常数',
    prompt:'25 °C，Ca²⁺ 与 EDTA 总形成常数 log10 Kf=10.65。已知某缓冲体系中，未配位 EDTA 以 Y⁴⁻ 存在的分布分数 α='+sig(alpha,3)+'。反应前钙和 EDTA 的总分析浓度均为 C='+sig(C,3)+' mol/L。忽略其他副反应与活度效应。求平衡游离 [Ca²⁺]，单位 mol/L，建议用科学计数法。',
    expected:x,unit:'mol/L',absTolerance:0,relTolerance:0.005,
    derivation:'条件稳定常数 Kf′=αKf='+sci(Kp,7)+'。令 x=[Ca²⁺]，由金属与配体物料守恒得 Kf′x²+x−C=0，稳定正根 x=2C/(1+√(1+4Kf′C))='+sci(x,7)+' mol/L。',
    checks:{material_balance_relative_residual:Math.abs(residual),remaining_complex_positive:C-x>0}
  };
}
function precip(rng) {
  const C=pick(rng,[0.005,0.010,0.015,0.020,0.025,0.040,0.050,0.080]);
  const Ksp=5.6e-12; // Mg(OH)2 25°C, exercise-defined value
  const hydroxide=Math.sqrt(Ksp/C);
  const expected=14+Math.log10(hydroxide);
  const residual=C*hydroxide*hydroxide/Ksp-1;
  assert(expected>8.0&&expected<11.0&&Math.abs(residual)<1e-10,
    'Precipitation mass-action failure');
  return {
    code:'ANAL-PRECIP',inputs:{C,Ksp,hydroxide,pKw:14},
    title:'氢氧化物开始沉淀的 pH',
    prompt:'25 °C，Mg²⁺ 分析浓度 C='+sig(C,3)+' mol/L，给定 Ksp[Mg(OH)₂]='+sci(Ksp,3)+'，pKw=14.00。忽略金属络合、水解中间物种、活度效应及沉淀引起的体积变化。计算 Mg(OH)₂ 刚开始沉淀时的 pH（无单位）。',
    expected,unit:'',absTolerance:0.006,relTolerance:0,
    derivation:'临界条件 Q=Ksp=C[OH⁻]²，故 [OH⁻]=√(Ksp/C)='+sci(hydroxide,6)+' mol/L；pH=pKw+log10[OH⁻]='+sig(expected,8)+'。',
    checks:{ion_product_relative_residual:Math.abs(residual)}
  };
}
function gasEquilibrium(rng) {
  const T=pick(rng,[285,298,305,315,325,335,345,350]);
  const H=-57200,S=-175.8;
  const lnK=S/R-H/(R*T);
  const expected=Math.exp(lnK);
  const residual=Math.log(expected)-lnK;
  assert(expected>0&&Number.isFinite(expected)&&Math.abs(residual)<1e-12,
    'Van t Hoff equilibrium check failed');
  return {
    code:'PHYS-EQ',inputs:{T,deltaH:H,deltaS:S,R},
    title:'放热二聚反应的标准平衡常数',
    prompt:'气相反应 2NO₂(g) ⇌ N₂O₄(g) 的 ΔrH°=−57.2 kJ/mol、ΔrS°=−175.8 J/(mol·K)。假设给定温度区间内两者不变，理想气体、标准压强 p°=1 bar，R=8.314462618 J/(mol·K)。求 T='+T+' K 下的无量纲标准平衡常数 K°。',
    expected,unit:'',absTolerance:0,relTolerance:0.005,
    derivation:'ΔrG°=ΔrH°−TΔrS°，ln K°=ΔrS°/R−ΔrH°/(RT)='+sig(lnK,8)+'，故 K°='+sig(expected,8)+'（无量纲）。',
    checks:{log_equilibrium_absolute_residual:Math.abs(residual)}
  };
}
function arrhenius(rng) {
  const T1=pick(rng,[285,290,298,300,310,320]);
  const dt=pick(rng,[15,20,25,30,40,50]);
  const T2=T1+dt;
  const Ea=pick(rng,[40000,45000,50000,55000,65000,75000,85000]);
  const lnRatio=Ea/R*(1/T1-1/T2);
  const expected=Math.exp(lnRatio);
  const residual=Math.log(expected)-lnRatio;
  assert(T2>T1&&expected>1&&Math.abs(residual)<1e-12,'Arrhenius check failed');
  return {
    code:'PHYS-ARR', inputs:{Ea,T1,T2,R},
    title:'Arrhenius 方程与速率常数比',
    prompt:'某一级反应在 '+T1+' K 至 '+T2+' K 的温度范围内可使用 Arrhenius 关系，活化能 Ea='+(Ea/1000)+' kJ/mol 且近似不变。R=8.314462618 J/(mol·K)。求 k('+T2+' K)/k('+T1+' K)（无量纲），无需已知指前因子。',
    expected,unit:'',absTolerance:0,relTolerance:0.005,
    derivation:'由 ln(k₂/k₁)=(Ea/R)(1/T₁−1/T₂)='+sig(lnRatio,8)+'，所以 k₂/k₁='+sig(expected,8)+'。',
    checks:{log_rate_ratio_absolute_residual:Math.abs(residual)}
  };
}
function entropy(rng) {
  const n=pick(rng,[0.5,0.75,1.0,1.25,1.5,2.0,2.5]);
  const V1=pick(rng,[2,3,4,5]);
  const multiple=pick(rng,[1.5,2,2.5,3,4,5]);
  const V2=V1*multiple;
  const expected=n*R*Math.log(V2/V1);
  const residual=expected/(n*R)-Math.log(V2/V1);
  assert(V2>V1&&expected>0&&Math.abs(residual)<1e-12,
    'Ideal-gas entropy check failed');
  return {
    code:'PHYS-ENTROPY', inputs:{n,V1,V2,T:298,R},
    title:'理想气体可逆等温膨胀熵变',
    prompt:'有 '+sig(n,3)+' mol 理想气体在 298 K 下经历可逆等温膨胀，体积从 V₁='+sig(V1,3)+' L 增至 V₂='+sig(V2,4)+' L。R=8.314462618 J/(mol·K)。计算气体体系的熵变 ΔS，单位 J/K。忽略非理想气体效应。',
    expected,unit:'J/K',absTolerance:0,relTolerance:0.005,
    derivation:'理想气体可逆等温过程 ΔS=nR ln(V₂/V₁)='+sig(expected,8)+' J/K，膨胀时体系熵增为正。',
    checks:{normalized_entropy_absolute_residual:Math.abs(residual)}
  };
}
const MAKERS={analytical:[weakAcid,edta,precip],physical:[gasEquilibrium,arrhenius,entropy]};
export function generateQuantitativePractice({track,count=6,seed=20261026}={}) {
  assert(QUANTITATIVE_TRACKS.includes(track),
    'Quantitative templates support analytical or physical only');
  assert(Number.isSafeInteger(count)&&count>=1&&count<=60,'Count must be 1..60');
  const rng=random(seed);
  const makers=MAKERS[track];
  const questions=[],answers=[],used=new Set();
  for(let i=0;i<count;i++){
    const maker=makers[i%makers.length];
    let exercise,signature,attempt=0;
    do {
      exercise=maker(rng);
      signature=exercise.code+'|'+JSON.stringify(exercise.inputs);
      attempt++;
      if(attempt>1000)throw new Error('Insufficient distinct template parameter sets');
    } while(used.has(signature));
    used.add(signature);
    const id='PQ-'+exercise.code+'-'+String(seed)+'-'+String(i+1).padStart(3,'0');
    questions.push({id,track,type:'numerical',template:exercise.code,
      title:exercise.title,prompt:exercise.prompt,expected_unit:exercise.unit,
      review_status:'original_unreviewed_preview'});
    answers.push({id,track,template:exercise.code,expected:exercise.expected,
      unit:exercise.unit,absTolerance:exercise.absTolerance,
      relTolerance:exercise.relTolerance,
      derivation:exercise.derivation,inputs:exercise.inputs,checks:exercise.checks,
      source:{kind:'original_parameterized',version:'1.0'},
      review_status:'original_unreviewed_preview'});
  }
  return {
    student:{schema_version:'1.0',kind:'ruoshui-chemistry-quantitative-preview',
      track,seed,status:'UNREVIEWED_DO_NOT_PUBLISH',question_count:count,questions},
    teacher:{schema_version:'1.0',kind:'ruoshui-chemistry-quantitative-answer-key',
      track,seed,status:'UNREVIEWED_DO_NOT_PUBLISH',question_count:count,answers},
    report:{track,generated:count,distinct_parameter_sets:used.size,
      templates:TEMPLATE_CODES[track],status:'model_checked_pending_human_review'}
  };
}
