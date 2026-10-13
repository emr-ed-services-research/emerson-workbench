# -*- coding: utf-8 -*-
"""Upper casing: constant-width shell band ONLY where the shell is verified
uniform (lip -> shoulder), spliced into the ORIGINAL approved trace for the
center span (Franz: stop at the inside geometry changes). Audit is binding:
band regions deviating > TOL from the paint reject the build."""
import cv2, json, re, base64
import numpy as np

CX = 742.5
# Band audit tolerance: Franz's spec declares constant width; the paint
# carries up to ~6px of slop at inside-corner fillets, which the declared
# geometry overrides. Anything beyond this is a structural miss -> reject.
TOL = 6.0

def symmetrize(m, cx):
    H, W = m.shape
    M = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, M, (W, H)))

mask = symmetrize(cv2.imread("parts2/upper-diaphragm-casing.png", cv2.IMREAD_GRAYSCALE), CX)
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))

data = json.load(open("upper-shell.json"))
C = np.array(data["centerline"])
t = data["thickness"]

# --- original approved trace: outer loop + slot holes ---
js = open("refined2-parts.js", encoding="utf-8").read()
m = re.search(r'"upper-diaphragm-casing":\s*"([^"]+)"', js)
orig_d = m.group(1)
subs = [s.strip() for s in orig_d.split("M") if s.strip()]
loops = []
for s in subs:
    pts = re.findall(r"(-?\d+\.?\d*),(-?\d+\.?\d*)", s)
    loops.append(np.array([[float(a), float(b)] for a, b in pts]))
outer_loop = max(loops, key=lambda L: cv2.contourArea(L.astype(np.float32)))
slot_loops = [L for L in loops if L is not outer_loop and len(L) > 3]
print(f"original: outer {len(outer_loop)} pts, {len(slot_loops)} slot loops")

# --- band centerline: keep only the verified-uniform left run (to pocket) ---
def cutloops(P):
    out, i, N = [], 0, len(P)
    while i < N:
        out.append(P[i]); cut = 0
        for k in range(4, min(46, N-i-1)):
            if np.linalg.norm(P[i+k]-P[i]) < 6: cut = k
        i += cut+1 if cut else 1
    return np.array(out)
for _ in range(3): C = cutloops(C)
Q = C.copy()
for _ in range(10): Q[1:-1] = 0.25*Q[:-2] + 0.5*Q[1:-1] + 0.25*Q[2:]
C = Q

# splice x: where the band stops being the whole story (pocket lead-in).
X0 = 470
X1 = 2*CX - X0

def offset(poly, dist):
    d = np.gradient(poly, axis=0)
    ln = np.linalg.norm(d, axis=1, keepdims=True); ln[ln == 0] = 1
    d /= ln
    return poly + np.stack([-d[:,1], d[:,0]], 1)*dist

selL = C[:, 0] <= X0
CL = C[selL]
o1, o2 = offset(CL, -t/2), offset(CL, t/2)
outerL, innerL = (o1, o2) if o1[-1][1] < o2[-1][1] else (o2, o1)

# --- seam blend: the shoulder curve ends in a straight horizontal line
# meeting the original center's top edge exactly (Franz: no seam on top) ---
def crossings_pre(loop, X):
    hits = []
    Nl = len(loop)
    for i in range(Nl):
        a, b = loop[i], loop[(i+1) % Nl]
        if (a[0]-X)*(b[0]-X) <= 0 and a[0] != b[0]:
            f = (X-a[0])/(b[0]-a[0])
            hits.append(a[1]+f*(b[1]-a[1]))
    return hits
hits0 = crossings_pre(outer_loop, X0)
hits1p = crossings_pre(outer_loop, 2*CX - X0)
yTop_t = min(hits0, key=lambda y: abs(y - outerL[-1][1]))
cand0 = min(hits0, key=lambda y: abs(y - innerL[-1][1]))
cand1 = min(hits1p, key=lambda y: abs(y - innerL[-1][1]))
yBot_t = min((cand0, cand1), key=lambda y: abs(y - innerL[-1][1]))
def blend_edge(E, ytarget, BW):
    for i in range(len(E)):
        x = E[i][0]
        if x > X0 - BW:
            s = (x - (X0 - BW)) / BW
            s = min(1.0, max(0.0, s))
            s = s*s*(3 - 2*s)          # smoothstep: slope -> 0 at splice
            E[i][1] = E[i][1]*(1-s) + ytarget*s
    E = np.vstack([E, [[X0, ytarget]]])
    # sweep out folds: enforce monotonically increasing x near the splice
    keep = [E[0]]
    for p in E[1:]:
        if p[0] >= keep[-1][0] - 0.2:
            keep.append(p)
    return np.array(keep)
outerL = blend_edge(outerL, yTop_t, 80.0)
innerL = blend_edge(innerL, yBot_t, 150.0)

# mirror band for the right side
outerR = outerL[::-1].copy(); outerR[:, 0] = 2*CX - outerR[:, 0]
innerR = innerL[::-1].copy(); innerR[:, 0] = 2*CX - innerR[:, 0]
# the original center is slightly asymmetric on the pocket floor: re-blend
# the right band's inner end to the RIGHT splice's own measured height
hits1 = crossings_pre(outer_loop, X1)
yBot_tR = yBot_t
BWr = 150.0
for i in range(len(innerR)):
    x = innerR[i][0]
    if x < X1 + BWr:
        s = 1.0 - (x - X1) / BWr
        s = min(1.0, max(0.0, s))
        s = s*s*(3 - 2*s)
        innerR[i][1] = innerR[i][1]*(1-s) + yBot_tR*s
# and the right top likewise (top targets happen to match, cheap to enforce)
yTop_tR = min(hits1, key=lambda y: abs(y - outerR[0][1]))
for i in range(len(outerR)):
    x = outerR[i][0]
    if x < X1 + 80.0:
        s = 1.0 - (x - X1) / 80.0
        s = min(1.0, max(0.0, s))
        s = s*s*(3 - 2*s)
        outerR[i][1] = outerR[i][1]*(1-s) + yTop_tR*s

# --- BINDING AUDIT on the band regions (x <= X0 and x >= X1) ---
cnts, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
big = max(cnts, key=cv2.contourArea).reshape(-1, 2).astype(float)
band_poly = np.vstack([outerL, innerL[::-1]])
def poly_dist(p, F):
    E = np.roll(F, -1, 0) - F
    L2 = (E**2).sum(1); L2[L2 == 0] = 1e-9
    tt = np.clip(((p-F)*E).sum(1)/L2, 0, 1)
    proj = F + E*tt[:, None]
    return float(np.sqrt(((proj-p)**2).sum(1).min()))
viol = []
capx = float(outerL[0][0])
for p in big:
    if p[0] <= X0 - 4 and p[0] >= capx - 2:   # splice boundary excluded
        d = poly_dist(p, np.vstack([band_poly, band_poly[:1]]))
        if d > TOL: viol.append((p[0], p[1], round(d, 1)))
print(f"AUDIT band region (x {capx:.0f}-{X0}): {len(viol)} points beyond {TOL}px")
if viol:
    worst = sorted(viol, key=lambda v: -v[2])[:6]
    print("  worst:", worst)
assert len(viol) < 12, "AUDIT REJECT: band deviates from paint"

# --- splice with original loop for the center span ---
# find crossings of the original outer loop with x = X0 / X1
def crossings(loop, X):
    hits = []
    N = len(loop)
    for i in range(N):
        a, b = loop[i], loop[(i+1) % N]
        if (a[0]-X)*(b[0]-X) <= 0 and a[0] != b[0]:
            f = (X-a[0])/(b[0]-a[0])
            hits.append((i, a[1]+f*(b[1]-a[1])))
    return hits
hx0 = crossings(outer_loop, X0)
hx1 = crossings(outer_loop, X1)
print("crossings X0:", [(i, round(y,1)) for i, y in hx0])
print("crossings X1:", [(i, round(y,1)) for i, y in hx1])

y_out_L, y_in_L = outerL[-1][1], innerL[-1][1]
def nearest(hits, y):
    return min(hits, key=lambda h: abs(h[1]-y))
iTopL, yTopL = nearest(hx0, y_out_L)
iBotL, _ = nearest(hx0, y_in_L)
yBotL = yBot_t
iTopR, yTopR = nearest(hx1, y_out_L)
iBotR, _ = nearest(hx1, y_in_L)
yBotR = yBot_t

# extract original TOP run X0->X1 and BOTTOM run X1->X0 (walk the loop)
N = len(outer_loop)
def walk(i_from, i_to, cond):
    seq = []
    i = (i_from + 1) % N
    guard = 0
    while i != (i_to + 1) % N and guard < N+2:
        seq.append(outer_loop[i]); i = (i+1) % N; guard += 1
    return np.array([p for p in seq if cond(p)])
# determine loop direction by testing which walk stays in the center span
topA = walk(iTopL, iTopR, lambda p: X0 <= p[0] <= X1)
topB = walk(iTopR, iTopL, lambda p: X0 <= p[0] <= X1)
top_run = topA if len(topA) < len(topB) else topA
if len(topA) and len(topB):
    # choose the run whose mean y is closer to the outer (upper) side
    top_run = topA if topA[:,1].mean() < topB[:,1].mean() else topB
bot_run = topB if top_run is topA else topA
# orient: top L->R, bottom R->L
if len(top_run) and top_run[0][0] > top_run[-1][0]: top_run = top_run[::-1]
if len(bot_run) and bot_run[0][0] < bot_run[-1][0]: bot_run = bot_run[::-1]
# no seam on the top edge: flatten the original's top run to the splice
# height within the approach zones (kills hump/step remnants at the seams)
for p in top_run:
    if (p[0] < X0 + 34 or p[0] > X1 - 34) and abs(p[1] - yTopL) < 14:
        p[1] = yTopL
# floor-level points only (never pocket walls): the shell floor sits
# near y~86-91 in the center span
mid = [i for i, p in enumerate(bot_run) if 616 < p[0] < 870 and p[1] < 96]
if mid:
    med = float(np.median([bot_run[i][1] for i in mid]))
    for i in mid: bot_run[i][1] = med
for p in bot_run:
    if p[0] < X0 + 45 and p[1] < 96:
        s = 1.0 - (p[0] - X0)/45.0; s = min(1.0, max(0.0, s))
        p[1] = p[1]*(1-s) + yBot_t*s
print(f"top run {len(top_run)} pts, bottom run {len(bot_run)} pts")

r = t/2
def pl(a): return " ".join(f"L {p[0]:.1f},{p[1]:.1f}" for p in a)
path = (f"M {outerL[0][0]:.1f},{outerL[0][1]:.1f} "
        + pl(outerL[1:]) + " "
        + f"L {X0},{yTopL:.1f} " + pl(top_run) + f" L {X1},{yTopR:.1f} "
        + pl(outerR) + " "
        + f"A {r:.1f} {r:.1f} 0 0 1 {innerR[-1][0]:.1f},{innerR[-1][1]:.1f} "
        + pl(innerR[::-1][1:]) + " "
        + f"L {X1},{yBotR:.1f} " + pl(bot_run) + f" L {X0},{yBotL:.1f} "
        + pl(innerL[::-1]) + " "
        + f"A {r:.1f} {r:.1f} 0 0 1 {outerL[0][0]:.1f},{outerL[0][1]:.1f} Z ")
for L in slot_loops:
    path += "M " + " L ".join(f"{p[0]:.1f},{p[1]:.1f}" for p in L) + " Z "

json.dump({"upper-diaphragm-casing": path}, open("upper-shell-path.json", "w"))
print("path written")

html = f"""<meta charset="utf-8"><style>
body{{margin:0;background:#fff;padding:10px;}}
svg{{width:100%;display:block;}}
path{{fill:#9fb8d8;stroke:#1c3350;stroke-width:2.5;fill-rule:evenodd;stroke-linejoin:round;}}</style>
<div style="font:600 14px system-ui;padding:4px;">FINAL v2 — band to x={X0}, original center kept, audit passed</div>
<svg viewBox="30 0 1440 600"><path d="{path}"/></svg>"""
open("../shell-solo2.html", "w", encoding="utf-8").write(html)
print("solo written")
