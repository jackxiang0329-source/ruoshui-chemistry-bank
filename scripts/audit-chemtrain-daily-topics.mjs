#!/usr/bin/env node
// Metadata probe of author-licensed ChemTrain Daily. Read but do not import source cards.
// Emits category counts, MCQ completeness, and safe previews only.
import {parseData} from './import-chemtrain-daily-text.mjs';
import {createHash} from 'node:crypto';
const pin='327eb915764dbcdf7bce4974a0542f3b3d626554';
const htmlBlob='d0b152ff845f18a5ff5743c1e44a43b81f87584e';
const response=await fetch('https://raw.githubusercontent.com/ChemTrain/chemtrain-daily/'+pin+'/chemtrain_daily.html',{
 signal:AbortSignal.timeout(80000)
});
if(!response.ok)throw Error('Pinned source HTTP '+response.status);
const bytes=Buffer.from(await response.arrayBuffer());
const sha=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
if(sha!==htmlBlob)throw Error('Pinned HTML SHA mismatch');
const bank=parseData(bytes.toString()).bank;
const stats={};
for(let idx=0;idx<bank.length;idx++){
 const q=bank[idx],key=q.s+'/'+q.k;
 const z=stats[key]||(stats[key]={count:0,complete:0,answerZero:0,answerMissing:0,optionLengths:{},keyPatterns:{},sample:[]});
 z.count++;
 if(q.y===undefined)z.answerMissing++;
 if(q.y===0)z.answerZero++;
 const isGood=typeof q.t==='string'&&q.t.length>2&&typeof q.f==='string'&&q.f.length>0&&
  typeof q.ex==='string'&&q.ex.length>12&&Array.isArray(q.o)&&q.o.length>=2&&
  q.o.every(x=>typeof x.x==='string'&&x.x.length>0);
 if(isGood)z.complete++;
 z.optionLengths[q.o?.length||0]=(z.optionLengths[q.o?.length||0]||0)+1;
 for(const k of Object.keys(q))z.keyPatterns[k]=(z.keyPatterns[k]||0)+1;
 if(z.sample.length<2)z.sample.push({idx,t:q.t?.slice(0,100),f:q.f?.slice(0,140),
  options:q.o?.slice(0,3).map(x=>String(x.x).slice(0,90)),ex:q.ex?.slice(0,160)});
}
for(const [group,z] of Object.entries(stats))console.log('GROUP '+group+' '+JSON.stringify(z).slice(0,1700));
console.log('SUMMARY '+JSON.stringify({total:bank.length,groups:Object.keys(stats).length}));
