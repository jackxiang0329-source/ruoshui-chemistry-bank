import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const buf=p=>readFileSync(join(ROOT,p));
const txt=p=>buf(p).toString('utf8');
const blobHash=b=>createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');
const APPS=[['pka-learn','pka_learn.html',253],['reactivity-learn','reactivity_learn.html',301],['photoredox-learn','photoredox_learn.html',197],['radical-learn','radical_learn.html',50]];
const KEYS=['pka','rxn','pg','tmc','rl','pr','rad'];
const extract=(html,varName)=>{
 const re=new RegExp('window\\.'+varName+'\\s*=\\s*'),m=re.exec(html);
 if(!m)throw Error('Embedded data not found: '+varName);
 const end=html.indexOf(';</script>',m.index+m[0].length);
 if(end<0)throw Error('Embedded data end not found');
 return JSON.parse(html.slice(m.index+m[0].length,end));
};
export function audit(){
 const lock=JSON.parse(txt('third_party/ChemTrain/SOURCE_LOCK.json')),errors=[];
 let direct=0,split=0,child=0,daily=0;
 for(const source of lock.sources){
  const prefix='third_party/ChemTrain/'+source.repository.split('/')[1]+'/';
  for(const f of source.mirrored_files){direct++;try{if(blobHash(buf(prefix+f.path))!==f.sha)errors.push('Git blob mismatch '+prefix+f.path)}catch(e){errors.push('Cannot read '+prefix+f.path)}}
  for(const f of source.reconstructed_files||[]){
   split++;try{
    const pieces=f.parts.map(p=>{const b=buf(prefix+p.path);if(blobHash(b)!==p.sha)errors.push('Part mismatch '+p.path);return b});
    if(blobHash(Buffer.concat(pieces))!==f.sha)errors.push('Reconstructed file mismatch '+f.path);
   }catch(e){errors.push('Failed reconstructing '+f.path+': '+e.message)}
  }
  if(!txt(prefix+'LICENSE-CONTENT.md').includes('CC BY 4.0'))errors.push('Missing CC-BY attribution '+prefix);
 }
 for(const [name,page,expected] of APPS){
  const s=txt('third_party/ChemTrain/'+name+'/'+page);
  const d=extract(s,name==='pka-learn'?'PKA_DATA':'RL_DATA');
  const groups=[
   ...(d.sets||[]).map(g=>({kind:'card',g,rows:g.cards||[]})),
   ...(d.regio||[]).map(g=>({kind:'regio',g,rows:g.questions||[]})),
   ...(d.radicals||[]).map(g=>({kind:'radical',g,rows:g.questions||[]})),
   ...(d.redox||[]).map(g=>({kind:'redox',g,rows:g.questions||[]}))
  ];
  const expectedRows=groups.flatMap(({kind,g,rows})=>rows.map((original,i)=>({kind,section_id:g.id,section_index:i+1,original})));
  const imported=txt('imports/chemtrain/'+name+'.jsonl').trim().split('\n').map(JSON.parse);
  if(expectedRows.length!==expected||imported.length!==expected)errors.push('Child records count '+name);
  const seen=new Set();
  imported.forEach((q,i)=>{
   const row=expectedRows[i],sig=q.kind+'|'+q.section_id+'|'+JSON.stringify(q.original);
   if(!row||q.kind!==row.kind||q.section_id!==row.section_id||q.section_index!==row.section_index||JSON.stringify(q.original)!==JSON.stringify(row.original))errors.push('Child record differs '+name+'/'+i);
   if(seen.has(sig))errors.push('Duplicate child record '+name+'/'+i);seen.add(sig);
   if(q.publication_allowed!==false||q.review_status!=='external_quarantine')errors.push('Unauthorized publication '+name+'/'+i);
  });
  child+=imported.length;
 }
 const source=lock.sources.find(x=>x.repository==='ChemTrain/chemtrain-daily');
 const originalHTML=Buffer.concat(source.reconstructed_files[0].parts.map(p=>buf('third_party/ChemTrain/chemtrain-daily/'+p.path))).toString('utf8');
 const master=extract(originalHTML,'CTD_DATA');
 if(master.bank.length!==2892||master.mols.length!==2971)errors.push('Daily source array size changed');
 const old=new Set(),seen=new Set();
 for(const app of KEYS){
  const rows=txt('imports/chemtrain-daily/'+app+'.jsonl').trim().split('\n').map(JSON.parse);
  for(const q of rows){
   const original=master.bank[q.original_record_index-1];
   if(!original||original.s!==app||JSON.stringify(q.original)!==JSON.stringify(original))errors.push('Daily record differs '+q.id);
   if(q.publication_allowed!==false||q.review_status!=='external_quarantine')errors.push('Daily record not quarantined '+q.id);
   const key=JSON.stringify(q.original);
   if(seen.has(key))errors.push('Daily exact duplicate '+q.id);seen.add(key);
   if(old.has(q.id))errors.push('Daily ID duplicate '+q.id);old.add(q.id);
  }
  daily+=rows.length;
 }
 if(direct!==54||split!==1||child!==801||daily!==2892)errors.push('Unexpected completeness totals');
 return {upstream_projects:lock.sources.length,original_files:55,direct_files_verified:direct,assembled_files_verified:split,
  child_learning_records:child,derived_daily_mcq:daily,independently_unique_question_claim:false,published:0,errors};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){const result=audit();console.log(JSON.stringify(result,null,2));if(result.errors.length)process.exitCode=1}
