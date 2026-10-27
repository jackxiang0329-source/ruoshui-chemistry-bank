import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {extractDivBlocks,parseChapter,mergeStaging,validateManifest} from '../scripts/import-openstax-chemistry-oer.mjs';
import {readFileSync} from 'node:fs';
const pin=JSON.parse(readFileSync(new URL('../harvest/pinned_openstax_chemistry.json',import.meta.url)));
const sha=s=>{const b=Buffer.from(s);return createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');};
const opts=txt=>({path:'contents/m51011.md',sha:sha(txt),repository:pin.repository,commit:pin.commit});
test('pinned OpenStax CC BY 3.0 work with no invented exercise reuse approval',()=>{
 assert.equal(validateManifest(pin),true);
 assert.throws(()=>validateManifest({...pin,items_rights_auto_approved:true}),/Unsafe/);
 assert.throws(()=>validateManifest({...pin,license_blob_sha:'0'.repeat(40)}),/Unsafe/);
});
test('nested divs, multiline chemistry question and source solution are preserved',()=>{
 const raw='---\ntitle: "Atoms and Ions"\n---\n'+
 '<div data-type="exercise"><div data-type="problem" markdown="1">'+
 'Calculate the mass of a sample of H<sub>2</sub>O at 25 C. '+
 '<div data-type="equation"><math><mi>n</mi></math></div>Explain the units.'+
 '</div><div data-type="solution" markdown="1">Mass is 18.0 g.</div></div>';
 const parsed=parseChapter(raw,opts(raw));
 assert.equal(parsed.blocks_seen,1);
 assert.equal(parsed.exercises.length,1);
 const item=parsed.exercises[0];
 assert.match(item.question,/<math>/);
 assert.equal(item.chapter_title,'Atoms and Ions');
 assert.equal(item.has_source_solution,true);
 assert.equal(item.publishable,false);
 assert.equal(item.exam_ready,false);
 assert.equal(item.content_rights_verified,false);
 assert.equal(item.item_level_rights_review_pending,true);
 assert.equal(item.scientific_solution_verified,false);
 assert.ok(item.source_url.includes(pin.commit));
});
test('image-dependent problems and absent solution remain staged, never publishable',()=>{
 const s='<div data-type="exercise"><div data-type="problem">'+
 'Identify the molecule illustrated by the diagram below, and say why.'+
 '<img src="../resources/example.jpg"></div></div>';
 const item=parseChapter(s,opts(s)).exercises[0];
 assert.equal(item.requires_media,true);
 assert.equal(item.has_source_solution,false);
 assert.equal(item.answer,null);
 assert.equal(item.exam_ready,false);
});
test('no false extraction of narrative text or unbalanced div structures',()=>{
 const s='<div data-type="example"><div data-type="problem">A classroom example</div></div>';
 assert.equal(parseChapter(s,opts(s)).exercises.length,0);
 assert.throws(()=>extractDivBlocks('<div data-type="exercise"><div>test</div>','exercise'),/Unclosed/);
 assert.throws(()=>parseChapter(s,{...opts(s),sha:'0'.repeat(40)}),/SHA mismatch/);
});
test('idempotent dedup and hard quarantine gate',()=>{
 const p='<div data-type="exercise"><div data-type="problem">'+
 'Determine the molar mass of ammonium phosphate carefully.'+
 '</div><div data-type="solution">Solution: 149 g per mol</div></div>';
 const row=parseChapter(p,opts(p)).exercises[0];
 assert.equal(mergeStaging([row],[row]).length,1);
 assert.throws(()=>mergeStaging([],[{...row,exam_ready:true}]),/Unapproved/);
 assert.throws(()=>mergeStaging([row],[{...row,question:'wrong'}]),/collision/);
});
