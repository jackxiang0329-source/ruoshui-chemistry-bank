#!/usr/bin/env node
// Fail-closed migration: explicitly mark previously unreviewed candidates unpublishable.
// Never modifies question text, answer, source rights, IDs or review decisions.
import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
export function normalizeUnpublished(c){
 if(!c||typeof c!=='object'||!c.id||typeof c.question!=='string')throw Error('Malformed candidate');
 if(c.publishable!==undefined)return {candidate:c,changed:false};
 if(c.quality_status!=='awaiting_expert_review')throw Error('Candidate missing publication flag and review state: '+c.id);
 return {candidate:{...c,publishable:false},changed:true};
}
export function run(){
 const dir=join(root,'data','candidates');let changed=0,unchanged=0;
 for(const file of readdirSync(dir).filter(x=>x.endsWith('.json')).sort()){
  const path=join(dir,file),raw=readFileSync(path,'utf8'),obj=JSON.parse(raw);
  if(obj.id+'.json'!==file)throw Error('Candidate ID does not match filename '+file);
  const result=normalizeUnpublished(obj);
  if(result.changed){writeFileSync(path,JSON.stringify(result.candidate,null,2)+'\n');changed++;}
  else unchanged++;
 }
 console.log('Fail-closed publication migration: flagged_unpublished='+changed+', already_explicit='+unchanged);
 return {changed,unchanged};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
