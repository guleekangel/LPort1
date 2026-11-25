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
});
