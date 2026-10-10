---
title: ASME B16.11 — Forged Fittings, Socket-Welding and Threaded
type: standard
tags:
  - source-library
  - standards
standard-id: "ASME B16.11"
publisher: ASME
edition: 2016 (Revision of ASME B16.11-2011); eDocs record rev. 2017
holding: confirmed
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Component Catalogue.md"
  - "45 - Process Core/src/topology.js"
  - "50 - Lunar Process Engineer/vendor/process-core/topology.js"
---

# ASME B16.11 — Forged Fittings, Socket-Welding and Threaded

**Publisher:** ASME
**Edition on hand / cited:** 2016 (Revision of ASME B16.11-2011)
**Holding:** `confirmed`

## Access

Emerson Information Center / eDocs, document number `ASME_B16.11`, 39 pages.
Found via Fishweb Quick Search, 2026-10-10. Needs VPN.

The PDF carries a per-licensee notice restricting copying and distribution.
**It is not vendored into the vault and must not be.** What is recorded here
are dimensions and clause references, the same handling as `ISA-5.5`.

## What has been read

**Table 1 — Socket-Welding Elbows, Tees, and Crosses** (the one the vault
depends on), plus Table 2 (couplings, bosses, caps, couplets) and Table 5
(their threaded equivalents). Section headings and the table list read from
the document outline.

## Why this one matters more than B16.9

A ½ in line is **not buttwelded**. `ASME B16.9` is the buttwelding standard
and its table starts at NPS ½; at small bore, real pipework uses socket-weld
or threaded fittings, which is this standard. Everything the Process Core had
been reasoning about elbow geometry was reasoning about the wrong fitting
family.

**A socket-welding 90° elbow is a compact forged block, not a sweeping
curve.** There is no long-radius bend at this size. The dimension that locates
it is *centre-to-bottom-of-socket*, `A` — how far from the fitting's centre
the pipe end lands.

## Table 1 — the sizes the levels use

Dimensions in **millimetres**. Class 3000 unless noted.

| | NPS 3/8 | NPS 1/2 |
|---|---|---|
| Socket bore dia. `B` (max/min) | 18.0 / 17.6 | 22.2 / 21.8 |
| Bore of fitting `D` 3000 | 13.3 / 11.8 | 16.6 / 15.0 |
| Bore of fitting `D` 6000 | 9.9 / 8.4 | 12.5 / 11.0 |
| Socket wall `C` 3000 (avg/min) | 4.01 / 3.50 | 4.67 / 4.09 |
| Body wall `G` 3000 (min) | 3.20 | 3.73 |
| Socket depth `J` (min) | 9.5 | 9.5 |
| **Centre-to-bottom-of-socket `A`, 90° el / cross / tee — 3000** | **13.5** | **15.5** |
| same, 6000 | 15.5 | 19.0 |
| same, 9000 | — | 25.5 |
| 45° elbow, 3000 | 8.0 | 11.0 |
| Tolerance on `A` | ±1.5 | ±1.5 |

Cross-check that it hangs together: socket bore `B` 22.2 mm takes a NPS ½ pipe
whose OD is 21.3 mm per `ASME B36.10M` — 0.9 mm of clearance, as a socket
should have. The two standards agree.

## What rests on it

The Process Core's pipe geometry, which had no fitting standard behind it at
all. In particular `bendRadius` in `45 - Process Core/src/topology.js`.

**The size of the error.** The core draws an elbow radius of 3 × bore, which
at level 1's NPS ½ main is **1.866 in**. A Class 3000 socket-weld 90° elbow is
**15.5 mm = 0.610 in** centre-to-socket. Three times too large — and wrong in
kind, because the core draws a sweeping curve where the real part turns the
bore inside a compact block.

## What was deliberately not taken

Tables 3 and 4 (threaded elbows/tees/crosses, and threaded dimensions),
Section 2 pressure ratings, Section 5 materials, the mandatory appendices.
Read when something depends on them.

## Copyright

ASME, licensed to Emerson. Per-licensee watermark; reproduction and
distribution restricted. Dimensions and clause numbers recorded here;
no page, figure or table image copied.

## Note

Retrieved 2026-10-10 after Franz VPN'd in specifically to close this gap. It
was raised by his question — *are manifolds not often single moldings rather
than a bunch of fittings?* — which turned out to expose a deeper error than
the one being chased: not a wrong radius, but the wrong fitting family, and
before that no fitting standard in the register at all.
