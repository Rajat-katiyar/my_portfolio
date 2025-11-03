# PowerShell Script to Set MongoDB Environment Variable in Vercel
# Run this script: .\set-vercel-env.ps1

Write-Host "Setting MONGODB_URI environment variable in Vercel..." -ForegroundColor Green
Write-Host ""

# Check if Vercel CLI is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host "Step 1: Login to Vercel (if not already logged in)" -ForegroundColor Cyan
Write-Host "You will be asked to authenticate in browser." -ForegroundColor Yellow
Write-Host ""

# Login to Vercel (will prompt if not logged in)
vercel login

Write-Host ""
Write-Host "Step 2: Adding MONGODB_URI to Production environment..." -ForegroundColor Cyan
$connectionString = "mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority"
echo $connectionString | vercel env add MONGODB_URI production

Write-Host ""
Write-Host "Step 3: Adding MONGODB_URI to Preview environment..." -ForegroundColor Cyan
echo $connectionString | vercel env add MONGODB_URI preview

Write-Host ""
Write-Host "Step 4: Adding MONGODB_URI to Development environment..." -ForegroundColor Cyan
echo $connectionString | vercel env add MONGODB_URI development

Write-Host ""
Write-Host "✅ Environment variables added successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to Vercel Dashboard and verify the variables" -ForegroundColor White
Write-Host "2. Redeploy your project" -ForegroundColor White
Write-Host "3. Test the contact form on your website" -ForegroundColor White

