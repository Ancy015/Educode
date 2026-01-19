const fs = require('fs');
const mockData = fs.readFileSync('src/data/mockData.js', 'utf-8');
const goContent = fs.readFileSync('go_curriculum_insert.js', 'utf-8');

const insertionPoint = mockData.indexOf('export const LANGUAGES');
if (insertionPoint === -1) {
  console.log('ERROR: Could not find insertion point');
  process.exit(1);
}

const updated = mockData.slice(0, insertionPoint) + goContent + '\n\n' + mockData.slice(insertionPoint);
fs.writeFileSync('src/data/mockData.js', updated);
console.log('Successfully added Go curriculum to mockData.js');
