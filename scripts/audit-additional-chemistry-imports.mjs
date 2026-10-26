// Read-only audit of two newly pulled chemistry sources. Does not publish any question.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const norm=x=>String(x??'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
const contents=p=>readFileSync(join(root,p));
const json=p=>JSON.parse(contents(p).toString('utf8'));
const jsonl=p=>contents(p).toString('utf8').split('\n').filter(x=>x.trim()).map(JSON.parse);
const gitBlob=p=>{
  const data=contents(p);
  return createHash('sha1').update('blob '+data.length+'\0').update(data).digest('hex');
};
const organicPaths=[
  'data/questions.json','data/More questions/first-5-questions.json',
  'data/More questions/beginner-questions.json','data/10_advanced_questions_need-work.json',
  'data/More questions/Hard-and-incorrect-questions.json',
  'data/easy_questions_need_work.json',
  'data/Old-versions/image-based/questions.json',
  'data/Old-versions/text-based/questions.json'
];
export function auditNewSources() {
  const errors=[];
  const chemistryPath='third_party/kankoor/chemistry/general_chemistry.json';
  const kRaw=json(chemistryPath),kDedup=jsonl('imports/kankoor/general_chemistry_unique.jsonl'),kReport=json('imports/kankoor/dedup-report.json');
  const uniqueK=new Map(),conflictsK=[];
  for(const [i,q] of kRaw.entries()){
    const key=norm(q.question)+'|'+q.options.map(norm).join('|');
    if(!Array.isArray(q.options)||q.options.length<2||q.correctOption<1||q.correctOption>q.options.length||
      norm(q.options[q.correctOption-1])!==norm(q.correctAnswer)) errors.push('Kankoor index/answer problem '+(i+1));
    const old=uniqueK.get(key);
    if(old && (norm(old.correctAnswer)!==norm(q.correctAnswer)||old.correctOption!==q.correctOption))
      conflictsK.push(q.id);
    if(!old) uniqueK.set(key,q);
  }
  if(kRaw.length!==915||uniqueK.size!==60||kDedup.length!==60||
      kRaw.length-uniqueK.size!==855||conflictsK.length!==0) errors.push('Kankoor dedup count or conflicts');
  if(kReport.source_blob_sha!==gitBlob(chemistryPath))errors.push('Kankoor source blob changed');
  const kDedupKeys=new Set();
  for(const item of kDedup){
    const key=norm(item.question)+'|'+item.options.map(norm).join('|');
    if(kDedupKeys.has(key)||!uniqueK.has(key))errors.push('Kankoor unique question mismatch');
    kDedupKeys.add(key);
    if(item.review_status!=='external_quarantine'||item.publication_allowed!==false)errors.push('Kankoor publication flag invalid');
  }
  const orgReport=json('imports/organic-reactions/dedup-report.json');
  const orgDedup=jsonl('imports/organic-reactions/questions_unique.jsonl');
  const orgConflicts=json('imports/organic-reactions/answer-conflicts.json');
  let total=0,duplicates=0,conflicts=0;
  const seen=new Map();
  for(const file of organicPaths){
    const destination='third_party/Organic-Chemistry-Quiz-JS/'+file;
    if(orgReport.source_blobs[file]!==gitBlob(destination))errors.push('Organic source blob mismatch '+file);
    const loaded=json(destination),rows=Array.isArray(loaded)?loaded:loaded.questions;
    if(!Array.isArray(rows))throw new Error('Bad upstream organic JSON: '+file);
    total+=rows.length;
    for(const q of rows){
      const key=norm(q.questionText)+'|'+norm(q.product?.name)+'|'+norm(q.reactionType);
      const answer=[...(q.correctReagents||[])].sort().join('|');
      if(seen.has(key)){
        duplicates++;
        if(seen.get(key)!==answer)conflicts++;
      }else seen.set(key,answer);
    }
  }
  if(total!==50||seen.size!==22||duplicates!==28||conflicts!==4)errors.push('Organic duplicate/conflict counts changed');
  if(orgDedup.length!==22||orgConflicts.length!==4)errors.push('Organic derived files mismatch');
  for(const q of orgDedup) {
    const key=norm(q.questionText)+'|'+norm(q.product?.name)+'|'+norm(q.reactionType);
    if(!seen.has(key)||q.publication_allowed!==false||
       !['external_quarantine','draft_source_quarantine','conflicting_answer_quarantine'].includes(q.review_status))
      errors.push('Organic derived question invalid '+q.id);
    if(orgConflicts.some(x=>x.id===q.id) && q.review_status!=='conflicting_answer_quarantine')
      errors.push('Conflicting reagent answers not held '+q.id);
  }
  const licenses={
    kankoor:contents('third_party/kankoor/LICENSE').toString('utf8').includes('ODC-By'),
    organic:contents('third_party/Organic-Chemistry-Quiz-JS/LICENSE').toString('utf8').includes('MIT License')
  };
  if(!licenses.kankoor||!licenses.organic)errors.push('Upstream license notice missing');
  return {
    sources:['Taikutsu-Lyrz/Afghanistan-kankoor-exam-dataset','MuzaPro/Organic-Chemistry-Quiz-JS'],
    kankoor:{raw:kRaw.length,unique:uniqueK.size,removed:kRaw.length-uniqueK.size,answer_conflicts:conflictsK.length},
    organic:{raw:total,unique:seen.size,removed:duplicates,answer_conflicts:conflicts},
    total_raw:kRaw.length+total,within_source_unique:uniqueK.size+seen.size,
    removed_within_source:duplicates+kRaw.length-uniqueK.size,
    published:0,licenses_present:licenses,
    warning:'New sources are quarantined. Cross-source/semantic duplicates and third-party exam question rights not certified.',
    errors
  };
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  const result=auditNewSources();
  console.log(JSON.stringify(result,null,2));
  if(result.errors.length)process.exitCode=1;
}
