import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';
import handlebars from 'vite-plugin-handlebars';

/**
 * Auto-discover all HTML files recursively for Vite multi-page build.
 * In dev mode, Vite serves all HTML files natively — this config
 * is primarily for `vite build` to bundle every page.
 */
function getHtmlEntries(dir, base = '') {
  const entries = {};
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = resolve(dir, item);
    const relativePath = base ? `${base}/${item}` : item;

    if (statSync(fullPath).isDirectory()) {
      // Skip non-page directories
      if (['node_modules', 'dist', '.git', 'assets', 'components', 'data', 'layouts'].includes(item)) continue;
      Object.assign(entries, getHtmlEntries(fullPath, relativePath));
    } else if (item.endsWith('.html')) {
      const name = relativePath.replace(/\.html$/, '').replace(/\//g, '-');
      entries[name] = fullPath;
    }
  }

  return entries;
}

export default defineConfig({
  root: './',
  publicDir: 'assets/images',

  server: {
    port: 3000,
    open: '/index.html',
    cors: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlEntries(resolve(__dirname)),
    },
  },

  css: {
    devSourcemap: true,
  },
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'layouts'),
        resolve(__dirname, 'components')
      ]
    })
  ]
});
