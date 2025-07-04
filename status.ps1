# Portfolio Status Checker
# This script checks if the portfolio server is running properly

Write-Host "🔍 Checking Portfolio Server Status..." -ForegroundColor Cyan

# Check if server is running on port 3000
$port3000 = netstat -ano | findstr :3000
if ($port3000) {
    Write-Host "✅ Server is running on http://localhost:3000" -ForegroundColor Green
    
    # Test if website is accessible
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 5
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ Website is accessible and responding" -ForegroundColor Green
        } else {
            Write-Host "⚠️  Website responded with status: $($response.StatusCode)" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "❌ Website is not accessible: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Server is not running on port 3000" -ForegroundColor Red
    Write-Host "💡 Try running: npm run dev" -ForegroundColor Yellow
}

# Check for any Node.js processes
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "📊 Found $($nodeProcesses.Count) Node.js process(es)" -ForegroundColor Blue
} else {
    Write-Host "📊 No Node.js processes found" -ForegroundColor Gray
}

Write-Host "`n🎯 Portfolio Status Check Complete!" -ForegroundColor Cyan 