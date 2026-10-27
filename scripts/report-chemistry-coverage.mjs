#!/usr/bin/env node
// Count provenance-aware candidate tiers for apples-to-apples chemistry vs physics comparisons.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
export function summarize(main,external,publication){
 const whole=main?.total_candidates,exercise=main?.by_content_kind?.exercise_candidate,
  card=main?.by_content_kind?.study_card,raw=external?.raw_staged_candidates;
 if(!Number.isInteger(whole)||!Number.isInteger(exercise)||!Number.isInteger(card)||
  whole!==exercise+card||!Number.isInteger(raw)||raw<0||
  publication?.total_candidates!==whole||!Number.isInteger(publication.approved_count)||
  publication.approved_count<0||publication.approved_count>whole||
  external.item_rights_approved!==0||external.expert_approved!==0||external.exam_ready!==0)
  throw Error('Unsafe or inconsistent chemistry coverage sources');
 return {schema_version:1,
  main_candidate_records:whole,main_exercise_candidates:exercise,main_study_cards:card,
  external_oer_unreviewed_blocks:raw,
  combined_record_count_not_unique_exercises:whole+raw,
  confirmed_official_exam_ready:publication.approved_count,
  external_openstax_work_license:external.work_license,
  external_source_exercise_blocks_with_original_solution:external.with_source_solution,
  external_sections_inspected:external.chapters_inspected,
  external_sections_total:external.discovered_source_chapters,
  exam_eligibility_note:'Main candidates include numerical template variations and study cards; the separate OpenStax OER archive contains raw question blocks. These counts cannot be interpreted as unique, correct, independent, or released chemistry exam questions. Cross-tier semantic overlap may exist.',
  counting_policy:'Keep raw OER, main candidate exercises, study cards, and approved exam bank numerically separate.'};
}
export function run(){
 const main=JSON.parse(readFileSync(join(ROOT,'harvest/quality_audit.json'),'utf8'));
 const ext=JSON.parse(readFileSync(join(ROOT,'external_sources/openstax_chemistry/coverage.json'),'utf8'));
 const release=JSON.parse(readFileSync(join(ROOT,'release/chemistry-approved-manifest.json'),'utf8'));
 const summary=summarize(main,ext,release),path=join(ROOT,'harvest/coverage_report.json');
 const body=JSON.stringify(summary,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Chemistry tiers: main_candidates='+summary.main_candidate_records+
  ' external_raw='+summary.external_oer_unreviewed_blocks+
  ' combined_records='+summary.combined_record_count_not_unique_exercises+
  ' published='+summary.confirmed_official_exam_ready);
 return summary;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
