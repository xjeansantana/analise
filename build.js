const fs = require('fs');
const tx = JSON.parse(fs.readFileSync('D:/Site Suporte/apuração/transactions_clean.json', 'utf8'));
const db = JSON.parse(fs.readFileSync('D:/Site Suporte/apuração/daily_balances_clean.json', 'utf8'));

const template = fs.readFileSync('D:/Site Suporte/apuração/template.html', 'utf8');

const html = template
  .replace('/*TX_DATA*/', 'var TX_DATA=' + JSON.stringify(tx) + ';')
  .replace('/*DB_DATA*/', 'var DB_DATA=' + JSON.stringify(db) + ';');

fs.writeFileSync('D:/Site Suporte/apuração/dashboard.html', html, 'utf8');
console.log('Dashboard: ' + (html.length / 1024).toFixed(0) + ' KB');
