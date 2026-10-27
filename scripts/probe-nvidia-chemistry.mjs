#!/usr/bin/env node
// Inspect open NVIDIA dataset metadata and first RQA rows. NO questions are stored.
const ds='nvidia/Nemotron-Science-v1',base='https://datasets-server.huggingface.co';
async function json(url){const r=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'ruoshui-chemistry-source-audit'}});if(!r.ok)throw Error('HTTP '+r.status+' '+url);return r.json();}
const [meta,splits]=await Promise.all([
 json('https://huggingface.co/api/datasets/'+ds),
 json(base+'/splits?dataset='+encodeURIComponent(ds))]);
const entries=(splits.splits||[]).map(x=>({config:x.config,split:x.split,num_rows:x.num_rows}));
console.log('DATASET '+JSON.stringify({sha:meta.sha,license:meta.cardData?.license,tags:(meta.tags||[]).filter(t=>t.includes('license')),splits:entries}));
const rq=entries.find(x=>/RQA/i.test(x.split))||entries.find(x=>/RQA/i.test(x.config));
if(!rq)throw Error('RQA specific chemistry split missing');
const u=new URL(base+'/rows');for(const [k,v] of Object.entries({dataset:ds,config:rq.config,split:rq.split,offset:0,length:4}))u.searchParams.set(k,String(v));
const sample=await json(String(u));
console.log('SCHEMA '+JSON.stringify({config:rq.config,split:rq.split,columns:(sample.features||[]).map(x=>x.name),
 rows:(sample.rows||[]).map(x=>({row_idx:x.row_idx,keys:Object.keys(x.row||{}),
 messages:Array.isArray(x.row?.messages)?x.row.messages.map(m=>({role:m.role,len:typeof m.content==='string'?m.content.length:-1,prefix:String(m.content||'').slice(0,180)})):[],
 license:x.row?.license,truncated:x.truncated_cells})),partial:sample.partial}));
