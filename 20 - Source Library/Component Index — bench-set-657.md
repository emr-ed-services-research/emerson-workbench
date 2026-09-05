---
title: Component Index — bench-set-657
type: reference
tags:
  - source-library
  - pipeline
  - component-index
  - topic-driven
topic: "Bench-setting a Fisher 657"
updated: 2026-09-04
---

# Teaching-Component Index — Topic: Bench-Setting a Fisher 657

**Trial run, topic-driven (no deck).** Built cold — from the named topic and
the Source Library alone, with no existing course slides to read — as the
test case for `00 - Project/Course Porting Pipeline.md` "Origination without
a deck." Method mirrors `Component Index — 1400 ch3.md` exactly (same record
shape, same precedence-bucket discipline, same standard: read a source in
full before citing it) with one deliberate difference: the *scope* comes from
the topic name, not from a chapter's existing page range.

**Built cold, then compared** (as directed) against ch3's existing
`ch3-cmp-*` bench-set-related entries — `ch3-cmp-657-assembly`,
`ch3-cmp-nameplate`, `ch3-cmp-bench-set-graph`,
`ch3-cmp-benchset-adjustment-setup`, `ch3-cmp-casing-torque-pattern`. See
"Comparison against the ch3 index" at the end. Where the same source figure
is being described, this file cross-references the existing `ch3-cmp-*` id
rather than minting a duplicate.

## Scope note — where "bench-setting a 657" starts and stops

Scoped the way a real training module would be, and the boundary calls are
themselves part of what this trial tests:

- **In scope:** what bench set is; the nameplate values that define a
  correct one; the off-the-valve adjustment procedure; the friction
  correction needed once the actuator is on the valve; the deadband concept,
  because the 657 IM presents it on the *same figure* as bench set and
  frames it as what friction adds on top.
- **Out of scope, deliberately:** diaphragm-casing bolt torque and the
  spring-relief-before-disassembly warning. These sit in the 657 IM's
  *Maintenance* section (diaphragm replacement), not its bench-set
  procedure — a technician bench-sets a 657 without ever opening the
  diaphragm casing. `ch3-cmp-657-assembly` and `ch3-cmp-casing-torque-pattern`
  bundle this in because ch3-m2/m3 teach 657 identification, bench-set, *and*
  mounting/service as one arc; a topic scoped to bench-setting alone is
  narrower than that module pairing. This is the clearest boundary
  difference the topic-driven method surfaced — see the comparison section.
- **Boundary, kept in:** mounting preconditions and the stem-connector
  procedure. The 657 IM sequences these immediately around bench set (bench
  set is checked *while* mounting, before the stem connector is installed),
  so excluding them would fracture one continuous IM narrative. Flagged as
  boundary rather than core.

---

## Precedence decisions

Same four-bucket framework as ch3 (`current` / `archive-corroborated` /
`archive-only` / `legacy`). Built from a cold, full read of the two primary
sources; archive precedence for D750004/D750066 is carried over from the
ch3 full-archive review (already reviewed page-by-page, no conflicts found,
Franz-confirmed 2026-09-02) rather than re-rendering and re-reading the same
scanned pages again — the precedence question for those two documents was
already settled, not the topic-scoping question this trial is actually
testing.

| Source | Doc id / date | Bucket | Notes |
| --- | --- | --- | --- |
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | Read in full for this trial (Table of Contents, glossary p25, §8.5 pp183–187). Formal glossary definition of "Bench Set" (p25) and the procedural statement + Figure 8.10 (§8.5.5, p186). |
| **Fisher 657 Instruction Manual** | D100306X012 · Jun 2018 | `current` | Read in full for this trial (all 32 pages). Source of truth: "Discussion of Bench Set," Figure 4, the 8-step Spring Verification procedure, "Friction Discussion," Figure 5 deadband, the stem-connector and mounting sections. |
| **Archive D750004** — *Pneumatic Spring-and-Diaphragm Actuators* | Fisher Educational Services · ~1990s scan | `archive-corroborated` | Not re-read for this trial; carried over from ch3's full review. p19 "Bench Set Illustrated" (segmented Fi/Fs/F_CVR pressure scale) is a genuine complementary framing, corroborated, no conflict. |
| **Archive D750066** — *Maintaining Spring-and-Diaphragm Actuators* | Fisher Educational Services · ~1990s scan | `archive-corroborated` | Not re-read for this trial; carried over from ch3's full review. p31 "Check Bench Set" (LOW END / HIGH END photos) corroborates the Spring Verification procedure. |

---

## Components

### Core — what bench set is, and how to set it

```yaml
id: bs657-cmp-definition
teaches: >
  Bench set is initial spring compression, set with the actuator (and valve,
  if mounted) "on the bench" — no process or valve forces acting. It defines
  the diaphragm-pressure range that strokes the actuator through rated
  travel. Formally: "the calibration procedure of an actuator spring so that
  it can use a pressure range to fully stroke a valve to its rated travel."
concept-tags: [bench set, definition, inherent diaphragm pressure range, spring adjuster, on the bench, friction-free]
status: current
source:
  - doc: Control Valve Handbook 6th ed. (D101881X012)
    locator: "§1.4 Control Valve Functions and Characteristics Terminology, p25 — glossary entries 'Bench Set' and 'Inherent Diaphragm Pressure Range'; also 'Spring Adjuster' cross-referencing bench set"
  - doc: Control Valve Handbook 6th ed.
    locator: "§8.5.5 Bench Set, p186 — procedural statement: seating force = pressure applied minus bench set minus spring compression due to travel"
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "'Discussion of Bench Set', p5 — bench set values assume no packing friction; adjust before connecting to the valve"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  NOT independently indexed in Component Index — 1400 ch3.md — the ch3 index
  goes straight to the graph and the adjustment procedure without a
  standalone glossary-definition component. This is the clearest thing the
  cold build found that the deck-driven build didn't capture as its own
  record; see "Comparison against the ch3 index" below.
```

```yaml
id: bs657-cmp-bench-set-adjustment
teaches: >
  Off-the-valve bench-set procedure (Spring Verification, 8 steps): raise
  pressure from 0 to the lower bench-set value on the nameplate, watch for
  first stem movement (adjust the spring adjuster if it moves early/late);
  apply the upper bench-set pressure and mark the stem; decrease back to the
  lower pressure and measure the mark-to-stem distance; it must equal rated
  travel on the nameplate. Same steps for direct- or reverse-acting valves.
concept-tags: [bench set procedure, spring verification, lower bench set, upper bench set, mark stem, measure travel, spring adjuster, rated travel]
status: current
source:
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "Figure 4 'Bench Set Adjustment' (drawing 40A8715-B), p5; 'Spring Verification' 8-step procedure, pp6–7"
delivery: existing figure (crop) — Figure 4
used-by: []
notes: >
  Corresponds to ch3-cmp-benchset-adjustment-setup (same Figure 4). The ch3
  record cites "Figure 4" generically; this cold read recovered the full
  8-step procedure text behind it, including the size-70/70i-and-87-specific
  note about assembling the stem connector before turning the spring
  adjuster (a detail not in the ch3 record). Converges cleanly otherwise.
```

```yaml
id: bs657-cmp-friction-discussion
teaches: >
  Bench set is defined friction-free; adjusting it after the actuator is
  connected to the valve and packing is tightened requires correcting for
  friction — full travel then occurs at bench set plus (rising pressure) or
  minus (falling pressure) the friction force divided by effective diaphragm
  area. A 5-step field procedure measures the actual friction force directly:
  mark a reference travel point on the rise, overshoot it, then read the
  pressure drop returning to the same point on the fall; friction force =
  0.5 x (pressure difference) x (effective diaphragm area).
concept-tags: [friction, on-valve bench set, deadband cause, friction force formula, effective diaphragm area, travel reference mark]
status: current
source:
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "'Friction Discussion', p9 — 5-step field measurement procedure + formula; cross-references Table 1 for effective diaphragm area"
delivery: procedure text / formula — no figure required, or a small worked-example callout
used-by: []
notes: >
  NOT its own component in Component Index — 1400 ch3.md. ch3-m3 keyConcept 4
  ("on-valve travel re-check; friction shifts full travel", pages [102,104])
  covers the same underlying fact narratively and cites ch3-cmp-bench-set-graph,
  but the ch3 index has no record for this specific 5-step measurement
  procedure with its formula. Second thing the cold build surfaced that the
  deck-driven build folded into a different component instead of indexing on
  its own — see comparison section.
```

```yaml
id: bs657-cmp-deadband-graph
teaches: >
  Figure 5 plots diaphragm pressure vs. valve travel for direct- and
  reverse-acting valves: the bench-set line, the opening and closing curves
  either side of it, and the "range of deadband" bracket. Deadband is caused
  by friction. Same figure serves both the friction-free bench-set concept
  (bench-set line alone) and the full deadband concept (both curves + the
  bracket).
concept-tags: [deadband, bench set plus deadband, opening curve, closing curve, direct acting, reverse acting, friction cause]
status: current
source:
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "Figure 5 'Typical Valve Response to Deadband' (drawing A6763-2), p10 — both DIRECT ACTING and REVERSE ACTING panels; 'Deadband is caused by friction' note"
delivery: house-style hand-authored SVG redraw (low-res scan in source); can be
  delivered reduced (bench-set line only) or full (both curves + bracket)
  depending on which concept level is being taught
used-by: []
notes: >
  Same figure as ch3-cmp-bench-set-graph (reduced) and ch3-cmp-deadband-graph
  (full) — this cold build treats it as ONE component with two delivery
  variants rather than two separate ch3-cmp-* ids for the same drawing. Flagged
  as boundary-adjacent to "bench-setting a 657" per the scope note above:
  included because it is the same figure the bench-set procedure's own
  friction discussion points to, not because deadband measurement itself is
  part of bench-setting.
```

### Boundary — sequenced around bench set in the 657 IM, not core to it

```yaml
id: bs657-cmp-mounting-preconditions
teaches: >
  Before bench-setting during mounting: push the valve stem down (into the
  body, away from the actuator) so it cannot interfere with mounting or bend;
  hoist the actuator onto the bonnet; run the yoke locknut down. Do not
  connect the actuator and valve stems yet — bench set is verified first.
concept-tags: [mounting, yoke locknut, valve stem position, hoist, do not connect stems yet]
status: current
source:
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "'Mounting the Actuator on the Valve', pp3–4, and Figure 3 'Actuator Mounting Components', p4"
delivery: existing figure (crop) — Figure 3
used-by: []
notes: >
  Corresponds to ch3-cmp-mounting-components. Boundary item, not core: this is
  "mounting," a distinct procedure ch3 assigns to a different module (ch3-m3)
  from bench-set (ch3-m2) — included here only because the 657 IM's own
  bench-set procedure explicitly happens between these mounting steps and the
  stem-connector step, i.e. bench set is verified WHILE the actuator sits
  mounted-but-unconnected.
```

```yaml
id: bs657-cmp-stem-connector
teaches: >
  After bench set is confirmed, install the two-piece stem connector: raise
  to the upper bench-set pressure, position the connector halves, tighten.
  Each stem (actuator and valve) must engage the connector by at least one
  stem diameter of thread, or threads strip or travel is set wrong. Then
  stroke fully and verify rated travel against the nameplate.
concept-tags: [stem connector, thread engagement, one stem diameter, verify rated travel, upper bench set pressure]
status: current
source:
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "'Installing the Stem Connector Assembly', pp7–8, steps 1–6"
delivery: existing figure (crop) — Figure 3 already shows the stem connector; procedure is text
used-by: []
notes: >
  Corresponds to ch3-cmp-stem-connector, but with a real discrepancy:
  ch3-cmp-stem-connector is tagged status:legacy with the note "current slides
  use deck photos; Fisher IM Fig 3 covers it," as if the IM's contribution
  were only the figure. This cold read found a full, detailed CURRENT
  procedure in the IM's prose (the specific torque-adjacent caution about
  incomplete engagement, the sequencing against bench-set pressure) that the
  ch3 record's "legacy" status doesn't reflect. Worth a look: this component
  may be under-graded in the ch3 index.
```

---

## Comparison against the ch3 index

Built cold as instructed — the source reading and component extraction above
were done without opening `Component Index — 1400 ch3.md`. This section is
the after-the-fact comparison.

**Converges cleanly on:**
- `bs657-cmp-bench-set-adjustment` ↔ `ch3-cmp-benchset-adjustment-setup` —
  same source (Figure 4), same procedure. The cold build recovered more of
  the underlying 8-step text than the ch3 record cites, but no factual
  disagreement.
- `bs657-cmp-mounting-preconditions` ↔ `ch3-cmp-mounting-components` — same
  source (Figure 3), same content.
- `bs657-cmp-deadband-graph` ↔ `ch3-cmp-bench-set-graph` / `ch3-cmp-deadband-graph`
  — same figure (A6763-2 / Figure 5), correctly identified independently.

**Diverges — cold build found something the ch3 index didn't index as its
own component:**
- **`bs657-cmp-definition`** — no equivalent in ch3's index at all. ch3 goes
  straight from "no component" to the bench-set graph; nobody indexed the
  formal glossary definition on CVH p25. Minor in isolation, but it's exactly
  the kind of grounding a module's opening `prime`/`nomenclature` concept
  would want, and a deck-driven build starting from existing slides has no
  reason to go looking for a glossary page nothing on those slides pointed
  to. Topic-driven reading a whole relevant CVH section, rather than jumping
  straight to a cited figure, is what surfaced it.
- **`bs657-cmp-friction-discussion`** — the 657 IM's 5-step friction
  measurement procedure and formula have no dedicated `ch3-cmp-*` record;
  the fact is present in ch3-m3's key concept text but not indexed as a
  reusable component with its own source locator. Same cause: the deck-driven
  build indexes what an *existing slide* needs, and no ch3 slide currently
  presents the friction-measurement procedure as its own step-by-step — so it
  was never pulled out as a standalone, reusable component, even though the
  source material clearly supports one.

**Diverges — ch3 index made a call this cold build would push back on:**
- **`ch3-cmp-stem-connector`**'s `status: legacy` undersells what the 657 IM
  actually offers here (see that component's notes above) — flagged, not
  changed (this file doesn't touch the ch3 index).

**Scope divergence (expected, and the main methodological finding):**
Casing-bolt torque (`ch3-cmp-casing-torque-pattern`) and the diaphragm-casing
spring-relief warning that feeds `ch3-cmp-657-assembly`'s caution-card use
both sit in the 657 IM's *Maintenance/disassembly* section, not its
bench-set procedure. ch3-m2/m3 legitimately bundle "identify, bench-set,
mount, and service a 657" as one teaching arc across two modules; a topic
scoped tightly to "bench-setting a 657" does not naturally reach that content
at all. **This is the real signal from the trial**, more than any individual
component match: a topic-driven scope is finer-grained than a chapter/module
scope built by cutting an existing deck. Origination from a named topic will
tend to produce a narrower, more precisely-bounded module than a deck-cut
module covering the same general subject area — which argues for scoping
origination requests at roughly single-concern granularity ("bench-setting a
657," not "657 identify, bench-set, mount, and service") rather than trying
to match an existing module's breadth exactly.

---

## Assessment: how the topic-driven method held up

**Reading cold from a named topic vs. against an existing chapter's slides —
meaningfully different, not just cosmetically:**
- Deck-driven reading (ch3's method) starts with an anchor: a slide already
  shows *something*, and the task is verifying/sourcing what's already
  chosen. The search has a target.
- Topic-driven reading has no anchor. The first real task was deciding
  *where in the source the topic even starts* — is the glossary in scope? Is
  deadband? Is mounting? Every one of those was a judgment call this session
  had to make explicitly (see the Scope Note), where a deck-driven build gets
  the boundary handed to it implicitly by which pages the existing module
  already claims.
- Concretely, this pushed the reading *wider* before it got narrower — full
  read of CVH's glossary section and full read of the entire 657 IM (32
  pages, all of it, not just the bench-set-labelled subsections) was
  necessary specifically because nothing pre-selected which subsections
  mattered. That's exactly why it surfaced two components (the glossary
  definition, the friction-measurement procedure) a deck-driven build had no
  reason to look for.

**Precedence-bucket judgment calls:** came out the same as ch3's, where they
overlapped — both primary sources are `current` without qualification, both
archives are `archive-corroborated`. No new precedence question arose because
this topic doesn't touch new archive ground beyond what ch3 already
reviewed in full.

**Did the cold build match, exceed, or fall short of ch3's existing
coverage for the same ground?** Exceeded it on two specific components
(the definition, the friction procedure) and matched it on the three that
overlap directly; fell short of it on nothing checked. It did NOT reach
ch3-m3's mounting/service breadth, which is the expected, correct result of
a narrower topic scope, not a gap.

**Time/effort:** this took a full read of two documents (CVH's relevant
sections + all 32 pages of the 657 IM) plus the scope-boundary judgment
calls — the same order of work as a real Stage-2-adjacent authoring pass,
not a quick lookup. Consistent with what was already logged in
`Course Porting Pipeline.md`: building a topic index is real editorial work,
not a bounded code change.

## Open items

- **Not yet applied anywhere** — this is a standalone trial file, not wired
  into any course.json, module, or Stage 2 tagging pass.
- **`ch3-cmp-stem-connector`'s `legacy` status** is worth Franz's second look
  against this file's finding (above) — separate from this trial, a call for
  whoever next touches that component in the ch3 index.
- **No archive re-read performed** for D750004/D750066 in this trial;
  precedence carried over from the prior full review rather than re-verified
  independently. If a future topic index touches archive ground ch3 has NOT
  already reviewed in full, that full read still needs to happen — this
  trial did not have to do it, it borrowed a decision already made.
