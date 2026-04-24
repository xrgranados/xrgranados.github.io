import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Replace with your GitHub username if repo name is different
  // e.g. if your repo is "xrgranados.github.io" use site only
  // if it's "portfolio" use both site + base
  site: 'https://xrgranados.github.io',
  // base: '/portfolio', // ← Uncomment if repo name is NOT "xrgranados.github.io"

  build: {
    assets: '_assets',
  },
});
