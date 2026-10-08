import type { Block, CaseStudy, Figure, Prose, Section } from '../data/cases.js';
import { cases } from '../data/cases.js';
import { paths, type Slug } from '../data/site.js';
import { esc, map } from './html.js';
import { conversionFunnel, drawingRegister } from './figures.js';

const arrow = `<svg class="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;

const prose = (p: Prose): string => {
  switch (p.t) {
    case 'p':
      return `<p class="body${p.small ? ' body-sm' : ''}">${
        p.lead ? `<b>${esc(p.lead)}:</b> ` : ''
      }${esc(p.text)}</p>`;
    case 'h2':
      return `<p class="serif h2">${esc(p.text)}</p>`;
    case 'lines':
      return map(p.items, (t) => `<p class="serif statement">${esc(t)}</p>`);
    case 'shipped':
      return map(p.items, (t) => `<p class="serif shipped">${esc(t)}</p>`);
    case 'note':
      return `<p class="cap note">${esc(p.text)}</p>`;
    case 'quote':
      return `<blockquote class="serif pull">
        “${esc(p.text)}”
        <footer class="lbl lbl-wide">${esc(p.cite)}</footer>
      </blockquote>`;
    case 'options':
      return map(
        p.items,
        (o) => `<div class="opt${o.chosen ? ' opt-chosen' : ''}">
        <p class="serif opt-name">${esc(o.name)}</p>
        <p class="body body-sm"><b>Upside:</b> ${esc(o.up)}</p>
        <p class="body body-sm body-down"><b>Tradeoff:</b> ${esc(o.down)}</p>
        <p class="lbl lbl-wide opt-mark">${esc(o.mark)}</p>
      </div>`,
      );
  }
};

const section = (s: Section): string => {
  const pad = s.padBottom ? ` style="--pad-bottom: ${s.padBottom}"` : '';
  return `<section class="sec"${pad}>
  <div>
    <p class="lbl lbl-wide ${s.heading ? 'sec-label' : 'sec-label-only'}">${s.label}</p>
    ${s.heading ? `<p class="serif h2 sec-heading">${esc(s.heading)}</p>` : ''}
  </div>
  <div class="sec-body">${map(s.body, prose)}</div>
</section>`;
};

const figureBody = (f: Figure): string => {
  switch (f.kind) {
    case 'register':
      return `<div class="plate fig-plate-169 case-reg">${drawingRegister()}</div>`;
    case 'funnel':
      return `<div class="plate fig-plate-169 case-fun">${conversionFunnel(
        'What happened after the answer',
      )}</div>`;
    case 'matrix':
      return `<div class="case-mx">
  <div class="case-mx-grid">
    <div class="case-mx-spacer"></div>
    <p class="lbl lbl-wide case-mx-col">Open</p>
    <p class="lbl lbl-wide case-mx-col">Staged</p>
    ${map(
      f.rows,
      (r) => `<p class="serif case-mx-plat">${esc(r.row)}</p>
    <div class="case-mx-cell">${esc(r.open)}</div>
    <div class="case-mx-cell">${esc(r.staged)}</div>`,
    )}
  </div>
  <p class="lbl lbl-wide case-mx-foot">${esc(f.foot)}</p>
</div>`;
    case 'beforeAfter':
      return `<div class="cards cards-2">
  <div class="card">
    <p class="lbl lbl-wide">Before</p>
    <p class="serif card-head">${esc(f.before)}</p>
  </div>
  <div class="card card-after">
    <p class="lbl lbl-wide lbl-after">After</p>
    <p class="serif card-head">${esc(f.after.title)}</p>
    <p class="card-evidence">${esc(f.after.evidence)}</p>
    <p class="lbl lbl-wide card-cite">${esc(f.after.cite)}</p>
  </div>
</div>`;
    case 'roles':
      return `<div class="cards cards-3">
  ${map(
    f.items,
    (r) => `<div class="card card-role">
    <p class="serif card-role-name">${esc(r.name)}</p>
    <p class="card-role-body">${esc(r.body)}</p>
  </div>`,
  )}
</div>`;
  }
};

const caption = (n: string, text: string): string =>
  `<p class="cap"><b>${esc(n)}</b> &nbsp;${esc(text)}</p>`;

const block = (b: Block): string => {
  switch (b.t) {
    case 'section':
      return section(b);
    case 'metrics':
      return `<div class="metrics${b.size === 'md' ? ' metrics-md' : ''}">
  ${map(
    b.items,
    (m) => `<div class="metrics-cell">
    <p class="serif metrics-val">${esc(m.v)}</p>
    <p class="lbl lbl-wide">${esc(m.k)}</p>
  </div>`,
  )}
</div>`;
    case 'bigNumber':
      return `<div class="bignum">
  <p class="serif bignum-val">${esc(b.v)}</p>
  <p class="body">${esc(b.text)}</p>
</div>`;
    case 'figure':
      return `<figure style="margin: 0">${figureBody(b.figure)}
  <figcaption class="fig-caption-inline">${caption(b.n, b.caption)}</figcaption>
</figure>`;
  }
};

export const render = (slug: Slug): string => {
  const c: CaseStudy = cases[slug];
  return `
<header class="case-header">
  <div class="case-header-bar">
    <a class="lbl lbl-wide case-back" href="/">← All work</a>
    <span class="spacer"></span>
    <span class="lbl lbl-wide">${esc(c.n)} · ${esc(c.title)}</span>
  </div>
  <div class="prog-track"><div class="prog"></div></div>
</header>

<main class="frame">
  <div class="inner">
    <div class="case-title-block">
      <h1 class="serif case-title">${esc(c.title)}</h1>
      <p class="body case-standfirst">${esc(c.standfirst)}</p>
    </div>

    <div class="meta">
      ${map(
        c.meta,
        (m) => `<div class="meta-cell">
        <p class="lbl lbl-wide">${esc(m.k)}</p>
        <p class="serif">${esc(m.v)}</p>
      </div>`,
      )}
    </div>
  </div>

  <!-- full-bleed figure -->
  <figure style="margin: 0">
    <div class="fig-bleed">${figureBody(c.hero.figure)}</div>
    <figcaption class="inner fig-caption-bleed">${caption(c.hero.n, c.hero.caption)}</figcaption>
  </figure>

  <div class="inner">
    ${map(c.blocks, block)}

    <a class="next" href="${paths[c.next.slug]}">
      <p class="lbl lbl-wide next-label">Next case study</p>
      <p class="serif next-title">${esc(c.next.title)}</p>
      <p class="body">${esc(c.next.blurb)}</p>
      <p class="lbl lbl-wide next-go">Explore project ${arrow}</p>
    </a>
  </div>
</main>`;
};

export const head = (slug: Slug): string => {
  const c = cases[slug];
  return `
  <title>${esc(c.title)} — case study</title>
  <meta name="description" content="${esc(c.standfirst)}">`;
};
