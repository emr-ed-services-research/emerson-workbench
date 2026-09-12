#!/usr/bin/env node
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const VAULT = 'C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench';
const course = process.argv[2] || 'Control Valve Basics';
const slide = process.argv[3];
const out = process.argv[4];
const slidesDir = path.join(VAULT, '10 - Courses', course, 'Presentation', 'build', 'slides');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
const url = pathToFileURL(path.join(slidesDir, slide)).href;
await page.goto(url, { waitUntil: 'load', timeout: 20000 });
await new Promise(r => setTimeout(r, 300));
await page.evaluate(() => document.querySelector('table.tmpl-table').dispatchEvent(new MouseEvent('click', { bubbles: true })));
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: out });
await browser.close();
