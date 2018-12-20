Get-WmiObject -Class Win32_OperatingSystem -ComputerName localhost |
Select-Object -Property CSName, LastBootUpTime

function Do_Work($workOut) {
  Write-Output "Work"
  Write-Item $workOut
  Write-Host "Done"
}

Do_Work(50000)

$variable = 5

function Write-Item($itemCount) {
  $i = 1

  while ($i -le $itemCount) {
    $str = "Output $i"
    Write-Output $str
    $i = $i + 1
  }
}
