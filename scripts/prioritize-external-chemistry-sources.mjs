#!/usr/bin/env node
// Rank external HF/Zenodo source METADATA for human review; no dataset contents fetched.
// Claims of MIT/CC licenses are never interpreted as item-level redistribution rights.
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url);
const shards=new URL('harvest/external_sources/',root);
const output=new URL('harvest/external_review_queue.json',root);
const educational=/(questions?|quiz|mcq|exam|problem(?:s|.?set)?|exercis|assessment|answer|solutions?|homework|practice|\bqa\b|题库|试题|习题|练习)/i;
const research=/(metacognitive|students.? opinions|attitudes|educational engagement|journal article|dissertation|systematic review|survey of students|research paper|interviews|laboratory dataset|\bdata(?:set)?\s+(?:for|shown|from|of)\b|\bdata(?:set)?$|misconceptions|methodology of)/i;
const school=/(high.school|middle.school|secondary.school|gaokao|jee|neet|gcse|k.12|junior high|pupils|\b(?:9th|10th|11th|12th)[ -]?grade|高中|初中|高考)/i;
const synthetic=/(lora|embedding|model.card|synthetic|instruct|chatbot|alpaca|dpo|rag|fine.tun)/i;
const rights=/(?:^|[- ])(?:cc0|cc.by(?:-[0-9.]+)?|mit|apache-2[.]0|bsd)/i;
export function rankExternal(row){
 if(!['huggingface','zenodo'].includes(row?.platform)||typeof row.id!=='string'||
  typeof row.title!=='string'||typeof row.url!=='string')return null;
 const sub=Array.isArray(row.subjects)?row.subjects:[],
  headline=[row.id,row.title].join(' '),description=String(row.description||''),
  searchable=[headline,description].join(' '),
  lic=String(row.claimed_license||'UNVERIFIED').toLowerCase();
 if(!/chem|molecul|titration|electrochem|spectroscop|inorganic|organic|化学/i.test(searchable))return null;
 // Do not let a research abstract with generic 'questions' outweigh its article title.
 const direct=educational.test(headline),bodyOnly=educational.test(description);
 if(!direct&&!bodyOnly)return null;
 if(!direct&&research.test(headline))return null;
 if(school.test(headline)||synthetic.test(headline))return null;
 let score=0,signals=[];
 if(direct){score+=35;signals.push('explicit_question_or_answer_title');}
 else {score+=10;signals.push('question_terms_only_in_description');}
 if(sub.includes('analytical')){score+=18;signals.push('analytical');}
 if(sub.includes('physical')){score+=17;signals.push('physical');}
 if(sub.includes('organic'))score+=7;
 if(sub.includes('inorganic'))score+=7;
 if(row.platform==='huggingface')score+=5;
 if(rights.test(lic)&&!lic.includes('-nc-')){score+=14;signals.push('claimed_open_license');}
 if(research.test(headline)){score-=35;signals.push('possible_article_not_question_bank');}
 if(school.test(searchable)){score-=26;signals.push('likely_not_undergraduate');}
 if(synthetic.test(searchable)){score-=17;signals.push('synthetic_or_model_derived');}
 if(/non.?commercial|cc-by-nc|noassertion|unknown|unverified|other/.test(lic)){score-=7;signals.push('rights_uncertain_or_restricted');}
 if(score<20)return null;
 return {platform:row.platform,id:row.id,url:row.url,title:row.title,
  subjects:sub,metadata_score:score,signals,claimed_license:row.claimed_license||'UNVERIFIED',
  upstream_sha:row.upstream_sha||null,
  source_rights:'UNVERIFIED_ITEM_LEVEL',answer_quality:'UNVERIFIED',
  item_license_verified:false,question_and_answer_presence_verified:false,
  import_eligible:false,requires_human_rights_review:true,
  source_metadata_only:true};
}
export function choose(rows,limit=80){
 if(!Array.isArray(rows)||!Number.isInteger(limit)||limit<1||limit>200)throw Error('Unsafe external review queue');
 const map=new Map();
 for(const row of rows){
  const item=rankExternal(row);
  if(!item)continue;
  const key=item.platform+':'+item.id.toLowerCase();
  if(!map.has(key)||map.get(key).metadata_score<item.metadata_score)map.set(key,item);
 }
 return [...map.values()].sort((a,b)=>b.metadata_score-a.metadata_score||
  a.platform.localeCompare(b.platform)||a.id.localeCompare(b.id)).slice(0,limit);
}
export function run(){
 const all=[];
 if(existsSync(shards))for(const name of readdirSync(shards).sort()){
  if(!/^[0-9a-f]\.jsonl$/.test(name))continue;
  for(const line of readFileSync(new URL(name,shards),'utf8').split(/\r?\n/))
   if(line.trim())all.push(JSON.parse(line));
 }
 const queue=choose(all);
 const data={schema_version:1,metadata_records_examined:all.length,
  human_review_queue_size:queue.length,
  auto_approved_question_sets:0,auto_downloaded_question_texts:0,
  note:'Ranked from publicly claimed metadata only, NOT a license audit or a verified question inventory. Explicit per-item author provenance, data rights, answer validation, and undergraduate level must be reviewed before any copy.',
  queue};
 const body=JSON.stringify(data,null,2)+'\n';
 if(!existsSync(output)||readFileSync(output,'utf8')!==body)writeFileSync(output,body);
 console.log('External chemistry rights triage: sources='+all.length+' priority_queue='+queue.length+' approved=0');
 return data;
}
if(process.argv[1]===fileURLToPath(import.meta.url))run();
