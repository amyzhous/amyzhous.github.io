import { autoScrollSpeed, paths, site, work } from '../data/site.js';
import { esc, map } from './html.js';
import { homeFigure } from './figures.js';

const arrow = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;

/**
 * One work card. `ghost` marks the duplicate copy: it is hidden from the
 * accessibility tree and taken out of the tab order, so the work is announced
 * once and tabbing does not cycle twice.
 */
const card = (w: (typeof work)[number], ghost: boolean, first: boolean): string => {
  const classes = ['proj'];
  if (ghost && first) classes.push('loop-start');
  if (!ghost && first) classes.push('in');
  return `
<a class="${classes.join(' ')}" href="${paths[w.slug]}"${first && !ghost ? ' style="--d: 300ms"' : ''}${
    ghost ? ' aria-hidden="true" tabindex="-1"' : ''
  }>
  <div class="proj-kicker">
    <span class="lbl proj-no">${esc(w.n)}</span>
    <span class="lbl">${esc(w.kicker)}</span>
  </div>
  <h2 class="serif proj-title"><span class="title">${esc(w.title)}</span></h2>
  <div class="plate">${homeFigure(w.figure)}</div>
  <div class="proj-foot">
    <p class="serif proj-metric">${esc(w.metric)}</p>
    <span class="spacer"></span>
    <span class="go">Open case study ${arrow}</span>
  </div>
</a>`;
};

const endcard = (ghost: boolean): string => `
<div class="endcard"${ghost ? ' aria-hidden="true"' : ''}>
  <p>${esc(site.closing)} <a class="u" href="mailto:${esc(site.email)}"${
    ghost ? ' tabindex="-1"' : ''
  }>${esc(site.email)}</a></p>
</div>`;

/** The list is rendered twice so the wrap has identical content. */
const workColumn = (): string =>
  [0, 1]
    .map((pass) => {
      const ghost = pass === 1;
      return map(work, (w, i) => card(w, ghost, i === 0)) + endcard(ghost);
    })
    .join('');

export const render = (): string => `
<div class="shell">

  <!-- ══ rail ══ -->
  <div class="rail">
    <p class="serif rail-name in" style="--d: 0ms">${esc(site.name)}</p>
    <p class="lbl rail-role in" style="--d: 60ms">${esc(site.roleLabel)}</p>

    <p class="serif rail-lede in" style="--d: 120ms">${esc(site.lede)}</p>
    <p class="serif rail-voice in" style="--d: 180ms">${esc(site.voice)}</p>

    <p class="lbl rail-label in" style="--d: 240ms">Work</p>
    <nav class="rail-index in" style="--d: 290ms" aria-label="Work">
      ${map(
        work,
        (w, i) => `<a class="idx${i === 0 ? ' idx-on' : ''}" href="${paths[w.slug]}" data-index="${i}">
        <span class="lbl">${esc(w.n)}</span><span class="serif idx-title">${esc(w.short)}</span>
      </a>`,
      )}
    </nav>

    <p class="lbl rail-label in" style="--d: 350ms">Elsewhere</p>
    <p class="serif rail-elsewhere in" style="--d: 400ms">
      <a class="u" href="mailto:${esc(site.email)}">Email</a><br>
      <a class="u" href="${esc(site.resumeHref)}">Résumé</a><br>
      <a class="u" href="${esc(site.linkedinHref)}">LinkedIn</a>
    </p>
  </div>

  <!-- ══ work: the list is rendered twice so the loop never cuts ══ -->
  <div class="scroller" data-scroller data-speed="${autoScrollSpeed}">${workColumn()}
  </div>

</div>`;

export const head = (): string => `
  <title>${esc(site.name)} — product designer</title>
  <meta name="description" content="${esc(site.lede)}">`;
