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
