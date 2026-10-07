/**
 * The three diagrams. Each is drawn, never decorative, and each is shared
 * between the home plate and the case page where it appears at a larger
 * scale (the `case-*` wrappers change only size, never structure).
 */
import { funnelBars, funnelFootnote, registerRows } from '../data/site.js';
import { esc, map } from './html.js';

const ROW_CLASS = ['row-1', 'row-2', 'row-3', 'row-4', 'row-5'];
const BAR_CLASS = ['bar-1', 'bar-2', 'bar-3'];

/** The drawing register: a sidebar plus a No./Title/Rev table. */
export const drawingRegister = (): string => `
<div class="reg-side" aria-hidden="true">
  <p class="reg-head">Drawing sets</p>
  <p class="reg-top">Architectural</p>
  <p class="reg-sub">Plans</p>
  <p class="reg-sub">Elevations</p>
  <p>Structural</p>
  <p>Mechanical</p>
</div>
<div class="reg-table">
  <div class="reg-row reg-head-row">
    <span>No.</span><span>Title</span><span>Rev</span>
  </div>
  ${map(
    registerRows,
    (r, i) => `<div class="reg-row row ${ROW_CLASS[i]}">
    <span class="row-no">${esc(r.no)}</span>
    <span class="row-title">${esc(r.title)}</span>
    <span class="chip${r.current ? ' chip-on' : ''}">${esc(r.rev)}</span>
  </div>`,
  )}
</div>`;

/**
 * The conversion funnel: three bars at their true relative widths. The home
 * plate carries the longer headline; the case page sits under its own title,
 * so it says less.
 */
export const conversionFunnel = (
  headline = 'AI review · what happened after the answer',
): string => `
<div class="fun">
  <p class="fun-head">${esc(headline)}</p>
  <div class="fun-bars">
    ${map(
      funnelBars,
      (b, i) => `<div class="fun-row">
      <span class="fun-key">${esc(b.k)}</span>
      <div class="fun-track"><div class="bar ${BAR_CLASS[i]}" style="width: ${b.w}; background: ${b.fill}"></div></div>
      <span class="fun-val">${esc(b.v)}</span>
    </div>`,
    )}
  </div>
  <p class="fun-foot">${esc(funnelFootnote)}</p>
</div>`;

/** The platform matrix: four outlined cells, an arrow, one solid block. */
export const platformMatrix = (): string => `
<div class="mx">
  <div class="mx-grid">
    <div class="mx-row mx-head">
      <span class="mx-spacer"></span>
      <span class="mx-col">Open</span>
      <span class="mx-col">Staged</span>
    </div>
    <div class="mx-row">
      <span class="mx-plat">Part3</span>
      <div class="cel cel-a"></div>
      <div class="cel cel-b"></div>
    </div>
    <div class="mx-row">
      <span class="mx-plat">Procore</span>
      <div class="cel cel-c"></div>
      <div class="cel cel-d"></div>
    </div>
    <p class="mx-note">Bluebeam across all four</p>
  </div>
  <svg class="mx-arrow" width="38" height="10" viewBox="0 0 38 10" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true" style="color: var(--label)"><path d="M0 5h32"/><path d="m28 1 4 4-4 4"/></svg>
  <svg class="mx-arrow-down" width="10" height="26" viewBox="0 0 10 26" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true" style="color: var(--label)"><path d="M5 0v20"/><path d="m1 16 4 4 4-4"/></svg>
  <div class="mx-solo">
    <p class="mx-solo-label">Unified</p>
    <div class="solo"><span>One review</span></div>
  </div>
</div>`;

export const homeFigure = (kind: 'register' | 'funnel' | 'matrix'): string => {
  switch (kind) {
    case 'register':
      return drawingRegister();
    case 'funnel':
      return conversionFunnel();
    case 'matrix':
      return platformMatrix();
  }
};
