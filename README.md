# Furniture Portfolio

A dark, bilingual (Chinese/English), single-page portfolio for a furniture
designer. Built with [Astro](https://astro.build), [sharp](https://sharp.pixelplumbing.com),
Inter and Noto Sans SC.

## Features

- Single scrolling page with **anchor navigation** to:
  - 客厅 / Living Room
  - 茶室 / Tea Room
  - 餐厅 / Dining Room
  - 卧室 / Bedroom
  - 单品 / Single Items
  - 其他 / Others
- Bilingual by default — Chinese is primary, English sits beneath in a lighter
  weight.
- Modern sans-serif typography: **Inter** for Latin, **Noto Sans SC** for
  Chinese.
- Responsive image grid using Astro's `<Picture>` — automatic **AVIF + WebP**
  generation, `srcset`/`sizes`, and intrinsic `width`/`height` to prevent
  layout shift.
- Zero client-side JavaScript by default (only a tiny inline script for the
  active-section highlight, which degrades gracefully).
- Content is driven by Markdown files in `src/content/work/`.

## Quick start

```bash
cd "/Users/angelha/WorkBuddy AI/2026-11-24-18-23-50/furniture-portfolio"
npm install
npm run dev
```

Open `http://localhost:4321`.

## Adding your own work

Each piece of furniture is one folder under `src/content/work/`.

```
src/content/work/my-piece/
  cover.jpg       ← shown in the grid
  index.md        ← metadata
```

`index.md`:

```yaml
---
title: "客厅 A"
titleEn: "Living Room A"
category: living-room
year: 2024
materials: ""
materialsEn: ""
dimensions: ""
description: "客厅整体布局，低矮座面与深色木饰面形成层次。"
descriptionEn: "A full living-room composition — low seating against dark timber."
cover: ./cover.jpg
gallery: []
order: 10
featured: false
---
```

Categories must be one of:

- `living-room`
- `tea-room`
- `dining-room`
- `bedroom`
- `single-items`
- `others`

## Replacing images

Replace `cover.jpg` in each folder with your own render. Astro will regenerate
the responsive variants at build time. For best performance, use
high-resolution originals and let Astro downsize them.

## Build and deploy

```bash
npm run build
```

Output goes to `dist/`. Upload it to any static host:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## Customising

- Colours and typography: `src/styles/global.css`
- Bilingual section labels and intro text: `src/lib/site.ts`
- Page layout: `src/pages/index.astro`
- Nav component: `src/components/Nav.astro`
- Image grid item: `src/components/Piece.astro`
