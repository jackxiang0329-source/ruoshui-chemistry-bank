#!/usr/bin/env node
// Selective CC BY 4.0 OpenStax Chemistry 2e authored exercise adaptations; no external images.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const manifest=join(root,'harvest','pinned_openstax_chemistry2e.json');
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
export const independentlyRecompute=c=>{
 const p=c.params;
 switch(c.kind){
 case 'mgf2_solubility':return Math.cbrt(p.ksp/4);
 case 'kclo4_precipitation':{
   const v=p.v_k_ml+p.v_anion_ml;
   return p.c_k_m*p.v_k_ml/v*p.c_anion_m*p.v_anion_ml/v;
 }
 case 'strong_acid_titration':{
   const excess=p.v_acid_ml*p.c_acid_m-p.v_base_ml*p.c_base_m;
   if(excess<=0)throw Error('Selected strong acid titration unexpectedly at/after equivalence');
   return -Math.log10(excess/(p.v_acid_ml+p.v_base_ml));
 }
 case 'rate_order':return p.order_no+p.order_h2;
 case 'acetaldehyde_rate_constant':return p.rate_m_per_s/p.concentration_m**p.order;
 case 'electrochemical_potential':return p.cathode_e_v-p.anode_e_v;
 case 'formation_constant':return 1/p.kd;
 case 'lewis_adduct':{
   if(p.acid!=='BF3'||p.base!=='F−'||p.product!=='BF4−')throw Error('Unreviewed Lewis adduct');
   return 1;
 }
 default:throw Error('Unknown or unreviewed chemistry calculation '+c.kind);
 }
};
export function makeQuestions(d){
 if(d?.schema_version!==1||d.collection!=='OpenStax Chemistry 2e, selected Check Your Learning and Chapter 15 exercises'||
    d.license!=='CC BY 4.0'||d.items?.length!==8||!d.attribution.includes('Chemistry 2e')||
    !d.license_exception_note.includes('third-party'))throw Error('OpenStax source/license manifest review mismatch');
 const subjectCounts={analytical:0,physical:0,inorganic:0,organic:0},ids=new Set(),sourceIds=new Set();
 const out=d.items.map(c=>{
  if(!['analytical','physical','inorganic'].includes(c.subject)||
    !/^os2e-[aip]-[a-z0-9-]+$/.test(c.id)||!c.topic||
    !c.source_page?.startsWith('https://openstax.org/books/chemistry-2e/pages/')||
    !c.source_item||!c.kind||!c.params||
    !c.question?.trim()||c.question.length>1000||!c.answer?.trim()||c.answer.length>1000||
    !c.explanation?.trim()||!Number.isFinite(c.expected_value)||
    !Number.isFinite(c.relative_tolerance)||c.relative_tolerance<0||c.relative_tolerance>0.01||
    sourceIds.has(c.id))throw Error('Incomplete or unsafe OpenStax item '+c.id);
  sourceIds.add(c.id);subjectCounts[c.subject]++;
  const calculated=independentlyRecompute(c),err=Math.abs(calculated-c.expected_value);
  if(!Number.isFinite(calculated)||err>c.relative_tolerance*Math.max(1e-30,Math.abs(c.expected_value)))
   throw Error('Numerical answer validation mismatch '+c.id+' actual='+calculated);
  // Guard physics/analytical thresholds and source-only numerical reference interpretation.
  if(c.kind==='kclo4_precipitation'&&!(calculated<c.params.ksp))throw Error('Wrong precipitation verdict');
  if(c.kind==='electrochemical_potential'&&!(calculated>0))throw Error('Wrong spontaneous-cell direction');
  const id=questionId(c.question);if(ids.has(id))throw Error('Normalized question duplicate');ids.add(id);
  return {schema_version:1,id,subject:c.subject,topic:c.topic,level:'undergraduate',
   question_type:'independently_recomputed_exercise',resource_type:'licensed_textbook_exercise_adaptation',
   question:c.question,answer:c.answer,explanation:c.explanation,
   numeric_answer:calculated,quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,
   source:{publisher:'OpenStax',textbook:'Chemistry 2e',edition:'2e (2019)',source_item_id:c.id,
    original_section:c.source_item,url:c.source_page,license:'CC BY 4.0',
    license_evidence:d.license_url,license_exception_note:d.license_exception_note,
    attribution:d.attribution,content_rights_verified:true,original_exam_question:false,
    changes:'Chinese adaptation of OpenStax authored learning check; solution independently recomputed; excludes images, third-party exam questions, and appendices.'}};
 });
 if(JSON.stringify(subjectCounts)!==JSON.stringify({analytical:3,physical:3,inorganic:2,organic:0}))throw Error('Subject distribution drift');
 return out;
}
export function run(){
 const d=JSON.parse(readFileSync(manifest,'utf8')),rows=makeQuestions(d),out=join(root,'data','candidates');
 for(const row of rows){
  const f=join(out,row.id+'.json');if(!existsSync(f))continue;
  const prior=JSON.parse(readFileSync(f,'utf8'));
  if(prior.question!==row.question||prior.answer!==row.answer||
    prior.source?.publisher!=='OpenStax'||prior.quality_status!=='awaiting_expert_review'||prior.publishable!==false)
    throw Error('Existing ID with conflicting answer or rights '+row.id);
 }
 mkdirSync(out,{recursive:true});let added=0,present=0;
 for(const row of rows){
  const f=join(out,row.id+'.json');
  if(existsSync(f)){present++;continue;}
  writeFileSync(f,JSON.stringify(row,null,2)+'\n');added++;
 }
 const rpt=join(root,'harvest','import_reports','openstax_chemistry2e.json');
 const report={schema_version:1,source:'OpenStax Chemistry 2e (2019)',source_license:'CC BY 4.0 except where otherwise noted',
  selected_items:rows.length,by_subject:{inorganic:2,organic:0,analytical:3,physical:3},
  initial_import_new_candidates:added,initial_import_already_present:present,
  independent_numeric_recomputation:true,third_party_items_copied:0,image_copies:0,
  publishable:false,quality_status:'awaiting_expert_review',
  note:'8 curated, Chinese-adapted exercises; no expert approval or cross-source semantic merge.'};
 mkdirSync(dirname(rpt),{recursive:true});
 if(existsSync(rpt)){
  const p=JSON.parse(readFileSync(rpt,'utf8'));
  if(p.selected_items!==rows.length)throw Error('Prior report inconsistent');
 } else writeFileSync(rpt,JSON.stringify(report,null,2)+'\n');
 const msg='OpenStax 2e: curated='+rows.length+'; added='+added+'; already_present='+present+
   '; by_subject=inorganic:2,analytical:3,physical:3; expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### OpenStax CC BY 4.0 exercises\n'+msg+'\n');
 return {added,present,rows};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('OpenStax importer failed:',e.stack);process.exitCode=1;}
}
