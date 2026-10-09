# Bench Set — Fisher 657 (Size 30) — Narration Script

Source of truth for the 657 bench-set micro-learning narration.
Rewritten 2026-09-26 (Franz + CLI): mechanism-first opening in Franz's own
lines — every sentence is a stage direction the animation performs while
the words name the parts (name-it, spotlight-it). NEVER edited by the
generation pipeline — pronunciation rewrites are applied only at synthesis
time from pronunciation.yaml.

Headings are section markers for the animation, not spoken narration.

## How the Actuator Works

The Fisher 657 size 30 is a direct-acting, pneumatic actuator.

Air entering the upper diaphragm casing expands the diaphragm, pushing the diaphragm plate and attached stem downward.

This downward motion compresses the internal spring against the spring seat, which is supported by the actuator yoke.

---

Before connecting the actuator to a valve body, a technician must tighten the spring adjuster through the yoke housing.

This pushes the spring seat upward, compressing the spring between the seat and the diaphragm plate — which, with no air applied, sits at its upper travel stop against the upper diaphragm casing.

This initial spring compression determines the pressure at which the stem begins to move and establishes what is called bench set.

Tightening the spring adjuster raises the spring seat and compresses the spring upwards — before any air is applied at all. That is initial spring compression. Loosening the adjuster lowers the seat and backs it off.

Bench set is that initial compression. For our Size 30: bench set 3-11 psig, rated travel 3/4 inch — meaning travel starts at exactly 3 and finishes at exactly 11. It's set with zero valve forces on the actuator — and here's the whole procedure.

## Spring Verification

Prove it on the bench. Actuator off the valve, stem at the top of its travel, an adjustable air supply rigged to the diaphragm.

Raise pressure from zero. The stem's first movement should come at exactly 3 psig — not before, not after.

Starts above 3? Too much preload — loosen the adjuster. Below 3? Too little — tighten it in. Recheck from zero until first movement lands at exactly 3.

Raise pressure to exactly 11 psig — not past it. Off the valve, nothing stops travel at rated: keep adding air and the plate keeps moving until it lands on the lower casing. Mark where the stem's end sits at 11.

Lower back to 3, and measure from your mark to the stem's end. It must equal 3/4 inch — the nameplate rated travel.

If it matches, bench set is complete. Off slightly? Spring tolerance is the usual cause. Out of tolerance — contact Emerson.

## Installing the Stem Connector

Now the valve enters the picture.

Push the valve stem down to the seat.

With the plug seated, mark the valve stem exactly 3/4 inch below the actuator stem's end.

Actuate down to your mark, within a sixteenth of an inch. Travel is set off this measurement, not off bench-set pressure — though the pressure should land near 11. If it doesn't, recheck the spring.

Clamp the connector halves over both stems — each stem engaged by at least one full stem diameter — and tighten evenly.

Run the valve stem locknuts up until the travel indicator disk contacts the connector.

Stroke open to closed, verify 3/4 inch of travel, and align the indicator scale to the disk with the valve closed.
