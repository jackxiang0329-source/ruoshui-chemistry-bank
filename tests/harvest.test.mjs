import test from 'node:test';
import assert from 'node:assert/strict';
import {subjects,canonicalRepo,bucketKey,requestedPages,rankingMode} from '../scripts/harvest-chemistry-sources.mjs';
import {safePath,questionId,normalizeQuestion,validateSource,mapRecord} from '../scripts/import-approved-chemistry.mjs';
test('classifies chemistry subject',()=>{
  assert.deepEqual(subjects('organic chemistry study'),['organic']);
  assert.deepEqual(subjects('inorganic chemistry problems'),['inorganic']);
  assert.deepEqual(subjects('物理化学 thermodynamics'),['physical']);
});
test('license field never means content-rights approval',()=>{
  const row=canonicalRepo({full_name:'someone/chemistry-quiz',license:{spdx_id:'MIT'},description:'chemistry quiz'},'2026-10-26');
  assert.equal(row.repository_license_spdx,'MIT');
  assert.equal(row.status,'unreviewed_not_importable');
});
test('rejects unsafe paths',()=>{
  assert.equal(safePath('data/questions.jsonl'),true);
  assert.equal(safePath('../secret'),false);
  assert.equal(safePath('a/../../secret'),false);
});
test('deduplication normalizes whitespace and case',()=>{
  assert.equal(questionId('  What  is pH?  '),questionId('what is ph?'));
  assert.equal(normalizeQuestion('a  b'),'a b');
});
test('refuses sources without approval and pinned revision',()=>{
  assert.throws(()=>validateSource({id:'demo',repository:'owner/repo',commit:'bad',files:[]}));
});

test('maps reaction-quiz questions to self-contained text and reagent answers',()=>{
  const row={
    id:'q1',questionText:'Choose reactants',product:{name:'Methyl ethyl ether',formula:'C3H8O'},
    reagents:[{id:'a',name:'Sodium methoxide',formula:'CH3ONa'},{id:'b',name:'Bromoethane',formula:'C2H5Br'}],
    correctReagents:['a','b']
  };
  const mapped=mapRecord(row,{format:'organic-reaction-quiz'});
  assert.match(mapped.question,/Methyl ethyl ether/);
  assert.match(mapped.question,/Bromoethane/);
  assert.equal(mapped.answer,'Sodium methoxide; Bromoethane');
});

test('requests all 10 GitHub pages of 100 results where available',()=>{
  assert.equal(requestedPages(1000,100,10),10);
  assert.equal(requestedPages(10000,100,10),10);
  assert.equal(requestedPages(101,100,10),2);
  assert.equal(requestedPages(0,100,10),0);
});
test('stable case insensitive shard assignment',()=>{
  assert.equal(bucketKey('Example/Chemistry'),bucketKey('example/chemistry'));
  assert.match(bucketKey('Example/Chemistry'),/^[0-3][0-9a-f]$/);
});
test('filter unrelated search matches and forks',()=>{
  assert.equal(canonicalRepo({full_name:'a/math-machine-learning',description:'machine learning exercises'},'2026-10-26'),null);
  assert.equal(canonicalRepo({full_name:'a/chemistry-quiz',description:'chemistry quiz',fork:true},'2026-10-26'),null);
  assert.equal(canonicalRepo({full_name:'a/chemistry-quiz',description:'chemistry quiz'},'2026-10-26').status,'unreviewed_not_importable');
});

test('discover educational chemistry calculators and spectroscopy tutorials without automatic rights approval',()=>{
  const x=canonicalRepo({full_name:'lab/voltammetry-tutorial',description:'Electroanalytical chemistry tutorial and voltammetry simulator',license:{spdx_id:'Apache-2.0'}},'2026-10-27');
  assert.equal(x.repository,'lab/voltammetry-tutorial');
  assert.equal(x.status,'unreviewed_not_importable');
  assert.ok(x.subjects.includes('analytical'));
});

test('discovery ranking rotates updated, stars and best_match at half-hour slots',()=>{
  const opts={ranking_modes:['updated','stars','best_match']};
  assert.equal(rankingMode(opts,0),'updated');
  assert.equal(rankingMode(opts,30*60*1000),'stars');
  assert.equal(rankingMode(opts,60*60*1000),'best_match');
  assert.equal(rankingMode(opts,90*60*1000),'updated');
  assert.throws(()=>rankingMode({ranking_modes:['foo&unsafe=true']},0));
});
