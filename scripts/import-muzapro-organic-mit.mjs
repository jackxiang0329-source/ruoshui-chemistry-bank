#!/usr/bin/env node
// MIT-licensed upstream organic reaction quiz: conservative, text-only Chinese adaptations.
import {readFileSync,readdirSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const repo='MuzaPro/Organic-Chemistry-Quiz-JS';
const ref='71f3262bce0eba6c7e1cb0814394f1e04b6a9dbc';
const dataSha='e4fde59d9f5faa1ff0ed82fa57ae7b05f276292a';
const licenseSha='4ef30f44a9a6ade70614188412f98c76aaa3b14e';
const allowed=['q1','q3','q5'];
const norm=s=>String(s||'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
export const hashQuestion=s=>createHash('sha256').update(norm(s)).digest('hex');
export function makeQuestions(p){
 if(p?.schema_version!==1||p.repository!==repo||p.source_commit!==ref||
  p.source_path!=='data/questions.json'||p.source_blob_sha!==dataSha||
  p.license!=='MIT'||p.license_blob_sha!==licenseSha||
  p.copyright!=='Copyright (c) 2025 Muza Studio'||p.original_source_count!==5||
  JSON.stringify(p.selected_source_ids)!==JSON.stringify(allowed)||
  JSON.stringify(p.excluded_source_ids)!==JSON.stringify(['q2','q4'])||
  !p.excluded_reasons?.q2||!p.excluded_reasons?.q4||
  !Array.isArray(p.items)||p.items.length!==allowed.length)
  throw Error('Unverified MIT source or unexpected pinned quiz selection');
 const seen=new Set();
 return p.items.map((x,i)=>{
  if(x.source_id!==allowed[i]||!x.source_question?.trim()||!x.source_product?.trim()||
   !x.source_formula?.trim()||x.source_correct_reagents?.length!==2||
   !x.topic?.startsWith('organic_')||!x.question?.startsWith('有机化学·')||
   !Array.isArray(x.options)||x.options.length!==4||!x.correct_option||
   !x.answer?.startsWith(x.correct_option+'. ')||!x.explanation?.trim()||
   x.options.some((s,k)=>!s.startsWith('ABCD'[k]+'. '))||
   x.question.length>500||x.explanation.length>900)throw Error('Invalid pinned organic exercise '+x.source_id);
  if(x.source_id==='q1'&&(x.source_formula!=='CH3OCH2CH3'||
   x.source_correct_reagents.join(',')!=='sodium-methoxide,bromoethane'||
   x.correct_option!=='B'||!x.explanation.includes('NaBr')))throw Error('Williamson reaction validation failed');
  if(x.source_id==='q3'&&(x.source_formula!=='C4H8'||
   x.source_correct_reagents.join(',')!=='potassium-tert-butoxide,2-bromo-2-methylpropane'||
   x.correct_option!=='B'||!x.explanation.includes('β-H')))throw Error('E2 reaction validation failed');
  if(x.source_id==='q5'&&(x.source_formula!=='C8H10O'||
   x.source_correct_reagents.join(',')!=='phenylmagnesium-bromide,ethylene-oxide'||
   x.correct_option!=='C'||!x.question.includes('酸性水解')||!x.explanation.includes('PhCH₂CH₂OH')))
   throw Error('Grignard workup and product validation failed');
  const id=hashQuestion(x.question);
  if(seen.has(id))throw Error('Duplicate question hash');seen.add(id);
  return {schema_version:1,id,subject:'organic',topic:x.topic,level:'undergraduate',
   question_type:'licensed_adapted_organic_reaction_mcq',resource_type:'exercise_candidate',
   question:x.question,options:x.options,answer:x.answer,explanation:x.explanation,
   quality_status:'awaiting_expert_review',publishable:false,semantic_duplicate_review_pending:true,
   source:{repository:repo,commit:ref,file:'data/questions.json',git_blob_sha:dataSha,
    original_id:x.source_id,original_question_text:x.source_question,original_product:x.source_product,
    original_product_formula:x.source_formula,original_correct_reagent_ids:x.source_correct_reagents,
    license:'MIT',license_git_blob_sha:licenseSha,
    license_evidence:'https://github.com/'+repo+'/blob/'+ref+'/LICENSE',
    url:'https://github.com/'+repo+'/blob/'+ref+'/data/questions.json',
    attribution:'Copyright (c) 2025 Muza Studio, Organic Chemistry Quiz JS (MIT). Chinese questions and explanations adapted; no source images copied.',
    content_rights_verified:true,source_repository_question:true,
    modifications:'Adapted three source reaction-selection prompts into Chinese single-choice text questions with independent chemical explanations. Grignard problem explicitly adds anhydrous conditions and acidic workup; excludes images and HTML.'}};
 });
}
export function run(){
 const p=JSON.parse(readFileSync(join(root,'harvest','pinned_muzapro_organic_quiz.json'),'utf8'));
 const questions=makeQuestions(p),dest=join(root,'data','candidates');
 const all=existsSync(dest)?readdirSync(dest).filter(x=>x.endsWith('.json')):[];
 const wanted=new Map(questions.map(x=>[x.id,x]));
 let present=0;
 for(const name of all){
  const old=JSON.parse(readFileSync(join(dest,name),'utf8'));
  const expected=wanted.get(old.id);
  if(expected){
   if(old.question!==expected.question||old.answer!==expected.answer||
    old.source?.repository!==repo||old.source?.original_id!==expected.source.original_id||
    old.publishable!==false||old.quality_status!=='awaiting_expert_review')
    throw Error('Existing candidate with same ID has conflicting data '+old.id);
   present++;continue;
  }
  if(questions.some(x=>norm(x.question)===norm(old.question)))
   throw Error('Identical question text already imported with different ID');
  if(old.source?.repository===repo&&allowed.includes(old.source.original_id))
   throw Error('Source question ID previously imported with different text '+old.source.original_id);
 }
 mkdirSync(dest,{recursive:true});
 let added=0;
 for(const q of questions){
  const path=join(dest,q.id+'.json');if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;
 }
 const path=join(root,'harvest','import_reports','muzapro_mit_organic_quiz.json');
 mkdirSync(dirname(path),{recursive:true});
 const report={schema_version:1,repository:repo,commit:ref,source_blob_sha:dataSha,
  license:'MIT',license_blob_sha:licenseSha,original_questions_available:5,
  imported_source_question_ids:allowed,excluded_source_question_ids:['q2','q4'],
  initial_import_added:added,initial_import_already_present:present,
  copied_media_assets:0,subject:'organic',independently_reviewed_for_obvious_reaction_errors:true,
  expert_approved:0,publishable:false,quality_status:'awaiting_expert_review',
  note:'Three text-only Chinese MIT-licensed adaptations of source reaction-selection prompts. Not certified as published examination problems; source q2 and q4 excluded due condition ambiguities.'};
 if(existsSync(path)){
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.commit!==ref||JSON.stringify(old.imported_source_question_ids)!==JSON.stringify(allowed))
   throw Error('Existing organic source report conflicts');
 }else writeFileSync(path,JSON.stringify(report,null,2)+'\n');
 const summary='MIT MuzaPro organic text-only adapted exercises: eligible=3 added='+added+
 ', already_present='+present+', excluded=2, expert_approved=0';
 console.log(summary);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,summary+'\n');
 return {added,present};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
