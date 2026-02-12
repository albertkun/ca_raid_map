const fs = require('fs');

// Read County_0.js
const countyData = fs.readFileSync('/home/alpha/repos/melt/public/camap/data/County_0.js', 'utf8');
const countyMatch = countyData.match(/var\s+json_County_0\s*=\s*({[\s\S]+});/);
if (countyMatch) {
  const geojson = JSON.parse(countyMatch[1]);
  fs.writeFileSync('County_0.geojson', JSON.stringify(geojson, null, 2));
  console.log('County_0.geojson created successfully');
}

// Read ICERaid_1.js  
const raidData = fs.readFileSync('/home/alpha/repos/melt/public/camap/data/ICERaid_1.js', 'utf8');
const raidMatch = raidData.match(/var\s+json_ICERaid_1\s*=\s*({[\s\S]+});/);
if (raidMatch) {
  const geojson = JSON.parse(raidMatch[1]);
  fs.writeFileSync('ICERaid_1.geojson', JSON.stringify(geojson, null, 2));
  console.log('ICERaid_1.geojson created successfully');
}
