/**
 * Regenerates the favicon set in `public/` from `scripts/favicon-source.html`,
 * which renders a Newsreader "A" in --text on the --ground square.
 *
 * The 16px tile is rendered at weight 500: the lighter cut loses its serifs at
 * that size. Everything 32px and up uses 400, matching the site's own name
 * treatment. Needs Chrome and macOS `sips`.
 *
 *   node scripts/make-favicon.mjs
 */
import { execFile } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { pathToFileURL } from 'node:url';

const run = promisify(execFile);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9242;
const ROOT = resolve(import.meta.dirname, '..');
const PUBLIC = join(ROOT, 'public');
const SOURCE = join(ROOT, 'scripts', 'favicon-source.html');

/** The ink box fills all but this fraction of the square on each side. */
const INSET = 0.14;

const work = await mkdtemp(join(tmpdir(), 'favicon-'));
const profile = join(work, 'profile');
const chrome = execFile(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`, '--hide-scrollbars', 'about:blank',
]);
await sleep(2500);

const tabs = await (await fetch(`http://localhost:${PORT}/json/list`)).json();
const ws = new WebSocket(tabs.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));

let id = 0;
const send = (method, params) =>
  new Promise((res) => {
    const myId = ++id;
    const on = (e) => {
      const m = JSON.parse(e.data);
      if (m.id === myId) { ws.removeEventListener('message', on); res(m.result); }
    };
    ws.addEventListener('message', on);
    ws.send(JSON.stringify({ id: myId, method, params }));
  });

await send('Emulation.setDeviceMetricsOverride', {
  width: 512, height: 512, deviceScaleFactor: 1, mobile: false,
});
await send('Page.navigate', { url: pathToFileURL(SOURCE).href });
await sleep(1800);

/** Renders the glyph at one weight and returns the 512px PNG. */
const render = async (weight) => {
  await send('Runtime.evaluate', {
    expression: `fit(${weight}, ${INSET})`, awaitPromise: true, returnByValue: true,
  });
  await sleep(250);
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const file = join(work, `A-${weight}.png`);
  await writeFile(file, Buffer.from(shot.data, 'base64'));
  return file;
};

const light = await render(400);
const heavy = await render(500);
ws.close();
chrome.kill();

const resize = async (src, size, out) => {
  await run('sips', ['-z', String(size), String(size), src, '--out', out]);
  return out;
};

await mkdir(PUBLIC, { recursive: true });
await resize(light, 32, join(PUBLIC, 'favicon-32.png'));
await resize(light, 192, join(PUBLIC, 'favicon-192.png'));
await resize(light, 512, join(PUBLIC, 'favicon-512.png'));
await resize(light, 180, join(PUBLIC, 'apple-touch-icon.png'));

// favicon.ico: 16 (weight 500) + 32 + 48, each a PNG payload
const ico = [
  [await resize(heavy, 16, join(work, 'i16.png')), 16],
  [await resize(light, 32, join(work, 'i32.png')), 32],
  [await resize(light, 48, join(work, 'i48.png')), 48],
];
const payloads = await Promise.all(ico.map(async ([f, s]) => [await readFile(f), s]));

let offset = 6 + 16 * payloads.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);                 // reserved
header.writeUInt16LE(1, 2);                 // type: icon
header.writeUInt16LE(payloads.length, 4);   // image count

const entries = [];
for (const [data, size] of payloads) {
  const e = Buffer.alloc(16);
  e.writeUInt8(size >= 256 ? 0 : size, 0);  // width
  e.writeUInt8(size >= 256 ? 0 : size, 1);  // height
  e.writeUInt16LE(1, 4);                    // colour planes
  e.writeUInt16LE(32, 6);                   // bits per pixel
  e.writeUInt32LE(data.length, 8);
  e.writeUInt32LE(offset, 12);
  entries.push(e);
  offset += data.length;
}

await writeFile(
  join(PUBLIC, 'favicon.ico'),
  Buffer.concat([header, ...entries, ...payloads.map(([d]) => d)]),
);
await rm(work, { recursive: true, force: true });

console.log('→ public/favicon.ico (16, 32, 48)');
for (const f of ['favicon-32.png', 'favicon-192.png', 'favicon-512.png', 'apple-touch-icon.png']) {
  console.log(`→ public/${f}`);
}
