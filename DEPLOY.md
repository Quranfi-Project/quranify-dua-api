# Quick Deployment Guide to Vercel

## Fastest Way (3 Minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click "Import" next to your repository
4. Click "Deploy" (don't change any settings!)
5. Wait ~1 minute for deployment

### Step 3: Test Your API
Your API will be live at:
```
https://quranfi-dua-api.vercel.app/api/duas/protection
```

## Alternative: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## What Gets Deployed?

✅ Your Express API at `/api`
✅ All dua data files
✅ Routes and server logic

❌ The `/docs` folder (deploy separately if needed)
❌ `node_modules` (rebuilt automatically)

## Deploy the Docs Site Separately

The documentation site in `/docs` can be deployed as a separate project:

1. Create a new project on Vercel
2. Select your repository
3. Set **Root Directory** to `docs`
4. Deploy!

## Environment & Settings

No environment variables needed! Everything works out of the box.

## Troubleshooting

### API Returns 404
- Check that [vercel.json](vercel.json) exists in root
- Ensure routes start with `/api/`

### Deployment Fails
- Make sure `package.json` has `"start": "node server.js"`
- Check that all data files are committed to git

### Need Help?
- Check [Vercel Documentation](https://vercel.com/docs)
- Open an issue on GitHub

## Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited API requests
- ✅ 100 GB bandwidth/month
- ✅ HTTPS included
- ✅ Custom domains
- ✅ Automatic deployments

Perfect for this API!
