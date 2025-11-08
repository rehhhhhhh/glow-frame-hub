# 🚀 GitHub Pages Deployment Guide

## ✅ Yes, GitHub Pages is 100% FREE!

Your portfolio will be hosted at: `https://rehhhhhhh.github.io/glow-frame-hub/`

---

## 📋 Step-by-Step Process

### Step 1: Commit All Your Changes

Open your terminal in the `glow-frame-hub` folder and run:

```bash
git add .
git commit -m "Portfolio ready for GitHub Pages deployment"
git push origin main
```

### Step 2: Deploy to GitHub Pages

Run this command in your terminal:

```bash
npm run deploy
```

This will:
1. Build your portfolio (`npm run build`)
2. Deploy it to the `gh-pages` branch
3. Make it live on GitHub Pages

### Step 3: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/rehhhhhhh/glow-frame-hub`
2. Click on **Settings** (top right of the repository)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 4: Wait for Deployment

- GitHub Pages usually takes 1-2 minutes to deploy
- You'll see a green checkmark when it's ready
- Your site will be live at: `https://rehhhhhhh.github.io/glow-frame-hub/`

---

## 🔄 Updating Your Portfolio

Every time you make changes:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Updated portfolio"
   git push origin main
   ```

2. **Deploy again:**
   ```bash
   npm run deploy
   ```

3. **Wait 1-2 minutes** - Your changes will be live!

---

## 🌐 Custom Domain (Optional)

If you want a custom domain (e.g., `rahuls-portfolio.com`):

1. In your repository → **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Follow GitHub's instructions to configure DNS

---

## ⚠️ Important Notes

1. **Base Path**: Your site URL includes `/glow-frame-hub/` because that's your repository name
2. **React Router**: Already configured to work with GitHub Pages
3. **Build Time**: Takes about 1-2 minutes after each deploy
4. **Free Forever**: GitHub Pages is completely free for public repositories

---

## 🐛 Troubleshooting

**If the site doesn't load:**
- Wait 2-3 minutes (deployment takes time)
- Check the **Actions** tab in your GitHub repo for build status
- Make sure you selected `gh-pages` branch in Settings → Pages

**If images/videos don't load:**
- Make sure all assets are in the `public` folder
- Check that file paths are correct

**If routes don't work:**
- The `vercel.json` and `_redirects` files help, but GitHub Pages handles React Router automatically with the base path

---

## ✅ You're All Set!

Your portfolio will be live at:
**https://rehhhhhhh.github.io/glow-frame-hub/**

Share this link with everyone! 🎉

