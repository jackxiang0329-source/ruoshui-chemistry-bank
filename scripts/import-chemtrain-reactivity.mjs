#!/usr/bin/env node
// Text-only pinned CC BY 4.0 Reactivity Learn regioselectivity adaptations.
// Explicitly excludes Mayr experimental parameters and all molecule drawings.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE='ChemTrain/reactivity-learn';
const COMMIT='be6505465d92fc983aabc40bd9863de791b0d2cf';
const HTML_BLOB='9779b9167ff4af2445a1efe845db3119928f6d12';
const LICENSE_BLOB='b1392cba296c88644742175533500dcd2ffd106a';
const CODE_BLOB='f12f837df6513709d7d6e8234f9d9427d81d1627';
const ATTR='Reactivity Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/reactivity-learn, licensed under CC BY 4.0.';
const PICKS={arom:[0,1,2,3,4,5,9,10,11,12,14,15,16,17,18],carbonyl:[0],rings:[0,1,2],alcohols:[7]};
const LETTERS='ABCD';
const norm=x=>String(x).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=q=>createHash('sha256').update(norm(q)).digest('hex');
export function validateFixture(d){
 if(!d||d.schema_version!==1||d.repository!==SOURCE||d.commit!==COMMIT||
 d.source_file!=='reactivity_learn.html'||d.source_git_blob_sha!==HTML_BLOB||
 d.content_license!=='CC BY 4.0'||d.content_license_file!=='LICENSE-CONTENT.md'||
 d.content_license_git_blob_sha!==LICENSE_BLOB||d.code_license!=='MIT'||
 d.code_license_file!=='LICENSE'||d.code_license_git_blob_sha!==CODE_BLOB||
 d.attribution!==ATTR||d.source_regio_questions!==61||d.selected_questions!==20||
 d.excluded_questions!==41||d.mayr_measured_values_imported!==0||
 d.molecule_drawings_imported!==0||!Array.isArray(d.cards)||d.cards.length!==20)
 throw Error('Pinned Reactivity Learn source and license mismatch');
 const byGroup={arom:[],carbonyl:[],rings:[],alcohols:[]},seen=new Set();
 for(const card of d.cards){
  if(!Object.hasOwn(PICKS,card.group_id)||!Number.isInteger(card.source_index)||
   !card.source_name||typeof card.source_name!=='string'||card.source_name.length>150||
   !card.conditions||typeof card.conditions!=='string'||card.conditions.length>180||
   typeof card.ask!=='string'||card.ask.length>200||
   !Array.isArray(card.options)||card.options.length<2||card.options.length>4||
   card.options.some(x=>typeof x!=='string'||!x.trim()||x.length>100)||
   new Set(card.options.map(norm)).size!==card.options.length||
   typeof card.source_explanation_en!=='string'||card.source_explanation_en.length<30||
   card.source_explanation_en.length>800||typeof card.hard!=='boolean'||
   Object.hasOwn(card,'mol')||Object.hasOwn(card,'value')||Object.hasOwn(card,'e0'))
   throw Error('Unsafe or ambiguous Reactivity Learn text card');
  const key=card.group_id+':'+card.source_index;
  if(seen.has(key))throw Error('Repeated source card '+key);
  seen.add(key);byGroup[card.group_id].push(card.source_index);
 }
 for(const [group,indices] of Object.entries(PICKS))
  if(JSON.stringify(byGroup[group])!==JSON.stringify(indices))
   throw Error('Unexpected curated indices in '+group);
 return d;
}
function askFor(card){
 if(card.group_id==='arom')return card.ask||'该反应主要发生在芳香环的哪个位置？';
 if(card.group_id==='rings')return '该反应中，亲核试剂主要进攻环氧环的哪个碳？';
 if(card.group_id==='carbonyl')return '优先从哪个 α-碳去质子化形成烯醇盐？';
 if(card.group_id==='alcohols')return '哪个羟基优先被氧化？';
 throw Error('Unexpected subject');
}
export function makeQuestions(d){
 validateFixture(d);
 const rows=d.cards.map((card,i)=>{
  // Upstream first label is the correct one. Rotate without altering that relationship.
  const opts=card.options.map((value,j)=>({text:value,source_index:j}));
  const shift=i%opts.length,ordered=opts.slice(shift).concat(opts.slice(0,shift));
  const correct=ordered.findIndex(x=>x.source_index===0);
  if(correct<0)throw Error('Missing source answer');
  const question='有机化学·区域选择性（Reactivity Learn 改编）：底物 '+card.source_name+
   '，试剂及条件 '+card.conditions+'。'+askFor(card)+'（请选择通常的主要反应位点。）\n'+
   ordered.map((x,j)=>LETTERS[j]+'. '+x.text).join('\n');
  return {schema_version:1,id:questionId(question),subject:'organic',
   topic:card.group_id==='arom'?'aromatic_regioselectivity':
     card.group_id==='rings'?'epoxide_ring_opening':
     card.group_id==='carbonyl'?'enolate_regioselectivity':'alcohol_chemoselectivity',
   level:'undergraduate',question_type:'single_choice_regioselectivity',
   question,answer:LETTERS[correct]+'. '+ordered[correct].text,
   correct_option:LETTERS[correct],
   options:ordered.map((x,j)=>({key:LETTERS[j],text:x.text})),
   explanation:'来源英文解析（待专业审校）：'+card.source_explanation_en,
   source:{repository:SOURCE,commit:COMMIT,file:'reactivity_learn.html',
    git_blob_sha:HTML_BLOB,source_group_id:card.group_id,
    source_question_index:card.source_index,source_name:card.source_name,
    license:'CC BY 4.0',code_license:'MIT',attribution:ATTR,
    license_evidence:'https://github.com/'+SOURCE+'/blob/'+COMMIT+'/LICENSE-CONTENT.md',
    license_git_blob_sha:LICENSE_BLOB,
    url:'https://github.com/'+SOURCE+'/blob/'+COMMIT+'/reactivity_learn.html',
    content_rights_verified:true,original_exam_question:false,
    changes:'Chinese text-only site-selectivity MCQ adapted from author-licensed card; options rotated; no molecular images, Mayr experimental N/sN/E values or outside articles redistributed.'},
   quality_status:'awaiting_expert_review',publishable:false};
 });
 if(new Set(rows.map(x=>x.id)).size!==rows.length)throw Error('Repeated generated question');
 return rows;
}
export function run(){
 const fixture=JSON.parse(readFileSync(join(ROOT,'harvest','pinned_reactivity_regioselectivity.json'),'utf8'));
 const rows=makeQuestions(fixture),out=join(ROOT,'data','candidates');
 // Check every collision before writing anything. Existing answers and provenance are immutable.
 for(const row of rows){
  const path=join(out,row.id+'.json');
  if(!existsSync(path))continue;
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.id!==row.id||norm(old.question)!==norm(row.question)||old.answer!==row.answer||
    old.subject!==row.subject||old.source?.repository!==SOURCE||
    old.source?.commit!==COMMIT||old.publishable!==false||
    old.quality_status!=='awaiting_expert_review')
   throw Error('Existing question ID/answer/source conflict: '+row.id);
 }
 mkdirSync(out,{recursive:true});
 let added=0,alreadyPresent=0;
 for(const row of rows){
  const path=join(out,row.id+'.json');
  if(existsSync(path)){alreadyPresent++;continue;}
  writeFileSync(path,JSON.stringify(row,null,2)+'\n');added++;
 }
 const report={schema_version:1,source_repository:SOURCE,source_commit:COMMIT,
  source_html_git_blob_sha:HTML_BLOB,source_content_license_git_blob_sha:LICENSE_BLOB,
  content_license:'CC BY 4.0',code_license:'MIT',source_regio_questions:61,
  curated_source_questions:20,excluded_source_questions:41,
  generated_candidate_questions:rows.length,by_subject:{organic:rows.length},
  mayr_measured_values_imported:0,molecule_drawings_imported:0,
  review_status:'awaiting_expert_review',publishable:false,
  note:'20 curated text-only questions adapted from 61 regioselectivity source questions. Mayr measurements, molecule diagrams and third-party articles excluded. Expert chemistry and semantic duplicate review pending.'};
 const path=join(ROOT,'harvest','import_reports','chemtrain_reactivity_regioselectivity.json');
 mkdirSync(dirname(path),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==content)writeFileSync(path,content);
 const msg='Reactivity Learn: source=61; curated=20; added='+added+
  '; already_present='+alreadyPresent+'; excluded=41; expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)
  appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Reactivity Learn CC BY 4.0 regioselectivity\n- '+msg+'\n');
 return {added,alreadyPresent,eligible:rows.length};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('Reactivity Learn import blocked:',e.stack);process.exitCode=1;}
}
