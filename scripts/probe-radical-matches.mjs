#!/usr/bin/env node
import {readPinned,parseEmbeddedJSON} from './import-chemtrain-radical.mjs';
const data=parseEmbeddedJSON(readPinned()['radical_learn.html']);
console.log('ROOTKEYS '+JSON.stringify(Object.keys(data)));
console.log('POOL '+JSON.stringify(Object.fromEntries(Object.entries(data).filter(([k,v])=>Array.isArray(v)&&k!=='radicals').map(([k,v])=>[k,{n:v.length,sample:v.slice(0,2)}]))).slice(0,1700));
console.log('DECKS '+JSON.stringify(data.radicals.map(x=>({id:x.id,count:x.questions?.length||0,
 types:Object.fromEntries([...new Set((x.questions||[]).map(q=>q.type))].map(t=>[t,(x.questions||[]).filter(q=>q.type===t).length]))}))));
for(const deck of data.radicals)for(let i=0;i<(deck.questions||[]).length;i++){
 const q=deck.questions[i];if(q.type==='classify')continue;
 console.log('CANDIDATE '+JSON.stringify({deck:deck.id,index:i,keys:Object.keys(q),
 type:q.type,name:q.name,answer:q.answer,partner:q.partner,options:q.options,labels:q.labels,
 note:q.note?.slice(0,360),hard:q.hard,src:q.src?.slice(0,2)}).slice(0,1800));
}

console.log('PARTNER_MOLECULES '+JSON.stringify(data.mols.slice(29,38).map((x,i)=>({index:i+29,keys:Object.keys(x),name:x.name,title:x.title,label:x.label,formula:x.formula}))).slice(0,3600));
