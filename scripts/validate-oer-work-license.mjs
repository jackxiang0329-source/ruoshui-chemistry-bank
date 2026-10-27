#!/usr/bin/env node
// Offline fail-closed validation of official OER license claims; NEVER downloads question text.
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const source=new URL('../harvest/oer_work_license_review.json',import.meta.url);
export function validateRegistry(data){
 if(data?.schema_version!==1||!Array.isArray(data.reviewed_sources)||
    data.source_pages_checked!==data.reviewed_sources.length||
    data.question_text_downloaded!==0||data.questions_added_to_candidates!==0)
   throw Error('OER work-level registry summary mismatch');
 const ids=new Set(),urls=new Set(),subjects=new Set(['inorganic','organic','analytical','physical']);
 for(const row of data.reviewed_sources){
  if(typeof row.id!=='string'||!/^[-a-z0-9]+$/.test(row.id)||ids.has(row.id))throw Error('Invalid or duplicate OER source ID');
  ids.add(row.id);
  if(typeof row.url!=='string'||!/^https:\/\/oer\.galileo\.usg\.edu\/chemistry-ancillary\/\d+\/$/.test(row.url)||
     urls.has(row.url)||row.license_evidence_url!==row.url)throw Error('OER official evidence URL invalid');
  urls.add(row.url);
  if(row.license!=='CC BY 4.0'||row.license_claim_verified_on_official_page!==true||
     row.full_text_host!=='alg.manifoldapp.org'||!Array.isArray(row.authors)||!row.authors.length||
     !Array.isArray(row.suggested_subjects)||!row.suggested_subjects.length||
     !row.suggested_subjects.every(s=>subjects.has(s))||!Number.isInteger(row.year))
    throw Error('Missing OER license, author or subject evidence');
  if(row.individual_question_provenance_verified!==false||
     row.third_party_illustration_and_text_rights_verified!==false||
     row.answer_quality_independently_verified!==false||
     row.import_approved!==false||row.questions_imported_in_this_review!==0||
     row.review_status!=='awaiting_file_level_and_per_question_review')
    throw Error('OER work-level rights MUST NOT be promoted to question-level import approval');
 }
 return {sources:ids.size,questions_added:0};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const x=JSON.parse(readFileSync(source,'utf8'));
 console.log(JSON.stringify(validateRegistry(x)));
}
