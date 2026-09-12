#!/usr/bin/env node
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

const hasTrigger = await page.evaluate(() => {
  const t = document.querySelector('table.tmpl-table');
  return t ? t.classList.contains('ew-lightbox-trigger') : null;
});
console.log(`${slide}: table.tmpl-table has ew-lightbox-trigger = ${hasTrigger}`);

await page.evaluate(() => document.querySelector('table.tmpl-table').dispatchEvent(new MouseEvent('click', { bubbles: true })));
await new Promise(r => setTimeout(r, 300));

const state = await page.evaluate(() => {
  const overlay = document.querySelector('.ew-lightbox-overlay');
  const table = document.querySelector('.ew-lightbox-figure table');
  const cs = table ? getComputedStyle(table) : null;
  const cell = table ? table.querySelector('td') : null;
  const cellCs = cell ? getComputedStyle(cell) : null;
  return {
    isOpen: overlay && overlay.classList.contains('is-open'),
    tableFound: !!table,
    fontSize: cs ? cs.fontSize : null,
    rowCount: table ? table.querySelectorAll('tr').length : 0,
    cellFontSize: cellCs ? cellCs.fontSize : null,
  };
});
console.log(JSON.stringify(state, null, 2));
await browser.close();
