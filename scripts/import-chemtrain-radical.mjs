#!/usr/bin/env node
// Read-only extraction from a fixed upstream MIT/CC BY 4.0 mirror.
// Never execute the vendored HTML or embedded JavaScript.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const UPSTREAM='ChemTrain/radical-learn';
const REV='a1c6d4cb567db370fec10a2f258048f7e89f466c';
const MIRROR='third_party/ChemTrain_radical_learn/';
const FILES={
  'radical_learn.html':'7a81ac8756d00a0bd2f759f08b5c217e136e7937',
  'LICENSE-CONTENT.md':'dcc63233d386b460db6aefe60c1086fc15c865e9',
  'LICENSE':'f12f837df6513709d7d6e8234f9d9427d81d1627',
  'README.md':'ce9fe18bd67a77cf776d0913d4ceb5a93be84a33'
};
const ATTRIBUTION='Radical Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/radical-learn, licensed under CC BY 4.0.';
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
export const gitBlobSha=b=>createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');
export function readPinned(){
  const data={};
  for(const [file,expected] of Object.entries(FILES)){
    const bytes=readFileSync(join(ROOT,MIRROR,file));
    if(gitBlobSha(bytes)!==expected)throw Error('Pinned upstream Git blob mismatch: '+file);
    data[file]=bytes.toString('utf8');
  }
  if(!data['LICENSE-CONTENT.md'].includes('questions, their explanations')||
     !data['LICENSE-CONTENT.md'].includes('Quentin Bindschaedler')||
     !data['LICENSE-CONTENT.md'].includes('CC BY 4.0'))
    throw Error('Explicit question-content license missing');
  if(!data.LICENSE.includes('MIT License'))throw Error('MIT code license missing');
  return data;
}
export function parseEmbeddedJSON(html){
  const marker='window.RL_DATA = ';
  const begin=html.indexOf(marker);
  if(begin<0||html.indexOf(marker,begin+marker.length)!==-1)throw Error('Expected one RL_DATA assignment');
  const end=html.indexOf('</script>',begin+marker.length);
  if(end<0)throw Error('Missing script terminator');
  const json=html.slice(begin+marker.length,end).trim().replace(/;$/,'');
  const data=JSON.parse(json);
  if(!data||typeof data!=='object')throw Error('Invalid RL_DATA JSON');
  return data;
}
export function makeQuestions(data){
  if(!Array.isArray(data.radicals)||data.radicals.length!==3)throw Error('Unexpected radical deck count');
  const classify=data.radicals.flatMap(deck=>(deck.questions||[]).map((row,i)=>({row,deck:deck.id,index:i})))
    .filter(x=>x.row.type==='classify');
  if(classify.length!==29)throw Error('Pinned source expected 29 classification cards');
  const seenNames=new Set(),out=[],excluded=[];
  for(const {row,deck,index} of classify){
    if(typeof row.name!=='string'||!row.name.trim()||row.name.length>150||
       typeof row.note!=='string'||!row.note.trim()||row.note.length>3000||
       !['nu','el'].includes(row.answer))throw Error('Invalid source classification card '+deck+':'+index);
    const key=norm(row.name);
    if(seenNames.has(key))throw Error('Duplicate source radical name: '+row.name);
    seenNames.add(key);
    // Explicitly quarantine context-dependent ambiphilic cases rather than force a binary key.
    if(/ambiphil/i.test(row.note)){excluded.push(row.name);continue;}
    const question='有机化学·自由基极性：根据 Radical Learn 所采用的常见反应性分类，'
      +row.name+' 通常主要表现为亲核型还是亲电型自由基？（回答该教材中的主要倾向，具体反应条件可能影响表现。）';
    const id=questionId(question);
    const refs=Array.isArray(row.src)?row.src.filter(x=>typeof x==='string'&&/^https:\/\/[^\s]+$/.test(x)): [];
    out.push({id,subject:'organic',topic:'radical_polarity',level:'upper_undergraduate',
      question_type:'radical_nucleophilic_electrophilic_classification',
      question,answer:row.answer==='nu'?'亲核型':'亲电型',
      explanation_en:row.note,reference_urls:refs,hard:Boolean(row.hard),
      source:{repository:UPSTREAM,commit:REV,file:'radical_learn.html',
        git_blob_sha:FILES['radical_learn.html'],deck_id:deck,deck_question_number:index+1,
        original_id:deck+'-'+String(index+1),original_name:row.name,
        license:'CC BY 4.0',code_license:'MIT',attribution:ATTRIBUTION,
        license_evidence:'https://github.com/'+UPSTREAM+'/blob/'+REV+'/LICENSE-CONTENT.md',
        url:'https://github.com/'+UPSTREAM+'/blob/'+REV+'/radical_learn.html',
        content_rights_verified:true,
        changes:'Chinese self-contained classification question and translated answer label; original author explanation retained; no structure drawings or third-party article text copied.'},
      quality_status:'awaiting_expert_review',publishable:false});
  }
  if(out.length!==26||excluded.length!==3)throw Error('Expected 26 clear classifications, 3 ambiphilic exclusions');
  const ids=new Set(out.map(x=>x.id));
  if(ids.size!==out.length)throw Error('Duplicate generated question hashes');
  return {rows:out,excluded};
}
export function extract(){
  const data=readPinned();
  return makeQuestions(parseEmbeddedJSON(data['radical_learn.html']));
}
export function run(){
  const {rows,excluded}=extract();
  const dir=join(ROOT,'data','candidates');mkdirSync(dir,{recursive:true});
  let added=0,skipped=0;
  for(const row of rows){
    const path=join(dir,row.id+'.json');
    if(existsSync(path)){skipped++;continue;}
    writeFileSync(path,JSON.stringify({schema_version:1,...row},null,2)+'\n');added++;
  }
  const report={schema_version:1,source_repository:UPSTREAM,source_commit:REV,
    upstream_question_cards:29,generated_distinct_candidate_questions:rows.length,
    excluded_ambiphilic:excluded,by_subject:{organic:rows.length},
    license:'CC BY 4.0',code_license:'MIT',content_license_evidence:
      'https://github.com/'+UPSTREAM+'/blob/'+REV+'/LICENSE-CONTENT.md',
    upstream_html_git_blob_sha:FILES['radical_learn.html'],
    classification:'unreviewed_derived_text_only',publishable:false,
    note:'Only 26 unambiguous text-only classify cards, not all 50 source objects. Three ambiphilic cases excluded. No figures, literature extracts, or third-party measurement data copied.'};
  const reportPath=join(ROOT,'harvest','import_reports','chemtrain_radical_classify.json');
  mkdirSync(dirname(reportPath),{recursive:true});
  const reportText=JSON.stringify(report,null,2)+'\n';
  if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==reportText)
    writeFileSync(reportPath,reportText);
  const msg='Pinned CC BY 4.0 Radical Learn: upstream classification cards=29; excluded ambiphilic=3; eligible=26; added='+added+'; duplicate/already present='+skipped+'; expert approved=0.';
  console.log(msg);
  if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Radical Learn organic classification import\n- '+msg+'\n');
  return {added,skipped,eligible:rows.length,excluded:excluded.length};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  try{run();}catch(e){console.error('Radical Learn import blocked: '+e.stack);process.exitCode=1;}
}
