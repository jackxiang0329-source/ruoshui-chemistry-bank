#!/usr/bin/env node
// Independent formula-balance witnesses for five existing Muza organic candidates.
// Necessary stoichiometric checks do not establish mechanism, yield or publication approval.
import {readFileSync,readdirSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='MuzaPro/Organic-Chemistry-Quiz-JS';
const REFERENCES={
 williamson:'https://openstax.org/books/organic-chemistry/pages/18-2-preparing-ethers',
 sn1:'https://openstax.org/books/organic-chemistry/pages/11-12-a-summary-of-reactivity-sn1-sn2-e1-e1cb-and-e2',
 e2:'https://openstax.org/books/organic-chemistry/pages/11-8-the-e2-reaction-and-the-deuterium-isotope-effect',
 ester:'https://chem.libretexts.org/Courses/Purdue/Purdue%3A_Chem_26605%3A_Organic_Chemistry_II_%28Lipton%29/Chapter_13._Addition-Elimination_Sequences/13.2%3A_Electrophilic_Addition-Elimination/13.2.1_%22Acid-Catalyzed_Nucleophilic_Acyl_Substitution%22/13.2.1.2_Fischer_Esterification',
 grignard:'https://openstax.org/books/organic-chemistry/pages/18-5-reactions-of-epoxides-ring-opening'
};
const SCIENCE={
 q1:{classification:'Williamson SN2 ether synthesis',target:'C3H8O',byproducts:['NaBr'],
  keys:['williamson'],flag:'conditions_unspecified',
  context:'甲氧基负离子与一级溴乙烷发生 SN2 取代，产生甲乙醚；题干宜补充适当溶剂并提示一级卤代烷更利于取代。',status:'candidate_only'},
 q2:{classification:'Tertiary chloride SN1 solvolysis with E1 competition',target:'C6H14O',byproducts:['HCl'],
  keys:['sn1'],flag:'acidic_conditions_ambiguous_competing_E1',
  context:'乙醇可进攻叔丁基氯溶剂解形成的碳正离子，但 E1 消除成异丁烯也可发生；若含水，还可形成叔丁醇。来源的“酸性条件”不能保证该醚为唯一或主产物。应说明溶剂、含水量与产物竞争。',status:'requires_conditions_review'},
 q3:{classification:'E2 alkene formation with bulky strong base',target:'C4H8',byproducts:['C4H10O','KBr'],
  keys:['e2','sn1'],flag:'temperature_and_solvent_unspecified',
  context:'叔丁醇钾从叔丁基溴夺取 β-H，协同消除 Br，生成 2-甲基丙烯、叔丁醇与 KBr；题干还应限定适宜溶剂和温度。',status:'candidate_only'},
 q4:{classification:'Fischer acid-catalyzed esterification',target:'C4H8O2',byproducts:['H2O'],
  keys:['ester'],flag:'sulfuric_acid_catalyst_not_selected_and_equilibrium_unstated',
  context:'乙酸与乙醇为化学计量反应物；硫酸在来源备选项里出现，但不在标注的正确反应物二元组中。若题干写“酸催化”，应将酸催化剂作为单独条件，并说明可逆平衡及除水或过量醇的影响。',status:'requires_catalyst_review'},
 q5:{classification:'Grignard ethylene oxide ring opening followed by hydrolysis',
  target:'C8H10O',byproducts:['MgBrCl'],workup:'HCl',keys:['grignard'],
  flag:'anhydrous_step_and_separate_acid_workup_omitted',
  context:'苯基溴化镁先在无水醚溶剂中与环氧乙烷反应生成镁醇盐，再用水性酸后处理生成 2-苯乙醇；不能把酸在反应开始时与格氏试剂一同加入。HCl 只用于形式净式中的后处理。',status:'requires_workup_review'}
};
const ELEMENTS=new Set(['C','H','O','K','Na','Mg','Br','Cl']);
export function countAtoms(formula){
 if(typeof formula!=='string'||!/^[A-Za-z0-9]+$/.test(formula))
  throw Error('Only unparenthesized formulae supported');
 const counts={},rx=/([A-Z][a-z]?)(\d*)/g;
 let consumed=0,m;
 while((m=rx.exec(formula))){
  if(m.index!==consumed||!ELEMENTS.has(m[1]))throw Error('Unknown element or bad formula '+formula);
  const n=m[2]?Number(m[2]):1;
  if(!Number.isSafeInteger(n)||n<1||n>100)throw Error('Invalid atom count');
  counts[m[1]]=(counts[m[1]]||0)+n;consumed=rx.lastIndex;
 }
 if(consumed!==formula.length)throw Error('Incomplete formula '+formula);
 return counts;
}
export function reactionBalance(lhs,rhs){
 const sum=xs=>{
  const x={};for(const formula of xs)
   for(const [e,n] of Object.entries(countAtoms(formula)))x[e]=(x[e]||0)+n;
  return x;
 };
 const l=sum(lhs),r=sum(rhs),diff={};
 for(const e of new Set([...Object.keys(l),...Object.keys(r)]))
  diff[e]=(l[e]||0)-(r[e]||0);
 return {balanced:Object.values(diff).every(n=>n===0),element_residuals:Object.fromEntries(Object.entries(diff).sort())};
}
function parseSaved(q){
 const lines=q.question.split('\n');
 const product=/^Target: .+ \(([A-Za-z0-9]+)\)$/.exec(lines.find(x=>x.startsWith('Target: '))||'');
 const options=lines.find(x=>x.startsWith('Available reagents: '));
 if(!product||!options)throw Error('Original target or reagent list absent');
 const reagents=new Map();
 for(const item of options.slice('Available reagents: '.length).split('; ')){
  const match=/^(.+) \(([A-Za-z0-9]+)\)$/.exec(item);
  if(!match||reagents.has(match[1]))throw Error('Reagent source formatting changed');
  reagents.set(match[1],match[2]);
 }
 const selected=q.answer.split('; ');
 if(selected.length!==2||new Set(selected).size!==2||selected.some(x=>!reagents.has(x)))
  throw Error('Incorrect answer-to-reagent mapping');
 return {product:product[1],selected,formulas:selected.map(x=>reagents.get(x)),reagents};
}
export function reviewFive(stored,replay){
 if(!Array.isArray(stored)||stored.length!==5||
  replay?.source_repository!==REPO||replay?.matched_persisted_source_exercises!==5||
  replay?.unresolved_science_condition_concerns!==3||
  replay?.human_expert_approved!==0||replay?.exam_ready!==0)
  throw Error('Pinned five-source audit prerequisite missing');
 const index=new Map(stored.map(q=>[q.source?.original_id,q]));
 if(index.size!==5)throw Error('Duplicate original source item');
 const items=[];
 for(const [id,p] of Object.entries(SCIENCE)){
  const q=index.get(id),a=replay.items.find(x=>x.source_id===id);
  if(!q||q.source.repository!==REPO||q.publishable!==false||
   q.quality_status!=='awaiting_expert_review'||
   !a||a.candidate_id!==q.id||a.existing_science_review_status!==p.status||
   a.eligible_for_exam!==false)
   throw Error('Original item science flag or release protection changed '+id);
  const parsed=parseSaved(q);
  if(!(parsed.product===p.target||(id==='q1'&&parsed.product==='CH3OCH2CH3')))
   throw Error('Target molecular formula drift '+id);
  if(id==='q4'&&(!parsed.reagents.has('Sulfuric Acid')||
   parsed.selected.includes('Sulfuric Acid')))throw Error('Acid catalyst vs selected substrates changed');
  if(id==='q5'&&(!parsed.reagents.has('Hydrochloric Acid')||
   parsed.selected.includes('Hydrochloric Acid')))throw Error('Grignard workup reagent key changed');
  const left=[...parsed.formulas,...(p.workup?[p.workup]:[])],
   right=[p.target,...p.byproducts],balance=reactionBalance(left,right);
  if(!balance.balanced)throw Error('Independent net reaction elemental imbalance '+id);
  items.push({source_id:id,candidate_id:q.id,mechanism:p.classification,
   original_answer_names:parsed.selected,selected_reagent_formulas:parsed.formulas,
   target_source_formula:parsed.product,verified_product_formula:p.target,
   net_equation_left:left,net_equation_right:right,
   atom_balance:balance,priority_science_flag:p.flag,
   explanation_and_conditions_cn:p.context,
   reference_urls:p.keys.map(k=>REFERENCES[k]),
   needs_human_condition_review:true,
   independent_lab_confirmation:false,expert_approved:false,
   third_party_item_rights_confirmed:false,publishable:false});
 }
 if(items.length!==5)throw Error('Missing source study cases');
 return {schema_version:1,source_repository:REPO,source_commit:replay.source_commit,
  items,source_items_reviewed:5,formal_element_balances_passed:5,
  special_science_conditions_pending:3,
  warnings:['q2 competing SN1/E1','q4 acid catalyst vs reactant selection','q5 anhydrous Grignard then separate acid workup'],
  human_expert_approvals:0,individual_rights_approvals:0,exam_ready:0,
  scope_note:'Independent atom balance of a formal net equation does not establish chemical feasibility, selectivity, the major product or safe conditions. No candidate is approved or modified.'};
}
export function asMarkdown(report){
 const lines=['# 五道有机化学反应题：元素守恒及反应条件逐题质检','',
 '所有五题是现存候选；净反应平衡不是专家确认反应条件、主产物、实验安全或版权的证明。','',
 '数量：5/5 形式净反应元素守恒；3 道优先条件复核（q2/q4/q5）；人工批准 0。',''];
 for(const item of report.items){
  lines.push('## '+item.source_id+'：'+item.mechanism,'',
   '- 题目：[候选 JSON](../data/candidates/'+item.candidate_id+'.json)',
   '- 来源答案：'+item.original_answer_names.join(' + '),
   '- 形式反应：'+item.net_equation_left.join(' + ')+' → '+item.net_equation_right.join(' + '),
   '- 元素守恒：通过（残差均为 0）',
   '- 条件警示：'+item.priority_science_flag,
   '- 严格审校建议：'+item.explanation_and_conditions_cn,
   '- 参考资料：'+item.reference_urls.map((url,n)=>'[教材'+(n+1)+']('+url+')').join('；'),
   '- 审核状态：仍待人工审定、不可组卷。','');
 }
 lines.push('注意：原始 data/candidates JSON 不变，依旧 publishable=false；项目级 MIT 许可不替代每项第三方权利链审核。','');
 return lines.join('\n');
}
export function run(){
 const dir=join(ROOT,'data/candidates');
 const stored=readdirSync(dir).filter(x=>x.endsWith('.json'))
  .map(x=>JSON.parse(readFileSync(join(dir,x),'utf8')))
  .filter(x=>x.source?.repository===REPO);
 const replay=JSON.parse(readFileSync(join(ROOT,'harvest/main_muza_pinned_source_replay.json'),'utf8'));
 const report=reviewFive(stored,replay);
 for(const [name,content] of [
  ['harvest/muza_independent_science_review.json',JSON.stringify(report,null,2)+'\n'],
  ['harvest/muza_independent_science_review.md',asMarkdown(report)]]){
  const out=join(ROOT,name);
  if(!existsSync(out)||readFileSync(out,'utf8')!==content)writeFileSync(out,content);
 }
 console.log('Muza: five formal atom balances passed; three high-priority science caveats remain; 0 publishable.');
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
