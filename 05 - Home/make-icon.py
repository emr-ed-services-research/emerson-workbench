#!/usr/bin/env python
"""The Workbench icon, drawn rather than drawn ON.

    python "05 - Home/make-icon.py"

A control valve in section, the ISA way: two triangles meeting at the
seat, a stem, and the actuator across the top. It is the subject of
nearly everything in this vault and it survives being 16 pixels wide,
which rules out most things.

Colours are Instrument Style's, not picked here -- the blue-black
ground and the dark-ground accent, so the icon belongs to the same
system as the page it opens.

Checked in as a script and not only as a .ico so the next person can
change it without reverse-engineering a binary.
"""
from PIL import Image, ImageDraw

BG     = (0x12, 0x18, 0x1f, 255)   # --bg, dark ground
ACCENT = (0x5b, 0x9b, 0xdb, 255)   # --accent, dark ground
INK    = (0xe7, 0xed, 0xf3, 255)   # --ink, dark ground

S = 256
img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

# the ground: a rounded square, so it reads as a tile at every size
d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.22), fill=BG)

cx = S // 2
seat = int(S * 0.655)            # where the two triangles meet
halfw = int(S * 0.215)           # body half-width at the flanges
halfh = int(S * 0.125)           # flange half-height

# body: the bowtie. Left triangle, then right, meeting at the seat.
d.polygon([(cx - halfw, seat - halfh), (cx - halfw, seat + halfh), (cx, seat)],
          fill=ACCENT)
d.polygon([(cx + halfw, seat - halfh), (cx + halfw, seat + halfh), (cx, seat)],
          fill=ACCENT)

# stem up out of the body
sw = max(2, int(S * 0.028))
d.rectangle([cx - sw, int(S * 0.335), cx + sw, seat - int(S * 0.02)], fill=INK)

# actuator across the top -- a bar, which is all that survives at 16 px
bw, bh = int(S * 0.175), max(3, int(S * 0.055))
d.rounded_rectangle([cx - bw, int(S * 0.275), cx + bw, int(S * 0.275) + bh],
                    radius=bh // 2, fill=INK)

out = __file__.rsplit('make-icon.py', 1)[0] + 'workbench.ico'
img.save(out, format='ICO',
         sizes=[(256, 256), (64, 64), (48, 48), (32, 32), (24, 24), (16, 16)])
print('wrote', out)
