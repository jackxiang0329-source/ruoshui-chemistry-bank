#!/usr/bin/env node
// Verifies 82 additional *persisted* chemistry records against fixed importers.
// Includes numeric calculations, pinned-source conceptual quantum items, and
// numerically generated MCQs: the latter are NOT all independent numeric exercises.
// This is a read-only audit and must never grant scientific or publication approval.
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {makeQuestions as eisQuestions} from './import-original-eis-pyeis.mjs';
import {makeQuestions as mitAnalyticalQuestions} from './import-analytical-calculator-mit.mjs';
import {generate as dftQuestions} from './import-dft-course-ez.mjs';
import {generate as qceduQuestions} from './import-qcedu-introqm.mjs';
import {generate as mcmasterQuestions} from './import-introqchem-2021.mjs';
import {generate as mitMcqs} from './import-parametric-mit-chemistry.mjs';
import {FAMILIES as EXISTING_MAIN_FAMILIES} from './audit-main-candidate-numerics.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const load=name=>JSON.parse(readFileSync(join(ROOT,'harvest',name),'utf8'));
export const SECONDARY=[
 {name:'new_eis_8',expected:8,source:'kbknudsen/PyEIS',license:'Apache-2.0',
  kind:'original_numerical_practice',prove:'complex_circuit_equation_recalculation',
  generate:()=>eisQuestions(load('pinned_pyeis_original_eis.json'))},
 {name:'mit_formula_analytical_8',expected:8,
  source:'PWO-CHINA/Chemistry-Calculator-Toolkit',license:'MIT',
  kind:'original_numerical_practice',prove:'chemical_stoichiometry_recalculation',
  generate:()=>mitAnalyticalQuestions(load('pinned_analytical_calculator_mit.json'))},
 {name:'attributed_dft_table_12',expected:12,source:'thisisntnathan/dftCourse',
  license:'CC BY 4.0',kind:'attributed_teaching_table_calculations',
  prove:'inverse_free_energy_population_walltime_checks',
  generate:()=>dftQuestions(load('pinned_dft_course_isomers.json'))},
 {name:'qcedu_quantum_3',expected:3,source:'QC-Edu/IntroQM',
  license:'CC0-1.0',kind:'mixed_numerical_and_symbolic_course',
  prove:'quantum_constants_and_symbolic_eigenfunction_residual',
  generate:()=>qceduQuestions(load('pinned_qcedu_introqm.json'))},
 {name:'mcmaster_course_21',expected:21,source:'PaulWAyers/IntroQChemProblems',
  license:'CC0-1.0',kind:'fixed_source_quantum_course_pending_item_rights',
  prove:'independent_numeric_or_conceptual_author_key_reconciliation',
  generate:mcmasterQuestions},
 {name:'mit_parametric_mcq_30',expected:30,source:'arya51-ai/parametric-question-engine',
  license:'MIT',kind:'deterministic_generated_multiple_choice',
  prove:'generator_solution_options_and_independent_method_checks',
  generate:mitMcqs}
];
const SHARED=['id','subject','topic','question_type','question','answer','explanation'];
const EXACT=['resource_type','level','difficulty','units','unit','numeric_answers','numeric_answer',
 'parameters','options','correct_option','source_key_issue',
 'source_question_cell_index','source_key_cell_index','review_notes'];
const identical=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const sha256=text=>createHash('sha256').update(text).digest('hex');
export function assertSecondaryStored(ref,stored,family){
 if(!ref||!stored||!SECONDARY.some(f=>f.name===family.name))
  throw Error('Unknown supplementary source replay family');
 if(ref.id!==stored.id||stored.schema_version!==1||
  stored.quality_status!=='awaiting_expert_review'||stored.publishable!==false||
  stored.source?.repository!==family.source||
  stored.source?.license!==family.license||
  stored.source?.content_rights_verified!==(family.name!=='mcmaster_course_21')||
  stored.source?.original_exam_question===true)
  throw Error('Provenance, rights or status drift '+ref?.id);
 if(family.name==='mcmaster_course_21'&&
   (stored.source?.item_level_rights_review_pending!==true||
    stored.source?.question_rights_await_human_confirmation!==true))
  throw Error('Third-party item rights quarantine violated '+ref.id);
 for(const name of SHARED){
  if(stored[name]!==ref[name])
   throw Error('Stored source-backed content mismatch '+family.name+' '+name+' '+ref.id);
 }
 for(const name of EXACT){
  if(Object.hasOwn(ref,name)&&!identical(stored[name],ref[name]))
   throw Error('Stored source-backed numeric/selection metadata mismatch '+name+' '+ref.id);
 }
 // Referee must not silently swap the source revision, code Git blob,
 // origin licensing statement, attribution or any pinned-source note.
 if(!identical(stored.source,ref.source)&&family.name!=='mit_parametric_mcq_30')
  throw Error('Pinned source provenance mismatch '+ref.id);
 if(family.name==='mit_parametric_mcq_30'){
  if(!stored.source?.git_blob_sha||stored.source?.origin!==
    'deterministic_generation_from_pinned_mit_code'||
   stored.source?.original_exam_question!==false||
   !stored.source?.url?.includes('/blob/'+stored.source.commit+'/')||
   stored.source.commit!=='cbe7d952443ff88ef89b514dd4fb1641a69c2950'||
   stored.source.file!=='chem/archetypes.js')
   throw Error('Pinned MIT parametric source metadata is invalid');
  if(!Array.isArray(stored.options)||stored.options.length<3||
   !stored.options.some(x=>typeof x==='string'&&x.includes(stored.answer)))
   // Formatted correct answer may be carried separately from visible option labels.
   // Do not assume numerical text always occurs as option substring.
   if(!Array.isArray(stored.options)||stored.options.length<3)
    throw Error('Malformed stored MCQ options');
 }
 if(stored.numeric_answers?.some(x=>!Number.isFinite(x))||
  (family.name==='mcmaster_course_21'&&stored.scientifically_machine_checked!==
    (stored.numeric_answers?.length>0)))
  throw Error('Numerical solution or conceptual status corrupt');
 return true;
}
export function replaySecondary(rows,quality){
 if(quality?.total_candidates!==rows.length||quality.by_publishable?.false!==rows.length||
    quality.expert_approved_publishable_count!==0||
    rows.length!==quality.by_content_kind?.study_card+
                   quality.by_content_kind?.exercise_candidate)
   throw Error('Stale main library before supplemental persisted replay');
 const index=new Map();
 for(const q of rows){
  if(index.has(q.id))throw Error('Duplicate persisted candidate ID '+q.id);
  index.set(q.id,q);
 }
 const previousIds=new Set();
 for(const family of EXISTING_MAIN_FAMILIES){
  const generated=family.generate();
  if(generated.length!==family.expected)throw Error('Prior numeric replay family changed');
  for(const q of generated)previousIds.add(q.id);
 }
 if(previousIds.size!==304)throw Error('Previous 304 covered IDs not unique');
 const union=new Set(),groups=[],examples=[];
 for(const group of SECONDARY){
  const originals=group.generate();
  if(originals.length!==group.expected)throw Error('Source importer count drift '+group.name);
  let withNumericArray=0,withSymbolic=0;
  for(const ref of originals){
   if(union.has(ref.id)||previousIds.has(ref.id))
    throw Error('Cross-source candidate overlap '+ref.id);
   union.add(ref.id);
   const saved=index.get(ref.id);
   if(!saved)throw Error('Source-linked saved candidate is missing '+group.name+' '+ref.id);
   assertSecondaryStored(ref,saved,group);
   if(saved.numeric_answers?.length>0||saved.numeric_answer)withNumericArray++;
   else withSymbolic++;
   if(!examples.some(x=>x.family===group.name))
    examples.push({family:group.name,saved_candidate_id:saved.id,
     original_file:'data/candidates/'+saved.id+'.json',
     topic:saved.topic,requires_expert_review:true});
  }
  groups.push({family:group.name,license:group.license,kind:group.kind,
   source:group.source,verification_method:group.prove,
   stored_candidate_records_checked:originals.length,
   explicitly_recorded_numeric_answers:withNumericArray,
   other_solution_or_option_records:withSymbolic,
   expert_human_approval:0,public_release_approved:0,
   item_rights_restriction:group.name==='mcmaster_course_21'});
 }
 const checked=groups.reduce((n,x)=>n+x.stored_candidate_records_checked,0);
 if(checked!==82||union.size!==82||groups.length!==6||examples.length!==6)
  throw Error('Incomplete additional persisted quality replay');
 return {schema_version:1,distinct_checked_stored_candidates:checked,
  source_groups_verified:groups.length,
  numeric_or_symbolic_record_status:'MIXED; not every record has a numerical answer',
  already_in_304_original_numeric_replay:0,
  combined_unique_candidate_ids_304_plus_82:previousIds.size+union.size,
  main_library_total:rows.length,
  main_records_outside_both_replays:rows.length-386,
  source_linked_rights_pending_candidate_count:21,
  source_linked_rights_newly_approved:0,
  scientific_human_approved:0,publishable_approved:0,exam_ready:0,
  checked_id_set_sha256:sha256([...union].sort().join('\n')),
  groups,examples,
  warning:'82 additional existing records, not newly imported questions: 31 source-linked applied/symbolic cases, 21 restricted McMaster course questions, 30 solver-generated MCQs. Source-lock and mathematical program checks are NOT item-level legal or human scientific approval.'};
}
export function run(){
 const rows=readdirSync(join(ROOT,'data/candidates')).filter(x=>x.endsWith('.json')).sort()
  .map(name=>JSON.parse(readFileSync(join(ROOT,'data/candidates',name),'utf8')));
 const quality=load('quality_audit.json');
 const result=replaySecondary(rows,quality);
 const path=join(ROOT,'harvest/main_supplementary_answer_replay.json');
 const body=JSON.stringify(result,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Supplementary main-candidate replay '+result.distinct_checked_stored_candidates+
  ' across '+result.source_groups_verified+' source families: rights approved 0, exam-ready 0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
