# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Setup Steps

### 1. Update Repository Name in vite.config.ts

Open `vite.config.ts` and change the base path to match your repository name:

```typescript
base: mode === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

Replace `YOUR-REPO-NAME` with your actual GitHub repository name.

### 2. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 3. Create GitHub Repository

1. Go to GitHub.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name your repository (e.g., "Personal-portfolio")
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (you already have files)
7. Click "Create repository"

### 4. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual values.

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Save the settings

### 6. Deploy

The site will automatically deploy when you push to the main branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

Or you can manually deploy using:

```bash
npm run deploy
```

### 7. Access Your Site

After deployment (takes 2-5 minutes), your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Important Notes About Privacy

### What's Public:
- All source code in your repository
- Your CV file in the `public` folder
- All images and assets
- Your personal information in the components

### What's NOT Private:
GitHub Pages hosts **public** repositories. Everything in your repo is visible to anyone.

### To Keep Data Private:

1. **Don't commit sensitive data** to the repository
2. **Use environment variables** for API keys (not applicable for static sites)
3. **Consider using a backend** if you need to hide certain data
4. **Your CV is publicly accessible** at `/Mohd-Ali-CV.pdf` - this is intentional for the download button

### If You Need Privacy:

For truly private hosting, consider:
- Vercel (free, supports private repos)
- Netlify (free, supports private repos)
- AWS S3 + CloudFront
- Your own server

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

The GitHub Action will automatically rebuild and deploy your site.

## Troubleshooting

### Site shows 404
- Check that GitHub Pages is enabled in Settings
- Verify the base path in `vite.config.ts` matches your repo name
- Wait 5 minutes after first deployment

### Images not loading
- Ensure images are in the `public` folder
- Check that paths don't start with `/` (use relative paths)
- Verify the base path is correct

### Build fails
- Check the Actions tab in GitHub for error logs
- Ensure all dependencies are in `package.json`
- Try building locally with `npm run build`

## Alternative: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
npm install
npm run deploy
```

This will build and deploy to the `gh-pages` branch.

Then in GitHub Settings > Pages:
- Source: Deploy from a branch
- Branch: gh-pages / (root)

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Security Recommendations

1. **Review before committing**: Always check what you're committing
2. **Use .gitignore**: Already configured to ignore sensitive files
3. **No API keys**: Never commit API keys or secrets
4. **Regular updates**: Keep dependencies updated for security patches

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
