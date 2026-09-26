# -*- coding: utf-8 -*-
"""Assemble 657-refined.html rev B per Franz's correction list."""
parts_js = open("refined2-parts.js", encoding="utf-8").read()
# upper casing: declared-geometry shell reconstruction (approved 2026-09-26)
import re as _re
_shell = _json.load(open("upper-shell-path.json", encoding="utf-8")) if False else None
import json as _json2
_shell = _json2.load(open("upper-shell-path.json", encoding="utf-8"))
_shell_lo = _json2.load(open("lower-shell-path.json", encoding="utf-8"))
parts_js = _re.sub(r'"lower-diaphragm-casing":\s*"[^"]*"',
    '"lower-diaphragm-casing": "' + _shell_lo["lower-diaphragm-casing"] + '"',
    parts_js)
parts_js = _re.sub(r'"upper-diaphragm-casing":\s*"[^"]*"',
    '"upper-diaphragm-casing": "' + _shell["upper-diaphragm-casing"].replace("\\", "") + '"',
    parts_js)
import json as _json
_timing = _json.load(open("C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench/narration/output/657/timing.json", encoding="utf-8"))
timing_js = _json.dumps([{k: s[k] for k in ("start","duration","text","section")} for s in _timing])

html = """<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Fisher 657 Working Model</title>
<style>
body{margin:0;background:#eef2f6;color:#1c2530;font-family:system-ui,sans-serif;padding:18px;}
.row{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;}
.fig{background:#fff;border:1px solid #cdd7e1;border-radius:10px;padding:10px;flex:0 1 620px;}
.fig svg{width:100%;height:auto;display:block;}
.panel{flex:1 1 300px;max-width:480px;}
h1{font-size:19px;margin:0 0 6px;}
p,label{font-size:13.5px;line-height:1.55;color:#44525f;}
input[type=range]{width:100%;}
.readout{font-family:ui-monospace,monospace;font-size:13px;color:#2f6fb2;}
.cast{stroke:#1c3350;stroke-width:2.5;stroke-linejoin:round;fill-rule:evenodd;}
#p-upper{fill:#9fb8d8;}
#p-lower{fill:#b7cbe4;}
#p-yoke{fill:#7e9cc4;}
#p-plate{fill:#2f6fb2;}
.sp-stem{fill:#2a5f9e;stroke:#1c3350;stroke-width:2;}
.sp-seat{fill:#3c74ab;stroke:#1c3350;stroke-width:2;}
.sp-adj{fill:#35689c;stroke:#1c3350;stroke-width:2;}
.sp-coil{stroke:#58a6d8;stroke-linecap:round;fill:none;}
.sp-coil-back{stroke:#3d7fae;}
.sp-thread{stroke:#12283f;stroke-width:2.4;}
.dia{stroke:#1d4f8c;stroke-width:12.0;fill:none;stroke-linecap:round;stroke-linejoin:round;}
.prism{fill:#cdd9ea;stroke:#1c3350;stroke-width:2;}
.tick{stroke:#1c3350;stroke-width:2;}
.lbl{font-family:system-ui;font-size:15px;fill:#1c3350;}
.np-wrap{margin:14px 0;}
.np-wrap svg{width:100%;max-width:460px;display:block;}
.np-title{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:25px;fill:#fff;}
.np-logo{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:16px;fill:#0a0a0a;text-anchor:middle;letter-spacing:0.5px;}
.np-lbl{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:19px;fill:#fff;text-anchor:end;}
.np-box{fill:#fff;}
.np-val{font-family:Arial,Helvetica,sans-serif;font-size:18px;fill:#0a0a0a;text-anchor:middle;}
.vstem{fill:#6b7683;stroke:#39434e;stroke-width:2;}
.vnut{fill:#7d8894;stroke:#39434e;stroke-width:2;}
.vconn{fill:#3c74ab;stroke:#1c3350;stroke-width:2;}
.vdisk{fill:#cdd9ea;stroke:#1c3350;stroke-width:2;}
.vsil{fill:#dde5ee;stroke:#8ba0b8;stroke-width:2.5;stroke-linejoin:round;}
.anno{stroke:#c25016;stroke-width:3;fill:none;}
.anno-lbl{font-family:system-ui;font-size:22px;font-weight:600;fill:#c25016;}
#cap{min-height:44px;padding:8px 12px;margin-top:6px;border-top:1px solid #cdd7e1;
  font-size:15px;line-height:1.45;color:#1c2530;font-style:italic;}
#pb-play{font-size:14px;padding:6px 14px;border:1px solid #2f6fb2;background:#2f6fb2;
  color:#fff;border-radius:6px;cursor:pointer;}
#pb-play.playing{background:#c25016;border-color:#c25016;}
#nameplate g.np-hl .np-box{fill:#ffdd66;}
#nameplate g.np-hl .np-lbl{fill:#ffdd66;}
#ctrlbar{display:flex;flex-direction:column;gap:10px;margin-bottom:14px;}
#ctrlbar .ctl label{display:block;font-size:13.5px;color:#44525f;}
#ctrlbar .readout{display:block;margin-top:2px;}
.pb-word{margin-left:4px;}
@media (max-width:700px){
  body{padding:10px 10px 210px;}
  h1{font-size:17px;}
  .row{flex-direction:column;}
  .fig{flex:none;}
  .panel{max-width:none;}
  #ctrlbar{position:fixed;left:0;right:0;bottom:0;z-index:60;margin:0;
    background:#fff;border-top:2px solid #b9c7d6;
    box-shadow:0 -6px 18px rgba(20,40,60,0.14);
    padding:10px 14px calc(12px + env(safe-area-inset-bottom));
    display:grid;grid-template-columns:56px 1fr;grid-auto-rows:auto;
    column-gap:14px;row-gap:6px;align-items:center;}
  #ctrlbar button#pb-play{grid-row:1 / span 2;height:64px;font-size:22px;
    padding:0;border-radius:12px;}
  .pb-word{display:none;}
  #ctrlbar .ctl{grid-column:2;}
  #ctrlbar .ctl label{font-size:12.5px;}
  .ctl-hint{display:none;}
  #ctrlbar .readout{font-size:11.5px;margin-top:0;}
  #pb-status{display:none;}
  input[type=range]{height:28px;}
}
#asm > g, #asm > path{transition:opacity 0.4s ease;}
.pulse{animation:pbpulse 1.1s ease-in-out 3;}
@keyframes pbpulse{50%{opacity:0.3;}}
</style>
<script>__PARTSJS__</script>
<h1>Fisher 657 Working Model</h1>
<div class="row">
<div class="fig">
<svg id="asm" viewBox="0 0 1480 2250">
  <g id="g-scale"></g>
  <g id="g-mount-back" style="display:none">
    <!-- bonnet neck: the round threaded cylinder the yoke sits around
         (easy-e IOM Figure 8; yoke locknut = key 15) -->
    <rect class="vnut" x="642.5" y="2028" width="200" height="140"/>
    <g id="boss-threads"></g>
  </g>
  <path id="p-yoke" class="cast"/>
  <path id="p-lower" class="cast"/>
  <g id="sp-spring-back"></g>
  <g id="g-stem">
    <rect class="sp-stem" x="704" y="205" width="77" height="1320" rx="4"/>
    <g id="g-stem-threads"></g>
  </g>
  <g id="g-vgrp" style="display:none">
    <!-- all dims measured from the painted masks (see README) -->
    <rect class="vstem" x="722.5" y="1490" width="40" height="800"/>
    <g id="g-dn">
      <rect class="vdisk" x="641.5" y="1561" width="202" height="14" rx="2"/>
      <rect class="vnut" x="700.5" y="1577" width="84" height="31" rx="3"/>
      <rect class="vnut" x="700.5" y="1610" width="84" height="31" rx="3"/>
    </g>
  </g>
  <g id="g-conn" style="display:none">
    <rect class="vconn" x="664.5" y="1415" width="156" height="147" rx="4"/>
  </g>
  <g id="g-valve-sil" style="display:none">
    <!-- non-cutaway valve silhouette: bonnet flange under the yoke legs,
         bonnet, globe body with line flanges. Deliberately muted; bench
         set is performed with zero valve forces. -->
    <path class="vsil" d="M 527,2150 L 957,2150 L 957,2192 L 887,2192
      L 872,2290 L 1010,2330 L 1092,2330 L 1092,2560 L 1010,2560
      L 940,2540 L 545,2540 L 475,2560 L 392,2560 L 392,2330 L 475,2330
      L 613,2290 L 598,2192 L 527,2192 Z"/>
    <line x1="392" y1="2445" x2="1092" y2="2445" stroke="#8ba0b8" stroke-width="2" stroke-dasharray="8 7"/>
  </g>
  <g id="g-mount" style="display:none">
    <!-- yoke locknut clamps the yoke ring down onto the bonnet shoulder -->
    <rect class="vnut" x="617.5" y="2052" width="250" height="46" rx="5"/>
    <line x1="700" y1="2052" x2="700" y2="2098" stroke="#39434e" stroke-width="2"/>
    <line x1="785" y1="2052" x2="785" y2="2098" stroke="#39434e" stroke-width="2"/>
    <!-- packing follower (key 13): collar rising out of the bonnet -->
    <rect class="vnut" x="694.5" y="1972" width="96" height="10" rx="2"/>
    <rect class="vnut" x="698.5" y="1975" width="88" height="60"/>
    <!-- Belleville live-load stack (ENVIRO-SEAL systems only) -->
    <g id="g-belleville" style="display:none">
      <path class="vnut" d="M 687.5,1972 L 742.5,1962 L 797.5,1972 L 797.5,1966 L 742.5,1956 L 687.5,1966 Z"/>
      <path class="vnut" d="M 687.5,1956 L 742.5,1966 L 797.5,1956 L 797.5,1950 L 742.5,1960 L 687.5,1950 Z"/>
      <path class="vnut" d="M 687.5,1950 L 742.5,1940 L 797.5,1950 L 797.5,1944 L 742.5,1934 L 687.5,1944 Z"/>
    </g>
    <!-- packing flange + studs + flange nuts (keys 3/4/5) -->
    <g id="g-pflange">
      <rect class="vstem" x="655.5" y="1929" width="14" height="99"/>
      <rect class="vstem" x="815.5" y="1929" width="14" height="99"/>
      <rect class="vconn" x="627.5" y="1951" width="230" height="24" rx="3"/>
      <rect class="vnut" x="645.5" y="1933" width="34" height="18" rx="2"/>
      <rect class="vnut" x="805.5" y="1933" width="34" height="18" rx="2"/>
    </g>
  </g>
  <g id="g-travelmark" style="display:none">
    <!-- Franz's field method: with the plug seated, mark the valve stem
         exactly 3/4 in below the actuator stem bottom; actuate down to the
         mark (within 1/16 in). Travel is set off this measurement, not off
         the bench-set pressure. Mark drawn in the rest frame:
         STEM_BOT (1525) + TRAVEL (140) = 1665. -->
    <line class="anno" x1="712" y1="1665" x2="772" y2="1665"/>
    <line class="anno" x1="800" y1="1525" x2="800" y2="1665" stroke-dasharray="6 5" stroke-width="2"/>
    <line class="anno" x1="792" y1="1531" x2="800" y2="1525" stroke-width="2"/>
    <line class="anno" x1="808" y1="1531" x2="800" y2="1525" stroke-width="2"/>
    <line class="anno" x1="792" y1="1659" x2="800" y2="1665" stroke-width="2"/>
    <line class="anno" x1="808" y1="1659" x2="800" y2="1665" stroke-width="2"/>
    <text class="anno-lbl" x="812" y="1604">3/4"</text>
    <text class="anno-lbl" x="778" y="1690">mark</text>
  </g>
  <g id="g-vermark" style="display:none">
    <!-- Spring Verification: mark where the stem's end sits at 11 psig,
         then lower to 3 and measure mark-to-stem-end = rated travel -->
    <line class="anno" x1="646" y1="1665" x2="702" y2="1665"/>
    <text class="anno-lbl" x="586" y="1690">mark</text>
    <g id="g-verbracket" style="display:none">
      <line class="anno" x1="632" y1="1525" x2="632" y2="1665" stroke-dasharray="6 5" stroke-width="2"/>
      <line class="anno" x1="624" y1="1531" x2="632" y2="1525" stroke-width="2"/>
      <line class="anno" x1="640" y1="1531" x2="632" y2="1525" stroke-width="2"/>
      <line class="anno" x1="624" y1="1659" x2="632" y2="1665" stroke-width="2"/>
      <line class="anno" x1="640" y1="1659" x2="632" y2="1665" stroke-width="2"/>
      <text class="anno-lbl" x="556" y="1604">3/4"</text>
    </g>
  </g>
  <g id="sp-adj-g">
    <!-- parametric adjuster: threaded rod + wrench flats; dims measured
         from the painted mask (rod w118 y1068-1338, flats w140 y1338-1386) -->
    <rect class="sp-adj" x="683.5" y="1068" width="118" height="270" rx="3"/>
    <rect class="sp-adj" x="672.5" y="1338" width="140" height="48" rx="4"/>
    <clipPath id="adjclip"><rect x="683.5" y="1068" width="118" height="270" rx="3"/></clipPath>
    <g id="sp-adj-threads" clip-path="url(#adjclip)"></g>
  </g>
  <g id="sp-seat-g">
    <!-- parametric seat: locating boss inside the coil, flange the spring
         rests on, hub seated on the adjuster (boss w156, flange w314, hub w166) -->
    <rect class="sp-seat" x="664.5" y="972" width="156" height="40" rx="3"/>
    <rect class="sp-seat" x="585.5" y="1008" width="314" height="29" rx="3"/>
    <rect class="sp-seat" x="659.5" y="1037" width="166" height="49" rx="3"/>
  </g>
  <g id="g-plate"><path id="p-plate" class="cast"/></g>
  <g id="sp-spring-front"></g>
  <path id="p-dia" class="dia"/>
  <path id="p-upper" class="cast"/>
</svg>
<div id="cap"></div>
</div>
<div class="panel">
<div id="ctrlbar">
  <button id="pb-play" title="Play the SOP">&#9654;<span class="pb-word"> Play the SOP</span></button>
  <div class="ctl">
    <label>Spring adjuster <span class="ctl-hint">&mdash; tighten (+) raises seat and preload; loosen (&minus;) lowers</span></label>
    <input type="range" id="adj" min="-24" max="24" value="0" step="1">
    <span class="readout" id="adjout"></span>
  </div>
  <div class="ctl" id="pressrow">
    <label>Diaphragm pressure <span class="ctl-hint">&mdash; 0 &rarr; 18 psig</span></label>
    <input type="range" id="press" min="0" max="18" value="0" step="0.1">
    <span class="readout" id="pressout"></span>
  </div>
  <span class="readout" id="pb-status"></span>
  <audio id="pb-audio" src="657-narration.wav" preload="auto"></audio>
</div>
<p><label><input type="checkbox" id="valve"> Stem connector installed &mdash; valve coupled below the yoke</label><br>
<label style="margin-left:22px;">Packing:
<select id="packing">
  <!-- friction ordering per Control Valve Handbook 6th ed. 5.18 packing
       selection guidelines (very low / low / medium / high); psi values
       representative, see Fisher Catalog 14 for actual friction data -->
  <option value="0.5">Single PTFE V-ring &mdash; very low (&plusmn;0.5 psi, repr.)</option>
  <option value="0.75">ENVIRO-SEAL PTFE &mdash; low (&plusmn;0.75 psi, repr.)</option>
  <option value="1.0">ENVIRO-SEAL Graphite ULF &mdash; medium (&plusmn;1.0 psi, repr.)</option>
  <option value="1.5">Graphite composite &mdash; high (&plusmn;1.5 psi, repr.)</option>
</select></label>
<span class="readout" id="fricout"></span></p>
<div class="np-wrap">
<svg id="nameplate" viewBox="0 0 842 286" role="img" aria-label="657 actuator nameplate">
  <!-- layout measured box-for-box from the supplied nameplate image -->
  <rect x="12" y="13" width="817" height="260" rx="12" fill="#0a0a0a" stroke="#3a4654" stroke-width="2"/>
  <rect x="30" y="31" width="45" height="16" rx="8" fill="#fff"/>
  <rect x="770" y="31" width="42" height="16" rx="8" fill="#fff"/>
  <rect x="31" y="246" width="45" height="16" rx="8" fill="#fff"/>
  <rect x="772" y="246" width="42" height="16" rx="8" fill="#fff"/>
  <text class="np-title" x="92" y="63">ACTUATOR</text>
  <rect x="261" y="32" width="94" height="33" rx="14" fill="#fff"/>
  <text class="np-logo" x="308" y="56">FISHER&#174;</text>
  <text class="np-title" x="522" y="63">Fisher Controls</text>
  <g id="np-serial"><text class="np-lbl" x="180" y="106">SERIAL NO</text>
    <rect class="np-box" x="187" y="87" width="242" height="25"/>
    <text class="np-val" x="308" y="106">XXXXXXXXX</text></g>
  <g id="np-type"><text class="np-lbl" x="554" y="106">TYPE</text>
    <rect class="np-box" x="561" y="86" width="219" height="26"/>
    <text class="np-val" x="670" y="106">657</text></g>
  <g id="np-size"><text class="np-lbl" x="135" y="144">SIZE</text>
    <rect class="np-box" x="142" y="125" width="212" height="25"/>
    <text class="np-val" x="248" y="144">30</text></g>
  <g id="np-benchset"><text class="np-lbl" x="548" y="144">BENCH SET</text>
    <rect class="np-box" x="555" y="125" width="225" height="25"/>
    <text class="np-val" x="667" y="144">3-11</text></g>
  <g id="np-travel"><text class="np-lbl" x="148" y="184">TRAVEL</text>
    <rect class="np-box" x="155" y="164" width="214" height="27"/>
    <text class="np-val" x="262" y="184">3/4 Inch</text></g>
  <g id="np-units"><text class="np-lbl" x="578" y="184">PRESS UNITS</text>
    <rect class="np-box" x="585" y="164" width="194" height="27"/>
    <text class="np-val" x="682" y="184">PSI</text></g>
  <g id="np-range"><text class="np-lbl" x="394" y="224">OPER RANGE</text>
    <rect class="np-box" x="401" y="205" width="287" height="25"/>
    <text class="np-val" x="544" y="224">0-18</text></g>
</svg>
<div id="cap"></div>
</div>
<p>Spring Verification, live: with the adjuster correct (0 offset), travel begins at exactly 3.0 psig and completes at 11.0. Tighten the adjuster and travel starts late (more than 3); loosen it and travel starts early (less than 3). The stem's bottom edge reads the scale: 0 at rest, 3/4 at rated stroke. Off the valve, pressure past the window keeps the mechanism moving beyond 3/4 in until the diaphragm plate lands on the lower casing &mdash; the lower travel stop.</p>
</div>
</div>
<script>
const R = window.REFINED2;
document.getElementById('p-upper').setAttribute('d', R['upper-diaphragm-casing']);
document.getElementById('p-lower').setAttribute('d', R['lower-diaphragm-casing']);
document.getElementById('p-yoke').setAttribute('d', R['yoke']);
document.getElementById('p-plate').setAttribute('d', R['diaphragm-plate']);

const CXA=742.5, HALFW=146, WIRE=30, NHALF=13, TOP0=202, SEAT0=1008;
const STEM_BOT=1525, TRAVEL=140;  // grads = 3/5 of the 234 plate, centered
const STOP=217;  // measured plate-to-lower-casing gap: the lower travel stop
                 // (off the valve, over-stroke ends metal-on-metal here)
const D = R._dia;

// --- travel indicator scale: 0 at stem-bottom rest, 3/4 at +60px, OPEN at 0 ---
(function(){
  // HARD GEOMETRY: the scale plate keeps its measured size exactly
  // (111 x 234, from the ground-truth mask). Only its POSITION moves so the
  // 0 graduation aligns with the stem bottom at rest.
  const w=111, h=234, x=848;
  const y = STEM_BOT - 47;             // (234-140)/2: grads centered on the plate
  let s = `<rect class="prism" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;
  for(let i=0;i<=6;i++){
    const ty = STEM_BOT + TRAVEL*i/6;
    const long = (i%2===0);
    s += `<line class="tick" x1="${x+8}" y1="${ty}" x2="${x+8+(long?26:15)}" y2="${ty}"/>`;
    if(long) s += `<text class="lbl" x="${x+42}" y="${ty+5}">${['0','1/4','1/2','3/4'][i/2]}</text>`;
  }
  s += `<text class="lbl" x="${x+8}" y="${STEM_BOT-16}" font-size="14">OPEN &#9650;</text>`;
  document.getElementById('g-scale').innerHTML = s;
})();

// --- stem threads: bottom ~1 inch (80px) ---
(function(){
  let s='';
  for(let y=STEM_BOT-80; y<=STEM_BOT-6; y+=11){
    s+=`<line class="sp-thread" x1="706" y1="${y+4}" x2="779" y2="${y-4}"/>`;
  }
  document.getElementById('g-stem-threads').innerHTML=s;
})();

const backG=document.getElementById('sp-spring-back');
const frontG=document.getElementById('sp-spring-front');
function spring(topY, botY){
  const n=NHALF, pitch=(botY-topY-WIRE)/n;
  let back='', front='';
  front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA-HALFW*0.55}" y1="${topY+WIRE/2}" x2="${CXA+HALFW*0.7}" y2="${topY+WIRE/2}"/>`;
  for(let i=0;i<n;i++){
    const y0=topY+WIRE/2+i*pitch, y1=y0+pitch;
    if(i%2===0) back+=`<line class="sp-coil sp-coil-back" stroke-width="${WIRE*0.92}" x1="${CXA+HALFW}" y1="${y0}" x2="${CXA-HALFW}" y2="${y1}"/>`;
    else front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA-HALFW}" y1="${y0}" x2="${CXA+HALFW}" y2="${y1}"/>`;
  }
  const ye=topY+WIRE/2+n*pitch;
  front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA-HALFW*0.7}" y1="${ye}" x2="${CXA+HALFW*0.55}" y2="${ye}"/>`;
  backG.innerHTML=back; frontG.innerHTML=front;
}
function adjThreads(offset){
  // threads shown ON the adjuster face across its full threaded extent
  // (top of the adjuster down to the wrench flats), clipped to its exact
  // painted outline; the pattern scrolls as the adjuster turns.
  let s=''; const pitch=13, TOP=1068, BOT=1338;
  for(let y=TOP-pitch+((offset%pitch)+pitch)%pitch; y<BOT; y+=pitch){
    if(y<TOP-6) continue;
    s+=`<line class="sp-thread" x1="685" y1="${y+3}" x2="800" y2="${y-3}"/>`;
  }
  document.getElementById('sp-adj-threads').innerHTML=s;
}
function diaphragm(press){
  // HARD GEOMETRY: the measured centerline is rendered VERBATIM at rest and
  // warped piecewise under stroke — never re-approximated.
  //  fixed: clamp legs through the molded down-curves (x <= 275, x >= 1210)
  //  pivot: inside edge of each down-curve (275 / 1210)
  //  inner walls (275-305, 1180-1210): lean down about the pivot
  //  center (305-1180): rides the plate, straight down by press
  // rolling-diaphragm kinematics: the molded fold ROLLS DOWN at half the
  // plate rate (correct for longer strokes); clamps stay fixed; the
  // measured points are still warped verbatim, never re-approximated.
  const s = press;
  function dyLeft(x){
    if(x<=215) return 0;
    if(x<260)  return s*0.5*(x-215)/45;     // outer wall feeding the roll
    if(x<=285) return s*0.5;                 // fold bottom, rolling down
    if(x<305)  return s*(0.5+0.5*(x-285)/20);// inner wall up to the plate
    return s;                                // plate section
  }
  function dyRight(x){
    if(x>=1270) return 0;
    if(x>1225)  return s*0.5*(1270-x)/45;
    if(x>=1200) return s*0.5;
    if(x>1180)  return s*(0.5+0.5*(1200-x)/20);
    return s;
  }
  // drape: rubber cannot pass metal — each warped point is limited by the
  // casing's measured inner surface (floor profile), so the outer wall lays
  // down against the casing as the fold rolls instead of passing through it.
  const pts = D.centerline.map(([x,y],i)=>{
    let yy = y + (x < 742.5 ? dyLeft(x) : dyRight(x));
    const fl = D.floor[i];
    if(fl !== null) yy = Math.min(yy, fl - D.band/2 - 1);
    return [x, yy];
  });
  const d = 'M ' + pts.map(p=>p[0]+','+p[1].toFixed(1)).join(' L ');
  document.getElementById('p-dia').setAttribute('d', d);
}
(function(){
  let s='';
  for(let y=2032; y<2050; y+=7)
    s+=`<line class="sp-thread" x1="645" y1="${y+2}" x2="840" y2="${y-2}"/>`;
  document.getElementById('boss-threads').innerHTML=s;
})();
// name-it, spotlight-it: named parts stay lit, the rest dim
const FOCUSABLE=['p-upper','p-lower','p-yoke','g-plate','p-dia','g-stem',
 'sp-spring-back','sp-spring-front','sp-seat-g','sp-adj-g','g-scale',
 'g-vgrp','g-conn','g-valve-sil','g-mount','g-mount-back'];
const SPRING=['sp-spring-back','sp-spring-front'];
function focus(...ids){
  const flat=ids.flat();
  FOCUSABLE.forEach(f=>{ const el=document.getElementById(f); if(!el) return;
    el.style.opacity = flat.length===0 ? '' : (flat.includes(f) ? '' : '0.25');
  });
}
window.showVerMark = function(on){
  document.getElementById('g-vermark').style.display = on ? '' : 'none';
  if(!on) document.getElementById('g-verbracket').style.display='none';
};
window.showVerBracket = function(on){
  document.getElementById('g-verbracket').style.display = on ? '' : 'none';
};
window.showTravelMark = function(on){
  document.getElementById('g-travelmark').style.display = on ? '' : 'none';
};
function setPacking(){
  // ENVIRO-SEAL systems are live-loaded: Belleville stack appears and the
  // flange rides up on it; plain PTFE / graphite flange bears on the follower
  const v = document.getElementById('packing').value;
  const live = (v === '0.75' || v === '1.0');
  document.getElementById('g-belleville').style.display = live ? '' : 'none';
  document.getElementById('g-pflange').setAttribute('transform', live ? 'translate(0,-42)' : '');
}
const PB = { connected: true, nutsDy: 0, scaleDy: 0, connShown: true };
function setValve(on){
  document.getElementById('g-valve-sil').style.display = on ? '' : 'none';
  document.getElementById('g-mount').style.display = on ? '' : 'none';
  document.getElementById('g-mount-back').style.display = on ? '' : 'none';
  document.getElementById('g-vgrp').style.display = on ? '' : 'none';
  document.getElementById('g-conn').style.display = (on && PB.connShown) ? '' : 'none';
  document.getElementById('asm').setAttribute('viewBox', on ? '0 0 1480 2620' : '0 0 1480 2250');
}
let strokeState = 0;   // remembered position: packing friction is hysteretic
function update(){
  const adj=+document.getElementById('adj').value;   // seat offset, px (+ = tighter)
  const P=+document.getElementById('press').value;   // psig, 0-18
  const coupled = PB.connected && document.getElementById('valve').checked;
  // packing friction opposes motion BOTH ways, so it widens the start point
  // going down and holds the stem going back up. Zero when off the valve --
  // which is exactly why bench set is performed with zero valve forces.
  const Ff = coupled ? +document.getElementById('packing').value : 0;
  // bench-set physics: preload shifts the travel window. 8 px of seat = 1 psi.
  const P0 = 3 + adj/8;                              // cracking pressure
  // off the valve there is no load to stop over-stroke at rated travel:
  // motion continues past 3/4 in until the plate lands on the lower casing.
  // coupled, the plug seats at rated travel: 3/4 in IS the down-stop.
  // Only off the valve can the mechanism over-stroke to the casing (STOP).
  const LIM = coupled ? TRAVEL : STOP;
  const dn = Math.min(Math.max(0, (P-P0-Ff)/8) * TRAVEL, LIM); // enough force to move down
  const up = Math.min(Math.max(0, (P-P0+Ff)/8) * TRAVEL, LIM); // little enough to move up
  if (strokeState > LIM) strokeState = LIM;
  if (strokeState < dn) strokeState = dn;
  else if (strokeState > up) strokeState = up;
  // "held" = friction is actually displacing the stem from its
  // frictionless position, not merely present
  const frictionless = Math.min(Math.max(0, (P-P0)/8) * TRAVEL, LIM);
  const held = Ff > 0 && Math.abs(strokeState - frictionless) > 0.5;
  const stroke = strokeState;
  const onStop = !coupled && stroke >= STOP;
  const seated = coupled && stroke >= TRAVEL;
  document.getElementById('fricout').textContent = coupled
    ? ` friction: first movement now at ${(P0+Ff).toFixed(1)} psig${held ? ' | stem HELD by packing friction' : ''}`
    : '';
  spring(TOP0+stroke, SEAT0-adj);
  diaphragm(stroke);
  document.getElementById('g-stem').setAttribute('transform',`translate(0,${stroke})`);
  document.getElementById('g-plate').setAttribute('transform',`translate(0,${stroke})`);
  // connected: stems move as one. Pre-connection: the valve stem sits
  // SEATED (plug on seat) = 140px below the painted assembled-at-rest
  // frame, and does not follow the actuator.
  document.getElementById('g-conn').setAttribute('transform',`translate(0,${stroke})`);
  document.getElementById('g-vgrp').setAttribute('transform',
    `translate(0,${PB.connected ? stroke : 140})`);
  document.getElementById('g-dn').setAttribute('transform',`translate(0,${PB.nutsDy})`);
  document.getElementById('g-scale').setAttribute('transform',`translate(0,${PB.scaleDy})`);
  document.getElementById('sp-seat-g').setAttribute('transform',`translate(0,${-adj})`);
  document.getElementById('sp-adj-g').setAttribute('transform',`translate(0,${-adj})`);
  adjThreads(adj*2);
  document.getElementById('adjout').textContent=`preload ${(adj/8>=0?'+':'')}${(adj/8).toFixed(1)} psi | travel window ${P0.toFixed(1)}-${(P0+8).toFixed(1)} psig`;
  document.getElementById('pressout').textContent=`${P.toFixed(1)} psig | travel ${(stroke*0.75/TRAVEL).toFixed(2)} in`
    + (onStop ? ' | LOWER TRAVEL STOP - plate on casing'
       : seated ? ' | PLUG SEATED - valve closed'
       : (stroke>TRAVEL ? ' (past rated)' : ''));
}
// ================= scripted SOP playback =================
const TIMING = __TIMINGJSON__;
const audio = document.getElementById('pb-audio');
const capEl = document.getElementById('cap');
let playing=false, curSeg=-1, seg8sw=false, firedCues=[];
function setPress(v){ document.getElementById('press').value=v; }
function setAdj(v){ document.getElementById('adj').value=v; }
function hl(...ids){
  for (const g of document.querySelectorAll('#nameplate g')) g.classList.remove('np-hl');
  ids.forEach(id=>document.getElementById(id).classList.add('np-hl'));
}
function pulse(id){ const el=document.getElementById(id);
  el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); }
function benchReset(){
  document.getElementById('valve').checked=false;
  PB.connected=false; PB.connShown=false; PB.nutsDy=0; PB.scaleDy=0;
  setValve(false); showTravelMark(false); showVerMark(false); setAdj(0); setPress(0); hl(); focus();
}
const CHOREO = [
 // 1. air enters upper casing, presses diaphragm + plate
 {enter(){ benchReset(); },
  cues:[[0.18,()=>focus('p-upper')],[0.55,()=>focus('p-dia')],
        [0.8,()=>focus('p-dia','g-plate')]]},
 // 2. plate presses down, compresses spring against seat (motion happens)
 {enter(){ focus('g-plate',SPRING,'sp-seat-g'); },
  cues:[[0.55,()=>focus(SPRING,'sp-seat-g')]],
  tick(p){ setPress((8*Math.min(1,p*1.15)).toFixed(2)); }},
 // 3. air in, stem down; air out, spring returns
 {enter(){ focus('g-stem',SPRING); },
  cues:[[0.5,()=>focus(SPRING,'g-stem','g-plate','p-dia')]],
  tick(p){ let v; if(p<0.4) v=11*(p/0.4); else if(p<0.52) v=11;
           else v=Math.max(0,11*(1-(p-0.52)/0.4)); setPress(v.toFixed(2)); }},
 // 4. adjuster raises seat, compresses spring upwards; loosening backs off
 {enter(){ setPress(0); focus('sp-adj-g','sp-seat-g',SPRING); },
  tick(p){ let a; if(p<0.3) a=20*(p/0.3); else if(p<0.5) a=20;
           else if(p<0.8) a=20-44*((p-0.5)/0.3); else a=-24;
           setAdj(Math.round(a)); }},
 // 5. bench set defined; nameplate cited
 {enter(){ setAdj(0); setPress(0); focus(); },
  cues:[[0.1,()=>hl('np-benchset')],[0.35,()=>hl('np-benchset','np-travel')],
        [0.62,()=>hl('np-benchset','np-travel','np-size')],[0.9,()=>hl()]]},
 // 6. prove it on the bench: off valve, stem at top, air rigged
 {enter(){ hl(); focus(); pulse('g-stem'); },
  cues:[[0.6,()=>pulse('pressrow')]]},
 // 7. raise from zero, first movement at exactly 3
 {enter(){ focus('g-stem'); }, tick(p){ setPress((3.4*p).toFixed(2)); }},
 // 8. too tight / too loose diagnosis
 {enter(){ seg8sw=false; setAdj(12); setPress(0); focus('sp-adj-g','sp-seat-g','g-stem'); },
  tick(p){ if(p<0.45){ setPress((6*p/0.45).toFixed(2)); }
           else if(p<0.5){ setPress(0); }
           else { if(!seg8sw){ setAdj(-12); seg8sw=true; }
                  setPress((4*(p-0.5)/0.5).toFixed(2)); } }},
 // 9. to exactly 11; over-stroke caution to the casing; mark stem end at 11
 {enter(){ setAdj(0); setPress(3); focus(); },
  cues:[[0.42,()=>focus('g-plate','p-lower')],[0.72,()=>focus()],
        [0.84,()=>{ showVerMark(true); pulse('g-vermark'); }]],
  tick(p){ let v; if(p<0.28) v=3+8*(p/0.28); else if(p<0.4) v=11;
           else if(p<0.58) v=11+7*((p-0.4)/0.18);
           else if(p<0.74) v=18-7*((p-0.58)/0.16); else v=11;
           setPress(v.toFixed(2)); }},
 // 10. lower to 3, measure mark-to-stem-end = 3/4
 {cues:[[0.42,()=>{ showVerBracket(true); }],[0.6,()=>focus('g-stem','g-scale')]],
  tick(p){ if(p<0.4) setPress((11-8*(p/0.4)).toFixed(2)); }},
 // 11. matches -> complete
 {enter(){ setPress(3); focus(); },
  cues:[[0.25,()=>hl('np-travel')],[0.8,()=>hl()]]},
 // 12. now the valve enters the picture
 {enter(){ hl(); showVerMark(false); PB.connected=false; PB.connShown=false;
           PB.nutsDy=34; setPress(0); setValve(true); showTravelMark(false);
           focus('g-vgrp','g-valve-sil','g-mount','g-mount-back'); }},
 // 13. push the valve stem down to the seat
 {enter(){ focus('g-vgrp'); pulse('g-vgrp'); }},
 // 14. mark the valve stem 3/4 below the actuator stem end
 {enter(){ focus(); showTravelMark(true); pulse('g-travelmark'); }},
 // 15. actuate down to the mark
 {tick(p){ setPress(Math.min(11,11.4*p).toFixed(2)); }},
 // 16. clamp the connector halves, tighten evenly
 {enter(){ PB.connShown=true; setValve(true); focus('g-conn','g-stem','g-vgrp'); pulse('g-conn'); },
  cues:[[0.6,()=>{ PB.connected=true; document.getElementById('valve').checked=true;
                   showTravelMark(false); }]]},
 // 17. run the locknuts up to the disk
 {enter(){ focus('g-vgrp','g-conn'); }, tick(p){ PB.nutsDy=34*(1-p); }},
 // 18. stroke open to closed, verify, align scale
 {enter(){ focus(); },
  cues:[[0.35,()=>focus('g-scale','g-vgrp','g-stem')],[0.85,()=>focus()]],
  tick(p){ if(p<0.3){ setPress((11*(1-p/0.3)).toFixed(2)); PB.scaleDy=0; }
           else if(p<0.5){ setPress(0); PB.scaleDy=36*((p-0.3)/0.2); }
           else { PB.scaleDy=36; setPress((Math.min(12,12*(p-0.5)/0.5)).toFixed(2)); } }},
];
function pbFrame(){
  if(!playing) return;
  const t = audio.currentTime;
  let i = TIMING.length-1;
  while(i>0 && TIMING[i].start > t) i--;
  if(i !== curSeg){ curSeg=i; capEl.textContent = TIMING[i].text;
    firedCues = []; if(CHOREO[i] && CHOREO[i].enter) CHOREO[i].enter(); }
  const p = Math.min(1, (t-TIMING[i].start)/TIMING[i].duration);
  if(CHOREO[i] && CHOREO[i].cues){
    CHOREO[i].cues.forEach((c,ci)=>{ if(p>=c[0] && !firedCues.includes(ci)){
      firedCues.push(ci); c[1](); } }); }
  if(CHOREO[i] && CHOREO[i].tick) CHOREO[i].tick(p);
  update();
  requestAnimationFrame(pbFrame);
}
function pbStop(){
  playing=false; audio.pause();
  document.getElementById('pb-play').classList.remove('playing');
  document.getElementById('pb-play').innerHTML='&#9654; Play the SOP';
  document.getElementById('pb-status').textContent='';
  capEl.textContent='';
  setPress(0); focus(); hl(); update();
}
document.getElementById('pb-play').addEventListener('click', ()=>{
  if(playing){ pbStop(); return; }
  playing=true; curSeg=-1;
  audio.currentTime=0;
  audio.play().then(()=>{
    document.getElementById('pb-play').classList.add('playing');
    document.getElementById('pb-play').innerHTML='&#9632; Stop';
    requestAnimationFrame(pbFrame);
  }).catch(e=>{ playing=false;
    document.getElementById('pb-status').textContent=' audio failed to load';});
});
audio.addEventListener('ended', pbStop);
// test hook: ?pbtest=N applies segments 1..N without audio
const q=new URLSearchParams(location.search);
if(q.get('pbtest')){
  // deferred so it runs AFTER the page's own startup setValve/update calls
  setTimeout(()=>{
    const n=+q.get('pbtest');
    for(let i=0;i<n && i<CHOREO.length;i++){
      if(CHOREO[i].enter) CHOREO[i].enter();
      if(CHOREO[i].cues) CHOREO[i].cues.forEach(c=>c[1]());
      if(CHOREO[i].tick) CHOREO[i].tick(1);
    }
    capEl.textContent = TIMING[n-1] ? TIMING[n-1].text : '';
    update();
  }, 60);
}
if(q.get('adj'))document.getElementById('adj').value=q.get('adj');
if(q.get('press'))document.getElementById('press').value=q.get('press');
if(q.get('valve'))document.getElementById('valve').checked=true;
if(q.get('packing'))document.getElementById('packing').value=q.get('packing');
if(q.get('mark'))window.showTravelMark(true);
document.getElementById('valve').addEventListener('change',()=>{
  PB.connected = document.getElementById('valve').checked;
  PB.connShown = true; PB.nutsDy = 0;
  setValve(document.getElementById('valve').checked);update();});
document.getElementById('packing').addEventListener('change',()=>{setPacking();update();});
setPacking();
setValve(document.getElementById('valve').checked);
document.getElementById('adj').addEventListener('input',update);
document.getElementById('press').addEventListener('input',update);
update();
</script>
"""
html = html.replace("__PARTSJS__", parts_js)
html = html.replace("__TIMINGJSON__", timing_js)
open("../657-refined.html", "w", encoding="utf-8").write(html)
print("written", len(html))
