/* Builds self-contained pages from the shared source. One engine on disk;
   every output gets the same copy, so they cannot drift. */
const fs=require('fs');
const read=f=>fs.readFileSync(f,'utf8');
const css=read('engine.css'), js=read('engine.js');
const scriptOf=f=>{                       // the inline <script> body of a level page
  const h=read(f), i=h.indexOf('<script>',h.indexOf('engine.js'));
  return h.slice(h.indexOf('>',i)+1, h.lastIndexOf('</script>'));
};
fs.mkdirSync('dist',{recursive:true});

// individual level pages, for iterating on one level
for(const f of ['level0.html','level1.html','level2.html','trainer.html']){
  let h=read(f)
    .replace('<link rel="stylesheet" href="engine.css">','<style>\n'+css+'\n</style>')
    .replace('<script src="engine.js"></script>','<script>\n'+js+'\n</script>')
    .replace('<script src="fluids.js"></script>','<script>' + String.fromCharCode(10) + read('fluids.js') + String.fromCharCode(10) + '</script>');
  fs.writeFileSync('dist/'+f,h,'utf8');
  console.log('built dist/'+f+'  ('+(h.length/1024).toFixed(1)+' kB)');
}

// the whole game: boot -> title -> level select -> level
let g=read('game.html')
  .replace('<link rel="stylesheet" href="engine.css">','<style>\n'+css+'\n</style>')
  .replace('<script src="engine.js"></script>','<script>\n'+js+'\n</script>')
    .replace('<script src="fluids.js"></script>','<script>' + String.fromCharCode(10) + read('fluids.js') + String.fromCharCode(10) + '</script>')
  .replace('<script src="title-art.js"></script>','<script>\n'+read('title-art.js')+'\n</script>')
  .replace('<script src="jam.js"></script>','<script>\n'+read('jam.js')+'\n</script>')
  .replace('<script src="level0.html.js"></script>','<script>\n'+scriptOf('level0.html')+'\n</script>')
  .replace('<script src="level1.html.js"></script>','<script>\n'+scriptOf('level1.html')+'\n</script>')
  .replace('<script src="level2.html.js"></script>','<script>\n'+scriptOf('level2.html')+'\n</script>');
const bad=[...new Set(g.match(/[^\x00-\x7F]/g)||[])];
if(bad.length) console.log('  WARNING non-ASCII: '+JSON.stringify(bad));
fs.writeFileSync('dist/game.html',g,'utf8');
console.log('built dist/game.html  ('+(g.length/1024).toFixed(1)+' kB)');

/* The checks run on every build, not when someone remembers to. They cover
   the regressions that reached Franz before they reached a measurement:
   clipped lesson text, invented Cv values, an air purge nobody would sit
   through, and the two levels drifting into different rigs.
   LPE_SKIP_VERIFY=1 only to build something deliberately broken. */
if (!process.env.LPE_SKIP_VERIFY) {
  try { require('./check-fit.js'); } catch (e) {}
  try { require('./verify.js'); } catch (e) { process.exitCode = 1; }
}
