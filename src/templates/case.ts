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
    'Hero: drawing register': 'drawings-register',
    'Detail: drawing revision history': 'sheet-revisions',
    'Drawing references': 'specs-sections',
    'File model versus drawing model': 'specs-divisions',
    'Existing workflow': 'specs-sets',
  },
};

const EXT = ['png', 'jpg', 'jpeg', 'webp'];

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
      return `<figure class="shot ${ratio}"><img src="/case/${slug}/${name}.${ext}" alt="${esc(label)}" loading="lazy"></figure>`;
    },
  );
};

/** Reading order, which also decides what "next project" points at. */
const ORDER: Slug[] = [
  'project-files',
  'activation-growth',
  'construction-data-ai',
  'self-serve-billing',
];

const VIEW_SWITCH = `<nav class="viewtgl" aria-label="Preferred view" data-pref-toggle>
      <button type="button" data-mode="classic" aria-pressed="true">Classic</button>
      <button type="button" data-mode="chat" aria-pressed="false">Chat</button>
    </nav>`;

/**
 * The exports point every link at `#`. Wire them to real destinations,
 * matching on the surrounding markup so no copy is touched.
 */
const wire = (html: string, slug: Slug): string => {
  const next = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length]!;

  return (
    html
      // "All work" returns to the classic index and carries the data-home
      // hook, so it honours whichever view was last chosen
      .replaceAll(
        '<a class="backlink" href="#">',
        '<a class="backlink" href="/classic.html" data-home>',
      )
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
<div class="viewtgl-rail">${VIEW_SWITCH}</div>

<div class="layout">
${wire(withShots(readFileSync(join(DIR, `${slug}.html`), 'utf8'), slug), slug)}
</div>`;

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} · Amy Zhou</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
