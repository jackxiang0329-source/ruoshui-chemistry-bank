#!/usr/bin/env node
// Offline, reproducible import from 18 manually scoped, pinned upstream CC BY 4.0 cards.
// The source license covers Cycles questions, but NOT third-party redox measurements.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const FIXTURE=join(ROOT,'harvest','pinned_photoredox_quenching.json');
const REPO='ChemTrain/photoredox-learn';
const COMMIT='260cf0553b42fc510de655d68bad902af7f94e38';
const HTML_SHA='5351d56c165fd581edbc66e71f80c3a42bcdb738';
const CONTENT_SHA='03a3851d5f826d709b5e31f0718e102363fa6860';
const CODE_SHA='f12f837df6513709d7d6e8234f9d9427d81d1627';
const ANSWERS={
 'Oxidative quenching':'氧化淬灭',
 'Reductive quenching':'还原淬灭',
 'Energy transfer':'能量转移'
};
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');

export function validatePinned(data){
 if(!data||data.schema_version!==1||data.repository!==REPO||data.commit!==COMMIT||
    data.source_file!=='photoredox_learn.html'||data.source_git_blob_sha!==HTML_SHA||
    data.source_deck!=='quench'||data.source_correct_option_index!==0||
    data.source_questions!==18||data.content_license!=='CC BY 4.0'||
    data.content_license_git_blob_sha!==CONTENT_SHA||data.code_license!=='MIT'||
    data.code_license_git_blob_sha!==CODE_SHA||
    !data.attribution?.includes('Quentin Bindschaedler')||
    !Array.isArray(data.cards)||data.cards.length!==18)throw Error('Pinned license/source manifest mismatch');
 const seen=new Set();
 for(let i=0;i<18;i++){
  const c=data.cards[i];
  if(c.source_question_number!==i+1||!c.original_name||!c.conditions||
     c.original_name.length>250||c.conditions.length>700||
     !Object.hasOwn(ANSWERS,c.correct_label)||
     !c.literature_reference||c.literature_reference.length>300||
     (c.literature_url!==null&&
       (typeof c.literature_url!=='string'||!c.literature_url.startsWith('https://')))||
     /[−+-]\d+(?:\.\d+)?\s*(?:eV|V)(?:\b|$)/i.test(c.conditions)||
     'note' in c||'potential' in c||'mol' in c)
     throw Error('Unlicensed, incomplete or malformed card '+(i+1));
  const key=norm(c.original_name)+'|'+norm(c.conditions);
  if(seen.has(key))throw Error('Duplicate original cycle card: '+key);
  seen.add(key);
 }
 return data;
}
export function makeQuestions(data){
 validatePinned(data);
 const rows=data.cards.map(c=>{
  const question='有机化学·光氧化还原催化：Photoredox Learn 中的反应“'+c.original_name+
   '”采用如下条件：'+c.conditions+
   '。根据该来源所列反应机理，激发态光催化剂的初始过程属于氧化淬灭、还原淬灭还是能量转移？（请回答主要机理类型；原论文机理仍待专家复核。）';
  return {schema_version:1,id:questionId(question),subject:'organic',
   topic:'photoredox_catalytic_cycle',level:'upper_undergraduate',
   question_type:'photoredox_initial_quenching_mechanism',
   question,answer:ANSWERS[c.correct_label],
   source_answer_en:c.correct_label,
   source:{repository:REPO,commit:COMMIT,file:'photoredox_learn.html',
    git_blob_sha:HTML_SHA,deck_id:'quench',
    deck_question_number:c.source_question_number,
    original_id:'quench-'+c.source_question_number,
    original_name:c.original_name,
    original_reference:c.literature_reference,
    original_reference_url:c.literature_url,
    license:'CC BY 4.0',code_license:'MIT',attribution:data.attribution,
    license_evidence:'https://github.com/'+REPO+'/blob/'+COMMIT+'/LICENSE-CONTENT.md',
    url:'https://github.com/'+REPO+'/blob/'+COMMIT+'/photoredox_learn.html',
    content_rights_verified:true,
    changes:'Chinese question based on licensed ChemTrain Cycles card; omits source notes, experimental potentials, structure drawings and article text.'},
   quality_status:'awaiting_expert_review',publishable:false};
 });
 if(new Set(rows.map(r=>r.id)).size!==18)throw Error('Duplicate generated question IDs');
 return rows;
}
export function run(){
 const data=JSON.parse(readFileSync(FIXTURE,'utf8'));
 const rows=makeQuestions(data);
 const dir=join(ROOT,'data','candidates');mkdirSync(dir,{recursive:true});
 let added=0,skipped=0;
 for(const row of rows){
  const dest=join(dir,row.id+'.json');
  if(existsSync(dest)){skipped++;continue;}
  writeFileSync(dest,JSON.stringify(row,null,2)+'\n');added++;
 }
 const counts={oxidative:rows.filter(x=>x.source_answer_en==='Oxidative quenching').length,
  reductive:rows.filter(x=>x.source_answer_en==='Reductive quenching').length,
  energy_transfer:rows.filter(x=>x.source_answer_en==='Energy transfer').length};
 const report={schema_version:1,source_repository:REPO,source_commit:COMMIT,
  source_html_git_blob_sha:HTML_SHA,content_license:'CC BY 4.0',
  content_license_git_blob_sha:CONTENT_SHA,code_license:'MIT',
  code_license_git_blob_sha:CODE_SHA,source_deck:'quench',
  source_question_objects:18,eligible_distinct_questions:18,
  categories:counts,subject:'organic',quality_status:'awaiting_expert_review',
  publishable:false,third_party_measurements_imported:0,
  note:'18 adapted Cycles questions from a single CC BY 4.0 source deck; not 18 independent upstream repositories or expert-verified chemistry answers.'};
 const path=join(ROOT,'harvest','import_reports','chemtrain_photoredox_quench.json');
 mkdirSync(dirname(path),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==content)writeFileSync(path,content);
 const message='Photoredox Learn CC BY 4.0 quenching cycles: eligible=18, new='+added+
  ', already_present='+skipped+', expert_approved=0; no third-party measured potentials copied.';
 console.log(message);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,
  '### Photoredox Learn (pinned CC BY 4.0)\n- '+message+'\n');
 return {added,skipped,eligible:rows.length};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('Photoredox import blocked:',e.stack);process.exitCode=1;}
}
