/* Lunar Process Engineer — desktop launcher.
 *
 * The build will not run off file:// (the levels are fetched, and the
 * origin rules stop that), so a shortcut cannot simply point at
 * dist/game.html. This serves dist/ over loopback, opens the default
 * browser at it, and stays up until the window is closed.
 *
 * Zero dependencies on purpose: node and nothing else, so it keeps
 * working whatever happens to the repo's tooling.
 *
 *   node play.js            serve + open
 *   node play.js --no-open  serve only
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..', 'dist');
const ENTRY = 'game.html';
const FIRST_PORT = 8752;            // the port the project already uses
const TRIES = 20;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js'  : 'text/javascript; charset=utf-8',
  '.css' : 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png' : 'image/png',
  '.jpg' : 'image/jpeg',
  '.svg' : 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.ico' : 'image/x-icon',
};

if (!fs.existsSync(path.join(ROOT, ENTRY))) {
  console.error('\n  Cannot find ' + path.join(ROOT, ENTRY));
  console.error('  Build it first:  node build.js  (in the game folder)\n');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/' ) rel = '/' + ENTRY;
  /* Resolve inside ROOT and refuse anything that climbs out of it. This
     is loopback-only, but a path-traversal hole is not worth leaving
     lying around in something that sits on a desktop. */
  const file = path.resolve(ROOT, '.' + rel);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403).end('forbidden');
    return;
  }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404).end('not found'); return; }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',       // always the build that is on disk
    });
    res.end(buf);
  });
});

function listen(port, left) {
  server.once('error', e => {
    if (e.code === 'EADDRINUSE' && left > 0) { listen(port + 1, left - 1); return; }
    console.error('\n  Could not start the server: ' + e.message + '\n');
    process.exit(1);
  });
  server.listen(port, '127.0.0.1', () => {
    const url = 'http://127.0.0.1:' + port + '/' + ENTRY;
    console.log('');
    console.log('   LUNAR PROCESS ENGINEER');
    console.log('   ' + '-'.repeat(44));
    console.log('   running at  ' + url);
    console.log('');
    console.log('   Close this window to quit.');
    console.log('');
    if (!process.argv.includes('--no-open')) {
      /* start "" <url> — the empty title argument matters, or cmd takes
         the quoted url as the window title and opens nothing. */
      spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore' }).unref();
    }
  });
}

listen(FIRST_PORT, TRIES);
