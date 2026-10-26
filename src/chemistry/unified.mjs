// Shared front-end domain contract: it does not fetch from D1, GitHub or external APIs.
import { generatePractice } from './practice.mjs';
import { generateQuantitativePractice } from './quantitative.mjs';
export const FOUR_TRACKS = Object.freeze(['inorganic','analytical','physical','organic']);

export function buildUnifiedPaper(config={}, resources={}) {
  const { track, seed=20261026, count=10, optionCount=4,
    mode='name_to_formula' }=config;
  if (!FOUR_TRACKS.includes(track))
    throw new Error('Track must be inorganic, analytical, physical or organic');
  const isNumerical=track==='analytical'||track==='physical';
  if (isNumerical) {
    if (config.mode !== undefined || config.optionCount !== undefined)
      throw new Error('Numerical tracks do not accept choice-specific mode or optionCount');
    const result=generateQuantitativePractice({track,count,seed});
    return { schema_version:'1.0', track, format:'numerical',
      generator:'original_parameterized',...result };
  }
  if (!Array.isArray(resources.catalog))
    throw new Error('Unreviewed inorganic and organic practice require an explicit catalog');
  if (!Array.isArray(resources.heldIds))
    throw new Error('Review-hold list must be explicitly supplied');
  const result=generatePractice(resources.catalog,{
    track,seed,count,optionCount,mode,heldIds:resources.heldIds
  });
  return { schema_version:'1.0',track,format:'single_choice',
    generator:'chemquiz_concept_adapter',...result };
}
