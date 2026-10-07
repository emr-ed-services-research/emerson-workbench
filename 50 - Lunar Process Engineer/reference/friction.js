// Would "pick the pipe, then run the bay" actually produce a dramatic,
// self-evident failure? Darcy-Weisbach with Swamee-Jain friction factor,
// commercial steel roughness eps = 0.00015 ft.
const PIPE=[
 ['1/2',  0.622,0.00211],['3/4',  0.824,0.00370],['1',    1.049,0.00600],
 ['1-1/4',1.380,0.01039],['1-1/2',1.610,0.01414],['2',    2.067,0.02330],
 ['2-1/2',2.469,0.03325],['3',    3.068,0.05134],
];
const Q=36, G=448.831, NU=1.08e-5, EPS=0.00015, L=40, g=32.174;
const P_AVAIL=60;                       // psig at the manifold, as in Exercise 1
console.log('36 gpm down a '+L+' ft run, '+P_AVAIL+' psig available\n');
console.log('pipe    bore    v ft/s      Re      f       loss ft   loss psi   left at Bay 4');
PIPE.forEach(([n,id,a])=>{
  const D=id/12, v=Q/(G*a), Re=v*D/NU;
  const f=0.25/Math.pow(Math.log10(EPS/(3.7*D)+5.74/Math.pow(Re,0.9)),2);
  const hf=f*(L/D)*v*v/(2*g), psi=hf*0.43353;
  const left=P_AVAIL-psi;
  console.log(n.padEnd(7)+id.toFixed(3).padStart(6)+v.toFixed(2).padStart(9)+
    Math.round(Re).toString().padStart(9)+f.toFixed(4).padStart(9)+
    hf.toFixed(1).padStart(10)+psi.toFixed(1).padStart(11)+
    (left>0?left.toFixed(1)+' psig':'NOTHING — starved').padStart(18));
});
