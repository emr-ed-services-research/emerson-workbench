# Reference rig

`cve-reference-rig.html` is the calibration rig the design document cites
throughout §7.1 and §7.2 as "already built and verified" — it is the
provenance for the turbulent velocity profile the game draws, the
reducer / throat / expander behaviour, and the cavitation-versus-flashing
distinction §7.2 calls the chapter's best "aha" moment.

It was living only in a session scratch directory that gets cleaned up,
while the design document described its results as settled fact. Copied
here so the evidence outlives the session that produced it.

`friction.js` holds the Schedule 40 bore and flow-area data used for
Darcy-Weisbach friction work, from ASME B36.10M via the Fisher Control
Valve Handbook (§14.2) — the same table `sizing.js` draws its bores from.

Neither file is part of the game build. They are the workings.
