// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  // Static output: zero JS shipped by default.
  output: 'static',
  build: {
    // Inline tiny CSS, keep the rest hashed for cacheability.
    inlineStylesheets: 'auto',
  },
  image: {
    // sharp handles AVIF/WebP generation at build time.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    build: {
      // Disable Vite's CSS minifier so postcss-preset-env + cssnano in
      // postcss.config.cjs control final output. This keeps traditional
      // @media (max-width: ...) syntax for older mobile browsers.
      cssMinify: false,
    },
  },
});
