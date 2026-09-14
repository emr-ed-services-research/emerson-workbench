# ============================================================================
#  publish-site.ps1  -  assemble the GitHub Pages /docs output for one or
#  more courses, sharing one Source Library folder across all of them.
#
#  Publishes the REAL Workshop viewer (Presentation/course/  -  contents pane,
#  context pane, present mode, the panel), not the flat build/index.html
#  QA/review surface. course/index.html depends on its sibling build/ folder
#  at runtime (../build/manifest.js, ../build/assets/...), so build/ ships
#  alongside it unchanged, preserving that exact relative relationship  - 
#  every path inside course/ and inside the slide files themselves resolves
#  completely unchanged. The one thing that DOES need rewriting is
#  library.base, which in the vault is a "../../../../20 - Source Library/"
#  escape that only resolves when the whole vault is co-located; the
#  published copy gets a PAGE-RELATIVE "../../../source-library/" instead
#  (NOT a site-root-absolute "/source-library/" - a real bug, confirmed
#  2026-09-14 by an actual click-through: this is a GitHub Pages PROJECT
#  site served under a repo-name path prefix, and a root-absolute path
#  resolves against the domain root instead, skipping that prefix and
#  404ing - see the note by $PUBLISHED_BASE below).
#
#  What it does, per course:
#    1. Copies Presentation/course/ (index.html, course.js, course.css,
#       course-data.js) into docs/courses/<slug>/course/.
#    2. Copies Presentation/build/ (slides, css, assets, manifest.js) into
#       docs/courses/<slug>/build/  -  course/'s required sibling.
#    3. Rewrites library.base to the page-relative published path in the
#       PUBLISHED copy of course-data.js only (the vault's own copy is
#       untouched)  -  a plain text substitution, since that exact string is
#       unique in the file. Also writes build/library.json with the same
#       rewritten shelf, so the QA viewer's own panel works too if anyone
#       opens it directly.
#    4. Copies every PDF the course's library block cites into ONE shared
#       docs/source-library/ tree (deduped  -  copied once even if several
#       courses cite the same document).
#    5. Recompresses the published copy of build/assets/sourced/*.png (the
#       Component-Index PDF crops slides actually reference) into resized,
#       quality-84 JPEGs, and rewrites the matching <img src> references in
#       the published slide HTML. This ONLY ever touches the copy already
#       sitting in docs/ - the vault's own Presentation/build/assets/sourced/
#       PNGs are never read for writing, only read once to produce the
#       compressed copy, so an instructor's local working files are
#       untouched no matter how many times this script runs.
#
#  The shelf itself is standing, shared infrastructure, not curated per
#  course: every course's own library block should list the same real
#  documents (today: the 21 matching 14101's own primary+columns) so the
#  panel shows the same shared library everywhere, and this script's own
#  dedup is what keeps the actual PDF bytes from being copied more than once.
#
#  Then writes docs/index.html, a plain landing page listing every published
#  course (linking to its course/ entry point).
#
#  Usage:
#    .\publish-site.ps1 -Courses "Control Valve Basics"
#    .\publish-site.ps1 -Courses "Control Valve Basics","14101 Valve Trim and Body Maintenance"
# ============================================================================
param(
  [Parameter(Mandatory = $true)] [string[]] $Courses,
  [string] $DocsRoot
)
$ErrorActionPreference = 'Stop'

# Windows PowerShell 5.1's Out-File -Encoding utf8 always adds a BOM and,
# combined with Get-Content's own encoding guesswork, can silently mangle
# non-ASCII characters (em dash, middot) on a read/write round trip. Write
# every text output through this instead  -  real UTF-8, no BOM, no guessing.
function Write-Utf8NoBom([string]$Path, [string]$Content) {
  [System.IO.File]::WriteAllText($Path, $Content, (New-Object System.Text.UTF8Encoding($false)))
}
function Read-Utf8([string]$Path) {
  [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8)
}

$engineRoot = $PSScriptRoot
$vault      = Split-Path $engineRoot -Parent
if (-not $DocsRoot) { $DocsRoot = Join-Path $vault 'docs' }
$libRoot    = Join-Path $DocsRoot 'source-library'

# Real bug, confirmed 2026-09-14 by an actual click-through (a raw curl to
# the direct file URL had returned 200 and missed this entirely): this site
# is a GitHub Pages PROJECT site, served under a path prefix matching the
# repo name (.../emerson-workbench/...), not a user/org root site. A
# root-absolute path like "/source-library/..." resolves in a browser
# against the DOMAIN root, not the project's own base path - it silently
# skips the "/emerson-workbench/" prefix and 404s. A page-relative path has
# no such problem and needs no knowledge of the domain or repo name at all.
# Every course page lives at docs/courses/<slug>/course-or-build/ - exactly
# 3 levels under docs/ - so this same relative path is correct from both
# course/ and build/ (siblings at the same depth).
$VAULT_RELATIVE_BASE  = '../../../../20 - Source Library/'
$PUBLISHED_BASE       = '../../../source-library/'

function Slugify([string]$name) {
  ($name.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
}

Add-Type -AssemblyName System.Drawing

# Same resize + Save-Jpeg approach as 40 - Engine/generator/extract-media.ps1
# (max-width cap, quality 84) but applied to the sourced/ crop folder that
# script never touches, and always reading the vault's PNG / writing a JPEG
# into the docs/ copy only - never the reverse.
function Save-Jpeg($bmp, $path, $q) {
  $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $pp = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $pp.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$q)
  $bmp.Save($path, $enc, $pp)
}
function Compress-SourcedImages([string]$publishedBuildDir, [string]$courseLabel) {
  $sourcedDir = Join-Path $publishedBuildDir 'assets\sourced'
  if (-not (Test-Path -LiteralPath $sourcedDir)) { return }
  $pngs = Get-ChildItem -LiteralPath $sourcedDir -Filter '*.png' -File
  if ($pngs.Count -eq 0) { return }

  $renamed = @{}   # original basename (no ext) -> $true, for the slide-html rewrite pass
  $beforeTotal = 0; $afterTotal = 0
  foreach ($png in $pngs) {
    $beforeBytes = $png.Length
    $bn = [System.IO.Path]::GetFileNameWithoutExtension($png.Name)
    $jpgPath = Join-Path $sourcedDir "$bn.jpg"
    $s = [System.Drawing.Image]::FromFile($png.FullName)
    $maxW = 1600
    if ($s.Width -le $maxW) {
      $d = New-Object System.Drawing.Bitmap($s)
    } else {
      $nw = $maxW; $nh = [int]($s.Height * $nw / $s.Width)
      $d = New-Object System.Drawing.Bitmap($nw, $nh)
      $g = [System.Drawing.Graphics]::FromImage($d)
      $g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'HighQuality'
      $g.DrawImage($s, 0, 0, $nw, $nh); $g.Dispose()
    }
    $s.Dispose()
    Save-Jpeg $d $jpgPath 84
    $d.Dispose()
    Remove-Item -LiteralPath $png.FullName -Force   # published copy only - vault PNG untouched
    $afterBytes = (Get-Item -LiteralPath $jpgPath).Length
    $beforeTotal += $beforeBytes; $afterTotal += $afterBytes
    $renamed[$bn] = $true
  }

  $slidesDir = Join-Path (Split-Path $publishedBuildDir -Parent) 'build\slides'
  $rewrittenSlides = 0
  if (Test-Path -LiteralPath $slidesDir) {
    Get-ChildItem -LiteralPath $slidesDir -Filter '*.html' -File | ForEach-Object {
      $text = Read-Utf8 $_.FullName
      $orig = $text
      foreach ($bn in $renamed.Keys) {
        $text = $text -replace [regex]::Escape("assets/sourced/$bn.png"), "assets/sourced/$bn.jpg"
      }
      if ($text -ne $orig) { Write-Utf8NoBom $_.FullName $text; $rewrittenSlides++ }
    }
  }

  $beforeMB = [math]::Round($beforeTotal / 1MB, 1); $afterMB = [math]::Round($afterTotal / 1MB, 1)
  $pct = [math]::Round((1 - ($afterTotal / $beforeTotal)) * 100, 1)
  Write-Host "  [$courseLabel] compressed $($pngs.Count) sourced images: ${beforeMB}MB -> ${afterMB}MB ($pct% smaller), $rewrittenSlides slide file(s) rewritten"
}

# Build-tree entries that are authoring/QA scaffolding, never published.
$excludeNames = @('_engine-lock.json', '_engine-snapshots', '_generator', '_preview')

New-Item -ItemType Directory -Force $DocsRoot | Out-Null
New-Item -ItemType Directory -Force $libRoot  | Out-Null

function Publish-LibraryDoc($doc, [string]$courseLabel) {
  # Copies one cited PDF into the shared source-library tree (no-op if
  # already there from a previous course) and returns $true if it's now
  # safe to include in the published library data.
  $srcPdf = Join-Path $vault "20 - Source Library\$($doc.file)"
  if (-not (Test-Path -LiteralPath $srcPdf)) {
    Write-Warning "  [$courseLabel] source PDF not found, dropped from published shelf: $($doc.file)"
    return $false
  }
  $dstPdf = Join-Path $libRoot $doc.file
  $dstDir = Split-Path $dstPdf -Parent
  New-Item -ItemType Directory -Force $dstDir | Out-Null
  if (-not (Test-Path -LiteralPath $dstPdf)) {
    Copy-Item -LiteralPath $srcPdf -Destination $dstPdf -Force
    Write-Host "  copied to shared source-library: $($doc.file)"
  } else {
    Write-Host "  already in shared source-library (reused, not duplicated): $($doc.file)"
  }
  return $true
}

$publishedCourses = @()

foreach ($course in $Courses) {
  $courseRoot     = Join-Path $vault "10 - Courses\$course"
  $courseSrc      = Join-Path $courseRoot 'Presentation\course'
  $buildSrc       = Join-Path $courseRoot 'Presentation\build'
  $courseJsonPath = Join-Path $courseSrc 'course.json'
  $courseDataPath = Join-Path $courseSrc 'course-data.js'

  if (-not (Test-Path -LiteralPath $courseSrc))      { throw "no Presentation/course/ for course: $course" }
  if (-not (Test-Path -LiteralPath $buildSrc))       { throw "no Presentation/build/ for course: $course" }
  if (-not (Test-Path -LiteralPath $courseJsonPath)) { throw "no course.json for course: $course" }
  if (-not (Test-Path -LiteralPath $courseDataPath)) { throw "no course-data.js for course: $course" }

  $slug     = Slugify $course
  $dstCourse = Join-Path $DocsRoot "courses\$slug\course"
  $dstBuild  = Join-Path $DocsRoot "courses\$slug\build"
  Write-Host "`nPublishing '$course' -> docs/courses/$slug/course/ (+ sibling build/)"

  foreach ($d in @($dstCourse, $dstBuild)) {
    if (Test-Path -LiteralPath $d) { Remove-Item -LiteralPath $d -Recurse -Force }
    New-Item -ItemType Directory -Force $d | Out-Null
  }

  # course/  -  the real Workshop shell
  Get-ChildItem -LiteralPath $courseSrc -Force |
    Where-Object { $excludeNames -notcontains $_.Name -and $_.Name -ne 'course.json' } |
    ForEach-Object { Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $dstCourse $_.Name) -Recurse -Force }

  # build/  -  course/'s required sibling (manifest.js, css/, assets/, slides/);
  # its own index.html (the QA viewer) is harmless to include and not linked
  # from the landing page.
  Get-ChildItem -LiteralPath $buildSrc -Force |
    Where-Object { $excludeNames -notcontains $_.Name } |
    ForEach-Object { Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $dstBuild $_.Name) -Recurse -Force }

  # Publish-only compression: reads the just-copied PNGs (already a copy,
  # inside docs/), writes resized quality-84 JPEGs over them in that same
  # copy, and updates the matching <img src> in the published slide HTML.
  # The vault's own Presentation/build/assets/sourced/*.png are only ever
  # read (by the copy step above), never written to.
  Compress-SourcedImages $dstBuild $course

  # Rewrite library.base in the PUBLISHED course-data.js only  -  plain text
  # substitution; the vault's own copy (and course.json, not published at
  # all) are untouched.
  $courseDataText = Read-Utf8 (Join-Path $dstCourse 'course-data.js')
  $escapedBase = [regex]::Escape('"base": "' + $VAULT_RELATIVE_BASE + '"')
  $rewritten = [regex]::Replace($courseDataText, $escapedBase, '"base": "' + $PUBLISHED_BASE + '"')
  if ($rewritten -eq $courseDataText) {
    Write-Warning "  library.base string not found in course-data.js  -  nothing rewritten (check for drift from the expected vault-relative path)"
  } else {
    Write-Utf8NoBom (Join-Path $dstCourse 'course-data.js') $rewritten
    Write-Host "  rewrote library.base -> $PUBLISHED_BASE in published course-data.js"
  }

  $courseJson = Get-Content -LiteralPath $courseJsonPath -Raw -Encoding UTF8 | ConvertFrom-Json
  $lib = $courseJson.library

  if ($lib) {
    $pubPrimary = @()
    foreach ($d in ($lib.primary | Where-Object { $_ })) {
      if (Publish-LibraryDoc $d $course) { $pubPrimary += $d }
    }
    $pubColumns = @()
    foreach ($col in ($lib.columns | Where-Object { $_ })) {
      $keptDocs = @()
      foreach ($d in ($col.docs | Where-Object { $_ })) {
        if (Publish-LibraryDoc $d $course) { $keptDocs += $d }
      }
      if ($keptDocs.Count -gt 0) {
        $pubColumns += [ordered]@{ title = $col.title; docs = $keptDocs }
      }
    }

    $pubLib = [ordered]@{ base = $PUBLISHED_BASE }
    if ($lib.note)          { $pubLib.note     = $lib.note }
    if ($pubPrimary.Count)  { $pubLib.primary  = $pubPrimary }
    if ($pubColumns.Count)  { $pubLib.columns  = $pubColumns }

    # build/library.json  -  only consumed by build/index.html's own panel
    # (the QA viewer), kept working for anyone who opens it directly.
    Write-Utf8NoBom (Join-Path $dstBuild 'library.json') ($pubLib | ConvertTo-Json -Depth 8)
    Write-Host "  library shelf: $($pubPrimary.Count) primary, $($pubColumns.Count) column groups"
  } else {
    Write-Host "  no library block in course.json  -  panel stays hidden for this course"
  }

  $publishedCourses += [ordered]@{
    title   = $courseJson.course.title
    slug    = $slug
    summary = $courseJson.course.summary
  }
}

# ---- landing page --------------------------------------------------------
function HtmlEnc([string]$s) { [System.Net.WebUtility]::HtmlEncode($s) }

$cardLines = New-Object System.Collections.Generic.List[string]
foreach ($c in $publishedCourses) {
  $cardLines.Add("  <li class=`"course`"><a href=`"courses/$($c.slug)/course/`">$(HtmlEnc $c.title)</a><p>$(HtmlEnc $c.summary)</p></li>")
}
$cards = [string]::Join("`n", $cardLines)

$indexHtml = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Emerson Workbench &mdash; Published Courses</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; background: #1b1b1b; color: #e8e8e8; font: 15px/1.5 Arial, Helvetica, sans-serif; }
  header { padding: 2rem 1.5rem 1rem; border-bottom: 1px solid #2c2c2c; }
  header h1 { margin: 0; font-size: 1.3rem; color: #fff; }
  main { max-width: 760px; margin: 0 auto; padding: 1.5rem; }
  ul.course { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .9rem; }
  li.course { background: #232323; border: 1px solid #333; border-radius: 8px; padding: 1rem 1.2rem; }
  li.course a { color: #6fb2e6; font-size: 1.05rem; font-weight: 700; text-decoration: none; }
  li.course a:hover { text-decoration: underline; }
  li.course p { margin: .4rem 0 0; color: #a8a8a8; font-size: .92rem; }
</style>
</head>
<body>
<header><h1>Emerson Workbench &mdash; Published Courses</h1></header>
<main>
<ul class="course">
$cards
</ul>
</main>
</body>
</html>
"@
Write-Utf8NoBom (Join-Path $DocsRoot 'index.html') $indexHtml

Write-Host "`nDone. Landing page: docs/index.html; $($publishedCourses.Count) course(s) published."
