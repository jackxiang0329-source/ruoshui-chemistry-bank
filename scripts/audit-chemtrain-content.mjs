import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const m=JSON.parse(readFileSync(join(root,'third_party/ChemTrain/EMBEDDED_CATALOG_AUDIT.json'),'utf8'));
const failures=[],results=[];
function gitBlob(data){return createHash('sha1').update('blob '+data.length+'\0').update(data).digest('hex');}
for(const item of m.catalogs){
  try{
    const original=readFileSync(join(root,item.path));
    const sha=gitBlob(original);
    if(sha!==item.git_blob_sha)failures.push(item.repo+': upstream blob checksum differs');
    const source=original.toString('utf8');
    const marker='window.'+item.data_key+' = ';
    const at=source.indexOf(marker);
    if(at<0)throw Error('data assignment not found');
    const begin=at+marker.length, end=source.indexOf(';</script>',begin);
    if(end<0)throw Error('JSON assignment terminator not found');
    const dataset=JSON.parse(source.slice(begin,end));
    if(!Array.isArray(dataset.mols))throw Error('mols is not an array');
    if(dataset.mols.length!==item.mols)failures.push(item.repo+': molecular record count changed');
    if(dataset.sets?.length!==item.sets)failures.push(item.repo+': card sets count changed');
    if(item.radicals!==undefined&&dataset.radicals?.length!==item.radicals)
      failures.push(item.repo+': radical groups count changed');
    results.push({repo:item.repo,molecular_records:dataset.mols.length,card_sets:dataset.sets.length,
      sha_matches:sha===item.git_blob_sha});
  }catch(e){failures.push(item.repo+': '+e.message);}
}
console.log(JSON.stringify({catalogs:results,source_snapshot_count:m.catalogs.length,
  molecular_record_sum:results.reduce((n,x)=>n+x.molecular_records,0),failures,
  data_publication_status:'quarantine source audit only; chemical QA and third-party measured data rights not certified'},null,2));
if(failures.length)process.exitCode=1;
