#!/usr/bin/env node
// CC BY 4.0 qualitative pKa Learn adaptation. Only 20 curated text comparisons.
// The source's third-party measured/estimated pKa numbers are NOT redistributed.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const FIXTURE=join(ROOT,'harvest','pinned_pka_qualitative_sites.json');
const REPO='ChemTrain/pka-learn';
const REV='5250dce7a367be0e767b2e3e7a26aa50c27b12a0';
const HTML_BLOB='de1e8441908198301a7e82da76fd5febd9de8900';
const LICENSE_BLOB='bd1d90f0a381f9d0b0a903bf203828c1e2a05f91';
const CODE_BLOB='f12f837df6513709d7d6e8234f9d9427d81d1627';
const ATTR='pKa Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/pka-learn, licensed under CC BY 4.0.';
const PICKS={fg:[0,1,2,3,4,5,6,7,9,10],ch:[0,1,3,4,5,7],bio:[0,3,4,5]};
const LETTERS='ABCD';
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');

export function validateFixture(d){
 if(!d||d.schema_version!==1||d.repository!==REPO||d.commit!==REV||
  d.source_file!=='pka_learn.html'||d.source_git_blob_sha!==HTML_BLOB||
  d.source_license_file!=='LICENSE-CONTENT.md'||d.source_license_git_blob_sha!==LICENSE_BLOB||
  d.source_code_license_file!=='LICENSE'||d.source_code_license_git_blob_sha!==CODE_BLOB||
  d.content_license!=='CC BY 4.0'||d.code_license!=='MIT'||d.attribution!==ATTR||
  d.source_site_questions!==29||d.selected_questions!==20||d.excluded_questions!==9||
  d.third_party_numeric_values_imported!==0||d.structure_images_imported!==0||
  !Array.isArray(d.cards)||d.cards.length!==20)throw Error('Pinned source/license manifest mismatch');
 const seen=new Set(),found={fg:[],ch:[],bio:[]};
 for(const c of d.cards){
  if(!(c.group_id in PICKS)||!Number.isInteger(c.original_index)||
    typeof c.source_name!=='string'||!c.source_name.trim()||c.source_name.length>140||
    !(c.source_formula===null||typeof c.source_formula==='string')||
    !['w','d','x'].includes(c.source_solvent)||
    !Array.isArray(c.options)||c.options.length<2||c.options.length>4||
    !Number.isInteger(c.winner_index)||c.winner_index<0||c.winner_index>=c.options.length||
    typeof c.explanation_cn!=='string'||c.explanation_cn.trim().length<15||
    c.options.some(x=>typeof x!=='string'||!x.trim()||x.length>130)||
    new Set(c.options.map(norm)).size!==c.options.length)
    throw Error('Unsafe or malformed pKa qualitative comparison');
  const key=c.group_id+':'+c.original_index;
  if(seen.has(key))throw Error('Repeated source card '+key);
  seen.add(key);found[c.group_id].push(c.original_index);
  if(c.winner_index!==0)throw Error('Unexpected source winner; verify source pin');
 }
 for(const [k,v] of Object.entries(PICKS))
  if(JSON.stringify(found[k])!==JSON.stringify(v))throw Error('Unexpected curated card order: '+k);
 return d;
}
export function makeQuestions(d){
 validateFixture(d);
 const result=d.cards.map((c,i)=>{
  const shift=i%c.options.length;
  const initial=c.options.map((label,j)=>({label,original_index:j}));
  const ordered=initial.slice(shift).concat(initial.slice(0,shift));
  const correct=ordered.findIndex(x=>x.original_index===c.winner_index);
  if(correct<0)throw Error('Missing answer');
  const context=c.source_solvent==='d'?'DMSO 中':c.source_solvent==='w'?'水溶液中':'来源采用的教材近似条件下';
  const question='有机化学·分子内酸性位点比较（pKa Learn 改编）：在'+context+'，'+c.source_name+
   (c.source_formula?'（'+c.source_formula+'）':'')+
   ' 的下列质子中，通常哪一类最容易发生酸解离？（只比较给定位置，不要求写出 pKa 数值。）\n'+
   ordered.map((o,j)=>LETTERS[j]+'. '+o.label).join('\n');
  const answer=LETTERS[correct]+'. '+ordered[correct].label;
  return {schema_version:1,id:questionId(question),subject:'organic',topic:'qualitative_acidic_site',
   level:'undergraduate',question_type:'single_choice_acidic_proton',
   question,answer,correct_option:LETTERS[correct],
   options:ordered.map((o,j)=>({key:LETTERS[j],text:o.label})),
   explanation:c.explanation_cn,
   source:{repository:REPO,commit:REV,file:'pka_learn.html',git_blob_sha:HTML_BLOB,
    source_group_id:c.group_id,source_question_index:c.original_index,source_name:c.source_name,
    license:'CC BY 4.0',code_license:'MIT',attribution:ATTR,
    license_evidence:'https://github.com/'+REPO+'/blob/'+REV+'/LICENSE-CONTENT.md',
    license_git_blob_sha:LICENSE_BLOB,
    url:'https://github.com/'+REPO+'/blob/'+REV+'/pka_learn.html',
    content_rights_verified:true,original_exam_question:false,
    changes:'Chinese text-only qualitative comparison adapted from the author-licensed site question and explanation. No numeric pKa measurements, estimates, structures, logo or third-party text imported.'},
   quality_status:'awaiting_expert_review',publishable:false};
 });
 if(new Set(result.map(x=>x.id)).size!==result.length)throw Error('Duplicate generated question IDs');
 return result;
}
export function run(){
 const fixture=JSON.parse(readFileSync(FIXTURE,'utf8'));
 const rows=makeQuestions(fixture),dir=join(ROOT,'data','candidates');
 // Refuse collisions before creating any candidate, including a conflicting existing answer.
 for(const row of rows){
  const file=join(dir,row.id+'.json');
  if(!existsSync(file))continue;
  const old=JSON.parse(readFileSync(file,'utf8'));
  if(old.id!==row.id||norm(old.question)!==norm(row.question)||old.answer!==row.answer||
    old.subject!==row.subject||old.source?.repository!==REPO||old.source?.commit!==REV||
    old.publishable!==false||old.quality_status!=='awaiting_expert_review')
    throw Error('Existing candidate ID/answer/source conflict: '+row.id);
 }
 mkdirSync(dir,{recursive:true});
 let added=0,alreadyPresent=0;
 for(const row of rows){
  const file=join(dir,row.id+'.json');
  if(existsSync(file)){alreadyPresent++;continue;}
  writeFileSync(file,JSON.stringify(row,null,2)+'\n');added++;
 }
 const report={schema_version:1,source_repository:REPO,source_commit:REV,
  source_html_git_blob_sha:HTML_BLOB,source_content_license_git_blob_sha:LICENSE_BLOB,
  content_license:'CC BY 4.0',code_license:'MIT',
  source_site_questions:29,curated_source_questions:20,excluded_source_questions:9,
  generated_candidate_questions:rows.length,by_subject:{organic:rows.length},
  third_party_numeric_values_imported:0,structure_images_imported:0,
  review_status:'awaiting_expert_review',publishable:false,
  note:'20 text-only qualitative adaptations from 29 source multi-site questions; no third-party measured or estimated pKa values redistributed. Other source cards excluded. Expert chemistry review and semantic deduplication pending.'};
 const path=join(ROOT,'harvest','import_reports','chemtrain_pka_qualitative.json');
 mkdirSync(dirname(path),{recursive:true});
 const contents=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==contents)writeFileSync(path,contents);
 const msg='pKa Learn: upstream site questions=29; curated=20; added='+added+
  '; already_present='+alreadyPresent+'; excluded=9; expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)
  appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Pinned CC BY 4.0 pKa qualitative practice\n- '+msg+'\n');
 return {added,alreadyPresent,eligible:rows.length};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('pKa Learn import blocked:',e.stack);process.exitCode=1;}
}
