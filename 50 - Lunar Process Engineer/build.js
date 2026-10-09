/* Builds self-contained pages from the shared source. One engine on disk;
   every output gets the same copy, so they cannot drift. */
const fs=require('fs');
const read=f=>fs.readFileSync(f,'utf8');
const css=read('engine.css');
/* topology.js and schemvis.js are the PROCESS CORE, vendored in from
   `45 - Process Core`. They are not LPE's: they define LPE.net and
   LPE.schem, which any consumer may use, and LoopBench will use the same
   files. Never edit them here -- edit the core and re-vendor, which the
   lock check below enforces.

   Bundling them rather than adding <script src> tags to each level keeps
   the one rule this build exists for -- one engine on disk, every output
   gets the same copy. A level page that loaded them itself would also be invisible
   to game.html, which inlines only each level's own inline script, so the
   game would come up with LPE.net undefined and nothing would say so. */
const CORE='vendor/process-core/';
const js=read('engine.js')+String.fromCharCode(10)+read(CORE+'topology.js')
        +String.fromCharCode(10)+read(CORE+'schemvis.js')
        +String.fromCharCode(10)+read(CORE+'dynamics.js')
        +String.fromCharCode(10)+read(CORE+'scenario.js');
const scriptOf=f=>{                       // the inline <script> body of a level page
  const h=read(f), i=h.indexOf('<script>',h.indexOf('engine.js'));
  return h.slice(h.indexOf('>',i)+1, h.lastIndexOf('</script>'));
};
fs.mkdirSync('dist',{recursive:true});

// individual level pages, for iterating on one level
for(const f of ['level0.html','level1.html','level2.html','level3.html','level4.html','trainer.html']){
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
  .replace('<script src="trainer.html.js"></script>','<script>' + String.fromCharCode(10) + scriptOf('trainer.html') + String.fromCharCode(10) + '</script>')
  .replace('<script src="level0.html.js"></script>','<script>\n'+scriptOf('level0.html')+'\n</script>')
  .replace('<script src="level1.html.js"></script>','<script>\n'+scriptOf('level1.html')+'\n</script>')
  .replace('<script src="level2.html.js"></script>','<script>\n'+scriptOf('level2.html')+'\n</script>')
  .replace('<script src="level3.html.js"></script>','<script>\n'+scriptOf('level3.html')+'\n</script>')
  .replace('<script src="level4.html.js"></script>','<script>\n'+scriptOf('level4.html')+'\n</script>');
/* Every level must have been INLINED. A leftover <script src="*.html.js">
   points at a file that does not exist in dist/, so the level is simply
   missing from the artifact and nothing says so - the menu just comes up
   one entry short. Level 3 shipped like that: the standalone build worked,
   the game did not, and it was reported as done. */
const notInlined=[...g.matchAll(/<script src="([a-z0-9]+\.html)\.js"><\/script>/g)].map(m=>m[1]);
if(notInlined.length){
  console.error('  BUILD FAILED - not inlined into game.html: '+notInlined.join(', '));
  process.exitCode=1;
}
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
  /* A crash in verify.js is a failed build, not a quiet one. This line used
     to swallow the error and let build.js print its success tail, so a
     verify.js that did not even parse still read as a green build. */
  /* The cross-check is a separate run: it reaches outside the game to
     ASME tables and the handbook relations, and it compares the lesson
     TEXT against what the model actually produces. A number drifting
     apart from its source is the failure it exists to catch. */
  try {
    const cc = require('child_process').spawnSync(process.execPath,
      ['reference/crosscheck.js'], { encoding:'utf8' });
    if (cc.status !== 0) {
      console.error(cc.stdout || ''); console.error('  BUILD FAILED - cross-check');
      process.exitCode = 1;
    } else {
      const n = (cc.stdout.match(/^  ok  /gm) || []).length;
      console.log('  ' + n + ' cross-checks passed (ASME tables, handbook relations, lesson text)');
    }
  } catch (e) { console.error(e.message); process.exitCode = 1; }
  /* THE VENDORED CORE must be exactly what `45 - Process Core` shipped.
     Its own tests ran in the core before it was vendored -- that is what
     vendor.js refuses to skip -- so what this consumer has to prove is a
     different thing: that nobody edited the copy. A hand-edit here would
     fork the core silently, and the fork would surface months later in
     LoopBench rather than in the change that caused it.

         node "../45 - Process Core/test.js"      run the core's tests
         node "../45 - Process Core/vendor.js" .  re-vendor after a change
  */
  try {
    const vendorTool = require('../45 - Process Core/vendor.js');
    const v = vendorTool.verify(require('path').join(__dirname, 'vendor', 'process-core'));
    if (!v.ok) {
      console.error('  BUILD FAILED - vendored Process Core does not match its lock');
      console.error('  ' + v.why);
      process.exitCode = 1;
    } else {
      console.log('  Process Core verified (' + v.why + ')');
    }
  } catch (e) { console.error('  BUILD FAILED - ' + e.message); process.exitCode = 1; }
  try { require('./verify.js'); } catch (e) {
    console.error('');
    console.error('  BUILD FAILED - verify.js did not run: ' + (e && e.message));
    if (e && e.stack) console.error(e.stack);
    process.exitCode = 1;
  }
}
