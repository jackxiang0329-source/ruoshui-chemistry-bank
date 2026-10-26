import test from 'node:test';
import assert from 'node:assert/strict';
import {gitBlobSha,questionId,parseIonCharge,makeIonQuestions,makePrecipitateQuestions} from '../scripts/import-chemquiz-reference.mjs';
test('Git blob checksum',()=>assert.equal(gitBlobSha(Buffer.from('hello\n')),'ce013625030ba8dba906f756967f9e9ca394464a'));
test('NFKC/whitespace/case stable IDs',()=>assert.equal(questionId('Ａ  B'),questionId('a b')));
test('ion charge parsing',()=>{
 assert.equal(parseIonCharge('SO4^2-'),-2);assert.equal(parseIonCharge('NH4+'),1);
 assert.equal(parseIonCharge('PO4^3-'),-3);assert.throws(()=>parseIonCharge('SO4'));
});
test('reject mismatched ionic charge and duplicate names',()=>{
 const ions=Array.from({length:23},(_,i)=>({name_en:'ion'+i,formula:'X'+i+'+',charge:1}));
 assert.equal(makeIonQuestions(ions).length,23);
 ions[0].charge=-1;assert.throws(()=>makeIonQuestions(ions),/charge disagrees/);
 ions[0].charge=1;ions[1].name_en=ions[0].name_en;
 assert.throws(()=>makeIonQuestions(ions),/Duplicate ion/);
});
test('precipitate whitelist rejects changed answer',()=>{
 const reference={
 'Cu2+':[['NaOH','Cu(OH)2'],['NH3','Cu(OH)2']],
 'Fe2+':[['NaOH','Fe(OH)2']],
 'Fe3+':[['NaOH','Fe(OH)3'],['NH3','Fe(OH)3']],
 'Zn2+':[['NaOH','Zn(OH)2'],['NH3','Zn(OH)2']],
 'Al3+':[['NaOH','Al(OH)3'],['NH3','Al(OH)3']],
 'Ag+':[['Cl-','AgCl'],['Br-','AgBr'],['I-','AgI']],
 'Pb2+':[['Cl-','PbCl2'],['SO4^2-','PbSO4']],
 'Ba2+':[['SO4^2-','BaSO4'],['CO3^2-','BaCO3']],
 'Ca2+':[['CO3^2-','CaCO3']],
 'Ni2+':[['NaOH','Ni(OH)2']],
 'Co2+':[['NaOH','Co(OH)2']]
 };
 const data=Object.entries(reference).map(([ion,p])=>({ion,precipitates:p.map(([reagent,precipitate_formula])=>({reagent,precipitate_formula}))}));
 assert.equal(makePrecipitateQuestions(data).length,19);
 data[0].precipitates[0].precipitate_formula='CuO';
 assert.throws(()=>makePrecipitateQuestions(data),/Unexpected qualitative reaction/);
});
