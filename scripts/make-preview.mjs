import fs from 'node:fs';
import path from 'node:path';

const dist = './dist';
const out = './preview.html';

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// Inline CSS: replace the entire <link rel="stylesheet" href="...css"> tag.
html = html.replace(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*\.css)"[^>]*>/, (match, cssUrl) => {
  const cssPath = path.join(dist, cssUrl);
  const css = fs.readFileSync(cssPath, 'utf8');
  return `<style>\n${css}\n</style>`;
});

// Inline all /_astro/* image URLs referenced anywhere in the HTML (src or srcset).
const astroUrls = [...html.matchAll(/(\/_astro\/[^\s"')]+)/g)].map(m => m[1]);
const seen = new Set();
for (const url of astroUrls) {
  if (seen.has(url)) continue;
  seen.add(url);
  const filePath = path.join(dist, url);
  if (!fs.existsSync(filePath)) continue;
  const ext = path.extname(url).slice(1);
  let mime = 'application/octet-stream';
  if (ext === 'webp') mime = 'image/webp';
  else if (ext === 'avif') mime = 'image/avif';
  else if (ext === 'jpg' || ext === 'jpeg') mime = 'image/jpeg';
  else if (ext === 'png') mime = 'image/png';
  else continue; // skip fonts
  const b64 = fs.readFileSync(filePath).toString('base64');
  html = html.replaceAll(url, `data:${mime};base64,${b64}`);
}

// Remove srcset attributes so the browser uses the single inlined src.
html = html.replace(/srcset="[^"]*"/g, '');

// Convert CSS url(...) image references to base64, leave fonts.
html = html.replace(/url\((\/[^)]+)\)/g, (match, url) => {
  const filePath = path.join(dist, url);
  if (!fs.existsSync(filePath)) return match;
  const ext = path.extname(url).slice(1);
  if (ext === 'woff2') return match;
  let mime = 'application/octet-stream';
  if (ext === 'webp') mime = 'image/webp';
  else if (ext === 'avif') mime = 'image/avif';
  else if (ext === 'jpg' || ext === 'jpeg') mime = 'image/jpeg';
  else if (ext === 'png') mime = 'image/png';
  const b64 = fs.readFileSync(filePath).toString('base64');
  return `url(data:${mime};base64,${b64})`;
});

// Remove font preloads
html = html.replace(/<link[^>]+rel="preload"[^>]*>/g, '');

// Use system fonts
html = html.replace(
  /var\(--font-sans\)/g,
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
);
html = html.replace(
  /var\(--font-cjk\)/g,
  "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
);

// PREVIEW FAILSAFE: reveal elements start hidden; force them visible so the
// standalone file reads correctly without a running IntersectionObserver.
html = html.replace(
  '.reveal{opacity:0;transform:translateY(',
  '.reveal{opacity:1;transform:none}.reveal-old{opacity:0;transform:translateY('
);
html = html.replace('</body>', '<style>.reveal{opacity:1!important;transform:none!important}</style></body>');

fs.writeFileSync(out, html);
console.log(`Wrote ${out} (${(fs.statSync(out).size / 1024 / 1024).toFixed(2)} MB)`);
