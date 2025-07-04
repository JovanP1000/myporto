# Portfolio Development Server Manager
# This script helps manage the Nuxt.js development server

param(
    [string]$Action = "start"
)

function Start-DevServer {
    Write-Host "🚀 Starting Portfolio Development Server..." -ForegroundColor Green
    
    # Kill any existing Node processes
    Write-Host "🔄 Cleaning up existing processes..." -ForegroundColor Yellow
    taskkill /F /IM node.exe 2>$null
    
    # Clean cache directories
    Write-Host "🧹 Cleaning cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .nuxt, .output -ErrorAction SilentlyContinue
    
    # Start the development server
    Write-Host "⚡ Starting server..." -ForegroundColor Green
    npm run dev
}

function Stop-DevServer {
    Write-Host "🛑 Stopping Development Server..." -ForegroundColor Red
    taskkill /F /IM node.exe
    Write-Host "✅ Server stopped" -ForegroundColor Green
}

function Restart-DevServer {
    Write-Host "🔄 Restarting Development Server..." -ForegroundColor Yellow
    Stop-DevServer
    Start-Sleep -Seconds 2
    Start-DevServer
}

function Show-Status {
    $port3000 = netstat -ano | findstr :3000
    if ($port3000) {
        Write-Host "✅ Server is running on http://localhost:3000" -ForegroundColor Green
    } else {
        Write-Host "❌ Server is not running" -ForegroundColor Red
    }
}

# Main script logic
switch ($Action.ToLower()) {
    "start" { Start-DevServer }
    "stop" { Stop-DevServer }
    "restart" { Restart-DevServer }
    "status" { Show-Status }
    default {
        Write-Host "Usage: .\dev.ps1 [start|stop|restart|status]" -ForegroundColor Cyan
        Write-Host "  start   - Start the development server" -ForegroundColor White
        Write-Host "  stop    - Stop the development server" -ForegroundColor White
        Write-Host "  restart - Restart the development server" -ForegroundColor White
        Write-Host "  status  - Check server status" -ForegroundColor White
    }
} 