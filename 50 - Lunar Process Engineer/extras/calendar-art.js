/* ==================================================================
   ART — backdrops and subjects

   EVERY SUBJECT IS DRAWN FROM A REAL CUTAWAY in the vault's Source
   Library, not from memory. The figures used, all from the Control Valve
   Sourcebook (Oil & Gas) extracted-figures set:

     657 / 667   ch2-fig1-657-667-spring-diaphragm-cutaways
     V150        ch1-fig7-v150-v200-v300-vee-ball-cutaway
     ET          ch1-fig2-et-globe-valve-cutaway
     8560        ch1-fig9-8560-high-performance-butterfly-cutaway
     Baumann     ch1-fig5-baumann-24000-little-scotty-valve
     DVC6200     ch1-fig5 (same photo, instrument in detail)
     V500        ch1-fig8-v500-eccentric-plug-valve-cutaway
     NotchFlo    ch12-fig5-notchflo-dst-trim-cutaway
     WhisperFlo  ch10-fig5-et-class300-whisperflo-spoked-plug
     EHD         ch1-fig4-ehd-high-pressure-globe-cutaway
     V250        ch1-fig6-v250-high-pressure-ball-valve-cutaway

   Things the first, invented pass got structurally wrong and which the
   figures corrected: the 657 casing is a shallow pressed dish with bolted
   rim lugs, not a hemisphere, and its yoke is an open-sided column flaring
   to a base ring, not an A-frame; rotary valves (V150, V500, 8560, V250)
   all carry a LONG horizontal SPLINED shaft through a bolted packing box,
   not a short vertical stub; and an ET body is a stepped box with raised
   end flanges, not a bulbous sphere.

   PAINT: --fisher-green #2B5D3B, the vault's own token for valve body and
   actuator fill, sampled from real valve photos (Style Guide §5). It is
   deliberately not --emerson-green #62BB46, which is a brand accent with
   no hardware role.
   ================================================================== */

const GREEN      = '#2B5D3B';
const GREEN_LIT  = '#4E8C5F';
const GREEN_HI   = '#6FAE80';
const GREEN_DARK = '#17351F';
const GREEN_DEEP = '#0D2113';
const STEEL      = '#8A949D', STEEL_LIT = '#C8D0D6', STEEL_DARK = '#454E56';
const IRON       = '#39424B', IRON_DARK = '#20262C';

/* a body shaded across its width, light from the upper right */
function barrel(c,x,y,w,h,dark,base,lit,r){
  const g=c.createLinearGradient(x,0,x+w,0);
  g.addColorStop(0,dark); g.addColorStop(.34,base);
  g.addColorStop(.80,lit); g.addColorStop(1,base);
  c.fillStyle=g;
  if(r){ c.beginPath(); c.roundRect(x,y,w,h,r); c.fill(); } else c.fillRect(x,y,w,h);
}
const green = (c,x,y,w,h,r)=>barrel(c,x,y,w,h,GREEN_DARK,GREEN,GREEN_LIT,r);
const steel = (c,x,y,w,h,r)=>barrel(c,x,y,w,h,STEEL_DARK,STEEL,STEEL_LIT,r);

function hexNut(c,x,y,s){
  c.fillStyle=IRON; c.beginPath();
  for(let i=0;i<6;i++){ const a=i/6*6.2832+0.52;
    c[i?'lineTo':'moveTo'](x+Math.cos(a)*s, y+Math.sin(a)*s*0.86); }
  c.closePath(); c.fill();
  c.fillStyle='#5A646E'; c.fillRect(x-s*0.7,y-s*0.75,s*1.4,s*0.24);
}
function stud(c,x,y,h){
  c.fillStyle=STEEL_DARK; c.fillRect(x-2.6,y-h,5.2,h);
  c.fillStyle='#6E7A84';
  for(let i=0;i<h;i+=3) c.fillRect(x-2.6,y-h+i,5.2,1.2);
  hexNut(c,x,y-h+7,5.5);
}
/* a raised, bolted flange seen edge-on */
function rflange(c,cx,cy,w,t,bolts){
  steel(c,cx-w/2,cy-t/2,w,t,2);
  c.fillStyle=STEEL_LIT; c.fillRect(cx-w/2,cy-t/2,w,1.5);
  if(bolts!==false){ c.fillStyle=IRON_DARK;
    for(let i=-1;i<=1;i+=2) c.beginPath(), c.arc(cx+i*(w/2-7),cy,2.6,0,7), c.fill(); }
}
/* the splined end every rotary valve shaft has */
function splined(c,x,y,len,d){
  steel(c,x,y-d/2,len,d,1);
  c.fillStyle=STEEL_DARK;
  for(let i=0;i<len;i+=4) c.fillRect(x+i,y-d/2,1.8,d);
  c.fillStyle='rgba(255,255,255,.25)'; c.fillRect(x,y-d/2,len,1.4);
}
/* a bolted packing box on a rotary body: raised boss, follower, two bolts */
function packingBox(c,x,y,w,h){
  green(c,x,y-h/2,w,h,2);
  steel(c,x+w*0.42,y-h/2-9,w*0.5,9,1);               // follower
  hexNut(c,x+w*0.52,y-h/2-13,5); hexNut(c,x+w*0.82,y-h/2-13,5);
  c.fillStyle=GREEN_DEEP; c.fillRect(x,y-h/2,w,2);
}
function shadowOn(c,x,y,rx,ry,a){
  c.save(); c.globalAlpha=a===undefined?.3:a; c.fillStyle='#000';
  c.beginPath(); c.ellipse(x,y,rx,ry,0,0,7); c.fill(); c.restore();
}

/* ---------------- BACKDROPS ----------------
   Twelve settings, one per month, each chosen for the product's service.
   A calendar with the same beach twelve times is a template, not a shoot. */
const BACK = {};
const band = (c,W,y0,y1,stops)=>{
  const g=c.createLinearGradient(0,y0,0,y1);
  stops.forEach((s,i)=>g.addColorStop(i/(stops.length-1),s));
  c.fillStyle=g; c.fillRect(0,y0,W,y1-y0);
};
const disc = (c,x,y,r,col,a)=>{ c.save(); c.globalAlpha=a===undefined?1:a;
  c.fillStyle=col; c.beginPath(); c.arc(x,y,r,0,7); c.fill(); c.restore(); };
const ridge = (c,W,yBase,amp,col,seed)=>{             // a deterministic skyline
  c.fillStyle=col; c.beginPath(); c.moveTo(0,yBase);
  let s=seed;
  for(let x=0;x<=W;x+=W/22){ s=(s*9301+49297)%233280;
    c.lineTo(x, yBase - amp*(0.35+0.65*(s/233280))); }
  c.lineTo(W,yBase*2); c.lineTo(0,yBase*2); c.closePath(); c.fill();
};

BACK.beach = (c,W,H)=>{                               // JAN - the cover-girl shot
  band(c,W,0,H*0.62,['#2A2A52','#7A3B62','#D9693F','#F0A357']);
  disc(c,W*0.74,H*0.40,H*0.26,'#FFD9A0',.18);
  disc(c,W*0.74,H*0.40,H*0.10,'#FFE6B8',1);
  band(c,W,H*0.62,H*0.80,['#1A5668','#0E3B4B']);
  c.fillStyle='rgba(255,214,160,.45)';
  for(let i=0;i<30;i++){ const y=H*0.62+Math.pow(i/30,1.8)*(H*0.18);
    c.fillRect(W*0.74-(14+i*3.2)/1, y, 28+i*6, 1.2); }
  band(c,W,H*0.80,H,['#E8CFA6','#C19C6B']);
};
BACK.alpine = (c,W,H)=>{                              // FEB - the cold twin
  band(c,W,0,H*0.70,['#102038','#24415F','#5B7A96','#B9C9D6']);
  disc(c,W*0.22,H*0.22,H*0.07,'#EAF2F8',.9);
  ridge(c,W,H*0.70,H*0.42,'#2C4258',7);
  ridge(c,W,H*0.76,H*0.26,'#44607A',31);
  c.fillStyle='#E9F1F7'; c.fillRect(0,H*0.80,W,H*0.20);
  c.fillStyle='#CBD9E4';
  for(let i=0;i<70;i++){ const x=(i*149)%W, y=H*0.80+((i*83)%(H*0.2));
    c.fillRect(x,y,2,2); }
};
BACK.mill = (c,W,H)=>{                                // MAR - pulp and steam
  band(c,W,0,H*0.74,['#0B2018','#12382A','#2B6B4A','#71A977']);
  for(let i=0;i<9;i++){                               // steam columns
    const x=W*(0.06+i*0.11), w=W*0.06;
    c.fillStyle='rgba(222,240,228,'+(0.035+0.02*((i*7)%3))+')';
    c.fillRect(x,0,w,H*0.8);
  }
  ridge(c,W,H*0.74,H*0.18,'#0D2A1E',17);
  band(c,W,H*0.80,H,['#2A4A33','#17301F']);
};
BACK.poolside = (c,W,H)=>{                            // APR - turquoise, after dark
  band(c,W,0,H*0.50,['#0A1230','#17264F','#2B3F72']);
  c.fillStyle='#FF4D7A';                              // a neon sign, off-frame
  c.fillRect(W*0.06,H*0.13,W*0.17,3); c.fillRect(W*0.06,H*0.20,W*0.11,3);
  c.fillStyle='#2AE0D8'; c.fillRect(W*0.80,H*0.10,3,H*0.16);
  band(c,W,H*0.50,H*0.84,['#1FA9A0','#0E6F74']);      // the pool
  c.fillStyle='rgba(255,255,255,.22)';
  for(let i=0;i<22;i++){ const y=H*0.52+i*(H*0.30/22);
    c.fillRect(W*0.10+((i*53)%Math.round(W*0.5)), y, 40+((i*31)%70), 1.6); }
  band(c,W,H*0.84,H,['#C9C3B4','#8E897C']);           // the deck
};
BACK.desert = (c,W,H)=>{                              // MAY - noon, no shade
  band(c,W,0,H*0.66,['#3E7BC4','#79B0DC','#CFE2F0']);
  disc(c,W*0.80,H*0.14,H*0.055,'#FFFFFF',.95);
  c.fillStyle='#9A5A3C';                              // mesas
  [[0.04,0.17,0.13],[0.22,0.11,0.08],[0.74,0.20,0.15]].forEach(([x,w,h])=>{
    c.fillRect(W*x,H*(0.66-h),W*w,H*h);
    c.fillStyle='#B06C48'; c.fillRect(W*x,H*(0.66-h),W*w,3); c.fillStyle='#9A5A3C';
  });
  band(c,W,H*0.66,H,['#D99A62','#B2763F']);
  c.fillStyle='#8E5B30'; c.fillRect(0,H*0.84,W,2);    // the road
};
BACK.loch = (c,W,H)=>{                                // JUN - Little Scotty, at home
  band(c,W,0,H*0.58,['#4C5668','#79838F','#A9AFB2','#C8C6BC']);
  ridge(c,W,H*0.58,H*0.30,'#3F4F4A',53);
  ridge(c,W,H*0.64,H*0.17,'#56664F',11);
  band(c,W,H*0.70,H*0.88,['#55646A','#36464E']);      // the loch
  c.fillStyle='rgba(220,230,232,.18)';
  for(let i=0;i<26;i++) c.fillRect((i*137)%W, H*0.72+(i*6)%(H*0.15), 50, 1.2);
  band(c,W,H*0.88,H,['#5F6B4A','#3A4330']);           // heather bank
};
BACK.city = (c,W,H)=>{                                // JUL - the instrument's element
  band(c,W,0,H*0.78,['#07091A','#121A3A','#2A2050','#4A2A52']);
  const tw=[[0.03,.30,.07],[0.11,.44,.05],[0.17,.24,.08],[0.26,.52,.06],
            [0.33,.34,.09],[0.43,.60,.05],[0.50,.28,.07],[0.58,.46,.08],
            [0.67,.33,.06],[0.74,.56,.07],[0.82,.26,.09],[0.91,.42,.06]];
  tw.forEach(([x,h,w],n)=>{
    c.fillStyle='#0C1026'; c.fillRect(W*x,H*(0.78-h),W*w,H*h);
    for(let wy=H*(0.80-h); wy<H*0.76; wy+=7)
      for(let wx=W*x+3; wx<W*(x+w)-3; wx+=5)
        if((wx*7+wy*11+n)%4<2){ c.fillStyle=(wx+wy)%9<2?'#2AE0D8':'#FFC56A';
          c.fillRect(wx,wy,2,3); }
  });
  band(c,W,H*0.78,H,['#141A30','#080A16']);
  c.fillStyle='rgba(42,224,216,.14)'; c.fillRect(0,H*0.78,W,2);
};
BACK.terminal = (c,W,H)=>{                            // AUG - tank farm at dusk
  band(c,W,0,H*0.70,['#1B1E3A','#4A3158','#8A4350','#C86A47']);
  disc(c,W*0.18,H*0.50,H*0.07,'#F2A867',.85);
  c.fillStyle='#161B24';
  [[0.30,.12,.09],[0.46,.16,.11],[0.66,.13,.08],[0.82,.18,.10]].forEach(([x,w,h])=>{
    c.beginPath(); c.ellipse(W*(x+w/2),H*(0.70-h),W*w/2,H*0.018,0,Math.PI,0); c.fill();
    c.fillRect(W*x,H*(0.70-h),W*w,H*h);
  });
  for(let i=0;i<5;i++){ c.fillStyle='#161B24';        // a flare stack
    c.fillRect(W*0.58,H*(0.30+i*0.08),4,H*0.08); }
  c.fillStyle='#FF8C3A'; c.beginPath();
  c.moveTo(W*0.58,H*0.30); c.lineTo(W*0.572,H*0.24); c.lineTo(W*0.592,H*0.26); c.closePath(); c.fill();
  band(c,W,H*0.70,H,['#241F2C','#12101A']);
};
BACK.forest = (c,W,H)=>{                              // SEP - the quiet one
  band(c,W,0,H*0.82,['#C9D6CE','#9FB5A8','#6E8B7C','#44604F']);
  for(let L=0;L<4;L++){                               // receding tree lines
    const a=0.10+L*0.14, base=H*(0.56+L*0.08);
    c.fillStyle='rgba(18,38,26,'+a+')';
    for(let i=0;i<=16;i++){ const x=(i*W/16)+((L*37)%40);
      const th=H*(0.16+((i*L*13)%7)/40);
      c.beginPath(); c.moveTo(x,base); c.lineTo(x+W/34,base-th); c.lineTo(x+W/17,base);
      c.closePath(); c.fill(); }
  }
  c.fillStyle='rgba(255,255,255,.10)';                // shafts of light
  for(let i=0;i<5;i++){ c.save(); c.translate(W*(0.2+i*0.16),0); c.rotate(.12);
    c.fillRect(0,0,W*0.03,H*0.8); c.restore(); }
  band(c,W,H*0.82,H,['#43523F','#232B21']);
};
BACK.rapids = (c,W,H)=>{                              // OCT - high pressure drop
  band(c,W,0,H*0.42,['#2B3A46','#4C6273','#7E96A4']);
  ridge(c,W,H*0.42,H*0.20,'#2B3A33',29);
  band(c,W,H*0.42,H,['#5E8CA0','#2E5468','#17323F']);
  c.strokeStyle='rgba(255,255,255,.55)'; c.lineWidth=2.4;  // whitewater
  for(let i=0;i<34;i++){
    const y=H*(0.46+ (i%17)*0.032), x=((i*211)%W);
    c.beginPath(); c.moveTo(x,y);
    c.quadraticCurveTo(x+26,y-7,x+54,y+2); c.stroke();
  }
  c.fillStyle='rgba(255,255,255,.22)';
  for(let i=0;i<120;i++) c.fillRect((i*163)%W, H*0.44+((i*71)%(H*0.5)), 2,2);
};
BACK.powerhouse = (c,W,H)=>{                          // NOV - CL2500 weather
  band(c,W,0,H*0.74,['#14161E','#2A2C3A','#4A4352','#6B5A5E']);
  c.strokeStyle='rgba(220,230,255,.85)'; c.lineWidth=2;   // lightning
  c.beginPath(); c.moveTo(W*0.30,0); c.lineTo(W*0.26,H*0.18);
  c.lineTo(W*0.32,H*0.17); c.lineTo(W*0.25,H*0.40); c.stroke();
  c.fillStyle='#10131A';
  c.fillRect(W*0.04,H*0.30,W*0.10,H*0.44);            // cooling tower
  c.beginPath(); c.moveTo(W*0.70,H*0.74); c.lineTo(W*0.74,H*0.26);
  c.lineTo(W*0.84,H*0.26); c.lineTo(W*0.88,H*0.74); c.closePath(); c.fill();
  c.fillStyle='rgba(210,214,222,.18)';
  c.beginPath(); c.ellipse(W*0.79,H*0.22,W*0.09,H*0.07,0,0,7); c.fill();
  band(c,W,H*0.74,H,['#22242C','#101217']);
  c.strokeStyle='rgba(190,205,225,.22)'; c.lineWidth=1.4;  // rain
  for(let i=0;i<70;i++){ const x=(i*223)%W, y=(i*97)%H;
    c.beginPath(); c.moveTo(x,y); c.lineTo(x-5,y+16); c.stroke(); }
};
BACK.subsea = (c,W,H)=>{                              // DEC - 2220 psi of it
  band(c,W,0,H,['#0D3A52','#0A2B40','#06182A','#030C16']);
  c.fillStyle='rgba(160,220,240,.09)';                // light shafts from above
  for(let i=0;i<7;i++){ c.save(); c.translate(W*(0.08+i*0.13),0); c.rotate(.09);
    c.fillRect(0,0,W*0.035,H*0.72); c.restore(); }
  c.fillStyle='rgba(190,235,250,.30)';                // bubbles
  for(let i=0;i<42;i++){ const x=(i*271)%W, y=(i*139)%H, r=1+((i*7)%4);
    c.beginPath(); c.arc(x,y,r,0,7); c.fill(); }
  c.fillStyle='#04121F'; ridge(c,W,H*0.92,H*0.10,'#04121F',43);
};
