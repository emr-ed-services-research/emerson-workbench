---
title: ISA-5.5 — Graphic Symbols for Process Displays
type: standard
tags:
  - source-library
  - standards
standard-id: "ISA-5.5"
publisher: ISA (International Society of Automation)
edition: ISA-S5.5-1985
holding: confirmed
updated: 2026-10-09
used-by:
  - "00 - Project/Process Core — Architecture & Build Plan.md"
  - "45 - Process Core/README.md"
  - "45 - Process Core/TOPOLOGY.md"
  - "45 - Process Core/skins/modern.js"
  - "45 - Process Core/src/schemvis.js"
  - "45 - Process Core/src/topology.js"
  - "45 - Process Core/test.js"
  - "45 - Process Core/test/schemvis.test.js"
  - "45 - Process Core/test/topology.test.js"
  - "50 - Lunar Process Engineer/level1.html"
  - "50 - Lunar Process Engineer/skins-preview.html"
  - "50 - Lunar Process Engineer/vendor/process-core/schemvis.js"
  - "50 - Lunar Process Engineer/vendor/process-core/skins/modern.js"
  - "50 - Lunar Process Engineer/vendor/process-core/topology.js"
---

# ISA-5.5 — Graphic Symbols for Process Displays

**Publisher:** ISA (International Society of Automation)
**Edition on hand / cited:** ISA-S5.5-1985
**Holding:** `confirmed`

## Access

Information Center > Standards > ISA > Symbols, Specification Forms, and General Terminology. Opened 2026-10-08 and 2026-10-09.

## What has been read

Preface; §3.3.1 (connectors and line breaks); §3.3.2 Containers and vessels in full, pages 17-19 — the Process subgroup (VSSL, JVSL, RCTR, DTWR) and the Storage subgroup (ATNK, BINN, FTNK, GHDR, PVSL, WHPR); §3.3.8 Mixing; §3.3.10 Rotating equipment; §3.3.13 Valves.

## What rests on it

The whole schematic view. `45 - Process Core/src/schemvis.js` implements its symbols keyed by the standard's own four-character mnemonics; `src/topology.js` maps component kinds to those mnemonics via ISA_VALVE and ISA_VESSEL. Valve state reads as fill — outline shut, solid open — which is the standard's convention, not ours.

## What was deliberately not taken

Colour, blink and orientation attributes: never read, so nothing in the skins claims to follow them. The Connectors group is deliberately EMPTY in the standard — it specifies no fitting symbols — which is why fittings are drawn by the physical view and not the schematic one.

## Copyright

Copyrighted: "No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form." NOT vendored into this repository and no page, figure or drawing reproduced. Symbols are written from the written descriptions in our own code, keyed by the standard's mnemonics, clause cited.

## Note

This is a standard for VIDEO DISPLAYS, and its own preface distinguishes it from ISA-5.1/5.3, which are drafting standards for printed documents. For a game screen or an operator board it is the correct standard, not a substitute for one we lack.
