#!/usr/bin/env node
// Replays 304 ALREADY STORED, independently authored numerical chemistry candidates.
// Unlike generator-only tests this reads the actual data/candidates/*.json records.
// Does not approve chemistry, copyrights, semantic duplicates or publication.
import {readFileSync,readdirSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {generate as physical,verifyNumerics as verifyPhysical} from './import-original-physical.mjs';
import {generate as variants,checkInverse as verifyVariants} from './import-original-physical-variants.mjs';
import {generate as advanced,verifyInverse as verifyAdvanced} from './import-original-advanced-physical.mjs';
import {generate as analytical,verifyByMoles as verifyAnalytical} from './import-original-analytical-variants.mjs';
import {generate as instrumental,verifyMeasurement as verifyInstrumental} from './import-original-instrumental-analytical.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const SELF='jackxiang0329-source/ruoshui-chemistry-bank';
export const FAMILIES=[
 {name:'basic_physical_24',file:'scripts/import-original-physical.mjs',subject:'physical',
  expected:24,generate:physical},
 {name:'extended_physical_72',file:'scripts/import-original-physical-variants.mjs',
  subject:'physical',expected:72,generate:variants},
 {name:'advanced_physical_48',file:'scripts/import-original-advanced-physical.mjs',
  subject:'physical',expected:48,generate:advanced},
 {name:'stoichiometric_analytical_96',file:'scripts/import-original-analytical-variants.mjs',
  subject:'analytical',expected:96,generate:analytical},
 {name:'instrumental_analytical_64',file:'scripts/import-original-instrumental-analytical.mjs',
  subject:'analytical',expected:64,generate:instrumental}
];
const kindVariants={
 nernst_equation:'nernst_cell',
 vant_hoff_equilibrium_temperature:'vant_hoff_shift',
 vapor_pressure_temperature:'clausius_clapeyron',
 dilute_solution_osmotic_pressure:'osmotic_pressure',
 dilute_solution_freezing_point:'freezing_point_depression',
 quantum_particle_in_box:'particle_box_transition'
};
const kindAdvanced={
 ideal_binary_vle_raoult:'binary_raoult_vle',
 arrhenius_activation_energy_two_temperatures:'arrhenius_two_temperature',
 isothermal_ideal_gas_entropy:'ideal_gas_isothermal_entropy',
 debye_huckel_mean_activity_coefficient:'debye_huckel_monovalent',
 langmuir_surface_coverage:'langmuir_adsorption',
 harmonic_oscillator_vibrational_spacing:'harmonic_vibration_energy',
 molecular_electronic_transition_photon:'photon_energy_wavelength',
 eyring_activation_free_energy:'eyring_transition_state'
};
const kindAnalytical={
 primary_standard_acid_standardization:'hcl_standardization',
 edta_zinc_complexometric_standardization:'edta_standardization',
 iodometric_kio3_standardization:'iodometry_kio3',
 permanganate_oxalate_standardization:'permanganate_oxalate',
 double_indicator_carbonate_bicarbonate:'mixed_alkali',
 copper_iodometric_mass_fraction:'copper_iodometry',
 calcium_oxalate_indirect_assay:'calcium_oxalate',
 stepwise_pb_bi_complexometry:'pb_bi_edta'
};
const kindInstrumental={
 uv_vis_beer_lambert:'beer_lambert',
 single_point_standard_addition:'single_standard_addition',
 chromatographic_baseline_resolution:'chromatographic_resolution',
 chromatographic_theoretical_plates:'chromatographic_plate_number',
 coulometric_copper_deposition:'controlled_current_coulometry',
 conductivity_cell_calibration:'conductivity_cell_constant',
 gravimetric_chloride_silver:'silver_chloride_gravimetry',
 fluorescence_stern_volmer:'stern_volmer_quenching'
};
const canonical=x=>JSON.stringify(x);
const hash=x=>createHash('sha256').update(x).digest('hex');
function equalNumbers(xs,ys,id){
 if(!Array.isArray(xs)||!Array.isArray(ys)||xs.length!==ys.length||
  xs.some((v,i)=>!Number.isFinite(v)||!Number.isFinite(ys[i])||
   Math.abs(v-ys[i])>1e-11*Math.max(1e-20,Math.abs(v))))
  throw Error('Stored numerical results differ from independently regenerated results: '+id);
}
export function verifyStored(original,stored,family){
 if(!original||!stored||!FAMILIES.some(x=>x.name===family.name))
   throw Error('Unknown original numeric audit family');
 if(stored.id!==original.id||
  stored.subject!==family.subject||original.subject!==family.subject||
  stored.source?.repository!==SELF||
  stored.source?.file!==family.file||
  stored.source?.license!=='CC0-1.0'||
  stored.source?.origin!=='original_deterministic_generation'||
  stored.source?.content_rights_verified!==true||
  stored.source?.third_party_question_text_copied!==false||
  stored.source?.original_exam_question!==false||
  stored.quality_status!=='awaiting_expert_review'||
  stored.publishable!==false||stored.schema_version!==1)
  throw Error('Stored candidate provenance or publication status altered: '+original.id);
 for(const field of ['question','answer','explanation','topic','question_type']){
  if(stored[field]!==original[field])
   throw Error('Stored '+field+' differs from deterministic source: '+original.id);
 }
 if(canonical(stored.parameters)!==canonical(original.parameters))
  throw Error('Stored scientific parameters altered: '+original.id);
 if(Object.hasOwn(original,'units')&&stored.units!==original.units)
  throw Error('Stored physical units altered: '+original.id);
 if(family.name==='basic_physical_24'){
  // This family stores a rounded textual answer rather than numeric_answers.
  verifyPhysical(stored);
  if(Object.hasOwn(stored,'numeric_answers'))
   throw Error('Untracked basic-physical numeric answer array');
 }else{
  equalNumbers(stored.numeric_answers,original.numeric_answers,original.id);
  const key=family.name==='extended_physical_72'?kindVariants:
   family.name==='advanced_physical_48'?kindAdvanced:
   family.name==='stoichiometric_analytical_96'?kindAnalytical:kindInstrumental;
  const kind=key[stored.topic];
  if(!kind)throw Error('Unexpected stored physical/analytical topic '+stored.topic);
  if(family.name==='extended_physical_72')
   verifyVariants(kind,stored.parameters,stored.numeric_answers[0]);
  else if(family.name==='advanced_physical_48')
   verifyAdvanced(kind,stored.parameters,stored.numeric_answers);
  else if(family.name==='stoichiometric_analytical_96')
   verifyAnalytical(kind,stored.parameters,stored.numeric_answers);
  else verifyInstrumental(kind,stored.parameters,stored.numeric_answers[0]);
 }
 return true;
}
export function buildStoredReplay(rows,quality){
 const expectedCount=FAMILIES.reduce((n,x)=>n+x.expected,0);
 if(expectedCount!==304||quality?.total_candidates!==rows.length||
  quality?.by_content_kind?.exercise_candidate+quality?.by_content_kind?.study_card!==rows.length||
  quality?.expert_approved_publishable_count!==0||
  quality?.by_publishable?.false!==rows.length)
  throw Error('Cannot audit numeric candidates against inconsistent main library');
 const disk=new Map();
 for(const q of rows){
  if(disk.has(q.id))throw Error('Duplicate saved candidate '+q.id);
  disk.set(q.id,q);
 }
 const ids=new Set(),summary=[],sample=[];
 let checked=0;
 for(const family of FAMILIES){
  const generated=family.generate(),topics={};
  if(generated.length!==family.expected)throw Error('Generator cardinality drift '+family.name);
  for(const expected of generated){
   if(ids.has(expected.id))throw Error('Two original families generate same candidate '+expected.id);
   ids.add(expected.id);
   const stored=disk.get(expected.id);
   if(!stored)throw Error('Stored original numerical problem missing '+expected.id);
   verifyStored(expected,stored,family);
   checked++;
   topics[stored.topic]=(topics[stored.topic]||0)+1;
   if(!sample.some(x=>x.family===family.name))
    sample.push({family:family.name,topic:stored.topic,example_id:stored.id,
     original_candidate_json:'data/candidates/'+stored.id+'.json',
     numerical_values:stored.numeric_answers||[Number(stored.answer.split(' ')[0])],
     review_required:'chemistry_expert_scientific_assumptions_and_semantic_duplicates'});
  }
  const extras=rows.filter(q=>q.source?.repository===SELF&&q.source?.file===family.file&&!ids.has(q.id));
  if(extras.length)throw Error('Unreconciled generator-owned disk records: '+family.name);
  summary.push({family:family.name,source_file:family.file,subject:family.subject,
   records_on_disk_science_replayed:generated.length,method_topics:topics,
   scientific_model_review_human_approved:0,publication_approved:0});
 }
 if(checked!==304||ids.size!==304||sample.length!==5)throw Error('Incomplete persisted numeric verification');
 const sorted=[...ids].sort();
 return {schema_version:1,checked_stored_candidate_records:checked,
  checked_distinct_candidate_ids:ids.size,
  provenance_bound_generator_families:summary.length,
  reviewed_physical_candidate_records:144,
  reviewed_analytical_candidate_records:160,
  source_question_rights_machine_verified:true,
  source_question_rights_legally_confirmed_by_auditor:false,
  expert_science_approved:0,publishable_approved:0,formally_exam_ready:0,
  coverage_vs_main_records:{audited:checked,total:rows.length,
   other_candidates_not_yet_covered:rows.length-checked},
  audited_candidate_id_sha256:hash(sorted.join('\n')),
  families:summary,representative_review_queue:sample,
  caveat:'Replayed original candidate files against generator reference, independently inverted scientific equations and exact question/answer/unit metadata. This detects stored corruption but is not a human chemistry accuracy/rights review and does not add new questions.'};
}
export function run(){
 const dir=join(ROOT,'data/candidates');
 const rows=readdirSync(dir).filter(x=>x.endsWith('.json')).sort()
  .map(n=>JSON.parse(readFileSync(join(dir,n),'utf8')));
 const quality=JSON.parse(readFileSync(join(ROOT,'harvest/quality_audit.json'),'utf8'));
 const result=buildStoredReplay(rows,quality);
 const file=join(ROOT,'harvest/main_original_numeric_replay.json'),
  body=JSON.stringify(result,null,2)+'\n';
 mkdirSync(dirname(file),{recursive:true});
 if(!existsSync(file)||readFileSync(file,'utf8')!==body)writeFileSync(file,body);
 console.log('MAIN candidate numeric disk replay '+result.checked_stored_candidate_records+
  ' across '+result.provenance_bound_generator_families+
  ' original generators: expert-approved=0 exam-ready=0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
