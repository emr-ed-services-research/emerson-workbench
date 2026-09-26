# Bench Set — Fisher 657 (Size 30) — Narration Script

Source of truth for the 657 bench-set micro-learning narration. Matches the
SOP script approved in conversation 2026-09-25 (three amendments folded in:
upper-stop grounding, adjuster correction direction, past-11 over-stroke
caution). NEVER edited by the generation pipeline — pronunciation rewrites
are applied only at synthesis time from pronunciation.yaml.

Headings are section markers for the animation, not spoken narration.

## What Bench Set Is

Bench set is the initial compression of the actuator spring, calibrated with zero valve or process force acting on the actuator — either fully off the valve, or mounted on the bonnet with the stem connector not yet installed.

It defines the air-pressure range over which the actuator strokes through its full rated travel.

For our Size 30 example: bench set range 3-11 psig, rated travel 3/4 inch, direct-acting — air pushes the stem down, the spring returns it up, so this actuator fails up, open, on loss of air.

With zero air, the spring holds the diaphragm assembly against the upper casing — the upper travel stop.

## Spring Verification — sets and confirms bench set

Actuator stem at the top of its travel, not connected to the valve.

First, rig a temporary, adjustable air supply to the actuator diaphragm.

Raise pressure from zero toward 3 psig, watching for the stem's first movement. It should move exactly at 3 psig — not before, not after.

If it doesn't, the first-movement pressure tells you which way to correct: movement starting above 3 means too much preload — loosen the adjuster. Below 3 means too little — tighten it in. Recheck from zero until first movement lands exactly at 3.

Raise pressure to exactly 11 psig — not past it. Off the valve, nothing stops the actuator at rated travel: beyond 11 it keeps moving until the diaphragm plate lands on the lower casing. The 3-to-11 window is what you're verifying, not the total movement available. Mark where the stem's end lands.

Lower pressure back to 3 psig.

Measure from that mark to the stem's end — it must equal 3/4 inch, the nameplate rated travel.

If it matches, bench set is complete — proceed to the stem connector. If it's off slightly, spring free-length or rate tolerance is the likely cause. If it's out of tolerance, contact Emerson.

## Installing the Stem Connector

Now the valve enters the picture.

Push the valve stem down to the seat.

Raise pressure to 11 psig — the same upper bench-set value.

Position one stem-connector half between the stems; each stem must engage the connector by at least one full stem diameter.

Install the other half, and tighten evenly.

Run the valve stem locknuts up until the travel indicator disk contacts the connector.

Stroke fully open to closed — verify rated travel of 3/4 inch is achieved, and align the indicator scale to the disk with the valve closed.
