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
  'construction-data-ai': {
    'Hero: customizable construction analytics dashboard': 'hero',
  },
  'activation-growth': {
    'Hero: selected onboarding and project setup experiences': 'hero',
  },
  'self-serve-billing': {
    'Hero: employee request and billing-admin approval': 'hero',
  },
  'project-files': {
    'Hero: drawing register': 'hero',
    'File model versus drawing model': 'file-vs-drawing-model',
    'Animation: Import → Extract → Review → Publish': 'importing',
    'Animation: A-201 Rev 3 → Site Instruction 3.0 → A-201 Rev 4': 'revisions',
  },
};

const EXT = ['mp4', 'png', 'jpg', 'jpeg', 'webp'];

/**
 * A screenshot can be cropped to its slot's ratio without losing anything
 * that matters. A diagram cannot: its labels sit at the edges. These keep
 * their own proportions instead of filling the frame.
 */
const DIAGRAMS = new Set(['file-vs-drawing-model']);

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

const withShots = (html: string, slug: Slug): string => {
  const map = SHOTS[slug];
  if (!map) return html;

  return html.replace(
    /<div class="slot (r\d+)"><span>([^<]*)<\/span><\/div>/g,
    (whole, ratio: string, label: string) => {
      const name = map[label];
      if (!name) return whole;
      const ext = EXT.find((e) => existsSync(`public/case/${slug}/${name}.${e}`));
      if (!ext) return whole;
      const media =
        ext === 'mp4'
          ? video(`/case/${slug}/${name}`, label)
          : `<img src="/case/${slug}/${name}.${ext}" alt="${esc(label)}" loading="lazy">`;
      const fit = DIAGRAMS.has(name) ? ' shot-fit' : '';
      return `<figure class="shot ${ratio}${fit}">${media}</figure>`;
    },
  );
};

/**
 * Asking a question of an issued set and of a specification division. The
 * Product direction section is where they belong: its own sentence defines
 * the model as drawing sets, sheets and revision history, "with
 * specifications organized into divisions and sections".
 */
const ASK_ROW = `
      <div class="shot-row two">
        <figure class="shot r169">${video('/case/project-files/ask-set', 'Asking a question about an issued set')}</figure>
        <figure class="shot r169">${video('/case/project-files/ask-division', 'Asking a question about a specification division')}</figure>
      </div>
      <p class="cap">Asking a question of an issued set, and of a specification division.</p>`;

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
        /\s*<div class="slot r21"><span>(?:Drawing references|Existing workflow|Detail: drawing revision history)<\/span><\/div>/g,
        slug === 'project-files' ? '' : '$&',
      )
      // the ask pair follows the model diagram it illustrates
      .replace(
        /(<figure class="shot r21 shot-fit">[\s\S]*?<\/figure>)/,
        slug === 'project-files' ? `$1${ASK_ROW}` : '$&',
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
${wire(dropKicker(liftHero(withShots(readFileSync(join(DIR, `${slug}.html`), 'utf8'), slug), slug)), slug)}
</div>`;

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} · Amy Zhou</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
