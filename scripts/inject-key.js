'use strict';
const fs = require('fs');
const path = require('path');

const key = process.env.MAPS_API_KEY || '';
const indexPath = path.join(__dirname, '..', 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('index.html not found in project root. Please run from project root.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf8');
const injection = key ? `<script>window.__MAPS_API_KEY__ = ${JSON.stringify(key)};</script>` : '';
if (html.indexOf('<!-- INJECT_MAPS_KEY -->') !== -1) {
  html = html.replace('<!-- INJECT_MAPS_KEY -->', injection);
} else {
  html = html.replace('</head>', `${injection}\n</head>`);
}
fs.writeFileSync(indexPath, html, 'utf8');
console.log('inject-key: completed (key present:', Boolean(key), ')');