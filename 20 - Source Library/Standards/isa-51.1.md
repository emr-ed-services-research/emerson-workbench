---
title: ANSI/ISA-51.1 — Process Instrumentation Terminology
type: standard
tags:
  - source-library
  - standards
standard-id: "ISA-51.1"
publisher: ISA
edition: unverified
holding: unverified
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Pro Chrome Plan.md"
  - "45 - Process Core/CLAUDE.md"
  - "45 - Process Core/lab/assembly/index.html"
  - "45 - Process Core/lab/fic101/index.html"
  - "45 - Process Core/lab/loop/index.html"
  - "45 - Process Core/lab/render-loop.js"
  - "45 - Process Core/lab/render/index.html"
  - "45 - Process Core/src/instrument.js"
  - "45 - Process Core/test/instrument.test.js"
  - "50 - Lunar Process Engineer/vendor/process-core/instrument.js"
---

# ANSI/ISA-51.1 — Process Instrumentation Terminology

**Publisher:** ISA
**Edition on hand / cited:** unverified
**Holding:** `unverified`

## Why this entry exists at all

It was missing. The instrument layer of the Process Core was built citing
`ANSI/ISA-51.1` in five places and no register entry was ever written, so for
that whole time the check was failing and nobody read far enough up its output
to see it. Writing an honest "not read" entry is the minimum the register asks
for; a citation with no entry is a claim nobody can trace.

## Access

Not attempted. Presumably Emerson Information Center, ISA enterprise grouping,
alongside the other ISA holdings — the "All ISA Standards Sorted by Number"
listing is where to resolve it. **Needs VPN.**

## What has been read

**Nothing.** Not the standard, not its table of contents, not its title page.

## How we know of it — second-hand, and that is the point

The Fisher FIELDVUE DVC6200 instruction manual, which the vault **does** hold,
names it directly in its specifications table:

> "Specialized instrument terms are defined in ANSI/ISA Standard 51.1 -
> Process Instrument Terminology."

So the chain is: a held Emerson manual states that its own instrument
terminology is defined by this standard. That is a real and checkable
provenance for *using those words as that standard defines them*. It is **not**
provenance for any specific clause, number or definition text, because the
standard itself has never been opened.

## What rests on it

`45 - Process Core/src/instrument.js` — the semantics of three words:

- **range** is the pair of limits, not a single number
- **span** is the difference between them
- **reference accuracy** is quoted as a percent **of span** unless stated
  otherwise, and `accuracy.of` must be either `span` or `reading` because
  those are different claims

The layer refuses a device definition with no range on exactly this ground:
accuracy is defined against span, so without a range there is no accuracy
either. That refusal is grounded in the terminology, not in a clause number,
and no clause number is cited anywhere — correctly, since none has been read.

## What would improve this entry

Open it and confirm the three definitions above say what the layer assumes.
Until then the risk is small but real: the DVC6200 manual tells us the standard
governs these terms, not what it says about them.

## Copyright

ISA, presumed licensed to Emerson like the other ISA holdings. Not vendored.
Nothing to vendor — nothing has been read.
