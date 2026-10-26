#!/usr/bin/env node
// Reproducible CC BY 4.0 ChemTrain PG Learn source-data adaptation.
// Uses a pinned, narrowly extracted chart fixture; never executes upstream HTML.
// The original compatibility chart is educational, not a validated experimental protocol.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const FIXTURE=join(ROOT,'harvest','pinned_pg_learn_deprotection.json');
const REPO='ChemTrain/pg-learn';
const REV='b232355d130198e4f6519388201c65e7359238e0';
const HTML_BLOB='7763f186d6453ec9b65b5f9e7aefb06a100a5279';
const CONTENT_BLOB='12cc62b715826eec57a9830d8a5bfaaf952218f4';
const CODE_BLOB='f12f837df6513709d7d6e8234f9d9427d81d1627';
const ATTRIBUTION='PG Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/pg-learn, licensed under CC BY 4.0.';
const EXPECTED_GROUP_IDS='tbs,tbdps,bn,pmb,mom,thp,ac,bz,cbz,me_ester,bn_ester,tips,mem,nap,trityl,benzylidene,tipds,dimethyl_acetal,tfac,tms_alkyne,tips_alkyne,aryl_bn'.split(',');
const LETTERS='ABCD';
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');

export function validateFixture(d){
 if(!d||d.schema_version!==1||d.repository!==REPO||d.commit!==REV||
    d.source_file!=='pg_learn.html'||d.source_git_blob_sha!==HTML_BLOB||
    d.source_license_file!=='LICENSE-CONTENT.md'||d.source_license_git_blob_sha!==CONTENT_BLOB||
    d.code_license_file!=='LICENSE'||d.code_license_git_blob_sha!==CODE_BLOB||
    d.content_license!=='CC BY 4.0'||d.code_license!=='MIT'||
    d.attribution!==ATTRIBUTION||d.source_groups_total!==44||
    d.source_conditions_total!==22||d.eligible_groups!==22||
    !Array.isArray(d.cards)||d.cards.length!==22)
   throw Error('Pinned PG Learn source/license manifest mismatch');
 const seen=new Set();
 for(let i=0;i<d.cards.length;i++){
  const c=d.cards[i];
  if(c.group_id!==EXPECTED_GROUP_IDS[i]||
     typeof c.group_name!=='string'||!c.group_name.trim()||c.group_name.length>120||
     typeof c.group_what!=='string'||c.group_what.length>120||
     !Array.isArray(c.standard_condition_ids)||!c.standard_condition_ids.includes(c.correct_condition_id)||
     !Array.isArray(c.options)||c.options.length!==4)
    throw Error('Malformed group or standard deprotection: '+i);
  if(seen.has(c.group_id))throw Error('Repeated protecting group: '+c.group_id);
  seen.add(c.group_id);
  const optIds=new Set();
  let removal=0,stable=0;
  for(const opt of c.options){
   if(typeof opt.id!=='string'||!/^[a-z0-9_]+$/.test(opt.id)||
      typeof opt.label!=='string'||!opt.label.trim()||opt.label.length>100||
      opt.core!==true||opt.source_note_present!==false||
      !['X','.'].includes(opt.chart_cell)||optIds.has(opt.id))
     throw Error('Unsafe/ambiguous source chart cell: '+c.group_id);
   optIds.add(opt.id);
   if(opt.chart_cell==='X'){
    removal++;
    if(opt.id!==c.correct_condition_id)throw Error('Wrong source standard removal key');
   }else stable++;
  }
  if(removal!==1||stable!==3)throw Error('Not a unique 1-of-4 chart question: '+c.group_id);
 }
 return d;
}
export function makeQuestions(data){
 validateFixture(data);
 const rows=data.cards.map((c,i)=>{
  // Deterministic rotation balances A/B/C/D without modifying source labels.
  const rotation=i%4,ordered=c.options.slice(4-rotation).concat(c.options.slice(0,4-rotation));
  const correct=ordered.findIndex(o=>o.id===c.correct_condition_id);
  if(correct<0||ordered[correct].chart_cell!=='X')throw Error('Missing correct condition');
  const question='有机化学·保护基脱除（PG Learn 教学兼容性表）：对“'+c.group_name+
   '”保护基，在以下四组给定条件中，哪一组被原表明确标为可脱除（X），而其他三组均标为保留（.）？'+
   '（仅按该来源的标准条件与表格判定；实际实验结果依底物和条件而变。）\n'+
   ordered.map((o,j)=>LETTERS[j]+'. '+o.label).join('\n');
  const answer=LETTERS[correct]+'. '+ordered[correct].label;
  return {schema_version:1,id:questionId(question),subject:'organic',
   topic:'protecting_group_deprotection',level:'upper_undergraduate',
   question_type:'single_choice_chart_compatibility',question,answer,
   correct_option:LETTERS[correct],correct_condition_id:c.correct_condition_id,
   explanation:'PG Learn 的兼容性表中，'+c.group_name+' 与 '+ordered[correct].label+
    ' 对应 X（脱除）；其他三个备选条件对应 .（保留）。表格用于教学，不能替代具体底物的文献验证。',
   options:ordered.map((o,j)=>({key:LETTERS[j],text:o.label,source_chart_cell:o.chart_cell})),
   source:{repository:REPO,commit:REV,file:'pg_learn.html',git_blob_sha:HTML_BLOB,
    original_group_id:c.group_id,original_group_name:c.group_name,
    original_group_deprotects_to:c.group_what,source_standard_condition_id:c.correct_condition_id,
    source_chart_cells:Object.fromEntries(c.options.map(o=>[o.id,o.chart_cell])),
    license:'CC BY 4.0',code_license:'MIT',attribution:ATTRIBUTION,
    license_evidence:'https://github.com/'+REPO+'/blob/'+REV+'/LICENSE-CONTENT.md',
    license_git_blob_sha:CONTENT_BLOB,
    url:'https://github.com/'+REPO+'/blob/'+REV+'/pg_learn.html',
    content_rights_verified:true,
    changes:'One Chinese multiple-choice question adapted from the CC BY 4.0 protecting-group compatibility chart; options limited to one explicitly X standard CORE condition and three explicitly stable CORE conditions; no molecular drawings, external papers, logo, or measured data copied.'},
   quality_status:'awaiting_expert_review',publishable:false};
 });
 if(new Set(rows.map(r=>r.id)).size!==rows.length)throw Error('Generated duplicate question IDs');
 return rows;
}
export function run(){
 const data=JSON.parse(readFileSync(FIXTURE,'utf8'));
 const rows=makeQuestions(data);
 const dir=join(ROOT,'data','candidates');mkdirSync(dir,{recursive:true});
 let added=0,alreadyPresent=0;
 for(const row of rows){
  const path=join(dir,row.id+'.json');
  if(existsSync(path)){
   const old=JSON.parse(readFileSync(path,'utf8'));
   if(old.id!==row.id||old.question!==row.question||old.answer!==row.answer||
      old.subject!=='organic'||old.publishable!==false||
      old.source?.repository!==REPO||old.source?.commit!==REV||
      old.quality_status!=='awaiting_expert_review')
     throw Error('Existing question ID conflict (refuse overwrite): '+row.id);
   alreadyPresent++;continue;
  }
  writeFileSync(path,JSON.stringify(row,null,2)+'\n');added++;
 }
 const report={schema_version:1,source_repository:REPO,source_commit:REV,
  source_html_git_blob_sha:HTML_BLOB,source_content_license_git_blob_sha:CONTENT_BLOB,
  content_license:'CC BY 4.0',code_license:'MIT',
  source_groups_total:44,source_conditions_total:22,
  eligible_unambiguous_groups:22,generated_candidate_questions:rows.length,
  by_subject:{organic:rows.length},question_type:'single_choice_chart_compatibility',
  quality_status:'awaiting_expert_review',publishable:false,
  excluded_source_groups:22,third_party_measurements_imported:0,
  note:'22 adapted educational questions from 22 original protecting-group chart rows; only explicit X vs . cells without notes; excludes ambiguous/conditional cells. Not expert validated, not laboratory guidance.'};
 const reportPath=join(ROOT,'harvest','import_reports','chemtrain_pg_learn.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const output=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==output)
  writeFileSync(reportPath,output);
 const message='PG Learn: source groups=44; eligible=22; added='+added+
  '; already_present='+alreadyPresent+'; expert_approved=0.';
 console.log(message);
 if(process.env.GITHUB_STEP_SUMMARY)
  appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### CC BY 4.0 PG Learn import\n- '+message+'\n');
 return {added,alreadyPresent,eligible:rows.length};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('PG Learn import blocked:',e.stack);process.exitCode=1;}
}
