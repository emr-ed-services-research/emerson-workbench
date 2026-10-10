---
title: ASME B16.9 — Factory-Made Wrought Buttwelding Fittings
type: standard
tags:
  - source-library
  - standards
standard-id: "ASME B16.9"
publisher: ASME
edition: 2024 (Revision of ASME B16.9-2018)
holding: confirmed
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Component Catalogue.md"
---

# ASME B16.9 — Factory-Made Wrought Buttwelding Fittings

**Publisher:** ASME
**Edition on hand / cited:** 2024 (Revision of ASME B16.9-2018)
**Holding:** `confirmed`

## Access

Emerson Information Center / eDocs, document number `ASME_B16.9`, 48 pages.
Found via Fishweb Quick Search, 2026-10-10. Needs VPN.

Per-licensee watermark restricting reproduction and distribution. **Not
vendored into the vault.** Dimensions and clause references only, the same
handling as `ISA-5.5` and `ASME B16.11`.

## What has been read

**Table 6.1-1, Dimensions of Long Radius Elbows.** The front matter's list of
changes, which names the dimension tables as the `6.1-N` series.

## Table 6.1-1 — Long Radius Elbows

Centre-to-end, mm (in.). For a 90° elbow this **is** the centreline radius.

| NPS | OD at bevel | 90° elbow `A` | 45° elbow `B` |
|---|---|---|---|
| 1/2   | 21.3 (0.84) | **38 (1.50)** | 16 (0.62) |
| 3/4   | 26.7 (1.05) | **38 (1.50)** | 19 (0.75) |
| 1     | 33.4 (1.32) | **38 (1.50)** | 22 (0.88) |
| 1-1/4 | 42.2 (1.66) | 48 (1.88) | 25 (1.00) |
| 1-1/2 | 48.3 (1.90) | 57 (2.25) | 29 (1.12) |
| 2     | 60.3 (2.38) | 76 (3.00) | 35 (1.38) |
| 2-1/2 | 73.0 (2.88) | 95 (3.75) | 44 (1.75) |
| 3     | 88.9 (3.50) | 114 (4.50) | 51 (2.00) |
| 4     | 114.3 (4.50) | 152 (6.00) | 64 (2.50) |

**The "1.5 × NPS" rule holds only from NPS 1 upward.** Below that the
dimension does not scale — it floors at a flat 38 mm (1.50 in). And the table
**starts at NPS 1/2**: there is no B16.9 elbow for NPS 3/8.

## A correction, kept on the record

This entry was first written on 2026-10-10 **from memory**, stating the rule
as "1.5 × NPS at every size" and working an error table off it. That was
wrong. It was then corrected from published manufacturer tables, and has now
been verified against the standard itself — which agrees with the corrected
version exactly.

Both earlier versions are described rather than deleted, because the sequence
*recalled → corroborated → verified* is what this register exists to make
visible. The first version was flagged `RECALLED, NOT READ` at the time it was
written, and that flag was the thing that kept it honest.

## What rests on it

Less than was assumed. `bendRadius` in `45 - Process Core/src/topology.js`
cited "how a real long-radius elbow is made" — but **a ½ in line is not
buttwelded**, so this standard does not govern the geometry the core was
drawing. `ASME B16.11` (socket-welding) does, and is now held.

What this standard is still good for: anything the vault draws at NPS 1-1/4
and above, where buttwelding is real and the long-radius sweep exists.

## What was deliberately not taken

Tables 6.1-2 onward (short radius elbows, returns, tees, reducers, caps,
laterals), pressure/proof testing, materials, tolerances. Read when something
depends on them.

## Copyright

ASME, licensed to Emerson. Per-licensee watermark; reproduction and
distribution restricted. No page, figure or table image copied.
