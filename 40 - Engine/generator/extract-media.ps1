# Pre-pass: extract every media file from the pptx.
#  assets/img/imageNNN.{png,jpg}  - slide media (EMF/WMF/WDP converted to PNG)
#  assets/brand/                  - curated brand assets (logos, cover art)
# Emits <tmp>/media-map.json : { 'image33.emf' : 'image33.png', ... }
#
# Usage:  .\extract-media.ps1 -Course "14101 Valve Trim and Body Maintenance"
param(
  [Parameter(Mandatory = $true)] [string] $Course,
  [string] $SourcePptx,
  [string] $TmpDir
)
$ErrorActionPreference = 'Stop'
. "$PSScriptRoot\_paths.ps1"
$P = Resolve-CoursePaths -Course $Course -SourcePptx $SourcePptx -TmpDir $TmpDir

$src   = $P.Src
$build = $P.Build
$img   = Join-Path $build 'assets\img'
$brand = Join-Path $build 'assets\brand'
$tmp   = $P.Tmp

Write-Host "course : $($P.Course)"
Write-Host "deck   : $src"

Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Drawing

New-Item -ItemType Directory -Force $tmp | Out-Null
foreach ($d in $img, $brand) {
  if (Test-Path $d) { Get-ChildItem $d -File | ForEach-Object { [System.IO.File]::Delete($_.FullName) } }
  New-Item -ItemType Directory -Force $d | Out-Null
}

function Save-Jpeg($bmp, $path, $q) {
  $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $pp = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $pp.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$q)
  $bmp.Save($path, $enc, $pp)
}
function Resize-To($srcPath, $outPath, $maxW, $isPng) {
  $s = [System.Drawing.Image]::FromFile($srcPath)
  if ($s.Width -le $maxW) { $s.Dispose(); [System.IO.File]::Copy($srcPath, $outPath, $true); return }
  $nw = $maxW; $nh = [int]($s.Height * $nw / $s.Width)
  $d = New-Object System.Drawing.Bitmap($nw, $nh)
  $g = [System.Drawing.Graphics]::FromImage($d); $g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'HighQuality'
  $g.DrawImage($s, 0, 0, $nw, $nh); $g.Dispose(); $s.Dispose()
  if ($isPng) { $d.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png) } else { Save-Jpeg $d $outPath 84 }
  $d.Dispose()
}
function Emf-ToPng($srcPath, $outPath) {
  # Render onto a TRANSPARENT canvas so metafiles that don't paint their own
  # background stay transparent (they get overlaid on other objects).
  $mf = [System.Drawing.Image]::FromFile($srcPath)
  $w = [int]($mf.Width * 2.0); $h = [int]($mf.Height * 2.0)
  if ($w -lt 1) { $w = 1600 }; if ($h -lt 1) { $h = 1200 }
  if ($w -gt 3000) { $h = [int]($h * 3000 / $w); $w = 3000 }
  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $bmp.SetResolution(192, 192)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'HighQuality'; $g.InterpolationMode = 'HighQualityBicubic'; $g.PixelOffsetMode = 'HighQuality'
  $g.Clear([System.Drawing.Color]::Transparent)
  $g.DrawImage($mf, 0, 0, $w, $h)
  $g.Dispose(); $mf.Dispose()
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
}
function KnockGrey($srcPath, $outPath) {
  # make near-neutral grey background transparent, keep colours (for JPEG brand logos)
  $s = [System.Drawing.Image]::FromFile($srcPath); $b = New-Object System.Drawing.Bitmap($s); $s.Dispose()
  $w = $b.Width; $h = $b.Height; $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
  $dr = $b.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $by = New-Object byte[] ($dr.Stride * $h)
  [System.Runtime.InteropServices.Marshal]::Copy($dr.Scan0, $by, 0, $by.Length); $b.UnlockBits($dr)
  for ($i = 0; $i -lt $by.Length; $i += 4) {
    $bb = $by[$i]; $gg = $by[$i + 1]; $rr = $by[$i + 2]
    $mx = [Math]::Max($rr, [Math]::Max($gg, $bb)); $mn = [Math]::Min($rr, [Math]::Min($gg, $bb))
    $lum = 0.299 * $rr + 0.587 * $gg + 0.114 * $bb
    if (($mx - $mn) -lt 22 -and $lum -gt 120 -and $lum -lt 190) { $by[$i + 3] = 0 }
  }
  $o = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $dw = $o.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  [System.Runtime.InteropServices.Marshal]::Copy($by, 0, $dw.Scan0, $by.Length); $o.UnlockBits($dw); $b.Dispose()
  $o.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png); $o.Dispose()
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($src)
$map = @{}
$mediaEntries = $zip.Entries | Where-Object { $_.FullName -like 'ppt/media/*' }
foreach ($e in $mediaEntries) {
  $bn  = [System.IO.Path]::GetFileNameWithoutExtension($e.Name)
  $ext = [System.IO.Path]::GetExtension($e.Name).ToLower()
  $raw = Join-Path $tmp ("raw_" + $e.Name)
  [System.IO.Compression.ZipFileExtensions]::ExtractToFile($e, $raw, $true)
  try {
    if ($ext -in '.png', '.gif', '.bmp') { Resize-To $raw (Join-Path $img "$bn.png") 1600 $true;  $map[$e.Name] = "$bn.png" }
    elseif ($ext -in '.jpg', '.jpeg')    { Resize-To $raw (Join-Path $img "$bn.jpg") 1600 $false; $map[$e.Name] = "$bn.jpg" }
    elseif ($ext -in '.emf', '.wmf', '.wdp') { Emf-ToPng $raw (Join-Path $img "$bn.png");         $map[$e.Name] = "$bn.png" }
    elseif ($ext -eq '.svg')             { [System.IO.File]::Copy($raw, (Join-Path $img $e.Name), $true); $map[$e.Name] = $e.Name }
    elseif ($ext -eq '.tmp') {
      $sig = [System.IO.File]::ReadAllBytes($raw)
      if ($sig.Length -gt 3 -and $sig[0] -eq 0x89 -and $sig[1] -eq 0x50) { [System.IO.File]::Copy($raw,(Join-Path $img "$bn.png"),$true); $map[$e.Name] = "$bn.png" }
      elseif ($sig.Length -gt 2 -and $sig[0] -eq 0xFF -and $sig[1] -eq 0xD8) { [System.IO.File]::Copy($raw,(Join-Path $img "$bn.jpg"),$true); $map[$e.Name] = "$bn.jpg" }
    }
  } catch { Write-Warning ("media {0}: {1}" -f $e.Name, $_.Exception.Message) }
  [System.IO.File]::Delete($raw)
}

# --- curated brand assets ---
# By convention the Emerson decks carry the corporate logo / cover art as
# ppt/media/image1..4. A deck that does not is not an error - the brand/ folder
# just stays as whatever build-course.ps1 placed there from the engine.
function Pull($name, $dest) {
  $en = $zip.Entries | Where-Object { $_.FullName -eq "ppt/media/$name" }
  if (-not $en) { throw "no ppt/media/$name in this deck" }
  $p = Join-Path $tmp ("b_" + $name)
  [System.IO.Compression.ZipFileExtensions]::ExtractToFile($en, $p, $true); return $p
}
try {
  [System.IO.File]::Copy((Pull 'image1.png'), (Join-Path $brand 'logo-emerson-corp-2c.png'), $true)   # blue standard
  [System.IO.File]::Copy((Pull 'image3.png'), (Join-Path $brand 'logo-emerson-corp-2c-white.png'), $true) # white
  Resize-To (Pull 'image2.jpeg') (Join-Path $brand 'cover-photo.jpeg') 900 $false                    # cover photo
  KnockGrey (Pull 'image4.jpg') (Join-Path $brand 'cover-iacet-badge.png')                           # accreditation badge
  Resize-To (Join-Path $brand 'cover-iacet-badge.png') (Join-Path $brand 'cover-iacet-badge.png') 360 $true
}
catch { Write-Warning "brand assets: $($_.Exception.Message) - brand/ left as-is, curate by hand" }
$zip.Dispose()

$map | ConvertTo-Json -Compress | Out-File -Encoding utf8 (Join-Path $tmp 'media-map.json')
Write-Output ("media in package : " + $mediaEntries.Count)
Write-Output ("img assets       : " + (Get-ChildItem $img -File).Count)
Write-Output ("img size         : {0:N1} MB" -f ((Get-ChildItem $img -File | Measure-Object Length -Sum).Sum / 1MB))
Write-Output ("brand assets     : " + (Get-ChildItem $brand -File).Count)
