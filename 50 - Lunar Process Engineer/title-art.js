/* Title art, lifted verbatim from level one so the game keeps the
   screen Franz already approved. Takes a context rather than looking up
   a canvas by id, which is the only change made to it. */
function LPE_TITLE(g){

  
  g.fillStyle='#05060c'; g.fillRect(0,0,320,200);
  // starfield
  for(let i=0;i<110;i++){
    const x=(i*73)%320, y=(i*131)%120;
    const b=[ '#2a3350','#4a5878','#8a97b8','#d6dcf0' ][i%4];
    g.fillStyle=b; g.fillRect(x,y,1,1);
  }
  // --- Earth: a full blue marble, not a crescent. From the lunar surface Earth
  //     hangs big and mostly lit; a crescent read as a moon, which is backwards.
  const ex=270, ey=44, er=17;
  g.save(); g.beginPath(); g.arc(ex,ey,er,0,Math.PI*2); g.clip();
  g.fillStyle='#1b4f8c'; g.fillRect(ex-er,ey-er,er*2,er*2);          // ocean
  g.fillStyle='#2a6fb0';                                              // shallow seas
  g.fillRect(ex-er,ey-6,er*2,5); g.fillRect(ex-er,ey+7,er*2,4);
  g.fillStyle='#3f7f4a';                                              // land
  g.fillRect(ex-12,ey-11,9,7); g.fillRect(ex-6,ey-5,7,9);
  g.fillRect(ex+3,ey-9,8,5);   g.fillRect(ex+5,ey+3,6,8);
  g.fillStyle='#5a9a5e'; g.fillRect(ex-10,ey-9,4,3); g.fillRect(ex+5,ey+5,3,3);
  // Clouds as scattered irregular patches. Drawing them as full-width bands put
  // long straight white stripes across the disc, which read as lines, not weather.
  g.fillStyle='#dfe8f2';
  [[-13,-11,5,2],[3,-10,4,2],[-14,-4,4,2],[7,-3,5,2],[-5,8,5,2],[-10,12,4,2]
  ].forEach(([ox,oy,w,h])=>g.fillRect(ex+ox,ey+oy,w,h));
  g.fillStyle='#f2f6fb';
  [[-10,-10],[8,3]].forEach(([ox,oy])=>g.fillRect(ex+ox,ey+oy,2,2));
  g.fillStyle='rgba(5,6,12,0.42)';                                    // terminator
  g.beginPath(); g.arc(ex+er-3,ey+3,er,0,Math.PI*2); g.fill();
  g.restore();
  g.strokeStyle='#5f86b8'; g.lineWidth=1;
  g.beginPath(); g.arc(ex,ey,er,0,Math.PI*2); g.stroke();

  // --- lunar surface: layered regolith with lit crater rims and cast shadow
  g.fillStyle='#43434b'; g.fillRect(0,132,320,68);
  g.fillStyle='#4e4e57'; g.fillRect(0,132,320,26);
  g.fillStyle='#39393f'; g.fillRect(0,176,320,24);
  g.fillStyle='#5c5c66';                                              // horizon lip
  for(let x=0;x<320;x+=2){
    const h=132+Math.round(Math.sin(x*0.07)*2.2+Math.sin(x*0.23)*1.4);
    g.fillRect(x,h,2,2);
  }
  [[42,154,14],[124,172,10],[236,160,16],[292,184,9],[168,190,12]].forEach(([x,y,r])=>{
    g.fillStyle='#34343a';                                            // crater floor
    g.beginPath(); g.ellipse(x,y,r,r*0.40,0,0,Math.PI*2); g.fill();
    g.strokeStyle='#6a6a75'; g.lineWidth=1;                           // lit rim, sun left
    g.beginPath(); g.ellipse(x,y,r,r*0.40,0,Math.PI*0.86,Math.PI*1.94); g.stroke();
    g.strokeStyle='#2b2b31';                                          // shadowed rim
    g.beginPath(); g.ellipse(x,y,r,r*0.40,0,Math.PI*1.94,Math.PI*0.86); g.stroke();
  });
  g.fillStyle='#55555e';                                              // scattered rock
  [[88,166],[200,150],[262,196],[20,188],[148,160]].forEach(([x,y])=>g.fillRect(x,y,2,2));

  // --- habitat: ribbed dome with a lit window band and an airlock
  const dx=66, dy=133, dr=31;
  g.fillStyle='#243039'; g.beginPath(); g.arc(dx,dy,dr,Math.PI,0); g.fill();
  g.fillStyle='#2c3b46'; g.beginPath(); g.arc(dx,dy,dr-6,Math.PI,0); g.fill();
  g.fillStyle='#b9872f';                                              // warm interior band
  g.save(); g.beginPath(); g.rect(dx-dr,dy-16,dr*2,8); g.clip();
  g.beginPath(); g.arc(dx,dy,dr-9,Math.PI,0); g.fill();
  g.restore();
  g.strokeStyle='#54707f'; g.lineWidth=1;                             // structural ribs
  for(let k=0;k<=4;k++){
    const a=Math.PI+k*(Math.PI/4);
    g.beginPath(); g.moveTo(dx,dy); g.lineTo(dx+Math.cos(a)*dr,dy+Math.sin(a)*dr); g.stroke();
  }
  g.beginPath(); g.arc(dx,dy,dr,Math.PI,0); g.stroke();
  g.beginPath(); g.arc(dx,dy,dr-11,Math.PI,0); g.stroke();
  g.fillStyle='#1b242b'; g.fillRect(dx+dr-6,dy-11,13,11);             // airlock
  g.strokeStyle='#54707f'; g.strokeRect(dx+dr-6,dy-11,13,11);
  g.fillStyle='#39ff6a'; g.fillRect(dx+dr+1,dy-8,2,2);                // status lamp
  g.strokeStyle='#54707f';                                            // mast, centred on the dome
  g.beginPath(); g.moveTo(dx,dy-dr); g.lineTo(dx,dy-dr-9); g.stroke();
  g.fillStyle='#ff5050'; g.fillRect(dx-1,dy-dr-12,3,3);               // beacon
  g.fillStyle='#2b3740'; g.fillRect(dx-dr-3,dy,dr*2+6,4);             // foundation skirt
  // Surface isolation valve \u2014 the hero object. A bare wheel floating on a stem
  // read as an unexplained sculpture, so it now sits on an actual valve body in
  // an actual pipe run, teed off the line that feeds the dome.
  const cx=238, cy=140, R=26;
  const pipeY=cy+32, pr=6;
  // The run crosses the whole frame: a transfer line passing through the site
  // with an isolation valve on it. Stopping it mid-frame left two bare ends
  // that read as a floating bar, and a regolith berm over them looked like a slab.
  g.fillStyle='#3d5468';
  g.fillRect(0,pipeY-pr,320,pr*2);
  g.fillStyle='#4e6a82'; g.fillRect(0,pipeY-pr,320,2);                // lit top of pipe
  g.fillStyle='#32475a';                                              // pipe supports
  [40,110,300].forEach(x=>g.fillRect(x,pipeY+pr,7,8));
  g.fillStyle='#2b3d4c';                                              // flanges either side
  g.fillRect(cx-30,pipeY-pr-3,5,pr*2+6); g.fillRect(cx+25,pipeY-pr-3,5,pr*2+6);
  g.fillStyle='#46606f';                                              // valve body
  g.fillRect(cx-24,pipeY-pr-6,48,pr*2+12);
  g.fillStyle='#55738a'; g.fillRect(cx-24,pipeY-pr-6,48,3);
  g.strokeStyle='#2b3d4c'; g.lineWidth=1; g.strokeRect(cx-24,pipeY-pr-6,48,pr*2+12);
  g.fillStyle='#39414a'; g.fillRect(cx-9,cy+R-2,18,pipeY-pr-6-(cy+R-2)); // bonnet
  g.fillStyle='#5f7f99'; g.fillRect(cx-2,cy+6,4,cy+R-2-(cy+6));          // rising stem
  g.strokeStyle='#8fb6d8'; g.lineWidth=4;                                // hand wheel
  g.beginPath(); g.arc(cx,cy,R,0,Math.PI*2); g.stroke();
  g.lineWidth=3;
  for(let k=0;k<6;k++){ const a=k*Math.PI/3;
    g.beginPath(); g.moveTo(cx,cy); g.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R); g.stroke(); }
  g.fillStyle='#3a5a74'; g.beginPath(); g.arc(cx,cy,6,0,Math.PI*2); g.fill();
  // title
  g.textAlign='center';
  g.fillStyle='#0d2a16'; g.font='bold 25px monospace';
  g.fillText('LUNAR PROCESS',160,66);
  g.fillStyle='#39ff6a'; g.fillText('LUNAR PROCESS',160,65);
  g.fillStyle='#0d2a16'; g.font='bold 19px monospace';
  g.fillText('ENGINEER',160,88);
  g.fillStyle='#39ff6a'; g.fillText('ENGINEER',160,87);
  /* "Chapter" language is dropped, and the title no longer names one
     level now that a menu sits beneath it. */
  g.fillStyle='#ffb627'; g.font='9px monospace';
  g.fillText('EDUCATIONAL SYSTEMS GROUP',160,104);

}
