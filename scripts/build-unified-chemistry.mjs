#!/usr/bin/env node
// Four-track offline CLI: writes private teacher key only under ignored .tmp/.
import { mkdirSync,writeFileSync,chmodSync } from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildUnifiedPaper} from '../src/chemistry/unified.mjs';
import {readVendorCatalog,readHolds} from '../src/chemistry/catalog-node.mjs';

const root=dirname(dirname(fileURLToPath(import.meta.url)));
function flags(args){
  const result={};
  for(const arg of args){
    const found=/^--([a-z-]+)=(.+)$/.exec(arg);
    if(!found) throw new Error('Invalid argument: '+arg);
    if(result[found[1]]!==undefined)throw new Error('Duplicate flag: '+found[1]);
    result[found[1]]=found[2];
  }
  const allowed=new Set(['track','discipline','count','seed','options','mode']);
  for(const key of Object.keys(result))if(!allowed.has(key))throw new Error('Unknown flag: '+key);
  return result;
}
export function buildCliPaper(params) {
  const track=params.track||params.discipline||'analytical';
  const config={track,count:params.count===undefined?9:Number(params.count),
    seed:params.seed===undefined?20261026:Number(params.seed)};
  const resources={};
  if(track==='inorganic'||track==='organic'){
    config.mode=params.mode||'name_to_formula';
    config.optionCount=params.options===undefined?4:Number(params.options);
    resources.catalog=readVendorCatalog(track);
    resources.heldIds=readHolds();
  }else if(params.mode!==undefined||params.options!==undefined){
    throw new Error('Choice-mode flags are not applicable to quantitative subjects');
  }
  return buildUnifiedPaper(config,resources);
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  try{
    const args=flags(process.argv.slice(2));
    const result=buildCliPaper(args);
    const directory=join(root,'.tmp','chemistry-unified',result.track);
    mkdirSync(directory,{recursive:true});
    const entries=[
      ['student.json',result.student],
      ['teacher-private.json',result.teacher],
      ['audit-report.json',result.report]
    ];
    for(const [name,data] of entries){
      const path=join(directory,name);
      writeFileSync(path,JSON.stringify(data,null,2)+'\n',{mode:name.startsWith('teacher')?0o600:0o644});
      if(name.startsWith('teacher'))chmodSync(path,0o600);
    }
    console.log(JSON.stringify({track:result.track,format:result.format,
      generated:result.student.question_count,
      status:'UNREVIEWED_DO_NOT_PUBLISH',student_file:join(directory,'student.json'),
      teacher_file:join(directory,'teacher-private.json'),
      report_file:join(directory,'audit-report.json')},null,2));
  }catch(error){
    console.error(error.message);
    process.exitCode=1;
  }
}
