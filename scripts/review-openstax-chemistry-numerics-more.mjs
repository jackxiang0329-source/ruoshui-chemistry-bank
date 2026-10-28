#!/usr/bin/env node
// Additional source-locked university chemistry numerical checks.
// Extends the historical OpenStax quarantine; DOES NOT import to main bank.
import {readFileSync,writeFileSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {curateScientificReviews,verifyScientificCase,CASES as ORIGINAL}
 from './review-openstax-chemistry-numerics.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OER=join(ROOT,'external_sources/openstax_chemistry');
const hash=s=>createHash('sha256').update(String(s||'').toLowerCase().normalize('NFKC').replace(/\s+/g,' ').trim()).digest('hex');
const close=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&
 Math.abs(a-b)<=.003*Math.max(1e-30,Math.abs(a),Math.abs(b));
const mass={C:12.011,H:1.008,O:15.999,N:14.007,S:32.06,P:30.974,
 Sc:44.956,Cl:35.45,F:18.998,Br:79.904,Na:22.990,Ca:40.078,
 Si:28.085,Zr:91.224,Al:26.9815,I:126.90447,K:39.0983,Mn:54.938};
const R=.082057338,N_A=6.02214076e23;
export const MORE=[
 {tag:'oxygen_mass_molecule_choice',path:'contents/m51011.md',ordinal:9,
  marker:'greatest mass of oxygen',hasAnswer:true,method:'oxygen atom counting and amount of substance',
  expected:[12.0,19.2,16.0]},
 {tag:'five_formula_molar_masses',path:'contents/m51011.md',ordinal:13,
  marker:'S<sub>8</sub>',hasAnswer:true,method:'formula decomposition with atomic mass sums',
  expected:[256.528,72.150,378.103,58.080,180.158]},
 {tag:'five_medicinal_formula_masses',path:'contents/m51011.md',ordinal:15,
  marker:'halothane',hasAnswer:true,method:'elemental stoichiometric composition',
  expected:[197.382,257.163,194.193,60.056,306.464]},
 {tag:'oxygen_atom_molecule_ozone_mass',path:'contents/m51011.md',ordinal:21,
  marker:'0.600 mol of oxygen atoms',hasAnswer:true,method:'atomic versus O2 and O3 molar masses',
  expected:[9.60,19.2,28.8]},
 {tag:'zircon_element_mass_and_atom_count',path:'contents/m51011.md',ordinal:23,
  marker:'0.3384 mol of zircon',hasAnswer:true,method:'stoichiometric subscripts and Avogadro constant',
  expected:[2.038e23,30.87,2.038e23,9.504,8.151e23,21.66]},
 {tag:'aluminum_mass_from_three_salts',path:'contents/m51011.md',ordinal:25,
  marker:'266 g of Al',hasAnswer:true,method:'mass fraction of Al in AlPO4, Al2Cl6 and Al2S3',
  questionTypo:'printed_Al2C1_6_is_Al2Cl6_not_carbon_digit_one',
  expected:[26.98,53.74,80.94]},
 {tag:'diamond_carat_carbon_atom_count',path:'contents/m51011.md',ordinal:26,
  marker:'1.25 carats',hasAnswer:false,method:'carat mass conversion and carbon Avogadro atom count',
  expected:[1.253e22]},
 {tag:'permanganate_molarity_mass',path:'contents/m51014.md',ordinal:10,
  marker:'0.0908 g of KMnO',hasAnswer:true,method:'molar mass concentration c=m/(MV)',
  expected:[.00115]},
 {tag:'four_solutions_molarities',path:'contents/m51014.md',ordinal:12,
  marker:'0.195 g of cholesterol',hasAnswer:true,method:'mass-to-moles with molecular formulas',
  expected:[.00504,.499,9.92,.0011]},
 {tag:'milk_calcium_ion_concentration',path:'contents/m51014.md',ordinal:14,
  marker:'about 1.0 g of calcium',hasAnswer:true,method:'Ca2+ elemental molar mass per litre',
  expected:[.025]},
 {tag:'ferric_nitrate_dilution_volume',path:'contents/m51014.md',ordinal:15,
  marker:'1.00-',hasAnswer:false,method:'conservation of solute moles at fixed dilution',
  expected:[.250]},
 {tag:'four_diluted_solution_molarities',path:'contents/m51014.md',ordinal:20,
  marker:'molarity of the diluted solution',hasAnswer:true,method:'c_i V_i=c_f V_f for four distinct solutes',
  keyIssue:'answer_labels_part_d_as_part_e',expected:[.125,.04888,.206,.0056]},
 {tag:'engine_radiator_heat_transfer',path:'contents/m51034.md',ordinal:8,
  marker:'240 °F',hasAnswer:true,method:'Fahrenheit temperature interval and 1 US gallon water',
  expected:[570]},
 {tag:'barium_hydroxide_endothermic_calorimetry',path:'contents/m51034.md',ordinal:14,
  marker:'3.15 g of Ba(OH)',hasAnswer:true,method:'solution and product sensible heat conservation',
  expected:[1.4]},
 {tag:'bomb_calorimeter_TNT_heat_release',path:'contents/m51034.md',ordinal:18,
  marker:'0.740-g sample',hasAnswer:true,method:'bomb-calorimeter plus water total heat capacity',
  expected:[11.7]},
 {tag:'cereal_macronutrient_calories',path:'contents/m51034.md',ordinal:24,
  marker:'breakfast cereal contains 3 g',hasAnswer:true,
  method:'macrocomponent calories per gram and summed food energy',
  expected:[140]},
 {tag:'iodine_vapor_bulb_temperature',path:'contents/m51065.md',ordinal:17,
  marker:'73.3-mL bulb',hasAnswer:false,method:'ideal gas n=m/M(I2), T=PV/(nR)',
  expected:[359]},
 {tag:'three_gas_samples_masses',path:'contents/m51065.md',ordinal:18,
  marker:'0.100 L of CO',hasAnswer:true,method:'ideal gas law with torr, kPa, atm and litres',
  expected:[.0724,23.1,.00015]},
 {tag:'resting_oxygen_moles',path:'contents/m51065.md',ordinal:23,
  marker:'consumes 14 L',hasAnswer:false,method:'PV=nRT with SI units and 298.15 K',
  expected:[.565]},
 {tag:'two_refrigerants_stp_molar_volumes',path:'contents/m51065.md',ordinal:26,
  marker:'10.0 g of each',hasAnswer:true,method:'STP ideal gas molar mass and volume',
  expected:[1.85,4.66]},
 {tag:'pure_water_40c_ionization_and_ph',path:'contents/m51117.md',ordinal:2,
  marker:'2.9',hasAnswer:false,allowMathML:true,
  method:'neutrality and ion-product square-root with non-neutral-7 pH',
  expected:[1.7e-7,6.769]},
 {tag:'rainwater_hydroxide_25c',path:'contents/m51117.md',ordinal:10,
  marker:'sample of rainwater',hasAnswer:false,allowMathML:true,
  method:'ion-product from independently given hydronium concentration',
  expected:[5.88e-9]}
];
export function independentlySolve(tag){
 const m=mass;
 switch(tag){
 case 'oxygen_mass_molecule_choice':return [.75*m.O,.6*2*m.O,1*m.O];
 case 'five_formula_molar_masses':return [
   8*32.066,5*m.C+12*m.H,2*m.Sc+3*m.S+12*m.O,
   3*m.C+6*m.H+m.O,6*m.C+12*m.H+6*m.O];
 case 'five_medicinal_formula_masses':return [
   2*m.C+m.H+m.Br+m.Cl+3*m.F,
   12*m.C+14*m.H+2*m.N+2*m.Cl,
   8*m.C+10*m.H+4*m.N+2*m.O,
   m.C+m.O+2*m.N+4*m.H,
   18*m.C+35*m.H+2*m.O+m.Na];
 case 'oxygen_atom_molecule_ozone_mass':return [.6*m.O,1.2*m.O,1.8*m.O];
 case 'zircon_element_mass_and_atom_count':return [
   .3384*N_A,.3384*m.Zr,.3384*N_A,.3384*m.Si,
   4*.3384*N_A,4*.3384*m.O];
 case 'aluminum_mass_from_three_salts':return [
   122*m.Al/(m.Al+m.P+4*m.O),
   266*2*m.Al/(2*m.Al+6*m.Cl),
   225*2*m.Al/(2*m.Al+3*m.S)];
 case 'diamond_carat_carbon_atom_count':return [(1.25*.2/m.C)*N_A];
 case 'permanganate_molarity_mass':return [
   .0908/((m.K+m.Mn+4*m.O)*.500)];
 case 'four_solutions_molarities':return [
   .195/(.1*(27*m.C+46*m.H+m.O)),
   4.25/(.5*(m.N+3*m.H)),
   1490/(2.5*(3*m.C+8*m.H+m.O)),
   .029/(.1*2*m.I)];
 case 'milk_calcium_ion_concentration':return [1.0/(m.Ca*1.0)];
 case 'ferric_nitrate_dilution_volume':return [(.250*1)/1];
 case 'four_diluted_solution_molarities':return [
   (1.00*.250)/2.00,(.5000*.1222)/1.250,(2.35*.350)/4.00,
   (22.50*.025)/100.0];
 case 'engine_radiator_heat_transfer':return [
   3.785411784*1000*4.184*(240-175)*5/9/1000];
 case 'barium_hydroxide_endothermic_calorimetry':return [
   (100+3.15+1.52)*4.20*3.1/1000];
 case 'bomb_calorimeter_TNT_heat_release':return [
   (534+675*4.184)*(26.9-23.4)/1000];
 case 'cereal_macronutrient_calories':return [3*4.1+18*4.1+6*9.1];
 case 'iodine_vapor_bulb_temperature':return [
   (.462*.0733)/(R*(.292/(2*m.I)))];
 case 'three_gas_samples_masses':return [
   ((307/760)*.100/(R*(26+273.15)))*(m.C+2*m.O),
   ((378.3/101.325)*8.75/(R*483))*(2*m.C+4*m.H),
   ((.23/760)*.221/(R*(273.15-54)))*39.948];
 case 'resting_oxygen_moles':return [
   100*14/(8.314462618*(25+273.15))];
 case 'two_refrigerants_stp_molar_volumes':return [
   10/(m.C+2*m.Cl+2*m.F)*R*273.15,
   10/(2*m.C+5*m.H+m.F)*R*273.15];
 case 'pure_water_40c_ionization_and_ph':{
   const h=Math.sqrt(2.9e-14);return [h,-Math.log10(h)];
 }
 case 'rainwater_hydroxide_25c':return [1e-14/(1.7e-6)];
 default:throw Error('Unknown independent source calculation '+tag);
 }
}
export function checkAdditional(c,computed=independentlySolve(c.tag)){
 if(!Array.isArray(computed)||computed.length!==c.expected.length||
  computed.some((v,i)=>!close(v,c.expected[i])))
  throw Error('Textbook numeric expectation differs from independently recomputed result: '+c.tag);
 const v=computed;
 switch(c.tag){
 case 'oxygen_mass_molecule_choice':
  if(!(v[1]>v[2]&&v[2]>v[0]))throw Error('Oxygen atom count ranking failure');break;
 case 'zircon_element_mass_and_atom_count':
  if(!close(v[4]/v[0],4)||!close(v[2],v[0]))throw Error('Zircon atomic stoichiometry failure');break;
 case 'four_diluted_solution_molarities':
  if(!close(v[0]*2,.25)||!close(v[3]*100,22.5*.025))throw Error('Dilution inverse failure');break;
 case 'iodine_vapor_bulb_temperature':
  if(!close((.292/(2*m.I))*R*v[0],.462*.0733))throw Error('Gas Kelvin inverse failure');break;
 case 'three_gas_samples_masses':
  if(!close(v[0]/(m.C+2*m.O)*R*(26+273.15),(307/760)*.1))
   throw Error('Torr molar gas inverse failure');break;
 case 'rainwater_hydroxide_25c':
  if(!close(v[0]*1.7e-6,1e-14))throw Error('Ion product inverse failure');break;
 case 'pure_water_40c_ionization_and_ph':
  if(!close(v[0]*v[0],2.9e-14)||!close(-Math.log10(v[0]),v[1]))
   throw Error('Neutral 40C water ion balance');break;
 }
 return true;
}
export function extendPinnedScientificReview(rows,pin,original){
 if(pin?.edition_rights_conflict_pending!==true||
  pin?.import_source_derived_exercises_into_main_prohibited!==true||
  pin?.items_rights_auto_approved!==false||
  original?.reviewed_source_cases!==ORIGINAL.length||
  original?.items?.length!==ORIGINAL.length||
  original?.source_commit!==pin.commit||
  original?.publishable!==0||original?.rights_confirmations!==0||
  original?.scholarly_human_confirmations!==0)
   throw Error('Explicit OER edition licensing gate required before source research');
 const map=new Map(),files=new Map(pin.files.map(x=>[x.path,x]));
 for(const row of rows){
  const key=row.source_path+':'+row.source_exercise_ordinal;
  if(map.has(key))throw Error('Duplicated chapter exercise ordinal '+key);
  map.set(key,row);
 }
 const added=[];
 for(const c of MORE){
  const row=map.get(c.path+':'+c.ordinal),file=files.get(c.path);
  if(!row||!file||file.sha!==row.source_blob_sha||
   row.source_commit!==pin.commit||row.source_repository!==pin.repository||
   row.question_sha256!==hash(row.question)||
   !row.question?.includes(c.marker)||
   row.has_source_solution!==c.hasAnswer||
   row.requires_media===true||(row.requires_mathml&&c.allowMathML!==true)||
   row.publishable!==false||row.exam_ready!==false||
   row.content_rights_verified!==false||row.item_level_rights_review_pending!==true)
   throw Error('Pinned real textbook source cannot be independently validated: '+c.tag);
  if(c.keyIssue&&(!row.answer?.includes('(e)')||
    !row.question?.includes('(d)')))throw Error('Known dilution answer key label changed');
  if(c.questionTypo&&!row.question?.includes('C1<sub>6</sub>'))
   throw Error('Known ambiguous chemical formula source typo changed');
  const results=independentlySolve(c.tag);checkAdditional(c,results);
  added.push({source_id:row.id,source_path:c.path,source_exercise_ordinal:c.ordinal,
   question_sha256:row.question_sha256,source_url:row.source_url,
   source_answer_present:row.has_source_solution,
   source_answer_independently_agreed:null,
   issue:c.keyIssue||null,source_question_typo:c.questionTypo||null,
   mathml_rendering_requires_review:row.requires_mathml,
   independent_method:c.method,independently_calculated_results:results,
   machine_computation_checked:true,
   independent_human_chemist_review_completed:false,
   question_translation_human_review_completed:false,
   source_item_rights_verified:false,semantic_duplicate_review_completed:false,
   material_requires_manual_rights_check:true,release_eligible:false});
 }
 if(added.length!==22||new Set(added.map(x=>x.source_id)).size!==22||
  new Set([...original.items,...added].map(x=>x.source_id)).size!==42)
   throw Error('Expected 42 distinct pinned course exercise source IDs');
 return {...original,reviewed_source_cases:42,
  independent_numerical_method_checks:42,
  source_answer_discrepancies:original.source_answer_discrepancies+
   added.filter(x=>x.issue).length,
  source_question_typographical_issues:added.filter(x=>x.source_question_typo).length,
  original_questions_without_answer_independently_solved:
   original.original_questions_without_answer_independently_solved+
   added.filter(x=>!x.source_answer_present).length,
  note:'42 fixed-source numerical checks, with reference-answer and chemical-formula transcription issues recorded. Still a version-rights-blocked external research archive, not expert-reviewed or publishable.',
  items:[...original.items,...added]};
}
export function run(){
 const raw=readFileSync(join(OER,'questions.jsonl'),'utf8')
  .split(/\r?\n/).filter(Boolean).map(x=>JSON.parse(x));
 const pin=JSON.parse(readFileSync(join(ROOT,'harvest/pinned_openstax_chemistry.json'),'utf8'));
 const basic=curateScientificReviews(raw,pin);
 for(const c of basic.items){
  if(c.release_eligible!==false||c.source_item_rights_verified!==false)
   throw Error('Historical scientific result unexpectedly approved');
 }
 const merged=extendPinnedScientificReview(raw,pin,basic);
 const path=join(OER,'independent_numeric_review.json');
 const body=JSON.stringify(merged,null,2)+'\n';
 if(readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Pinned historical chemistry scientific review count='+merged.reviewed_source_cases+
  ' source_answer_errors='+merged.source_answer_discrepancies+
  ' printed_question_typos='+merged.source_question_typographical_issues+
  ' expert_approved=0 license_approved=0');
 return merged;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
