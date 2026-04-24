# xrgranados — Portfolio

Personal portfolio built with [Astro](https://astro.build) and deployed to GitHub Pages.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio-astro/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── photo.jpg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Work.astro
│   │   ├── ProjectCard.astro  ← Reusable project card
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── portfolio.ts
│   ├── layouts/
│   │   └── BaseLayout.astro   ← HTML shell + SEO meta
│   ├── pages/
│   │   └── index.astro        ← Entry point
│   └── styles/
│       └── global.css         ← Design tokens + reset
├── .github/
│   └── workflows/
│       └── deploy.yml         ← GitHub Actions → GitHub Pages
├── astro.config.mjs
└── tsconfig.json
```

## 🌐 Deploying to GitHub Pages

### Option A — Personal site

1. Create a repo named exactly: **`me.github.io`**
2. In `astro.config.mjs`, set `site: 'https://me.github.io'`
3. Push to `main` → GitHub Actions deploys automatically

### Option B — Project site

1. Create any repo, e.g.: **`portfolio`**
2. In `astro.config.mjs`, set:
   ```js
   site: 'https://me.github.io',
   base: '/portfolio',
   ```
3. Go to repo **Settings → Pages → Source: GitHub Actions**
4. Push to `main` → GitHub Actions deploys automatically

### One-time GitHub Setup

In your repository go to:
**Settings → Pages → Build and deployment → Source → GitHub Actions**
