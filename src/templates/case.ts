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

const block = (b: Block): string =>
  b.t === 'figure'
    ? placeholder(b.kind, b.note)
    : `<p class="body">${inline(b.text)}</p>`;

export const render = (slug: Slug): string => {
  const c: CaseStudy = caseBySlug[slug]!;
  const i = caseStudies.findIndex((x) => x.slug === slug);
  const next = caseStudies[(i + 1) % caseStudies.length]!;

  return `
<div class="viewtgl-rail">
  <nav class="viewtgl" aria-label="Page view">
    <span class="viewtgl-on" aria-current="page">Classic</span>
    <a href="/chat.html?thread=${esc(slug)}">Chat</a>
  </nav>
</div>

<header class="case-header">
  <div class="case-header-bar">
    <a class="u lbl lbl-wide case-back" href="/">← All work</a>
  </div>
  <div class="prog-track"><div class="prog"></div></div>
</header>

<main class="frame">
  <div class="inner">
    <div class="case-title-block">
      <h1 class="serif case-title">${esc(c.headline)}</h1>
      <p class="body case-standfirst">${esc(c.standfirst)}</p>
      <p class="serif case-metrics">${esc(c.metrics)}</p>
      <p class="case-role"><span class="lbl lbl-wide">Role</span> ${esc(c.role)}</p>
    </div>
  </div>

  ${c.hero ? `<div class="inner">${placeholder(c.hero.kind, c.hero.note, true)}</div>` : ''}

  <div class="inner">
    ${map(
      c.sections,
      (s) => `<section class="sec">
      <div><p class="serif h2 sec-heading">${esc(s.heading)}</p></div>
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
</main>`;
};

export const head = (slug: Slug): string => {
  const c = caseBySlug[slug]!;
  return `
  <title>${esc(c.name)} — case study</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
