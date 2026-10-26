import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const loadJSON=p=>JSON.parse(readFileSync(join(ROOT,p),'utf8'));
const loadJSONL=p=>readFileSync(join(ROOT,p),'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const categories=['nmr_elucidation','counting_carbon','counting_ring','shortest_path',
  'atom_mapping','smiles_to_iupac','sar','reaction'];
export function reviewQueue(source='chemquiz',discipline='all',limit=25){
  if(!['chemquiz','chemiq'].includes(source)) throw new Error('Unknown source');
  if(!['all','inorganic','organic'].includes(discipline)) throw new Error('Unknown discipline');
  if(!Number.isSafeInteger(limit)||limit<1||limit>200) throw new Error('Limit must be 1..200');
  const holds=loadJSON('imports/review-holds.json');
  const holdIds=new Set(holds.entries.map(x=>x.external_id));
  const entries=[];
  if(source==='chemquiz'){
    for(const item of loadJSONL('imports/chemquiz/name-to-formula.jsonl')){
      if(discipline!=='all'&&item.discipline!==discipline)continue;
      entries.push({question_id:item.external_id,discipline:item.discipline,
        original_prompt:item.prompt,original_answer:item.answer,
        proposed_chinese_prompt:null,proposed_chinese_answer:null,
        chemical_structure:item.smiles||null,
        risk_flag:holdIds.has(item.external_id)?'structure_hold':'unreviewed',
        source:item.source,translation_review:'pending',chemistry_review:'pending',
        license_review:'pending',publication:'blocked'});
    }
  }else{
    if(discipline==='inorganic')return {source,discipline,total:0,items:[],note:'ChemIQ not a curated inorganic exam category'};
    for(const category of categories){
      for(const item of loadJSONL('imports/chemiq/'+category+'.jsonl')){
        entries.push({question_id:item.uuid,discipline:'organic',
          category,original_prompt:item.prompt,original_answer:item.answer,
          answer_representation:category==='smiles_to_iupac'?'smiles_reference_for_opsin':item.answer_format,
          proposed_chinese_prompt:null,proposed_chinese_answer:null,
          risk_flag:'benchmark_held_out',source:item.source_record,
          translation_review:'pending',chemistry_review:'pending',
          license_review:'pending',publication:'blocked'});
      }
    }
  }
  entries.sort((a,b)=>(a.risk_flag==='structure_hold'?-1:1)-(b.risk_flag==='structure_hold'?-1:1) ||
   a.question_id.localeCompare(b.question_id));
  return {source,discipline,total:entries.length,limit,items:entries.slice(0,limit),
    publication_status:'never_use_as_approved_question_without_review'};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  const params=Object.fromEntries(process.argv.slice(2).filter(x=>x.startsWith('--')&&x.includes('='))
    .map(x=>x.slice(2).split(/=(.*)/s).slice(0,2)));
  try{
    const out=reviewQueue(params.source||'chemquiz',params.discipline||'all',Number(params.limit||25));
    process.stdout.write(JSON.stringify(out,null,2)+'\n');
  }catch(e){console.error(e.message);process.exitCode=2}
}
