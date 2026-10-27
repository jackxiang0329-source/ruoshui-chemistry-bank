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
console.log(JSON.stringify(output,null,2));
