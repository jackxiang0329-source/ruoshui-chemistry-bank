// Disk loader is Node-only; core practice.mjs is platform-independent.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generatePractice } from './practice.mjs';
const ROOT = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
export function readVendorCatalog(track) {
  const file = track === 'inorganic' ? 'Inorganic' : track === 'organic' ? 'Organic' : null;
  if (!file) throw new Error('Only inorganic/organic vendor catalogs are available');
  const location = join(ROOT, 'third_party', 'chemquiz', 'catalog', file, 'compounds.json');
  const parsed = JSON.parse(readFileSync(location, 'utf8'));
  if (!Array.isArray(parsed.compounds)) throw new Error('Vendor catalog malformed');
  return parsed.compounds;
}
export function readHolds() {
  const filepath = join(ROOT, 'config', 'chemistry-practice-holds.json');
  const data = JSON.parse(readFileSync(filepath, 'utf8'));
  return data.entries.map(x => x.external_id);
}
export function previewFromVendor(config = {}) {
  const track = config.track || 'organic';
  return generatePractice(readVendorCatalog(track), { ...config,
    track, heldIds: readHolds() });
}
