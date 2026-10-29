#!/usr/bin/env node
// Automated lexical/mathematical-model-family screening; NOT an originality certificate.
import {readdirSync,readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url).pathname;
const editorial=join(root,'editorial');
const parseJsonl=path=>readFileSync(path,'utf8').split(/\r?\n/).filter(x=>x.trim()).map(JSON.parse);
const currentDir=join(editorial,'advanced_integrated_v11');
const current=['inorganic','analytical','organic','physical'].flatMap(s=>parseJsonl(join(currentDir,s+'.jsonl')));
const historical=[];
for(const dir of readdirSync(editorial).filter(x=>/^advanced_integrated_v\d+$/.test(x))){
 const vol=Number(dir.match(/\d+$/)[0]);if(vol>=11)continue;
 for(const file of readdirSync(join(editorial,dir)).filter(x=>x.endsWith('.jsonl')))
  for(const row of parseJsonl(join(editorial,dir,file)))historical.push({...row,_volume:vol});
}
for(const file of readdirSync(join(root,'data','candidates')).filter(x=>x.endsWith('.json'))){
 try{const row=JSON.parse(readFileSync(join(root,'data','candidates',file),'utf8'));historical.push({...row,_volume:1});}catch(e){throw Error('Cannot parse candidate '+file+': '+e.message);}
}
const stop=new Set(['model','chemistry','chemical','reaction','mass','balance','rate','two','one','three','temperature','pressure','coupled','energy','equilibrium','inverse','inversion','integrated','analysis','solution','kinetic','system','numeric','phase','constant','law','molecular','and','with','from','of','the','in','a','to','for']);
const tokens=q=>{
 const s=String(q.model_family||q.title||q.topic||'').toLowerCase();
 const t=s.split(/[^a-z0-9]+/).filter(x=>x.length>2&&!stop.has(x));
 const zh=String(q.title||'').replace(/[^\u3400-\u9fff]/g,'');
 for(let i=0;i<zh.length-1;i++)t.push(zh.slice(i,i+2));
 return new Set(t);
};
const jac=(a,b)=>{let n=0;for(const x of a)if(b.has(x))n++;return n/(a.size+b.size-n||1)};
const queue=JSON.parse(readFileSync(join(currentDir,'overlap_review_queue.json'),'utf8'));
assert.equal(queue.current_draft_count,current.length);
const pending=new Set(queue.new_items_requiring_cross_series_comparison.map(x=>x.new_id));
for(const x of current)assert.ok(pending.has(x.id),'Missing manual novelty review registration: '+x.id);
const old=historical.filter(x=>x.id||x.title).map(x=>({...x,_tokens:tokens(x)}));
const matches=[];let exact=0;
for(const q of current){
 const t=tokens(q);
 const candidates=old.map(h=>({prior_id:h.id||null,prior_title:h.title||null,prior_volume:h._volume,prior_model_family:h.model_family||null,score:Number(jac(t,h._tokens).toFixed(4)),exact_model_family:!!q.model_family&&q.model_family===h.model_family})).sort((a,b)=>Number(b.exact_model_family)-Number(a.exact_model_family)||b.score-a.score).slice(0,4);
 exact+=candidates.filter(x=>x.exact_model_family).length;
 matches.push({new_id:q.id,model_family:q.model_family,judgement:'pending_human_equation_level_review',potential_prior_models:candidates});
}
const report={schema_version:1,series:11,current_count:current.length,historical_records_screened:old.length,exact_family_candidates:exact,method:'model_family token Jaccard + Chinese title bigrams; top four historical candidates per item',limitation:'Lexical comparison cannot establish mathematical equivalence, originality, scientific correctness or expert approval.',matches};
const out=join(currentDir,'cross_series_screening_ci.json');writeFileSync(out,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({pass:true,current:current.length,historical:old.length,exact_family_candidates:exact,manual_review_pending:matches.length,report:out}));
if(exact)console.log('WARNING: exact model-family candidates require urgent expert comparison; no publication is allowed.');
