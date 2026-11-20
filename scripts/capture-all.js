const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';

const PAGES = [
  { name: 'home', route: '/' },
  { name: 'studio', route: '/studio' },
  { name: 'portfolio', route: '/portfolio' },
  { name: 'services', route: '/services' },
  { name: 'about', route: '/about' },
  { name: 'blog', route: '/blog' },
  { name: 'contact', route: '/contact' },
];

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 960 },
  { name: '390', width: 390, height: 844 },
];

const round = process.argv[2] || 'round1';
const outputDir = path.resolve(__dirname, '..', 'screenshots', 'light_theme', round);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting captures for ${round} into ${outputDir}...`);

for (const page of PAGES) {
  for (const vp of VIEWPORTS) {
    const filename = `${page.name}_${vp.name}.png`;
    const outputPath = path.join(outputDir, filename);
    const targetUrl = `${BASE_URL}${page.route}`;

    console.log(`Capturing ${page.name} at ${vp.width}x${vp.height}...`);
    try {
      execFileSync(
        CHROME_PATH,
        [
          '--headless=new',
          '--hide-scrollbars',
          `--window-size=${vp.width},${vp.height}`,
          `--virtual-time-budget=2500`,
          `--screenshot=${outputPath}`,
          targetUrl,
        ],
        { stdio: 'ignore', timeout: 15000 }
      );
      const stat = fs.statSync(outputPath);
      console.log(`  -> Saved ${filename} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  -> Failed capturing ${filename}:`, err.message);
    }
  }
}

console.log(`Finished captures for ${round}!`);
