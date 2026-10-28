import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {countAtoms,reactionBalance,reviewFive,asMarkdown} from '../scripts/audit-muza-independent-science.mjs';
const dir=new URL('../data/candidates/',import.meta.url);
const records=readdirSync(dir).filter(x=>x.endsWith('.json'))
 .map(x=>JSON.parse(readFileSync(new URL(x,dir),'utf8')))
 .filter(q=>q.source?.repository==='MuzaPro/Organic-Chemistry-Quiz-JS');
const replay=JSON.parse(readFileSync(new URL('../harvest/main_muza_pinned_source_replay.json',import.meta.url),'utf8'));
test('independently parse reduced chemical formulae',()=>{
 assert.deepEqual(countAtoms('CH3OCH2CH3'),{C:3,H:8,O:1});
 assert.deepEqual(countAtoms('C6H5MgBr'),{C:6,H:5,Mg:1,Br:1});
 assert.throws(()=>countAtoms('Mg(OH)2'),/unparenthesized/);
 assert.throws(()=>countAtoms('C0H4'),/Invalid atom/);
});
test('stoichiometry catches omitted acidic workup and wrong alkene products',()=>{
 assert.equal(reactionBalance(['CH3ONa','C2H5Br'],['C3H8O','NaBr']).balanced,true);
 assert.equal(reactionBalance(['C4H9Br','C4H9OK'],['C4H8','C4H10O','KBr']).balanced,true);
 assert.equal(reactionBalance(['C6H5MgBr','C2H4O','HCl'],['C8H10O','MgBrCl']).balanced,true);
 assert.equal(reactionBalance(['C6H5MgBr','C2H4O'],['C8H10O','MgBrCl']).balanced,false);
 assert.equal(reactionBalance(['C2H4O2','C2H6O'],['C4H8O2','H2O']).balanced,true);
 assert.equal(reactionBalance(['C2H4O2','C2H6O'],['C5H8O2','H2O']).balanced,false);
});
test('five existing items balance, three priority science warnings persist, zero approved',()=>{
 const r=reviewFive(records,replay);
 assert.equal(r.source_items_reviewed,5);
 assert.equal(r.formal_element_balances_passed,5);
 assert.equal(r.special_science_conditions_pending,3);
 assert.equal(r.human_expert_approvals,0);
 assert.equal(r.exam_ready,0);
 assert.ok(r.items.every(x=>x.atom_balance.balanced&&x.publishable===false));
 assert.ok(asMarkdown(r).includes('q5'));
});
test('persisted wrong answer, changed product or forbidden publication blocks report',()=>{
 const change=(id,patch)=>records.map(x=>x.source.original_id===id?{...x,...patch}:x);
 assert.throws(()=>reviewFive(change('q4',{answer:'Ethanol; Sulfuric Acid'}),replay),/catalyst|mapping/);
 assert.throws(()=>reviewFive(change('q5',{publishable:true}),replay),/protection/);
 assert.throws(()=>reviewFive(change('q3',{question:'Target: Wrong (C9H9)'}),replay),/absent|formula drift/);
 assert.throws(()=>reviewFive(records,{...replay,unresolved_science_condition_concerns:0}),/prerequisite/);
});
