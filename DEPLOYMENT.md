# FreshCart Deployment Guide - Vercel

## Prerequisites
- GitHub account (Vercel integrates with GitHub)
- Vercel account (free tier available at vercel.com)
- Node.js 16+ installed locally

## Step 1: Push Project to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/Fresh-Cart.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Vercel

### Option A: Via Vercel Dashboard (Recommended)
1. Go to https://vercel.com
2. Sign up or log in with GitHub
3. Click "Add New..." → "Project"
4. Import your Fresh-Cart repository from GitHub
5. Select the project and click "Import"

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

## Step 3: Configure Vercel Project Settings

### Build Settings
- **Build Command**: `npm run build` ✅ (Already configured)
- **Output Directory**: `dist` ✅ (Already configured)
- **Install Command**: `npm install` ✅ (Already configured)

### Environment Variables (if needed)
In Vercel Dashboard → Settings → Environment Variables:
```
VITE_API_BASE_URL=https://ecommerce.routemisr.com/api/v1
```

## Step 4: Deploy
1. Push changes to GitHub main branch
2. Vercel automatically deploys on push
3. Monitor deployment in Vercel Dashboard
4. Your app will be live at: `https://fresh-cart-YOURNAME.vercel.app`

## Configuration Files Included
- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `vite.config.js` - Vite build configuration with correct base path
- ✅ `package.json` - Build scripts configured
- ✅ `.env.example` - Environment variables template

## Important Notes
- This project uses a hash router for client-side routing
- The base path is set to `/Fresh-Cart/` in vite.config.js
- All API calls use absolute URLs (https://ecommerce.routemisr.com)
- No backend/server code needed - fully frontend application

## Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Verify all dependencies in package.json are correct
- Check Node.js version matches (16+)

### Deployment Issues
- Clear Vercel cache: Dashboard → Settings → Git → Redeploy
- Check build logs in Vercel Dashboard
- Verify environment variables are set if using .env

### Routing Issues
- Hash router is enabled (#/ in URLs)
- Vercel rewrites are configured in vercel.json
- SPA fallback to index.html is configured

## Production Checklist
- ✅ Remove console.logs and debug code
- ✅ Test all features before deploying
- ✅ Set environment variables in Vercel
- ✅ Enable automatic deployments on main branch push
- ✅ Add custom domain (optional)

## Support
For issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify API endpoints are accessible
4. Check network requests in browser DevTools
