import {readFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const lines=path=>readFileSync(join(ROOT,path),'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const norm=x=>String(x??'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
export function auditStagedChemTrain() {
 const questions=lines('imports/chemtrain/question_objects_4apps.jsonl');
 const cards=lines('imports/chemtrain/reference_cards_without_measurements.jsonl');
 const qReport=JSON.parse(readFileSync(join(ROOT,'imports/chemtrain/STAGING_REPORT.json'),'utf8'));
 const cReport=JSON.parse(readFileSync(join(ROOT,'imports/chemtrain/CARD_INDEX_REPORT.json'),'utf8'));
 const errors=[],seen=new Set(),counts={};
 for(const q of questions) {
   if(q.publishable!==false||q.review_status!=='external_quarantine')errors.push('Unquarantined question '+q.id);
   const key=q.stem_signature;
   if(seen.has(key))errors.push('Duplicate signature '+q.id);seen.add(key);
   const source=q.source;
   if(!source?.repository?.startsWith('ChemTrain/')||source?.content_license!=='CC BY 4.0'||
      !/^[a-f0-9]{40}$/.test(source?.git_blob_sha??'')||!source?.deck_question_number)
     errors.push('Missing source provenance '+q.id);
   if(q.stem_fields?.mol!==undefined) errors.push('SVG molecule payload unexpectedly materialized '+q.id);
   if(source.repository==='ChemTrain/pka-learn'){
     for(const site of q.stem_fields?.sites??[])if(Object.hasOwn(site,'p'))
       errors.push('Third-party pKa measurement still stored '+q.id);
   }
   counts[source.repository]=(counts[source.repository]??0)+1;
 }
 const seenCards=new Set(),cardCounts={};
 for(const card of cards) {
   if(card.publication_allowed!==false||card.review_status!=='reference_only_quarantine')
     errors.push('Reference card marked publishable '+card.id);
   if(Object.hasOwn(card,'value')||Object.hasOwn(card,'sN')||
       Object.hasOwn(card,'potential'))
     errors.push('Measurement copied into card index '+card.id);
   const s=card.source;
   const key=[s.repository,s.deck_id,card.term,card.formula].map(norm).join('|');
   if(seenCards.has(key))errors.push('Potential duplicate card '+card.id);
   seenCards.add(key);
   if(s.license!=='CC BY 4.0')errors.push('Card attribution invalid '+card.id);
   cardCounts[s.repository]=(cardCounts[s.repository]??0)+1;
 }
 if(questions.length!==232||Object.values(counts).reduce((a,b)=>a+b,0)!==232||
    qReport.raw_question_objects!==232||qReport.normalized_unique_question_stems!==232)
   errors.push('Question counts changed');
 if(cards.length!==587||cReport.raw_card_records!==636||
    cReport.unique_metadata_cards!==587||cReport.duplicate_metadata_cards!==49)
   errors.push('Card counts changed');
 if(counts['ChemTrain/pka-learn']!==29||counts['ChemTrain/radical-learn']!==50||
    counts['ChemTrain/reactivity-learn']!==99||counts['ChemTrain/photoredox-learn']!==54)
   errors.push('Question category counts changed');
 return {source_question_objects:questions.length,unique_reference_card_metadata:cards.length,
   reference_card_duplicates_removed:cReport.duplicate_metadata_cards,
   question_counts:counts,card_counts:cardCounts,
   publication_count:0,all_quarantined:errors.length===0,
   note:'Reference cards are NOT extra questions; measured third-party data and source molecule SVG are not included.',
   errors};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const x=auditStagedChemTrain();console.log(JSON.stringify(x,null,2));
 if(x.errors.length)process.exitCode=1;
}
