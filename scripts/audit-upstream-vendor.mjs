import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const lock=JSON.parse(readFileSync(join(root,'third_party','UPSTREAM_LOCK.json'),'utf8'));
let files=0;const errors=[];
for(const source of lock.sources) {
  let count=0;
  for(const entry of source.files) {
    count++;files++;
    try {
      const content=readFileSync(join(root,entry.path));
      const sha=createHash('sha1').update('blob '+content.length+'\0').update(content).digest('hex');
      if(sha!==entry.sha) errors.push(entry.path+': SHA mismatch');
    } catch(error){errors.push(entry.path+': '+error.message)}
  }
  if(count!==source.count) errors.push(source.repo+': count mismatch');
}
console.log(JSON.stringify({checked:files,upstreams:lock.sources.map(x=>({repo:x.repo,commit:x.commit,files:x.count})),errors},null,2));
if(errors.length) process.exitCode=1;
