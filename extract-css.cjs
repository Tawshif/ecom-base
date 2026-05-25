const fs = require('fs');
const path = require('path');

const cssContent = fs.readFileSync(path.join(__dirname, 'assets/css/all.css'), 'utf8');

const blocks = cssContent.split(/\/\* ={60}\r?\n\s+([A-Z0-9 &()—\/]+)\r?\n\s+={60} \*\//);

const fileMap = {
  'DESIGN TOKENS — SWAP THESE PER CLIENT BRAND': 'tokens.css',
  'RESET & BASE': 'reset.css',
  'LAYOUT UTILITIES': 'utilities.css',
  'SECTION UTILITY': 'utilities.css',
  'HEADER / NAVIGATION': 'header.css',
  'HERO SECTION': 'components.css',
  'TRUST STRIP': 'components.css',
  'CATEGORY TILES': 'components.css',
  'PRODUCT GRID': 'product-card.css',
  'FILTER PANEL (PLP)': 'filter-panel.css',
  'PLP TOOLBAR': 'filter-panel.css',
  'PRODUCT DETAIL PAGE (PDP)': 'components.css',
  'CART DRAWER': 'cart-drawer.css',
  'CHECKOUT FORM': 'forms.css',
  'BUTTONS': 'components.css',
  'REVIEWS SECTION': 'reviews.css',
  'TOAST NOTIFICATIONS': 'toast.css',
  'BREADCRUMB': 'breadcrumb.css',
  'SKELETON LOADERS': 'skeleton.css',
  'FOOTER': 'footer.css',
  'PAGE SECTIONS — DEMO LAYOUT': 'components.css',
  'RESPONSIVE': 'responsive.css'
};

const outputData = {};

for (let i = 1; i < blocks.length; i += 2) {
  const sectionName = blocks[i].trim();
  const sectionContent = blocks[i+1];
  
  const targetFile = fileMap[sectionName] || 'components.css';
  
  if (!outputData[targetFile]) {
    outputData[targetFile] = '';
  }
  
  outputData[targetFile] += `/* ============================================================\n   ${sectionName}\n   ============================================================ */\n${sectionContent}`;
}

for (const [filename, content] of Object.entries(outputData)) {
  fs.writeFileSync(path.join(__dirname, 'assets/css', filename), content.trim() + '\n');
  console.log(`Wrote ${filename}`);
}
