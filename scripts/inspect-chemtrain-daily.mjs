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


const m=html.match(/<script>window\.CTD_DATA\s*=\s*(\{[\s\S]*?\});<\/script>/);
if(!m)throw Error('Pinned structured CTD_DATA JSON not found');
const data=JSON.parse(m[1]);
const bank=data.bank;
if(!Array.isArray(bank))throw Error('Missing data.bank');
const stats={};
for(const q of bank){
 const key=String(q.s)+'/'+String(q.k);
 const entry=stats[key]||(stats[key]={count:0,with_svg_or_mol:0,examples:[]});
 entry.count++;
 if(Object.keys(q).some(z=>z==='m'||z==='mol'||z==='svg'||z==='structure'))entry.with_svg_or_mol++;
 if(entry.examples.length<2)entry.examples.push(JSON.stringify(q).slice(0,800));
}
console.log('DATA '+JSON.stringify({keys:Object.keys(data),apps:Object.keys(data.apps||{}),
 bankCount:bank.length,mols:data.mols?.length,firstBankKeys:Object.keys(bank[0]||{}),
 groups:stats}).slice(0,42000));
