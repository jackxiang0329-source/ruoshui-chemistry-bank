#!/usr/bin/env node
// Read-only upstream shape probe. No unreviewed material is committed.
import {createHash} from 'node:crypto';
const SOURCE='ChemTrain/reaction-learn';
const REF='7563032ec79ed429336966fb42136d2815cd7e42';
const URL='https://raw.githubusercontent.com/'+SOURCE+'/'+REF+'/reaction_learn.html';
const response=await fetch(URL,{signal:AbortSignal.timeout(60000)});
if(!response.ok)throw Error('Upstream HTTP '+response.status);
const html=await response.text();
const sha=createHash('sha1').update('blob '+Buffer.byteLength(html)+'\0').update(html).digest('hex');
if(sha!=='3bf4278bb72f625b5abee37da72300f4ba901187')throw Error('Pinned upstream blob SHA mismatch: '+sha);
const patterns=[/const\s+[A-Z][A-Z_]{2,}\s*=/g,/\b(?:cards|CARDS|CARD_DATA|REACT[^\s=]{0,15}|SETS|QUESTIONS)\s*[:=]/g,/<script\b/g];
const output={sha,bytes:Buffer.byteLength(html),lines:html.split('\n').length,
 patterns:patterns.map((re,i)=>{
  let m,out=[];
  while((m=re.exec(html))&&out.length<32)out.push({at:m.index,context:html.slice(Math.max(0,m.index-100),m.index+190).replace(/\s+/g,' ').slice(0,275)});
  return {pattern:i,hits:out};
 })};

const match=html.match(/<script>window\.RXN_DATA\s*=\s*(\{[\s\S]*?\});<\/script>/);
if(!match)throw Error('Pinned JSON data structure not found');
const data=JSON.parse(match[1]);
const sets=data.sets.map(s=>({id:s.id,name:s.name,count:s.cards.length,card_keys:Object.keys(s.cards[0]||{})}));
const examples=data.sets.flatMap(s=>s.cards.slice(0,2).map(c=>{
 const x={set:s.id};
 for(const [key,value] of Object.entries(c)){
  if(Array.isArray(value)) x[key]={type:'array',length:value.length,preview:value.slice(0,2).map(v=>typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,z])=>[k,String(z).slice(0,120)])):String(v).slice(0,120))};
  else if(typeof value==='object'&&value!==null)x[key]={type:'object',keys:Object.keys(value),preview:JSON.stringify(value).slice(0,220)};
  else x[key]=String(value).slice(0,220);
 }
 return x;
}));
console.log(JSON.stringify({data:{set_count:sets.length,total_cards:data.sets.reduce((n,s)=>n+s.cards.length,0),mols:data.mols?.length,sets,examples:examples.slice(0,10)}},null,2));

