#!/usr/bin/env node
// Only pinned, manually license-approved structured data is eligible for copying.
import {readFileSync,writeFileSync,mkdirSync,existsSync,mkdtempSync,rmSync,statSync,realpathSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname,isAbsolute,resolve,relative} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const manifest=join(root,'harvest','approved_imports.json');
const destination=join(root,'data','candidates');
export function normalizeQuestion(value) {
  return String(value||'').normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
}
export function questionId(value) {
  return createHash('sha256').update(normalizeQuestion(value)).digest('hex');
}
export function safePath(p) {
  return typeof p==='string' && p.length>0 && !isAbsolute(p) &&
    !p.includes('\\') && !p.split('/').some(x=>x==='..'||x==='.'||x==='') && !p.startsWith('-');
}
export function validateSource(s) {
  if (!/^[A-Za-z0-9_.-]+$/.test(s.id||'')) throw Error('Unsafe source id');
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(s.repository||'')) throw Error('Unsafe repository');
  if (!/^[a-f0-9]{40}$/.test(s.commit||'')) throw Error('Full pinned Git SHA required');
  if (s.content_rights_verified!==true || !s.license || !s.attribution) throw Error('License review required');
  if (!s.license_evidence || typeof s.license_evidence!=='object' ||
      !/^https:\/\/github\.com\//.test(s.license_evidence.project_license||'') ||
      !/^https:\/\/github\.com\//.test(s.license_evidence.project_readme||'') ||
      typeof s.license_evidence.scope_note!=='string' || s.license_evidence.scope_note.length<30)
    throw Error('Explicit source-level question rights evidence required');
  if (!['inorganic','organic','analytical','physical','general'].includes(s.subject)) throw Error('Unsupported subject');
  if (!Array.isArray(s.files)||s.files.length===0||s.files.length>100) throw Error('Invalid source files');
  for(const f of s.files) {
    if (!safePath(f.path)||!['json','jsonl','organic-reaction-quiz'].includes(f.format)) throw Error('Invalid source path or format');
    if (f.format!=='organic-reaction-quiz' && (typeof f.question_field!=='string'||typeof f.answer_field!=='string')) throw Error('Missing field mapping');
  }
}
function records(file,format) {
  if (statSync(file).size>20_000_000) throw Error('Source file over 20 MB: '+file);
  const raw=readFileSync(file,'utf8');
  if (format==='jsonl') return raw.split(/\r?\n/).filter(Boolean).map(s=>JSON.parse(s));
  const parsed=JSON.parse(raw), items=Array.isArray(parsed)?parsed:parsed.questions;
  if (!Array.isArray(items)) throw Error('Expected JSON array or object.questions');
  return items;
}

export function mapRecord(row,f) {
  if (f.format==='organic-reaction-quiz') {
    if (!row.product || !Array.isArray(row.reagents) || !Array.isArray(row.correctReagents)) return null;
    const reagents=new Map(row.reagents.map(r=>[r.id,r]));
    const choices=row.reagents.map(r=>String(r.name||r.id)+(r.formula?' ('+r.formula+')':''));
    const answers=row.correctReagents.map(id=>reagents.get(id)?.name);
    if (!answers.length||answers.some(x=>typeof x!=='string'||!x)) return null;
    const question=[
      String(row.questionText||'').trim(),
      'Target: '+String(row.product.name||'')+(row.product.formula?' ('+row.product.formula+')':''),
      'Available reagents: '+choices.join('; ')
    ].join('\n');
    return {question,answer:answers.join('; '),original_id:row.id||null};
  }
  const question=String(row[f.question_field]||'').trim();
  const answer=String(row[f.answer_field]||'').trim();
  return {question,answer,original_id:row.id||null};
}

export function buildCandidate(mapped,s,f,index) {
  if(!mapped||typeof mapped.question!=='string'||typeof mapped.answer!=='string'||
     mapped.question.trim().length<12||mapped.answer.trim().length<1||
     mapped.question.length>15000||mapped.answer.length>30000) return null;
  const id=questionId(mapped.question);
  return {schema_version:1,id,subject:s.subject,question:mapped.question,answer:mapped.answer,
    quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:s.repository,commit:s.commit,file:f.path,record_index:index,
      original_id:mapped.original_id,license:s.license,attribution:s.attribution,
      license_evidence:s.license_evidence,content_rights_verified:true,
      url:'https://github.com/'+s.repository+'/blob/'+s.commit+'/'+f.path}};
}
export function assertCompatibleExisting(old,next) {
  if(old?.id!==next.id||old?.question!==next.question||old?.answer!==next.answer||
     old?.subject!==next.subject||old?.source?.repository!==next.source.repository||
     old?.source?.commit!==next.source.commit||old?.source?.file!==next.source.file||
     old?.quality_status!=='awaiting_expert_review'||old?.publishable!==false)
    throw Error('Candidate collision, rights mismatch or publication-state drift: '+next.id);
  return true;
}
function git(args) {
  execFileSync('git',args,{stdio:'pipe',timeout:120000,env:{...process.env,GIT_TERMINAL_PROMPT:'0'}});
}
export function run() {
  const cfg=JSON.parse(readFileSync(manifest,'utf8'));
  if(cfg.schema_version!==1||!Array.isArray(cfg.approved_sources))
    throw Error('Invalid approved source manifest');
  if(cfg.approved_sources.length===0) {
    console.log('No rights-approved imports configured; question import skipped.');
    return {added:0,duplicates:0};
  }
  // Preflight the full manifest before cloning or writing any candidate.
  cfg.approved_sources.forEach(validateSource);
  const temp=mkdtempSync(join(tmpdir(),'ruoshui-chem-'));
  let duplicates=0;
  const planned=new Map();
  try {
    for(const s of cfg.approved_sources) {
      const checkout=join(temp,s.id);
      git(['clone','--quiet','--filter=blob:none','--no-checkout','https://github.com/'+s.repository+'.git',checkout]);
      git(['-C',checkout,'fetch','--quiet','--depth=1','origin',s.commit]);
      git(['-C',checkout,'checkout','--quiet','--detach',s.commit]);
      let processed=0;
      for(const f of s.files) {
        const file=join(checkout,f.path);
        if(!existsSync(file))throw Error('Whitelisted data file missing: '+f.path);
        const real=realpathSync(file),base=realpathSync(checkout),rel=relative(base,real);
        if(rel.startsWith('..')||isAbsolute(rel)||!statSync(real).isFile())
          throw Error('Whitelisted file resolves outside pinned checkout: '+f.path);
        const items=records(real,f.format);
        for(let i=0;i<items.length&&processed<5000;i++) {
          const row=items[i];
          if(!row||typeof row!=='object')continue;
          const candidate=buildCandidate(mapRecord(row,f),s,f,i);
          if(!candidate)continue;
          processed++;
          const output=join(destination,candidate.id+'.json');
          if(planned.has(candidate.id)) {
            assertCompatibleExisting(planned.get(candidate.id),candidate);
            duplicates++;continue;
          }
          if(existsSync(output)) {
            assertCompatibleExisting(JSON.parse(readFileSync(output,'utf8')),candidate);
            duplicates++;continue;
          }
          planned.set(candidate.id,candidate);
        }
      }
    }
    // No writes before every upstream source, license record and collision passes.
    mkdirSync(destination,{recursive:true});
    for(const candidate of planned.values()) {
      const output=join(destination,candidate.id+'.json');
      writeFileSync(output,JSON.stringify(candidate,null,2)+'\n',{flag:'wx'});
    }
    const msg='Rights-approved candidates added='+planned.size+
      '; verified existing/within-batch duplicates='+duplicates+'; expert approved=0';
    console.log(msg);
    return {added:planned.size,duplicates};
  } finally {rmSync(temp,{recursive:true,force:true});}
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try {run();}catch(e) {console.error(e.message);process.exitCode=1;}
}
