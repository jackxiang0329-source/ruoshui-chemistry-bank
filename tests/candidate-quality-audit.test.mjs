import test from 'node:test';
import assert from 'node:assert/strict';
import {buildAudit,normalize} from '../scripts/audit-candidate-quality.mjs';
const q=(id,question,source,kind='normal')=>({
 id,subject:'organic',topic:'reaction',question,answer:'Same answer chemistry',quality_status:'awaiting_expert_review',publishable:false,
 question_type:kind,source:{repository:source,license:'CC BY 4.0',url:'https://example.org/'+source}
});
test('study cards, exercises and canonical title counts are different',()=>{
 const d=buildAudit([
  q('one','Named organic transformation Wurtz reaction','a','open_ended_study_flashcard'),
  q('two','What does Wurtz coupling do?','b')
 ]);
 assert.equal(d.by_content_kind.study_card,1);
 assert.equal(d.by_content_kind.exercise_candidate,1);
 assert.equal(d.total_candidates,2);
 assert.equal(d.expert_approved_publishable_count,0);
});
test('never auto-merges and flags identical questions',()=>{
 const d=buildAudit([q('one','Reaction A','a'),q('two','Reaction A','b')]);
 assert.equal(d.exact_duplicate_question_groups.count,1);
 assert.equal(d.total_candidates,2);
});
test('rejects published questions without prior expert approval',()=>{
 assert.throws(()=>buildAudit([{...q('one','Q','a'),publishable:true}]));
});
test('stabilized Unicode and whitespace and deterministic hash',()=>{
 const r=[q('one','第 1 题','a'),q('two','第 2 题','b')];
 assert.equal(buildAudit(r).corpus_hash_sha256,buildAudit(r.reverse()).corpus_hash_sha256);
 assert.equal(normalize('  A\u3000B  '),'a b');
});

test('source CC0 label does not conceal item-level rights still pending',()=>{
 const a={...q('review','Photon force homework','McMaster'),
  source:{repository:'PaulWAyers/IntroQChemProblems',license:'CC0-1.0',
   url:'https://github.com/PaulWAyers/IntroQChemProblems',
   content_rights_verified:false,item_level_rights_review_pending:true}};
 const b={...q('covered','Licensed original practice','author'),source:{
  repository:'author/bank',license:'CC0-1.0',content_rights_verified:true}};
 const c=q('unknown','No explicit item rights metadata','third-party');
 const r=buildAudit([a,b,c]);
 assert.equal(r.source_license_or_record_issues.count,0);
 assert.deepEqual([r.source_content_rights_audit.explicitly_verified,
  r.source_content_rights_audit.explicitly_pending,
  r.source_content_rights_audit.not_recorded],[1,1,1]);
 assert.equal(r.source_content_rights_audit.pending_samples[0].id,'review');
 assert.equal(r.source_content_rights_audit.verified_is_not_expert_approval,true);
 assert.equal(r.expert_approved_publishable_count,0);
});
