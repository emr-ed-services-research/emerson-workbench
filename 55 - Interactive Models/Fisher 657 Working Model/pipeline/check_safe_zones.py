# -*- coding: utf-8 -*-
"""Actually verify what's empty, instead of eyeballing path strings.
Parses every real path/rect the model draws (with the real shell substitution
applied, same as build_final_proto.py), accounts for every part's full range
of motion (adj -24..24, stroke 0..STOP), and computes the occupied x-range at
each y-band across the whole 1480x2250 canvas. Reports the widest genuinely
clear rectangle(s) on the left and right of centerline."""
import re, json

parts_js = open("refined2-parts.js", encoding="utf-8").read()
def load(name):
    return json.load(open(name, encoding="utf-8"))
shell = load("upper-shell-path.json")
shell_lo = load("lower-shell-path.json")
shell_yk = load("yoke-shell-path.json")

def get_path(name, override=None):
    if override is not None:
        return override
    m = re.search(r'"%s":\s*"([^"]*)"' % re.escape(name), parts_js)
    return m.group(1)

upper_d = shell["upper-diaphragm-casing"].replace("\\", "")
lower_d = shell_lo["lower-diaphragm-casing"]
yoke_d  = shell_yk["yoke"]
plate_d = get_path("diaphragm-plate")

def path_points(d):
    # real SVG path tokenizer -- the yoke path uses A (arc) commands with 7
    # params each (rx,ry,x-axis-rotation,large-arc,sweep,x,y); blindly pairing
    # every two numbers as (x,y) desyncs on the first arc and corrupts every
    # point after it. Only the endpoint of each command is taken (arcs here
    # are all small-radius fillets, so ignoring the curve's outward bulge is
    # a few px of conservative slack, not a real gap).
    tokens = re.findall(r'([MLQAZ])|(-?\d+(?:\.\d+)?)', d)
    pts = []
    cmd = None
    nums = []
    def flush():
        nonlocal nums
        if cmd == 'M' or cmd == 'L':
            for i in range(0, len(nums)-1, 2):
                pts.append((nums[i], nums[i+1]))
        elif cmd == 'Q':
            # control point + endpoint: take both (endpoint is the real point,
            # control point can only pull inward for these gentle joins)
            for i in range(0, len(nums)-1, 2):
                pts.append((nums[i], nums[i+1]))
        elif cmd == 'A':
            for i in range(0, len(nums)-6, 7):
                pts.append((nums[i+5], nums[i+6]))
        nums = []
    for letter, num in tokens:
        if letter:
            flush()
            cmd = letter
        else:
            nums.append(float(num))
    flush()
    return pts

def bbox_by_yband(pts, y0, y1):
    xs = [x for x,y in pts if y0 <= y <= y1]
    if not xs: return None
    return min(xs), max(xs)

# --- static (non-moving-range) parts ---
STATIC_PARTS = {
    "upper-casing": path_points(upper_d),
    "lower-casing": path_points(lower_d),
    "yoke": path_points(yoke_d),
    "plate-rest": path_points(plate_d),   # plate itself also shifts by stroke -- handled below
}

# fasteners: exact rects from build_refined2.py / build_final_proto.py markup
FASTENERS = [
    (1289, 170, 1355, 199), (127.5, 170, 193.5, 199),
    (1289.5, 245, 1356.5, 287), (128, 245, 195, 287),
    (916.5, 446, 982, 473), (536, 446, 601.5, 473),
]

# scale assembly (fixed position in this prototype, no PB.scaleDy)
STEM_BOT = 1525
scale_y = STEM_BOT - 46
SCALE = (848, scale_y, 987, scale_y+234)

# --- ranged parts: compute the UNION of their occupied rectangle across every
# adj in [-24,24] and stroke in [0,STOP] ---
ADJ_RANGE = (-24, 24)
STOP = 217
TRAVEL = 140
CXA, HALFW = 742.5, 146
TOP0, SEAT0 = 197.5, 1008

def union_yrange(y_lo_fn, y_hi_fn, samples=49):
    lo = min(y_lo_fn(a) for a in [ADJ_RANGE[0] + i*(ADJ_RANGE[1]-ADJ_RANGE[0])/samples for i in range(samples+1)])
    hi = max(y_hi_fn(a) for a in [ADJ_RANGE[0] + i*(ADJ_RANGE[1]-ADJ_RANGE[0])/samples for i in range(samples+1)])
    return lo, hi

# stem: x704-781, y205 to 205+1320=1525 at rest, shifts down by stroke (0..STOP)
STEM = (704, 205, 781, 1525+STOP)
# seat: x585.5-899.5 (widest of its 3 rects), y972-1086 at rest, shifts by -adj
seat_y_lo = 972 - ADJ_RANGE[1]   # -adj at adj=+24 shifts UP by 24
seat_y_hi = 1086 - ADJ_RANGE[0]  # -adj at adj=-24 shifts DOWN by 24
SEAT = (585.5, seat_y_lo, 899.5, seat_y_hi)
# adjuster: x672.5-812.5, y1068-1386 at rest, shifts by -adj
adj_y_lo = 1068 - ADJ_RANGE[1]
adj_y_hi = 1386 - ADJ_RANGE[0]
ADJUSTER = (672.5, adj_y_lo, 812.5, adj_y_hi)
# spring: x CXA-HALFW..CXA+HALFW always, y from TOP0+stroke (min TOP0, max TOP0+STOP)
#         down to SEAT0-adj (min SEAT0-24, max SEAT0+24)
SPRING = (CXA-HALFW, TOP0, CXA+HALFW, SEAT0+ADJ_RANGE[1])
# plate: rest bbox from its own path, PLUS shifts down by up to STOP
plate_pts = STATIC_PARTS["plate-rest"]
plate_x0 = min(x for x,y in plate_pts); plate_x1 = max(x for x,y in plate_pts)
plate_y0 = min(y for x,y in plate_pts); plate_y1 = max(y for x,y in plate_pts) + STOP
PLATE = (plate_x0, plate_y0, plate_x1, plate_y1)

RANGED = {"stem": STEM, "seat": SEAT, "adjuster": ADJUSTER, "spring": SPRING, "plate": PLATE}

# --- diaphragm: use the real centerline/floor data actually shipped in
# refined2-parts.js (R._dia), deflected by stroke up to STOP, band/2 thick ---
dia_m = re.search(r'"_dia":\s*(\{.*?"floor":\s*\[[^\]]*\]\})', parts_js)
dia = json.loads(dia_m.group(1))
band = dia["band"]
def dia_dy_left(x, s):
    if x<=215: return 0
    if x<260:  return s*0.5*(x-215)/45
    if x<=285: return s*0.5
    if x<305:  return s*(0.5+0.5*(x-285)/20)
    return s
def dia_dy_right(x, s):
    if x>=1270: return 0
    if x>1225:  return s*0.5*(1270-x)/45
    if x>=1200: return s*0.5
    if x>1180:  return s*(0.5+0.5*(1200-x)/20)
    return s
dia_pts_rest, dia_pts_full = [], []
for (x,y) in dia["centerline"]:
    dia_pts_rest.append((x, y - band/2)); dia_pts_rest.append((x, y + band/2))
    s_full = STOP
    dy = dia_dy_left(x, s_full) if x < 742.5 else dia_dy_right(x, s_full)
    yy = y + dy
    dia_pts_full.append((x, yy - band/2)); dia_pts_full.append((x, yy + band/2))
DIA_PTS = dia_pts_rest + dia_pts_full

# --- sweep every y-band and report the occupied x-range, then the widest
# clear rectangle on each side of centerline (x=740) ---
print(f"{'y-band':>14} | {'occupied x-range':>22} | left-clear | right-clear")
bands = list(range(0, 2260, 50))
worst_left_clear = 1480
worst_right_start = 0
for y0 in bands:
    y1 = y0 + 50
    xs = []
    for pts in STATIC_PARTS.values():
        bb = bbox_by_yband(pts, y0, y1)
        if bb: xs.append(bb)
    bb = bbox_by_yband(DIA_PTS, y0, y1)
    if bb: xs.append(bb)
    for (x0,yy0,x1,yy1) in list(RANGED.values()) + FASTENERS + [SCALE]:
        if yy0 <= y1 and yy1 >= y0:
            xs.append((x0,x1))
    if not xs:
        print(f"{y0:6}-{y1:<6} | {'(nothing)':>22} |    0-1480  |   n/a")
        worst_left_clear = 0
        continue
    lo = min(x for x,_ in xs); hi = max(x for _,x in xs)
    left_clear = lo
    right_clear = 1480 - hi
    worst_left_clear = min(worst_left_clear, left_clear)
    worst_right_start = max(worst_right_start, hi)
    print(f"{y0:6}-{y1:<6} | {lo:8.0f} to {hi:8.0f} | {left_clear:9.0f}  | {right_clear:9.0f}")

print()
print(f"Narrowest LEFT margin across the whole assembly: {worst_left_clear:.0f}px (x=0 to {worst_left_clear:.0f})")
print(f"Rightmost occupied x anywhere: {worst_right_start:.0f}px (clear from x={worst_right_start:.0f} to 1480, "
      f"{1480-worst_right_start:.0f}px wide)")
