#!/usr/bin/env node
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const VAULT = 'C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench';
const course = process.argv[2] || 'Control Valve Basics';
const slide = process.argv[3] || 'cvb-061.html';
const slidesDir = path.join(VAULT, '10 - Courses', course, 'Presentation', 'build', 'slides');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
const url = pathToFileURL(path.join(slidesDir, slide)).href;
await page.goto(url, { waitUntil: 'load', timeout: 20000 });
await new Promise(r => setTimeout(r, 300));
await page.click('.tpl-content img');
await new Promise(r => setTimeout(r, 400));
const info = await page.evaluate(() => {
  const card = document.querySelector('.ew-lightbox-card');
  const fig = document.querySelector('.ew-lightbox-figure');
  const img = document.querySelector('.ew-lightbox-figure img');
  const cr = card ? card.getBoundingClientRect() : null;
  const fr = fig ? fig.getBoundingClientRect() : null;
  const ir = img ? img.getBoundingClientRect() : null;
  return {
    cardSize: cr && { w: Math.round(cr.width), h: Math.round(cr.height) },
    figureSize: fr && { w: Math.round(fr.width), h: Math.round(fr.height) },
    imgDisplaySize: ir && { w: Math.round(ir.width), h: Math.round(ir.height) },
    imgNatural: img && { w: img.naturalWidth, h: img.naturalHeight },
    imgInlineStyle: img && img.getAttribute('style'),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
