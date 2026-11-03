import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const lock=JSON.parse(readFileSync(join(root,'third_party/ADDITIONAL_LOCK.json'),'utf8'));
const errors=[]; let checked=0;
for(const s of lock.sources) {
  const loc=join(root,s.path);
  if(!existsSync(join(loc,'LICENSE'))){
    errors.push(s.repo+': not checked out, run git submodule update --init --recursive');
    continue;
  }
  let got='';
  try{got=execFileSync('git',['-C',loc,'rev-parse','HEAD'],{encoding:'utf8'}).trim();}
  catch(e){errors.push(s.repo+': git HEAD unavailable');continue;}
  if(got!==s.commit)errors.push(s.repo+': HEAD mismatch '+got);
  if(!readFileSync(join(loc,'LICENSE'),'utf8').includes('MIT License'))
    errors.push(s.repo+': MIT notice missing');
  checked++;
}
console.log(JSON.stringify({source_count:lock.sources.length,checked,errors,
  publication_count:0,scope:'submodule revision and license only; scientific and article-level rights not assessed'},null,2));
if(errors.length)process.exitCode=1;
