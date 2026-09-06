# ============================================================================
#  generate.ps1  -  convert all 418 slides of the 14101 deck to HTML
#  against emerson-workbench.css.  Run extract-media.ps1 first.
#
#  GUARDED (2026-08-29): this script rewrites EVERY slides/1400-*.html from the
#  .pptx. Slides listed in _generator/PROTECTED.txt have been hand-authored
#  since conversion and will NOT be regenerated without -Force (which snapshots
#  the current slides + manifest first). See 00 - Project/Course Porting Pipeline.md.
# ============================================================================
param([switch]$Force)
$ErrorActionPreference = 'Stop'
$src   = "C:\Users\E1552882\Documents-Local\Projects\EmersonWorkbench\10 - Courses\14101 Valve Trim and Body Maintenance\Source Deck\14101 Valve Trim & Body Maintenance.pptx"
$build = "C:\Users\E1552882\Documents-Local\Projects\EmersonWorkbench\10 - Courses\14101 Valve Trim and Body Maintenance\Presentation\build"
$slidesDir = Join-Path $build 'slides'
$tmp   = "C:\Users\E1552882\.claude\jobs\ae752d36\tmp"

# --- REGENERATION GUARD ------------------------------------------------------
$protFile = Join-Path $build '_generator\PROTECTED.txt'
$snapRoot = Join-Path $build '_generator\_snapshots'

$protected = @()
if (Test-Path $protFile) {
  foreach ($ln in Get-Content $protFile) {
    $l = ($ln -replace '#.*$', '').Trim()
    if (-not $l) { continue }
    if     ($l -match '^(\d+)\s*-\s*(\d+)$') { $protected += ([int]$Matches[1]..[int]$Matches[2]) }
    elseif ($l -match '^\d+$')               { $protected += [int]$l }
  }
  $protected = @($protected | Sort-Object -Unique)
}

function Save-SlideSnapshot {
  $stamp = (Get-Date).ToUniversalTime().ToString('yyyyMMdd-HHmmss') + 'Z'
  $dst = Join-Path $snapRoot $stamp
  New-Item -ItemType Directory -Force (Join-Path $dst 'slides') | Out-Null
  if (Test-Path $slidesDir) {
    Get-ChildItem $slidesDir -Filter '1400-*.html' | Copy-Item -Destination (Join-Path $dst 'slides')
  }
  foreach ($f in 'manifest.json', 'manifest.js', 'conversion-report.csv') {
    $p = Join-Path $build $f
    if (Test-Path $p) { Copy-Item $p $dst }
  }
  Get-ChildItem $snapRoot -Directory -ErrorAction SilentlyContinue |
    Sort-Object Name -Descending | Select-Object -Skip 10 |
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
  return $dst
}

if ($protected.Count -gt 0 -and -not $Force) {
  Write-Host ''
  Write-Warning "REGENERATION BLOCKED - $($protected.Count) hand-owned slides would be overwritten."
  Write-Host ''
  Write-Host '  Protected ranges (from _generator/PROTECTED.txt):'
  Get-Content $protFile | Where-Object { ($_ -replace '#.*$', '').Trim() -match '^\d' } |
    ForEach-Object { Write-Host "    $_" }
  Write-Host ''
  Write-Host '  These carry the four-part redesign pass and the Chapter 1 template rebuild.'
  Write-Host '  See 00 - Project/Course Porting Pipeline.md.'
  Write-Host ''
  Write-Host '  To regenerate everything anyway (a snapshot is saved first):'
  Write-Host '      .\generate.ps1 -Force'
  Write-Host ''
  exit 1
}

if ($Force -and $protected.Count -gt 0) {
  $snap = Save-SlideSnapshot
  Write-Host ''
  Write-Warning "-Force: regenerating ALL slides, including $($protected.Count) hand-owned ones."
  Write-Host "  Snapshot saved to: $snap"
  Write-Host ''
}
# --------------------------------------------------------------------------

Add-Type -AssemblyName System.IO.Compression.FileSystem
$mediaMap = Get-Content (Join-Path $tmp 'media-map.json') -Raw | ConvertFrom-Json

if (Test-Path $slidesDir) { Get-ChildItem $slidesDir -Filter '1400-*.html' | ForEach-Object { [System.IO.File]::Delete($_.FullName) } }
New-Item -ItemType Directory -Force $slidesDir | Out-Null

$zip = [System.IO.Compression.ZipFile]::OpenRead($src)
$ENTRIES = @{}; foreach ($e in $zip.Entries) { $ENTRIES[$e.FullName] = $e }
function XmlOf($name) {
  if (-not $ENTRIES.ContainsKey($name)) { return $null }
  $sr = New-Object System.IO.StreamReader($ENTRIES[$name].Open())
  $t = $sr.ReadToEnd(); $sr.Close()
  $d = New-Object System.Xml.XmlDocument
  $d.LoadXml($t); return $d
}
$NS = New-Object System.Xml.XmlNamespaceManager((New-Object System.Xml.NameTable))
$NS.AddNamespace('p', 'http://schemas.openxmlformats.org/presentationml/2006/main')
$NS.AddNamespace('a', 'http://schemas.openxmlformats.org/drawingml/2006/main')
$NS.AddNamespace('r', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
$NS.AddNamespace('mc', 'http://schemas.openxmlformats.org/markup-compatibility/2006')

$SLIDE_W = 10058400.0; $SLIDE_H = 7772400.0    # slide EMU
function PX($v) { [double]$v / 9525.0 }
function PctX($emu) { [math]::Round(([double]$emu / $SLIDE_W) * 100, 3) }
function PctY($emu) { [math]::Round(([double]$emu / $SLIDE_H) * 100, 3) }
function Pt2Cqw($pt) { [math]::Round([double]$pt * 0.12626, 3) }
function Esc($s) {
  if ($null -eq $s) { return '' }
  $s = $s -replace '&', '&amp;' -replace '<', '&lt;' -replace '>', '&gt;'
  return $s
}

# ---- family map -----------------------------------------------------------
function Family($layoutName) {
  switch -Regex ($layoutName) {
    'Book cover'            { return 'cover' }
    'Chapter/Section'       { return 'divider' }
    'Breaker'              { return 'breaker' }
    'Title Only'            { return 'title-only' }
    '^1 Column'            { return 'one-col' }
    '^Content$'            { return 'one-col' }
    '2 Column'             { return 'two-col' }
    '3 Photo'             { return 'three-photo' }
    'Title, Text, and Content' { return 'title-text-content' }
    '4 Column'             { return 'four-col' }
    'Blank White'         { return 'blank' }
    'Page Intentionally'  { return 'blank' }
    'LAST SLIDE'          { return 'blank' }
    'Table of Contents'   { return 'toc' }
    'Legal_Page'          { return 'one-col' }
    'MyCONNECT'           { return 'one-col' }
    'Spec Mng'            { return 'one-col' }
    'Theme Colors'        { return 'title-only' }
    'Content Clear Space' { return 'title-only' }
    default { return 'one-col' }
  }
}
$CHROME_FAMILIES = 'one-col', 'two-col', 'three-photo', 'title-only', 'four-col', 'title-text-content', 'toc'

# ---- slide order --------------------------------------------------------
$presRels = XmlOf 'ppt/_rels/presentation.xml.rels'
$relTarget = @{}
foreach ($rel in $presRels.Relationships.Relationship) { $relTarget[$rel.Id] = $rel.Target }
$pres = XmlOf 'ppt/presentation.xml'
$order = @()
foreach ($sid in $pres.SelectNodes('//p:sldIdLst/p:sldId', $NS)) {
  $rid = $sid.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
  $order += ($relTarget[$rid] -replace '^/ppt/', '' -replace '^slides/', 'slides/')
}

# ---- pre-parse layout + master placeholder geometry -------------------
function PhKey($phNode) {
  if ($null -eq $phNode) { return $null }
  $t = $phNode.GetAttribute('type'); if (-not $t) { $t = 'body' }
  $i = $phNode.GetAttribute('idx'); if (-not $i) { $i = '' }
  return "$t|$i"
}
function Collect-Ph($doc) {
  $h = @{}
  if ($null -eq $doc) { return $h }
  foreach ($sp in $doc.SelectNodes('//p:sp', $NS)) {
    $ph = $sp.SelectSingleNode('.//p:nvSpPr/p:nvPr/p:ph', $NS)
    if ($null -eq $ph) { continue }
    $xfrm = $sp.SelectSingleNode('.//p:spPr/a:xfrm', $NS)
    if ($null -eq $xfrm) { continue }
    $off = $xfrm.SelectSingleNode('a:off', $NS); $ext = $xfrm.SelectSingleNode('a:ext', $NS)
    if ($null -eq $off -or $null -eq $ext) { continue }
    $h[(PhKey $ph)] = @{ x = [double]$off.x; y = [double]$off.y; cx = [double]$ext.cx; cy = [double]$ext.cy }
  }
  return $h
}
$masterPh = @{}
foreach ($m in 'ppt/slideMasters/slideMaster1.xml', 'ppt/slideMasters/slideMaster2.xml') {
  foreach ($kv in (Collect-Ph (XmlOf $m)).GetEnumerator()) { if (-not $masterPh.ContainsKey($kv.Key)) { $masterPh[$kv.Key] = $kv.Value } }
}
$layoutPhCache = @{}
function LayoutPh($layoutFile) {
  if (-not $layoutPhCache.ContainsKey($layoutFile)) { $layoutPhCache[$layoutFile] = Collect-Ph (XmlOf $layoutFile) }
  return $layoutPhCache[$layoutFile]
}

# ---- section map (by presentation order) ------------------------------
$SECTIONS = @(
 @('Front matter', 1, 11), @('Ch 1 - Important Control Valve Specifications for Maintenance', 12, 25),
 @('Ch 2 - Fisher Easy-E Valve Maintenance', 26, 86), @('Ch 3 - Fisher Sliding Stem Spring & Diaphragm Actuator Maintenance', 87, 126),
 @('Ch 4 - Fisher Sliding Stem Piston Actuator Maintenance', 127, 145), @('Ch 5 - Fisher Butterfly Valve Maintenance', 146, 183),
 @('Ch 6 - Fisher Vee-Ball Valve Maintenance', 184, 213), @('Ch 7 - Fisher Eccentric Plug Valve Maintenance', 214, 235),
 @('Ch 8 - Fisher Rotary Valve Packing Maintenance', 236, 246), @('Ch 9 - Fisher Rotary Actuator Maintenance', 247, 290),
 @('Ch 10 - Basics of Positioner Operation', 291, 307), @('Ch 11 - FIELDVUE Digital Valve Controller', 308, 345),
 @('Ch 12 - Connecting to Device using ValveLink Mobile', 346, 357), @('Ch 13 - FIELDVUE DVC6200 Configuration & Calibration', 358, 388),
 @('Ch 14 - Workshop 1: Sliding Stem', 389, 395), @('Ch 15 - Workshop 2: Rotary', 396, 403),
 @('Ch 16 - Workshop 3: FIELDVUE DVC6200', 404, 409), @('Conclusion & back matter', 410, 418)
)
function SectionOf($n) { foreach ($s in $SECTIONS) { if ($n -ge $s[1] -and $n -le $s[2]) { return $s[0] } }; return '' }

# ---- text-body extraction --------------------------------------------
function Runs-Html($pNode) {
  $sb = New-Object System.Text.StringBuilder
  foreach ($r in $pNode.SelectNodes('a:r', $NS)) {
    $t = $r.SelectSingleNode('a:t', $NS)
    if ($null -eq $t) { continue }
    $txt = Esc $t.InnerText
    $rPr = $r.SelectSingleNode('a:rPr', $NS)
    $b = $false; $i = $false; $link = $null
    if ($rPr) {
      if ($rPr.GetAttribute('b') -eq '1') { $b = $true }
      if ($rPr.GetAttribute('i') -eq '1') { $i = $true }
      $hl = $rPr.SelectSingleNode('a:hlinkClick', $NS)
      if ($hl) { $link = $hl }
    }
    if ($b) { $txt = "<b>$txt</b>" }
    if ($i) { $txt = "<i>$txt</i>" }
    [void]$sb.Append($txt)
  }
  # br for explicit line breaks
  foreach ($br in $pNode.SelectNodes('a:br', $NS)) { }
  return $sb.ToString()
}
function Para-FirstSize($pNode, $default) {
  $r = $pNode.SelectSingleNode('a:r/a:rPr', $NS)
  if ($r -and $r.GetAttribute('sz')) { return [int]$r.GetAttribute('sz') / 100.0 }
  $e = $pNode.SelectSingleNode('a:endParaRPr', $NS)
  if ($e -and $e.GetAttribute('sz')) { return [int]$e.GetAttribute('sz') / 100.0 }
  return $default
}
function Body-ListHtml($txBody, $defaultPt) {
  # returns <ul>...</ul> ; nested by lvl
  $items = @()
  foreach ($p in $txBody.SelectNodes('a:p', $NS)) {
    $html = Runs-Html $p
    if (($html -replace '<[^>]+>', '').Trim().Length -eq 0) { continue }
    $pPr = $p.SelectSingleNode('a:pPr', $NS)
    $lvl = 0; $noBul = $false
    if ($pPr) {
      if ($pPr.GetAttribute('lvl')) { $lvl = [int]$pPr.GetAttribute('lvl') }
      if ($pPr.SelectSingleNode('a:buNone', $NS)) { $noBul = $true }
    }
    $sz = Para-FirstSize $p $defaultPt
    $items += @{ html = $html; lvl = $lvl; noBul = $noBul; sz = $sz }
  }
  if ($items.Count -eq 0) { return '' }
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.Append('<ul>')
  foreach ($it in $items) {
    $attr = ''
    if ($it.lvl -ge 1) { $attr += " data-level=""$([Math]::Min($it.lvl+1,5))""" }
    if ($it.noBul) { $attr += ' data-bullet="none"' }
    $style = ''
    if ([math]::Abs($it.sz - $defaultPt) -gt 0.6) { $style = " style=""font-size:$(Pt2Cqw $it.sz)cqw""" }
    [void]$sb.Append("<li$attr$style>$($it.html)</li>")
  }
  [void]$sb.Append('</ul>')
  return $sb.ToString()
}
function Plain($txBody) {
  if ($null -eq $txBody) { return '' }
  ($txBody.InnerText -replace '\s+', ' ').Trim()
}

# ---- shape-tree walk (flatten groups) --------------------------------
function Walk($node, $ox, $oy, $sx, $sy, $sink) {
  foreach ($child in $node.ChildNodes) {
    switch ($child.LocalName) {
      'grpSp' {
        $gx = $child.SelectSingleNode('p:grpSpPr/a:xfrm', $NS)
        if ($null -eq $gx) { Walk $child $ox $oy $sx $sy $sink; continue }
        $goff = $gx.SelectSingleNode('a:off', $NS); $gext = $gx.SelectSingleNode('a:ext', $NS)
        $gcoff = $gx.SelectSingleNode('a:chOff', $NS); $gcext = $gx.SelectSingleNode('a:chExt', $NS)
        if ($null -eq $goff -or $null -eq $gcext -or [double]$gcext.cx -eq 0 -or [double]$gcext.cy -eq 0) { Walk $child $ox $oy $sx $sy $sink; continue }
        $kx = [double]$gext.cx / [double]$gcext.cx; $ky = [double]$gext.cy / [double]$gcext.cy
        $nox = $ox + ([double]$goff.x - [double]$gcoff.x * $kx) * $sx
        $noy = $oy + ([double]$goff.y - [double]$gcoff.y * $ky) * $sy
        Walk $child $nox $noy ($kx * $sx) ($ky * $sy) $sink
      }
      'sp'           { $sink.Add(@{ kind = 'sp'; node = $child; ox = $ox; oy = $oy; sx = $sx; sy = $sy }) | Out-Null }
      'pic'          { $sink.Add(@{ kind = 'pic'; node = $child; ox = $ox; oy = $oy; sx = $sx; sy = $sy }) | Out-Null }
      'cxnSp'        { $sink.Add(@{ kind = 'cxn'; node = $child; ox = $ox; oy = $oy; sx = $sx; sy = $sy }) | Out-Null }
      'graphicFrame' { $sink.Add(@{ kind = 'gf'; node = $child; ox = $ox; oy = $oy; sx = $sx; sy = $sy }) | Out-Null }
    }
  }
}
function ShapeBox($item, $phLookup) {
  $node = $item.node
  $xfrm = $node.SelectSingleNode('p:spPr/a:xfrm', $NS)
  if ($null -eq $xfrm) { $xfrm = $node.SelectSingleNode('p:xfrm', $NS) }          # graphicFrame
  if ($null -eq $xfrm) { $xfrm = $node.SelectSingleNode('p:grpSpPr/a:xfrm', $NS) }
  $off = $null; $ext = $null; $rot = 0
  if ($xfrm) {
    $off = $xfrm.SelectSingleNode('a:off', $NS); $ext = $xfrm.SelectSingleNode('a:ext', $NS)
    if ($xfrm.GetAttribute('rot')) { $rot = [int]$xfrm.GetAttribute('rot') / 60000.0 }
  }
  if ($null -eq $off -or $null -eq $ext) {
    $ph = $node.SelectSingleNode('.//p:nvPr/p:ph', $NS)
    if ($ph) {
      $k = PhKey $ph
      $g = $null
      if ($phLookup.ContainsKey($k)) { $g = $phLookup[$k] }
      elseif ($k -like 'body|*' -and $phLookup.ContainsKey('body|')) { $g = $phLookup['body|'] }
      elseif ($masterPh.ContainsKey($k)) { $g = $masterPh[$k] }
      if ($g) { return @{ x = $g.x; y = $g.y; cx = $g.cx; cy = $g.cy; rot = 0; est = $true } }
    }
    return $null
  }
  $x = $item.ox + [double]$off.x * $item.sx
  $y = $item.oy + [double]$off.y * $item.sy
  $cx = [double]$ext.cx * $item.sx
  $cy = [double]$ext.cy * $item.sy
  # some OLE graphicFrames carry junk coordinates (10x+ off-canvas)
  $bad = ($x -gt $SLIDE_W * 2 -or $y -gt $SLIDE_H * 2 -or $x -lt -$SLIDE_W -or $y -lt -$SLIDE_H)
  return @{ x = $x; y = $y; cx = $cx; cy = $cy; rot = $rot; est = $false; badpos = $bad }
}
function BoxStyle($b) {
  "left:$(PctX $b.x)%;top:$(PctY $b.y)%;width:$(PctX $b.cx)%;height:$(PctY $b.cy)%"
}

# ---- DrawingML -> SVG (rebuild native vector artwork) ----------------
$THEME_CLR = @{
  'dk1' = '3F4040'; 'lt1' = 'FFFFFF'; 'dk2' = '004B8D'; 'lt2' = '959797'
  'tx1' = '3F4040'; 'bg1' = 'FFFFFF'; 'tx2' = '004B8D'; 'bg2' = '959797'
  'accent1' = '004B8D'; 'accent2' = '62BB46'; 'accent3' = '00A4D2'; 'accent4' = 'FFCF22'
  'accent5' = 'F79428'; 'accent6' = '6E298D'; 'hlink' = '00AA7E'; 'folHlink' = 'D31245'
  'phClr' = '808080'
}
function Clr($node) {
  # node is <a:solidFill> or <a:ln> child container; return "#RRGGBB" or $null
  if ($null -eq $node) { return $null }
  $s = $node.SelectSingleNode('a:srgbClr', $NS)
  if ($s) { return '#' + $s.GetAttribute('val') }
  $c = $node.SelectSingleNode('a:schemeClr', $NS)
  if ($c) { $v = $c.GetAttribute('val'); if ($THEME_CLR.ContainsKey($v)) { return '#' + $THEME_CLR[$v] }; return '#808080' }
  $g = $node.SelectSingleNode('a:gsLst/a:gs/a:srgbClr', $NS)
  if ($g) { return '#' + $g.GetAttribute('val') }
  $gc = $node.SelectSingleNode('a:gsLst/a:gs/a:schemeClr', $NS)
  if ($gc) { $v = $gc.GetAttribute('val'); if ($THEME_CLR.ContainsKey($v)) { return '#' + $THEME_CLR[$v] } }
  return $null
}
function U($emu, $off, $scale) { [math]::Round(($off + [double]$emu * $scale) / 9525.0, 2) }

function Shape-Svg($item) {
  $node = $item.node
  $spPr = $node.SelectSingleNode('p:spPr', $NS)
  if ($null -eq $spPr) { return '' }
  $xfrm = $spPr.SelectSingleNode('a:xfrm', $NS)
  if ($null -eq $xfrm) { return '' }
  $off = $xfrm.SelectSingleNode('a:off', $NS); $ext = $xfrm.SelectSingleNode('a:ext', $NS)
  if ($null -eq $off -or $null -eq $ext) { return '' }
  $flipH = $xfrm.GetAttribute('flipH') -eq '1'
  $flipV = $xfrm.GetAttribute('flipV') -eq '1'
  $rot = 0.0; if ($xfrm.GetAttribute('rot')) { $rot = [int]$xfrm.GetAttribute('rot') / 60000.0 }

  # screen box (px, viewBox units = px)
  $x = ($item.ox + [double]$off.x * $item.sx) / 9525.0
  $y = ($item.oy + [double]$off.y * $item.sy) / 9525.0
  $w = ([double]$ext.cx * $item.sx) / 9525.0
  $h = ([double]$ext.cy * $item.sy) / 9525.0
  if ($w -lt 0.1 -and $h -lt 0.1) { return '' }

  # fill
  $fill = 'none'
  if ($spPr.SelectSingleNode('a:noFill', $NS)) { $fill = 'none' }
  else {
    $sf = $spPr.SelectSingleNode('a:solidFill', $NS); $gf = $spPr.SelectSingleNode('a:gradFill', $NS)
    $c = Clr $sf; if (-not $c) { $c = Clr $gf }
    if ($c) { $fill = $c }
    elseif ($node.LocalName -eq 'cxnSp') { $fill = 'none' }
  }
  # stroke
  $stroke = 'none'; $sw = 1.0
  $ln = $spPr.SelectSingleNode('a:ln', $NS)
  if ($ln) {
    if ($ln.SelectSingleNode('a:noFill', $NS)) { $stroke = 'none' }
    else { $lc = Clr $ln; if ($lc) { $stroke = $lc } elseif ($node.LocalName -eq 'cxnSp') { $stroke = '#3F4040' } }
    if ($ln.GetAttribute('w')) { $sw = [math]::Max(0.4, [math]::Round([double]$ln.GetAttribute('w') / 9525.0, 2)) }
  } elseif ($node.LocalName -eq 'cxnSp') { $stroke = '#3F4040' }
  if ($fill -eq 'none' -and $stroke -eq 'none') { return '' }

  $sa = "fill=""$fill"" stroke=""$stroke""" + $(if ($stroke -ne 'none') { " stroke-width=""$sw""" } else { '' })
  $rotAttr = ''
  if ([math]::Abs($rot) -gt 0.3) { $cx = $x + $w / 2; $cy = $y + $h / 2; $rotAttr = " transform=""rotate($([math]::Round($rot,1)) $([math]::Round($cx,2)) $([math]::Round($cy,2)))""" }

  $cust = $spPr.SelectSingleNode('a:custGeom', $NS)
  $prst = $spPr.SelectSingleNode('a:prstGeom', $NS)

  if ($cust) {
    $path = $cust.SelectSingleNode('a:pathLst/a:path', $NS)
    if ($null -eq $path) { return '' }
    $pw = if ($path.GetAttribute('w')) { [double]$path.GetAttribute('w') } else { [double]$ext.cx }
    $ph2 = if ($path.GetAttribute('h')) { [double]$path.GetAttribute('h') } else { [double]$ext.cy }
    if ($pw -le 0) { $pw = 1 }; if ($ph2 -le 0) { $ph2 = 1 }
    $kx = $w / ($pw / 9525.0); $ky = $h / ($ph2 / 9525.0)
    function PT($ptNode) {
      $px = ([double]$ptNode.x / 9525.0) * $kx + $x
      $py = ([double]$ptNode.y / 9525.0) * $ky + $y
      "$([math]::Round($px,2)) $([math]::Round($py,2))"
    }
    $d = ''
    foreach ($seg in $path.ChildNodes) {
      switch ($seg.LocalName) {
        'moveTo' { $d += "M $(PT $seg.SelectSingleNode('a:pt',$NS)) " }
        'lnTo'   { $d += "L $(PT $seg.SelectSingleNode('a:pt',$NS)) " }
        'cubicBezTo' { $pts = $seg.SelectNodes('a:pt', $NS); if ($pts.Count -eq 3) { $d += "C $(PT $pts[0]) $(PT $pts[1]) $(PT $pts[2]) " } }
        'quadBezTo'  { $pts = $seg.SelectNodes('a:pt', $NS); if ($pts.Count -eq 2) { $d += "Q $(PT $pts[0]) $(PT $pts[1]) " } }
        'arcTo'  { $d += "L " } # crude: arcs approximated as line to next
        'close'  { $d += "Z " }
      }
    }
    $d = ($d -replace 'L (?=$|Z|M)', '').Trim()
    if (-not $d) { return '' }
    return "<path d=""$d"" $sa$rotAttr/>"
  }

  $p = if ($prst) { $prst.GetAttribute('prst') } else { 'rect' }
  $rx = [math]::Round($x, 2); $ry = [math]::Round($y, 2); $rw = [math]::Round($w, 2); $rh = [math]::Round($h, 2)
  switch -Regex ($p) {
    '^(line|straightConnector1)$' {
      $x1 = $rx; $x2 = $rx + $rw; $y1 = $ry; $y2 = $ry + $rh
      if ($flipH) { $t = $x1; $x1 = $x2; $x2 = $t }
      if ($flipV) { $t = $y1; $y1 = $y2; $y2 = $t }
      $st = if ($stroke -eq 'none') { '#3F4040' } else { $stroke }
      return "<line x1=""$x1"" y1=""$y1"" x2=""$x2"" y2=""$y2"" stroke=""$st"" stroke-width=""$sw""$rotAttr/>"
    }
    'ellipse|circle' { return "<ellipse cx=""$([math]::Round($x+$w/2,2))"" cy=""$([math]::Round($y+$h/2,2))"" rx=""$([math]::Round($w/2,2))"" ry=""$([math]::Round($h/2,2))"" $sa$rotAttr/>" }
    'roundRect'      { return "<rect x=""$rx"" y=""$ry"" width=""$rw"" height=""$rh"" rx=""$([math]::Round([math]::Min($rw,$rh)*0.12,2))"" $sa$rotAttr/>" }
    'rightArrow'     { $my = $ry + $rh / 2; $hw = $rw * 0.6; $ah = $rh * 0.25
      $d = "M $rx $($ry+$ah) L $($rx+$hw) $($ry+$ah) L $($rx+$hw) $ry L $($rx+$rw) $my L $($rx+$hw) $($ry+$rh) L $($rx+$hw) $($ry+$rh-$ah) L $rx $($ry+$rh-$ah) Z"
      return "<path d=""$d"" $sa$rotAttr/>" }
    'leftArrow'      { $my = $ry + $rh / 2; $hw = $rw * 0.4; $ah = $rh * 0.25
      $d = "M $($rx+$rw) $($ry+$ah) L $($rx+$hw) $($ry+$ah) L $($rx+$hw) $ry L $rx $my L $($rx+$hw) $($ry+$rh) L $($rx+$hw) $($ry+$rh-$ah) L $($rx+$rw) $($ry+$rh-$ah) Z"
      return "<path d=""$d"" $sa$rotAttr/>" }
    'triangle|isoscelesTriangle' { return "<path d=""M $($rx+$rw/2) $ry L $($rx+$rw) $($ry+$rh) L $rx $($ry+$rh) Z"" $sa$rotAttr/>" }
    default          { return "<rect x=""$rx"" y=""$ry"" width=""$rw"" height=""$rh"" $sa$rotAttr/>" }
  }
}

function Slide-VectorSvg($flat) {
  $parts = New-Object System.Collections.Generic.List[string]
  foreach ($item in $flat) {
    if ($item.kind -ne 'sp' -and $item.kind -ne 'cxn') { continue }
    if ($item.node.SelectSingleNode('.//p:nvPr/p:ph', $NS)) { continue }   # placeholders handled elsewhere
    $g = Shape-Svg $item
    if ($g) { $parts.Add($g) }
  }
  if ($parts.Count -eq 0) { return '' }
  return '<svg class="slide-vector" viewBox="0 0 1056 816" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' + ($parts -join '') + '</svg>'
}

# ---- table ------------------------------------------------------------
function Table-Html($tbl) {
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.Append('<table class="slide-table">')
  foreach ($tr in $tbl.SelectNodes('a:tr', $NS)) {
    [void]$sb.Append('<tr>')
    foreach ($tc in $tr.SelectNodes('a:tc', $NS)) {
      $txt = ''
      $body = $tc.SelectSingleNode('a:txBody', $NS)
      if ($body) { foreach ($p in $body.SelectNodes('a:p', $NS)) { $t = (Runs-Html $p); if ($t) { $txt += ($t + '<br>') } } }
      $txt = $txt -replace '(<br>)+$', ''
      $gs = ''
      if ($tc.GetAttribute('gridSpan')) { $gs += " colspan=""$($tc.GetAttribute('gridSpan'))""" }
      if ($tc.GetAttribute('rowSpan'))  { $gs += " rowspan=""$($tc.GetAttribute('rowSpan'))""" }
      [void]$sb.Append("<td$gs>$txt</td>")
    }
    [void]$sb.Append('</tr>')
  }
  [void]$sb.Append('</table>')
  return $sb.ToString()
}

# ---- MAIN LOOP ------------------------------------------------------
$manifest = @()
$report = @()
$ord = 0
foreach ($sPath in $order) {
  $ord++
  $num = [regex]::Match($sPath, 'slide(\d+)\.xml').Groups[1].Value
  $doc = XmlOf ("ppt/" + $sPath)
  $relsDoc = XmlOf ("ppt/slides/_rels/slide$num.xml.rels")
  $rmap = @{}
  $layoutFile = $null; $notesFile = $null
  if ($relsDoc) {
    foreach ($rel in $relsDoc.Relationships.Relationship) {
      $rmap[$rel.Id] = $rel.Target
      if ($rel.Type -like '*slideLayout') { $layoutFile = 'ppt/slideLayouts/' + ($rel.Target -replace '\.\./slideLayouts/', '') }
      if ($rel.Type -like '*notesSlide')  { $notesFile  = 'ppt/notesSlides/'  + ($rel.Target -replace '\.\./notesSlides/', '') }
    }
  }
  $layoutName = ''
  if ($layoutFile) { $lx = XmlOf $layoutFile; if ($lx) { $cs = $lx.SelectSingleNode('//p:cSld', $NS); if ($cs) { $layoutName = $cs.GetAttribute('name') } } }
  $fam = Family $layoutName
  $phLookup = if ($layoutFile) { LayoutPh $layoutFile } else { @{} }

  # flatten shapes
  $flat = New-Object System.Collections.ArrayList
  $spTree = $doc.SelectSingleNode('//p:cSld/p:spTree', $NS)
  Walk $spTree 0 0 1 1 $flat

  # animation-revealed shapes (Check Your Knowledge answer overlays, builds)
  $revealIds = @{}
  foreach ($t in $doc.SelectNodes('//p:bldLst/p:bldP', $NS)) { if ($t.GetAttribute('spid')) { $revealIds[$t.GetAttribute('spid')] = $true } }
  foreach ($t in $doc.SelectNodes('//p:cTn[@nodeType="clickEffect"]//p:spTgt', $NS)) { if ($t.GetAttribute('spid')) { $revealIds[$t.GetAttribute('spid')] = $true } }

  # detect inline vector artwork (drawn shapes) the generator can't decompose
  $drawShapes = 0
  foreach ($sp in $doc.SelectNodes('//p:sp', $NS)) {
    $geom = $sp.SelectSingleNode('.//p:spPr/a:custGeom', $NS)
    $prst = $sp.SelectSingleNode('.//p:spPr/a:prstGeom', $NS)
    $fill = $sp.SelectSingleNode('.//p:spPr/a:solidFill', $NS)
    $tx = $sp.SelectSingleNode('p:txBody', $NS)
    $hasText = $tx -and ($tx.InnerText -replace '\s', '').Length -gt 1
    if (-not $hasText -and ($geom -or ($prst -and $prst.GetAttribute('prst') -ne 'rect')) -and $fill) { $drawShapes++ }
  }
  $rawLen = $ENTRIES[("ppt/" + $sPath)].Length
  $cxnCount = $doc.SelectNodes('//p:cxnSp', $NS).Count
  $drawnTotal = $doc.SelectNodes('//p:sp[.//p:spPr/a:custGeom or .//p:spPr/a:prstGeom]', $NS).Count + $cxnCount

  # rebuild native vector artwork as SVG when the slide has meaningful line/shape work
  $vecSvg = ''
  if ($drawShapes -ge 3 -or $cxnCount -ge 2) {
    $vecSvg = Slide-VectorSvg $flat
  }
  $clickSteps = $doc.SelectNodes('//p:timing//p:cTn[@nodeType="clickEffect"]', $NS).Count

  $titleHtml = ''
  $bodyBlocks = @()      # {kind:'list'|'text', html, box(optional)}
  $figures = @()         # {style, src, alt, rot, link}
  $tables = @()
  $freeText = @()
  $oleCount = 0; $reviewFlags = @()
  $dividerNumTitle = ''; $dividerObjectives = ''
  $revealAnswer = ''

  foreach ($item in $flat) {
    $node = $item.node
    if ($item.kind -eq 'pic') {
      $blip = $node.SelectSingleNode('.//a:blip', $NS)
      if ($null -eq $blip) { continue }
      $embed = $blip.GetAttribute('embed', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
      if (-not $embed -or -not $rmap.ContainsKey($embed)) { continue }
      $mediaName = ($rmap[$embed] -replace '\.\./media/', '')
      $asset = $mediaName
      $mp = $mediaMap.PSObject.Properties[$mediaName]
      if ($mp) { $asset = $mp.Value } else { continue }
      $b = ShapeBox $item $phLookup
      if ($null -eq $b) { continue }
      $alt = ''
      $cNvPr = $node.SelectSingleNode('.//p:cNvPr', $NS)
      if ($cNvPr) { $d = $cNvPr.GetAttribute('descr'); $nm = $cNvPr.GetAttribute('name'); if ($d -and $d -notlike '*\*') { $alt = $d } elseif ($nm) { $alt = $nm } }
      $link = $null
      $hl = $node.SelectSingleNode('.//p:cNvPr/a:hlinkClick', $NS)
      if ($hl -and $hl.GetAttribute('action') -like '*hlinksldjump*') {
        $lid = $hl.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
        if ($rmap.ContainsKey($lid)) { $tn = [regex]::Match($rmap[$lid], 'slide(\d+)\.xml').Groups[1].Value; if ($tn) { $link = "1400-$('{0:D3}' -f [int]$tn).html" } }
      }
      $figures += @{ style = (BoxStyle $b); src = "../assets/img/$asset"; alt = (Esc $alt); rot = $b.rot; link = $link; est = $b.est }
      continue
    }
    if ($item.kind -eq 'gf') {
      $gd = $node.SelectSingleNode('.//a:graphicData', $NS)
      $uri = if ($gd) { $gd.GetAttribute('uri') } else { '' }
      if ($uri -like '*/table') {
        $tbl = $node.SelectSingleNode('.//a:tbl', $NS)
        $b = ShapeBox $item $phLookup
        if ($tbl -and $b) { $tables += @{ style = (BoxStyle $b); html = (Table-Html $tbl) } }
      }
      elseif ($uri -like '*/ole' -or $uri -like '*chart*' -or $uri -like '*diagram*') {
        $oleCount++
        $fb = $node.SelectSingleNode('.//mc:Fallback//p:pic//a:blip', $NS)
        if ($null -eq $fb) { $fb = $node.SelectSingleNode('.//p:pic//a:blip', $NS) }
        $b = ShapeBox $item $phLookup
        if ($fb -and $b) {
          $embed = $fb.GetAttribute('embed', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
          if ($embed -and $rmap.ContainsKey($embed)) {
            $mediaName = ($rmap[$embed] -replace '\.\./media/', '')
            $mp = $mediaMap.PSObject.Properties[$mediaName]
            if ($mp) {
              $figures += @{ style = (BoxStyle $b); src = "../assets/img/$($mp.Value)"; alt = 'Embedded object (converted)'; rot = 0; link = $null; est = $b.est; ole = $true; staged = [bool]$b.badpos }
            }
          }
        }
        $reviewFlags += "ole-fallback"
      }
      continue
    }
    # ---- sp
    $ph = $node.SelectSingleNode('.//p:nvSpPr/p:nvPr/p:ph', $NS)
    $txBody = $node.SelectSingleNode('p:txBody', $NS)
    $phType = if ($ph) { $ph.GetAttribute('type') } else { '' }
    $phIdx  = if ($ph) { $ph.GetAttribute('idx') } else { '' }

    if ($phType -in 'title', 'ctrTitle') {
      $tt = ''
      foreach ($p in $txBody.SelectNodes('a:p', $NS)) { $tt += (Runs-Html $p) }
      $tt = ($tt -replace '\s+', ' ').Trim()
      $tt = $tt -replace '(\s|&nbsp;|\u00A0)+$', ''
      if ($tt) { $titleHtml = $tt }
      continue
    }

    if ($fam -eq 'divider' -and $ph) {
      $plain = Plain $txBody
      if ($phIdx -eq '13' -or ($plain -match '^\d+\.\s' -and $plain.Length -lt 90)) { $dividerNumTitle = ($txBody.SelectNodes('a:p', $NS) | ForEach-Object { Runs-Html $_ }) -join ' '; continue }
      # objectives
      $ol = New-Object System.Text.StringBuilder
      [void]$ol.Append('<ol class="divider-objectives">')
      foreach ($p in $txBody.SelectNodes('a:p', $NS)) {
        $t = Runs-Html $p
        if (($t -replace '<[^>]+>', '').Trim().Length -eq 0) { continue }
        if ($t -match '^\s*\d+\.\s' -and $t.Length -lt 90 -and -not $dividerNumTitle) { $dividerNumTitle = $t; continue }
        [void]$ol.Append("<li>$t</li>")
      }
      [void]$ol.Append('</ol>')
      $dividerObjectives = $ol.ToString()
      continue
    }

    if ($null -eq $txBody -or (Plain $txBody).Length -eq 0) { continue }

    if ($ph -and $fam -in 'one-col', 'two-col', 'four-col', 'title-text-content', 'toc') {
      $lst = Body-ListHtml $txBody 15
      if ($lst) { $bodyBlocks += @{ kind = 'list'; html = $lst; idx = $phIdx } }
    }
    else {
      # free text box
      $spId = ''
      $idNode = $node.SelectSingleNode('.//p:cNvPr', $NS)
      if ($idNode) { $spId = $idNode.GetAttribute('id') }
      $inner = ''
      foreach ($p in $txBody.SelectNodes('a:p', $NS)) { $t = Runs-Html $p; if ($t) { $inner += "<p>$t</p>" } }
      $plainT = ($txBody.InnerText -replace '\s+', ' ').Trim()
      if ($inner -and $plainT.Length -gt 0) {
        if ($revealIds.ContainsKey($spId)) {
          # Check-Your-Knowledge answer overlay - hidden until click
          $reveal = ($txBody.SelectNodes('a:p', $NS) | ForEach-Object { Runs-Html $_ }) -join ' '
          $revealAnswer = ($reveal -replace '<[^>]+>', '').Trim()
        } else {
          $b = ShapeBox $item $phLookup
          $sz = 18
          $r = $txBody.SelectSingleNode('.//a:rPr', $NS); if ($r -and $r.GetAttribute('sz')) { $sz = [int]$r.GetAttribute('sz') / 100.0 }
          if ($b) { $freeText += @{ style = (BoxStyle $b) + ";font-size:$(Pt2Cqw $sz)cqw"; html = $inner } }
          else { $bodyBlocks += @{ kind = 'text'; html = $inner } }
        }
      }
    }
  }

  # ---- notes
  $notesHtml = ''
  if ($notesFile) {
    $nd = XmlOf $notesFile
    if ($nd) {
      $body = $nd.SelectSingleNode('//p:sp[.//p:ph[@type="body"]]/p:txBody', $NS)
      if ($body) {
        $txt = (Plain $body)
        $txt = ($txt -replace '^\s*' + [regex]::Escape("$ord") + '\s*', '').Trim()
        if ($txt.Length -gt 12) { $notesHtml = '<aside class="notes"><p>' + (Esc $txt) + '</p></aside>' }
      }
    }
  }

  # ---- assemble body html per family
  $needsChrome = ($fam -in $CHROME_FAMILIES)
  $inner = New-Object System.Text.StringBuilder

  if ($fam -eq 'cover') {
    $meta = ''
    foreach ($bb in $bodyBlocks) { $meta += ($bb.html -replace '</?ul>', '' -replace '<li[^>]*>', '' -replace '</li>', ' ') }
    [void]$inner.Append(@"
    <img class="cover-photo" src="../assets/brand/cover-photo.jpeg" alt="">
    <div class="cover-panel"></div>
    <h1 class="cover-title">$titleHtml</h1>
    <div class="cover-rule"></div>
    <p class="cover-meta">$($meta.Trim())</p>
    <img class="cover-logo" src="../assets/brand/logo-emerson-corp-2c-white.png" alt="Emerson">
    <img class="cover-logo cover-logo--secondary" src="../assets/brand/cover-iacet-badge.png" alt="Accredited IACET Provider">
"@)
  }
  elseif ($fam -eq 'breaker') {
    [void]$inner.Append("    <h1 class=""breaker-title"">$titleHtml</h1>`n")
    [void]$inner.Append("    <span class=""breaker-footer"">Emerson Confidential</span><span class=""breaker-pageno"">$ord</span>`n")
  }
  elseif ($fam -eq 'divider') {
    if (-not $dividerNumTitle) { $dividerNumTitle = $titleHtml }
    [void]$inner.Append("    <p class=""divider-number-title"">$dividerNumTitle</p>`n")
    [void]$inner.Append("    <p class=""divider-lead"">After completing this module the student will be able to:</p>`n")
    if ($dividerObjectives) { [void]$inner.Append("    $dividerObjectives`n") }
    [void]$inner.Append("    <div class=""slide-chrome""><img class=""slide-chrome__logo"" src=""../assets/brand/logo-emerson-corp-2c.png"" alt=""Emerson""></div>`n")
  }
  else {
    if ($titleHtml) { [void]$inner.Append("    <h1 class=""slide-title"">$titleHtml</h1>`n") }
    if ($fam -eq 'four-col') {
      # layout21: idx 12-15 = cyan subhead cards, idx 16-19 = body columns
      [void]$inner.Append('    <div class="slide-cards">' + "`n")
      $lists = @($bodyBlocks | Where-Object { $_.kind -eq 'list' })
      $heads = @($lists | Where-Object { $_.idx -in '12', '13', '14', '15' })
      $bodies = @($lists | Where-Object { $_.idx -in '16', '17', '18', '19' })
      if ($heads.Count -gt 0 -and $bodies.Count -gt 0) {
        for ($c = 0; $c -lt [Math]::Max($heads.Count, $bodies.Count); $c++) {
          $ht = if ($c -lt $heads.Count) { ($heads[$c].html -replace '</?ul>|</?li[^>]*>', ' ').Trim() } else { '' }
          $bd = if ($c -lt $bodies.Count) { $bodies[$c].html } else { '' }
          [void]$inner.Append("      <div class=""card""><h2>$ht</h2><div class=""card-body"">$bd</div></div>`n")
        }
      } else {
        foreach ($c in $lists) { [void]$inner.Append("      <div class=""card""><div class=""card-body"">$($c.html)</div></div>`n") }
      }
      [void]$inner.Append("    </div>`n")
    }
    elseif ($fam -eq 'title-text-content') {
      foreach ($bb in $bodyBlocks) { if ($bb.kind -eq 'list') { [void]$inner.Append("    <div class=""slide-body"">$($bb.html)</div>`n") } }
      foreach ($f in $figures) { [void]$inner.Append("    <div class=""slide-content""><img src=""$($f.src)"" alt=""$($f.alt)""></div>`n") }
      if ($oleCount -gt 0) { [void]$inner.Append("    <p class=""content-note"">Figure from an embedded object &mdash; verify against source.</p>`n") }
      $figures = @()   # consumed
    }
    else {
      $bodyInner = ''
      foreach ($bb in $bodyBlocks) { $bodyInner += $bb.html }
      if ($bodyInner) { [void]$inner.Append("    <div class=""slide-body"">$bodyInner</div>`n") }
    }
    # figures with junk coordinates: stack them centred in the content area
    $staged = @($figures | Where-Object { $_.staged })
    if ($staged.Count -gt 0) {
      $n = $staged.Count
      $top = 20.0; $band = (78.0 - $top) / $n
      for ($si = 0; $si -lt $n; $si++) {
        $sf = $staged[$si]
        $st = "left:10%;width:80%;top:$([math]::Round($top + $si * $band,2))cqh;height:$([math]::Round($band - 2,2))cqh"
        [void]$inner.Append("    <figure class=""slide-figure"" style=""$st""><img src=""$($sf.src)"" alt=""$($sf.alt)""></figure>`n")
      }
    }
    # figures (all families): absolute-positioned
    foreach ($f in $figures) {
      if ($f.staged) { continue }
      $rotStyle = if ([math]::Abs($f.rot) -gt 0.5) { ";transform:rotate($([math]::Round($f.rot,1))deg)" } else { '' }
      $imgTag = "<img src=""$($f.src)"" alt=""$($f.alt)"">"
      $figTag = "<figure class=""slide-figure"" style=""$($f.style)$rotStyle"">$imgTag</figure>"
      if ($f.link) { $figTag = "<a href=""$($f.link)"">$figTag</a>" }
      [void]$inner.Append("    $figTag`n")
    }
    foreach ($t in $tables) { [void]$inner.Append("    <div class=""slide-figure"" style=""$($t.style)"">$($t.html)</div>`n") }
    foreach ($ft in $freeText) { [void]$inner.Append("    <div class=""slide-textbox"" style=""$($ft.style)"">$($ft.html)</div>`n") }
    if ($revealAnswer) {
      [void]$inner.Append("    <p class=""reveal-answer"">$(Esc $revealAnswer)</p>`n")
    }
    if ($needsChrome) {
      [void]$inner.Append("    <div class=""slide-chrome""><span class=""slide-chrome__copyright""></span><span class=""slide-chrome__pageno"">$ord</span><img class=""slide-chrome__logo"" src=""../assets/brand/logo-emerson-corp-2c.png"" alt=""Emerson""></div>`n")
    }
  }
  if ($fam -eq 'blank') {
    # if a single pic ~covers the slide, mark bleed
    $inner2 = New-Object System.Text.StringBuilder
    if ($figures.Count -eq 1) {
      [void]$inner2.Append("    <figure class=""slide-figure--bleed"" data-fit=""contain""><img src=""$($figures[0].src)"" alt=""$($figures[0].alt)""></figure>`n")
      $inner = $inner2
    }
  }

  if ($vecSvg -and ($drawShapes -ge 40 -or $rawLen -gt 500000)) { $reviewFlags += 'svg-rebuilt' }
  if ($clickSteps -ge 2 -and ($oleCount -ge 1 -or $figures.Count -ge 2)) {
    $reviewFlags = @($reviewFlags | Where-Object { $_ -ne 'ole-fallback' }) + 'animation-flattened'
  }
  $flags = ($reviewFlags | Select-Object -Unique) -join ' '
  $title3 = ($titleHtml -replace '<[^>]+>', '')
  $pnum = '{0:D3}' -f $ord
  $page = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>14101 &middot; Slide $pnum &mdash; $(Esc $title3)</title>
<link rel="stylesheet" href="../css/emerson-workbench.css">
<script src="../assets/slides.js" defer></script>
</head>
<body class="ew-deck">
<main class="ew-stage">
  <!-- Slide $ord | ppt $sPath | layout: $layoutName | family: .slide--$fam -->
  <article class="slide slide--$fam" data-slide="$ord" data-deck="1400"$( if($flags){" data-review=""$flags"""} )>
$( if($flags){"    <div class=""review-ribbon"">$flags</div>`n"} )$( if($vecSvg){"    $vecSvg`n"} )$($inner.ToString())  </article>
  $notesHtml
</main>
</body>
</html>
"@
  [System.IO.File]::WriteAllText((Join-Path $slidesDir "1400-$pnum.html"), $page, (New-Object System.Text.UTF8Encoding($false)))

  $manifest += [ordered]@{ n = $ord; file = "1400-$pnum.html"; family = $fam; section = (SectionOf $ord); title = $title3; hasNotes = [bool]$notesHtml; review = $flags }
  $report += [pscustomobject]@{ ord = $ord; slide = "slide$num"; family = $fam; layout = $layoutName; figures = $figures.Count; tables = $tables.Count; ole = $oleCount; freeText = $freeText.Count; titleLen = $title3.Length; notes = [bool]$notesHtml; flags = $flags }
}
$zip.Dispose()

$mjson = ($manifest | ConvertTo-Json -Depth 4)
$mjson | Out-File -Encoding utf8 (Join-Path $build 'manifest.json')
("window.EW_MANIFEST = " + $mjson + ";") | Out-File -Encoding utf8 (Join-Path $build 'manifest.js')
$report | Export-Csv -NoTypeInformation -Encoding utf8 (Join-Path $build 'conversion-report.csv')

Write-Output ("slides written : " + $report.Count)
Write-Output ("families:")
$report | Group-Object family | Sort-Object Count -Descending | ForEach-Object { "  {0,4}  {1}" -f $_.Count, $_.Name }
Write-Output ("with OLE/review flags : " + ($report | Where-Object { $_.flags } ).Count)
Write-Output ("with notes           : " + ($report | Where-Object { $_.notes } ).Count)
Write-Output ("zero figures & zero body (check) : " + ($report | Where-Object { $_.figures -eq 0 -and $_.titleLen -eq 0 }).Count)
