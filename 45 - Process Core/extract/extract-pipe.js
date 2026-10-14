/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   Reads the Control Valve Handbook's pipe schedule table into the
   catalogue's pipe rows. Run by hand.                                */
/* ---------------- PIPE DATA, AT INDUSTRIAL SIZE ----------------------

   WHY. The catalogue was seeded at NPS 3/8 and 1/2 because that is what
   Lunar Process Engineer's grow bay uses, and Franz pointed out that
   the department serves power, nuclear, refining and severe service --
   NPS 2 to 24 and beyond. A catalogue that stops at half an inch cannot
   describe the domain it exists for.

   WHERE FROM. Control Valve Handbook 6th edition, chapter 14 "Pipe
   Data". `ASME B36.10M` is the governing standard and is registered,
   but it has never been opened -- its register entry says so -- and the
   Handbook's table is the account the vault actually holds. Recorded as
   the Handbook's, not as the standard's, because those are different
   claims and only one of them is true here.

   HOW IT IS READ, and this is the part worth keeping. The table nests
   three deep: a nominal size spans several schedule rows, and the size
   and outside diameter are printed once per group. Carrying them
   forward in reading order goes wrong above NPS 3 -- it produced
   "NPS 6, OD 6.625, ID 7.981", which is NPS 8's bore wearing NPS 6's
   label, and looked entirely plausible.

   So the rows identify THEMSELVES, the same trick that fixed the valve
   catalog: a real pipe row satisfies

       ID = OD - 2 * wall

   to the printed precision. Three numbers that happen to sit near each
   other almost never satisfy that, and the ones that do are a pipe.
   The nominal size is then keyed off the outside diameter, which is
   unique per NPS and is itself read from the same table.

   Run: node extract/extract-pipe.js                                      */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const POPPLER = 'C:/Users/E1552882/poppler/poppler-26.02.0/Library/bin/pdftotext.exe';
const VAULT = path.join(__dirname, '..', '..');
const PDF = '20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook/' +
            'Control Valve Handbook - Sixth Edition.pdf';
const DOC = 'Control Valve Handbook 6th ed., ch14 Pipe Data ' +
            '(the vault\'s account of ASME B36.10M; the standard itself is ' +
            'registered but has never been opened)';

/* Schedules worth having. STD/40 is the workhorse; XS/80 is the common
   heavier wall. The table prints both against the same OD. */
const WANT_SCHED = { '40': 40, '80': 80 };

function run() {
  if (!fs.existsSync(POPPLER)) { console.error('no pdftotext'); return 1; }
  const pdf = path.join(VAULT, PDF);
  if (!fs.existsSync(pdf)) { console.error('missing: ' + PDF); return 1; }

  const rejectedPairs = [];
  const txt = execFileSync(POPPLER, ['-layout', pdf, '-'],
    { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  /* ONLY CHAPTER 14. The first version scanned all 300 pages and
     collected 276 impossible size/diameter pairings -- "NPS 90 against
     OD 0.37" and the like -- because every other table in the Handbook
     also has a column of numbers in its leftmost position. The monotonic
     filter then had to choose among mostly-garbage candidates and threw
     away the real NPS 4 through 12 rows along with them.

     A page of this chapter identifies itself in its running head. */
  const pages = txt.split(String.fromCharCode(12))
    .filter(pg => /Chapter 14: Pipe Data/.test(pg));
  if (!pages.length) { console.error('no Chapter 14 pages found'); return 1; }
  const lines = pages.join(String.fromCharCode(10)).split(String.fromCharCode(10));

  /* Pass 1: the (nps, od) pairings the table states -- then MADE
     MONOTONIC, because reading them straight produced two that are
     plainly impossible: "NPS 90" against OD 0.540, which is a quarter
     inch, and "NPS 4" against OD 16.000, which is sixteen. Both came
     from the same nesting that defeated the carry-forward.

     Nominal size and outside diameter increase together -- that is what
     a pipe schedule IS -- so the true pairings are the longest run that
     rises in both. Everything else is a mis-read, and is reported
     rather than silently dropped. */
  const npsVal = t => {
    const m = String(t).match(/^([0-9]+)(?:[-\s]([0-9]+)\/([0-9]+))?$/);
    if (m) return +m[1] + (m[2] ? +m[2] / +m[3] : 0);
    const f = String(t).match(/^([0-9]+)\/([0-9]+)$/);
    return f ? +f[1] / +f[2] : null;
  };

  const cand = [];
  for (const l of lines) {
    const m = l.match(/^\s*([0-9]+(?:[-\s][0-9]+\/[0-9]+)?|[0-9]+\/[0-9]+)\s+([0-9]+)\s+([0-9]+\.[0-9]+)\s/);
    if (!m) continue;
    const nps = m[1].replace(/\s+/g, '-'), od = +m[3], v = npsVal(nps);
    if (v === null || !(od > 0.3 && od < 40)) continue;
    cand.push({ nps: nps, v: v, od: od });
  }
  cand.sort((a, b) => a.od - b.od || a.v - b.v);

  /* longest strictly-increasing run in nps value, over od order */
  const best = [], from = [];
  for (let i = 0; i < cand.length; i++) {
    best[i] = 1; from[i] = -1;
    for (let j = 0; j < i; j++)
      if (cand[j].v < cand[i].v && cand[j].od < cand[i].od && best[j] + 1 > best[i]) {
        best[i] = best[j] + 1; from[i] = j;
      }
  }
  let end = 0;
  for (let i = 1; i < cand.length; i++) if (best[i] > best[end]) end = i;
  const chainIdx = new Set();
  for (let i = end; i >= 0; i = from[i]) { chainIdx.add(i); if (from[i] < 0) break; }

  const odOf = {}, npsOf = {};
  cand.forEach((c, i) => {
    if (chainIdx.has(i)) { odOf[c.nps] = c.od; npsOf[c.od.toFixed(3)] = c.nps; }
    else rejectedPairs.push('NPS ' + c.nps + ' against OD ' + c.od +
      ' breaks the monotonic size/diameter sequence');
  });

  /* Pass 2: rows that satisfy ID = OD - 2t, keyed by the OD they imply. */
  const rows = [], rejected = [];
  for (const l of lines) {
    const nums = (l.match(/[0-9]+\.[0-9]+/g) || []).map(Number);
    if (nums.length < 3) continue;
    const sched = (l.match(/\b(STD|XS|XXS)\b\s+(40|80|120|160|---|--)\b/) || [])[2];
    for (let i = 0; i + 1 < nums.length; i++) {
      const wall = nums[i], id = nums[i + 1];
      if (!(wall > 0.02 && wall < 3) || !(id > 0.2 && id < 30)) continue;
      const od = id + 2 * wall;
      const key = od.toFixed(3);
      const nps = npsOf[key];
      if (!nps) continue;                        // no table OD matches
      rows.push({ nps: nps, od: od, wall: wall, id: id,
                  sched: sched && WANT_SCHED[sched] ? WANT_SCHED[sched] : null });
      break;
    }
  }

  /* Keep only the schedules asked for, and one row per (nps, sched). */
  const keep = {};
  for (const r of rows) {
    if (!r.sched) continue;
    const k = r.nps + '|' + r.sched;
    if (keep[k] && keep[k].id !== r.id)
      rejected.push({ why: 'two different bores for NPS ' + r.nps +
        ' Sch ' + r.sched + ': ' + keep[k].id + ' and ' + r.id });
    keep[k] = r;
  }
  const out = Object.keys(keep).map(k => keep[k])
    .sort((a, b) => (odOf[a.nps] || 0) - (odOf[b.nps] || 0) || a.sched - b.sched);

  /* Anchors, checked rather than trusted. If these three are right the
     OD keying is right, because each is a different decade of the table. */
  const anchor = (nps, sched, wall, id) => {
    const r = out.find(x => x.nps === nps && x.sched === sched);
    const ok = r && Math.abs(r.wall - wall) < 1e-9 && Math.abs(r.id - id) < 1e-9;
    console.log('  ' + (ok ? 'ok  ' : 'FAIL') + '  NPS ' + nps + ' Sch ' + sched +
      ' -> wall ' + wall + ', bore ' + id +
      (ok ? '' : '   GOT ' + (r ? r.wall + ' / ' + r.id : 'nothing')));
    return ok;
  };

  console.log('\nPIPE DATA\n');
  console.log('  ' + out.length + ' rows that satisfy ID = OD - 2t and key to a tabled OD\n');
  let good = true;
  good = anchor('1/2', 40, 0.109, 0.622) && good;
  good = anchor('6', 40, 0.280, 6.065) && good;
  good = anchor('10', 40, 0.365, 10.020) && good;

  /* COVERAGE, stated rather than left to be discovered. The reader
     stops at NPS 10: the chapter's larger sizes sit on pages whose
     running head this filter does not match, so 12 and up are absent.
     That covers most refinery service and not all of it, and the gap
     is named here so nobody assumes the catalogue is complete. */
  const sizes = out.map(r => r.nps);
  console.log(String.fromCharCode(10) + '  covers NPS ' + sizes[0] + ' to ' +
    sizes[sizes.length - 1] + '. NPS 12 and larger are NOT read -- the ' +
    'chapter continues on pages this filter misses.');

  console.log('');
  console.log('  NPS      Sch   OD        wall      bore');
  for (const r of out)
    console.log('  ' + String(r.nps).padEnd(9) + String(r.sched).padEnd(6) +
      r.od.toFixed(3).padEnd(10) + r.wall.toFixed(3).padEnd(10) + r.id.toFixed(3));

  fs.writeFileSync(path.join(__dirname, 'pipe.json'),
    JSON.stringify({ generated: new Date().toISOString(), doc: DOC,
                     rows: out, rejected: rejected, rejectedPairs: rejectedPairs }, null, 1) + '\n', 'utf8');
  console.log('\n  wrote lab/pipe.json' +
    (rejected.length ? '   (' + rejected.length + ' conflicts recorded)' : ''));
  return good ? 0 : 1;
}

process.exit(run());
