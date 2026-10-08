/* ============================================================
   DOES THE TEXT FIT?

   The guide strip is a fixed-height box with overflow:hidden, so a lesson
   that runs long is not wrapped or scrolled - it is simply cut off, and
   the player never learns it was there. That is how the end of level two
   lost 44px of the coach's point.

   This pulls every lesson, task and closing line out of the level sources
   so they can be measured against the real box. Run `node check-fit.js`
   to regenerate strings.json, then measure it in the page (the box width
   and VT323 metrics only exist in a browser).
   ============================================================ */
const fs = require('fs');

const KEYED = /(lesson|task|line)\s*:\s*((?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|\s*\+\s*|\s*\n\s*)+)/g;

const out = [];
/* trainer.html was missing from this list, so every lesson on the bench -
   which is now where most of the teaching text lives - was never measured
   against the box it has to fit in. */
for (const file of ['level0.html', 'level1.html', 'level2.html', 'level3.html',
                    'level4.html', 'trainer.html']) {
  const src = fs.readFileSync(file, 'utf8');
  const level = file.replace('.html', '');
  let m;
  KEYED.lastIndex = 0;
  while ((m = KEYED.exec(src))) {
    const expr = m[2].trim().replace(/\+\s*$/, '');
    try {
      const v = eval(expr);
      if (typeof v === 'string' && v.length > 30) out.push({ level, key: m[1], v });
    } catch (e) { /* a computed lesson; measured live instead */ }
  }
  // level zero's wind-down is a bare array of strings, not behind a key
  const ci = src.indexOf('const CLOSING=[');
  if (ci > -1) {
    const body = src.slice(ci + 'const CLOSING=['.length, src.indexOf('\n];', ci));
    for (const part of body.split(/,\s*\n\s*\n/)) {
      try {
        const v = eval(part.trim().replace(/,\s*$/, ''));
        if (typeof v === 'string' && v.length > 30) out.push({ level, key: 'closing', v });
      } catch (e) {}
    }
  }
}

fs.writeFileSync('strings.json', JSON.stringify(out, null, 1));
console.log('extracted ' + out.length + ' strings to strings.json');
out.slice().sort((a, b) => b.v.length - a.v.length).slice(0, 8).forEach(o =>
  console.log('  ' + String(o.v.length).padStart(4) + '  ' +
    (o.level + '/' + o.key).padEnd(18) + o.v.replace(/<[^>]+>/g, '').slice(0, 54)));
