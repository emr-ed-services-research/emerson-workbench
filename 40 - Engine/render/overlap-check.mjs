#!/usr/bin/env node
// Ad-hoc overlap detector: finds slides where a text-bearing element
// (citation line, list item, paragraph) visually overlaps an image/figure
// element it isn't supposed to be layered over (markers/callouts excluded).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const VAULT = 'C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench';
const course = process.argv[2] || 'Control Valve Basics';
const pres = path.join(VAULT, '10 - Courses', course, 'Presentation');
const slidesDir = path.join(pres, 'build', 'slides');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const files = fs.readdirSync(slidesDir).filter(f => /\.html$/i.test(f)).sort();

function evalOverlap() {
  function intersects(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }
  function overlapArea(a, b) {
    const w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    const h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return Math.max(0, w) * Math.max(0, h);
  }
  const EXCLUDE_TEXT_SEL = '.tpl-marker, .ew-lightbox-callout, .tpl-parse-def, .tpl-reveal-item__label';
  const IMG_SEL = 'img, svg, .tpl-fig, .placeholder-img';
  const TEXT_SEL = '.tpl-source, .tmpl-source, .tpl-list li, .tpl-content p, .tpl-takeaway, .panel-caption, .tpl-frame-detail__pane, .tpl-reveal-detail__pane';
  const slide = document.querySelector('.slide');
  if (!slide) return { fatal: 'no .slide' };
  const findings = [];
  const imgs = Array.from(slide.querySelectorAll(IMG_SEL));
  const texts = Array.from(slide.querySelectorAll(TEXT_SEL)).filter(t => !t.closest(EXCLUDE_TEXT_SEL));
  for (const img of imgs) {
    const ir = img.getBoundingClientRect();
    if (ir.width < 2 || ir.height < 2) continue;
    for (const t of texts) {
      if (t === img || t.contains(img) || img.contains(t)) continue;
      const cs = getComputedStyle(t);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      const tr = t.getBoundingClientRect();
      if (tr.width < 2 || tr.height < 2) continue;
      if (intersects(ir, tr)) {
        const area = overlapArea(ir, tr);
        const pctOfText = area / (tr.width * tr.height);
        if (pctOfText > 0.05) {
          const cls = (el) => el.classList.length ? '.' + [...el.classList].join('.') : el.tagName.toLowerCase();
          findings.push(`${cls(t)} overlaps ${cls(img)} (${Math.round(pctOfText * 100)}% of text box covered)`);
        }
      }
    }
  }
  return { findings };
}

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
let totalFindings = 0;
const MODES = [
  { label: 'raw', q: '' },
  { label: 'embed', q: '?embed=1' },
  { label: 'embed+visual', q: '?embed=1&visual=1' },
];
const WIDTHS = [900, 1152, 1280, 1440];
for (const f of files) {
  for (const mode of MODES) {
    for (const width of WIDTHS) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: Math.round(width * 9 / 16) });
      const url = pathToFileURL(path.join(slidesDir, f)).href + mode.q;
      try {
        await page.goto(url, { waitUntil: 'load', timeout: 20000 });
        await new Promise(r => setTimeout(r, 200));
        const result = await page.evaluate(evalOverlap);
        if (result.fatal) console.log(`[FATAL] ${f} ${mode.label}@${width}: ${result.fatal}`);
        else if (result.findings.length) {
          totalFindings += result.findings.length;
          console.log(`[OVERLAP] ${f} ${mode.label}@${width}:`);
          result.findings.forEach(x => console.log(`    ${x}`));
        }
      } catch (e) {
        console.log(`[ERROR] ${f} ${mode.label}@${width}: ${e.message}`);
      }
      await page.close();
    }
  }
}
await browser.close();
console.log(`\nDone. ${totalFindings} overlap finding(s) across ${files.length} slides x ${MODES.length} modes x ${WIDTHS.length} widths.`);
