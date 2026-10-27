import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const repo='MuzaPro/Organic-Chemistry-Quiz-JS';
const commit='71f3262bce0eba6c7e1cb0814394f1e04b6a9dbc';
const known=['q1','q2','q3','q4','q5'];
const manifest=JSON.parse(readFileSync(join(root,'harvest','approved_imports.json'),'utf8'));
const source=manifest.approved_sources.find(x=>x.repository===repo);
const files=readdirSync(join(root,'data','candidates')).filter(x=>x.endsWith('.json'));
const rows=files.map(name=>JSON.parse(readFileSync(join(root,'data','candidates',name),'utf8')))
 .filter(x=>x.source?.repository===repo);
const norm=s=>String(s).normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
test('Muza upstream already imported exactly once: five source IDs, zero new required',()=>{
 assert.ok(source,'previously approved Muza source missing');
 assert.equal(source.commit,commit);assert.equal(source.license,'MIT');
 assert.equal(source.content_rights_verified,true);
 assert.equal(rows.length,5,'upstream has five records already; do not import duplicates');
 assert.deepEqual(rows.map(x=>x.source.original_id).sort(),known);
 assert.equal(new Set(rows.map(x=>x.id)).size,5);
 for(const q of rows){
  assert.equal(q.subject,'organic');
  assert.equal(q.source.commit,commit);
  assert.equal(q.source.file,'data/questions.json');
  assert.equal(q.source.license,'MIT');
  assert.equal(q.publishable,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.id,createHash('sha256').update(norm(q.question)).digest('hex'));
 }
});
test('existing MIT notice retained; source q2 q4 q5 require chemical conditions review',()=>{
 const license=readFileSync(join(root,'third_party','licenses','MUZA_ORGANIC_MIT_LICENSE.txt'),'utf8');
 assert.ok(license.includes('Copyright (c) 2025 Muza Studio'));
 assert.ok(license.includes('The above copyright notice and this permission notice shall be included'));
 for(const id of ['q2','q4','q5']){
  const q=rows.find(x=>x.source.original_id===id);
  assert.ok(q,'review-required upstream ID missing: '+id);
  assert.equal(q.publishable,false);
  assert.notEqual(q.quality_status,'expert_approved');
 }
});
