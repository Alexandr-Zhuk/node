const fs = require('fs');

let content = fs.readFileSync('text.txt', 'utf8');

console.log(content);