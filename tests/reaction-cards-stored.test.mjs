import test from 'node:test';
import assert from 'node:assert/strict';
import {auditReactionCards} from '../scripts/audit-reaction-cards-stored.mjs';
const source=(name,kind)=>({
 repository:'ChemTrain/reaction-learn',commit:'7563032ec79ed429336966fb42136d2815cd7e42',
 file:'reaction_learn.html',git_blob_sha:'3bf4278bb72f625b5abee37da72300f4ba901187',
 content_license_git_blob_sha:'ab6bfb5c75085c6e2b05b5c2c9d2b936f611ba6a',
 code_license_git_blob_sha:'f12f837df6513709d7d6e8234f9d9427d81d1627',
 license:'CC BY 4.0',code_license:'MIT',content_rights_verified:true,
 original_exam_question:false,source_card_name:name,source_kind:kind
});
const cards=[
 {id:'a'.repeat(64),schema_version:1,subject:'organic',topic:'named_reactions',
 question_type:'open_ended_study_flashcard',resource_type:'licensed_reaction_study_card_not_exam_question',
 question:'What does reaction X accomplish?',answer:'Transformation X',explanation:'An English author explanation.',
 quality_status:'awaiting_expert_review',publishable:false,source:source('Reaction X','reaction')},
 {id:'b'.repeat(64),schema_version:1,subject:'organic',topic:'reagent_functions',
 question_type:'open_ended_study_flashcard',resource_type:'licensed_reaction_study_card_not_exam_question',
 question:'What is the use of reagent Y?',answer:'Transformation Y',
 quality_status:'awaiting_expert_review',publishable:false,source:source('Reagent Y','reagent')}
];
test('source-linked 2-card fixture reproduces saved question/answers but no exams',()=>{
 const x=auditReactionCards(cards,structuredClone(cards),2);
 assert.equal(x.matched_stored_study_cards,2);
 assert.equal(x.cards_are_not_exam_questions,true);
 assert.equal(x.formal_exam_ready,0);
 assert.equal(x.source_independent_chemical_truth_verified,false);
});
test('answer tampering, rights overclaims and missing cards are detected',()=>{
 assert.throws(()=>auditReactionCards(cards,[{...cards[0],answer:'wrong'},cards[1]],2),/card changed/);
 assert.throws(()=>auditReactionCards(cards,[{...cards[0],
 source:{...cards[0].source,content_rights_verified:false}},cards[1]],2),/card changed/);
 assert.throws(()=>auditReactionCards(cards,[{...cards[0],publishable:true},cards[1]],2),/card changed/);
 assert.throws(()=>auditReactionCards(cards,[cards[0]],2),/Missing persisted/);
 assert.throws(()=>auditReactionCards(cards,[...cards,{...cards[0],id:'c'.repeat(64)}],2),/orphan or duplicate/);
});
