/**
 * KAIU Grain Catalog
 * Generates the full swatch catalog (200 grains) from a small set of
 * base species — mirrors the original grains-data.js exactly.
 */
const SPECIES = [
  { line: 'Walnut',   name: 'Terra',   stops: ['#e7c396', '#a97843', '#6f4a26'], desc: 'A warm, chocolate-toned hardwood prized for its straight grain and rich depth. Walnut darkens gracefully with age, making it a favourite for furniture and feature panelling that ages into character rather than wearing out.' },
  { line: 'Oak',      name: 'Dune',    stops: ['#c99a63', '#8a5a2c', '#4c3016'], desc: 'A dense, durable hardwood with a pronounced open grain. Oak veneer brings a honest, textural warmth suited to floors, cabinetry, and any surface that needs to read as substantial and long-lasting.' },
  { line: 'Ebony',    name: 'Noir',    stops: ['#8b6b4a', '#54371f', '#2b1c10'], desc: 'A rare, near-black hardwood historically reserved for the finest instruments and furniture. Ebony veneer delivers dramatic depth of colour without the weight or cost of solid stock.' },
  { line: 'Teak',     name: 'Amber',   stops: ['#d9b98a', '#b3773c', '#6b4420'], desc: 'A naturally oil-rich hardwood valued for its resistance to moisture and decay. Teak veneer carries a golden-amber tone that suits both indoor joinery and marine-grade applications.' },
  { line: 'Rosewood', name: 'Umber',   stops: ['#a17a4e', '#6d4726', '#3a2410'], desc: 'A dense tropical hardwood known for its deep, variegated colour bands and fine natural luster. Rosewood veneer is a statement material — best used where the grain itself is the focal point.' },
  { line: 'Maple',    name: 'Blonde',  stops: ['#f0dcb0', '#d1a86a', '#8a6534'], desc: 'A pale, tight-grained hardwood that reflects light beautifully. Maple veneer suits bright, minimalist interiors that want the warmth of real wood without a heavy or dark presence.' },
  { line: 'Cherry',   name: 'Crimson', stops: ['#c98a63', '#8a4a2c', '#5c2c16'], desc: 'A fine-grained fruitwood that deepens from a soft pink-brown into a rich reddish patina over time. Cherry veneer is a classic choice for cabinetry and furniture meant to be lived with for decades.' },
  { line: 'Ash',      name: 'Frost',   stops: ['#e0d6c3', '#b7a789', '#7c6b4f'], desc: 'A pale, resilient hardwood with a bold, straight grain pattern. Ash veneer brings a Scandinavian-inspired lightness, ideal for interiors that favour texture over colour.' },
  { line: 'Birch',    name: 'Pale',    stops: ['#efe4cd', '#cbb98f', '#9c8659'], desc: 'A light, subtly figured hardwood with a smooth, understated surface. Birch veneer works quietly in the background, well suited to Scandinavian and minimalist furniture design.' },
  { line: 'Mahogany', name: 'Ember',   stops: ['#8a4a30', '#5c2e1c', '#301509'], desc: 'A historic cabinet-making hardwood with a deep reddish-brown tone and fine, even grain. Mahogany veneer signals traditional craftsmanship and formal, considered interiors.' },
];

const VARIANTS_PER_SPECIES = 20;

function adjustColor(hex, amt) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
  const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
  return '#' + (g | (r << 16) | (b << 8)).toString(16).padStart(6, '0');
}

function buildGradient(stops) {
  return `linear-gradient(155deg, ${stops[0]}, ${stops[1]} 60%, ${stops[2]})`;
}

function generateGrains() {
  const grains = [];
  let id = 1;
  SPECIES.forEach((species) => {
    for (let i = 0; i < VARIANTS_PER_SPECIES; i++) {
      const amt = Math.round((i - VARIANTS_PER_SPECIES / 2) * 4);
      const stops = species.stops.map((hex) => adjustColor(hex, amt));
      const variantNum = String(i + 1).padStart(2, '0');
      const name = 'Kaiu ' + species.name + ' ' + variantNum;
      grains.push({
        id: id,
        slug: (species.line + '-' + species.name + '-' + variantNum).toLowerCase(),
        line: species.line,
        name: name,
        gradient: buildGradient(stops),
        desc: species.desc,
      });
      id++;
    }
  });
  return grains;
}

export const KAIU_GRAINS = generateGrains();
