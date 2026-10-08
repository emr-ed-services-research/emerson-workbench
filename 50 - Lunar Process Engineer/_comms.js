/* Every hard-broken line in a comms card has to fit the card, or it wraps
   and leaves its tail alone on a line. */
const fs = require('fs');
const MAX = Math.floor((660 - 76) / (28 * 0.4));     // box - padding, VT323 advance
console.log('comms card fits ' + MAX + ' characters a line\n');

const FILES = ['level0.html', 'level1.html', 'level2.html',
               'level3.html', 'level4.html', 'trainer.html'];
const RE = new RegExp("kind:'comms'[\\s\\S]{0,200}?text:((?:'(?:[^'\\\\]|\\\\.)*'\\s*\\+?\\s*)+)", 'g');

let over = 0;
FILES.forEach(f => {
  const s = fs.readFileSync(f, 'utf8');
  RE.lastIndex = 0;
  let m;
  while ((m = RE.exec(s))) {
    const t = m[1].split(/'\s*\+\s*'/).join('').replace(/^'|'\s*$/g, '')
      .replace(/&ldquo;|&rdquo;/g, '"').replace(/&mdash;/g, '-')
      .replace(/\\u2014/g, '-').replace(/\\u2019/g, "'").replace(/\\'/g, "'");
    t.split('<br>').forEach(line => {
      const L = line.trim(), n = L.length;
      if (n > MAX) over++;
      console.log('  ' + (n > MAX ? 'OVER' : 'ok  ') + ' ' + String(n).padStart(3) +
                  '  ' + f.replace('.html', '').padEnd(9) + '  ' + L);
    });
  }
});
console.log('\n  ' + (over ? over + ' line(s) will orphan their tail' : 'all lines fit'));
