import test from 'node:test';
import assert from 'node:assert/strict';
import {gitBlobSha,parseCards,createCandidates,questionId} from '../scripts/import-chemtrain-reaction-learn.mjs';
const makeCards=()=>{
 const reaction=Array.from({length:231},(_,i)=>({
   kind:'reaction',name:'Example reaction '+i,cond:['NaOH, water'],
   does:'Performs carbon-carbon bond formation under the listed conditions '+i+'.',
   note:'Instructional illustration.', source_set_id:'named',source_set_name:'Named reactions'
 }));
 const reagent=Array.from({length:47},(_,i)=>({
   kind:'reagent',name:'Example reagent '+i,cond:['THF'],
   does:'Promotes nucleophilic addition to carbonyl compounds '+i+'.',
   source_set_id:'reagents',source_set_name:'Reagents'
 }));
 return reaction.concat(reagent);
};
test('fixed Git Blob hash uses Git object framing',()=>{
 const text='test\n';
 assert.equal(gitBlobSha(text),'9daeafb9864cf43055ae93beb0afd6c7d144bfa4');
});
test('parser requires pinned 20 sets and 278 cards',()=>{
 const c=makeCards();const sets=Array.from({length:20},(_,i)=>({id:'set'+i,name:'Set '+i,cards:c.slice(Math.floor(i*278/20),Math.floor((i+1)*278/20))}));
 const sample='<script>window.RXN_DATA = '+JSON.stringify({sets,mols:[]})+';</script>';
 assert.equal(parseCards(sample).length,278);
 assert.throws(()=>parseCards('var data = {};'));
});
test('importer forms complete flashcards without images',()=>{
 const {rows,skipped}=createCandidates(makeCards());
 assert.equal(rows.length,278);assert.equal(skipped.length,0);
 assert.equal(new Set(rows.map(x=>x.id)).size,278);
 assert.ok(rows.every(x=>x.subject==='organic'&&!x.publishable&&x.quality_status==='awaiting_expert_review'));
 assert.ok(rows.every(x=>!JSON.stringify(x).includes('mols')));
 assert.match(rows[0].question,/Example reaction 0/);
 assert.match(rows[0].answer,/carbon-carbon/);
 assert.equal(rows[0].id,questionId(rows[0].question));
});
test('rejects incomplete reaction-only data and malformed shape',()=>{
 const x=makeCards();x[1].does='';
 const {rows,skipped}=createCandidates(x);
 assert.equal(rows.length,277);assert.equal(skipped.length,1);
});
