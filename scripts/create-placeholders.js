const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'assets', 'placeholders');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function generateSvgPlaceholder(title, subtitle, aspect = '16/10') {
  const width = 1200;
  const height = aspect === '1/1' ? 1200 : aspect === '4/5' ? 1500 : 750;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E6DFD3" stroke-width="0.8"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#F6F2EA"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  
  <!-- Architectural framing border -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" fill="none" stroke="#DDD5C8" stroke-width="1.5" stroke-dasharray="8 6"/>
  
  <!-- Inner card drawing -->
  <rect x="${width / 2 - 280}" y="${height / 2 - 120}" width="560" height="240" fill="#FFFFFF" stroke="#DDD5C8" stroke-width="1" rx="4"/>
  
  <!-- Badge -->
  <rect x="${width / 2 - 110}" y="${height / 2 - 95}" width="220" height="28" fill="#F6F2EA" stroke="#DDD5C8" stroke-width="1" rx="2"/>
  <text x="${width / 2}" y="${height / 2 - 76}" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#B5573A" text-anchor="middle" letter-spacing="1.5">XALVERIQ STUDIO PLACEHOLDER</text>
  
  <!-- Main label -->
  <text x="${width / 2}" y="${height / 2 - 15}" font-family="Fraunces, serif" font-size="28" font-weight="400" fill="#1B1B1B" text-anchor="middle">${title}</text>
  
  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + 25}" font-family="Inter, sans-serif" font-size="14" fill="#6B665E" text-anchor="middle">${subtitle}</text>
  
  <!-- Instruction -->
  <text x="${width / 2}" y="${height / 2 + 75}" font-family="Inter, monospace" font-size="12" fill="#B5573A" text-anchor="middle">[ REPLACE WITH REAL XALVERIQ PROJECT PHOTO ]</text>
</svg>`;
}

const files = [
  { name: 'hero-living.svg', title: 'Main Living Room Perspective', subtitle: 'Warm natural light, smoked oak joinery & mineral plaster', aspect: '16/10' },
  { name: 'project-1-kitchen.svg', title: 'Modular Kitchen Plan & Finish', subtitle: 'IS:710 Marine ply, FENIX matte shutters & Blum hardware', aspect: '16/10' },
  { name: 'project-2-wardrobe.svg', title: 'Custom Wardrobe Suite', subtitle: 'Floor-to-ceiling shutters, fluted glass & sensor lighting', aspect: '16/10' },
  { name: 'project-3-living.svg', title: 'Penthouse Living & Balcony', subtitle: 'Double-height volume, breathable lime plaster & teak louvers', aspect: '16/10' },
  { name: 'studio-office.svg', title: 'Xalveriq Design Studio, Lane 7', subtitle: 'Physical material library & consultation space in Koregaon Park', aspect: '16/10' },
  { name: 'team-ananya.svg', title: 'Principal Architect Slot', subtitle: 'Architectural direction, spatial planning & site lead', aspect: '1/1' },
  { name: 'team-rohit.svg', title: 'Interior Architect Slot', subtitle: 'Joinery details, 3000K lighting & material coordination', aspect: '1/1' },
  { name: 'team-sneha.svg', title: 'Site Execution Coordinator Slot', subtitle: 'On-site carpentry, vendor schedules & handover quality', aspect: '1/1' },
];

files.forEach(f => {
  fs.writeFileSync(path.join(outDir, f.name), generateSvgPlaceholder(f.title, f.subtitle, f.aspect));
  console.log(`Created placeholder: ${f.name}`);
});

fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# Xalveriq Studio Photo Placeholders

These SVG placeholders provide an architectural framing for local development.

Replace them with genuine high-resolution photographs taken on-site in Pune:
- \`hero-living.jpg\` (1920x1080 min, landscape)
- \`project-1-kitchen.jpg\` (1600x1000 min)
- \`project-2-wardrobe.jpg\` (1600x1000 min)
- \`project-3-living.jpg\` (1600x1000 min)
- \`studio-office.jpg\` (1600x1000 min)
- \`team-ananya.jpg\` (800x800 square portrait)
- \`team-rohit.jpg\` (800x800 square portrait)
- \`team-sneha.jpg\` (800x800 square portrait)
`
);

console.log('All placeholders created successfully in public/assets/placeholders.');
