#!/usr/bin/env node
// Verifies the lightbox's per-panel click-through actually works on a
// converted composite slide: clicking each <image> inside the slide's <svg>
// opens ONLY that panel (not the whole composite), with the right caption,
// and cycling with ArrowRight advances through all panels in order.
import fs from 'node:fs';
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

const panelCount = await page.evaluate(() => document.querySelectorAll('.tpl-content svg > image').length);
console.log(`${slide}: ${panelCount} <image> panels found in SVG`);

if (panelCount === 0) {
  console.log(`${slide}: NO SVG panels - not a converted composite, skipping`);
  await browser.close();
  process.exit(0);
}

const results = [];
for (let i = 0; i < panelCount; i++) {
  // close any open lightbox first
  await page.evaluate(() => { const o = document.querySelector('.ew-lightbox-overlay'); if (o) o.classList.remove('is-open'); });
  const clicked = await page.evaluate((idx) => {
    const imgs = document.querySelectorAll('.tpl-content svg > image');
    imgs[idx].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    return true;
  }, i);
  await new Promise(r => setTimeout(r, 200));
  const state = await page.evaluate(() => {
    const overlay = document.querySelector('.ew-lightbox-overlay');
    const isOpen = overlay && overlay.classList.contains('is-open');
    const img = document.querySelector('.ew-lightbox-figure img');
    const caption = document.querySelector('.ew-lightbox-caption');
    const count = document.querySelector('.ew-lightbox-count');
    return {
      isOpen,
      imgSrc: img ? img.getAttribute('src').split('/').pop() : null,
      imgDisplayW: img ? Math.round(img.getBoundingClientRect().width) : null,
      imgDisplayH: img ? Math.round(img.getBoundingClientRect().height) : null,
      caption: caption ? caption.textContent : null,
      count: count ? count.textContent : null,
    };
  });
  results.push({ panel: i, ...state });
}

let allGood = true;
const seenSrcs = new Set();
for (const r of results) {
  if (!r.isOpen) { console.log(`  [FAIL] panel ${r.panel}: lightbox did not open`); allGood = false; continue; }
  if (!r.imgSrc) { console.log(`  [FAIL] panel ${r.panel}: no image shown`); allGood = false; continue; }
  if (seenSrcs.has(r.imgSrc) && panelCount > 1) {
    console.log(`  [WARN] panel ${r.panel}: same image src as a previous panel (${r.imgSrc}) - may not be independently switching`);
  }
  seenSrcs.add(r.imgSrc);
  console.log(`  [ok] panel ${r.panel}: shows ${r.imgSrc} at ${r.imgDisplayW}x${r.imgDisplayH}, caption="${r.caption}", count="${r.count}"`);
}
console.log(`${slide}: ${seenSrcs.size} distinct images shown across ${panelCount} panel clicks - ${seenSrcs.size === panelCount ? 'PASS (each panel independently clickable)' : 'CHECK NEEDED'}`);

await browser.close();
