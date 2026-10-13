/* Serves the vault root so Workbench Home and everything it links to can
   be opened in a browser. Run it with `Workbench.cmd` at the vault root.

   WHY A SERVER AT ALL. `file://` does not load several of these pages --
   LPE and some lab pages fetch their own assets, and a browser refuses
   that from the filesystem. One server at the vault ROOT, rather than one
   per project, so every link on Home is a plain relative path and nothing
   has to know a port number.

   Static files only. No build step, no watching, no API. If this file ever
   needs to do more than read bytes off the disk, the thing being built is
   the Pipeline Console and it belongs somewhere else. */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const HOME = '/05%20-%20Home/index.html';
const PORT = Number(process.env.WORKBENCH_PORT) || 8099;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  let rel;
  try {
    rel = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    res.writeHead(400); return res.end('bad path');
  }
  if (rel === '/') { res.writeHead(302, { Location: HOME }); return res.end(); }
  if (rel.endsWith('/')) rel += 'index.html';

  /* Nothing outside the vault, whatever the URL claims. */
  const file = path.join(ROOT, rel);
  if (path.relative(ROOT, file).startsWith('..')) {
    res.writeHead(403); return res.end('outside the vault');
  }

  fs.readFile(file, (err, buf) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<p style="font:16px system-ui;padding:40px">Not here: <code>'
        + rel.replace(/[<&]/g, c => (c === '<' ? '&lt;' : '&amp;'))
        + '</code></p><p style="font:16px system-ui;padding:0 40px">'
        + '<a href="' + HOME + '">back to Workbench</a></p>');
    }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()]
        || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(buf);
  });
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.log('\n  Port ' + PORT + ' is already in use.');
    console.log('  Workbench may already be running: http://127.0.0.1:'
      + PORT + HOME);
    console.log('  Or set WORKBENCH_PORT to something else.\n');
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, '127.0.0.1', () => {
  const url = 'http://127.0.0.1:' + PORT + HOME;
  console.log('\n  Emerson Workbench');
  console.log('  ' + url);
  console.log('\n  Serving ' + ROOT);
  console.log('  Close this window to stop.\n');
  if (!process.env.WORKBENCH_NO_OPEN) {
    execFile('cmd', ['/c', 'start', '', url], () => {});
  }
});
