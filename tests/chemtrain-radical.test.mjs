import test from 'node:test';
import assert from 'node:assert/strict';
import {extract,makeQuestions,parseEmbeddedJSON,readPinned,questionId,gitBlobSha} from '../scripts/import-chemtrain-radical.mjs';

test('fixed upstream MIT code and explicit CC BY 4.0 question content license',()=>{
 const src=readPinned();
 assert.match(src['LICENSE-CONTENT.md'],/questions, their explanations/);
 assert.match(src['LICENSE-CONTENT.md'],/Quentin Bindschaedler/);
 assert.match(gitBlobSha(Buffer.from(src['radical_learn.html'],'utf8')),/^[0-9a-f]{40}$/);
});
test('import exactly 26 standalone organic classification cards, excluding ambiphilic cases',()=>{
 const {rows,excluded}=extract();
 assert.equal(rows.length,26);
 assert.deepEqual(excluded.sort(),['Methyl radical','Phenyl radical','Trifluoromethyl radical'].sort());
 assert.equal(new Set(rows.map(x=>x.id)).size,26);
 assert.equal(new Set(rows.map(x=>x.source.original_name)).size,26);
 assert.ok(rows.every(x=>x.subject==='organic'&&x.publishable===false&&x.quality_status==='awaiting_expert_review'));
 assert.ok(rows.every(x=>x.source.license==='CC BY 4.0'&&x.source.content_rights_verified===true));
 assert.ok(rows.every(x=>['亲核型','亲电型'].includes(x.answer)));
 assert.ok(rows.every(x=>x.explanation_en.length>20));
});
test('fail closed on altered embedded data or ambiguous source',()=>{
 assert.throws(()=>parseEmbeddedJSON('window.RL_DATA = nope;</script>'),SyntaxError);
 assert.throws(()=>makeQuestions({radicals:[]}),/Unexpected radical deck count/);
 assert.equal(questionId('A  B'),questionId('a b'));
});
