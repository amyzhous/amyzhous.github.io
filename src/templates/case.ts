import { readFileSync } from 'node:fs';
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
      .replace(
        '<a href="#">LinkedIn</a>',
        `<a href="${esc(site.linkedinHref)}" target="_blank" rel="noopener">LinkedIn</a>`,
      )
      .replace(
        '<a href="mailto:hello@example.com">Email</a>',
        `<a href="mailto:${esc(site.email)}">Email</a>`,
      )
      .replace(
        '<a href="#">Résumé</a>',
        `<a href="${esc(site.resumeHref)}" target="_blank" rel="noopener">Résumé</a>`,
      )
      // the switch sits in the rail on desktop, in the sticky bar on mobile
      .replace('</ol></nav>\n  </aside>', `</ol></nav>\n    ${VIEW_SWITCH}\n  </aside>`)
      // a <nav> inside a <p> is hoisted out by the parser, so the mobile bar
      // becomes a div and holds the switch properly
      .replace('<p class="m-crumb">', '<div class="m-crumb">')
      .replace('</a></p>\n    <p class="kicker"', `</a>${VIEW_SWITCH}</div>\n    <p class="kicker"`)
  );
};

export const render = (slug: Slug): string => `
<div class="layout">
${wire(readFileSync(join(DIR, `${slug}.html`), 'utf8'), slug)}
</div>`;

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} · Amy Zhou</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
