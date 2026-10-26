import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const read=p=>readFileSync(join(ROOT,p),'utf8');
const sha=p=>{const b=readFileSync(join(ROOT,p));return createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex')};
const APPS=[['pka-learn','pka_learn.html',253],['reactivity-learn','reactivity_learn.html',301],['photoredox-learn','photoredox_learn.html',197],['radical-learn','radical_learn.html',50]];
export function audit(){
 const lock=JSON.parse(read('third_party/ChemTrain/SOURCE_LOCK.json')),errors=[];let checked=0,total=0;
 for(const source of lock.sources){
  const name=source.repository.split('/')[1];
  for(const f of source.mirrored_files){const p='third_party/ChemTrain/'+name+'/'+f.path;try{if(sha(p)!==f.sha)errors.push('SHA mismatch '+p);checked++}catch(e){errors.push('Unreadable '+p)}}
  if(!read('third_party/ChemTrain/'+name+'/LICENSE-CONTENT.md').includes('CC BY 4.0'))errors.push('CC BY notice missing '+name);
 }
 for(const [name,page,expected] of APPS){
  const s=read('third_party/ChemTrain/'+name+'/'+page),m=/window\.[A-Z_]*DATA\s*=\s*/.exec(s);
  if(!m)throw Error('No embedded data: '+name);
  const d=JSON.parse(s.slice(m.index+m[0].length,s.indexOf(';</script>',m.index))),sources=[
   ...(d.sets||[]).map(g=>({kind:'card',g,items:g.cards||[]})),
   ...(d.regio||[]).map(g=>({kind:'regio',g,items:g.questions||[]})),
   ...(d.radicals||[]).map(g=>({kind:'radical',g,items:g.questions||[]})),
   ...(d.redox||[]).map(g=>({kind:'redox',g,items:g.questions||[]}))
  ];
  const rows=sources.flatMap(({kind,g,items})=>items.map((item,i)=>({kind,section_id:g.id,section_index:i+1,original:item})));
  const imported=read('imports/chemtrain/'+name+'.jsonl').trim().split('\n').map(JSON.parse);
  if(rows.length!==expected||imported.length!==expected)errors.push('Record count '+name);
  const keys=new Set();for(const [i,q] of imported.entries()){
   const source=rows[i],key=q.kind+'|'+q.section_id+'|'+JSON.stringify(q.original);
   if(!source||q.kind!==source.kind||q.section_id!==source.section_id||q.section_index!==source.section_index||JSON.stringify(q.original)!==JSON.stringify(source.original))errors.push('Changed record '+name+'/'+i);
   if(keys.has(key))errors.push('Duplicate record '+name+'/'+i);keys.add(key);
   if(q.source?.repository!=='ChemTrain/'+name||q.source?.license_content!=='CC BY 4.0'||q.publication_allowed!==false||q.review_status!=='external_quarantine')errors.push('Bad provenance '+name+'/'+i);
  }
  total+=imported.length;
 }
 if(total!==801)errors.push('Wrong total');
 return {sources:lock.sources.length,upstream_files:lock.sources.reduce((n,x)=>n+x.source_file_count,0),mirrored_files_verified:checked,unmirrored_files:lock.sources.reduce((n,x)=>n+x.not_mirrored.length,0),quarantined_records:total,formal_published:0,errors};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){const r=audit();console.log(JSON.stringify(r,null,2));if(r.errors.length)process.exitCode=1}
