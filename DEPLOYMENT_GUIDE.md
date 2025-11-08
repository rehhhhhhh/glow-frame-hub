# Portfolio Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest & Free)

**Step 1: Commit and Push Your Changes**
```bash
cd glow-frame-hub
git add .
git commit -m "Ready for deployment - portfolio complete"
git push origin main
```

**Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your repository (it should auto-detect)
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `glow-frame-hub` (if your repo is the parent folder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"
7. Your site will be live in ~2 minutes! 🎉

**Step 3: Custom Domain (Optional)**
- In Vercel dashboard, go to your project → Settings → Domains
- Add your custom domain (e.g., rahuls-portfolio.com)

---

### Option 2: Netlify (Also Easy & Free)

**Step 1: Commit and Push Your Changes**
```bash
cd glow-frame-hub
git add .
git commit -m "Ready for deployment - portfolio complete"
git push origin main
```

**Step 2: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - **Base directory**: `glow-frame-hub`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"
7. Your site will be live! 🎉

---

### Option 3: GitHub Pages (Free but requires more setup)

**Step 1: Install gh-pages package**
```bash
cd glow-frame-hub
npm install --save-dev gh-pages
```

**Step 2: Update package.json**
Add to scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

**Step 3: Update vite.config.ts**
Add base path:
```typescript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your GitHub repo name
  // ... rest of config
})
```

**Step 4: Deploy**
```bash
npm run deploy
```

---

## 📋 Pre-Deployment Checklist

- [ ] Test the build locally: `npm run build`
- [ ] Test the preview: `npm run preview`
- [ ] Check all images load correctly
- [ ] Verify all video files are in `/public` folder
- [ ] Test all links (Google Drive links, resume download)
- [ ] Check mobile responsiveness
- [ ] Verify dark theme works correctly

---

## 🔧 Build Configuration

Your project is already configured correctly:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ React Router is set up (needs special config for SPA)

---

## ⚠️ Important Notes

1. **React Router (SPA)**: Since you're using React Router, you need to configure redirects:
   - **Vercel**: Create `vercel.json` in root:
     ```json
     {
       "rewrites": [
         { "source": "/(.*)", "destination": "/index.html" }
       ]
     }
     ```
   - **Netlify**: Create `public/_redirects` file:
     ```
     /*    /index.html   200
     ```

2. **Large Video Files**: Your video files might be large. Consider:
   - Compressing videos before upload
   - Using a CDN for videos
   - Or hosting videos on YouTube/Vimeo and embedding

3. **Environment Variables**: If you have any API keys, add them in the hosting platform's environment variables section.

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Free tier is generous
- ✅ Perfect for React/Vite apps

---

## 📞 Need Help?

If you encounter any issues:
1. Check the build logs in your hosting platform
2. Test locally first: `npm run build && npm run preview`
3. Ensure all assets are in the correct folders

