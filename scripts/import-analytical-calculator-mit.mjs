#!/usr/bin/env node
// MIT-code-referenced, ORIGINAL eight analytical chemistry exercise variants.
// These are new teaching examples based on published stoichiometric formulae;
// they are NOT questions copied from the upstream MIT application.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const FIXTURE=join(ROOT,'harvest','pinned_analytical_calculator_mit.json');
const REPO='PWO-CHINA/Chemistry-Calculator-Toolkit';
const PIN='879205657e777c00621a461e975218b395ee32ea';
const BLOBS={
  'LICENSE':'49c2c01eba000fe4138e79b45083eee284f9f3bb',
  'src/calculations.js':'20378fe9af77e64932b9f412a6c51be9b0c433b5',
  'docs/calculation-reference.md':'0edb01aea5409a631536282ac179db5e28e9b772',
  'tests/calculations.test.js':'52acebcf661a38be4b781c26e520fbb359ceafcc'
};
const KEYS=['hcl_standardization','edta_standardization','iodometry_kio3',
  'permanganate_oxalate','mixed_alkali','copper_iodometry','calcium_oxalate','pb_bi_edta'];
const normalize=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(normalize(s)).digest('hex');
const finitePositive=(n,label)=>{if(!Number.isFinite(n)||n<=0)throw Error('Invalid positive '+label);return n;};
export function calculateIndependent(kind,p){
 const v=(name)=>finitePositive(p[name],name);
 let result;
 switch(kind){
  case 'hcl_standardization':
   result=[2*v('mass_g')/(v('molar_mass')*v('hcl_volume_ml')/1000)];break;
  case 'edta_standardization':
   result=[v('zinc_molarity')*v('zinc_volume_ml')/v('edta_volume_ml')];break;
  case 'iodometry_kio3':
   result=[6*v('kio3_molarity')*v('kio3_volume_ml')/v('thiosulfate_volume_ml')];break;
  case 'permanganate_oxalate':
   result=[(2/5)*v('sodium_oxalate_mass_g')/v('sodium_oxalate_molar_mass')/(v('permanganate_volume_ml')/1000)];break;
  case 'mixed_alkali':{
   const c=v('hcl_molarity'),vol=v('sample_ml'),vp=v('phenolphthalein_ml'),va=v('additional_methyl_orange_ml');
   if(va<vp)throw Error('Mixed alkali incompatible with carbonate+bicarbonate');
   result=[c*vp/vol,c*(va-vp)/vol];break;
  }
  case 'copper_iodometry':
   result=[v('thiosulfate_molarity')*(v('thiosulfate_volume_ml')/1000)*v('copper_molar_mass')/v('sample_mass_g')*100];break;
  case 'calcium_oxalate':{
   const sample=v('sample_titrant_ml'),blank=p.blank_titrant_ml,vt=v('total_ml'),va=v('aliquot_ml');
   if(!Number.isFinite(blank)||blank<0||sample<=blank||va>vt)throw Error('Invalid blank-corrected calcium experiment');
   result=[2.5*v('permanganate_molarity')*((sample-blank)/1000)*(vt/va)*v('calcium_molar_mass')/v('sample_mass_g')*100];break;
  }
  case 'pb_bi_edta':
   result=[v('edta_molarity')*v('bi_edta_ml')/v('aliquot_ml'),
    v('edta_molarity')*v('pb_additional_ml')/v('aliquot_ml')];break;
  default:throw Error('Unreviewed analytical chemistry method '+kind);
 }
 if(result.some(x=>!Number.isFinite(x)||x<=0))throw Error('Nonphysical analytical result '+kind);
 if(['copper_iodometry','calcium_oxalate'].includes(kind)&&result[0]>100)
  throw Error('Unphysical analyte mass fraction '+kind);
 return result;
}
const ANCHORS={
 hcl_standardization:['0.1000','Na₂CO₃'],edta_standardization:['0.0500','EDTA'],
 iodometry_kio3:['0.1000','Na₂S₂O₃'],permanganate_oxalate:['0.0200','KMnO₄'],
 mixed_alkali:['0.0400','0.0200'],copper_iodometry:['12.71%','Cu'],
 calcium_oxalate:['33.40%','Ca'],pb_bi_edta:['0.00800','0.0120']
};
export function makeQuestions(data){
 if(data?.schema_version!==1||data.source!==REPO||data.commit!==PIN||data.license!=='MIT'||
    data.source_original_question_count_imported!==0||
    data.approved_examples!==8||JSON.stringify(data.files)!==JSON.stringify(BLOBS)||
    !data.attribution?.includes('Copyright (c) 2026 PWO-CHINA')||
    !data.rights_scope?.includes('not questions imported from upstream')||!Array.isArray(data.items)||data.items.length!==8)
   throw Error('MIT calculator source lock / attribution / rights scope mismatch');
 const out=[],names=new Set(),ids=new Set();
 for(let i=0;i<data.items.length;i++){
  const x=data.items[i],key=KEYS[i];
  if(x.key!==key||names.has(key)||typeof x.question!=='string'||!x.question.startsWith('分析化学·')||
   x.question.length>1000||typeof x.answer!=='string'||!x.answer.includes('=')||
   x.answer.length>700||typeof x.derivation!=='string'||x.derivation.length<18||
   !x.topic||!Array.isArray(x.expect)||!x.expect.length||x.expect.length>2)
   throw Error('Invalid curated analytical experiment '+i);
  names.add(key);
  for(const anchor of ANCHORS[key])if(!(x.question+'\n'+x.answer).includes(anchor))throw Error('Required chemistry symbol or significant figures absent for '+key);
  const expected=calculateIndependent(key,x.param);
  if(expected.length!==x.expect.length)throw Error('Unexpected number of expected answers '+key);
  for(let j=0;j<expected.length;j++){
   if(!Number.isFinite(x.expect[j])||Math.abs(expected[j]-x.expect[j])>
      1e-10*Math.max(1,Math.abs(expected[j])))throw Error('Independent stoichiometry mismatch '+key);
  }
  const id=questionId(x.question);if(ids.has(id))throw Error('Duplicate question text hash');ids.add(id);
  out.push({
   schema_version:1,id,subject:'analytical',topic:x.topic,level:'undergraduate',
   question_type:'original_calculation_exercise',resource_type:'new_exercise_based_on_MIT_reference_code',
   question:x.question,answer:x.answer,explanation:x.derivation,numeric_answers:expected,
   quality_status:'awaiting_expert_review',publishable:false,semantic_duplicate_review_pending:true,
   source:{
     repository:REPO,commit:PIN,file:'src/calculations.js',git_blob_sha:BLOBS['src/calculations.js'],
     reference_docs_git_blob_sha:BLOBS['docs/calculation-reference.md'],
     original_calculator_method:key,license:'MIT',attribution:data.attribution,
     license_evidence:'https://github.com/'+REPO+'/blob/'+PIN+'/LICENSE',
     license_git_blob_sha:BLOBS.LICENSE,
     url:'https://github.com/'+REPO+'/blob/'+PIN+'/src/calculations.js',
     content_rights_verified:true,original_exam_question:false,
     original_upstream_question:false,
     changes:'New Chinese numerical exercise written for this bank from a public MIT-licensed calculator formula. No upstream questions, figures, or experimental measurements imported.'
   }
  });
 }
 return out;
}
export function run(){
 const manifest=JSON.parse(readFileSync(FIXTURE,'utf8')),rows=makeQuestions(manifest);
 const dir=join(ROOT,'data','candidates');
 for(const row of rows){
  const dest=join(dir,row.id+'.json');if(!existsSync(dest))continue;
  const old=JSON.parse(readFileSync(dest,'utf8'));
  if(old.question!==row.question||old.answer!==row.answer||
    old.source?.repository!==REPO||old.source?.commit!==PIN||
    old.quality_status!=='awaiting_expert_review'||old.publishable!==false)
    throw Error('Candidate answer/attribution conflict with existing file '+row.id);
 }
 mkdirSync(dir,{recursive:true});
 let added=0,alreadyPresent=0;
 for(const row of rows){
  const dest=join(dir,row.id+'.json');
  if(existsSync(dest)){alreadyPresent++;continue;}
  writeFileSync(dest,JSON.stringify(row,null,2)+'\n');added++;
 }
 const report={
  schema_version:1,source:REPO,source_commit:PIN,license:'MIT',source_code_blob:BLOBS['src/calculations.js'],
  original_upstream_exam_questions_imported:0,generated_original_exercises:8,
  by_subject:{inorganic:0,organic:0,analytical:8,physical:0},
  initial_import_added:added,initial_import_already_present:alreadyPresent,
  number_of_distinct_analysis_methods:8,independent_numeric_validation:true,
  expert_approved:0,publishable:false,quality_status:'awaiting_expert_review',
  note:'8 distinct method-level numerical exercises newly written using a pinned MIT-licensed reference calculator; not copied upstream exam questions. Semantic dedup and expert validation remain pending.'
 };
 const target=join(ROOT,'harvest','import_reports','analytical_calculator_mit.json');mkdirSync(dirname(target),{recursive:true});
 if(existsSync(target)){
  const old=JSON.parse(readFileSync(target,'utf8'));if(old.source_commit!==PIN||old.generated_original_exercises!==8)throw Error('Prior report conflict');
 }else writeFileSync(target,JSON.stringify(report,null,2)+'\n');
 const summary='MIT analytical toolkit: source_methods=8; original_exercises=8; added='+added+
  '; already_present='+alreadyPresent+'; expert_approved=0';
 console.log(summary);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Original analytical exercise import\n'+summary+'\n');
 return {added,alreadyPresent};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
