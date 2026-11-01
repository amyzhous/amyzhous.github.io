import { caseBySlug, caseStudies, type Block, type CaseStudy } from '../data/cases.js';
import { paths, type Slug } from '../data/site.js';
import { esc, map } from './html.js';
import { drawingRegister } from './figures.js';

const arrow = `<svg class="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;

/** `**bold**` runs inside a paragraph. */
const inline = (text: string): string =>
  text
    .split('**')
    .map((part, i) => (i % 2 ? `<b>${esc(part)}</b>` : esc(part)))
    .join('');

/**
 * A visual that has been specified but not made yet. Drawn as a plate with
 * the direction inside it, so the page shows where it goes and what it is
 * rather than pretending nothing is missing.
 */
const placeholder = (kind: string, note: string, bleed = false): string => `
<figure class="fig-todo${bleed ? ' fig-todo-bleed' : ''}">
  <p class="lbl fig-todo-kind">${esc(kind)}</p>
  <p class="fig-todo-note">${esc(note)}</p>
</figure>`;

const block = (b: Block): string => {
  switch (b.t) {
    case 'figure':
      return placeholder(b.kind, b.note);
    case 'pull':
      // The sentence the case turns on, set so a skimmer cannot miss it.
      return `<blockquote class="case-pull"><p class="serif">${inline(b.text)}</p></blockquote>`;
    case 'decision':
      // The judgment call, framed. What a senior reader is reading for.
      return `<aside class="case-decision">
      <p class="lbl lbl-wide">${esc(b.label)}</p>
      <p>${inline(b.text)}</p>
    </aside>`;
    default:
      return `<p class="body">${inline(b.text)}</p>`;
  }
};

/** A slug for the in-page anchors, from the section heading. */
const anchor = (heading: string, i: number): string =>
  `${i + 1}-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`.slice(0, 60);

export const render = (slug: Slug): string => {
  const c: CaseStudy = caseBySlug[slug]!;
  const i = caseStudies.findIndex((x) => x.slug === slug);
  const next = caseStudies[(i + 1) % caseStudies.length]!;

  return `
<div class="viewtgl-rail">
  <nav class="viewtgl" aria-label="Preferred view" data-pref-toggle>
    <button type="button" data-mode="classic" aria-pressed="true">Classic</button>
    <button type="button" data-mode="chat" aria-pressed="false">Chat</button>
  </nav>
</div>

<header class="case-header">
  <div class="case-header-bar">
    <a class="u lbl lbl-wide case-back" href="/classic.html" data-home>← All work</a>
  </div>
  <div class="prog-track"><div class="prog"></div></div>
</header>

<main class="frame">
  ${c.hero ? placeholder(c.hero.kind, c.hero.note, true) : ''}

  <div class="inner">
    <div class="case-title-block">
      <p class="lbl lbl-wide case-eyebrow">${esc(c.name)}</p>
      <h1 class="serif case-title">${esc(c.headline)}</h1>
      <p class="case-standfirst">${esc(c.standfirst)}</p>
    </div>

    <section class="case-outcome" aria-label="Outcome">
      <dl class="case-facts">
        <div><dt class="lbl lbl-wide">Role</dt><dd>${esc(c.role)}</dd></div>
        ${c.team ? `<div><dt class="lbl lbl-wide">Team</dt><dd>${esc(c.team)}</dd></div>` : ''}
      </dl>

      <p class="lbl lbl-wide">Outcome</p>
      <div class="case-stats">
        ${map(
          c.stats,
          (s) => `<div class="case-stat">
          ${s.figure ? `<p class="serif case-stat-fig">${esc(s.figure)}</p>` : ''}
          <p class="case-stat-label">${esc(s.label)}</p>
        </div>`,
        )}
      </div>
      ${c.statNote ? `<p class="case-stat-note">${esc(c.statNote)}</p>` : ''}
    </section>
  </div>

  <div class="inner case-cols">
    <aside class="case-rail">
      <nav class="case-nav" aria-label="Sections">
        <ul>
          ${map(
            c.sections,
            (s, i) => `<li><a href="#${anchor(s.heading, i)}">${esc(s.heading)}</a></li>`,
          )}
        </ul>
      </nav>
    </aside>

    <div class="case-read">
    ${map(
      c.sections,
      (s, i) => `<section class="sec" id="${anchor(s.heading, i)}">
      <h2 class="serif h2 sec-heading">${esc(s.heading)}</h2>
      <div class="sec-body">${map(s.blocks, block)}</div>
    </section>`,
    )}

    ${slug === 'project-files' ? `<figure class="fig-register"><div class="plate fig-plate-169 case-reg">${drawingRegister()}</div><figcaption class="cap fig-caption-inline"><b>Drawing register</b> &nbsp;A sheet keeps its identity across revisions, and the current one is never in question.</figcaption></figure>` : ''}

    <a class="next" href="${paths[next.slug]}">
      <p class="lbl lbl-wide next-label">Next case study</p>
      <p class="serif next-title">${esc(next.name)}</p>
      <p class="body">${esc(next.standfirst)}</p>
      <p class="lbl lbl-wide next-go">Explore project ${arrow}</p>
    </a>
    </div>
  </div>
</main>`;
};

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} — case study</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
