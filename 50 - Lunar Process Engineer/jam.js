/* ============================================================
   MUSIC + THE JAM INSTRUMENT
   Both lifted from level one's title screen so the tune and the pad are
   the ones already approved. The pad is an easter egg: it is reached by
   clicking the habitat's status lamp on the title, not shown outright.
   ============================================================ */
window.LPE_JAM=(function(){
'use strict';
const A=LPE.audio;
const JAM={armed:false, host:null};
const PAD_HTML="<div id=\"pad\">\r <span class=\"tag\">JAM</span>\r <div class=\"grp\"><span class=\"tag\">LEAD</span>\r <span class=\"kc\" data-k=\"7\">7<i>A</i></span><span class=\"kc\" data-k=\"8\">8<i>C</i></span><span class=\"kc\" data-k=\"9\">9<i>E</i></span></div>\r <span class=\"sep\">|</span>\r <div class=\"grp\"><span class=\"tag\">BASS</span>\r <span class=\"kc\" data-k=\"6\">6<i>C</i></span><span class=\"kc\" data-k=\"5\">5<i>A</i></span><span class=\"kc\" data-k=\"4\">4<i>G</i></span><span class=\"kc\" data-k=\"1\">1<i>F</i></span></div>\r <span class=\"sep\">|</span>\r <div class=\"grp\"><span class=\"tag\">KICK</span><span class=\"kc\" data-k=\"0\">0</span></div>\r <div class=\"grp\"><span class=\"tag\">SNARE</span><span class=\"kc\" data-k=\"dot\">.</span></div>\r <span class=\"sep\">|</span>\r <div class=\"grp\"><span class=\"tag\">LOOP</span>\r <span class=\"kc\" data-k=\"rec\">+<i>REC</i></span><span class=\"kc\" data-k=\"clr\">&minus;<i>CLR</i></span></div>";

const BASS=[110,0,0,0, 87.31,0,0,0, 130.81,0,0,0, 98.00,0,0,0];
const ARP =[220,261.63,329.63,261.63, 174.61,220,261.63,220,
            261.63,329.63,392.00,329.63, 196.00,246.94,293.66,246.94];
const MUS={timer:null,step:0,gain:null};

function musNote(freq,dur,vol,type){
  if(!A.ready||!A.on||!freq) return;
  const c=A.ctx,o=c.createOscillator(),g=c.createGain();
  o.type=type; o.frequency.value=freq;
  g.gain.setValueAtTime(0.0001,c.currentTime);
  g.gain.exponentialRampToValueAtTime(vol,c.currentTime+0.02);
  g.gain.exponentialRampToValueAtTime(0.0001,c.currentTime+dur);
  o.connect(g); g.connect(MUS.gain||A.ctx.destination); o.start(); o.stop(c.currentTime+dur+0.03);
}
function startMusic(){
  if(!A.ready||MUS.timer) return;
  MUS.gain=A.ctx.createGain(); MUS.gain.gain.value=0.5; MUS.gain.connect(A.ctx.destination);
  MUS.step=0;
  MUS.timer=setInterval(()=>{
    const s=MUS.step%16;
    if(s===0) loopBoundary();      // the music owns the grid the looper rides on
    musNote(BASS[s],0.85,0.10,'triangle');
    musNote(ARP[s],0.42,0.045,'square');
    MUS.step++;
  },380);
  LOOP.origin=A.ctx.currentTime;
  if(!LOOP.timer) LOOP.timer=setInterval(loopTick,15);
}
function stopMusic(){
  if(!MUS.timer) return;
  clearInterval(MUS.timer); MUS.timer=null;
  if(LOOP.timer){ clearInterval(LOOP.timer); LOOP.timer=null; }
  loopReleaseAll();
  if(MUS.gain){ const c=A.ctx; MUS.gain.gain.setTargetAtTime(0,c.currentTime,0.35); }
}

/* ============================================================
   PLAYABLE NUMPAD INSTRUMENT
   The loop stays simple on purpose so there is room to play over it.
   Everything here is pitched to sit inside A minor (Am F C G), so any
   combination lands in key \u2014 the lead notes are the tonic triad up high,
   which stay consonant across all four chords of the loop.
   ============================================================ */
/* Percussion is one-shot; lead and bass are held voices that sustain until
   the key comes up. Attacks are short LINEAR ramps from true zero \u2014 the old
   exponential ramps started at 0.0001 and spend most of their rise inaudibly
   quiet, which is what made the instrument feel laggy to play. */
/* 808-style drums, synthesised rather than sampled.
   The perceived-lateness fix is the CLICK: an onset is located by its high
   frequency content, and a pure sine sweeping down from 150Hz has none, so the
   ear registers it late no matter how fast the gain envelope is. A couple of
   milliseconds of high-passed noise on top puts the transient where the key
   press was. Both voices attack in ~1ms from true zero. */
function kick(){
  if(!A.ready||!A.on) return;
  const c=A.ctx,t=c.currentTime;
  // body: fast pitch drop into a long sine tail
  const o=c.createOscillator(), g=c.createGain();
  o.type='sine';
  o.frequency.setValueAtTime(132,t);
  o.frequency.exponentialRampToValueAtTime(46,t+0.045);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(0.50,t+0.0015);
  g.gain.exponentialRampToValueAtTime(0.0001,t+0.78);
  o.connect(g); g.connect(A.ctx.destination); o.start(t); o.stop(t+0.82);
  // click transient
  const cl=c.createBufferSource(); cl.buffer=A.noise; cl.loop=true;
  const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=2400;
  const cg=c.createGain();
  cg.gain.setValueAtTime(0.20,t);
  cg.gain.exponentialRampToValueAtTime(0.0001,t+0.016);
  cl.connect(hp); hp.connect(cg); cg.connect(A.ctx.destination);
  cl.start(t); cl.stop(t+0.03);
}
function snare(){
  if(!A.ready||!A.on) return;
  const c=A.ctx,t=c.currentTime;
  // bright noise \u2014 the snares
  const n=c.createBufferSource(); n.buffer=A.noise; n.loop=true; n.playbackRate.value=1.9;
  const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=1800;
  const ng=c.createGain();
  ng.gain.setValueAtTime(0,t);
  ng.gain.linearRampToValueAtTime(0.26,t+0.001);
  ng.gain.exponentialRampToValueAtTime(0.0001,t+0.15);
  n.connect(hp); hp.connect(ng); ng.connect(A.ctx.destination); n.start(t); n.stop(t+0.19);
  // two tuned shells, the 808 snare's characteristic body
  [[182,0.11],[331,0.07]].forEach(([f,v])=>{
    const o=c.createOscillator(), g=c.createGain();
    o.type='triangle'; o.frequency.setValueAtTime(f,t);
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(v,t+0.001);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.095);
    o.connect(g); g.connect(A.ctx.destination); o.start(t); o.stop(t+0.11);
  });
}
// Warble is a bandpass swept by an LFO (the vowel-ish, vocoder-leaning part)
// plus slow vibrato on two detuned saws. Runs until released.
function startLead(f){
  const c=A.ctx,t=c.currentTime,nodes=[];
  const out=c.createGain();
  out.gain.setValueAtTime(0,t);
  out.gain.linearRampToValueAtTime(0.085,t+0.006);
  out.connect(A.ctx.destination);
  const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=f*2.6; bp.Q.value=5;
  bp.connect(out);
  const lfo=c.createOscillator(), lg=c.createGain();
  lfo.frequency.value=6.2; lg.gain.value=f*1.7;
  lfo.connect(lg); lg.connect(bp.frequency); lfo.start(t); nodes.push(lfo);
  [-6,6].forEach(cents=>{
    const o=c.createOscillator();
    o.type='sawtooth'; o.frequency.value=f*Math.pow(2,cents/1200);
    const vib=c.createOscillator(), vg=c.createGain();
    vib.frequency.value=5.4; vg.gain.value=f*0.014;
    vib.connect(vg); vg.connect(o.frequency); vib.start(t); nodes.push(vib);
    o.connect(bp); o.start(t); nodes.push(o);
  });
  return {out,nodes};
}
/* Same voice as the lead, an octave-plus down: detuned saws through an
   LFO-swept bandpass. The bandpass strips the fundamental, which is fine for a
   lead but guts a bass, so a clean sine at the fundamental runs alongside it
   for weight. Both land on `out`, so one release fades the whole voice.

   Both numbers below were measured, not guessed, by rendering the voice in an
   OfflineAudioContext and comparing RMS against the lead:
     - sub at 0.30 leaves the saws carrying 65% of the voice's energy, so the
       warble stays the thing you hear. At 0.45 the sine took over (49%) and it
       stopped sounding like the lead at all.
     - peak 0.065 puts the bass ~1dB under the lead. Two earlier settings
       bracket it: the original square-wave version measured +8.8dB OVER the
       lead and swamped everything, and 0.045 then landed 4.4dB under, which
       was too shy \u2014 low frequencies read quieter than mids at equal RMS, so
       near-parity on the meter is about right in the ear. */
function startBass(f){
  /* A trombone with some air in it.
     The first version was one static sawtooth and it sat dead next to the
     lead, which is two detuned saws with a swept filter and vibrato. What
     was missing was movement and bite:
       - two saws 7 cents apart, so the partials beat against each other
       - a breath transient: the air column starting, not a clean switch-on
       - the filter opens to ~2.6 kHz, not f*9 (785 Hz at F2 - all body, no
         presence), so the harmonics that carry energy actually get through
       - three formants, not two: 520 body, 1150 nasal, 2300 bite
       - a slow gain shimmer, because a blown note is never perfectly steady
     Attack is 45ms - quick enough to have edge, slow enough to be blown.
     Levelled by measurement: the brighter voice came out +2 to +3 dB over
     the lead, so this sits it a touch ABOVE instead - the old one was a
     shade under and that is part of why it read as having no energy. */
  const c=A.ctx, t=c.currentTime, nodes=[];
  const out=c.createGain();
  out.gain.setValueAtTime(0,t);
  out.gain.linearRampToValueAtTime(0.023,t+0.045);
  out.gain.linearRampToValueAtTime(0.0185,t+0.30);
  out.connect(A.ctx.destination);

  const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.Q.value=2.1;
  lp.frequency.setValueAtTime(Math.max(180,f*1.5),t);
  lp.frequency.linearRampToValueAtTime(2600,t+0.07);     // the blow
  lp.frequency.linearRampToValueAtTime(1500,t+0.55);     // and it backs off
  const f1=c.createBiquadFilter(); f1.type='peaking'; f1.frequency.value=520;  f1.Q.value=1.2; f1.gain.value=11;
  const f2=c.createBiquadFilter(); f2.type='peaking'; f2.frequency.value=1150; f2.Q.value=1.5; f2.gain.value=7;
  const f3=c.createBiquadFilter(); f3.type='peaking'; f3.frequency.value=2300; f3.Q.value=1.8; f3.gain.value=5;
  lp.connect(f1); f1.connect(f2); f2.connect(f3); f3.connect(out);

  const oscs=[];
  [-7,7].forEach(cents=>{                                 // two, so they beat
    const o=c.createOscillator(); o.type='sawtooth';
    o.frequency.value=f*Math.pow(2,cents/1200);
    o.connect(lp); o.start(t); nodes.push(o); oscs.push({o,cents});
  });

  const vib=c.createOscillator(), vg=c.createGain();      // arrives late
  vib.frequency.value=5.4;
  vg.gain.setValueAtTime(0,t); vg.gain.setValueAtTime(0,t+0.26);
  vg.gain.linearRampToValueAtTime(f*0.006,t+0.65);
  vib.connect(vg); vib.start(t); nodes.push(vib);

  const shim=c.createOscillator(), sg=c.createGain();     // never perfectly steady
  shim.frequency.value=4.3; sg.gain.value=0.0012;
  shim.connect(sg); sg.connect(out.gain); shim.start(t); nodes.push(shim);

  if(A.noise){                                            // breath on the attack
    const n=c.createBufferSource(); n.buffer=A.noise; n.loop=true;
    const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=1700; bp.Q.value=0.9;
    const ng=c.createGain();
    ng.gain.setValueAtTime(0,t);
    ng.gain.linearRampToValueAtTime(0.010,t+0.03);
    ng.gain.exponentialRampToValueAtTime(0.0012,t+0.34);  // settles to a trace
    n.connect(bp); bp.connect(ng); ng.connect(out);
    n.start(t); nodes.push(n);
  }
  return {out,nodes,oscs,lp,vg,f};
}
function releaseVoice(v){
  if(!v||!A.ready) return;
  const c=A.ctx, r=c.currentTime;
  try{
    const now=v.out.gain.value;
    v.out.gain.cancelScheduledValues(r);
    v.out.gain.setValueAtTime(now,r);
    v.out.gain.linearRampToValueAtTime(0,r+0.09);
  }catch(_){}
  v.nodes.forEach(n=>{ try{ n.stop(r+0.12); }catch(_){} });
}

/* The loop is Am - F - C - G, so the bass gives exactly those four roots:
   F1 G1 A1 C2. An earlier mapping used A C E G, which had no F at all \u2014 the
   moment the loop reached the F chord there was nothing to land on.
   Laid out so pitch falls as you move left, and falls again dropping to the
   row below, which makes a descending run 6-5-4-1 (C A G F) a natural motion. */
const PAD={
  '7':{t:'lead',f:440,   n:'A'},   // A4  \
  '8':{t:'lead',f:523.25,n:'C'},   // C5   > A-minor triad, sits over all 4 chords
  '9':{t:'lead',f:659.25,n:'E'},   // E5  /
  '1':{t:'bass',f:87.31, n:'F'},   // F2  lowest
  '4':{t:'bass',f:98.00, n:'G'},   // G2
  '5':{t:'bass',f:110.0, n:'A'},   // A2
  '6':{t:'bass',f:130.81,n:'C'},   // C3
  '0':{t:'kick'},        '.':{t:'snare'},
};

const voices={};
function capOf(k){ return document.querySelector('.kc[data-k="'+(k==='.'?'dot':k)+'"]'); }
function padKeyFrom(e){
  if(e.code && e.code.startsWith('Numpad')){
    const tail=e.code.slice(6);
    if(tail==='Decimal') return '.';
    if(/^\d$/.test(tail)) return tail;
  }
  return /^[0-9.]$/.test(e.key) ? e.key : null;
}
function padDown(k){
  const hit=PAD[k]; if(!hit) return false;
  const el=capOf(k);
  if(hit.t==='kick'||hit.t==='snare'){
    (hit.t==='kick'?kick:snare)();
    recEv(k,true);
    if(el){ el.classList.add('lit'); setTimeout(()=>el.classList.remove('lit'),110); }
    return true;
  }
  if(voices[k] || TROMB_LIVE.has(k)) return true;   // already being held
  if(A.ready&&A.on){
    if(hit.t==='bass') TROMB_LIVE.down(k,hit.f);      // one slide, one note
    else voices[k]=startLead(hit.f);
  }
  recEv(k,true);
  if(el) el.classList.add('lit');
  return true;
}
function padUp(k){
  const hit=PAD[k];
  if(hit && hit.t==='bass'){ TROMB_LIVE.up(k); recEv(k,false); }
  else if(voices[k]){ releaseVoice(voices[k]); delete voices[k]; recEv(k,false); }
  const el=capOf(k); if(el) el.classList.remove('lit');
}
function releaseAllPad(){
  TROMB_LIVE.allUp();
  Object.keys(voices).forEach(padUp);
  document.querySelectorAll('.kc.lit').forEach(e=>e.classList.remove('lit'));
}

/* ============================================================
   LOOPER
   One loop is exactly one pass of the chord progression (16 steps), so a
   recorded part can never drift out of phase with the backing loop no matter
   how sloppily it was played in. Recording therefore does not begin the
   instant you hit REC \u2014 it arms, and starts on the next downbeat. That is the
   whole trick: you get a free count-in, and the loop seams line up by
   construction rather than by you being precise.

   Loop playback keeps its OWN voice registry. Sharing `voices` with the live
   keys would mean a recorded note and your finger on the same key fighting
   over one slot, and whichever released first would cut the other off.
   ============================================================ */
const CYCLE_SEC = 16 * 0.380;
const LOOP = {
  state:'empty',   // empty -> armed -> rec -> play
  ev:[],           // committed events: {t seconds into cycle, k, down}
  pend:[],         // events captured during the current recording pass
  origin:0,        // ctx time the current cycle began
  cursor:0,        // index into ev of the next event due
  voices:{},
  timer:null
};
function loopDown(k){
  const hit=PAD[k]; if(!hit) return;
  if(hit.t==='kick'||hit.t==='snare'){
    (hit.t==='kick'?kick:snare)();
    const el=capOf(k);
    if(el){ el.classList.add('loop'); setTimeout(()=>el.classList.remove('loop'),110); }
    return;
  }
  if(LOOP.voices[k] || TROMB_LOOP.has(k)) return;
  if(A.ready&&A.on){
    if(hit.t==='bass') TROMB_LOOP.down(k,hit.f);
    else LOOP.voices[k]=startLead(hit.f);
  }
  const el=capOf(k); if(el) el.classList.add('loop');
}
function loopUp(k){
  const hit=PAD[k];
  if(hit && hit.t==='bass') TROMB_LOOP.up(k);
  else if(LOOP.voices[k]){ releaseVoice(LOOP.voices[k]); delete LOOP.voices[k]; }
  const el=capOf(k); if(el) el.classList.remove('loop');
}
function loopReleaseAll(){
  TROMB_LOOP.allUp();
  Object.keys(LOOP.voices).forEach(loopUp);
  document.querySelectorAll('.kc.loop').forEach(e=>e.classList.remove('loop'));
}

/* Called by the music clock on every downbeat \u2014 the music owns the grid, so
   the looper cannot drift away from it. */
function commitTake(){
  if(!LOOP.pend.length) return;
  LOOP.ev=LOOP.ev.concat(LOOP.pend).sort((a,b)=>a.t-b.t);
  LOOP.pend=[];
}
function loopBoundary(){
  if(LOOP.state==='armed'){ LOOP.state='rec'; LOOP.pend=[]; }
  else if(LOOP.state==='rec'){
    commitTake();
    LOOP.state=LOOP.ev.length?'play':'empty';
  }
  LOOP.origin=A.ready?A.ctx.currentTime:0;
  LOOP.cursor=0;
  loopReleaseAll();      // also cleans up any note still held across the seam
  updateLoopUI();
}
function loopTick(){
  if(!A.ready||!A.on) return;
  if(LOOP.state!=='play'&&LOOP.state!=='rec') return;
  const pos=A.ctx.currentTime-LOOP.origin;
  while(LOOP.cursor<LOOP.ev.length && LOOP.ev[LOOP.cursor].t<=pos){
    const e=LOOP.ev[LOOP.cursor++];
    if(e.down) loopDown(e.k); else loopUp(e.k);
  }
}
/* Capture a live key press into the take. A note still held when the cycle
   ends simply has no matching release \u2014 loopBoundary clears it, which is the
   musically sensible outcome anyway. */
function recEv(k,down){
  if(LOOP.state!=='rec'||!A.ready) return;
  const t=A.ctx.currentTime-LOOP.origin;
  if(t>=0 && t<CYCLE_SEC) LOOP.pend.push({t,k,down});
}
function loopRec(){
  if(!A.ready) return;
  if(LOOP.state==='empty'||LOOP.state==='play'){
    // An overdub arms exactly like the first take. Dropping straight into 'rec'
    // here looks right but isn't: the take would open mid-bar and then close at
    // the very next downbeat, so the pass is over before you can play into it.
    LOOP.state='armed';
  } else if(LOOP.state==='armed'){
    LOOP.state=LOOP.ev.length?'play':'empty';      // tapped twice: stand down
  } else if(LOOP.state==='rec'){
    commitTake();                                  // bail early, but keep the take
    LOOP.state=LOOP.ev.length?'play':'empty';
  }
  updateLoopUI();
}
function loopClear(){
  LOOP.ev=[]; LOOP.pend=[]; LOOP.cursor=0; LOOP.state='empty';
  loopReleaseAll(); updateLoopUI();
}
function updateLoopUI(){
  const rec=document.querySelector('.kc[data-k="rec"]');
  if(rec){
    rec.classList.toggle('armed',   LOOP.state==='armed');
    rec.classList.toggle('recording',LOOP.state==='rec');
    rec.classList.toggle('lit',     LOOP.state==='play');
  }
  const h=document.getElementById('loopHint');
  if(h) h.textContent =
    LOOP.state==='armed' ? 'ARMED \u2014 recording starts on the next downbeat' :
    LOOP.state==='rec'   ? 'RECORDING \u2014 play; it captures one pass of the progression' :
    LOOP.state==='play'  ? 'LOOPING '+LOOP.ev.length+' notes \u2014 + to overdub \u00b7 \u2212 to erase' :
    '+ to record a 4-bar loop (starts on the downbeat) \u00b7 + again to overdub \u00b7 \u2212 to erase';
}
function loopKeyFrom(e){
  if(e.code==='NumpadAdd'||e.key==='+') return 'rec';
  if(e.code==='NumpadSubtract'||e.key==='-') return 'clr';
  return null;
}
// used by the clickable keycaps: press, then let go shortly after
function padFire(k){
  if(!padDown(k)) return false;
  if(PAD[k] && (PAD[k].t==='lead'||PAD[k].t==='bass')) setTimeout(()=>padUp(k),280);
  return true;
}


/* ---------- THE SLIDE ----------
   A trombone has one slide, so it plays one note and GLIDES between them.
   Giving every key its own voice made it a brass-ish organ; this makes it an
   instrument. Hold a bass key and press another and the pitch slides rather
   than retriggering - release the second and it slides back to the one still
   held. The glide is a touch longer for a wider interval, because a longer
   throw of the slide takes longer.                                         */
function Tromb(){
  let v=null, held=[];
  const glideTo=(f,from)=>{
    const c=A.ctx, t=c.currentTime;
    const jump=Math.abs(Math.log2(f/from));            // in octaves
    const gl=Math.min(0.26, 0.07+jump*0.30);
    v.oscs.forEach(({o,cents})=>{
      const target=f*Math.pow(2,cents/1200);
      o.frequency.cancelScheduledValues(t);
      o.frequency.setValueAtTime(o.frequency.value,t);
      o.frequency.exponentialRampToValueAtTime(target,t+gl);
    });
    v.lp.frequency.cancelScheduledValues(t);           // the horn re-blows a little
    v.lp.frequency.setValueAtTime(v.lp.frequency.value,t);
    v.lp.frequency.linearRampToValueAtTime(2200,t+gl*0.6);
    v.lp.frequency.linearRampToValueAtTime(1500,t+gl+0.35);
    v.f=f;
  };
  return {
    down(k,f){
      held=held.filter(h=>h.k!==k); held.push({k,f});
      if(v) glideTo(f, v.f); else v=startBass(f);
    },
    up(k){
      held=held.filter(h=>h.k!==k);
      if(!v) return;
      if(held.length) glideTo(held[held.length-1].f, v.f);
      else { releaseVoice(v); v=null; }
    },
    allUp(){ held=[]; if(v){ releaseVoice(v); v=null; } },
    has(k){ return held.some(h=>h.k===k); },
    get sounding(){ return !!v; },
    get pitch(){ return v ? v.oscs[0].o.frequency.value : 0; },   // read the slide
  };
}
const TROMB_LIVE=Tromb(), TROMB_LOOP=Tromb();

/* A bench tap. Script-scope consts are invisible to an injected test context,
   so audio behaviour could only ever be asserted by ear - which is how the
   bass got shipped 8.8 dB hot once already. This lets the slide, the levels
   and the voice count be measured from outside. */
window.JAM_BENCH={ A, TROMB_LIVE, TROMB_LOOP, startBass, startLead, releaseVoice,
                   get liveVoices(){ return Object.keys(voices); } };

/* ---- wiring ---- */
/* The lamp is a toggle: click it again and the strip goes away. */
function reveal(host){
  if(JAM.host){
    JAM.armed=false; releaseAllPad();
    JAM.host.remove(); JAM.host=null;
    return;
  }
  JAM.host=document.createElement('div'); JAM.host.id='jamHost';
  JAM.host.innerHTML=PAD_HTML+
    '<div class="hint" id="loopHint" style="margin-top:4px"></div>';
  host.appendChild(JAM.host);
  JAM.host.addEventListener('click',e=>{
    e.stopPropagation();
    const cap=e.target.closest('.kc'); if(!cap) return;
    const d=cap.dataset.k;
    if(d==='rec') return loopRec();
    if(d==='clr') return loopClear();
    padFire(d==='dot'?'.':d);
  });
  JAM.armed=true;
  updateLoopUI();
}
window.addEventListener('keydown',e=>{
  if(!JAM.armed) return;
  const k=padKeyFrom(e);
  if(k){ e.preventDefault(); if(!e.repeat) padDown(k); return; }
  const lk=loopKeyFrom(e);
  if(lk){ e.preventDefault(); if(!e.repeat){ lk==='rec'?loopRec():loopClear(); } }
});
window.addEventListener('keyup',e=>{
  if(!JAM.armed) return;
  const k=padKeyFrom(e); if(k){ e.preventDefault(); padUp(k); }
});
window.addEventListener('blur',()=>{ if(JAM.armed) releaseAllPad(); });

function closePad(){ if(JAM.host){ JAM.armed=false; releaseAllPad();
  JAM.host.remove(); JAM.host=null; } }
return {reveal, closePad, startMusic, stopMusic, releaseAllPad,
        teardown(){ JAM.armed=false; releaseAllPad(); stopMusic();
                    if(JAM.host){ JAM.host.remove(); JAM.host=null; } }};
})();
