#!/usr/bin/env node
// Fail-closed publication manifest. Candidate data are NEVER an automatic exam release.
// Approval attestations are manual records, not proof of identity or cryptographic signatures.
import {readFileSync,readdirSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
export const digest=q=>createHash('sha256').update(JSON.stringify(q)).digest('hex');
const validReviewer=x=>typeof x==='string'&&x.trim().length>=2&&x.trim().length<=120;
const card=q=>/flashcard|study_card/i.test(String(q.question_type||'')+' '+String(q.resource_type||''));
export function publicationIndex(rows,approvals={schema_version:1,approved:[]}){
 if(!Array.isArray(rows)||approvals?.schema_version!==1||!Array.isArray(approvals.approved))
  throw Error('Invalid release inputs; require explicit approval registry');
 const byId=new Map(),review=new Map(),approved=[];
 for(const q of rows){
  if(!q||typeof q.id!=='string'||!/^[0-9a-f]{64}$/.test(q.id)||byId.has(q.id))
   throw Error('Invalid or duplicate chemistry candidate ID');
  byId.set(q.id,q);
 }
 for(const signoff of approvals.approved){
  if(!signoff||typeof signoff.id!=='string'||review.has(signoff.id))
   throw Error('Duplicate or incomplete approval registry entry');
  if(!byId.has(signoff.id))throw Error('Approval references missing candidate: '+signoff.id);
  review.set(signoff.id,signoff);
 }
 for(const q of rows){
  if(q.publishable!==true){
   if(q.quality_status==='expert_approved')throw Error('Expert-approved but not publishable status drift: '+q.id);
   if(review.has(q.id))throw Error('Approval registry contains unpublished candidate: '+q.id);
   continue;
  }
  const a=review.get(q.id),s=q.source||{};
  if(q.quality_status!=='expert_approved'||!a||a.decision!=='approve'||
   a.candidate_sha256!==digest(q)||
   !/^\d{4}-\d{2}-\d{2}$/.test(a.reviewed_at||'')||
   !validReviewer(a.chemistry_reviewer)||!validReviewer(a.rights_reviewer)||
   !validReviewer(a.solution_reviewer)||!validReviewer(a.latex_reviewer)||
   a.chemistry_reviewer===a.rights_reviewer||
   card(q)||!q.question||!q.answer||
   s.content_rights_verified!==true||!s.license||!s.license_evidence||
   (!s.repository&&!s.url&&!s.publisher))
   throw Error('Missing signed-off scientific, rights, answer or layout review: '+q.id);
  approved.push({id:q.id,subject:q.subject,topic:q.topic||'unspecified',
   candidate_sha256:digest(q),source_repository:s.repository||null,
   source_license:s.license,approved_at:a.reviewed_at});
 }
 approved.sort((a,b)=>a.id.localeCompare(b.id));
 return {schema_version:1,release_state:approved.length?'manual_attestations_present':'no_approved_items',
  total_candidates:rows.length,approved_count:approved.length,
  excluded_candidate_count:rows.length-approved.length,
  policy:'Only explicit expert-approved, hash-pinned, source-rights-verified exercises may appear here. No candidate or study card is released merely because it exists or passes automated tests.',
  approval_identity_warning:'Attestations are manual registry fields, not cryptographic identity verification. Repository permissions and a separate human approval process remain essential.',
  items:approved};
}
export function run(){
 const dir=join(ROOT,'data/candidates'),approvalFile=join(ROOT,'harvest/publication_approvals.json');
 const rows=readdirSync(dir).filter(x=>/^[a-f0-9]{64}\.json$/.test(x)).sort()
  .map(x=>JSON.parse(readFileSync(join(dir,x),'utf8')));
 if(!existsSync(approvalFile))throw Error('Missing explicit publication approvals registry');
 const approvals=JSON.parse(readFileSync(approvalFile,'utf8'));
 const data=publicationIndex(rows,approvals),
  out=join(ROOT,'release/chemistry-approved-manifest.json');
 mkdirSync(dirname(out),{recursive:true});
 const text=JSON.stringify(data,null,2)+'\n';
 if(!existsSync(out)||readFileSync(out,'utf8')!==text)writeFileSync(out,text);
 console.log('Chemistry release gate: approved='+data.approved_count+
  ' excluded_unreviewed='+data.excluded_candidate_count);
 return data;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
