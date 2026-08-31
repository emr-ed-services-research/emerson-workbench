#!/usr/bin/env node
// ============================================================================
//  render-check.mjs  -  headless-Chrome render checks for Workbench slides
//
//  verify.ps1 "step 4". Renders every rebuilt slide in Chrome, twice - once
//  standalone (4:3) and once in the course shell's visual mode (16:9) - and
//  reports the machine-checkable part of the Stage 3 pre-send checklist:
//
//    load-clean     no page errors, console errors, or failed resource loads
//    broken-image   every <img> decoded (naturalWidth > 0)
//    clipping       no visible content escapes the .slide box (which is
//                   overflow:hidden, so a clipped element is silently cut)
//
//  Findings are WARN-only for now (see render/README.md). Exit 0 unless the
//  args are bad (2). Uses puppeteer-core against the installed Chrome - no
//  bundled Chromium.
//
//  Usage:
//    node render-check.mjs --course "1400 Valve Trim and Body Maintenance"
//    node render-check.mjs --course "..." --slides 30,31,62
//    node render-check.mjs --course "..." --json
//    node render-check.mjs --course "..." --chrome "C:/path/to/chrome.exe"
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VAULT = path.resolve(HERE, '..', '..'); // render/ -> 40 - Engine/ -> vault

// ---- args -----------------------------------------------------------------

function parseArgs(argv) {
  const a = { course: null, slides: null, json: false, chrome: null };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--course') a.course = argv[++i];
    else if (k === '--slides') {
      a.slides = String(argv[++i] || '')
        .split(',')
        .map((s) => parseInt(s.trim(), 10))
        .filter(Number.isFinite);
    } else if (k === '--json') a.json = true;
    else if (k === '--chrome') a.chrome = argv[++i];
    else {
      process.stderr.write(`render-check: unknown argument "${k}"\n`);
      process.exit(2);
    }
  }
  if (!a.course) {
    process.stderr.write(
      'usage: render-check.mjs --course "<name>" [--slides 1,2] [--json] [--chrome <path>]\n'
    );
    process.exit(2);
  }
  return a;
}

// ---- Chrome + slide resolution -----------------------------------------

function findChrome(explicit) {
  const cands = explicit
    ? [explicit]
    : [
        process.env.PROGRAMFILES && `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
        process.env['PROGRAMFILES(X86)'] &&
          `${process.env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`,
        process.env.LOCALAPPDATA && `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      ].filter(Boolean);
  return cands.find((p) => { try { return fs.existsSync(p); } catch { return false; } }) || null;
}

function resolveCourse(course) {
  const pres = path.join(VAULT, '10 - Courses', course, 'Presentation');
  let prefix = null;
  try {
    const cj = JSON.parse(
      fs.readFileSync(path.join(pres, 'course', 'course.json'), 'utf8').replace(/^\uFEFF/, '')
    );
    prefix = cj.slidePrefix || (cj.course && cj.course.code ? `${cj.course.code}-` : null);
  } catch { /* prefix stays null -> loose match below */ }
  return { slidesDir: path.join(pres, 'build', 'slides'), prefix };
}

function listSlides(slidesDir, prefix, only) {
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx = prefix ? new RegExp(`^${esc(prefix)}(\\d+)\\.html$`) : /^(?:.*-)?(\d+)\.html$/;
  let files = fs
    .readdirSync(slidesDir)
    .map((f) => { const m = f.match(rx); return m ? { n: parseInt(m[1], 10), file: f } : null; })
    .filter(Boolean)
    .sort((x, y) => x.n - y.n);
  if (only && only.length) files = files.filter((s) => only.includes(s.n));
  return files;
}

// ---- in-page checks (runs inside Chrome) --------------------------------

/* eslint-disable */
function domChecks() {
  const out = { fatal: null, brokenImages: [], clipping: [] };
  const slide = document.querySelector('.slide');
  if (!slide) { out.fatal = 'no .slide element'; return out; }
  const sr = slide.getBoundingClientRect();

  for (const img of document.images) {
    if (!img.complete || img.naturalWidth === 0) out.brokenImages.push(img.getAttribute('src') || '(no src)');
  }

  const EPS = 2;
  const offenders = new Map();
  for (const el of slide.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 && r.height < 1) continue;
    const over = [];
    if (r.left > sr.left && r.right - sr.right > EPS) over.push(`right ${Math.round(r.right - sr.right)}px`);
    else if (sr.left - r.left > EPS) over.push(`left ${Math.round(sr.left - r.left)}px`);
    if (r.top >= sr.top && r.bottom - sr.bottom > EPS) over.push(`bottom ${Math.round(r.bottom - sr.bottom)}px`);
    else if (sr.top - r.top > EPS) over.push(`top ${Math.round(sr.top - r.top)}px`);
    if (over.length) offenders.set(el, over);
  }
  // report only the outermost offender on each branch
  for (const [el, over] of offenders) {
    let anc = el.parentElement, covered = false;
    while (anc && anc !== slide) { if (offenders.has(anc)) { covered = true; break; } anc = anc.parentElement; }
    if (covered) continue;
    const cls = el.classList.length ? '.' + [...el.classList].join('.') : '';
    out.clipping.push(`${el.tagName.toLowerCase()}${cls} — ${over.join(', ')}`);
  }
  return out;
}
/* eslint-enable */

// ---- one slide, one mode --------------------------------------------

const VIEWPORTS = {
  '4:3': { width: 1280, height: 1024 },
  '16:9': { width: 1280, height: 720 },
};

/** Run `task` over `items` with at most `n` in flight; preserves input order. */
async function mapLimit(items, n, task) {
  const out = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await task(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return out;
}

async function checkPass(browser, fileUrl, mode) {
  const page = await browser.newPage();
  const findings = [];
  const errs = [];
  const failed = [];
  page.on('pageerror', (e) => errs.push(`pageerror ${String(e.message).split('\n')[0]}`));
  page.on('console', (m) => { if (m.type() === 'error') errs.push(`console ${m.text().slice(0, 160)}`); });
  page.on('requestfailed', (r) => {
    const u = r.url();
    if (u.startsWith('data:')) return;
    failed.push(`${u.split(/[\\/]/).pop()} (${(r.failure() && r.failure().errorText) || 'failed'})`);
  });

  const url = mode === '16:9' ? `${fileUrl}?embed=1&visual=1` : fileUrl;
  await page.setViewport(VIEWPORTS[mode]);
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 20000 });
    // let fonts + one layout frame settle, but don't hang on a slow font
    await Promise.race([
      page.evaluate(
        () =>
          new Promise((res) => {
            const done = () => requestAnimationFrame(() => requestAnimationFrame(res));
            if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(done);
            else done();
          })
      ),
      new Promise((res) => setTimeout(res, 1500)),
    ]);
    const dom = await page.evaluate(domChecks);
    for (const e of errs) findings.push(`load-clean: ${e}`);
    for (const u of failed) findings.push(`load-clean: failed request ${u}`);
    if (dom.fatal) findings.push(`load-clean: ${dom.fatal}`);
    for (const b of dom.brokenImages) findings.push(`broken-image: ${b}`);
    for (const c of dom.clipping) findings.push(`clipping: ${c}`);
  } catch (e) {
    findings.push(`load-clean: load failed — ${String(e.message).split('\n')[0]}`);
  } finally {
    await page.close();
  }
  return { findings };
}

// ---- main -----------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const { slidesDir, prefix } = resolveCourse(args.course);
  const emit = (s) => process.stdout.write(s + '\n');

  const bail = (msg) => {
    if (args.json) emit(JSON.stringify({ ok: false, reason: msg, slides: [] }));
    else { emit(`  [warn] ${msg}`); emit(`\nRENDER: 0 slides rendered, 1 warn`); }
    process.exit(0);
  };

  if (!fs.existsSync(slidesDir)) return bail(`no slides directory: ${slidesDir}`);
  const chrome = findChrome(args.chrome);
  if (!chrome) return bail('Chrome not found — render checks skipped (pass --chrome <path>)');

  const slides = listSlides(slidesDir, prefix, args.slides);
  if (!slides.length) return bail('no slide files matched');

  const browser = await puppeteer.launch({
    executablePath: chrome,
    headless: true,
    args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
  });

  const CONCURRENCY = Number(process.env.RENDER_CONCURRENCY) || 6;
  let results;
  try {
    results = await mapLimit(slides, CONCURRENCY, async (s) => {
      const fileUrl = pathToFileURL(path.join(slidesDir, s.file)).href;
      const passes = {};
      for (const mode of ['4:3', '16:9']) passes[mode] = await checkPass(browser, fileUrl, mode);
      return { n: s.n, file: s.file, passes };
    });
  } finally {
    await browser.close();
  }

  if (args.json) {
    emit(JSON.stringify({ ok: true, course: args.course, slides: results }, null, 2));
    process.exit(0);
  }

  let warn = 0;
  for (const r of results) {
    const lines = [];
    for (const mode of ['4:3', '16:9']) for (const f of r.passes[mode].findings) lines.push(`${mode.padEnd(4)} ${f}`);
    if (!lines.length) emit(`  [ok]   ${r.file}`);
    else for (const l of lines) { emit(`  [warn] ${r.file}: ${l}`); warn++; }
  }
  emit(`\nRENDER: ${results.length} slides rendered, ${warn} warn`);
  process.exit(0);
}

main().catch((e) => {
  process.stdout.write(`  [warn] render-check crashed: ${String(e && e.stack || e).split('\n')[0]}\n`);
  process.stdout.write(`\nRENDER: 0 slides rendered, 1 warn\n`);
  process.exit(0);
});
