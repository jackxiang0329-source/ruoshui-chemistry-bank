#!/usr/bin/env node
// Offline importer for three manually screened CC0 quantum-chemistry exercises.
// Source Git Blob SHAs were checked against pinned GitHub files at curation time;
// this script validates the pinned manifest, NOT live upstream bytes.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const COMMIT='6709e555b10953d0938b7e3636559a95183de0bd';
const ATTR='Introduction to Quantum Mechanics for Chemists (QC-Edu), course authors Paul Ayers, Valerii Chuiko and Farnaz Heidar-Zadeh; original selected course exercises licensed CC0 1.0, subject to third-party exceptions.';
const HASHES={
 'book/IntroExercise1.ipynb':'05452012f4be8990ce7e3501bd72745d24348221',
 'book/IntroExercise2.ipynb':'b2762830e5d023e31921549c1f6ac184b2c5e7cd',
 'book/SchrodingerExercise3.md':'a2fa47e963ba30218e53f20bfcf339001be69cf1'
};
const h=6.62607015e-34,e=1.602176634e-19,c=299792458;
const norm=x=>String(x).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=q=>createHash('sha256').update(norm(q)).digest('hex');
export function validateFixture(d){
 if(!d||d.schema_version!==1||d.repository!=='QC-Edu/IntroQM'||d.commit!==COMMIT||
 d.content_license!=='CC0-1.0'||d.license_file!=='LICENSE'||
 d.license_git_blob_sha!=='d6f0c9a0ae3f8013d6e1e6953983c811d705e867'||
 d.license_notice_file!=='license.md'||
 d.license_notice_git_blob_sha!=='5e5067b414c3021b23dd2155dc4054f321dcb37b'||
 d.attribution!==ATTR||d.source_exercises_examined!==5||
 d.curated_exercises!==3||d.excluded_exercises!==2||
 d.third_party_pdfs_imported!==0||d.images_imported!==0||
 !Array.isArray(d.cards)||d.cards.length!==3)
 throw Error('QC-Edu pinned source/license mismatch');
 const expected=['photon_energy','photon_angular_wavenumber','morse_ground_state'];
 const ids=new Set();
 for(let i=0;i<d.cards.length;i++){
  const q=d.cards[i];
  if(q.kind!==expected[i]||HASHES[q.source_file]!==q.git_blob_sha||
   !q.question||q.question.length<60||!q.answer||q.id!==questionId(q.question)||
   ids.has(q.id)||typeof q.explanation!=='string'||q.explanation.length<50)
   throw Error('QC-Edu card/hash/ID mismatch');
  ids.add(q.id);
 }
 return d;
}
export function verifyNumerics(q){
 if(q.kind==='photon_energy'){
  if(q.parameters.energy_eV!==2||q.numeric_answer.frequency_hz.toExponential(3)!==(2*e/h).toExponential(3)||
   q.numeric_answer.momentum_kg_m_s.toExponential(3)!==(2*e/c).toExponential(3)||
   q.answer!=='ν = 4.836e+14 Hz; p = 1.069e-27 kg m/s')
   throw Error('Photon energy answer mismatch');
 }else if(q.kind==='photon_angular_wavenumber'){
  const p=h/(2*Math.PI)*1e8;
  if(q.parameters.angular_wavenumber_m_inverse!==1e8||
   q.numeric_answer.momentum_kg_m_s.toExponential(3)!==p.toExponential(3)||
   q.numeric_answer.energy_j.toExponential(3)!==(p*c).toExponential(3)||
   q.answer!=='p = 1.055e-26 kg m/s; E = 3.162e-18 J')
   throw Error('Angular wavenumber answer mismatch');
 }else if(q.kind==='morse_ground_state'){
  if(q.parameters.lambda_domain!=='lambda > 1/2'||
   q.answer!=='E0 = -(lambda - 1/2)^2 (dimensionless)')
   throw Error('Morse symbolic answer mismatch');
  for(const lambda of [0.8,1.5,3]){
   const a=lambda-0.5;
   for(const x of [-0.2,0.5,2]){
    const y=Math.exp(-x);
    const hPsiOverPsi=-((-a+lambda*y)**2-lambda*y)+lambda**2*(y*y-2*y);
    if(Math.abs(hPsiOverPsi+a*a)>1e-11)throw Error('Morse eigenvalue residual');
   }
  }
 }else throw Error('Unknown exercise type');
 return true;
}
export function generate(d){
 validateFixture(d);
 return d.cards.map(q=>{
  verifyNumerics(q);
  return {schema_version:1,id:q.id,subject:'physical',topic:'quantum_chemistry',
   level:'undergraduate',question_type:q.kind,question:q.question,answer:q.answer,
   ...(q.numeric_answer?{numeric_answer:q.numeric_answer}:{}),
   explanation:q.explanation,parameters:q.parameters,
   source:{repository:d.repository,commit:d.commit,file:q.source_file,
    git_blob_sha:q.git_blob_sha,license:'CC0-1.0',
    license_evidence:'https://github.com/QC-Edu/IntroQM/blob/'+COMMIT+'/license.md',
    license_git_blob_sha:d.license_notice_git_blob_sha,
    url:'https://github.com/QC-Edu/IntroQM/blob/'+COMMIT+'/'+q.source_file,
    attribution:ATTR,content_rights_verified:true,original_exam_question:false,
    changes:'Chinese adaptation of an explicitly selected CC0 course exercise; independently recomputed result, excluded third-party PDFs and notebook output-label errors; no third-party artwork copied.'},
   quality_status:'awaiting_expert_review',publishable:false};
 });
}
export function run(){
 const d=JSON.parse(readFileSync(join(ROOT,'harvest/pinned_qcedu_introqm.json'),'utf8'));
 const rows=generate(d),out=join(ROOT,'data/candidates');
 // Validate all existing collisions before any writes.
 for(const q of rows){
  const file=join(out,q.id+'.json');
  if(!existsSync(file))continue;
  const old=JSON.parse(readFileSync(file,'utf8'));
  if(old.id!==q.id||norm(old.question)!==norm(q.question)||old.answer!==q.answer||
   old.subject!=='physical'||old.source?.repository!==d.repository||
   old.source?.commit!==COMMIT||old.source?.git_blob_sha!==q.source.git_blob_sha||
   old.quality_status!=='awaiting_expert_review'||old.publishable!==false)
   throw Error('Existing candidate collision: '+q.id);
 }
 mkdirSync(out,{recursive:true});
 let added=0,already_present=0;
 for(const q of rows){
  const file=join(out,q.id+'.json');
  if(existsSync(file)){already_present++;continue;}
  writeFileSync(file,JSON.stringify(q,null,2)+'\n');added++;
 }
 const report={schema_version:1,source_repository:d.repository,source_commit:COMMIT,
  content_license:'CC0-1.0',source_exercises_examined:5,curated_exercises:3,
  excluded_exercises:2,generated_candidate_questions:3,
  by_subject:{physical:3,inorganic:0,organic:0,analytical:0},
  third_party_pdfs_imported:0,images_imported:0,
  review_status:'awaiting_expert_review',publishable:false,
  note:'Three CC0 undergraduate quantum-chemistry course exercises adapted from pinned source files; 2 source exercises excluded due to answer/assumption concerns. Source-file Git Blob SHAs manually checked against GitHub; importer uses a pinned metadata fixture, not a full upstream mirror. Expert review and semantic dedup remain pending.'};
 const reportPath=join(ROOT,'harvest/import_reports/qcedu_introqm.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const contents=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==contents)
  writeFileSync(reportPath,contents);
 const msg='QC-Edu IntroQM: curated=3; added='+added+'; already_present='+already_present+
  '; excluded=2; expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### QC-Edu IntroQM CC0\n- '+msg+'\n');
 return {added,already_present,eligible:rows.length};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(err){console.error('QC-Edu importer blocked:',err);process.exitCode=1;}
}
