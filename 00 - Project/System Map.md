---
title: System Map
type: reference
tags:
  - project
  - architecture
  - meta
updated: 2026-09-01
---

# System Map

**A living, visual snapshot of what the Emerson Workbench is, what has been
built, and where the current course stands.** Two audiences: a grounding
reference for mid-session ("which layer / stage does this belong to?"), and a
first-look explainer for leadership that conveys the shape of the system without
a live demo.

> [!important] This is a maintained document, not a one-off
> This note is the **source of truth for the facts**; the published infographic
> is generated from it. When the real architecture or current state changes —
> a layer started, a build phase finished, a chapter moved through a stage —
> **update this note and re-publish the infographic** (see the update protocol
> at the bottom). It should never be regenerated from scratch.
>
> - **Infographic source:** `00 - Project/System Map.html` (in this vault)
> - **Published infographic:** https://claude.ai/code/artifact/8a5017f2-4116-4422-a5f3-6f4fa02e52a7
>   (private; share from the page's share menu. To update from a later session:
>   pass this URL as `url`, read it, edit, re-publish to the same URL.)

Companion to [[System Architecture]] (the fixed four-layer directive) and
[[Course Porting Pipeline]] (the five-stage process). This note is the *current
state*; those two are the *design*.

---

## 1. The four architectural layers

The Workbench is built in four layers. Each higher layer plugs into the one
below it.

| Layer | What it is | Status (2026-09-01) |
| --- | --- | --- |
| **1 · Workbench (Home)** | Top-level landing for every Educational Services course; departmental branding and ownership. | **Not started.** |
| **2 · Workshop (Course Shell)** | The reusable course layout: nav, day/chapter/module hierarchy, the four slide templates, context pane, presenter mode. | **Built and structurally frozen.** Proven against all seven modules of 14101 Chapter 2. Remaining work is content, not structure. |
| **3 · Cartridge** | The content package for one course — the Pipeline's output — that plugs into a Workshop. | **Not yet split off.** Cartridge content and Workshop shell are still edited together in live nav. Separation deferred until after the Console. |
| **4 · Pipeline Console** | The tool that runs a legacy PowerPoint course through the five pipeline stages and produces a Cartridge. | **Active build — all current work is here.** Separate Electron app, sibling of this vault. Build phases 0–6 complete; running on real 14101 content. |

The Console **produces** a Cartridge; the Cartridge **loads into** a Workshop;
the Workshop **lives in** the Home.

---

## 2. The five pipeline stages

Fixed order. Each course chapter/module moves through them as a **per-chapter
state machine**.

| Stage | Does | Owner | How provable |
| --- | --- | --- | --- |
| **0 · Bulk convert** | Source `.pptx` → HTML slides + manifest + conversion report. | script | **Fully** — deterministic scripts, no judgement. |
| **1 · Cut the teaching arc** | Group slides into days → chapters → modules; boundaries from each module's objective, not the deck's order. | AI cut → human approve | Structural check is provable; **the cut itself is editorial judgement.** |
| **2 · Author the context layer** | Per module: a doing-centred objective and 4–6 source-checked key concepts. | AI draft → human approve | Page-ref integrity is provable; **fidelity to source is editorial judgement.** |
| **3 · Four-part slide pass** | Re-sequence, source cross-check, consolidate split slides, template + polish. | AI rework → human review (per slide) | Render checks are provable; **callout accuracy, image choice, polish are editorial judgement.** |
| **4 · Verify & publish** | Whole-deck render + integrity checks; regenerate data; publishable Cartridge. | script + human | **Mostly** — one `verify.ps1` pass. |

### The control-loop principle (the core design point)

**A stage does not close because it ran. It closes when its own verification
check passes _and_ a human approves — both, every time.** The next stage stays
locked until the current one is genuinely closed. Re-firing an earlier stage
re-locks everything downstream. This is the pipeline's checklist discipline
encoded into the tool instead of relied on by habit.

### The trust boundary (the leadership point)

This is a real course-authoring tool, not a file converter. The early stages
(0, 4, and the structural parts of 1) are **low-judgement and provable** — a
script can verify them. The later stages (the arc cut, context authoring, slide
redesign) involve **real editorial judgement** and are **deliberately kept
human-reviewed at every gate**. That trust boundary is a feature: the machine
does the mechanical work and surfaces exactly what it changed; a person signs
off on everything that requires taste or subject expertise.

---

## 3. The vault

| Folder | Holds |
| --- | --- |
| `00 - Project` | Charter, roadmap, architecture, this map, open questions, glossary. |
| `10 - Courses` | One folder per course — content, guides, the built `Presentation/`, the source deck. |
| `20 - Source Library` | Control Valve Handbook, Fisher manuals, technical publications — the primary sources courses cite. |
| `30 - Templates` | Obsidian note skeletons (Bench Book / Bench Notes / Course Home / Source Document). |
| `40 - Engine` | The shared course runtime: design system, deck runner, learning shell, slide templates, the PPT→HTML generator, `verify.ps1`, and the headless render checks. |
| `99 - Attachments` | PDFs, images, exported decks. |

The Pipeline Console's own code is **not** in the vault — it is its own
repository. It drives Claude Code with this vault as the working directory, so
the memories, pipeline docs, and Source Library are all in context.

---

## 4. Where 14101 stands right now

**Course:** 14101 Valve Trim and Body Maintenance (3 days, 16 chapters, ~38
outline modules).

| Chapter | Stage 0 | Stage 1 | Stage 2 | Stage 3 | Stage 4 |
| --- | --- | --- | --- | --- | --- |
| **Ch 1–2** | ✔ converted | ✔ | ✔ | ✔ (manual, pre-Console) | — |
| **Ch 3** | **declined** — 75 slides hand-owned (finished pre-pipeline); the guard refused to overwrite them | ✔ **closed** — 6 modules, human-approved | ✔ **closed** — 6 modules authored + approved | **in progress** — four-part pass on `ch3-m1`, per-slide before/after review under way (4 of 6 slides flagged for a rework batch) | locked |
| **Ch 4–16** | ✔ converted | outline | — | — | — |

Ch 3 is the live proof: the machine actually running the pipeline on real
content, with a human reviewing every gate.

---

## 5. The Console itself

- **Separate Electron app**, sibling of the vault. Its own repo (16 commits,
  67 tests). Build phases 0–6 done; only multi-project hardening remains.
- **"Instrument" aesthetic** — built to feel like a physical process-control
  panel (chunky stage switches, indicator lights, a monospace instrument
  readout), not a generic dashboard. Colour carries live status.
- **Before/after review at every gate** — Stage 1 and 2 racks show what the cut
  or the authored context produced next to an outline of what the source slides
  cover; Stage 3 shows a real before/after screenshot of each slide. The human
  approves knowing exactly what changed — never a black box.
- **Per-chapter state machine** — each chapter carries its own Stage 1–4 state;
  Stage 0 (bulk convert) is course-wide.

---

## Update protocol

Update **this note** whenever any of the following changes, then re-generate and
re-publish the infographic:

1. **A layer's status changes** — Home started, Cartridge split off, etc.
   (§1 table).
2. **A build phase finishes** or a new one is added (§5, and the phase list in
   [[Pipeline Console]] §7).
3. **A chapter moves through a stage** — the §4 table is the most frequently
   stale part. Pull the real state from the Console's project store
   (`~/.emerson-pipeline-console/projects/`) or ask the Console.
4. **A pipeline stage's definition or the control-loop model changes**
   ([[Course Porting Pipeline]]).
5. **The vault structure changes** (§3, and [[Vault Structure]]).

To re-publish: edit `00 - Project/System Map.html` to match this note, then
re-publish it to its existing URL (recorded above). Keep the two in sync — the
note is the facts, the HTML is the presentation of them.
