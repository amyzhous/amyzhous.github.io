import { caseBySlug, caseStudies, type Block, type CaseStudy } from '../data/cases.js';
import { paths, site, type Slug } from '../data/site.js';
import { esc, map } from './html.js';
import { drawingRegister } from './figures.js';

/**
 * The case study page.
 *
 * The layout follows rachelchen.tech/projects/openai, measured rather than
 * eyeballed: a 740px column of text, images breaking out to 992px, every
 * block separated by a 32px gap and nothing else. That page carries no
 * rules — its only borders are 1px at 5% alpha — and it ends on a
 * reflection and a row of links, with no next-project card.
 */

/**
 * The markdown's `**bold**` runs are dropped rather than rendered. Body text
 * is one size in one colour: a heavier, darker clause in the middle of a
 * paragraph reads as a mistake, not as emphasis.
 */
const inline = (text: string): string => esc(text.replace(/\*\*/g, ''));

/**
 * A visual that has been specified but not made yet: a plate holding its own
 * direction, so the page shows where it goes and what it is.
 */
const placeholder = (kind: string, note: string): string => `
<figure class="cs-ph">
  <p class="cs-ph-kind">${esc(kind)}</p>
  <p class="cs-ph-note">${esc(note)}</p>
</figure>`;

/** A slug for the in-page anchors, from the section heading. */
const anchor = (heading: string, i: number): string =>
  `${i + 1}-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`.slice(0, 60);

const prose = (b: Block): string => {
  switch (b.t) {
    case 'decision':
      // Labelled the way she labels a section, not boxed: the page has no plates.
      return `<div class="cs-block">
      <p class="cs-label">${esc(b.label)}</p>
      <p class="cs-t2">${inline(b.text)}</p>
    </div>`;
    case 'reflection':
      return `<div class="cs-block">
      <p class="cs-label">Reflection</p>
      <p class="cs-t2">${inline(b.text)}</p>
    </div>`;
    case 'p':
      return `<p class="cs-body">${inline(b.text)}</p>`;
    default:
      return '';
  }
};

/**
 * Text sits in the narrow column and figures in the wide one, so a section's
 * blocks are emitted as alternating runs rather than one container.
 */
const runs = (blocks: Block[], lead = ''): string => {
  const out: string[] = [];
  let narrow: string[] = lead ? [lead] : [];

  const flush = () => {
    if (narrow.length) out.push(`<div class="cs-m">${narrow.join('\n')}</div>`);
    narrow = [];
  };

  for (const b of blocks) {
    if (b.t === 'figure') {
      flush();
      out.push(`<div class="cs-wide">${placeholder(b.kind, b.note)}</div>`);
    } else {
      narrow.push(prose(b));
    }
  }
  flush();
  return out.join('\n');
};

export const render = (slug: Slug): string => {
  const c: CaseStudy = caseBySlug[slug]!;
  const i = caseStudies.findIndex((x) => x.slug === slug);
  const next = caseStudies[(i + 1) % caseStudies.length]!;

  const meta = [
    { label: 'Role', value: c.role },
    ...(c.team ? [{ label: 'Team', value: c.team }] : []),
  ];

  return `
<div class="cs">

  <div class="cs-wide cs-bar">
    <p class="cs-crumb"><a class="u" href="/classic.html" data-home>← All work</a> <span>/</span> ${esc(c.name)}</p>
    <nav class="viewtgl" aria-label="Preferred view" data-pref-toggle>
      <button type="button" data-mode="classic" aria-pressed="true">Classic</button>
      <button type="button" data-mode="chat" aria-pressed="false">Chat</button>
    </nav>
  </div>

  ${c.hero ? `<div class="cs-wide cs-hero">${placeholder(c.hero.kind, c.hero.note)}</div>` : ''}

  <div class="cs-m">
    <h1 class="cs-t1">${esc(c.headline)}</h1>

    <dl class="cs-meta">
      ${map(
        meta,
        (m) => `<div><dt class="cs-label">${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`,
      )}
    </dl>

    <div class="cs-block">
      <p class="cs-label">Overview</p>
      <p class="cs-t2">${esc(c.standfirst)}</p>
      <div class="cs-stats">
        ${map(
          c.stats,
          (s) => `<div>
          ${s.figure ? `<p class="cs-fig">${esc(s.figure)}</p>` : ''}
          <p class="cs-body">${esc(s.label)}</p>
        </div>`,
        )}
      </div>
      ${c.statNote ? `<p class="cs-note">${esc(c.statNote)}</p>` : ''}
    </div>
  </div>

  ${map(c.sections, (s, i) =>
    runs(
      s.blocks,
      `<div class="cs-block" id="${anchor(s.heading, i)}">
      <p class="cs-label">${esc(s.kind ?? 'Section')}</p>
      <h2 class="cs-t3">${esc(s.heading)}</h2>
    </div>`,
    ),
  )}

  ${slug === 'project-files' ? `<div class="cs-wide"><figure class="cs-ph-live"><div class="plate fig-plate-169">${drawingRegister()}</div><figcaption class="cs-ph-note">A sheet keeps its identity across revisions, and the current one is never in question.</figcaption></figure></div>` : ''}

  <div class="cs-m cs-next">
    <a class="u" href="${paths[next.slug]}">Next: ${esc(next.name)} →</a>
  </div>

  <footer class="cs-wide cs-foot">
    <a class="u" href="mailto:${esc(site.email)}">Email</a>
    <a class="u" href="${esc(site.linkedinHref)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="u" href="${esc(site.resumeHref)}" target="_blank" rel="noopener">Resume</a>
  </footer>

</div>`;
};

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} — case study</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
