#!/usr/bin/env node
// Verifies each lightbox-eligible image on a slide shows its OWN correct,
// single-line caption (not the whole-slide citation, not empty when it
// shouldn't be, never wrapped to 2+ lines).
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const VAULT = 'C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench';
const course = process.argv[2] || 'Control Valve Basics';
const slide = process.argv[3];
const slidesDir = path.join(VAULT, '10 - Courses', course, 'Presentation', 'build', 'slides');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
const url = pathToFileURL(path.join(slidesDir, slide)).href;
await page.goto(url, { waitUntil: 'load', timeout: 20000 });
await new Promise(r => setTimeout(r, 300));

const triggerCount = await page.evaluate(() => document.querySelectorAll('.ew-lightbox-trigger').length);
console.log(`${slide}: ${triggerCount} lightbox triggers found`);

for (let i = 0; i < triggerCount; i++) {
  await page.evaluate(() => { const o = document.querySelector('.ew-lightbox-overlay'); if (o) o.classList.remove('is-open'); });
  await page.evaluate((idx) => {
    document.querySelectorAll('.ew-lightbox-trigger')[idx].dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }, i);
  await new Promise(r => setTimeout(r, 200));
  const state = await page.evaluate(() => {
    const capEl = document.querySelector('.ew-lightbox-caption');
    const cs = capEl ? getComputedStyle(capEl) : null;
    const rect = capEl ? capEl.getBoundingClientRect() : null;
    // detect actual visual line count: single-line text height should be ~1 line
    const lineHeight = cs ? parseFloat(cs.lineHeight) : 0;
    const lines = rect && lineHeight ? Math.round(rect.height / lineHeight) : 0;
    return {
      text: capEl ? capEl.textContent : null,
      whiteSpace: cs ? cs.whiteSpace : null,
      heightPx: rect ? Math.round(rect.height) : null,
      lineHeightPx: Math.round(lineHeight),
      approxLines: lines,
    };
  });
  console.log(`  panel ${i}: caption="${state.text}" whiteSpace=${state.whiteSpace} lines~=${state.approxLines}`);
}
await browser.close();
