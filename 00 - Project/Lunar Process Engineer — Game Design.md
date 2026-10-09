# Lunar Process Engineer — Game Design (DRAFT, opened 2026-10-05)

**Named in two steps, both by Franz.** It was "Control Valve Engineer" from
its opening until the moon-colony setting was confirmed; on **2026-10-06**
that became "Lunar Process Engineer"; on **2026-10-06**, in the level-design
handoff, it became **Lunar Process Engineer** — the working title now, and
the one to use everywhere. The last step is not cosmetic: the game teaches
**process engineering**, and control valves are one component inside that,
not the subject. A title built on "control valve" or on the base rather
than the discipline mis-sold what the player actually learns.

Three things deliberately did *not* change with any of it. The **Control
Valve Engineering** course sequence (CVE1 / CVE2 / CVE-Industry) is a
separate deliverable and keeps its name — no rename here ever touches it.
One direct quote of Franz's own original phrasing is preserved verbatim in
§6 ("best Control Valve Engineer out there"), because altering a quotation
to match a later decision would falsify the record; that phrase was itself
rejected later (§12 item 4). And the rename is done by hand, on the exact
string "Lunar Process Engineer", because a blind find-replace during the
earlier pass corrupted "Control Valve Engineering" into "Lunar Base
Engineering" and had to be undone.

**Terminology (locked in the 2026-10-06 handoff): a unit of play is a
LEVEL.** Not an exercise, not a chapter, not a module. Where this document
still says "chapter" or "exercise" it predates that decision and is
retained only as draft history — §7 and §9 are the two places it survives.

**Status: pure scoping draft.** Nothing here is built, and nothing here is
locked. This document exists to capture the vision Franz and Claude worked
out together on 2026-10-05, and to give that vision enough structure to
actually review, correct, and sequence into real work — the same way
`curriculum-development.md` and the 14101 Instructional Primitives Pathway
got scoped before anything was built. Treat every section below as a
proposal pending Franz's correction, not a spec.

## 1. The pitch

**Lunar Process Engineer** is a fully simulated engineering-practice game,
in the genre of Zachtronics titles (SpaceChem, Opus Magnum, TIS-100,
Infinifactory) and genre-adjacent construction/automation games Franz has
separately pointed to as excellent on their own terms (Dyson Sphere
Program): you are handed a real process-engineering problem under
real constraints, you build a solution, and the simulation *runs* what you
built and shows you — honestly, physically — whether it works. The
aspiration, in Franz's words, is a game that "makes me the best Control
Valve Engineer out there."

**North star (Franz, 2026-10-05):** "I really enjoyed Opus Magnum, just
felt the whole time that I wish it was actually about real things like
what we are trying to do." Every design pillar below is in service of that
one sentence — take the genre's real appeal (the construction mechanic,
the freedom, the framing, the music, the teaching) seriously enough that
it's worth playing on its own terms, and ground all of it in real control
valve engineering instead of fiction.

**Second guiding touchstone (Franz, 2026-10-05): "I know Kung-Fu"** — the
Matrix line, Neo's reaction the instant a skill gets uploaded straight into
him. That's the feeling each exercise should land with when a competency
actually clicks: not a slow grind, a jolt of "oh — I get it now." The
difference from the movie is the whole point: here it's genuinely earned
through real engineering content, not actually instant — but the FEELING
the just-in-time tutorial pillar (§3 pillar 6) and the "introduces" edges
in the competency ladder (§9) are chasing is exactly that one.

It is NOT a connection to real hardware. No HART modem, no ValveLink, no
AMS Trex — that whole thread of the conversation that led here was
explicitly superseded when Franz said "simulated flow lab." Everything the
player touches is simulated, the same way the Fisher 657 Working Model's
physics are simulated: computed from real engineering relationships (Cv
sizing equations, actuator thrust/spring-rate balance, process dynamics),
never scripted or faked.

## 2. The anatomy of a control loop (foundational context)

Franz asked directly, before any hardware catalog gets built: "what is the
purpose of any loop? Input/output?" This is the conceptual bedrock the
canvas mechanic (§3.1-2) and the hardware catalog's own constraint logic
(§7) both sit on top of, so it's established here first.

**Purpose:** a control loop exists to hold some real physical quantity you
care about — the process variable (PV): flow, level, pressure, temperature
— at a target value (the setpoint, SP), automatically, despite the process
trying to drift away from it.

**Every loop, however complex it eventually gets, has the same three-stage
input/output skeleton:**

1. **Sensor/transmitter — the loop's sensing input.** Measures the real
   physical quantity and converts it into a standardized signal (classically
   4-20mA, often HART-overlaid on that same current, increasingly digital).
   This signal flows *from the process toward the control system* — it's
   information, not action.
2. **Controller — input in, output out.** *Input* is the transmitter's
   signal; it compares that to the setpoint, computes the error, and its
   *output* is a new signal representing "how much correction to apply"
   (commonly PID logic).
3. **Final control element (valve + actuator + positioner) — the loop's
   output back onto the real world.** The positioner takes the
   controller's signal as *its* input and converts it into an actual
   physical valve position, which changes something real in the process.
   That change is what the transmitter measures again — which is what
   makes it a *closed* loop, not an open one.

**Concretely: input = the measured signal flowing from transmitter to
controller. Output = the corrective signal flowing from controller through
the positioner to the valve, acting back on the process.** This is exactly
what the player should be wiring by hand on the canvas — transmitter output
→ controller input, controller output → valve input — so the construction
mechanic *is* the concept, not decoration on top of it. It's also the
plain-language grounding every later mechanic (trim characteristics,
rangeability, diagnostics) gets explained against, rather than assuming
fluency with loop structure as a given.

## 3. Design pillars (the Zachtronics contract)

1. **The working area is a real construction canvas, not a form.** Franz's
   correction (2026-10-05): SpaceChem and Opus Magnum's actual appeal isn't
   "pick the right ingredients" from a menu, it's *building a working
   mechanism* on an open canvas. Lunar Process Engineer's canvas is a
   P&ID-style working area: place a transmitter, a controller, a valve +
   actuator + positioner along a process line, and wire the real signal
   paths between them (transmitter output to controller input, controller
   output to valve — see §2) by **drag-and-drop, direct manipulation** —
   not dropdowns, not a spec-sheet form.
2. **Freedom of design is its own mechanic.** Franz: "Freedom of design is
   an enjoyable mechanic of its own." This resolves the open spatial-
   freedom question from the earlier draft: the canvas should allow genuine
   layout freedom (where things go, how they're wired, what the design
   looks like) the way Opus Magnum's open grid does, not a constrained
   multiple-choice topology. More than one correct arrangement should be
   possible for the same problem.
3. **Build, then run, then watch.** The player assembles a solution and
   then *fires it* — the simulation executes the design against the real
   spec, animated, the same way the 657 model's choreography already runs
   on live physics, not a static report. (See pillar 8 for what this
   actually looks like — it's not the same visual register as the build
   canvas.)
4. **Pass/fail is physical, not a gate.** A wrong choice doesn't produce
   "incorrect, try again" — it produces a real, diagnosable misbehavior
   (insufficient rangeability, cavitation, actuator stall, hunting,
   saturation, a miswired signal path) that looks like what that mistake
   actually does in the field. The failure IS the lesson.
5. **Optimization is optional and comes after correctness.** Once a design
   passes, a secondary scorecard (hardware cost, pressure-drop efficiency,
   rangeability margin — Lunar Process Engineer's answer to Opus Magnum's
   cost/cycles/area) invites going back and doing it better. It is never
   required to finish.
6. **Teach one new thing, right before you need it.** Franz specifically
   praised this about the genre: "the tutorial section... teaches you
   simply and quickly new things that you are about to use." Onboarding is
   compact, in-context, and arrives immediately before the mechanic it
   teaches gets used for real — never a big upfront dump. This is the same
   discipline as the competency-ladder sequencing in §9, applied to the UX
   of introducing each new tool/part/instrument as it's unlocked.
7. **No arcade mechanics.** Franz was explicit: no points, timers, lives,
   or leaderboards as the core loop. Those reward speed and competition;
   this is assessing engineering judgment. "Game" means structure and
   identity, not scorekeeping.
8. **Two visual registers, not one — resolved 2026-10-05.** Franz: "I
   really enjoy our cross section interactive 657 look and feel. I think
   real schematic symbol standards are actually a part of what needs to be
   learned, but having a cross section and seeing the internals in
   operation carries real understanding weight." This is NOT a vote for a
   purely abstract/symbolic look (the typical Zachtronics register) — it's
   two registers, each doing a different real job:
   - **The build canvas (pillar 1) uses real P&ID schematic symbols** —
     ISA-standard instrument/valve/line symbology. Reading and placing real
     schematic symbols correctly IS a genuine professional skill this game
     should teach, not something to skip past with cute icons.
   - **The run/watch payoff (pillar 3) uses cross-section, cutaway
     visualization of the actual hardware operating** — the same visual
     language and physics discipline already proven in the Fisher 657
     Working Model (real traced geometry, live computed motion, not
     scripted). This is where "seeing the internals in operation" delivers
     real understanding that a schematic symbol alone can't — you watch
     the actual valve plug travel, the actual spring compress, matching
     what you specified.

   The transition from one register to the other (abstract schematic you
   built → real cutaway hardware executing it) is itself a good candidate
   for the game's own signature "moment," the way watching a built reactor
   run is SpaceChem's or Opus Magnum's.

9. **What travels through the system, individualized and visible (Franz,
   2026-10-06).** Franz asked directly what Lunar Process Engineer's
   equivalent is of Opus Magnum's atoms-through-cycles or Dyson Sphere
   Program's items-on-belts — the discrete, watchable unit that makes a
   simulation feel mechanical rather than abstract. The real quantities in
   a control loop split into two kinds, and each needs a different visual
   treatment:
   - **The control signal is the thing that genuinely travels, cycle by
     cycle, and it's real, not invented** — a controller doesn't watch
     continuously, it runs a periodic scan: read the transmitter's signal →
     compare to setpoint → compute a new output → send it to the valve →
     the valve moves → the process responds → read again. This is the
     real industrial "scan cycle" concept, and it maps directly onto
     Opus Magnum's per-cycle atom movement or Dyson Sphere's per-tick belt
     advance: each loop cycle, a signal pulse is shown traveling along the
     wire from transmitter to controller, then controller to valve — the
     player watches the actual cause-and-effect chain their wiring
     produces, not an instant, invisible update.
   - **The process fluid is shown as discrete moving particles through the
     pipe**, speed standing in for real flow rate (GPM) — an honest
     stylization, not a claim that fluid really moves in countable chunks,
     the same compromise Dyson Sphere Program makes showing continuous
     production as discrete belt items.
   - **Specific gravity/density is encoded as a visible property of those
     particles** (weight/color), so a real sizing input the player has to
     reason about is something they can see, not just a number in a
     sizing panel.
   - **Pressure is shown continuously, not as a traveling unit** — gauges
     at key points (upstream/downstream of the valve) plus a color
     gradient along the pipe between them, so a pressure drop across the
     valve is something watched happening, not a subtraction done off
     to the side.
   - **Flashing and cavitation are real, visible phase-change events in
     the particle stream** — when fluid particles cross a point where
     local pressure has genuinely dropped below the fluid's vapor
     pressure (the real mechanism, CVH ch5 §5.14, already sourced in
     §7.1), they visibly change state (liquid particles becoming
     vapor/bubble particles) exactly there, rather than the failure being
     a message or a score penalty.

## 4. Narrative and world framing

Franz specifically called out Opus Magnum's framing device — you play an
alchemist working under a royal court, with client commissions and court
intrigue wrapped around the puzzles — as part of what made it fun, and
wants Lunar Process Engineer to have its own equivalent: a real world the
exercises live inside, not bare puzzles with no context.

**Confirmed direction (Franz, 2026-10-05): a career-and-clients world —
"a junior engineer building reputation."** The player starts as a junior
engineer and takes on jobs (commissions) for different plants/clients, each
job a real-feeling scenario with its own process conditions and
constraints. A reputation/career-progression thread ties jobs together:
harder, higher-stakes clients unlock as skill grows, mirroring the
competency ladder in §9.

**Texture, refined 2026-10-05:** Franz confirmed the texture "should build
a little competition at times, be interesting" — rival engineers/
contractors competing for the same clients or reputation is in, standing in
for Opus Magnum's court intrigue, as originally sketched. Still open: the
specific shape of that rivalry, a mentor/chief-engineer figure or not, and
what early/junior jobs feel like versus late/senior ones.

**The exotic-setting tension, raised and parked above, is now resolved the
opposite way (Franz, 2026-10-05/06): the setting IS a moonbase.** Working
through what the game's core mechanics should actually visualize (see new
pillar 9 below) led to a lunar sealed habitat on its own terms, not as a
decoration layered on top: a sealed habitat against near-vacuum makes
pressure and phase-change (flashing, cavitation) genuinely high-stakes
rather than a textbook footnote, which is the opposite of the tension
originally flagged — the setting now *motivates* real engineering content
instead of competing with it.

**Confirmed structure (Franz): start with the sealed habitat's own
subsystems, beginning in the greenhouse, and branch outward from there —
"dive into life support systems to nuclear reactors for a full moon
colony."** The greenhouse is the entry point (its irrigation/nutrient
water loop is Chapter 1's actual loop — see §7, unchanged in its real
hardware), not the whole scope. The colony itself is the long-run campaign
container: life-support subsystems first (irrigation, humidity,
temperature, atmosphere/gas composition, habitat pressure — see pillar 9),
widening over later chapters toward power generation, potentially including
reactor cooling/control systems, and other colony infrastructure. This
gives the "expansion roadmap" (§8) a narrative backbone it didn't have
before: each later chapter is a real colony subsystem, not an abstract
axis of valve types.

**Reconciled (2026-10-06, Franz and a separate Claude session, cross-checked
here against this document's own decisions): the career-and-clients framing
above is superseded, not nested inside the colony.** The player isn't
taking commissions from external clients or departments — they're crew on
the colony itself, and jobs arrive as in-world crew alerts ("get down to
the Garden, we've got a problem"), not client work orders. Competition/
rivalry as a texture goal isn't explicitly carried forward in this version;
if it returns, it would need to be re-derived against the survival-colony
framing (other crew, resource scarcity) rather than assumed to still fit
as originally sketched.

**The colony's scope is explicitly open-ended — a tech tree, not a fixed
chapter count.** Narrative scope scales with engineering scope: early
chapters are about keeping a small crew alive (water, basic irrigation,
life support); later chapters open into a full-fledged colony (pumps,
HVAC, power generation, eventually nuclear). The order roughly tracks what
a real settlement would actually need to build up, not a curriculum
sequence forced onto a story.

**Chapter 1's setting, specified precisely: the hydroponics system is
individually-sealed pods, not one open greenhouse room** — and this is a
real design choice, not just flavor: air and water are too precious to
risk on a single shared volume, different crops want different humidity/
CO2/temperature profiles, and isolating pods means one failure (a stuck
valve, a leak, a contamination event) doesn't threaten the whole food
supply at once — the same compartmentalization logic that drives real
spacecraft and submarine design. The crew's casual name for it is "the
Garden."

**The introduction rhythm this sets for every future setting, not just
this one:** casual crew nickname first (how it shows up in an alert) → a
beat of real sci-fi immersion/flavor text on arrival → then the precise
technical name (a bio-grow bay / pod array, for the Garden specifically) →
then the lesson begins. Layered, not simultaneous — the nickname earns the
immersion beat, the immersion beat earns the technical grounding.

**Systems inside the Garden** (the real system inventory the chapter's
teaching sequence and risk tiers, §7.2, get built against):
- Main irrigation supply line feeding individual pods
- Misting/humidification nozzle per pod (Chapter 1's actual payoff — §7.2)
- Nutrient-dosing injection into the water line
- Drainage/recovery system recycling runoff (water is too scarce to waste)
- Condensate capture, pulling humidity back out of pod air before it's lost
- Waste/compost processing, closing the loop on plant waste as a nutrient
  input — this is where the NIR nutrient-sensing idea (§7.2's banked-for-
  later list) actually lives systemically, not just as an isolated feature

**Chapter design method (general, applies to every future chapter, not
just the Garden):** build a chapter by crossing three independent lists
rather than designing narrative and curriculum at the same time — (1) the
real systems a given setting needs, (2) each system's risk/stakes tier
(catastrophic failure vs. a minor, low-stakes issue), (3) the fluid-
dynamics teaching sequence those systems can carry. Low-stakes scenarios
(a clogged nozzle) can introduce foundational concepts; high-stakes
scenarios (a manifold failure) are saved for once the player already has
the fundamentals to handle them. This also sets each chapter's narrative
urgency for free — a small "can you take a look sometime today" versus a
"get down there now" emergency falls directly out of which risk tier a
given lesson is attached to, not a separate authorial choice.

## 5. Audio direction

Franz: "the music has to be driving the work, like in all those games how
it does." Zachtronics soundtracks (Opus Magnum's especially) are a real,
deliberate production pillar in those games, not background filler — they
give the construction/puzzle-solving a propulsive, satisfying feel. Control
Valve Engineer should treat audio direction as its own genuine design
commitment from the start, not something bolted on after the mechanics are
built.

**Resolved, 2026-10-05: original composition, not licensed/curated
tracks** — "in the vein of Zachtronics" but with two more specific
reference points Franz named: **Dyson Sphere Program** ("not just the
music, the game is excellent" — itself a relevant genre-adjacent reference
for a construction/automation game, worth keeping in mind beyond audio)
and **Subnautica** ("had a similar driving music"). The through-line Franz
pointed at across all three: continuous, non-intrusive, ambient-leaning
but genuinely propulsive — music built to sustain long, focused building
sessions ("it never stops and gets to vibe a build"), not a looping jingle
or a track that demands attention. Not yet decided: who actually composes
it, or the production budget/timeline for original music relative to the
rest of the build.

## 6. Scope ambition vs. sequencing — answering "all instrumentation and mechanics"

Franz asked directly whether the game should include all instrumentation
and all valve/actuator mechanics. **Claude's honest answer: yes, as the
long-run target — that IS what "best Control Valve Engineer out there"
means — but not as a precondition for the first playable exercise.**

Every Zachtronics campaign is built the same way: a small core mechanic set
first, then each world/chapter unlocks new parts and new rules, one at a
time, through level design that makes the new tool the only viable
solution. Opus Magnum doesn't ship with every glyph type available in
level 1; SpaceChem doesn't hand you every reactor feature on day one. The
toolkit *expands across the campaign*. That's the model here: build the
full breadth over time, chapter by chapter, never by blocking the first
level on building everything.

Concretely: **Chapter 1 builds one small, real, fully-working toolkit**
(see §7) and is playable and complete on its own terms. Later chapters
(see §8) are where "all instrumentation and mechanics" actually gets
delivered — as new unlocked content, not a prerequisite.

## 7. Chapter 1 toolkit (proposed starting scope)

Reuses the Fisher 657 Working Model's own proven physics discipline (real
computed values from real constants — Hooke's law, DIA_AREA, spring rate —
never invented numbers) as the simulation substrate.

- **Loop type:** a basic flow control loop (flow transmitter → controller
  → control valve on a line — see §2 for the input/output structure this
  follows). Chosen because flow has near-instant dynamics with no real lag
  or capacitance to model — the simplest loop in the process-control
  family, and the standard first example in the field itself.
- **The problem the player is given:** process conditions (flow rate,
  pressure drop across the valve, fluid properties, required rangeability,
  shutoff requirement).
- **The player's job:**
  1. **Size** — compute the required Cv from the given conditions.
  2. **Select** — choose a valve body, trim characteristic (linear vs.
     equal-percentage), and actuator from a constrained catalog where more
     than one option *looks* plausible but only some actually satisfy the
     real constraints (rangeability across the operating envelope, thrust
     margin including shutoff force, cavitation/flashing margin).
  3. **Build** — place the chosen hardware and instrumentation on the
     working-area canvas and wire the signal paths between them (§3.1-2).
  4. **Test** — run it. Does it hold the operating range cleanly, or does
     it misbehave in a diagnosable way?
- **Diagnostics layer (reused from the earlier "simulated flow lab" idea):**
  once a design is running, the same standard DVC diagnostic routines
  (travel/zero-span calibration, step-response test, valve-signature/
  friction test) are available as tools the player runs to understand
  *why* a design is misbehaving, not just that it is.

### 7.1 Real hardware trio (researched 2026-10-05; valve body corrected same day)

Research into the Source Library (and, once the vault's own indexes ran dry
on hard numbers, Emerson's own published literature online) found a valve
body, actuator, and positioner that are **officially documented as
compatible with each other in their own manuals** — the same standard of
"real, not invented" this project already holds itself to.

**Valve body correction (2026-10-05): Fisher ED (globe) / EAD (angle) /
EDR, not ES.** The first pass landed on ES mostly by accident — it was the
one easy-e valve body PDF that happened to already be sitting in the
vault's Equipment Manuals folder, not a deliberate comparison. Franz asked
directly why ES specifically, which was the right challenge: checked
against ED, the two are close siblings in the same easy-e platform with
nearly identical specs at the sizes that matter here (Cv and travel both
within a few percent), and neither bulletin's "general application"
language actually distinguishes them the way the first pass implied. The
one real, non-arbitrary signal: Fisher's own internal training material
(the worked example below) defaults to **Type ED** as its teaching
example — a reasonable basis for an educational product to follow. Franz
confirmed the switch.

- **Valve body: Fisher ED (globe) / EAD (angle) / EDR**, Product Bulletin
  D100017X012 (January 2025). Balanced valve plug construction (explicitly
  called out in its own bulletin as permitting "smaller, lower-cost Fisher
  actuators"); **supports all three trim characteristics as interchangeable
  cages** (standard cage: quick-opening, linear, or equal-percentage) —
  same "choose the right trim for the job" mechanic as before, now on the
  actual Chapter-1 body. Real Cv-vs-size data, Table 10 of that bulletin
  ("Maximum Flow Coefficients for Full-Sized Trim with Equal Percentage
  Cage and Normal Flow Direction"):

  | Valve | Size, NPS | Cv at max travel |
  |---|---|---|
  | ED | 1 | 17.2 |
  | ED | 1-1/2 | 35.8 |
  | ED | 2 | 59.7 |
  | ED | 2-1/2 | 99.4 |
  | ED | 3 | 136 |
  | ED | 4 | 224 |
  | ED | 6 | 394 |
  | ED | 8 | 567 (2in travel) / 819 (3in travel) |

  **Real travel-compatibility constraint (Table 12 of the same bulletin):
  ED NPS 1 and 1-1/2 (full-sized trim) have a max valve plug travel of
  19mm = exactly 0.75in — the 657's own rated travel.** Larger ED sizes
  need more travel than a 657 can provide (NPS 2 needs 1.125in, and climbs
  from there) — a real, diagnosable "insufficient actuator travel" wrong
  choice, not an invented one: **Chapter 1's catalog should be scoped to ED
  sizes NPS 1 or 1-1/2 specifically.**

  **Full real percent-of-travel Cv curves, found 2026-10-05 via Emerson's
  internal eDocs/FishWeb system and now saved to the vault** (`20 - Source
  Library/Equipment Manuals/Valve Bodies/
  fisher-ed-ead-edr-catalog-12-flow-coefficients-dec2023.pdf` — the actual
  Fisher Catalog 12 Section 1 ED pages, December 2023 edition, pages ED-1
  through ED-16). This is dramatically richer than the single Product
  Bulletin value above: Cv, Kv, xT, and FL at every 10% of travel from 10%
  to 100%, separately for the Linear cage (page ED-3) and the Equal
  Percentage cage (page ED-5), both explicitly also valid for Fisher EDR,
  ET, and ETR per the catalog's own note. At the Chapter 1 sizes:

  | Cage | Size, NPS | Port | Cv at 10/20/.../100% travel | FL at 100% |
  |---|---|---|---|---|
  | Linear | 1, 1-1/4 | 33.3mm | 3.21, 5.50, 8.18, 10.9, 13.2, 15.0, 16.9, 18.6, 19.9, 20.6 | 0.84 |
  | Linear | 1-1/2 (full-size) | 47.6mm | 4.23, 7.84, 11.8, 15.8, 20.4, 25.3, 30.3, 34.7, 37.2, 39.2 | 0.82 |
  | Linear | 1-1/2 (restricted) | 33.3mm | 2.92, 5.70, 9.05, 12.5, 15.6, 18.5, 21.1, 23.9, 26.8, 29.2 | 0.91 |
  | Equal % | 1, 1-1/4 | 33.3mm | 0.783, 1.54, 2.20, 2.89, 4.21, 5.76, 7.83, 10.9, 14.1, 17.2 | 0.88 |
  | Equal % | 1-1/2 (full-size) | 47.6mm | 1.52, 2.63, 3.87, 5.41, 7.45, 11.2, 17.4, 24.5, 30.8, 35.8 | 0.84 |
  | Equal % | 1-1/2 (restricted) | 33.3mm | 1.12, 1.56, 2.22, 3.10, 4.27, 6.17, 9.01, 13.1, 18.2, 23.1 | 0.91 |

  This gives the game real data to actually DRAW the inherent-characteristic
  curve shape live (the whole point of §6's "equal-percentage vs. linear"
  mechanic is that the shapes genuinely differ, not just the endpoint
  value) — equal-percentage's curve visibly stays flat early and rises
  steeply late, exactly as the Handbook's own conceptual description says,
  now backed by real numbers at this exact hardware. It also surfaces a
  genuinely new real option: full-size vs. restricted-capacity trim at the
  SAME NPS 1-1/2 (different port diameter, different Cv range, different
  FL) — another real axis for the catalog's "more than one plausible
  choice" design (§3 pillar 2).

  **Minor honest discrepancy, noted rather than silently resolved:** this
  catalog page's values (e.g. 17.2 for NPS 1/1-1/4 equal-%, 35.8 for NPS
  1-1/2) are for **Flow Down**; the Product Bulletin's single-value table
  above (17.4 and 33.4 respectively) was for **Normal Flow Direction** —
  close but not identical, because flow direction genuinely changes a
  cage-guided valve's real capacity. This is itself a real, teachable fact
  (not a data error to paper over): installing a valve with the wrong flow
  direction is its own genuine field mistake, and could become its own
  catalog/installation constraint in a later chapter.

  **Honest gap, not carried over from the ES research uncritically:**
  ED's own shutoff-classification table (ANSI/FCI 70-2 / IEC 60534-4) is
  structured differently from ES's simple metal=IV/PTFE=VI split — ED's
  classes (II through V in what was checked) are tied to packing-ring
  configuration and port diameter, not a clean seating-material mapping.
  A real Class VI option may still exist for ED (not yet confirmed) — this
  needs a closer read before the "tight shutoff requires X" mechanic gets
  built on it, rather than assuming ES's exact mapping transfers over.
- **Actuator: Fisher 657** diaphragm actuator — already fully modeled with
  real physics in the Fisher 657 Working Model (bench set 3-11 psig, rated
  travel 0.75in, real Hooke's-law spring/diaphragm force balance). The ED
  bulletin's own Figure 2 ("SS-204 Valve with 657 Actuator") confirms this
  pairing directly, alongside a 667 pairing shown as its primary Figure 1 —
  both actuators are real options for this valve family, and 657 is the one
  already built.
- **Positioner: Fisher FIELDVUE DVC6200**, instruction manual D103605X012.
  Its own Table 2 specifications list **integral mounting to Fisher 657/667
  actuators** by name — confirming this trio, not assuming it. Real specs
  found: input signal 4-20mA DC analog (matches the loop input/output
  structure in §2 exactly) with HART 5/7 communication; supply pressure
  minimum 0.3 bar/5 psig above the actuator's own requirement, maximum 10.0
  bar/145 psig; pneumatic output span minimum 0.4 bar/6 psig, maximum 9.5
  bar/140 psig (the 657's own 3-15 psig operating range and 3-11 psig bench
  set both sit comfortably inside this).

Document identity note: the real Cv/travel data lives in Fisher's
**Product Bulletin** (D100017X012), a separate document from any
installation/maintenance **Instruction Manual** — Fisher genuinely splits
sizing/selection data from installation/maintenance content across
separately numbered documents. Worth acquiring the bulletin itself for the
vault's own Source Library, not just this research.

**Gap partially closed (2026-10-05):** Catalog 12's own ED section (pages
ED-1 through ED-16, December 2023 edition) was found on Emerson's internal
eDocs/FishWeb system and downloaded into the vault (see the full-curve
table above) — this covers everything Chapter 1 needs. The broader Catalog
10/12 (all other valve families) is confirmed to exist on that same
internal system but has NOT been pulled in beyond the ED section; worth
acquiring more of it if later chapters need sizing data for other valve
families (ball, butterfly, rotary plug — see §8).

**Real worked sizing example, independently found (Historic Educational
Services deck D750016, "Control Valve Sizing for Liquid Service," pp.24-25)
— directly usable as a Chapter 1 exercise template, and now using the SAME
valve family as the hardware trio above:** water, P1=375 psig, P2=100 psig,
T1=270°F, q=2200 gpm, specific gravity 0.93, vapor pressure 41.9 psia,
candidate valve a 3in Class 300 Fisher Type ED body with a linear cage
(Cv=133 at 80% travel). The worked procedure determines the flow is choked
(cavitating, since the choked-flow allowable ΔP of 248.4 psi is less than
the actual 275 psi ΔP, and P2 exceeds vapor pressure) and arrives at a
required Cv of ~134.7 (ANSI/ISA) or 134.6 (IEC) — close enough to the
candidate valve's 133 that reworking with the valve's own actual FL (0.82,
not the initially assumed 0.84) shows it lands at 85% travel instead of
80%. This whole worked example — including the "redo it with the real
valve's own FL" iteration step — is a strong real template for how a
Chapter 1 exercise's answer-checking logic should work.

**Independent cross-validation of the 657's own numbers:** the same
training archive's actuator-sizing deck (D750020, p.35) states a worked
example actuator with *"a loading pressure range of 3 to 15 psig and a
bench set of 3 to 11 psig"* — matching the Fisher 657 Working Model's
already-built physics exactly, from a wholly separate Fisher source. Also
contains real actuator-size-to-cylinder-area tables and real spring
rate/force tables (Size 60: spring rates 472-1870 lb/in depending on part
number) using the same actuator-size numbering convention (60, 76, 78, 80,
100, 130...) the 657 model already assumes.

**Sizing and trim-selection logic, from the Control Valve Handbook (6th
ed.) itself, to drive why a catalog choice is right or wrong:**
- Liquid sizing is a real 5-step iterative procedure (CVH ch5 §5.8): specify
  conditions → look up sizing constants → determine piping/recovery factors
  → take the sizing ΔP as the *lesser* of actual ΔP and the choked ΔP (using
  actual ΔP when the valve chokes overstates the required Cv) → calculate
  and iterate. Compressible-fluid sizing (§5.9) parallels this but chokes on
  a pressure *ratio* and adds an expansion factor Y.
- **Trim characteristic selection is the clearest "wrong answer" mechanic
  available**: the handbook (CVH ch5 §5.4) distinguishes a valve's *inherent*
  characteristic (flow vs. travel at constant ΔP) from its *installed*
  characteristic (what happens in real service, where ΔP varies with flow).
  Equal-percentage is correct when the valve itself takes only a small,
  variable share of the system's total pressure drop (long runs, other
  restrictions) — pick linear there instead and the installed gain swings
  wildly across the operating range even though linear "looks" like the
  simpler, more obvious choice. This is real, concrete, and exactly the
  kind of plausible-but-wrong option the Zachtronics-style catalog needs.
- **Rangeability**, CVH ch1 glossary (§1.4): ratio of largest to smallest Cv
  within which the characteristic holds. The handbook's own illustrative
  example — 100:1 — is a reasonable reference point for "good rangeability"
  in exercise design, but it's the source's example, not a spec for any
  specific valve; shouldn't be presented as an ED-specific number.
- **Cavitation vs. flashing** (CVH ch5 §5.14): both start the same way
  (vena-contracta pressure drops below vapor pressure); cavitation is when
  downstream pressure recovers above vapor pressure again (bubbles collapse
  near the valve — real damage, real noise) and CAN be engineered away
  (multi-stage trim, hardened surfaces, raising P2); flashing is when
  downstream pressure stays below vapor pressure (bubbles persist
  downstream) and the handbook states directly it *cannot* be prevented by
  valve design, only damage-minimized. Useful real distinction for a
  diagnostic/failure-mode mechanic later.

**Gas/steam sizing, found 2026-10-05 (Legacy & Archive deck D750018,
"Control Valve Sizing for Gas and Steam"), filling a gap the Handbook
research had explicitly flagged as excluded (the numeric sizing-constant
tables aren't in the vault's indexed Handbook content):**
- A **complete real N-constant table** (N1, N2, N4 through N10, exact values
  per unit system — e.g. N7=1360 for scfh/psia/°R) for the compressible-flow
  sizing equation, parallel in structure to the liquid procedure: compute Cv
  from the flow equation, check the pressure-drop ratio x against the
  choked-flow threshold (Fk·xT), apply the expansion factor Y (0.667 at full
  choke), solve, and iterate against the actual valve's own xT the same way
  the liquid example iterates against FL.
- A full real worked example exists (natural gas, P1=200psig, P2=50psig,
  q=7.0×10⁶ scfh, converging at Cv≈1324) but **it sizes a Fisher Design
  V25 — a rotary, V-notch ball-type valve — not an ED/EAD globe valve.**
  Flagging this clearly: it doesn't match the Chapter 1 catalog's globe-
  valve family, the way the liquid example happily did. It's a strong real
  template for whichever LATER chapter introduces rotary valve types
  (§8), not for Chapter 1 itself.
- The deck's own glossary definitions (cavitation, flashing, flow
  characteristic, flow coefficient, inherent vs. installed characteristic,
  vena contracta, critical flow) are in places clearer and more teaching-
  oriented than the Handbook's own phrasing already sourced above — worth
  drawing on both when writing the game's actual in-fiction tutorial text
  (§3 pillar 6).

### 7.2 Chapter 1 setting and teaching sequence: the hydroponics pod
(drafted 2026-10-06 by Franz and a separate Claude session, cross-checked
here against this document's own established decisions — see the
cross-check-other-session-handoffs memory for why that's the right way to
receive outside work rather than accepting it as-is.)

**Why this exists:** teaches fluid dynamics and process control the way a
molecule-level cutaway pipe can show it, not as equations handed down
first — for each concept, what does it actually look like inside a pipe,
and only then the formal name/equation. Grounded in the same real backbone
already cited in §7.1 (ISA/IEC valve sizing standards, the Fisher Control
Valve Handbook) — not new physics, the visualizable form of established
fundamentals.

**Chapter 1's real identity is the Garden** — the crew's name for the
hydroponics pod array, the concrete specific form of "the greenhouse"
already established as the sealed habitat's entry point. Its real system
inventory, the sealed-individual-pods architecture, and the general
casual-name → immersion → technical-name introduction rhythm this sets for
every future setting are specified in §4, not repeated here. The teaching
sequence below is a straight line from the hand-wheel moment to the
mist-nozzle payoff, each step visualizable at the molecule/cutaway level
before any equation attaches:

1. **Pressure with zero flow** — a closed, depressurized line: molecules
   packed and still, nothing moving. "Under pressure" and "moving" are two
   separate things.
2. **Pressure → flow as cause and effect** — turn a hand wheel, pressure
   builds, opening a downstream point releases it as flow. Pressure is
   potential; flow is that potential being spent.
3. **Pipe sizing vs. actual bore** — a nominal "1-inch" pipe isn't
   literally a 1-inch opening; wall thickness eats into it. Shown as the
   labeled pipe and its true inner bore side by side.
4. **Laminar vs. turbulent flow** — below Re&asymp;2,000&ndash;2,300, smooth
   orderly layers (parabolic velocity profile); above Re&asymp;4,000,
   chaotic mixed flow (flatter, more uniform profile). Genuinely new
   against what's already built: the reference rig (§7.1's calibration
   work) only ever modeled turbulent flow, deliberately, since real plant
   velocities don't run laminar — the pedagogical case for showing both
   anyway is that the *contrast itself* is the lesson.
5. **Velocity profile across the pipe** — already real and verified in the
   reference rig (the Prandtl 1/7-power-law turbulent profile): center
   molecules up to 2x the average speed, wall-adjacent molecules nearly
   stationary from wall friction. The detail that makes a cutaway view
   worth having at all.
6. **Pressure drop through a restriction** — already built and verified
   (the reference rig's reducer/throat/expander row): narrowing speeds
   flow and drops pressure at that point, the direct visual bridge to what
   a valve does on purpose.
7. **The manifold — one supply, many competing demands** — a single
   pressurized source branching to several destinations at once
   (irrigation, misting, a spigot, a tank feed). This is the real teaching
   payoff of the trunk-and-manifold habitat layout Franz sketched earlier
   in this same design process: pressure at each branch depends on what
   every other branch is drawing, not just its own pipe — "not enough
   juice to reach every line" made visible and felt, not just stated.
8. **PV flash at the nozzle** — the dramatic payoff: at the mist nozzle,
   pressure drops so sharply it crosses the liquid's vapor pressure right
   at that point, and the liquid flashes to vapor. Directly reuses the
   already-built and verified flashing mechanic (§7.1's reference rig, row
   6), now with a concrete narrative destination.

**What is actually built against this sequence (as of 2026-10-06).** The
sequence above is the plan; this is the ledger. Keeping them apart is the
whole lesson of the §9 drift — the previous level-two attempt was designed
without anyone checking which rungs were already spent.

| Step | State | Where |
| --- | --- | --- |
| 1. Pressure with zero flow | **built + taught** | trainer rung PRESSURE; level 0 (closed line); level 1 step 2 |
| 2. Pressure to flow | **built + taught** | trainer rung FLOW; level 0 — the hand wheel |
| 3. Pipe sizing vs. actual bore | **not built** | — the reducer in levels 1 and 2 is a bore change nobody has explained |
| 4. Laminar vs. turbulent | **bench built, no level** | trainer segment `reynolds` is complete and orphaned |
| 5. Velocity profile across the pipe | **built + taught** | trainer rung VELOCITY PROFILE, attached to level 0; level 0's closing points at it in a real line |
| 6. Pressure drop through a restriction | **built, never taught** | level 2 measures and removes the reducer with no bench segment behind it |
| 7. The manifold | **built, never taught** | level 1 is the whole of it, with no bench segment behind it |
| 8. Cavitation at the nozzle | **not built** | the payoff; needs 3, 4 and 6. Was "PV flash" — corrected 2026-10-07, see below |

**Step 8 corrected from flashing to cavitation (Franz, 2026-10-07).** The
original step said the mist nozzle drops below vapour pressure and the
liquid flashes. Checked before building: water needs a near-vacuum
downstream to flash, and at one atmosphere it would have to be at 100 °C
at the nozzle. What a mist nozzle actually does is **cavitate** — the
pressure dips below Pv at the vena contracta and recovers above it. A
different mechanic, different damage, and a different fix.

Run the game's own 60 psig header into the Garden pod against Fisher's
choked relation, ΔP ≥ F<sub>L</sub>²(P₁ − F<sub>F</sub>·P<sub>v</sub>):

| feed | ΔP | ΔP allowable | verdict |
| --- | --- | --- | --- |
| water 20 °C | 67.3 | 60.2 | choked, cavitating |
| water 40 °C | 67.3 | 59.7 | choked, cavitating |
| water 60 °C | 67.3 | 58.3 | choked, cavitating |

So a plain globe valve on the existing header cavitates in that pod at any
feed temperature — a fault the player can diagnose from symptom and fix
with staged trim. Flashing is not discarded; it moves to a service where
it is real (hot condensate let down to a flash drum). The check reruns
from `reference/applicability.js`.

**The Garden runs hypobaric, at 51 kPa (Franz, 2026-10-07).** A world fact,
so it binds every future Garden level. Hypobaric plant chambers are an
established CELSS line of research, with published work spanning roughly
10–98 kPa total pressure. The engineering driver is real and
uncontroversial: a smaller pressure gradient across the structure means
less mass, less leakage, and a cheaper pod to build.

Two findings are worth stating carefully, because they are reported
results rather than general laws. One chamber study reports that taking
pressure from ambient down to 51 kPa raised net photosynthesis about 25%
and lowered dark respiration about 40% — a single result, not a
guaranteed effect at every condition, and the game should not lean on the
numbers. The constraint that genuinely binds is **oxygen partial
pressure**: below roughly 7 kPa, germination and growth fail across the
board. So the pod is low-pressure, not low-oxygen, and 51 kPa total with
a maintained O₂ fraction is a defensible set point.

This is what makes step 8 bite — 60 psig into 51 kPa is a pressure ratio
no single-stage trim survives. Checked, not assumed:
`reference/crosscheck.js` recomputes it on every build.

**Rungs added below step 1 (2026-10-07).** The sequence above started at
pressure, which assumed the player already knew what a process was, what a
fluid was, and that temperature is a property of one. Three rungs now
precede it on the bench — PROCESS, FLUID, TEMPERATURE — and level 0 teaches
all six of its rungs before the player reaches the valve. A seventh bench
segment, `specific-gravity`, is complete and orphaned alongside `reynolds`.

**The gap this ledger now makes obvious:** levels 1 and 2 have no `teach`
list at all. They were built before the bench was a device, so the manifold
(step 7) and the restriction (step 6) are both taught by the level itself,
in passing, with no segment behind them — exactly the arrangement that was
removed from level 0.

**So level one spent step 7 ahead of steps 3, 4 and 5.** That is not a
mistake to undo — the manifold earns its place as the first real level
because competing demands are what make a rig feel alive.

**Sequencing is not a strict ladder (Franz, 2026-10-06): "We can introduce
and reinforce concepts as needed."** The table above is a record of what has
been spent, not a queue that must be drained in order. Level two re-balances
a bay the player already balanced in level one, and that is deliberate
reinforcement rather than repetition.

### Level two as built (2026-10-06) — Franz's design

Level two takes **step 6** properly: level one's reducer existed only as a
constraint to balance *around*; here it is the subject. The same rig, the
same bay, picking up level one's own closing line — *"the real argument for
pulling that reducer."* Maintenance never explains why it was fitted; it is
on no drawing, and the person who installed it is gone.

The teaching is not the reducer. It is **the order of operations**, and the
level opens by putting it to the player as a choice the coach reacts to:

- **Balance first, then pull it** — take a real baseline while the fault is
  still in the line, repair, measure again. The coach approves, and notes
  that there is time today to do it properly.
- **Pull it now, balance after** — faster, genuinely works, and the level
  completes. But nothing recorded what the reducer was costing, so the
  repair cannot be quantified. The coach rags the player for it.

Both routes finish; the shortcut is never blocked. The lesson lands as a
consequence rather than a lecture: *a repair you cannot measure is a repair
you cannot defend.*

The payoff is real physics, not staging. With the reducer in, balancing
means throttling the two healthy beds down to meet the crippled one —
**11.51 gpm a bed**. With three identical branches, the manifold splits
evenly on its own at full open — **15.61 gpm a bed, +36%, with no
throttling at all.** The reducer was never costing bed 3; it was costing
every adjustment made elsewhere to work around it. Level two's solver is
verified identical to level one's across all 81 valve states with the
reducer in place.

**Bore (step 3) is deliberately excluded.** It was proposed as level two and
rejected by Franz as too complicated a topic for this point, and the
proposal was wrong on its own terms besides: it framed a heavier-schedule
spool as a hidden second restriction, which only re-teaches level one's
lesson wearing a mystery — and the numbers do not support it either (a 2 ft
Sch 80 spool costs **0.087 psi** against Sch 40, where the reducer costs
bed 3 half its flow). Steps 3, 4 and 5 remain unspent.

**What's actually visualizable at the molecule level** (validates pillar 9
directly — several of these are already live and verified in the
reference rig, not just proposed):

| Concept | What the player sees |
| --- | --- |
| Static pressure | Molecules packed densely, jittering in place, not translating |
| Flow | Molecules translating down the pipe as a group, density roughly constant |
| Laminar flow | Smooth concentric layers; a dye streak stays a clean thin line |
| Turbulent flow | Chaotic lateral mixing; a dye streak smears and tangles almost immediately |
| Velocity profile | A parabola of speed across the pipe — fast center, near-stationary wall (already built) |
| Pressure drop at a restriction | Molecules visibly speed up and spread apart as the pipe narrows (already built) |
| Manifold starvation | Branches downstream of a busy branch visibly get a thinner, slower stream — same source, unequal outcomes |
| Cavitation | Vapor bubbles form at a narrow throat, then visibly collapse (implode) downstream as pressure recovers — render violent, since the implosions are what erode metal (already built) |
| Flashing | Vapor bubbles form at the throat and persist downstream as a visible two-phase mixture, since downstream pressure never climbs back above vapor pressure (already built) |
| Water hammer | A valve slams shut, flow stops almost instantly, a visible pressure shockwave travels back up the pipe — not yet built |

**The genuinely good "aha" moment this sequence is built around:**
cavitation and flashing look identical at the moment bubbles form — the
tell is only downstream (do the bubbles collapse, or persist). That's
worth a real puzzle built around it, since it can't be told apart from a
single freeze-frame — this is exactly the distinction the reference rig's
row 6 already demonstrates, articulated here with the actual pedagogical
reason it works.

**Banked for later chapters** (not needed for Chapter 1, real and
visualizable, worth holding for the pump/tank/HVAC/power chapters as the
colony scales up):
- **Elevation head** — once pipe runs go vertical (stacked pod levels,
  tank gravity feed), height itself adds/subtracts pressure.
- **Pump curves** — a pump delivers a tradeoff between flow and pressure,
  the inverse of a restriction's behavior.
- **Choked flow in gas/steam service** — past a certain pressure ratio,
  increasing the drop further stops increasing flow (capped near local
  sonic velocity); ties directly to the real gas-sizing content already
  sourced in §8 (Legacy & Archive deck D750018).
- **Noise/vibration as a visible diagnostic cue** — turbulent/cavitating
  flow generates real audible noise, a cue a player could learn to read
  before a failure.
- **NIR nutrient sensing &rarr; real-time dosing** — from Franz's own
  John Deere background (NIR spectroscopy reading slurry composition for
  nitrogen/protein content): a believable later-game system where
  reclaimed compost slurry is sensed and dosing adjusts automatically.
- **Water hammer mitigation** — the real fix is slower valve closure or
  closure-rate shaping, a natural harder-difficulty layer once the basic
  pressure/flow loop is established.

**Real standards and terms worth digging into further:**
- **ISA-75.01.01 / IEC 60534-2-1** — the standard governing Cv/Kv valve
  sizing equations, pressure recovery factor (FL), and choked-flow
  prediction; the Fisher Control Valve Handbook is Emerson's own direct
  lineage into this standard, already the primary source throughout §7.1.
- **Vena contracta** — the point just past a restriction where flow area
  is narrowest and velocity/pressure drop is most extreme; specifically
  where cavitation/flashing bubbles first form.
- **Reynolds number** — the dimensionless ratio of inertial to viscous
  forces predicting laminar vs. turbulent flow (Re&nbsp;&lt;&nbsp;2,000&ndash;2,300
  laminar, Re&nbsp;&gt;&nbsp;4,000 turbulent, transitional between).
- **Joukowsky equation** — the standard first-approximation formula for
  estimating a water hammer pressure spike from a given velocity change
  and closure time.

### 7.3 Concept inventory by discipline track, with screen placement
(Franz, 2026-10-06. A genuinely new organizing axis this document did not
have: §7.2 is a *teaching sequence* — the order concepts arrive in. This is
a *concept inventory* — which discipline each concept belongs to, and which
screen it lands on. The two are orthogonal and both needed: the sequence
says "what comes next," the inventory says "what kind of thing is this, and
is it in scope yet.")

**"Screen" is the new unit of placement**, finer than a chapter and coarser
than a teaching step. Screen 1 is the hands-first hydraulic foundation —
direct manipulation of a cutaway scene, no instrument wiring, no symbol
literacy. Everything tagged screen 1 below shares that one interaction
register, which is why it can hold as much as it does.

**Track 1 — Fluid dynamics (the physics)**

| Concept | Placement |
| --- | --- |
| Valve position controls flow | hands-first, screen 1 |
| Pressure builds before flow starts | hands-first, screen 1 |
| Flow splits and conserves at a junction | hands-first, screen 1 |
| Restriction raises velocity, drops pressure | hands-first, screen 1 (reducer path) |
| Resistance anywhere redistributes flow everywhere | hands-first, screen 1 (multi-path throttling) |
| Laminar vs. turbulent — character, not just speed (eddies/mixing) | visual/hands-first, screen 2+ |
| Reynolds number; viscosity independent of density | comms narration + visual, screen 2+ |
| Viscosity vs. temperature — opposite for liquids and gases | comparison/diagnostic, gas screen |
| Cavitation and flashing | diagnostic puzzle, later chapter |
| Water hammer | diagnostic puzzle, banked for later |

**Track 2 — Piping design (the apparatus)**

| Concept | Placement |
| --- | --- |
| Pipe sizing vs. actual bore | hands-first, early |
| Reducer/expander geometry | hands-first, screen 1 |
| Manifold / multi-way split | hands-first, screen 1 |
| Fittings' effect on flow (bends, etc.) | banked, optional |
| Elevation head | banked, later |

**Track 3 — Control valves (the component)**

| Concept | Placement |
| --- | --- |
| Hand wheel / manual valve as a basic restriction | screen 1 |
| Trim severity (mild vs. sharp reduction) | screen 1, folded into the reducer beat |
| Valve types (ball, globe, etc.) | banked |
| Sizing standards (ISA/IEC) | later chapter |
| Diagnostics — noise, vibration, wear from turbulence | later chapter |

**Track 4 — Process engineering (the tying layer)**

| Concept | Placement |
| --- | --- |
| Single valve action &rarr; system-level consequence | screen 1 wrap |
| Applied scenario: deliver fluid to a destination under constraints | the hydroponics run |
| Diagnostic puzzles: symptom &rarr; cause &rarr; fix | later chapters |
| Multi-system tradeoffs: pumps, HVAC, power | full colony, banked |

**Track 5 — Instrumentation (reading the system)**

| Concept | Placement |
| --- | --- |
| Pressure gauge — a number tied to what's physically happening | hands-first, screen 1 |
| Flow indicator — confirming flow exists, and how much | hands-first, screen 1 |
| Analog vs. digital readout, tied to equipment age/condition | visual/aesthetic, screen 1 onward |
| Temperature gauge | gas/viscosity screen (tied to the viscosity lesson) |
| Condition indicators (rust, wear, corrosion) as diagnostic clues, not just texture | visual, fixed-rig screens |
| Level indicators (tanks, vessels) | banked, later chapter |
| NIR sensing for nutrient/slurry dosing | banked, Garden chapter |
| Alarms / alerts | banked, diagnostic puzzle chapters |

**Two notes worth carrying forward, neither a correction to the above:**

- **The instrumentation track quietly carries the aesthetic.** "Analog vs.
  digital readout tied to equipment age/condition" and "condition
  indicators as diagnostic clues, not just texture" both make the retro
  visual direction (§12 item 3) *load-bearing* rather than decorative — a
  rusted analog gauge isn't set dressing, it's information about what this
  rig is and how it's been treated. That is exactly the "earned, not
  decorative" bar stated in the same section, now with a concrete mechanism.
- **A real precision point on "viscosity independent of density."** True of
  *dynamic* viscosity (&mu;) specifically. *Kinematic* viscosity
  (&nu;&nbsp;=&nbsp;&mu;/&rho;) is by definition density-dependent, and
  Re&nbsp;=&nbsp;&rho;vD/&mu;&nbsp;=&nbsp;vD/&nu; can be written either way.
  The reference rig's own laminar/turbulent row already computes Re from
  kinematic viscosity (&nu;&asymp;1.08&times;10&#8315;&#8309;&nbsp;ft&sup2;/s
  for water at 60&deg;F). Worth stating the distinction explicitly when this
  lesson gets written, since "viscosity doesn't depend on density" is true
  and useful but becomes wrong if the player then applies it to &nu;.

**One open reconciliation against §7.2, flagged rather than silently
resolved:** §7.2's teaching sequence ends on "PV flash at the nozzle" as
"the dramatic, visible payoff chapter one is building toward." This
inventory places cavitation and flashing in a **later chapter**. These may
not actually conflict — the inventory's tag is specifically *diagnostic
puzzle*, and §7.2's mist-nozzle flash is a *demonstration* (watch it
happen), not a puzzle (figure out why it happened) — so the demonstration
could stay in Chapter 1 while the diagnostic puzzle form waits. But that
reading is an inference, not something stated, so it needs confirming
before either version gets built.

## 8. Expansion roadmap (later chapters — NOT scoped yet, illustrative only)

This list exists to show the shape of "all instrumentation and mechanics,"
not to commit to an order or a timeline. **Now that the setting is a moon
colony branching out from the sealed habitat (§4), these axes have a real
narrative anchor instead of being an abstract list** — each later chapter
can be a real colony subsystem that happens to need a particular valve
type, loop type, or mechanic, rather than the mechanic being introduced for
its own sake. Promising, not yet worked out: the vault's own **Power &
Severe Service Sourcebook** is already real sourced material in the Source
Library and would be the natural grounding for a power-generation/reactor
chapter, the same way the Control Valve Handbook and Catalog 12 grounded
Chapter 1 — worth checking before assuming reactor-adjacent content needs
new research from scratch. Candidate axes of expansion:

- **Valve body / mechanism types:** ball, butterfly, rotary plug — each
  with different flow characteristics and torque (not thrust) actuation.
  **Real selection criteria now sourced (2026-10-05, Legacy & Archive deck
  D750000, "Control Valve Terms, Types, and Selection Parameters"), in a
  real Design Features / User Benefits / Typical Applications / Limitations
  format per type — exactly the shape a later chapter's catalog constraint
  logic needs, not just a list of names:**
  - *Reduced-bore ball valves*: minimal pressure loss, built for
    high-pressure throttling; typical use gas transmission/distribution;
    limitation — costly, generally under 300°F.
  - *V-notch ball segment valves*: wide rangeability, suited to fibrous
    slurries and shear-sensitive media, or economical throttling at
    moderate conditions. (This is the family the real D750018 gas-sizing
    worked example above actually uses — Design V25.)
  - *Eccentric rotary plug valves*: the plug's eccentric path keeps it off
    the seat during throttling (low wear, low torque); metal-to-metal
    shutoff that improves with use; built for erosive/corrosive service
    (mining, minerals, refining); limitation — pressure-drop capability
    falls off fast above ~NPS 8.
  - *Butterfly valves*: real anti-cavitation mechanism — single- vs.
    multi-stage drilled-hole cages reduce pressure recovery to keep the
    vena-contracta pressure above vapor pressure, extending the
    cavitation-mitigation strategies already sourced from the Handbook
    (§7.1) to a rotary geometry.
- **Actuator types:** piston actuators, electric/electronic actuators,
  rotary vane — each with a different force/motion relationship than the
  657's diaphragm-and-spring.
- **Other loop types, each with genuinely different process dynamics:**
  level (integrating/capacitive — very different control challenge than
  flow), pressure, temperature (often has real thermal lag).
- **Other instrumentation:** different transmitter technologies, possibly
  safety instrumented systems (SIS) as an advanced/late chapter.
- **Advanced control strategies** as later "mechanics": cascade, ratio,
  split-range control — the process-control equivalent of a Zachtronics
  game's late-campaign advanced glyphs/instructions.
- **Troubleshooting-only scenarios:** a loop that's already built (and
  possibly wrong) handed to the player cold, integrating the design skill
  and the diagnostic skill from §7 into open-ended cases.

## 9. Progressive difficulty / competency ladder (first draft, 2026-10-05)

> **NOT AUTHORITATIVE FOR LEVEL SEQUENCING (marked 2026-10-06).** Use
> **§7.2** to decide what a level teaches and in what order. This section is
> a *competency ladder* — a map of skills onto a course-shaped scaffold —
> and it was drafted against an "Exercise 1" (wiring-only, see the heading
> below) that was proposed, rejected, and never built. Its exercise map
> therefore numbers a sequence that does not exist.
>
> This is not hypothetical drift. The first attempt at a second level was
> built from this section rather than §7.2 and had to be thrown away: it
> arrived as a piping-selection and sizing-table screen, which is what this
> ladder's rungs imply, where §7.2 step 3 asks for the *opposite* — "shown
> as the labeled pipe and its true inner bore side by side", a picture
> rather than a table. Franz's verdict on the result was "way too much
> text… building overwhelm" and "I don't feel like that taught me
> something".
>
> Keep the section: the competency IDs are still the right vocabulary for
> saying what a level exercises, and they are grounded in real sourced
> content. Just do not read the ordering as a plan.

Built the same way as the 14101 Day-One competency map — read that
document's schema first (`competency`: a flat skill ID with a `bloom`
level and a one-line statement; `placement edge`: `module × competency ×
progression`; progression is `introduces` → `develops` → `applies`) and
adapt it. **This is a genuine first draft, status equivalent to 14101's
Phase 2/3 — pending Franz's review and correction, not locked.** Two
adaptations from the 14101 schema, since this isn't a slide-based course:

- **"Module" becomes "exercise"** — the unit a competency gets placed
  against is one in-game job/exercise, not a course module.
- **"Asset variant" has no direct equivalent yet** — 14101's asset variant
  is one authored teaching figure; this game has no figures to enumerate
  the same way. The nearest analog (which specific job scenario, which
  specific in-game tutorial moment, teaches a competency) is left for the
  interaction-spec work, not drafted here.
- **No role-routing axis** — 14101 routes four technician roles through one
  shared course; this is a single-player game with one path, so that
  dimension is dropped entirely rather than forced to fit.

### Competencies

Grouped by area, grounded in the real sourced content from §2 and §7.1 —
not invented. `cve.loop.*` (the input/output literacy from §2),
`cve.sizing.*` (the real liquid-sizing procedure), `cve.selection.*` (the
real catalog/constraint logic), `cve.build.*` (the canvas mechanic itself),
`cve.test.*` and `cve.diagnose.*` (running a build and reading its real
misbehavior).

```yaml
# cve.loop.* — loop structure and schematic literacy (§2, §3 pillar 8)
- { id: cve.loop.identify-input-output, bloom: understand,
    statement: "Given a process description, identify the loop's input (the transmitter's signal to the controller) and output (the controller's signal through the positioner to the valve)." }
- { id: cve.loop.read-pid-symbols, bloom: remember,
    statement: "Recognize and correctly place the real ISA-standard P&ID symbols for a flow transmitter, a controller, and a control valve with positioner." }
- { id: cve.loop.wire-signal-path, bloom: apply,
    statement: "Wire the correct signal path on the canvas: transmitter output to controller input, controller output to valve/positioner input." }

# cve.sizing.* — the real liquid sizing procedure (§7.1, CVH ch5 §5.8)
- { id: cve.sizing.compute-cv-liquid, bloom: apply,
    statement: "Compute required Cv for a liquid service from given flow rate, pressure drop, and fluid properties using the standard liquid sizing procedure." }
- { id: cve.sizing.apply-choked-flow-limit, bloom: analyze,
    statement: "Determine whether flow is choked by comparing actual ΔP against the valve's own choked-flow allowable ΔP, and size against whichever is lower." }
- { id: cve.sizing.iterate-against-real-fl, bloom: apply,
    statement: "Rework a sizing calculation using the selected valve's own actual FL (not an assumed value) and determine the resulting percent of travel." }

# cve.selection.* — real catalog/constraint-driven hardware choice (§7.1)
- { id: cve.selection.read-cv-curve, bloom: apply,
    statement: "Select a valve size and cage/trim combination from a real Cv-vs-travel table so the computed Cv lands at a reasonable, non-extreme percent of total travel." }
- { id: cve.selection.choose-trim-characteristic, bloom: evaluate,
    statement: "Choose linear vs. equal-percentage trim based on how much of the system's total pressure drop the valve itself takes at the operating condition — not on which curve 'looks' simpler." }
- { id: cve.selection.verify-actuator-travel, bloom: analyze,
    statement: "Verify a selected actuator's rated travel matches the chosen valve size's required travel; reject a mismatched pairing." }
- { id: cve.selection.verify-shutoff-class, bloom: apply,
    statement: "Select a seating/trim option that meets a stated shutoff (seat leakage) class requirement." }

# cve.build.* — the construction canvas itself (§3 pillars 1-2)
- { id: cve.build.place-and-wire-loop, bloom: apply,
    statement: "Place a transmitter, controller, and valve+actuator+positioner on the canvas and wire them into one complete, correctly-connected loop." }

# cve.test.* — running a build and reading the result (§3 pillar 3-4)
- { id: cve.test.run-and-read-response, bloom: analyze,
    statement: "Run a built loop across its stated operating range and determine whether it holds the range without instability or saturation." }

# cve.diagnose.* — real failure modes, diagnosed from symptom not told outright (§7.1, CVH ch5 §5.14)
- { id: cve.diagnose.trim-mismatch, bloom: analyze,
    statement: "From an unstable or non-linear installed response, diagnose that the trim characteristic doesn't match the system's pressure-drop profile." }
- { id: cve.diagnose.travel-shortfall, bloom: analyze,
    statement: "From a loop that can't reach its required flow/travel, diagnose an actuator-travel or valve-size mismatch." }
- { id: cve.diagnose.cavitation-risk, bloom: evaluate,
    statement: "Given operating pressures and a fluid's vapor pressure, recognize cavitation risk and select a real mitigation — multi-stage trim, hardened material, or raising P2." }
```

**15 competencies, Chapter 1 only** (compare 14101's 41 across 11 modules —
a smaller, bounded first chapter is the right scale, per §6).

### Exercise map (revised 2026-10-05 — Exercise 1 narrowed to wiring-only)

| Exercise | Arc | Introduces | Develops |
| --- | --- | --- | --- |
| 1 | Early | `loop.identify-input-output`, `loop.read-pid-symbols`, `loop.wire-signal-path`, `build.place-and-wire-loop` | — |
| 2 | Early | `sizing.compute-cv-liquid`, `sizing.apply-choked-flow-limit`, `selection.read-cv-curve`, `selection.verify-actuator-travel` | `build.place-and-wire-loop` (same canvas, now with a real hardware choice on it) |
| 3 | Mid | `selection.choose-trim-characteristic`, `sizing.iterate-against-real-fl` | `selection.read-cv-curve` (now against a *range*, not a point) |
| 4 | Mid | `selection.verify-shutoff-class`, `test.run-and-read-response` | — |
| 5 | Late | `diagnose.trim-mismatch` | `selection.choose-trim-characteristic` (same skill, now diagnosed from symptom) |
| 6 | Late | `diagnose.travel-shortfall` | `selection.verify-actuator-travel` |
| 7 | Late (capstone) | `diagnose.cavitation-risk` | everything above, combined into one open client job |

**Exercise 1 is wiring-only, deliberately** (revised from the first draft,
which bundled wiring and sizing together): the player is handed an
already-sized, fully-specified loop and only has to place and wire it
correctly. Bundling the canvas mechanic and real sizing math into one
exercise would have asked the player to learn two unrelated skills at once,
breaking pillar 6's "teach exactly one new thing at a time" discipline.
Exercise 2 introduces sizing math on a canvas the player already knows.
Exercise 3 is where the first real judgment call appears (equal-% vs.
linear), matching the mid-arc principle. Exercises 5-6 deliberately reuse
Exercise 2/3's own competencies in `diagnose` form rather than inventing
new skills — real troubleshooting IS the same underlying judgment applied
from a symptom instead of a spec, not a separate skill; the schema already
captures that as a different Bloom's level on the same competency
(`evaluate` choosing trim forward in Exercise 3, `analyze` diagnosing it
backward in Exercise 5) — genuine transfer, not repetition.

7 exercises is a normal "world" size for this genre (most Zachtronics
chapters run 4-8 before unlocking new mechanics) — kept as drafted.

## 10. Interaction spec — how an exercise actually works (first draft, 2026-10-05)

**Status: first draft, same as §9 — concrete enough to prototype against,
not locked.** Grounded in how the reference games actually work
mechanically (Opus Magnum/SpaceChem's build→run→watch loop, Dyson Sphere
Program's direct-manipulation placement), not invented from nothing. Every
exercise runs through the same four phases.

### 10.1 Phase 1 — Brief

The narrative entry point (§4): a client/job brief in the career-and-
clients framing states the process conditions and requirements in-fiction
(a plant's request, not a bare spec sheet) — flow rate, pressure drop,
fluid, required rangeability, shutoff class. This is where the "junior
engineer building reputation" frame actually touches the mechanics: the
brief is the commission.

### 10.2 Phase 2 — Size

A dedicated sizing panel, separate from the build canvas — the player's
"engineering notebook," not part of the schematic. This is where
`cve.sizing.*` happens: compute Cv from the brief's conditions using the
real procedure (§7.1), check whether flow is choked, arrive at a required
Cv. Keeping this a distinct phase/panel (not folded into the canvas) mirrors
the real workflow's own separation — you size on paper before you ever
touch the P&ID — and keeps the canvas phase focused on one thing
(construction) rather than mixing math UI with spatial UI.

### 10.3 Phase 3 — Build (the canvas)

This is pillar 1's P&ID canvas, concretely:

- **Parts tray**: the components unlocked so far (transmitter, controller,
  valve+actuator+positioner for Chapter 1) sit in a palette at the edge of
  the canvas, each rendered as its real ISA schematic symbol.
- **Placement**: drag a part from the tray onto the canvas — direct
  manipulation, matching Franz's "drag-and-drop is also important" note.
- **The process line is given, not placed, in Chapter 1.** The pipe itself
  (with the valve's mounting point already on it) is pre-drawn; the player
  places and wires *instruments* around it. Free pipe-routing is a
  candidate later-chapter mechanic (§8), not a Chapter 1 requirement — the
  competencies Chapter 1 teaches don't need it, and adding it now would
  mean teaching two new spatial mechanics (instrument placement AND pipe
  routing) in the same chapter.
- **Ports and wiring**: each component exposes real signal ports (a
  transmitter has one output; a controller has one input, one output; a
  valve/positioner has one input). Wiring is click-drag from an output port
  to an input port, drawing the signal line live — this IS
  `cve.loop.wire-signal-path`, not a cutscene explaining it.
- **Freedom of design, scoped honestly for Chapter 1**: the player chooses
  *where* to place each instrument and *how* to route the wires between
  them — genuine layout freedom, Franz's pillar 2 — even though the pipe
  position and the hardware catalog are both fixed/given in Chapter 1.
  Later chapters are the natural place to extend freedom to pipe routing
  and multi-valve topologies, once Chapter 1 proves the core loop.
- **Hardware selection** happens here too: clicking the valve/actuator/
  positioner slot opens the real catalog (§7.1) filtered to what's been
  unlocked, where the player picks size, trim, and seating against the Cv
  computed in Phase 2.

### 10.4 Phase 4 — Run (and the payoff)

Pressing Run is the pillar-3 moment, concretely staged:

1. **View transition**: the flat schematic canvas gives way to the
   cross-section cutaway view (pillar 8) — a deliberate visual shift from
   abstract symbol to real hardware, the game's own signature "moment."
2. **Live simulated execution**: the process condition applies, the
   transmitter's simulated reading drives the controller, the controller's
   output strokes the actual actuator — animated on real computed physics,
   the same Hooke's-law discipline already proven in the 657 Working Model,
   not a scripted animation standing in for it. A live readout (gauge/
   travel graph, in the 657 model's own visual language) shows the achieved
   value against the target in real time.
3. **Pass**: the loop settles at the correct travel/Cv within real
   tolerance. The optional scorecard (pillar 5 — cost, pressure-drop
   efficiency, rangeability margin) appears afterward, never blocking
   completion. The client brief gets a resolution beat tying back to Phase
   1's narrative frame (reputation thread, §4).
4. **Fail is physical, not a rejection message (pillar 4)**: the specific
   real misbehavior plays out visibly —
   - *Insufficient travel*: the valve plug visibly stalls short of where it
     needs to go.
   - *Wrong trim characteristic*: the response overshoots/undershoots
     erratically across the operating range rather than tracking cleanly.
   - *Miswired loop*: nothing moves, with the broken signal path visually
     evident on the (still-visible, or re-shown) schematic.
   - *Cavitation risk ignored*: the valve shows the real erosion/noise cue
     from §7.1's cavitation mechanism at the relevant operating point.
   The player returns to Phase 3 (or Phase 2, if the diagnosis is a sizing
   error) to fix the real cause, not to retry blindly.

### 10.5 Just-in-time tutorial (pillar 6, made concrete)

The first time a new part, port type, or sizing step becomes relevant, a
short, contextual callout introduces it right there — never a menu of
rules read up front. This is literally the competency ladder's own
`introduces` edges (§9) given UI form: each `introduces` edge is one
tutorial callout, tied to the exact moment that competency is first needed.

### 10.6 Open questions on this draft

- Does the sizing panel (Phase 2) feel like its own distinct screen/tool,
  or should it live as a drawer/overlay on the same canvas view rather than
  a hard phase transition?
- How literal should port-to-port wiring be — exact click-drag line
  drawing (SpaceChem/Opus Magnum style precision) or a looser "connect
  these two boxes" gesture that's more forgiving for a first chapter?
- Should Run be reversible/steppable (pause mid-execution, rewind to
  inspect a specific moment, the way Opus Magnum lets you scrub the
  timeline) or a one-shot play-through to the result?

## 11. Relationship to existing Workbench architecture

- **Forked off as its own standalone project (Franz, 2026-10-05): "I'm not
  sure this should all live in Project Workbench. Maybe we should fork
  this off to be it's own thing."** This mirrors an existing precedent in
  this same ecosystem: the Pipeline Console (layer 4) is already a
  separate Node/Electron app in its own repository, outside the vault,
  even though it exists to serve Workbench's mission. Control Valve
  Engineer should follow the same pattern — its own repository, its own
  codebase, not part of the EmersonWorkbench vault. This scoping document
  stays here in `00 - Project/` as the design record while the idea is
  being worked out, the same way `Pipeline Console.md` lives in the vault
  even though the Pipeline Console's actual code doesn't — but the real
  build, once it starts, belongs in a new, separate repository.
- **Not the Workshop shell.** The Workshop (layer 2) is built for narrated,
  paced lessons with a context pane of key concepts — a fundamentally
  different interaction model than a build-then-run puzzle game. This is
  now doubly true given the fork-off decision above.
- **Shares the physics discipline, not the code.** The Fisher 657 Working
  Model's actuator/spring/diaphragm physics (Hooke's law force balance,
  real geometry-derived constants) is the proof that this kind of
  simulation can be built credibly and is the natural reuse target for
  Chapter 1's valve/actuator simulation — not a shared codebase
  requirement, a shared standard of rigor. As a separate repository,
  reuse would mean re-implementing that same discipline, not importing the
  657 model's actual code.
- **Relationship to the CVE (Control Valve Engineering) course sequence**
  is still open now that this is a standalone project rather than a
  Workbench course deliverable — it may still be referenced from or paired
  with CVE1/CVE2/CVE3 even while living in its own repository (see §12).

## 12. Open questions (decisions only Franz can make)

1. ~~Does Lunar Process Engineer live inside the CVE course sequence...~~
   **Resolved (2026-10-05): standalone project, no hard requirement to tie
   into CVE1/2/3 — but Franz is open to cross-pollination either
   direction** ("pulling from or vice versa could be a good direction. We
   just got catalog 12, so that might influence us in some big new ways").
   Not a formal decision yet, just a confirmed posture: watch for natural
   opportunities to feed the game's real sizing content back into CVE
   course material, or vice versa, rather than keeping them fully separate
   by default.
2. ~~What is the REAL Chapter 1 hardware catalog...~~ **Resolved
   (2026-10-05, see §7.1): Fisher ED valve (NPS 1 or 1-1/2 specifically —
   the sizes whose 0.75in max travel matches the 657) + Fisher 657 actuator
   + FIELDVUE DVC6200 positioner.** (Corrected from an initial ES proposal
   the same day, after Franz asked why ES specifically — see §7.1's own
   note on that correction.) Real Cv values, real travel-compatibility
   constraint, real trim options, and a real worked sizing example template
   (which already used ED) are all sourced, including full real
   percent-of-travel curves from the actual Catalog 12 ED pages, now saved
   to the vault. Still open: ED's own shutoff-classification mapping (its
   structure differs from the simpler one checked for ES and wasn't fully
   confirmed) and whether to pull more of Catalog 10/12 (other valve
   families) from eDocs now or wait until later chapters need it.
3. ~~Visual/art direction...~~ **Resolved (2026-10-05): two registers, not
   one (see §3 pillar 8).** Franz: "I really enjoy our cross section
   interactive 657 look and feel. I think real schematic symbol standards
   are actually a part of what needs to be learned, but having a cross
   section and seeing the internals in operation carries real understanding
   weight." The build canvas uses real P&ID schematic symbols (a genuine
   skill to teach); the run/watch payoff uses cross-section cutaway
   visualization in the 657 Working Model's own proven visual language.

   **Layered on top (2026-10-06): a retro DOS-era pixel-art style, real
   personal touchstones from Franz's own pre-Windows IBM 286 — Circuit's
   Edge, the original Duke Nukem (1991), Commander Keen, King's Quest IV,
   BattleTech-era titles.** These share a real, coherent visual era (chunky
   EGA/VGA pixel art, 16-256 color, FM-synth-adjacent sound) worth building
   toward for concrete practical reasons, not just nostalgia: it's one of
   the most achievable styles for a small build to pull off convincingly,
   it's already inside this genre's own vocabulary (TIS-100 leans on a
   deliberately retro "obsolete computer" conceit), and its retro-futurism
   pairs naturally with the moon-colony setting (§4). Verified live, not
   from memory: loaded Circuit's Edge in a real browser-based DOSBox
   session (archive.org's streaming emulator, not a download) since Franz's
   own memory of its UI had gone fuzzy — confirmed real VGA pixel art
   (moodier/painterly 256-color, distinct from Commander Keen's flatter
   16-color EGA look) and a genuinely good narrative device: the game opens
   on an in-fiction surveillance memo ("To: / From: / Re:") briefing the
   player on their own character in a terse, bureaucratic voice before play
   even starts.

   **Claude's call, given explicit authority from Franz ("take what you
   want, it's up to you if none or everything — our main idea here is
   zachtronics"):** take the memo/dossier framing device as a concrete
   model for how Phase 1 job briefs (§10.1) should actually read — terse,
   in-world, bureaucratic-voice documents, not a process-conditions form —
   and take the moodier VGA-era register as the specific flavor of "retro"
   to build toward. Explicitly NOT adopting Circuit's Edge's own UI
   structure (portrait + scene art + dialogue text-box, built for a
   dialogue-driven adventure/RPG) — that interaction model serves a
   different genre's needs than build→run→watch, and grafting it on would
   be scope creep against the stated Zachtronics spine, not a genuine fit.

   **The actual quality bar for this aesthetic (2026-10-06), stated
   precisely by Franz rather than left as a vibe:** retro is the starting
   visual direction partly because it's a genuine aesthetic love, partly
   because it's less demanding to execute well than high-fidelity graphics
   — but the bar for whether any specific thing fits isn't generic sci-fi
   spectacle, it's the same standard Franz uses judging his own band's
   guitar riffs: does it feel undeniably cool, *earned* rather than
   decorative. The intended source of that feeling here is competence made
   visible — an engineer who can look at a cutaway pipe and know exactly
   why a valve's about to cavitate before it happens — closer to Circuit's
   Edge's confident, specific cool than action-movie spectacle. Worth
   applying this literally as a filter on future content: if a piece of
   flavor text, a visual flourish, or a narrative beat doesn't pass "is
   this earned competence or decoration," it probably doesn't belong.
4. ~~Scoring/credential framing...~~ **Partially resolved (2026-10-05):
   "best out there" rejected as the literal framing.** Franz: "best out
   there is vague and a little silly. I don't mind some Zachtronics humor
   and irony, but that is a little oversimplified." Some dry/ironic
   Zachtronics-style voice is welcome in the game's flavor text; a literal
   "you are now the best" credential claim is not. What the actual
   end-state/credential moment IS instead is still open.
5. ~~Narrative framing...~~ **Resolved (2026-10-05): a career-and-clients
   world, "a junior engineer building reputation" (see §4), with
   competition/rivalry confirmed as part of the texture** ("should build a
   little competition at times, be interesting"). **The setting itself is
   now resolved too (2026-10-06): a moon colony, starting in the sealed
   habitat's greenhouse and branching outward to life support and power/
   reactor systems (§4)** — the earlier parked "exotic setting" tension
   reversed once the setting was derived from what the game's own mechanics
   needed to visualize (pressure, phase-change), not bolted on for flavor.
   Still open: how career-and-clients reconciles with a single colony (are
   "clients" now colony departments?), the specific shape of rivalry, a
   mentor figure or not, early-vs-late job feel.
6. ~~Audio direction...~~ **Resolved (2026-10-05, see §5): original
   composition**, in the vein of Zachtronics plus Dyson Sphere Program and
   Subnautica specifically — continuous, driving, built to sustain long
   building sessions rather than loop or demand attention. Not yet decided:
   who composes it, or the production budget/timeline.
7. ~~New repository...~~ **Resolved (2026-10-05): not yet.** Franz:
   "Let's keep scoping before creating the repo." No repository exists;
   keep working in this document until the remaining open questions above
   are settled enough to actually start building against.
