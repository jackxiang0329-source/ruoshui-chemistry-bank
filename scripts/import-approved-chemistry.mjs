#!/usr/bin/env node
// Only pinned, manually license-approved structured data is eligible for copying.
import {readFileSync,writeFileSync,mkdirSync,existsSync,mkdtempSync,rmSync,statSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname,isAbsolute,resolve} from 'node:path';
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
  if (!['inorganic','organic','analytical','physical','general'].includes(s.subject)) throw Error('Unsupported subject');
  if (!Array.isArray(s.files)||s.files.length===0||s.files.length>20) throw Error('Invalid source files');
  for(const f of s.files) {
    if (!safePath(f.path)||!['json','jsonl','organic-reaction-quiz'].includes(f.format)) throw Error('Invalid source path or format');
    if (f.format!=='organic-reaction-quiz' && (typeof f.question_field!=='string'||typeof f.answer_field!=='string')) throw Error('Missing field mapping');
  }
}
function records(file,format) {
  if (statSync(file).size>2_000_000) throw Error('Source file over 2 MB: '+file);
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

function git(args) {
  execFileSync('git',args,{stdio:'pipe',timeout:120000,env:{...process.env,GIT_TERMINAL_PROMPT:'0'}});
}
export function run() {
  const cfg=JSON.parse(readFileSync(manifest,'utf8'));
  if (cfg.schema_version!==1||!Array.isArray(cfg.approved_sources)) throw Error('Invalid approved source manifest');
  if (cfg.approved_sources.length===0) {
    console.log('No rights-approved imports configured; question import skipped (discovery still runs).');
    return;
  }
  const temp=mkdtempSync(join(tmpdir(),'ruoshui-chem-'));
  let added=0, duplicates=0;
  try {
    for(const s of cfg.approved_sources) {
      validateSource(s);
      const checkout=join(temp,s.id);
      git(['clone','--quiet','--filter=blob:none','--no-checkout','https://github.com/'+s.repository+'.git',checkout]);
      git(['-C',checkout,'fetch','--quiet','--depth=1','origin',s.commit]);
      git(['-C',checkout,'checkout','--quiet','--detach',s.commit]);
      let perSource=0;
      for(const f of s.files) {
        const file=join(checkout,f.path);
        if (!existsSync(file)) throw Error('Whitelisted data file missing: '+f.path);
        const items=records(file,f.format);
        for(let i=0;i<items.length;i++) {
          if (perSource>=250) break;
          const row=items[i];
          if (!row||typeof row!=='object') continue;
          const mapped=mapRecord(row,f);
          if (!mapped) continue;
          const {question,answer}=mapped;
          if (!question||!answer||question.length>15000||answer.length>30000) continue;
          const id=questionId(question), output=join(destination,id+'.json');
          if (existsSync(output)) {duplicates++;continue;}
          mkdirSync(dirname(output),{recursive:true});
          writeFileSync(output,JSON.stringify({
            schema_version:1,id,subject:s.subject,question,answer,quality_status:'awaiting_expert_review',
            source:{repository:s.repository,commit:s.commit,file:f.path,record_index:i,original_id:mapped.original_id,
              license:s.license,attribution:s.attribution,content_rights_verified:true,
              url:'https://github.com/'+s.repository+'/blob/'+s.commit+'/'+f.path}
          },null,2)+'\n');
          added++;perSource++;
        }
      }
    }
    console.log('Approved candidates added: '+added+'; duplicates skipped: '+duplicates+'. None marked expert-reviewed.');
  } finally {rmSync(temp,{recursive:true,force:true});}
}
if (process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try {run();}catch(e) {console.error(e.message);process.exitCode=1;}
}
