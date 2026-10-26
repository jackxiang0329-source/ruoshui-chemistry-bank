import {execFileSync} from 'node:child_process';
import {readFileSync,existsSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const lock=JSON.parse(readFileSync(join(ROOT,'third_party/ChemTrain/CHEMTRAIN_LOCK.json'),'utf8'));
const errors=[];let checked=0;
for(const source of lock.sources){
 const location=join(ROOT,source.submodule_path);
 if(!existsSync(join(location,'LICENSE'))||!existsSync(join(location,'LICENSE-CONTENT.md'))){
   errors.push(source.repository+': source not initialized; run git submodule update --init --recursive');
   continue;
 }
 let actual;
 try{actual=execFileSync('git',['-C',location,'rev-parse','HEAD'],{encoding:'utf8'}).trim();}
 catch(e){errors.push(source.repository+': Git revision could not be read');continue;}
 if(actual!==source.commit)errors.push(source.repository+': expected '+source.commit+', got '+actual);
 const notice=readFileSync(join(location,'LICENSE-CONTENT.md'),'utf8');
 if(!notice.includes('CC BY 4.0'))errors.push(source.repository+': expected CC BY 4.0 text not found');
 const code=readFileSync(join(location,'LICENSE'),'utf8');
 if(!code.includes('MIT License'))errors.push(source.repository+': expected MIT license not found');
 checked++;
}
console.log(JSON.stringify({source_count:lock.source_count,initialized_and_checked:checked,errors,
 scope:'submodule SHA and license files, not chemistry correctness or individual third-party dataset rights'},null,2));
if(errors.length)process.exitCode=1;
