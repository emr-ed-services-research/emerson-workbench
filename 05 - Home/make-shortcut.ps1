<#
    Puts "Emerson Workbench" on the Desktop, pointing at Workbench.cmd
    with the drawn icon.

        powershell -ExecutionPolicy Bypass -File "05 - Home\make-shortcut.ps1"

    A .lnk is not checked in: it stores ABSOLUTE paths, so a committed
    one would be correct on exactly one machine and silently wrong
    everywhere else. The script is the artifact; run it once per machine.

    Resolves the Desktop through GetFolderPath rather than assuming
    ~\Desktop, because OneDrive redirects it and the assumption would
    put the shortcut somewhere nobody looks.
#>
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$cmd  = Join-Path $root 'Workbench.cmd'
$icon = Join-Path $PSScriptRoot 'workbench.ico'

foreach ($p in @($cmd, $icon)) {
  if (-not (Test-Path $p)) { throw "Missing: $p" }
}

$desktop = [Environment]::GetFolderPath('Desktop')
$link    = Join-Path $desktop 'Emerson Workbench.lnk'

$shell = New-Object -ComObject WScript.Shell
$sc = $shell.CreateShortcut($link)
$sc.TargetPath       = $cmd
$sc.WorkingDirectory = $root
$sc.IconLocation     = "$icon,0"
$sc.Description      = 'Open Emerson Workbench'
$sc.Save()

Write-Output "  wrote  $link"
Write-Output "  opens  $cmd"
Write-Output ""
Write-Output "  Right-click it and Pin to taskbar if you want it there too."
