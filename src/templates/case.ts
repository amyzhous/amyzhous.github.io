import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { caseBySlug } from '../data/cases.js';
import { paths, site, type Slug } from '../data/site.js';
import { esc } from './html.js';

/**
 * The case study page.
 *
 * The markup is Amy's own, taken verbatim from the exported HTML in
 * `src/content/cases-html/`. Nothing here rewrites it: this module only
 * fills in the links the exports left as `#` and adds the site's view
 * switch, which the exports do not carry but every other page does.
 */

const DIR = resolve('src/content/cases-html');

/**
 * A slot becomes a real image as soon as the file exists.
 *
 * Each asset slot in the exports carries a label. Where a file of the
 * matching name sits in `public/case/<slug>/`, the slot renders that image
 * instead; otherwise it stays the labelled placeholder it already was. That
 * way screenshots can be dropped in one at a time without touching markup.
 */
const SHOTS: Record<string, Record<string, string>> = {
  'project-files': {
    'Hero: drawing register': 'hero',
    'Existing workflow': 'existing-workflow',
    'File model versus drawing model': 'file-vs-drawing-model',
    'Animation: Import → Extract → Review → Publish': 'importing',
    'Animation: A-201 Rev 3 → Site Instruction 3.0 → A-201 Rev 4': 'revisions',
    'Detail: drawing revision history': 'revision-trace',
  },
  'activation-growth': {
    'Hero: Selected onboarding and project setup experiences': 'hero',
    'Animation: Import contacts → detect existing → add team → populate reviewers': 'import-members',
    'Animation: Create template → reuse configuration → start new project': 'create-template',
  },
  'construction-data-ai': {
    'Hero: customizable construction analytics dashboard': 'hero',
    'Animation: Select chart → ask why → review breakdown → open source records': 'investigate',
    'Animation: Describe report → review chart preview → confirm → save to dashboard': 'create-chart',
  },
  'self-serve-billing': {
    'Hero: employee request and billing-admin approval': 'hero',
    'Animation: add teammate → provisional access → billing-admin approval': 'add-seats',
  },
};

/**
 * Recordings the exports have no slot for. They follow the section they
 * belong to, after whatever figure it already carries, which is the order
 * the pages keep throughout: the claim, then the prose, then the evidence.
 */
const SQUARE = new Set(['ask-set', 'ask-division']);

const EXTRAS: Record<string, Record<string, [string, string][]>> = {
  'project-files': {
    using: [
      ['ask-set', 'Ask about the set'],
      ['ask-division', 'Ask about the division'],
    ],
  },
  'activation-growth': {
    team: [
      ['add-members', 'Add members quickly'],
      ['project-roles', 'Project roles'],
    ],
    templates: [['use-template', 'Create from template']],
  },
  'self-serve-billing': {
    two: [
      ['approve-requests', 'Approve requests'],
      ['seat-request', 'Seat request approval'],
    ],
  },
};

const EXT = ['mp4', 'png', 'jpg', 'jpeg', 'webp'];


/**
 * A phone plays these at about 335 CSS px, where the 1080-wide copy is
 * already more than a 3x screen can resolve. `media` is read once when the
 * element loads, which is what we want: the file should not change under a
 * window resize mid-playback.
 */
const video = (src: string, label: string): string =>
  `<video autoplay muted loop playsinline preload="metadata" aria-label="${esc(label)}">` +
  `<source src="${src}-sm.mp4" type="video/mp4" media="(max-width: 700px)">` +
  `<source src="${src}.mp4" type="video/mp4">` +
  `</video>`;

/**
 * The caption under a figure is the label the export already gave that
 * slot, minus the word that described what kind of picture to make.
 * Nothing here is written for the page; it is what Amy named the shot.
 */
/**
 * A figure is shaped by its file, not by the slot it fills.
 *
 * The slot labels were written against placeholder art and name ratios the
 * recordings do not have: the 4:3 animations were landing in 16:9 and 2:1
 * frames and losing a quarter to a third of the picture to the crop.
 */
const ratioCache = new Map<string, string>();

const mediaRatio = (file: string): string => {
  const hit = ratioCache.get(file);
  if (hit) return hit;
  // resolved from the project root: the SSR pass runs from a temp directory
  const bin = resolve('node_modules/ffprobe-static/bin', process.platform, process.arch, 'ffprobe');
  const out = execFileSync(bin, [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', file,
  ]).toString().trim().split('\n')[0]!;
  const [w, h] = out.split('x');
  const ratio = `${w}/${h}`;
  ratioCache.set(file, ratio);
  return ratio;
};

const caption = (label: string): string => {
  const text = label.replace(/^(?:Animation|Detail|Hero|Screens?):\s*/, '');
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const withShots = (html: string, slug: Slug): string => {
  const map = SHOTS[slug];
  if (!map) return html;

  return html.replace(
    /<div class="slot (r\d+)"><span>([^<]*)<\/span><\/div>/g,
    (whole, _ratio: string, label: string) => {
      const name = map[label];
      if (!name) return whole;
      const ext = EXT.find((e) => existsSync(`public/case/${slug}/${name}.${e}`));
      if (!ext) return whole;
      const media =
        ext === 'mp4'
          ? video(`/case/${slug}/${name}`, label)
          : `<img src="/case/${slug}/${name}.${ext}" alt="${esc(label)}" loading="lazy">`;
      const cap = name === 'hero' ? '' : `<p class="cap">${esc(caption(label))}</p>`;
      const shape = mediaRatio(`public/case/${slug}/${name}.${ext}`);
      return `<figure class="shot" style="aspect-ratio:${shape}">${media}</figure>${cap}`;
    },
  );
};

/**
 * The design explorations behind the model, shown one at a time with the
 * others as thumbnails under it. Each board's own title is its label.
 *
 * The three boards are not the same height, so the stage is set to the
 * tallest and the shorter two sit inside it: these are labelled boards,
 * and cropping one would cut its annotations off.
 */
const EXPLORATIONS = [
  { file: 'explore-files-to-sheets', eyebrow: 'Exploration', title: 'Files to sheets' },
  { file: 'explore-version-history', eyebrow: 'Exploration', title: 'Version history for each sheet' },
  { file: 'explore-beta', eyebrow: 'Beta', title: 'ProjectFiles Beta' },
];

const CAROUSEL = `
      <div class="explore" data-explore>
        <button type="button" class="explore-stage" data-zoom aria-label="View this board larger">
${EXPLORATIONS.map(
  (e, i) =>
    `          <img src="/case/project-files/${e.file}.webp" alt="${esc(e.eyebrow)}: ${esc(e.title)}"${i ? ' hidden' : ''} loading="lazy">`,
).join('\n')}
        </button>
        <div class="explore-thumbs" role="tablist" aria-label="Design explorations">
${EXPLORATIONS.map(
  (e, i) =>
    `          <button type="button" role="tab" aria-selected="${i === 0}" data-to="${i}">` +
    `<img src="/case/project-files/${e.file}.webp" alt="${esc(e.title)}" loading="lazy"></button>`,
).join('\n')}
        </div>
      </div>
      <dialog class="lightbox" data-lightbox>
        <button type="button" class="lightbox-close" aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <img alt="">
      </dialog>`;

/**
 * The kicker repeated the discipline and the client, both of which the
 * card that led here already said. The page opens on the work and then
 * names it.
 */
const dropKicker = (html: string): string =>
  html.replace(/\s*<p class="kicker">[\s\S]*?<\/p>/, '');

/**
 * The opening image goes above the title, the way a project introduces
 * itself before it is named. It is authored inside the overview, so it
 * is lifted out rather than asked for twice.
 */
const liftHero = (html: string, slug: Slug): string => {
  const re = new RegExp(`\\s*<figure class="shot [^"]*">(?:(?!</figure>)[\\s\\S])*?/case/${slug}/[\\s\\S]*?</figure>`);
  const m = re.exec(html);
  if (!m) return html;
  return html
    .replace(m[0], '')
    .replace('<p class="kicker">', `<div class="case-hero">${m[0].trim()}</div>\n    <p class="kicker">`);
};

/**
 * The extra recordings for one section, appended where that section ends.
 */
const extrasFor = (slug: Slug, section: string): string => {
  const list = EXTRAS[slug]?.[section];
  if (!list) return '';
  const present = list.filter(([file]) =>
    EXT.some((e) => existsSync(`public/case/${slug}/${file}.${e}`)),
  );
  if (!present.length) return '';

  const figures = present.map(([file, label]) => {
    const ext = EXT.find((e) => existsSync(`public/case/${slug}/${file}.${e}`))!;
    const shape = mediaRatio(`public/case/${slug}/${file}.${ext}`);
    return (
      `<figure class="shot" style="aspect-ratio:${shape}">${video(`/case/${slug}/${file}`, label)}` +
      `<figcaption class="cap">${esc(label)}</figcaption></figure>`
    );
  });

  // A square at the full column width is taller than anything else on the
  // page, so squares go two across, the way a square is used at all.
  return present.every(([file]) => SQUARE.has(file))
    ? `\n      <div class="shot-pair">${figures.join('')}</div>`
    : figures.map((f) => `\n      ${f}`).join('');
};

/** Appends each section's extra recordings just inside its closing tag. */
const withExtras = (html: string, slug: Slug): string =>
  html.replace(/<section id="([a-z-]+)">([\s\S]*?)<\/section>/g, (whole, id: string, body: string) => {
    const extra = extrasFor(slug, id);
    return extra ? `<section id="${id}">${body}${extra}\n    </section>` : whole;
  });

/** Reading order, which also decides what "next project" points at. */
const ORDER: Slug[] = [
  'project-files',
  'activation-growth',
  'construction-data-ai',
  'self-serve-billing',
];

/**
 * The exports point every link at `#`. Wire them to real destinations,
 * matching on the surrounding markup so no copy is touched.
 */
const wire = (html: string, slug: Slug): string => {
  const next = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length]!;

  return (
    html
      // Project Files is fully illustrated now, so its remaining empty
      // placeholders go rather than sit on the page as dashed boxes, and
      // Launch carries its figures alone.
      .replace(
        /\s*<div class="slot r21"><span>Drawing references<\/span><\/div>/g,
        slug === 'project-files' ? '' : '$&',
      )
      // the explorations come before the diagram they arrived at
      .replace(
        /(<figure class="shot [^"]*"><img src="\/case\/project-files\/file-vs-drawing-model)/,
        slug === 'project-files' ? `${CAROUSEL}\n      $1` : '$&',
      )
      // "All work" returns to the one home there is
      .replaceAll('<a class="backlink" href="#">', '<a class="backlink" href="/">')
      .replace('<a class="next" href="#">', `<a class="next" href="${paths[next]}">`)
      // the footer links are the chat view's buttons: pill, icon, label
      .replace(
        '<div class="links"><a href="#">LinkedIn</a><a href="mailto:hello@example.com">Email</a><a href="#">Résumé</a></div>',
        `<div class="links">
      <a class="pill ghost" href="mailto:${esc(site.email)}"><svg class="i i16" viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="M2.5 4.5 8 9l5.5-4.5"/></svg>Email</a>
      <a class="pill ghost" href="${esc(site.resumeHref)}" target="_blank" rel="noopener"><svg class="i i16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2h5.5L12 4.5V14H4z"/><path d="M6 8h4M6 10.5h4"/></svg>Resume</a>
      <a class="pill ghost" href="${esc(site.linkedinHref)}" target="_blank" rel="noopener"><svg class="i i16" viewBox="0 0 16 16" aria-hidden="true"><path d="M7 9a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-.6.6"/><path d="M9 7a3 3 0 0 0-4.2 0l-2 2A3 3 0 0 0 7 13.2l.6-.6"/></svg>LinkedIn</a>
    </div>`,
      )
  );
};

export const render = (slug: Slug): string => `
<div class="layout">
${wire(dropKicker(liftHero(withExtras(withShots(readFileSync(join(DIR, `${slug}.html`), 'utf8'), slug), slug), slug)), slug)}
</div>`;

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} · Amy Zhou</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
