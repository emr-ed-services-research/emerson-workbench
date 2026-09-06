# Export the 33 review-flagged slides from the original PPTX as PNG via PowerPoint COM.
$ErrorActionPreference = 'Stop'
$src = "C:\Users\E1552882\Documents-Local\Projects\EmersonWorkbench\10 - Courses\14101 Valve Trim and Body Maintenance\Source Deck\14101 Valve Trim & Body Maintenance.pptx"
$out = "C:\Users\E1552882\.claude\jobs\ae752d36\tmp\orig"
New-Item -ItemType Directory -Force $out | Out-Null

$flagged = 15,20,21,22,23,24,45,46,81,85,89,97,104,112,125,129,259,284,294,295,297,298,299,300,301,304,305,306,312,325,326,416,417

$pp = New-Object -ComObject PowerPoint.Application
try {
  $deck = $pp.Presentations.Open($src, $true, $false, $false)   # ReadOnly, not Untitled, no window
  Write-Output ("opened: {0} slides" -f $deck.Slides.Count)
  foreach ($n in $flagged) {
    $p = Join-Path $out ("s{0:D3}.png" -f $n)
    $deck.Slides.Item($n).Export($p, "PNG", 1320, 1020)
    if (Test-Path $p) { Write-Output ("  exported slide $n") } else { Write-Output ("  FAILED slide $n") }
  }
  $deck.Close()
}
finally {
  $pp.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($pp) | Out-Null
  [GC]::Collect()
}
Write-Output ("done: " + (Get-ChildItem $out -Filter *.png).Count + " files")
