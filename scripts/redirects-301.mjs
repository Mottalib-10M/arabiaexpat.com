#!/usr/bin/env node
/**
 * redirects-301.mjs — turns moved pages into real 301s and drops them from the sitemap
 * (RECETTE-SITE.md §23.1, point 3).
 *
 * Pages that moved (to taxfreesalaries.com, or inside this site via `redirects` in
 * astro.config.mjs) are built as small HTML pages with a meta refresh. Search engines treat
 * that as a weak signal, and the sitemap was listing all of them. After the build, this
 * script finds every such page in dist/, writes an anchored Apache `RedirectMatch 301` for it into
 * dist/.htaccess, and removes its URL from the sitemap files.
 *
 * Usage : node scripts/redirects-301.mjs [dist]   (run by `npm run build`)
 */
import { readdir, readFile, writeFile, appendFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const dist = process.argv[2] || 'dist';
const SITE = 'https://arabiaexpat.com';

async function* walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) yield* walk(p); else if (e.name === 'index.html') yield p;
  }
}

const moved = [];
for await (const f of walk(dist)) {
  const html = await readFile(f, 'utf8');
  const m = html.match(/<meta[^>]+http-equiv="refresh"[^>]+content="0;\s*url=([^"]+)"/i);
  if (!m) continue;
  const path = '/' + relative(dist, f).split(sep).slice(0, -1).join('/') + '/';
  const target = m[1].startsWith('/') ? SITE + m[1] : m[1];
  moved.push([path.replace(/\/+/g, '/'), target]);
}

// RedirectMatch anchored on both ends: a plain `Redirect /uae/` would also catch /uae/visa/.
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const rules = moved.map(([from, to]) => `RedirectMatch 301 ^${esc(from)}?$ ${to}`).join('\n');
await appendFile(join(dist, '.htaccess'), `\n# Moved pages (scripts/redirects-301.mjs)\n${rules}\n`);

const gone = new Set(moved.map(([from]) => SITE + from));
let dropped = 0;
for (const e of await readdir(dist)) {
  if (!/^sitemap-\d+\.xml$/.test(e)) continue;
  const p = join(dist, e);
  const xml = await readFile(p, 'utf8');
  const out = xml.replace(/<url>\s*<loc>([^<]+)<\/loc>[\s\S]*?<\/url>/g, (u, loc) => (gone.has(loc) ? (dropped++, '') : u));
  await writeFile(p, out);
}
console.log(`redirects-301: ${moved.length} page(s) déplacée(s) → 301 dans .htaccess, ${dropped} retirée(s) du sitemap`);
