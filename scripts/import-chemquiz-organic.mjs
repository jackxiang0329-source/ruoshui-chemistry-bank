#!/usr/bin/env node
// Derive a narrow set of INTRODUCTORY organic chemistry exercises from pinned MIT data.
// No upstream code is executed. The questions remain unpublished until expert review.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='bem130/chemquiz';
const COMMIT='10b81d4c1b02847e3d9b64e8d44a960d10559ea3';
const PREFIX='third_party/chemquiz/';
const BLOBS={
 'LICENSE':'dcec41b508bd5bfbd0d44f3111a41bdee9a73c75',
 'dataset/organic_functional_groups.json':'472a029b37ff7a61b559a42bf93872d41b8f5ac3',
 'dataset/organic_homologous_series.json':'be553206c8b47c11f63ab12750c97388a0d47149'
};
const LICENSE_URL='https://github.com/'+REPO+'/blob/'+COMMIT+'/LICENSE';
// Human-curated exact answers. Reject changed source formulas rather than blindly copying them.
const GROUPS={
 'Alkenes':['CH2=CH2','碳碳双键'],
 'Alkynes':['HC≡CH','碳碳三键'],
 'Halogenoalkanes':['CH3Cl','碳卤键（此例为 C–Cl 键）'],
 'Alcohols':['CH3CH2OH','醇羟基'],
 'Phenols':['C6H5OH','酚羟基'],
 'Ethers':['CH3CH2–O–CH2CH3','醚键'],
 'Aldehydes':['CH3–CHO','醛基'],
 'Ketones':['CH3–CO–CH3','酮羰基'],
 'Carboxylic acids':['CH3COOH','羧基'],
 'Esters':['CH3COOCH2CH3','酯基'],
 'Amines':['CH3CH2NH2','氨基'],
 'Amides':['CH3CONH2','酰胺基'],
 'Nitriles':['CH3CN','腈基（氰基）'],
 'Nitro compounds':['C6H5NO2','硝基'],
 'Thiols':['CH3CH2SH','巯基']
};
// Formula calculations were independently checked for each selected class.
// Deliberately exclude the upstream ambiguous ester, amide, nitrile and haloalkane series.
const SERIES={
 'Alkanes':['CnH2n+2',6,'C6H14','饱和开链烷烃'],
 'Cycloalkanes':['CnH2n',6,'C6H12','饱和单环环烷烃'],
 'Alkenes':['CnH2n',5,'C5H10','开链、恰含一个碳碳双键的烯烃'],
 'Alkynes':['CnH2n-2',5,'C5H8','开链、恰含一个碳碳三键的炔烃'],
 'Alcohols':['CnH2n+1OH',4,'C4H10O','饱和开链一元醇'],
 'Aldehydes':['CnH2nO',4,'C4H8O','饱和开链一元醛'],
 'Ketones':['CnH2nO',5,'C5H10O','饱和开链单酮'],
 'Carboxylic acids':['CnH2nO2',4,'C4H8O2','饱和开链一元羧酸'],
 'Amines':['Primary: CnH2n+3N',4,'C4H11N','饱和开链一元伯胺'],
 'Nitroalkanes':['CnH2n+1NO2',3,'C3H7NO2','饱和开链一硝基烷烃']
};
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
export const gitBlobSha=data=>createHash('sha1').update('blob '+data.length+'\0').update(data).digest('hex');

export function verifyPinnedSources(){
 const lock=JSON.parse(readFileSync(join(ROOT,'third_party/UPSTREAM_LOCK.json'),'utf8'));
 const source=lock.sources?.find(x=>x.repo===REPO);
 if(!source||source.commit!==COMMIT||source.license!=='MIT')throw Error('Unexpected upstream lock');
 const data={};
 for(const [path,sha] of Object.entries(BLOBS)){
  const full=PREFIX+path;
  if(source.files?.find(x=>x.path===full)?.sha!==sha)throw Error('Lock file SHA mismatch: '+path);
  const bytes=readFileSync(join(ROOT,full));
  if(gitBlobSha(bytes)!==sha)throw Error('Vendored Git blob mismatch: '+path);
  data[path]=bytes.toString('utf8');
 }
 if(!data.LICENSE.includes('MIT License')||
    !data.LICENSE.includes('Copyright (c) 2025 べむ')||
    !data.LICENSE.includes('Permission is hereby granted'))
    throw Error('MIT license attribution missing');
 return {groups:JSON.parse(data['dataset/organic_functional_groups.json']).functional_groups,
  series:JSON.parse(data['dataset/organic_homologous_series.json']).series};
}
export function makeFunctionalQuestions(rows){
 if(!Array.isArray(rows)||rows.length!==17)throw Error('Unexpected functional group catalog size');
 const byName=new Map();
 for(const x of rows){
  if(byName.has(x.label_en))throw Error('Duplicate group: '+x.label_en);
  byName.set(x.label_en,x);
 }
 const output=[];
 for(const [name,[formula,answer]] of Object.entries(GROUPS)){
  const x=byName.get(name);
  if(!x||!Array.isArray(x.example_compounds)||x.example_compounds.length!==1||
     x.example_compounds[0].skeletal_formula!==formula||
     !String(x.example_compounds[0].name_en||'').trim())
     throw Error('Pinned organic group data mismatch: '+name);
  const compound=x.example_compounds[0].name_en;
  output.push({topic:'functional_group_identification',
   question_type:'name_and_condensed_structure_to_functional_group',
   question:'有机化学基础：化合物 '+compound+'（结构简式：'+formula+'）最有代表性的官能团或特征键是什么？（只写一种最能区分该类化合物的结构特征。）',
   answer,original_id:name,source_file:'dataset/organic_functional_groups.json'});
 }
 return output;
}
export function makeSeriesQuestions(rows){
 if(!Array.isArray(rows)||rows.length!==14)throw Error('Unexpected homologous series size');
 const byName=new Map();
 for(const x of rows){
  if(byName.has(x.name_en))throw Error('Duplicate series: '+x.name_en);
  byName.set(x.name_en,x);
 }
 const output=[];
 for(const [name,[formula,n,answer,scope]] of Object.entries(SERIES)){
  const x=byName.get(name);
  if(!x||x.general_formula!==formula||!Array.isArray(x.example_members)||
    x.example_members.length<1)throw Error('Pinned organic series data mismatch: '+name);
  output.push({topic:'homologous_series_molecular_formula',
   question_type:'class_and_carbon_count_to_formula',
   question:'有机化学基础：某化合物属于'+scope+'，其分子含 '+n+' 个碳原子。按照该同系物通式写出其分子式（不必写结构式）。',
   answer,original_id:name+'|n='+n,source_file:'dataset/organic_homologous_series.json'});
 }
 return output;
}
export function makeQuestions(groups,series){
 const all=[...makeFunctionalQuestions(groups),...makeSeriesQuestions(series)];
 const seen=new Set();
 for(const x of all){
  x.id=questionId(x.question);
  if(seen.has(x.id))throw Error('Duplicate generated prompt: '+x.id);
  seen.add(x.id);
 }
 if(all.length!==25)throw Error('Unexpected organic practice count');
 return all;
}
export function run(){
 const {groups,series}=verifyPinnedSources();
 const rows=makeQuestions(groups,series),destination=join(ROOT,'data/candidates');
 mkdirSync(destination,{recursive:true});
 let added=0,skipped=0;
 for(const row of rows){
  const path=join(destination,row.id+'.json');
  if(existsSync(path)){
   const old=JSON.parse(readFileSync(path,'utf8'));
   if(norm(old.question)!==norm(row.question)||norm(old.answer)!==norm(row.answer))
    throw Error('Existing candidate has conflicting question/answer: '+row.id);
   skipped++;continue;
  }
  const entry={schema_version:1,id:row.id,subject:'organic',topic:row.topic,
   level:'introductory_undergraduate',question_type:row.question_type,
   question:row.question,answer:row.answer,
   quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:REPO,commit:COMMIT,file:row.source_file,
    git_blob_sha:BLOBS[row.source_file],original_id:row.original_id,
    license:'MIT',attribution:'Copyright (c) 2025 べむ; chemquiz ('+REPO+'), MIT License',
    content_rights_verified:true,license_evidence:LICENSE_URL,
    url:'https://github.com/'+REPO+'/blob/'+COMMIT+'/'+row.source_file,
    changes:'Derived Chinese introductory question with independently whitelisted answer; excludes source images, notes and third-party measurements.',
    original_exam_question:false}};
  writeFileSync(path,JSON.stringify(entry,null,2)+'\n');added++;
 }
 const report={schema_version:1,generator:'chemquiz-organic-reference-introductory',
  source_repository:REPO,source_commit:COMMIT,source_license:'MIT',
  source_license_url:LICENSE_URL,
  source_blob_sha:{functional_groups:BLOBS['dataset/organic_functional_groups.json'],
    homologous_series:BLOBS['dataset/organic_homologous_series.json']},
  upstream_functional_group_reference_rows:groups.length,
  upstream_homologous_series_reference_rows:series.length,
  whitelisted_group_variants:15,whitelisted_series_variants:10,
  generated_unique_question_variants:rows.length,by_subject:{organic:25},
  review_status:'awaiting_expert_review',publishable:false,
  note:'25 newly generated variants from 2 existing MIT reference tables; not 25 independent original exam questions. Semantic cross-repository dedup and expert review remain pending.'};
 const reportPath=join(ROOT,'harvest/import_reports/chemquiz_organic_reference.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==content)writeFileSync(reportPath,content);
 const lines=['### MIT chemquiz organic practice',
  '- Source: '+REPO+' @ '+COMMIT,
  '- Eligible derived variants: '+rows.length+' (15 functional group, 10 homologous formula)',
  '- Newly written candidate files: '+added,'- Already present: '+skipped,
  '- Quality: awaiting expert review; publishable=false',
  '- Not counted as independent original examination questions.'];
 console.log(lines.join('\n'));
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,lines.join('\n')+'\n');
 return {added,skipped,eligible:rows.length};
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===process.argv[1]){
 try{run();}catch(e){console.error(e);process.exitCode=1;}
}
