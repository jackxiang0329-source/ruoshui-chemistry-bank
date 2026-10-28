#!/usr/bin/env node
// Internal Chinese chemistry research review, not licensed for release.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const DIR=join(ROOT,'external_sources/openstax_chemistry');
const LEGACY={
 'contents/m51011.md:1':['无机化学','化学式中碳元素质量'],
 'contents/m51011.md:3':['无机化学','五种化合物相对式量'],
 'contents/m51014.md:4':['分析化学','溶液摩尔浓度核验'],
 'contents/m51014.md:6':['分析化学','葡萄糖定量配液'],
 'contents/m51034.md:5':['物理化学','冷热水混合量热'],
 'contents/m51034.md:6':['物理化学','热咖啡与银勺的能量守恒'],
 'contents/m51117.md:3':['分析化学','纯水非室温酸碱平衡'],
 'contents/m51117.md:5':['分析化学','强酸强碱 pH 与 pOH 勘误']
};
export function esc(text){
 return String(text).replace(/[\\{}$&#%_^~]/g,x=>({
  '\\':'\\textbackslash{}','{':'\\{','}':'\\}','%':'\\%',
  '$':'\\$','&':'\\&','#':'\\#','_':'\\_',
  '^':'\\textasciicircum{}','~':'\\textasciitilde{}'
 })[x]);
}
const ident=x=>x.source_path+':'+x.source_exercise_ordinal;
const fixedURL=x=>/^https:\/\/github\.com\/philschatz\/chemistry-book\/blob\/[a-f0-9]{40}\/contents\/m\d+\.md$/.test(x);
export function makeTex(science,chinese,old,pin){
 if(science?.reviewed_source_cases!==42||science.items?.length!==42||
  science.publishable!==0||science.rights_confirmations!==0||
  science.scholarly_human_confirmations!==0||
  chinese?.new_chinese_independent_derivations!==34||
  chinese.items?.length!==34||chinese.previous_full_chinese_drafts!==8||
  chinese.numeric_review_count!==42||
  chinese.edition_rights_unresolved!==true||
  chinese.reuse_rights_approved!==0||chinese.expert_approved!==0||
  chinese.released_for_exams!==0||
  old?.chinese_independently_recomputed_review_items!==8||
  old.imported_into_main_candidate_bank!==0||
  old.publishable!==0||old.expert_approved!==0||old.item_rights_approved!==0||
  pin?.edition_rights_conflict_pending!==true||
  pin.import_source_derived_exercises_into_main_prohibited!==true||
  pin.items_rights_auto_approved!==false||
  science.source_commit!==pin.commit||chinese.source_revision!==pin.commit)
   throw Error('Blocked rights/provenance gate: cannot generate release');
 const source=new Map();
 for(const q of science.items){
  const key=ident(q);
  if(source.has(key)||q.machine_computation_checked!==true||
   q.release_eligible!==false||q.source_item_rights_verified!==false||
   q.independent_human_chemist_review_completed!==false||
   !fixedURL(q.source_url)||
   q.source_url!=='https://github.com/'+pin.repository+'/blob/'+pin.commit+'/'+q.source_path)
   throw Error('Corrupted science source identity or unapproved item');
  source.set(key,q);
 }
 const translated=new Map();
 for(const ch of chinese.items){
  const key=ch.chapter_file+':'+ch.source_exercise_ordinal,q=source.get(key);
  if(translated.has(key)||!q||ch.source_id!==q.source_id||
   ch.source_url!==q.source_url||ch.source_question_sha256!==q.question_sha256||
   ch.independent_solution_steps_zh?.length!==3||
   ch.computed_answers?.length!==q.independently_calculated_results.length||
   ch.human_science_approval!==false||ch.individual_reuse_rights_approved!==false||
   ch.publishable!==false||ch.is_full_question_translation!==false||
   ch.computed_answers.some((v,i)=>!Number.isFinite(v.value)||
     Math.abs(v.value-q.independently_calculated_results[i])>
       Math.max(1e-27,Math.abs(v.value)*1e-11)))
   throw Error('Stale Chinese derivation or source rights status');
  translated.set(key,ch);
 }
 const legacy=science.items.filter(q=>!translated.has(ident(q)));
 if(legacy.length!==8||legacy.some(q=>!LEGACY[ident(q)]))
   throw Error('Original 8 reviewed cards no longer match');
 const groups=new Map([['无机化学',[]],['分析化学',[]],['物理化学',[]],['有机化学',[]]]);
 for(const q of science.items){
  const ch=translated.get(ident(q)),lg=LEGACY[ident(q)];
  const category=ch?.subject||lg?.[0];
  if(!groups.has(category))throw Error('Invalid course taxonomy');
  groups.get(category).push({q,ch,title:ch?.topic||lg?.[1]});
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
 '\\setlength{\\parskip}{0.4em}',
 '\\setlength{\\headheight}{16pt}',
 '\\setlist[enumerate]{itemsep=0.3em,topsep=0.3em}',
 '\\pagestyle{fancy}',
 '\\fancyhf{}',
 '\\fancyhead[L]{化学教材来源独立数值质检}',
 '\\fancyhead[R]{研究隔离 · 未经授权}',
 '\\fancyfoot[C]{\\thepage}',
 '\\sloppy',
 '\\title{大学化学数值复核质检册\\\\[0.4em]\\large 42 道来源固定的科学核验记录}',
 '\\author{三千弱水 · 化学题库研究记录}',
 '\\date{2026 年 10 月}',
 '\\begin{document}',
 '\\frontmatter',
 '\\maketitle',
 '\\chapter*{版权及科学审核声明}',
 '本册仅供内部学术核验，不复制原教材习题全文，不属于已授权中文翻译，也不提供可直接出版的题库。所有原文请打开每题的源文件链接。',
 '其中 42 道有独立数值复算；34 道有三步中文计算评论；8 道为复核摘要。来源作品版本、单题内容权利、专家科学审核均未完成，禁止公开发布或用于正式组卷。',
 '检测到 3 项参考答案标签或题号问题，以及 1 项化学式疑似笔误，仅作为待审事实记录。',
 '\\tableofcontents',
 '\\mainmatter'
 ];
 for(const [subject,cards] of groups){
  if(!cards.length)continue;
  lines.push('\\chapter{'+esc(subject)+'}');
  cards.sort((a,b)=>a.q.source_path.localeCompare(b.q.source_path)||
    a.q.source_exercise_ordinal-b.q.source_exercise_ordinal);
  for(const {q,ch,title} of cards){
   lines.push('\\section{'+esc(title)+'}',
    '\\noindent\\textbf{来源章节：} '+esc(q.source_path)+
      '；序号 '+q.source_exercise_ordinal+'。\\par',
    '\\noindent\\textbf{原文链接：} \\url{'+q.source_url+'}\\par',
    '\\noindent\\textbf{固定 ID：} \\texttt{'+esc(q.source_id)+'}\\par');
   if(q.issue)lines.push('\\textbf{参考答案差异：} '+esc(q.issue)+'\\par');
   if(q.source_question_typo)
    lines.push('\\textbf{化学式原文疑点：} '+esc(q.source_question_typo)+'\\par');
   if(!q.source_answer_present)
    lines.push('\\textbf{无教材参考答案：} 数值已独立求取，尚待人工复核。\\par');
   if(ch){
    lines.push('\\subsection*{独立中文推导}','\\begin{enumerate}');
    for(const step of ch.independent_solution_steps_zh)lines.push('\\item '+esc(step));
    lines.push('\\end{enumerate}');
    lines.push('\\subsection*{结果与单位}');
    for(const val of ch.computed_answers)
     lines.push('\\noindent '+esc(val.label)+'：\\texttt{'+esc(Number(val.value).toPrecision(7))+
      '} '+esc(val.unit==='无量纲'?'':val.unit)+'\\par');
   }else{
    lines.push('\\subsection*{数值审查摘要}',esc(q.independent_method||'独立数学复算'));
    for(const number of q.independently_calculated_results)
     lines.push('\\noindent 计算值：\\texttt{'+esc(Number(number).toPrecision(7))+'}\\par');
   }
   lines.push('\\noindent\\textit{待审核：科学专家审校、版本授权、单题版权、翻译及编排。不可用于正式出卷。}',
    '\\medskip\\hrule\\medskip');
  }
 }
 lines.push('\\backmatter',
 '\\chapter*{人工质量核验清单}',
 '每题均须检查来源版本、化学式、假设与边界、量纲、有效数字、异常答案标签、第三方授权。机器反算不能替代专家审核。',
 '\\end{document}','');
 const tex=lines.join('\n');
 if((tex.match(/\\section\{/g)||[]).length!==42||
    (tex.match(/\\begin\{enumerate\}/g)||[]).length!==34)
  throw Error('Incorrect number of science cards');
 return tex;
}
export function run(){
 const load=x=>JSON.parse(readFileSync(join(DIR,x),'utf8'));
 const s=load('independent_numeric_review.json'),
  c=load('chinese_independent_derivations.json'),
  o=load('chinese_science_review.json'),
  p=JSON.parse(readFileSync(join(ROOT,'harvest/pinned_openstax_chemistry.json'),'utf8'));
 const tex=makeTex(s,c,o,p),dest=join(DIR,'reports/chemistry_source_science_audit.tex');
 mkdirSync(dirname(dest),{recursive:true});
 if(!existsSync(dest)||readFileSync(dest,'utf8')!==tex)writeFileSync(dest,tex);
 console.log('Generated 42 research-only source cards (34 detailed, 8 abbreviated) to '+dest);
 return dest;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
