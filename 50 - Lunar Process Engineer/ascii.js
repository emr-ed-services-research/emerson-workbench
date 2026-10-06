/* Levels are written as ASCII with \uXXXX escapes, so the built pages carry
   no encoding assumptions. This rewrites a source file into that form. */
const fs = require('fs');
const f = process.argv[2];
let s = fs.readFileSync(f, 'utf8');
let n = 0;
s = s.replace(/[^\x00-\x7F]/g, ch => {
  n++;
  return '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0');
});
fs.writeFileSync(f, s, 'utf8');
console.log('escaped ' + n + ' characters in ' + f);
console.log('any left: ' + JSON.stringify([...new Set(s.match(/[^\x00-\x7F]/g) || [])]));
