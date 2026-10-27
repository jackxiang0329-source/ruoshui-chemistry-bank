#!/usr/bin/env node
// Read-only chemistry candidate audit: source traceability, study cards vs exercises, exact/near overlap.
// Generates deterministic report only. NEVER alters questions, answers, or license statuses.
import {readFileSync,readdirSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
export const normalize=s=>String(s||'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
const sourceKey=q=>q.source?.repository||q.source?.publisher||q.source?.url||'unattributed';
const classification=q=>{
 const kind=String(q.question_type||'').toLowerCase(),resource=String(q.resource_type||'').toLowerCase();
 if(kind.includes('flashcard')||resource.includes('flashcard')||resource.includes('study_card'))return 'study_card';
 if(!q.answer||!q.question)return 'incomplete_unpublishable';
 return 'exercise_candidate';
};
const template=s=>normalize(s).replace(/\d+(?:[.,]\d+)?(?:[eE][+-]?\d+)?/g,'#').replace(/[一二三四五六七八九十]{2,}/g,'#');
const shingles=s=>{
 const t=normalize(s).replace(/\s+/g,'').replace(/[^\p{L}\p{N}]+/gu,'');
 const a=new Set();for(let i=0;i<=t.length-4;i++)a.add(t.slice(i,i+4));return a;
};
const similarity=(a,b)=>{
 if(!a.size||!b.size)return 0;
 const small=a.size<=b.size?a:b,big=a.size<=b.size?b:a;
 let intersection=0;for(const x of small)if(big.has(x))intersection++;
 return 2*intersection/(a.size+b.size);
};
export function buildAudit(rows){
 const bySubject={},byType={},bySource={},byQuality={},byPublication={},byTopic={};
 const byText=new Map(),byTemplate=new Map(),byBucket=new Map(),problems=[],studycards=[];
 const seenIds=new Set(),allIds=[];
 const entries=[];
 for(const q of rows){
  const id=String(q.id||'');
  if(!id||seenIds.has(id))throw Error('Duplicate or missing candidate ID '+id);
  seenIds.add(id);allIds.push(id);
  const subject=String(q.subject||'unclassified'),kind=classification(q),source=sourceKey(q),topic=String(q.topic||'unspecified');
  bySubject[subject]=(bySubject[subject]||0)+1;
  byType[kind]=(byType[kind]||0)+1;
  bySource[source]=(bySource[source]||0)+1;
  byTopic[subject+':'+topic]=(byTopic[subject+':'+topic]||0)+1;
  byQuality[q.quality_status||'unmarked']=(byQuality[q.quality_status||'unmarked']||0)+1;
  byPublication[String(q.publishable)]=(byPublication[String(q.publishable)]||0)+1;
  if(q.publishable===true&&q.quality_status!=='expert_approved')
    throw Error('Unapproved candidate mistakenly marked publishable '+id);
  if(kind==='study_card')studycards.push(id);
  if(kind==='incomplete_unpublishable')problems.push({id,issue:'question or answer missing'});
  if(!q.source?.license&&!q.source?.content_license&&!q.source?.source_license)
    problems.push({id,issue:'source license not explicit in candidate'});
  if(!q.source?.url&&!q.source?.repository&&!q.source?.publisher)
    problems.push({id,issue:'source not traceable'});
  const text=normalize(q.question),key=subject+':'+text;
  if(!byText.has(key))byText.set(key,[]);byText.get(key).push(id);
  const groupKey=subject+':'+topic;
  const tplKey=groupKey+':'+template(q.question);
  if(!byTemplate.has(tplKey))byTemplate.set(tplKey,[]);byTemplate.get(tplKey).push(id);
  if(!byBucket.has(groupKey))byBucket.set(groupKey,[]);byBucket.get(groupKey).push(entries.length);
  entries.push({id,subject,topic,source,answer:normalize(q.answer),question:text,sig:shingles(text)});
 }
 const exact=[...byText.values()].filter(v=>v.length>1).map(v=>({count:v.length,ids:v.slice(0,5)})).sort((a,b)=>b.count-a.count);
 const families=[...byTemplate.values()].filter(v=>v.length>1).map(v=>({count:v.length,ids:v.slice(0,4)})).sort((a,b)=>b.count-a.count);
 const suspicious=[];let suspiciousTotal=0;
 for(const bucket of byBucket.values()){
  for(let i=0;i<bucket.length;i++)for(let j=i+1;j<bucket.length;j++){
   const a=entries[bucket[i]],b=entries[bucket[j]];
   if(a.source===b.source||a.answer!==b.answer||a.question===b.question)continue;
   const score=similarity(a.sig,b.sig);
   if(score<0.88)continue;
   suspiciousTotal++;
   if(suspicious.length<60)suspicious.push({id_a:a.id,id_b:b.id,similarity:Math.round(score*10000)/10000,sources:[a.source,b.source]});
  }
 }
 const sortedIds=allIds.sort();
 return {
  schema_version:1,total_candidates:rows.length,
  corpus_hash_sha256:createHash('sha256').update(sortedIds.join('\n')).digest('hex'),
  by_subject:Object.fromEntries(Object.entries(bySubject).sort()),
  by_content_kind:byType,by_quality_status:byQuality,by_publishable:byPublication,
  source_counts:Object.fromEntries(Object.entries(bySource).sort()),
  topic_counts:Object.fromEntries(Object.entries(byTopic).sort()),
  source_license_or_record_issues:{count:problems.length,samples:problems.slice(0,35)},
  exact_duplicate_question_groups:{count:exact.length,samples:exact.slice(0,30)},
  same_template_families:{count:families.length,samples:families.slice(0,30)},
  cross_source_possible_semantic_duplicates:{count:suspiciousTotal,samples:suspicious},
  explicitly_separated_study_cards:{count:studycards.length,sample_ids:studycards.slice(0,5)},
  expert_approved_publishable_count:rows.filter(q=>q.publishable===true&&q.quality_status==='expert_approved').length,
  interpretation:'Near matches and shared templates are REVIEW FLAGS ONLY. Do not automatically delete, merge, republish, or treat this as a chemical-expert check.'
 };
}
export function run(){
 const dir=join(root,'data','candidates');
 const rows=readdirSync(dir).filter(x=>x.endsWith('.json')).sort().map(name=>JSON.parse(readFileSync(join(dir,name),'utf8')));
 const report=buildAudit(rows),file=join(root,'harvest','quality_audit.json'),contents=JSON.stringify(report,null,2)+'\n';
 mkdirSync(dirname(file),{recursive:true});
 if(!existsSync(file)||readFileSync(file,'utf8')!==contents)writeFileSync(file,contents);
 console.log('Candidate quality audit: total='+report.total_candidates+
  ', study_cards='+report.by_content_kind.study_card+
  ', exercise_candidates='+report.by_content_kind.exercise_candidate+
  ', exact_groups='+report.exact_duplicate_question_groups.count+
  ', cross_source_review_pairs='+report.cross_source_possible_semantic_duplicates.count+
  ', verified_publishable='+report.expert_approved_publishable_count);
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error('Candidate audit blocked:',e.stack);process.exitCode=1;}
}
