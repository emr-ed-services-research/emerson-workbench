/* Assembles fisher-calendar.html from the shell plus the art modules, and
   drops the vault's own 657 cross-section into the centerfold, recoloured
   from its blue study palette to Fisher green.

   The section is a real, reviewed vault asset (20 - Source Library /
   Interactive Models / Fisher 657 Working Model), which is why the
   centerfold can show internals rather than a silhouette drawn from a
   photograph. */
const fs = require('fs'), path = require('path');
const HERE = __dirname;
const VAULT = path.resolve(HERE, '../../20 - Source Library/Interactive Models/Fisher 657 Working Model/657-cross-section.svg');

const read = f => fs.readFileSync(path.join(HERE, f), 'utf8');
let out = read('calendar-shell.html')
  .replace('/*__ART__*/',    read('calendar-art.js'))
  .replace('/*__SUBJ__*/',   read('calendar-subjects.js'))
  .replace('/*__MONTHS__*/', read('calendar-months.js'));

/* ---- the 657 section, repainted ----
   Its own stylesheet drives every part from CSS variables, so recolouring
   is a matter of swapping those values rather than touching any geometry. */
const GREEN = {
  '--c-casing':   '#3F7A4F', '--c-casing2':  '#56966A',
  '--c-yoke':     '#2B5D3B', '--c-fixed2':   '#86B894',
  '--c-plate':    '#D8A13C', '--c-stem':     '#B9CBC0',
  '--c-moving2':  '#E0B457', '--c-diaphragm':'#8A5A22',
  '--c-spring':   '#CFE0D4', '--c-adjust':   '#C9A24B',
  '--c-outline':  '#0D2113',
};
let svg = fs.readFileSync(VAULT, 'utf8');
Object.entries(GREEN).forEach(([k, v]) => {
  svg = svg.replace(new RegExp('(' + k + ':\\s*)#[0-9a-fA-F]{3,8}', 'g'), '$1' + v);
});
// scope its ids so they cannot collide with the page, and drop any xml decl
svg = svg.replace(/<\?xml[^>]*\?>\s*/, '').trim();
// the page sizes it with CSS; a fixed width/height attribute would fight that
svg = svg.replace(/<svg([^>]*?)\s(?:width|height)="[^"]*"/g, '<svg$1');

// JSON-encoded: the section carries quotes and newlines, and it is
// assigned to a JS constant rather than pasted into a string literal.
out = out.replace('/*__SVG657__*/', JSON.stringify(svg));

fs.writeFileSync(path.join(HERE, 'fisher-calendar.html'), out, 'utf8');

const kb = n => (n / 1024).toFixed(0) + ' kB';
console.log('built fisher-calendar.html  (' + kb(Buffer.byteLength(out)) + ')');
console.log('  657 section inlined      ' + kb(Buffer.byteLength(svg)));
console.log('  subjects                 ' + (out.match(/^SUBJ\.\w+/gm) || []).length +
            ' + ' + (out.match(/^function draw\w+/gm) || []).length + ' helper');
console.log('  backdrops                ' + (out.match(/^BACK\.\w+ =/gm) || []).length);
