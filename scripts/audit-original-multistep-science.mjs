#!/usr/bin/env node
// Independent algebra-and-assumptions check for 12 authored solved problems.
// NOT scientific peer review; NEVER approves content for publication.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {generate} from './import-original-multistep-chemistry.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const R=8.314462618,F=96485.33212,kb=1e-14/1.8e-5;
const oh=(-kb+Math.sqrt(kb*kb+4*kb*.05))/2;
export const SCIENCE={
 carbonate_bicarbonate_dual_endpoint:{units:['mol/L','mol/L'],terms:['酚酞','甲基橙'],values:()=>[.1*.01/.05,(.1*.035-.2*.01)/.05],note:'确认仅含两种碳酸盐，并核验两终点的酸量计量。'},
 calcium_magnesium_differential_edta:{units:['mol/L','mol/L'],terms:['Ca²⁺','Mg²⁺','EDTA'],values:()=>[.01*.012/.025,.01*(.02-.012)/.025],note:'确认测钙条件可有效排除镁及其他络合干扰。'},
 dual_wavelength_spectrophotometric_inversion:{units:['mol/L','mol/L'],terms:['A₅₀₀','A₆₀₀'],values:()=>[(.5*8000-.4*5000)/7e7,(.4*10000-.5*2000)/7e7],note:'检查吸光度可加、基质空白和矩阵消光系数单位。'},
 weak_acid_titration_half_and_equivalence_ph:{units:['',''],terms:['半当量','Ka=1.80×10⁻⁵'],values:()=>[-Math.log10(1.8e-5),14+Math.log10(oh)],note:'半当量采用近似 pH=pKa；当量点包含弱碱水解，并忽略水自解离的微小修正。'},
 concentration_uncertainty_propagation:{units:['%','mol/L'],terms:['0.100%','0.200%'],values:()=>[Math.hypot(.1,.2),.05*Math.hypot(.001,.002)],note:'独立标准不确定度按方差合成，注意百分数换算。'},
 acidic_permanganate_iron_mass_and_molarity:{units:['mol/L','mg/L'],terms:['KMnO₄','Mn²⁺'],values:()=>[5*.02*.01/.025,5*.02*.01/.025*55.845*1000],note:'仅在酸性且锰终态为 Mn²⁺ 时可使用 1:5 的电子计量。'},
 coupled_equilibria_free_energy:{units:['','kJ/mol'],terms:['K₁=3.00','K₂=4.00'],values:()=>[12,-R*298.15*Math.log(12)/1000],note:'净反应的无量纲平衡常数可相乘，但温度与标准态必须相同。'},
 adiabatic_neutralization_calorimetry:{units:['K','°C'],terms:['绝热','200.0 g'],values:()=>[5700/(200*4.18),25+5700/(200*4.18)],note:'量热杯吸热、蒸发损失和热容不均匀均被假定可忽略。'},
 hydrogen_oxygen_fuel_cell_work_and_efficiency:{units:['V','%'],terms:['ΔrH°','ΔrG°'],values:()=>[237130/(2*F),237.13/285.83*100],note:'电池标准电动势应使用 Gibbs 能，不能直接以燃烧焓代入。'},
 magnesium_chloride_mean_activity_coefficient:{units:['mol/L',''],terms:['MgCl₂','Debye'],values:()=>[.003,10**(-.509*2*Math.sqrt(.003))],note:'采用 1:2 离子计量和极稀溶液的 Debye–Hückel 极限定律。'},
 binary_phase_diagram_lever_rule:{units:['','mol'],terms:['xL=0.300','xS=0.900'],values:()=>[1/3,50],note:'杠杆规则求的是摩尔比例，不应误写为相体积比例。'},
 carnot_engine_work_and_entropy_balance:{units:['','J'],terms:['Th=500.0','Tc=300.0'],values:()=>[.4,600],note:'可逆热机熵产生为零，实际不可逆热机效率低于 Carnot 上限。'}
};
export function audit(rows){
 if(!Array.isArray(rows)||rows.length!==12)throw Error('Expected exactly 12 candidate records');
 const ref=generate(),seen=new Set(),result=[];
 for(const q of rows){
  if(!q||seen.has(q.topic))throw Error('Duplicate or corrupt candidate');
  seen.add(q.topic);
  const original=ref.find(x=>x.topic===q.topic),rule=SCIENCE[q.topic];
  if(!original||!rule||JSON.stringify(original)!==JSON.stringify(q))
   throw Error('Original science source, worked answer or rights flags drift: '+q.topic);
  if(q.publishable!==false||q.quality_status!=='awaiting_expert_review'||
     q.source.license!=='CC0-1.0'||q.source.original_exam_question!==false)
   throw Error('Unsafe premature publication');
  if(rule.terms.some(x=>!q.question.includes(x)))throw Error('Missing premise from authored question');
  if(JSON.stringify(q.numeric_answer_units)!==JSON.stringify(rule.units))
   throw Error('Unexpected numeric units '+q.topic);
  const expected=rule.values();
  for(let i=0;i<2;i++)
   if(!Number.isFinite(expected[i])||!Number.isFinite(q.numeric_answers[i])||
      Math.abs(expected[i]-q.numeric_answers[i])>1e-10*Math.max(1,Math.abs(expected[i])))
    throw Error('Independent thermodynamic or stoichiometric equation mismatch: '+q.topic);
  if(q.solution_steps.length!==3)throw Error('Incomplete derived reasoning');
  result.push({id:q.id,topic:q.topic,subject:q.subject,values:expected,units:rule.units,
    manual_review_prompt:rule.note,science_checked_by_human:false,publishable:false});
 }
 if(result.filter(x=>x.subject==='analytical').length!==6||
    result.filter(x=>x.subject==='physical').length!==6)throw Error('Subject coverage drift');
 return {schema_version:1,total:12,independent_numeric_recomputations:24,
  assumption_presence_checks:12,full_source_replays:12,
  expert_approved:0,publishable:false,
  caution:'Arithmetic, chemical assumptions and units machine-checked; no chemistry expert assessment or permission to publish.',
  records:result};
}
export function markdown(r){
 const lines=['# 大学化学 12 道综合题：科学条件与反算复核','',
 '> 机器检查 12 道题、24 个数值和 12 组必要条件；全部**仍须学科专家人工复核**。','',
 '| 学科 | 专题 | 两个重算结果 | 待确认的科学前提 |','|---|---|---|---|'];
 for(const x of r.records)
  lines.push('| '+x.subject+' | '+x.topic+' | '+
   x.values.map((v,i)=>v.toPrecision(6)+(x.units[i]?' '+x.units[i]:'')).join('；')+
   ' | '+x.manual_review_prompt+' |');
 lines.push('','**注意：**机器公式核对不等于独立同行评审，不代表已经解决语义重复和题目版权审核。','');
 return lines.join('\n');
}
export function run(){
 const rows=generate().map(x=>JSON.parse(readFileSync(join(ROOT,'data/candidates',x.id+'.json'),'utf8')));
 const r=audit(rows),dir=join(ROOT,'harvest/review_notes');mkdirSync(dir,{recursive:true});
 writeFileSync(join(dir,'original_multistep_science_review.json'),JSON.stringify(r,null,2)+'\n');
 writeFileSync(join(dir,'original_multistep_science_review.md'),markdown(r));
 console.log('12 stored chemistry solutions: 24 independently recomputed values, 0 expert approvals');
 return r;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
