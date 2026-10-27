import test from 'node:test';
import assert from 'node:assert/strict';
import {buildReview} from '../scripts/audit-openstax-chemistry-oer.mjs';
const candidate=(id,chapter,ordinal,solution=true,media=false,math=false)=>({
 id:'OSCHEM-'+id.repeat(24),source_path:'contents/m'+chapter+'.md',
 source_url:'https://github.com/source/chapter',source_exercise_ordinal:ordinal,
 source_blob_sha:'a'.repeat(40),quality_status:'unverified_external_staging',
 publishable:false,exam_ready:false,content_rights_verified:false,
 item_level_rights_review_pending:true,has_source_solution:solution,requires_media:media,
 requires_mathml:math
});
test('chapter-balanced reviewed archive preserves rights, pending answers and media flags',()=>{
 const rows=[candidate('a','51011',1),candidate('b','51011',2,false),
 candidate('c','51034',1,true,true),candidate('d','51034',2,true,false,true)];
 const plan=buildReview(rows,3);
 assert.equal(plan.total_unreviewed_exercise_blocks,4);
 assert.equal(plan.review_queue_size,3);
 assert.equal(plan.total_by_flag.missing_answer,1);
 assert.equal(plan.total_by_flag.requires_media,1);
 assert.equal(plan.total_by_flag.requires_mathml,1);
 assert.equal(plan.review_queue[0].id,'OSCHEM-'+'a'.repeat(24));
 assert.equal(plan.review_queue[1].id,'OSCHEM-'+'d'.repeat(24));
 assert.equal(plan.review_queue[2].id,'OSCHEM-'+'b'.repeat(24));
 assert.equal(plan.publication_eligible,0);
});
test('cannot accept promoted, missing copyright flags or duplicate exercise IDs',()=>{
 const row=candidate('a','51011',1);
 assert.throws(()=>buildReview([{...row,publishable:true}]),/Unsafe/);
 assert.throws(()=>buildReview([{...row,content_rights_verified:true}]),/Unsafe/);
 assert.throws(()=>buildReview([row,row]),/Unsafe/);
 assert.throws(()=>buildReview([row],1500),/Invalid/);
});

test('text-only is not automatically self-contained when old textbook links or answer-media remain',()=>{
 const base=candidate('a','51011',1);
 const cases=[
 {...base,question:'What is the mass shown in [[link]](#figure)?'},
 {...candidate('b','51011',2),question:'Using the previous problem, find the moles.'},
 {...candidate('c','51011',3),question:'Calculate 3 moles of water mass.',answer:'<math>18.0</math>'},
 {...candidate('d','51011',4),question:'Calculate the molecular mass of P4.'}
 ];
 const plan=buildReview(cases,4,['Calculate the molecular mass of P4.']);
 assert.equal(plan.total_by_flag.source_problem_context_reference,2);
 assert.equal(plan.total_by_flag.solution_requires_mathml_or_media,1);
 assert.equal(plan.total_by_flag.strict_text_overlap_with_main,1);
 assert.equal(plan.total_by_flag.clean_self_contained_with_source_solution,0);
 assert.ok(plan.review_queue.every(q=>q.approved===false));
});
test('source questions differing only numerically remain de-dup review flags, never deleted',()=>{
 const q1={...candidate('e','51014',1),question:'Find concentration of 0.200 moles in 1 L.'};
 const q2={...candidate('f','51014',2),question:'Find concentration of 0.500 moles in 2 L.'};
 const p=buildReview([q1,q2]);
 assert.equal(p.possible_same_wording_numeric_template_families,1);
 assert.equal(p.possible_numeric_template_candidates,2);
 assert.equal(p.total_unreviewed_exercise_blocks,2);
 assert.equal(p.total_by_flag.clean_self_contained_with_source_solution,2);
 assert.equal(p.publication_eligible,0);
});
