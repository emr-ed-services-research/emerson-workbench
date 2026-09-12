#!/usr/bin/env node
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const VAULT = 'C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench';
const course = process.argv[2] || 'Control Valve Basics';
const hash = process.argv[3] || '#cvb-ch1-m1/0';
const pres = path.join(VAULT, '10 - Courses', course, 'Presentation', 'course');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
page.on('console', m => console.log('[console]', m.type(), m.text()));
page.on('pageerror', e => console.log('[pageerror]', e.message));
const url = pathToFileURL(path.join(pres, 'index.html')).href + hash;
await page.goto(url, { waitUntil: 'load', timeout: 20000 });
await new Promise(r => setTimeout(r, 500));
const info = await page.evaluate(() => {
  const list = document.getElementById('ctxConcepts');
  return {
    html: list ? list.innerHTML : '(no #ctxConcepts)',
    items: list ? Array.from(list.querySelectorAll('li')).map(li => li.textContent) : [],
    ctxObj: document.getElementById('ctxObj') ? document.getElementById('ctxObj').textContent : null,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
