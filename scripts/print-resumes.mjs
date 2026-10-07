/**
 * Exports both résumés to single-page PDFs with selectable text.
 *
 * Builds the site, serves `dist/` and prints each résumé page through headless
 * Chrome. Run after `npm run build`, or on its own: `npm run resume`.
 */
import { createServer } from 'node:http';
import { readFile, mkdir, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { extname, join, resolve } from 'node:path';
import { promisify } from 'node:util';

const run = promisify(execFile);
const DIST = resolve('dist');
const OUT = resolve('dist/pdf');
const PORT = 4321;

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const findChrome = async () => {
  for (const c of CHROME_CANDIDATES) {
    try {
      await access(c);
      return c;
    } catch {
      /* keep looking */
    }
  }
  return null;
};

const serve = () =>
  new Promise((ok) => {
    const server = createServer(async (req, res) => {
      const path = decodeURIComponent((req.url ?? '/').split('?')[0]);
      const file = join(DIST, path === '/' ? 'index.html' : path);
      try {
        const buf = await readFile(file);
        res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
        res.end(buf);
      } catch {
        res.writeHead(404).end('not found');
      }
    });
    server.listen(PORT, () => ok(server));
  });

const main = async () => {
  const chrome = await findChrome();
  if (!chrome) {
    console.error(
      'No Chrome/Chromium found. Open dist/resume.html and dist/resume-ats.html\n' +
        'and print to PDF at Letter with margins set to none.',
    );
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });
  const server = await serve();

  for (const [page, out] of [
    ['resume.html', 'Amy-Zhou-Resume.pdf'],
    ['resume-ats.html', 'Amy-Zhou-Resume-ATS.pdf'],
  ]) {
    await run(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=4000',
      `--print-to-pdf=${join(OUT, out)}`,
      `http://localhost:${PORT}/${page}`,
    ]);
    console.log(`→ dist/pdf/${out}`);
  }

  server.close();
};

main();
