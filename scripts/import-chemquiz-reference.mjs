#!/usr/bin/env node
// Import narrowly whitelisted MIT reference facts as UNREVIEWED exercises.
// No upstream executable code is ever loaded.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='bem130/chemquiz',COMMIT='10b81d4c1b02847e3d9b64e8d44a960d10559ea3';
const BASE='third_party/chemquiz/';
const SOURCES={
 'LICENSE':'dcec41b508bd5bfbd0d44f3111a41bdee9a73c75',
 'dataset/metal_ions_and_colors.json':'51116f705badf81a99c4e08acd184cc5731c538e',
 'dataset/inorganic_polyatomic_ions.json':'1bb52d9f9399f1d1e47bb81be2b8d39ac05353a2'
};
const PRECIPITATES={
 'Cu2+':{'NaOH':'Cu(OH)2','NH3':'Cu(OH)2'},
 'Fe2+':{'NaOH':'Fe(OH)2'},
 'Fe3+':{'NaOH':'Fe(OH)3','NH3':'Fe(OH)3'},
 'Zn2+':{'NaOH':'Zn(OH)2','NH3':'Zn(OH)2'},
 'Al3+':{'NaOH':'Al(OH)3','NH3':'Al(OH)3'},
 'Ag+':{'Cl-':'AgCl','Br-':'AgBr','I-':'AgI'},
 'Pb2+':{'Cl-':'PbCl2','SO4^2-':'PbSO4'},
 'Ba2+':{'SO4^2-':'BaSO4','CO3^2-':'BaCO3'},
 'Ca2+':{'CO3^2-':'CaCO3'},
 'Ni2+':{'NaOH':'Ni(OH)2'},
 'Co2+':{'NaOH':'Co(OH)2'}
};
const REAGENT={
 'NaOH':'少量氢氧化钠水溶液（NaOH）',
 'NH3':'少量氨水（NH3·H2O）',
 'Cl-':'适量氯离子（Cl-）',
 'Br-':'适量溴离子（Br-）',
 'I-':'适量碘离子（I-）',
 'SO4^2-':'适量硫酸根离子（SO4^2-）',
 'CO3^2-':'适量碳酸根离子（CO3^2-）'
};
const licenseEvidence='https://github.com/'+REPO+'/blob/'+COMMIT+'/LICENSE';
const norm=t=>String(t).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=t=>createHash('sha256').update(norm(t)).digest('hex');
export const gitBlobSha=data=>createHash('sha1').update('blob '+data.length+'\0').update(data).digest('hex');
export function parseIonCharge(formula){
 const m=/\^(\d+)([+-])$|([^\^\s])([+-])$/.exec(formula);
 if(!m)throw Error('Ion charge missing: '+formula);
 const magnitude=m[1]?Number(m[1]):1,sign=m[2]||m[4];
 if(!Number.isInteger(magnitude)||magnitude<1||magnitude>4)throw Error('Unreasonable charge: '+formula);
 return magnitude*(sign==='+'?1:-1);
}
export function makeIonQuestions(ions){
 if(!Array.isArray(ions)||ions.length!==23)throw Error('Pinned ion list must have 23 entries');
 const names=new Set(),formulas=new Set(),out=[];
 for(const item of ions){
  const name=String(item.name_en||'').trim(),formula=String(item.formula||'').trim();
  if(!name||!formula||name.length>100||formula.length>60)throw Error('Invalid ion entry');
  if(names.has(norm(name))||formulas.has(formula))throw Error('Duplicate ion name or formula: '+name);
  names.add(norm(name));formulas.add(formula);
  if(!Number.isInteger(item.charge)||parseIonCharge(formula)!==item.charge)
   throw Error('Ion charge disagrees with formula: '+name);
  out.push({subject:'inorganic',topic:'polyatomic_ion_nomenclature',question_type:'ion_formula_and_charge',
   question:'无机化学基础：写出 '+name+' 离子的化学式（包含其电荷）。',answer:formula,
   original_id:name,source_file:'dataset/inorganic_polyatomic_ions.json'});
 }
 return out;
}
export function makePrecipitateQuestions(ions){
 if(!Array.isArray(ions))throw Error('Invalid metal ion list');
 const map=new Map();
 for(const ion of ions){
  if(map.has(ion.ion))throw Error('Duplicate cation: '+ion.ion);
  map.set(ion.ion,ion);
 }
 const out=[];
 for(const [cation,targets] of Object.entries(PRECIPITATES)){
  const entry=map.get(cation);
  if(!entry||!Array.isArray(entry.precipitates))throw Error('Missing pinned cation: '+cation);
  for(const [key,expected] of Object.entries(targets)){
   const found=entry.precipitates.filter(x=>String(x.reagent||'').startsWith(key));
   if(found.length!==1||found[0].precipitate_formula!==expected)
    throw Error('Unexpected qualitative reaction for '+cation+' + '+key);
   out.push({subject:'analytical',topic:'qualitative_cation_analysis',question_type:'precipitate_formula',
    question:'定性分析：向含有 '+cation+' 的稀水溶液中加入'+REAGENT[key]+'，初始形成的难溶沉淀化学式是什么？（忽略过量试剂引起的络合或溶解及空气氧化等后续过程。）',
    answer:expected,original_id:cation+'|'+key,source_file:'dataset/metal_ions_and_colors.json'});
  }
 }
 if(out.length!==19)throw Error('Unexpected precipitate count: '+out.length);
 return out;
}
export function makeQuestions(metal,polyatomic){
 const rows=[...makePrecipitateQuestions(metal.metal_ions),...makeIonQuestions(polyatomic.polyatomic_ions)];
 const seen=new Set();
 for(const row of rows){
  row.id=questionId(row.question);
  if(seen.has(row.id))throw Error('Duplicate generated question: '+row.id);
  seen.add(row.id);
 }
 return rows;
}
export function verifySources(){
 const lock=JSON.parse(readFileSync(join(ROOT,'third_party/UPSTREAM_LOCK.json'),'utf8'));
 const source=lock.sources?.find(x=>x.repo===REPO);
 if(!source||source.commit!==COMMIT||source.license!=='MIT')throw Error('Pinned source metadata mismatch');
 const data={};
 for(const [relative,sha] of Object.entries(SOURCES)){
  const full=BASE+relative,record=source.files?.find(x=>x.path===full);
  if(!record||record.sha!==sha)throw Error('Lock SHA mismatch: '+full);
  const bytes=readFileSync(join(ROOT,full));
  if(gitBlobSha(bytes)!==sha)throw Error('Vendored Git blob mismatch: '+full);
  data[relative]=bytes.toString('utf8');
 }
 if(!data.LICENSE.includes('MIT License')||!data.LICENSE.includes('Copyright (c) 2025 べむ')||
    !data.LICENSE.includes('Permission is hereby granted'))throw Error('MIT notice missing or altered');
 return {metal:JSON.parse(data['dataset/metal_ions_and_colors.json']),
   ions:JSON.parse(data['dataset/inorganic_polyatomic_ions.json'])};
}
export function run(){
 const {metal,ions}=verifySources();
 const rows=makeQuestions(metal,ions),destination=join(ROOT,'data/candidates');
 mkdirSync(destination,{recursive:true});
 let added=0,skipped=0;
 for(const row of rows){
  const file=join(destination,row.id+'.json');
  if(existsSync(file)){skipped++;continue;}
  const record={schema_version:1,id:row.id,subject:row.subject,topic:row.topic,
   level:'introductory_undergraduate',question_type:row.question_type,
   question:row.question,answer:row.answer,
   quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:REPO,commit:COMMIT,file:row.source_file,
    git_blob_sha:SOURCES[row.source_file],original_id:row.original_id,
    license:'MIT',attribution:'Copyright (c) 2025 べむ; chemquiz ('+REPO+'), MIT License',
    content_rights_verified:true,license_evidence:licenseEvidence,
    url:'https://github.com/'+REPO+'/blob/'+COMMIT+'/'+row.source_file,
    changes:'Chinese teaching prompt generated from MIT-licensed chemistry reference fields; no upstream notes or images copied.'}};
  writeFileSync(file,JSON.stringify(record,null,2)+'\n');added++;
 }
 const report={schema_version:1,generator:'chemquiz-reference-introductory',source_repository:REPO,
  source_commit:COMMIT,source_license:'MIT',source_license_url:licenseEvidence,
  source_blob_sha:{metal_ions:SOURCES['dataset/metal_ions_and_colors.json'],polyatomic_ions:SOURCES['dataset/inorganic_polyatomic_ions.json']},
  distinct_upstream_reference_ions:23,whitelisted_precipitation_reactions:19,
  generated_unique_question_variants:rows.length,by_subject:{analytical:19,inorganic:23},
  review_status:'awaiting_expert_review',publishable:false,
  note:'Derived introductory exercises; not independent source exam questions. Expert review required.'};
 const reportPath=join(ROOT,'harvest/import_reports/chemquiz_reference.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==content)writeFileSync(reportPath,content);
 const message='chemquiz MIT reference import: generated='+rows.length+', new='+added+', already_present='+skipped+'; analytical=19, inorganic=23; awaiting expert review.';
 console.log(message);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Pinned MIT chemquiz reference import\n- '+message+'\n');
 return {generated:rows.length,added,skipped};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('chemquiz import blocked:',e.message);process.exitCode=1;}
}
