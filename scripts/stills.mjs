/**
 * Converts the deck stills to webp and places them beside the recordings.
 *
 * Sources are the PNGs exported from Figma in `media-src/stills/<slug>/`,
 * which is gitignored; what ships is the webp in `public/case/<slug>/`.
 * Nothing is ever converted from an already-converted file, so re-running
 * this is lossless with respect to what came out of Figma.
 *
 *   npm run stills            # convert anything whose source is newer
 *   npm run stills -- --force # convert everything again
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const findFfmpeg = () => {
  try {
    const bundled = require('ffmpeg-static');
    if (bundled && existsSync(bundled)) return bundled;
  } catch {
    /* not installed; fall through */
  }
  for (const p of ['/usr/local/bin/ffmpeg', '/opt/homebrew/bin/ffmpeg', '/usr/bin/ffmpeg']) {
    if (existsSync(p)) return p;
  }
  console.error('No ffmpeg found. Install it with `npm i -D ffmpeg-static` or `brew install ffmpeg`.');
  process.exit(1);
};

const ffmpeg = findFfmpeg();
const SRC = 'media-src/stills';
const OUT = 'public/case';
const force = process.argv.includes('--force');

/** A 2x export is wider than the page can ever show it; 1600 covers it. */
const MAX_W = 1600;
const QUALITY = 82;

if (!existsSync(SRC)) {
  console.error(`No ${SRC}/ directory. See ${SRC}/README.md for what goes where.`);
  process.exit(1);
}

const kb = (p) => statSync(p).size / 1024;
let n = 0;

for (const slug of readdirSync(SRC).filter((d) => statSync(join(SRC, d)).isDirectory())) {
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });

  for (const file of readdirSync(join(SRC, slug)).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
    const src = join(SRC, slug, file);
    const dest = join(dir, `${basename(file, extname(file))}.webp`);
    if (!force && existsSync(dest) && statSync(dest).mtimeMs > statSync(src).mtimeMs) continue;

    process.stdout.write(`  ${slug}/${basename(dest)} … `);
    execFileSync(
      ffmpeg,
      ['-y', '-i', src,
       // never upscale a source already smaller than the target
       '-vf', `scale='min(${MAX_W},iw)':-2:flags=lanczos`,
       '-quality', String(QUALITY), dest],
      { stdio: ['ignore', 'ignore', 'pipe'] },
    );
    console.log(`${kb(dest).toFixed(0)} KB`);
    n++;
  }
}

console.log(n ? `\n  ${n} still${n === 1 ? '' : 's'} converted` : '\n  nothing new to convert');
