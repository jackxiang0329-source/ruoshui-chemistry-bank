#!/usr/bin/env node
// Print-only quality-assurance companion for pinned introductory quantum-chemistry
// source notebook disputes. This is NOT a licensed textbook translation or exam bank.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {esc} from './build-chemistry-source-tex.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const INPUT=join(ROOT,'harvest/import_reports/introqchem_2021_key_reconciliation.json');
const OUT=join(ROOT,'harvest/import_reports/quantum_source_reconciliation_zh');
const CAT={
 source_question_unit_or_formula_error:'原题单位或参考答案算符系数错误',
 source_notebook_variable_or_condition_typo:'来源变量或量子数条件笔误',
 logical_options_or_wording_interpretation:'逻辑命题或答案表述不一致',
 source_assumption_or_outdated_terminology:'未明确的科学假设或历史术语',
 scientific_evidence_interpretation:'量子现象证据强度解释争议'
};
const id=x=>String(x.topic||'');
export function renderQuantumScienceReview(report){
 if(report?.all_fixed_course_exercises!==21||
  report.previously_flagged_disputes!==13||
  report.false_positive_dispute_labels_corrected!==2||
  report.remaining_source_answer_or_question_issues!==11||
  report.issues?.length!==11||
  report.confirmed_or_no_known_dispute?.length!==10||
  report.source_rights_confirmed!==0||
  report.expert_review_approved!==0||
  report.released_for_exams!==0||
  report.corrected_false_positive_evidence?.length!==2||
  !/^[a-f0-9]{40}$/.test(report.source_commit||'')||
  report.source_repository!=='PaulWAyers/IntroQChemProblems'||
  Object.values(report.source_issue_types).reduce((a,b)=>a+b,0)!==11)
  throw Error('Quantum source review blocked: copyright, provenance, or science mismatch');
 const seen=new Set(),counts={};
 for(const issue of report.issues){
  if(seen.has(id(issue))||!CAT[issue.category]||
   issue.formally_approved!==false||
   issue.content_rights_verified!==false||
   issue.scientific_or_legal_human_review_completed!==false||
   !Number.isInteger(issue.student_cell_index)||
   !Number.isInteger(issue.key_cell_index)||
   issue.student_cell_index<0||issue.key_cell_index<0||
   !issue.source_student_notebook_url?.includes('/blob/'+report.source_commit+'/')||
   !issue.source_key_notebook_url?.includes('/blob/'+report.source_commit+'/'))
    throw Error('Unsafe quantum issue or mismatched pinned notebook cell');
  seen.add(id(issue));counts[issue.category]=(counts[issue.category]||0)+1;
 }
 for(const [cat,n] of Object.entries(report.source_issue_types))
  if(counts[cat]!==n)throw Error('Quantum issue category totals changed');
 const resolved=new Set();
 for(const x of report.corrected_false_positive_evidence){
  if(resolved.has(x.topic)||seen.has(x.topic)||
   x.current_status!=='source_answer_confirmed')
   throw Error('Previously mistaken quantum source-key flag is no longer resolved');
  resolved.add(x.topic);
 }
 const lines=[
 '\\documentclass[UTF8,11pt,oneside,openany,fontset=none]{ctexbook}',
 '\\usepackage[a4paper,margin=23mm,top=25mm,bottom=25mm]{geometry}',
 '\\usepackage{fontspec}',
 '\\usepackage{amsmath,amssymb,enumitem,fancyhdr}',
 '\\usepackage[colorlinks=true,linkcolor=black,urlcolor=blue]{hyperref}',
 '\\setCJKmainfont{Noto Serif CJK SC}',
 '\\setCJKsansfont{Noto Sans CJK SC}',
 '\\setmainfont{DejaVu Sans}',
 '\\setlength{\\parindent}{2em}',
 '\\setlength{\\parskip}{0.45em}',
 '\\setlength{\\headheight}{16pt}',
 '\\setlist[enumerate]{itemsep=0.3em,topsep=0.3em}',
 '\\pagestyle{fancy}',
 '\\fancyhf{}',
 '\\fancyhead[L]{量子化学 · 固定来源证据审核}',
 '\\fancyhead[R]{未经专家或版权审批}',
 '\\fancyfoot[C]{\\thepage}',
 '\\sloppy',
 '\\title{量子化学来源答案核验册\\\\[0.5em]\\large 2021 年课程学生本与答案本独立对照}',
 '\\author{三千弱水 · 化学题库科学质检}',
 '\\date{2026 年 10 月}',
 '\\begin{document}',
 '\\frontmatter',
 '\\maketitle',
 '\\chapter*{使用范围及复核口径}',
 '本册记录 2021 年量子化学课程 21 道固定题源的\\textbf{学生题本与参考答案本差异}，不是对原教材完整试题的翻译、转载或正式试卷。源作品有第三方内容权利例外，逐题许可尚待人工确认；专家科学审定和可正式组卷题均为零。',
 '前轮共标出 13 项差异，本轮逐题核对后更正 2 项来源误报，仍有 11 项需专家复核。其中有数学或单位错误，也有术语、题干措辞和证据强度的讨论，不可笼统称为 11 道错误答案。',
 '来源仓库固定版本：\\texttt{'+esc(report.source_commit)+'}。学术审核中仍必须返回原学生本和答案本核对。',
 '\\tableofcontents',
 '\\mainmatter',
 '\\chapter{来源错误与假设分类}',
 '\\begin{itemize}'
 ];
 for(const [cat,n] of Object.entries(report.source_issue_types))
  lines.push('\\item '+esc(CAT[cat]||cat)+'：'+n+' 项');
 lines.push('\\end{itemize}',
 '\\chapter{11 项待审来源差异}');
 for(const item of report.issues){
  lines.push('\\section{'+esc(item.topic)+'}',
   '\\noindent\\textbf{差异类型：} '+esc(CAT[item.category])+'。\\par',
   '\\noindent\\textbf{定位：} 学生本单元 '+item.student_cell_index+
    '，答案本单元 '+item.key_cell_index+'。\\par',
   '\\noindent\\textbf{学生本：} \\url{'+item.source_student_notebook_url+'}\\par',
   '\\noindent\\textbf{答案本：} \\url{'+item.source_key_notebook_url+'}\\par',
   '\\noindent\\textbf{源证据：} '+esc(item.source_evidence_summary)+'\\par',
   '\\noindent\\textbf{独立科学说明：} '+esc(item.scientific_reconciliation)+'\\par');
  if(item.numerical_results_independently_recomputed.length)
   lines.push('\\noindent\\textbf{复算值：} '+
    item.numerical_results_independently_recomputed
     .map(x=>'\\texttt{'+Number(x).toPrecision(8)+'}').join('；')+'\\par');
  lines.push('\\medskip\\noindent\\textit{此条未获得版权确认或人工专家审定。}',
   '\\medskip\\hrule\\medskip');
 }
 lines.push('\\chapter{误报修正：不是来源答案错误}');
 for(const item of report.corrected_false_positive_evidence){
  lines.push('\\section{'+esc(item.topic)+'}',
   '\\noindent 学生本单元 '+item.student_cell+
    '；答案本单元 '+item.key_cell+'。\\par',
   '\\noindent '+esc(item.verified_note)+'\\par');
 }
 lines.push('\\chapter{数学与物理独立证明}',
 '\\section{辐射压的量纲}',
 '光子携带的动量为 h/λ，单位时间到达光子数为 Pλ/(hc)；因此力 F=P/c，单位 N。无论何种波长，在吸收且没有反射的模型中，固定功率所产生的平均力不随波长变化。',
 '\\section{复数模的非负性}',
 esc(report.independently_checked_physics_witnesses.complex_modulus_proof),
 '\\section{动量和动能本征态的非对称逻辑}',
 esc(report.independently_checked_physics_witnesses.kinetic_counterexample),
 '\\section{薛定谔方程的共轭}',
 esc(report.independently_checked_physics_witnesses.complex_tdse_correct_formula),
 '\\section{基态氢原子的最小吸收频率}',
 '允许的最低吸收跃迁为 n=1 到 n=2；由里德伯公式可知频率为：\\texttt{'+
  Number(report.independently_checked_physics_witnesses.lowest_hydrogen_absorption_hz).toPrecision(8)+'} Hz。',
 '\\backmatter',
 '\\chapter*{版权及专家审核待办}',
 '全部 21 道均需检查原始学生题本与答案本单元、第三方图片及文本例外、物理假设与近似、数值有效数字及中文表述。\\textbf{逐题授权确认：0；专家审核批准：0；正式组卷批准：0。}',
 '\\end{document}','');
 const tex=lines.join('\n');
 if((tex.match(/\\section\{/g)||[]).length!==11+2+5)
  throw Error('Quantum report review section count changed');
 return tex;
}
export function run(){
 const source=JSON.parse(readFileSync(INPUT,'utf8'));
 const tex=renderQuantumScienceReview(source);
 mkdirSync(OUT,{recursive:true});
 const output=join(OUT,'quantum_source_key_reconciliation.tex');
 if(!existsSync(output)||readFileSync(output,'utf8')!==tex)writeFileSync(output,tex);
 console.log('Created 21-source/11-issue quantum research-only Chinese TeX, expert approvals=0');
 return output;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
