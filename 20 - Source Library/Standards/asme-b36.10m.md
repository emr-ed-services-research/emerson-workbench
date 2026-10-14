---
title: ASME B36.10M — Welded and Seamless Wrought Steel Pipe
type: standard
tags:
  - source-library
  - standards
standard-id: "ASME B36.10M"
publisher: ASME
edition: unverified
holding: publisher-licensed
updated: 2026-10-09
used-by:
  - "00 - Project/Process Core — Architecture & Build Plan.md"
  - "00 - Project/Process Core — Component Catalogue.md"
  - "45 - Process Core/CLAUDE.md"
  - "45 - Process Core/catalogue/parts.json"
  - "45 - Process Core/extract/extract-pipe.js"
  - "45 - Process Core/extract/pipe.json"
  - "45 - Process Core/lab/assembly/index.html"
  - "45 - Process Core/lab/cascade/index.html"
  - "45 - Process Core/lab/cutaway/index.html"
  - "45 - Process Core/lab/fic101/index.html"
  - "45 - Process Core/lab/loop-cooling.js"
  - "45 - Process Core/lab/loop/index.html"
  - "45 - Process Core/lab/physical/index.html"
  - "45 - Process Core/lab/render-fic101.js"
  - "45 - Process Core/lab/render-physical.js"
  - "45 - Process Core/lab/render-rig.js"
  - "45 - Process Core/lab/render/index.html"
  - "45 - Process Core/reference.js"
  - "45 - Process Core/src/catalogue.js"
  - "45 - Process Core/src/physvis.js"
  - "45 - Process Core/src/topology.js"
  - "45 - Process Core/test/topology.test.js"
  - "50 - Lunar Process Engineer/PIPELINE.md"
  - "50 - Lunar Process Engineer/level1.html"
  - "50 - Lunar Process Engineer/level2.html"
  - "50 - Lunar Process Engineer/level3.html"
  - "50 - Lunar Process Engineer/reference/README.md"
  - "50 - Lunar Process Engineer/reference/crosscheck.js"
  - "50 - Lunar Process Engineer/sizing.js"
  - "50 - Lunar Process Engineer/trainer.html"
  - "50 - Lunar Process Engineer/vendor/process-core/catalogue.js"
  - "50 - Lunar Process Engineer/vendor/process-core/catalogue/parts.json"
  - "50 - Lunar Process Engineer/vendor/process-core/physvis.js"
  - "50 - Lunar Process Engineer/vendor/process-core/topology.js"
  - "50 - Lunar Process Engineer/verify.js"
---

# ASME B36.10M — Welded and Seamless Wrought Steel Pipe

**Publisher:** ASME
**Edition on hand / cited:** unverified
**Holding:** `publisher-licensed`

## Access

ASME enterprise set. THIS DOCUMENT HAS NOT BEEN OPENED — the Sch 40 bore figures in use came from the Control Valve Handbook and public tables.

## What has been read

Nothing.

## What rests on it

Pipe schedule bores throughout Lunar Process Engineer. `sizing.js` sizes the bay by velocity band against NPS 3/8 and NPS 1/2 Sch 40 bores (0.493 in and 0.622 in), and those two numbers are now the netlist's declared bores in `level1.html`.

## What was deliberately not taken

n/a

## Copyright

Unverified.

## Note

Worth confirming: two specific bore figures are load-bearing for every flow number the game produces, and a cross-check runs against them on every LPE build.
