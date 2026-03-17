#!/bin/bash

# FreshCart Vercel Deployment Script
# This script helps prepare the project for Vercel deployment

echo "🚀 FreshCart Vercel Deployment Checker"
echo "======================================"
echo ""

# Check if node_modules exist
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules not found. Running npm install..."
    npm install
else
    echo "✅ node_modules found"
fi

# Check if build works
echo ""
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Fix errors before deploying to Vercel."
    exit 1
fi

# Check configuration files
echo ""
echo "📋 Checking Vercel configuration files..."

if [ -f "vercel.json" ]; then
    echo "✅ vercel.json exists"
else
    echo "❌ vercel.json missing"
fi

if [ -f ".vercelignore" ]; then
    echo "✅ .vercelignore exists"
else
    echo "❌ .vercelignore missing"
fi

if [ -f "vite.config.js" ]; then
    echo "✅ vite.config.js exists"
else
    echo "❌ vite.config.js missing"
fi

echo ""
echo "✨ Ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Visit: https://vercel.com"
echo "3. Connect your GitHub repository"
echo "4. Vercel will automatically deploy on every push!"
