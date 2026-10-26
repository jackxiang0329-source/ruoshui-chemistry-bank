#!/usr/bin/env node
// A pinned, MIT-licensed general-chemistry generator. Its source is audited and
// vendored locally. No network fetch, dynamic code download or external packages.
// Generated practice is not claimed as independent upstream examination questions.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {ARCHETYPES} from '../third_party/parametric-question-engine/chem/archetypes.js';
import {makeRng} from '../third_party/parametric-question-engine/core/rng.js';
import {assembleOptions,validateItem} from '../third_party/parametric-question-engine/core/options.js';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const UPSTREAM='arya51-ai/parametric-question-engine';
const PIN='cbe7d952443ff88ef89b514dd4fb1641a69c2950';
const PREFIX='third_party/parametric-question-engine/';
const FILES={
  "LICENSE": "104ef3b11cabe4c274a6a709e0fc9143ce6ce2be",
  "README.md": "085a9976d11306e123dabd10231ad5b2c412cc88",
  "package.json": "bded2606df35f6504e8601b457a2736129ddb1cb",
  "core/rng.js": "f96ed2d9add468c29c6abe06570eb4652993a7a3",
  "core/options.js": "0fb6d1807586a537c4e1ed830d9a9c154acb72b8",
  "chem/data.js": "86084d93b97407e831be275f369dcb7acd15adcb",
  "chem/archetypes.js": "a8dc7e5ae1b1965cb26c32f385314b9f9f45f5a6"
};
const SPECS=[
 {key:'molar_mass',subject:'inorganic',topic:'chemical_formula_molar_mass',seed:24061},
 {key:'molarity_dilution',subject:'analytical',topic:'solution_concentration',seed:24062},
 {key:'thermochem',subject:'physical',topic:'calorimetry',seed:24063},
 {key:'keq_ice',subject:'physical',topic:'equilibrium_constant',seed:24064},
 {key:'electrochem',subject:'physical',topic:'standard_cell_potential',seed:24065}
];
const normalize=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
const questionId=s=>createHash('sha256').update(normalize(s)).digest('hex');
const blobSha=b=>createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');
const round=(x,n)=>Math.round((x+Number.EPSILON)*10**n)/10**n;
function verifyPinned(){
 for(const [name,sha] of Object.entries(FILES)){
  const b=readFileSync(join(ROOT,PREFIX,name));
  if(blobSha(b)!==sha)throw Error('MIT upstream blob mismatch: '+name);
 }
 const lic=readFileSync(join(ROOT,PREFIX,'LICENSE'),'utf8');
 if(!lic.includes('MIT License')||!lic.includes('Copyright (c) 2026 Arya Mehta')||
   !lic.includes('Permission is hereby granted'))throw Error('MIT license notice missing');
}
const MASSES={H:1.01,C:12.01,N:14.01,O:16,Na:22.99,Cl:35.45,K:39.1,Ca:40.08,Mg:24.31,S:32.07};
const SUB='₀₁₂₃₄₅₆₇₈₉';
function independentMolarMass(unicode){
 const formula=[...unicode].map(c=>SUB.includes(c)?String(SUB.indexOf(c)):c).join('');
 const parts=[...formula.matchAll(/([A-Z][a-z]?)(\d*)/g)];
 if(!parts.length||parts.map(x=>x[0]).join('')!==formula)throw Error('Unsupported molar mass formula: '+formula);
 return round(parts.reduce((sum,m)=>{
  if(!(m[1] in MASSES))throw Error('Unknown element in formula: '+m[1]);
  return sum+MASSES[m[1]]*Number(m[2]||1);
 },0),2);
}
export function independentCheck(spec,q){
 let match,expected,tolerance=0.006;
 switch(spec.key){
  case 'molar_mass':
   match=/^What is the molar mass of (.+)\?$/.exec(q.question);
   if(match)expected=independentMolarMass(match[1]);
   break;
  case 'molarity_dilution':
   match=/^What is the molarity of a solution containing ([\d.]+) mol of solute in ([\d.]+) L of solution\?$/.exec(q.question);
   if(match)expected=round(Number(match[1])/Number(match[2]),2);
   break;
  case 'thermochem':
   match=/^How much heat is required to raise ([\d.]+) g of (.+) \(c = ([\d.]+) J\/g·°C\) by ([\d.]+)°C\?$/.exec(q.question);
   if(match)expected=round(Number(match[1])*Number(match[3])*Number(match[4]),1);
   break;
  case 'keq_ice':
   match=/^For A \+ B ⇌ C at equilibrium \[A\]=([\d.]+) M, \[B\]=([\d.]+) M, \[C\]=([\d.]+) M\. What is Kc\?$/.exec(q.question);
   if(match)expected=round(Number(match[3])/(Number(match[1])*Number(match[2])),3);
   break;
  case 'electrochem':
   match=/^What is the standard cell potential for a cell made from (.+) \(E° = ([-\d.]+) V\) and (.+) \(E° = ([-\d.]+) V\)\?$/.exec(q.question);
   if(match){
    if(Number(match[2])<=Number(match[4]))throw Error('Cathode/anode order incorrect');
    expected=round(Number(match[2])-Number(match[4]),2);
   }
   break;
  default:throw Error('Unapproved archetype');
 }
 if(!match||!Number.isFinite(expected)||typeof q.answer!=='number'||
   Math.abs(q.answer-expected)>tolerance)throw Error('Independent chemistry check failed: '+spec.key+' '+q.question);
 const body=q.options.map(o=>o.slice(3));
 if(body.length!==5||new Set(body).size!==5)throw Error('Nonunique choices');
 const letters=['A','B','C','D','E'];
 const index=letters.indexOf(q.correct);
 if(index<0||body[index]!==q.formatted_answer||
   body.filter(x=>x===q.formatted_answer).length!==1)throw Error('Answer key disagrees with choices');
 return true;
}
export function generate(){
 const all=[],global=new Set();
 for(const spec of SPECS){
  const arch=ARCHETYPES.find(a=>a.key===spec.key);
  if(!arch)throw Error('Missing pinned archetype '+spec.key);
  const rng=makeRng(spec.seed),local=new Set();
  for(let attempt=0;attempt<600&&local.size<6;attempt++){
   const res=arch.gen(rng,'easy');
   if(!res)continue;
   const id=questionId(res.question);
   if(local.has(id)||global.has(id))continue;
   let opts;
   try{opts=assembleOptions(res.answer,res.distractors,res.fmt,rng);}catch{continue;}
   const q={id,subject:spec.subject,topic:spec.topic,question_type:spec.key,
    level:'introductory_undergraduate',difficulty:'easy',question:res.question,
    answer:res.fmt(res.answer),options:opts.options,correct_option:opts.correct,
    explanation:res.explanation};
   const issues=validateItem({...q,correct:opts.correct});
   if(issues.length)throw Error('Malformed candidate: '+issues.join('; '));
   independentCheck(spec,{...q,correct:opts.correct,formatted_answer:q.answer,answer:res.answer});
   local.add(id);global.add(id);all.push(q);
  }
  if(local.size!==6)throw Error('Insufficient validated distinct questions: '+spec.key+' '+local.size);
 }
 if(all.length!==30)throw Error('Unexpected total count');
 return all;
}
export function run(){
 verifyPinned();
 const rows=generate(),dest=join(ROOT,'data/candidates');
 // Fail closed on collisions before writing any files.
 for(const q of rows){
  const f=join(dest,q.id+'.json');
  if(!existsSync(f))continue;
  const prev=JSON.parse(readFileSync(f,'utf8'));
  if(prev.id!==q.id||normalize(prev.question)!==normalize(q.question)||
    prev.answer!==q.answer||prev.subject!==q.subject||prev.publishable!==false)
    throw Error('Existing candidate collision or answer conflict: '+q.id);
 }
 mkdirSync(dest,{recursive:true});
 let added=0,skipped=0;
 for(const q of rows){
  const f=join(dest,q.id+'.json');
  if(existsSync(f)){skipped++;continue;}
  const entry={schema_version:1,...q,quality_status:'awaiting_expert_review',
   publishable:false,source:{repository:UPSTREAM,commit:PIN,
    file:'chem/archetypes.js',git_blob_sha:FILES['chem/archetypes.js'],
    license:'MIT',content_rights_verified:true,
    attribution:'Copyright (c) 2026 Arya Mehta; parametric-question-engine (MIT)',
    license_evidence:'https://github.com/'+UPSTREAM+'/blob/'+PIN+'/LICENSE',
    url:'https://github.com/'+UPSTREAM+'/blob/'+PIN+'/chem/archetypes.js',
    origin:'deterministic_generation_from_pinned_mit_code',
    original_exam_question:false,
    changes:'Generated from the upstream solver; limited to five independently checked easy-level archetypes. No third-party exam questions, images or proprietary datasets copied.'}};
  writeFileSync(f,JSON.stringify(entry,null,2)+'\n');added++;
 }
 const counts={inorganic:0,organic:0,analytical:0,physical:0};
 for(const q of rows)counts[q.subject]++;
 const report={schema_version:1,source_repository:UPSTREAM,source_commit:PIN,
  source_license:'MIT',license_evidence:'https://github.com/'+UPSTREAM+'/blob/'+PIN+'/LICENSE',
  upstream_author:'Arya Mehta',source_file_blobs:FILES,
  source_question_type:'programmatically_generated_not_independent_exam_questions',
  generated_variants:rows.length,by_subject:counts,
  exact_deduplication:'NFKC normalized question SHA-256',independent_numeric_validation:true,
  review_status:'awaiting_expert_review',publishable:false,
  note:'The upstream engine has 15 archetypes; only five elementary ones are used. No hard electrochemistry archetype is imported because its electron-count handling needs review. Cross-source semantic duplicates and expert review remain pending.'};
 const path=join(ROOT,'harvest/import_reports/parametric_mit_chemistry.json');
 mkdirSync(dirname(path),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==content)writeFileSync(path,content);
 const msg='Pinned MIT parametric chemistry: generated='+rows.length+', new='+added+
  ', already_present='+skipped+', by_subject='+JSON.stringify(counts)+'; awaiting expert review.';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### MIT parametric chemistry\n- '+msg+'\n');
 return {added,skipped,counts};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack||e.message);process.exitCode=1;}
}
