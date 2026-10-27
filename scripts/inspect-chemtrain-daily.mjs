#!/usr/bin/env node
// Inspect pinned upstream HTML card-data layout. No upstream content copied or imported.
import {createHash} from 'node:crypto';
const SOURCE='ChemTrain/chemtrain-daily';
const REF='327eb915764dbcdf7bce4974a0542f3b3d626554';
const BLOB='d0b152ff845f18a5ff5743c1e44a43b81f87584e';
const url='https://raw.githubusercontent.com/'+SOURCE+'/'+REF+'/chemtrain_daily.html';
const res=await fetch(url,{signal:AbortSignal.timeout(90000)});
if(!res.ok)throw Error('Pinned source unavailable HTTP '+res.status);
const bytes=Buffer.from(await res.arrayBuffer());
const sha=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
if(sha!==BLOB)throw Error('Pinned upstream Git blob mismatch '+sha);
const html=bytes.toString('utf8');
const regexes=[
 /<script[^>]*>/ig,/\b(?:const|let|var)\s+([A-Za-z0-9_$]*(?:BANK|DATA|POOL|QUEST|DB|CARD|TOPIC)[A-Za-z0-9_$]*)\s*=/g,
 /\bwindow\.[A-Za-z_$][A-Za-z0-9_$]*\s*=/g,/\bJSON\.parse\s*\(/g,/\banswers\s*:\s*\[/g,
 /\bquestions\s*:\s*\[/g,/\bquestion\s*:\s*["']/g,/\bcorrect\s*:/g,/\boptions\s*:/g
];
for(let k=0;k<regexes.length;k++){
 let m,count=0,examples=[];
 while((m=regexes[k].exec(html))!==null){
  count++;
  if(examples.length<5)examples.push({at:m.index,text:html.slice(Math.max(0,m.index-90),m.index+240).replace(/\s+/g,' ').slice(0,300)});
 }
 console.log('PATTERN '+k+': '+JSON.stringify({count,examples}));
}
const tags=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
console.log('SUMMARY '+JSON.stringify({sha,bytes:bytes.length,script_tags:tags.length,script_lengths:tags.map(x=>x[1].length).slice(0,20),prefix:html.slice(0,450).replace(/\s+/g,' ')}));
