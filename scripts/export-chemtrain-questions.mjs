// Reconstruct ChemTrain source question objects from checked-out, pinned Git submodules.
// This reads SOURCE HTML and writes JSONL to stdout; no production database operations.
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const DEFINITIONS=[
 ['pka-learn','pka_learn.html','PKA_DATA',['sites'],'5250dce7a367be0e767b2e3e7a26aa50c27b12a0','de1e8441908198301a7e82da76fd5febd9de8900'],
 ['radical-learn','radical_learn.html','RL_DATA',['regio','radicals'],'a1c6d4cb567db370fec10a2f258048f7e89f466c','7a81ac8756d00a0bd2f759f08b5c217e136e7937'],
 ['reactivity-learn','reactivity_learn.html','RL_DATA',['sites','regio'],'be6505465d92fc983aabc40bd9863de791b0d2cf','9779b9167ff4af2445a1efe845db3119928f6d12'],
 ['photoredox-learn','photoredox_learn.html','RL_DATA',['redox'],'260cf0553b42fc510de655d68bad902af7f94e38','5351d56c165fd581edbc66e71f80c3a42bcdb738']
];
const norm=x=>String(x??'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
export function embedData(source,key) {
 const token='window.'+key+' = ';
 const index=source.indexOf(token);
 if(index<0)throw Error('Missing dataset marker '+key);
 const from=index+token.length,end=source.indexOf('</script>',from);
 if(end<0)throw Error('Missing embedded JSON terminator');
 return JSON.parse(source.slice(from,end).trim().replace(/;$/,''));
}
function pack(question,repo){
 const q={...question};
 if('mol' in q){q.original_molecule_ref=typeof q.mol==='number'?q.mol:null;delete q.mol;}
 // Numerical pKa measurements are from other authors; the upstream CC BY text license excludes them.
 if(repo==='pka-learn'&&Array.isArray(q.sites)){
   q.sites=q.sites.map(site=>{const v={...site};delete v.p;return v;});
   q.third_party_numeric_values_omitted=true;
 }
 return q;
}
export function extractQuestions() {
 const rows=[], seen=new Set();
 for(const [repo,file,key,groups,commit,sha] of DEFINITIONS) {
   const mirror=join(ROOT,'third_party','ChemTrain_mirrors',repo,file);
   const submodule=join(ROOT,'third_party','ChemTrain',repo,file);
   const full=existsSync(mirror)?mirror:submodule;
   const bytes=readFileSync(full);
   const actual=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
   if(actual!==sha)throw Error('Pinned HTML source mismatch for '+repo+': '+actual);
   const d=embedData(bytes.toString('utf8'),key);
   let count=0;
   for(const group of groups)for(const deck of d[group]||[])for(const [i,q] of (deck.questions||[]).entries()){
     const signature=[q.type||'site_comparison',q.name||'',q.partner||'',q.ask||''].map(norm).join('|');
     if(seen.has(signature))continue;
     seen.add(signature);
     rows.push({
       id:'CT-'+repo.toUpperCase().replace(/-/g,'_')+'-'+String(++count).padStart(4,'0'),
       kind:'chemtrain_question_source',
       original_language:'en',stem_fields:pack(q,repo),stem_signature:signature,
       source:{repository:'ChemTrain/'+repo,commit,file,git_blob_sha:sha,field:group,
         deck_id:deck.id,deck_question_number:i+1,content_license:'CC BY 4.0',code_license:'MIT'},
       rights:'requires_quotation_and_third_party_measurement_review',
       review_status:'external_quarantine',publishable:false
     });
   }
 }
 return rows;
}
if(process.argv[1]===fileURLToPath(import.meta.url))
 process.stdout.write(extractQuestions().map(row=>JSON.stringify(row)).join('\n')+'\n');
