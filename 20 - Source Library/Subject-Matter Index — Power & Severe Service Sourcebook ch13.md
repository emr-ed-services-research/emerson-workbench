---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch13
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch13 — Piping and Installation Guidelines
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 13

**Chapter 13 — "Piping and Installation Guidelines."** Standing library-
cataloging pass, part of the whole-document Power & Severe Service
Sourcebook index — built ahead of any course actually needing these
figures, per `Source Library.md`'s "three ways a subject-matter index gets
triggered" (standing full-chapter). Matches the rigor of `Subject-Matter Index —
Oil & Gas Sourcebook ch1.md` and the Control Valve Handbook chapter files:
every real page in the chapter's confirmed range was rendered at 150dpi and
read directly.

Chapter boundaries were verified directly against the PDF, not assumed from
the table of contents: PDF page 201 is the "Chapter 13 / Piping and
Installation Guidelines" divider page, and PDF page 205 is the "Chapter 14
/ Control Valve Performance & Diagnostics" divider. Chapter 13 = PDF/printed
pp. 201–204 (printed 13-1 through 13-4), a 4-page chapter with zero page
offset against its own printed numbering.

This chapter was given a specifically careful read (not a quick dismissal)
precisely because its subject matter — piping arrangement, valve
orientation, block-and-bypass layout — is exactly the kind of content that
could plausibly carry an unnumbered installation-arrangement sketch (the
same "unnumbered-but-real diagram" edge case documented elsewhere in this
book's own Chapter 8 kettle/turbine sketch, and the Control Valve
Handbook's ch5 p.100 flowchart). None was found; see Open Items.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth
Edition (D101449X012), is itself a **current** first-party Fisher/Emerson
document (held in the Source Library's Industry Handbooks holdings — same
series as the already-indexed Oil & Gas Sourcebook), so any record in this
file would be `status: current`. No archive or legacy material was
consulted.

## Components

**Zero figures/tables — confirmed, unchanged by this pass.** All four
pages of Chapter 13 (pp. 201–204) were rendered at 150dpi and read
directly, page by page. No numbered figure, no numbered table, and no
unnumbered-but-real diagram (no piping-arrangement sketch, no valve-
orientation illustration) appears anywhere in the chapter, despite the
subject matter being a plausible candidate for exactly that kind of
content. This is a genuine, checked-not-assumed zero-figure finding — the
same standard the Control Valve Handbook's confirmed zero-figure chapters
(ch13–15) were held to.

**Six `kind: topic` entries added 2026-09-17**, part of the vault-wide
conceptual-indexing pass (see `Source Library.md`) — this chapter's real
narrative prose and bulleted recommendation lists carry genuine,
transferable installation-engineering concepts even with zero figures to
anchor them. Read directly from the real PDF text (`pdftotext -layout`,
pp. 201–204), not inferred from headings.

```yaml
id: pss-topic-control-valve-piping-arrangement
kind: topic
concept-tags: [piping arrangement, nozzle effect, block and bypass, straight-run requirement, capacity reduction]
status: current
teaches: >
  Adjacent piping arrangement measurably affects a control valve's real
  capacity, not just its nameplate rating. A close-coupled reducer sized
  down to the valve (2:1 line-to-valve ratio, block valves matched to
  valve size) reduces the capacity of a typical 2-inch valve by roughly
  5%; as valve size increases at the same 2:1 ratio, the reduction
  approaches 10%; adding elbows between the reducers and the valve can
  push the loss to 15%. Moving the block valves out to line size, outside
  the reducers, reduces this effect. Avoid arrangements that create a
  nozzle effect at the valve inlet (it alters the flow characteristic),
  avoid close-coupled inlet block valves reduced from line size, and
  avoid sharp turns close to the valve inlet — straight-line sections
  into and out of the valve should reproduce the piping used to establish
  the valve's own flow-capacity/characteristic test data, generally 10-20
  pipe diameters straight upstream and 5-10 diameters downstream. A block-
  and-bypass arrangement, if required, is best placed with the control
  valve in a straight-through run rather than a tortuous manifold built
  only for accessibility.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 13, \"Control Valve Piping,\" pp. 13-1–13-2 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-line-size-vs-valve-size]
used-by: []
notes: >
  Real percentage figures (5%/10%/15%) transcribed exactly from the
  source's own described test data, not estimated. No figure/diagram
  illustrates this arrangement anywhere in the chapter — confirmed by the
  same page-by-page read that produced the chapter's zero-figure finding.
```

```yaml
id: pss-topic-line-size-vs-valve-size
kind: topic
concept-tags: [valve sizing, pipe strength, rule of thumb, sizing rules conflict]
status: current
teaches: >
  Line size versus valve size is fundamentally a question of valve
  strength relative to adjacent piping strength, not a flow-capacity
  question. Two common rules of thumb apply — (1) valve size not less
  than half the pipe size, or (2) valve size not less than two nominal
  sizes below the line size — and the source explicitly demonstrates they
  do NOT yield the same result: for a 20-inch line, Rule 1 allows a
  10-inch valve while Rule 2 allows a 16-inch valve. Either rule gives
  adequate safety assurance on its own, but they are not interchangeable
  and must not be assumed equivalent.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 13, \"Line Size Versus Valve Size,\" p. 13-2 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-control-valve-piping-arrangement]
used-by: []
notes: >
  The 20-inch/10-inch/16-inch worked comparison is the source's own
  example, transcribed exactly to demonstrate the two rules genuinely
  conflict, not merely differ in derivation.
```

```yaml
id: pss-topic-velocity-limitations
kind: topic
concept-tags: [velocity limits, Mach number, noise, cage-guided valve, body erosion, cavitation, flashing]
status: current
teaches: >
  Velocity limitations differ fundamentally between gases and liquids
  because the limiting physical phenomena differ. For vapors and gases,
  there is no velocity limitation at all except when noise is a concern —
  Fisher's own published limits are 0.3 Mach for Whisper Trim III and 0.5
  Mach for Whisper Trim I. For liquids, historical velocity guidelines
  were developed for top-and-bottom-guided valves to prevent guide wear,
  vertical instability ("buffeting"), body erosion, and noise; cage-style
  valves largely eliminate these concerns because the cage shields the
  plug from direct fluid impingement and provides massive guiding exactly
  where pressure drop occurs, allowing operation at full rated pressure
  drop with no premature guide-failure risk, and single-seated balanced
  trims minimize both static and dynamic forces that caused buffeting.
  Counter-intuitive point stated directly by the source: in clean fluid,
  there is NO correlation between velocity and body erosion — virtually
  every reported case of body erosion traces to a known trouble source
  (cavitation, flashing, wet steam erosion, abrasive fines), not velocity
  itself, so clean-fluid velocity need not be limited purely to prevent
  body erosion. In general, control valves should be sized strictly on
  capacity requirements; velocity-driven sizing is the exception, not the
  rule, particularly for cage-style valves.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 13, \"Velocity Limitations in Control Valves,\" pp. 13-2–13-3 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-control-valve-piping-arrangement, cvh-topic-noise-generation-and-prediction, cvh-topic-cavitation, cvh-topic-flashing]
used-by: []
notes: >
  Cross-references CVH's `cvh-topic-noise-generation-and-prediction` (Mach-
  driven noise limits) and `cvh-topic-cavitation`/`cvh-topic-flashing`
  (named here as the real trouble sources behind body erosion, not
  velocity) — both ids verified real in `Subject-Matter Index — Control Valve
  Handbook ch5.md` before citing. The 0.3/0.5 Mach figures and the
  "no correlation in clean fluid" claim are transcribed exactly from the
  source, not paraphrased loosely.
```

```yaml
id: pss-topic-actuator-body-orientation
kind: topic
concept-tags: [actuator orientation, vertical mounting, trim wear, packing reliability, ENVIRO-SEAL, gravity effects]
status: current
teaches: >
  The primary considerations of actuator/body orientation are trim wear,
  packing reliability, and maintenance access; the ideal orientation is
  actuator vertical and on top. Fisher sliding-stem assemblies are not
  strictly position-sensitive, but a non-vertical/non-top orientation lets
  gravity act asymmetrically on internal parts (plug, actuator diaphragm
  head), producing localized increased wear proportional to assembly
  weight — bracing the actuator supports the extended structure but does
  NOT counteract gravity's effect on internal parts. Mounting with the
  actuator underneath additionally lets rust/weld slag/corrosion fall into
  the packing box area, shortening packing and stem life, and makes
  disassembly/reassembly difficult. Increased wear concentrates at
  specific interfaces: plug/cage (cage-guided valves), post/bushing (post-
  guided valves), plug seat/seat ring (all globe valves), and stem
  packing — eventually deforming trim and increasing seat leakage,
  especially in high-pressure-drop water/steam service. For any sliding-
  stem valve installed other than vertical/actuator-on-top, ENVIRO-SEAL
  packing is specifically recommended because its bushing materials
  support side load directly, rather than requiring the packing's own
  soft sealing elements to bear it; if the actuator must be horizontal,
  hardened guides and seats are recommended in the trim.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 13, \"Actuator and Body Orientation,\" p. 13-3 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-system-flushing-and-sacrificial-trim, cvh-topic-packing-selection-criteria]
used-by: []
notes: >
  Cross-references CVH's `cvh-topic-packing-selection-criteria` (verified
  real in `Subject-Matter Index — Control Valve Handbook ch5.md`) for the
  general packing-selection framework this ENVIRO-SEAL recommendation is a
  specific instance of.
```

```yaml
id: pss-topic-welding-procedure-stages
kind: topic
concept-tags: [welding, preheat, interpass temperature, post-weld heat treat, trim removal, elastomeric parts]
status: current
teaches: >
  Welding procedures for buttweld/socket-weld valve ends divide into three
  stages — preheating, welding, post-weld heat treating (PWHT) — each
  posing a distinct risk to trim parts. Preheat (per piping code) ranges
  roughly 300-500°F depending on material/joint thickness; this is not
  damaging to most metal parts but can damage elastomeric/plastic parts
  (O-rings, seal rings, backup rings, packing rings, gaskets). During
  welding, the "interpass temperature" (the temperature of the prior weld
  puddle as the welder returns to the starting point) must stay below a
  material-dependent maximum, typically the same 300-500°F range for
  chrome-moly/stainless steels. PWHT is the most severe stage: chrome-moly
  steel welding creates residual stresses that can crack the welded area
  unless relieved by heating to as high as ~1400°F and holding for several
  hours; although heat is applied locally, it conducts back into the
  valve body and can damage elastomeric/plastic parts, warp metal parts,
  and loosen shrunk-fit or threaded connections. General rule: if PWHT
  will be performed, remove all trim parts first, and when preheat is
  close to or above a part's temperature limit, remove that part rather
  than risk it.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 13, \"Installation — Welding Procedures,\" pp. 13-3–13-4 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-system-flushing-and-sacrificial-trim]
used-by: []
notes: >
  Real temperature ranges (300-500°F preheat/interpass, up to ~1400°F
  PWHT) transcribed exactly from the source, not estimated or rounded
  further than the source's own stated ranges.
```

```yaml
id: pss-topic-system-flushing-and-sacrificial-trim
kind: topic
concept-tags: [system flushing, sacrificial trim, chemical cleaning, packing replacement, weld slag]
status: current
teaches: >
  System flushing (flowing water or steam through the system to remove
  solid particles such as weld slag before operation) and chemical
  cleaning both risk damaging real valve trim — solid particles can lodge
  in drilled-hole/small-orifice trim (Whisper Trim, Cavitrol Trim, Micro-
  Flat) causing plugging, scoring between plug and cage, or nicked seating
  surfaces; chemical cleaning solutions can etch seating/gasket surfaces,
  especially if not neutralized or left standing in the body. Fisher's
  recommended mitigation is a dedicated set of sacrificial "flushing
  trim" — typically the cage or cage flange, seat ring, a double-nutted
  stem sealing the bonnet stem hole, and gaskets — installed in place of
  the real trim so the flushing fluid and any particles pass freely
  through the body without damaging the actual seating/gasket surfaces.
  Because installing flushing trim (or welding/PWHT requiring trim
  removal, see the welding topic) means disassembling the valve, Fisher
  recommends always replacing gaskets and packing at reassembly rather
  than reusing them — reused packing risks damage from stem removal that
  can later cause leaks or erode the gasket surface, packing box bore, or
  stem itself.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 13, \"Installation — System Flushing,\" pp. 13-3–13-4 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-welding-procedure-stages, pss-topic-actuator-body-orientation]
used-by: []
notes: >
  The specific sacrificial-parts list (cage/cage flange, seat ring,
  double-nutted stem, gaskets) is transcribed exactly from the source, not
  a generalized paraphrase.
```

## Open Items

- **Chapter boundary** — confirmed directly by rendering and reading both
  the p.201 "Chapter 13" divider and the p.205 "Chapter 14" divider.
  Chapter 13 = PDF pp. 201–204 exactly, zero offset from its own printed
  page numbers (13-1 through 13-4).
- **Full coverage accounting** — all 4 pages in range were rendered at
  150dpi and read directly. Zero numbered figures, zero numbered tables,
  zero unnumbered-but-real diagrams found — specifically checked for the
  latter given the subject matter, not just swept for the literal word
  "Figure."
- **Low-confidence flags** — none. Every page was read in full.
- **Duplicate-figure/citation-error findings** — none (no figures exist to
  collide or mis-cite).
- **Table-exclusion confirmation** — not applicable; no tables (numbered or
  otherwise) appear in this chapter at all.
- **Cross-reference findings (topic pass, 2026-09-17)** — six real
  cross-references verified: three internal (piping↔sizing-rules,
  welding↔flushing, orientation↔flushing) and four cross-book into the
  Control Valve Handbook's own topic index (`cvh-topic-noise-generation-
  and-prediction`, `cvh-topic-cavitation`, `cvh-topic-flashing`,
  `cvh-topic-packing-selection-criteria`), all confirmed to exist in
  `Subject-Matter Index — Control Valve Handbook ch5.md` before citing.
- **Archive/legacy material** — none consulted, none needed.
- **Topic-indexing pass (2026-09-17)**: six `kind: topic` entries added
  (`pss-topic-control-valve-piping-arrangement`,
  `pss-topic-line-size-vs-valve-size`, `pss-topic-velocity-limitations`,
  `pss-topic-actuator-body-orientation`, `pss-topic-welding-procedure-
  stages`, `pss-topic-system-flushing-and-sacrificial-trim`) covering all
  five real sections of this chapter's narrative prose. No section left
  un-indexed — this chapter's entire real content is now either a
  confirmed zero-figure finding (unchanged) or a real topic entry.
  Chapter's real component count is therefore 6, not 0.
