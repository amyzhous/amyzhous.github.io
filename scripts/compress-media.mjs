/**
 * Re-encodes the case study videos for the web, and writes a phone-sized
 * copy of each beside it.
 *
 * The recordings come off the screen at 5–8 Mbps, which is several times
 * what this content needs: the Construction Data hero has been on the site
 * at 2.4 Mbps and reads as sharp. Everything here is encoded to a quality
 * target rather than a fixed size, with a ceiling so one busy second cannot
 * blow the budget.
 *
 * Nothing is ever encoded from an already-encoded file. Sources live in
 * `media-src/`, outputs in `public/case/<slug>/`, so re-running this is
 * always lossless with respect to what came off the screen.
 *
 *   npm run media            # encode anything whose source is newer
 *   npm run media -- --force # encode everything again
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** Whichever ffmpeg this machine has: the project's own, or one on PATH. */
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

const SRC = 'media-src';
const OUT = 'public/case';
const force = process.argv.includes('--force');

/**
 * Desktop plays at most 820 CSS px, so 1920 covers a 2x screen with a
 * little to spare. A phone plays at 335 CSS px, where 1080 is already more
 * than a 3x screen can show.
 */
const RENDITIONS = [
  { suffix: '', width: 1920, crf: 23, maxrate: '3M', bufsize: '6M' },
  { suffix: '-sm', width: 1080, crf: 26, maxrate: '1400k', bufsize: '2800k' },
];

const mb = (p) => statSync(p).size / 1048576;

const encode = (src, dest, r) => {
  execFileSync(
    ffmpeg,
    [
      '-y',
      '-i', src,
      // never upscale a source that is already smaller than the target
      '-vf', `scale='min(${r.width},iw)':-2:flags=lanczos`,
      '-c:v', 'libx264',
      '-profile:v', 'high',
      '-preset', 'slow',
      '-crf', String(r.crf),
      '-maxrate', r.maxrate,
      '-bufsize', r.bufsize,
      // a keyframe every two seconds, so a loop can restart cleanly
      '-g', '60',
      '-pix_fmt', 'yuv420p',
      // these are silent screen recordings; any track in them is room noise
      '-an',
      // metadata at the front, so playback starts before the file is through
      '-movflags', '+faststart',
      dest,
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  );
};

if (!existsSync(SRC)) {
  console.error(`No ${SRC}/ directory. Put the original recordings there, in a folder per case study.`);
  process.exit(1);
}

let before = 0;
let after = 0;

for (const slug of readdirSync(SRC).filter((d) => statSync(join(SRC, d)).isDirectory())) {
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });

  for (const file of readdirSync(join(SRC, slug)).filter((f) => /\.(mp4|mov|m4v)$/i.test(f))) {
    const src = join(SRC, slug, file);
    const name = basename(file, extname(file));

    for (const r of RENDITIONS) {
      const dest = join(dir, `${name}${r.suffix}.mp4`);
      if (!force && existsSync(dest) && statSync(dest).mtimeMs > statSync(src).mtimeMs) continue;

      process.stdout.write(`  ${slug}/${name}${r.suffix}.mp4 … `);
      encode(src, dest, r);
      console.log(`${mb(dest).toFixed(2)} MB`);

      if (r.suffix === '') {
        before += mb(src);
        after += mb(dest);
      }
    }
  }
}

if (before) {
  console.log(`\n  ${before.toFixed(1)} MB of recordings → ${after.toFixed(1)} MB on the page`);
}
