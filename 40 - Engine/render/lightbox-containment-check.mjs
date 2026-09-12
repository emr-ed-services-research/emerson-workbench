#!/usr/bin/env node
// Verifies lightbox content (image, composite panel, or table) stays fully
// contained within its box - through the REAL embedded course shell
// (index.html + iframe), not the standalone slide file. This distinction is
// the whole point of this script: a table (or any non-image content) can
// pass every check run against the standalone file at a wide viewport and
// still overflow catastrophically once actually opened through the real,
// much narrower embedded card - confirmed on cvb-030/056, 2026-09-13. An
// image is safe to check either way (object-fit:contain guarantees
// containment regardless of box size); anything else that gets its own
// isTable-style branch in slides.js show() should be checked THROUGH THE
// SHELL, matching how a student actually sees it.
//
// Usage: node lightbox-containment-check.mjs "<course>" "<#hash>" [triggerSelector]
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const VAULT = 'C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench';
const course = process.argv[2];
const hash = process.argv[3];
const triggerSelector = process.argv[4] || '.ew-lightbox-trigger';
if (!course || !hash) {
  console.error('usage: lightbox-containment-check.mjs "<course>" "<#hash>" [triggerSelector]');
  process.exit(2);
}
const pres = path.join(VAULT, '10 - Courses', course, 'Presentation', 'course');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
const url = pathToFileURL(path.join(pres, 'index.html')).href + hash;
await page.goto(url, { waitUntil: 'load', timeout: 20000 });
await new Promise((r) => setTimeout(r, 600));

const frame = page.frames().find((f) => f.url().includes('/build/slides/'));
if (!frame) {
  console.log(`[FAIL] ${hash}: no slide iframe found`);
  await browser.close();
  process.exit(1);
}

const triggerCount = await frame.evaluate((sel) => document.querySelectorAll(sel).length, triggerSelector);
if (!triggerCount) {
  console.log(`[warn] ${hash}: no lightbox triggers matching ${triggerSelector}`);
  await browser.close();
  process.exit(0);
}

let anyFail = false;
for (let i = 0; i < triggerCount; i++) {
  await frame.evaluate(() => { const o = document.querySelector('.ew-lightbox-overlay'); if (o) o.classList.remove('is-open'); });
  await frame.evaluate((sel, idx) => {
    document.querySelectorAll(sel)[idx].dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }, triggerSelector, i);
  await new Promise((r) => setTimeout(r, 400));

  const geo = await frame.evaluate(() => {
    const figure = document.querySelector('.ew-lightbox-figure');
    const content = figure ? figure.firstElementChild : null;
    const fr = figure ? figure.getBoundingClientRect() : null;
    const cr = content ? content.getBoundingClientRect() : null;
    if (!fr || !cr) return null;
    const EPS = 2;
    return {
      tag: content.tagName.toLowerCase(),
      overflowRight: cr.right - fr.right,
      overflowBottom: cr.bottom - fr.bottom,
      overflowLeft: fr.left - cr.left,
      overflowTop: fr.top - cr.top,
      contained: (cr.right - fr.right) <= EPS && (cr.bottom - fr.bottom) <= EPS &&
                 (fr.left - cr.left) <= EPS && (fr.top - cr.top) <= EPS,
    };
  });

  if (!geo) {
    console.log(`  [FAIL] panel ${i}: lightbox did not open or figure box empty`);
    anyFail = true;
    continue;
  }
  if (geo.contained) {
    console.log(`  [ok] panel ${i} (<${geo.tag}>): fully contained`);
  } else {
    console.log(`  [FAIL] panel ${i} (<${geo.tag}>): overflow R=${Math.round(geo.overflowRight)} B=${Math.round(geo.overflowBottom)} L=${Math.round(geo.overflowLeft)} T=${Math.round(geo.overflowTop)} px`);
    anyFail = true;
  }
}

console.log(anyFail ? `${hash}: FAIL - containment broken on at least one panel` : `${hash}: PASS - all ${triggerCount} panel(s) fully contained`);
await browser.close();
process.exit(anyFail ? 1 : 0);
