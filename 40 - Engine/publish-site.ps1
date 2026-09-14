# ============================================================================
#  publish-site.ps1  -  assemble the GitHub Pages /docs output for one or
#  more courses, sharing one Source Library folder across all of them.
#
#  What it does, per course:
#    1. Copies Presentation/build/ (slides, css, assets, manifest.js,
#       index.html) into docs/courses/<slug>/ untouched — its relative
#       paths (css/..., assets/..., slides/...) keep working as-is.
#    2. Reads Presentation/course/course.json's own "library" block (the
#       same data the Workshop shell's 📚 panel already uses locally) and
#       writes a PUBLISHED variant, docs/courses/<slug>/library.json, with
#       base rewritten from the vault-relative "../../../../20 - Source
#       Library/" to the site-root-absolute "/source-library/" — the only
#       change; the panel's own JS (ported into the engine's build/index.html
#       template) just concatenates base + file, so no code change needed.
#    3. Copies each PDF that library block cites into ONE shared
#       docs/source-library/ tree (deduped — copied once even if several
#       courses cite the same document), never into the course's own folder.
#
#  Then writes docs/index.html, a plain landing page listing every published
#  course.
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
# every text output through this instead — real UTF-8, no BOM, no guessing.
function Write-Utf8NoBom([string]$Path, [string]$Content) {
  [System.IO.File]::WriteAllText($Path, $Content, (New-Object System.Text.UTF8Encoding($false)))
}

$engineRoot = $PSScriptRoot
$vault      = Split-Path $engineRoot -Parent
if (-not $DocsRoot) { $DocsRoot = Join-Path $vault 'docs' }
$libRoot    = Join-Path $DocsRoot 'source-library'

function Slugify([string]$name) {
  ($name.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
}

# Build-tree entries that are authoring/QA scaffolding, never published.
$excludeNames = @('_engine-lock.json', '_engine-snapshots', '_generator', '_preview')

New-Item -ItemType Directory -Force $DocsRoot | Out-Null
New-Item -ItemType Directory -Force $libRoot  | Out-Null

function Publish-LibraryDoc($doc, [string]$courseLabel) {
  # Copies one cited PDF into the shared source-library tree (no-op if
  # already there from a previous course) and returns $true if it's now
  # safe to include in the published library.json.
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
  $buildSrc       = Join-Path $courseRoot 'Presentation\build'
  $courseJsonPath = Join-Path $courseRoot 'Presentation\course\course.json'

  if (-not (Test-Path -LiteralPath $buildSrc))       { throw "no Presentation/build/ for course: $course" }
  if (-not (Test-Path -LiteralPath $courseJsonPath)) { throw "no course.json for course: $course" }

  $slug = Slugify $course
  $dst  = Join-Path $DocsRoot "courses\$slug"
  Write-Host "`nPublishing '$course' -> docs/courses/$slug/"

  if (Test-Path -LiteralPath $dst) { Remove-Item -LiteralPath $dst -Recurse -Force }
  New-Item -ItemType Directory -Force $dst | Out-Null

  Get-ChildItem -LiteralPath $buildSrc -Force |
    Where-Object { $excludeNames -notcontains $_.Name } |
    ForEach-Object { Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $dst $_.Name) -Recurse -Force }

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

    $pubLib = [ordered]@{ base = '/source-library/' }
    if ($lib.note)          { $pubLib.note     = $lib.note }
    if ($pubPrimary.Count)  { $pubLib.primary  = $pubPrimary }
    if ($pubColumns.Count)  { $pubLib.columns  = $pubColumns }

    Write-Utf8NoBom (Join-Path $dst 'library.json') ($pubLib | ConvertTo-Json -Depth 8)
    Write-Host "  wrote library.json ($($pubPrimary.Count) primary, $($pubColumns.Count) column groups)"
  } else {
    Write-Host "  no library block in course.json — 📚 panel stays hidden for this course"
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
  $cardLines.Add("  <li class=`"course`"><a href=`"courses/$($c.slug)/`">$(HtmlEnc $c.title)</a><p>$(HtmlEnc $c.summary)</p></li>")
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
