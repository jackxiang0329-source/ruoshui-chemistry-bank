#!/usr/bin/env node
// Deterministic, metadata-only human review sampling for chemistry candidates.
// A representative in this plan does NOT approve its template siblings or make it publishable.
import {readFileSync,readdirSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const SUBJECTS=['analytical','physical','organic','inorganic'];
const normal=s=>String(s||'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
export function templateKey(value){
 // Replace numeric coefficients, signs and scientific notation; keep words and chemical species.
 return normal(value).replace(/(?<![\p{L}\p{N}])[+-]?\d+(?:[.,]\d+)?(?:e[+-]?\d+)?/giu,'#');
}
const kind=q=>{
 const t=String(q.question_type||'').toLowerCase(),r=String(q.resource_type||'').toLowerCase();
 return t.includes('flashcard')||r.includes('flashcard')||r.includes('study_card')?'study_card':'exercise_candidate';
};
export function reviewFlags(q){
 const s=q.source||{},flags=[];
 if(!q.question||!q.answer)flags.push('missing_question_or_answer');
 if(!s.repository&&!s.url&&!s.publisher)flags.push('missing_source_locator');
 if(!s.license&&!s.content_license&&!s.source_license)flags.push('missing_source_license');
 if(s.content_rights_verified!==true)flags.push('source_question_rights_not_explicitly_verified');
 if(!s.license_evidence)flags.push('item_or_source_license_evidence_not_attached');
 if(q.semantic_duplicate_review_pending===true)flags.push('semantic_duplicate_review_pending');
 if(Array.isArray(q.numeric_answers)&&q.numeric_answers.length)
  flags.push('numerical_answer_requires_scientific_review');
 if(kind(q)==='study_card')flags.push('study_card_not_exam_question');
 return flags;
}
const clusterKey=q=>[q.subject||'unclassified',q.topic||'unspecified',
 q.source?.repository||q.source?.publisher||'unknown',templateKey(q.question)].join('\u241f');
export function buildPlan(rows,{perSubject=32,maxPerTopic=6}={}){
 if(!Array.isArray(rows)||!Number.isInteger(perSubject)||perSubject<1||perSubject>200||
    !Number.isInteger(maxPerTopic)||maxPerTopic<1||maxPerTopic>30)
   throw Error('Unsafe human-review plan configuration');
 const ids=new Set(),clusters=new Map(),bySubject={},byKind={},
  topicCounts={},flagCounts={},allIds=[];
 for(const q of rows){
  if(!q||typeof q!=='object'||typeof q.id!=='string'||!q.id||
    ids.has(q.id))throw Error('Duplicate or missing candidate ID');
  if(q.publishable!==false||q.quality_status!=='awaiting_expert_review')
   throw Error('Unsafe reviewed/published item in candidate sampling input: '+q.id);
  ids.add(q.id);allIds.push(q.id);
  const subject=String(q.subject||'unclassified'),topic=String(q.topic||'unspecified'),
    k=kind(q),flags=reviewFlags(q);
  bySubject[subject]=(bySubject[subject]||0)+1;
  byKind[k]=(byKind[k]||0)+1;
  topicCounts[subject+':'+topic]=(topicCounts[subject+':'+topic]||0)+1;
  for(const f of flags)flagCounts[f]=(flagCounts[f]||0)+1;
  const key=clusterKey(q);
  if(!clusters.has(key))clusters.set(key,{subject,topic,source:q.source?.repository||q.source?.publisher||'unknown',items:[]});
  clusters.get(key).items.push({id:q.id,flags,kind:k});
 }
 const grouped=new Map(),clusterStatistics={multi_variant_clusters:0,multi_variant_candidates:0};
 for(const c of clusters.values()){
  c.items.sort((a,b)=>a.id.localeCompare(b.id));
  const cflags=[...new Set(c.items.flatMap(x=>x.flags))].sort(),count=c.items.length;
  if(count>1){clusterStatistics.multi_variant_clusters++;clusterStatistics.multi_variant_candidates+=count;}
  // Prioritize issue-heavy or same-template families, while maintaining topic and subject coverage.
  const priority=(cflags.includes('missing_question_or_answer')?100:0)+
    (cflags.includes('source_question_rights_not_explicitly_verified')?45:0)+
    (cflags.includes('item_or_source_license_evidence_not_attached')?20:0)+
    (count>1?16:0)+(c.items[0].kind==='study_card'?-10:0);
  const item={subject:c.subject,topic:c.topic,source:c.source,
   representative_id:c.items[0].id,candidate_count:count,
   sample_other_ids:c.items.slice(1,4).map(x=>x.id),
   resource_type:c.items[0].kind,flags:cflags,
   review_priority_score:priority,approved_for_publication:false};
  if(!grouped.has(c.subject))grouped.set(c.subject,new Map());
  if(!grouped.get(c.subject).has(c.topic))grouped.get(c.subject).set(c.topic,[]);
  grouped.get(c.subject).get(c.topic).push(item);
 }
 const result=[],selectedBySubject={},selectedTopics={};
 for(const subject of [...SUBJECTS,...[...grouped.keys()].filter(s=>!SUBJECTS.includes(s)).sort()]){
  const topics=grouped.get(subject);
  if(!topics)continue;
  const entries=[...topics].map(([topic,items])=>({topic,
   items:items.sort((a,b)=>b.review_priority_score-a.review_priority_score||
    b.candidate_count-a.candidate_count||a.representative_id.localeCompare(b.representative_id)),
   cursor:0}));
  entries.sort((a,b)=>{
   const ah=a.items[0],bh=b.items[0];
   return bh.review_priority_score-ah.review_priority_score||
    b.items.length-a.items.length||a.topic.localeCompare(b.topic);
  });
  let quota=perSubject,round=0;
  while(quota>0&&round<maxPerTopic){
   let selected=0;
   for(const e of entries){
    if(quota===0)break;
    if(e.cursor>=e.items.length)continue;
    result.push(e.items[e.cursor++]);quota--;selected++;
   }
   if(selected===0)break;
   round++;
  }
  selectedBySubject[subject]=perSubject-quota;
  selectedTopics[subject]=new Set(result.filter(x=>x.subject===subject).map(x=>x.topic)).size;
 }
 result.sort((a,b)=>SUBJECTS.indexOf(a.subject)-SUBJECTS.indexOf(b.subject)||
  b.review_priority_score-a.review_priority_score||a.topic.localeCompare(b.topic)||
  a.representative_id.localeCompare(b.representative_id));
 const covered=new Set(result.map(x=>x.representative_id));
 return {schema_version:1,total_candidates:rows.length,
  corpus_id_hash_sha256:createHash('sha256').update(allIds.sort().join('\n')).digest('hex'),
  by_subject:Object.fromEntries(Object.entries(bySubject).sort()),
  by_content_kind:Object.fromEntries(Object.entries(byKind).sort()),
  topics_total:Object.keys(topicCounts).length,template_source_clusters:clusters.size,
  ...clusterStatistics,flag_counts:Object.fromEntries(Object.entries(flagCounts).sort()),
  requested_representatives_per_subject:perSubject,max_representatives_per_topic:maxPerTopic,
  selected_representatives:result.length,selected_by_subject:selectedBySubject,
  selected_topics_by_subject:selectedTopics,unselected_candidate_count:rows.length-covered.size,
  expert_approved_count:0,publishable_count:0,source_rights_approved_by_this_process:0,
  checklist:['verify authorship and item-level redistribution rights','verify independent solution and chemical assumptions',
   'compare semantic duplicates and parameter variants','check undergraduate difficulty and units',
   'proofread Chinese, formulas and LaTeX before any human signoff'],
  note:'Representative sampling is not exhaustive. Never automatically mark sibling variants as reviewed, publishable, licensed, or chemically verified. All counts and flags are preliminary review priorities.',
  queue:result};
}
export function run(){
 const dir=join(ROOT,'data/candidates');
 const rows=readdirSync(dir).filter(name=>/^[a-f0-9]{64}\.json$/.test(name))
  .sort().map(name=>JSON.parse(readFileSync(join(dir,name),'utf8')));
 const plan=buildPlan(rows),output=join(ROOT,'harvest/expert_review_plan.json');
 mkdirSync(dirname(output),{recursive:true});
 const data=JSON.stringify(plan,null,2)+'\n';
 if(!existsSync(output)||readFileSync(output,'utf8')!==data)writeFileSync(output,data);
 console.log('Chemistry expert review sample: candidates='+plan.total_candidates+
  ' topic_count='+plan.topics_total+' clusters='+plan.template_source_clusters+
  ' representatives='+plan.selected_representatives+' expert_approved=0');
 return plan;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
