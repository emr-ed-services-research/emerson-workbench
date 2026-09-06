# ============================================================================
#  _paths.ps1  -  resolve every path the generator needs from a course name.
#
#  Dot-source it, then call Resolve-CoursePaths:
#
#     . "$PSScriptRoot\_paths.ps1"
#     $P = Resolve-CoursePaths -Course "14101 Valve Trim and Body Maintenance"
#
#  This is the single place that knows the vault layout. extract-media.ps1,
#  generate.ps1, compare.ps1 and export-orig.ps1 all get their paths here so a
#  second course is `-Course "<name>"` and nothing else.
# ============================================================================

function Resolve-CoursePaths {
  param(
    [Parameter(Mandatory = $true)] [string] $Course,
    [string] $SourcePptx,
    [string] $TmpDir
  )

  # generator/ lives at  <vault>/40 - Engine/generator/
  $engineRoot = Split-Path $PSScriptRoot -Parent
  $vault      = Split-Path $engineRoot -Parent
  $courseDir  = Join-Path $vault "10 - Courses\$Course"
  if (-not (Test-Path $courseDir)) { throw "course folder not found: $courseDir" }

  $pres  = Join-Path $courseDir 'Presentation'
  $build = Join-Path $pres 'build'

  # --- source .pptx -------------------------------------------------------
  if ($SourcePptx) {
    $src = $SourcePptx
  }
  else {
    $deckDir = Join-Path $courseDir 'Source Deck'
    $decks = @(Get-ChildItem $deckDir -Filter *.pptx -ErrorAction SilentlyContinue)
    if ($decks.Count -eq 0) { throw "no .pptx in '$deckDir' - pass -SourcePptx" }
    if ($decks.Count -gt 1) {
      throw "multiple .pptx in '$deckDir' - pass -SourcePptx to choose one:`n  " + (($decks.Name) -join "`n  ")
    }
    $src = $decks[0].FullName
  }
  if (-not (Test-Path $src)) { throw "source deck not found: $src" }

  # --- slide prefix + deck id -------------------------------------------
  # course.json is the authority when it exists (it may not at Stage 0);
  # otherwise fall back to the leading token of the course folder name.
  $courseJson = Join-Path $pres 'course\course.json'
  $slidePrefix = $null
  $deckId = $null
  if (Test-Path $courseJson) {
    try {
      $cj = Get-Content $courseJson -Raw -Encoding UTF8 | ConvertFrom-Json
      if ($cj.slidePrefix)   { $slidePrefix = [string]$cj.slidePrefix }
      if ($cj.course.code)   { $deckId      = [string]$cj.course.code }
    }
    catch { Write-Warning "could not parse $courseJson - falling back to the course name" }
  }
  if (-not $deckId)      { $deckId = ($Course -split '\s+')[0] }
  if (-not $slidePrefix) { $slidePrefix = "$deckId-" }

  # --- section map (optional, per course) ------------------------------
  # Source Deck/sections.json : [ { "name": "...", "from": 1, "to": 11 }, ... ]
  # Absent for a brand-new course; the manifest 'section' fields are then blank
  # until Stage 1 fills the teaching arc in.
  $sectionsFile = Join-Path $courseDir 'Source Deck\sections.json'
  $sections = @()
  if (Test-Path $sectionsFile) {
    try {
      $raw = Get-Content $sectionsFile -Raw -Encoding UTF8 | ConvertFrom-Json
      foreach ($s in $raw) { $sections += , @([string]$s.name, [int]$s.from, [int]$s.to) }
    }
    catch { Write-Warning "could not parse $sectionsFile - sections will be blank" }
  }

  if (-not $TmpDir) { $TmpDir = Join-Path $build '_generator\tmp' }

  [pscustomobject]@{
    Course       = $Course
    Vault        = $vault
    CourseDir    = $courseDir
    Src          = $src
    Build        = $build
    SlidesDir    = Join-Path $build 'slides'
    Tmp          = $TmpDir
    SlidePrefix  = $slidePrefix
    DeckId       = $deckId
    Sections     = $sections
    SectionsFile = $sectionsFile
    CourseJson   = $courseJson
  }
}
