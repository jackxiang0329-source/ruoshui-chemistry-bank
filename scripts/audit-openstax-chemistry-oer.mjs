#!/usr/bin/env node
// Prioritize HUMAN validation of pinned OpenStax chemistry exercise blocks.
// Never promote an item from the external source archive to a publishable bank.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
export function buildReview(rows,limit=180){
 if(!Array.isArray(rows)||!Number.isInteger(limit)||limit<1||limit>1000)
  throw Error('Invalid raw OER review batch');
 const ids=new Set(),byChapter=new Map(),flags={missing_answer:0,requires_media:0,
  requires_mathml:0,plain_text_with_source_solution:0};
 for(const q of rows){
  if(!/^OSCHEM-[a-f0-9]{24}$/.test(q.id||'')||ids.has(q.id)||
     !/^contents\/m\d+\.md$/.test(q.source_path||'')||
     q.quality_status!=='unverified_external_staging'||q.publishable!==false||
     q.exam_ready!==false||q.content_rights_verified!==false||
     q.item_level_rights_review_pending!==true)
   throw Error('Unsafe, duplicated or promoted external chemistry exercise');
  ids.add(q.id);
  if(!q.has_source_solution)flags.missing_answer++;
  if(q.requires_media)flags.requires_media++;
  if(q.requires_mathml)flags.requires_mathml++;
  if(q.has_source_solution&&!q.requires_media&&!q.requires_mathml)
   flags.plain_text_with_source_solution++;
  const chapter=q.source_path,plain=q.has_source_solution&&!q.requires_media&&!q.requires_mathml,
   score=(plain?90:0)+(q.has_source_solution?20:0)+
    (q.requires_media?-50:0)+(q.requires_mathml?-20:0);
  const item={id:q.id,source_path:chapter,source_url:q.source_url,
   source_exercise_ordinal:q.source_exercise_ordinal,source_sha:q.source_blob_sha,
   original_solution_attached:q.has_source_solution,
   media_required:q.requires_media,mathml_required:q.requires_mathml,
   manual_review_priority:score,rights_review_required:true,
   science_review_required:true,approved:false};
  if(!byChapter.has(chapter))byChapter.set(chapter,[]);
  byChapter.get(chapter).push(item);
 }
 const chapters=[...byChapter].sort(([a],[b])=>a.localeCompare(b));
 for(const [,items] of chapters)items.sort((a,b)=>b.manual_review_priority-a.manual_review_priority||
  a.source_exercise_ordinal-b.source_exercise_ordinal||a.id.localeCompare(b.id));
 // Round-robin prevents a single heavily exercised topic from monopolizing review.
 const queue=[];let round=0;
 while(queue.length<limit){
  let took=0;
  for(const [,items] of chapters){
   if(queue.length>=limit)break;
   if(items[round]){queue.push(items[round]);took++;}
  }
  if(!took)break;round++;
 }
 const high=queue.filter(x=>x.original_solution_attached&&!x.media_required&&!x.mathml_required).length;
 return {schema_version:1,total_unreviewed_exercise_blocks:rows.length,
  source_chapters_with_exercises:chapters.length,
  review_queue_size:queue.length,likely_text_only_with_answer_in_review_queue:high,
  total_by_flag:flags,expert_approved:0,source_rights_approved:0,
  publication_eligible:0,
  note:'Metadata-only review ordering. Even plain-text items with a source solution require scientific, edition, semantic duplicate and item-rights verification; do not automatically add to main bank or exam.',
  review_queue:queue};
}
export function run(){
 const root=join(ROOT,'external_sources/openstax_chemistry');
 const src=join(root,'questions.jsonl');
 if(!existsSync(src))throw Error('Missing actual downloaded OER exercise archive');
 const rows=readFileSync(src,'utf8').split(/\r?\n/).filter(Boolean).map(x=>JSON.parse(x));
 const review=buildReview(rows),path=join(root,'review_priority.json');
 const data=JSON.stringify(review,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==data)writeFileSync(path,data);
 console.log('OpenStax chemistry human-review queue='+review.review_queue_size+
  ' from='+rows.length+' plain_text_with_answer='+review.total_by_flag.plain_text_with_source_solution+
  ' approved=0');
 return review;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
