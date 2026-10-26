param([string]$Destination = ".third_party_checkouts")
$ErrorActionPreference = "Stop"
$items = @(
  @{ Repo = "https://github.com/bem130/chemquiz.git"; Name = "chemquiz"; Sha = "10b81d4c1b02847e3d9b64e8d44a960d10559ea3" },
  @{ Repo = "https://github.com/oxpig/ChemIQ.git"; Name = "ChemIQ"; Sha = "63826f64990802e87f1b11b9192606a20838d522" }
)
New-Item -ItemType Directory -Path $Destination -Force | Out-Null
foreach ($item in $items) {
  $folder = Join-Path $Destination $item.Name
  if (Test-Path $folder) { Write-Host "Exists; skip $folder"; continue }
  git clone --filter=blob:none --no-checkout $item.Repo $folder
  if ($LASTEXITCODE -ne 0) { throw "clone failed: $($item.Name)" }
  git -C $folder checkout --detach $item.Sha
  if ($LASTEXITCODE -ne 0) { throw "checkout failed: $($item.Name)" }
  Write-Host "Checked out $($item.Name) at $($item.Sha)"
}
Write-Host "Completed: upstream sources kept separately under $Destination"
