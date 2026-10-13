---
title: Emerson Workbench — Instrument Style
type: reference
tags:
  - project
  - design
  - style
updated: 2026-10-12
status: first draft — palette lifted from the 657 Working Model, which is where it was already settled
---

# Emerson Workbench — Instrument Style

> [!note] Why this is not called a Style Guide
> Because `Style Guide.md` already exists, is mature, and is cited by section
> number from a dozen places as "the Style Guide". A second document with that
> name in its title would make every one of those citations ambiguous. This one
> has its own name so the bare phrase **"Style Guide" keeps pointing at exactly
> one document, forever.**

## 1 · What this governs

Every **instrument surface** in Workbench: a tool, a model, a bench, a lab
page, or the Workbench home itself. Anything a person operates rather than
reads.

- the Workbench home
- the interactive models (the Fisher 657 Working Model and its successors)
- the Process Core flow lab — `loop`, `line`, `assembly`, `section`, `detail`,
  and Pro Cutaway
- Lunar Process Engineer's chrome
- LoopBench and the HART bench, when they have a face

It does **not** govern:

- **Slides.** Typography, colour, slide furniture, diagram and callout
  conventions inside a course deck are `Style Guide.md`, which says so in its
  own §1.1 and is unchanged by this document. A slide is read; an instrument
  is operated. Two different jobs, two different answers, and neither is a
  correction of the other.
- **What a thing teaches.** That is `teaching-philosophy.md`, and through it
  Hands-First. This document has no opinion about pedagogy.
- **What a thing is.** Geometry, dimensions, symbols and conventions trace to
  the Source Library and the Standards Register. Style decides how something
  is drawn, never what is true about it.

## 2 · Where this palette came from

**It was not designed for this document.** It was lifted, whole, out of
`657-working-model.html` — the Fisher 657 Working Model, which carries the
most complete and most considered token system in the vault and has had both
grounds proven in use.

That matters for the same reason everything else here is sourced: the
alternative was inventing a sixth look for a vault that already had five. The
657's system had already answered the question; it had simply never been
written down anywhere a second surface could find it.

## 3 · The palette

Semantic roles, not colour names. A surface reaches for `--accent`, never for
"blue".

| role | light ground | dark ground |
| --- | --- | --- |
| `--bg` ground | `#eef2f6` | `#12181f` |
| `--panel` raised surface | `#ffffff` | `#1a222c` |
| `--border` | `#cdd7e1` | `#2c3846` |
| `--border-strong` | `#b9c7d6` | `#3a4a5c` |
| `--ink` body text | `#1c2530` | `#e7edf3` |
| `--sub` secondary text | `#44525f` | `#9fb0c0` |
| `--muted` tertiary text | `#6a7784` | `#7e8ea0` |
| `--accent` the measured, the live | `#2f6fb2` | `#5b9bdb` |
| `--accent-alt` annotation, caution | `#c25016` | `#ff8a4a` |
| `--good` in tolerance, passing | `#2f9e6e` | `#3ecb92` |
| `--highlight` the thing being pointed at | `#ffdd66` | `#ffdd66` |

### 3.1 Three decisions in that table worth keeping

**The dark ground is blue-black, not neutral black.** `#12181f` carries a blue
bias, which is why it reads as instrument glass rather than as a light page
with the lamp turned off. A neutral `#111` in its place looks like a setting;
this looks like a material.

**Panels lift by about eight points of lightness**, not by a border. The
border exists, but the separation survives without it. A surface that needs a
border to be legible has not been given enough tonal room.

**`--highlight` is identical on both grounds.** Deliberate. The thing being
pointed at should look the same whichever ground the reader has chosen,
because its job is to be found, and a reader who switches grounds should not
have to re-learn what "look here" looks like. Every other role moves; this one
does not.

## 4 · Two grounds, one palette — and the thing that is NOT a theme

Both grounds are first class. The viewer chooses, the choice persists, and
neither is a degraded version of the other. Implemented as the 657 does it:
tokens on bare `:root` for light, redefined under
`@media (prefers-color-scheme: dark)` guarded as `:root:not([data-theme="light"])`,
and again under `:root[data-theme="dark"]` so an explicit toggle wins in both
directions.

**Density is not a theme.** The Process Core lab pages look different from the
657 model not because they are dark — the 657 is dark too — but because they
are *denser*: monospace labels, tighter grid, live numbers, less air. That is a
legitimate second register and it belongs to surfaces where something is
running. It is a density, it rides on either ground, and it is not licence for
a second palette.

| register | when | treatment |
| --- | --- | --- |
| **reading** | a model, a home page, an explanation | generous spacing, prose measure, labels in the body face |
| **operating** | a lab page, a live loop, a bench | monospace labels, tabular numerals, tighter grid, data in `--accent` |

## 5 · What is settled and what is not

**Settled.** The palette above and the three decisions in §3.1. The two
grounds. The reading/operating split as a density rather than a second theme.
The scope boundary against `Style Guide.md`.

**Open, and deliberately not answered here.**

- **Type.** The 657 model's faces have not been audited against the Style
  Guide's §2.1 house answer, and until someone does that properly there is no
  honest entry to write. Do not invent one.
- **Motion.** Nothing in the vault has a settled position on transitions,
  easing, or whether an instrument animates at all. LPE has opinions; whether
  they generalise is unexamined.
- **Green and purple.** `Style Guide.md` §3.3 left them available and unused,
  explicitly noting that a Workbench-home surface may reach for them. This
  document has not reached for them yet. If a surface needs a fifth semantic
  role, that is where to look first, and it should be recorded here when it
  happens.
