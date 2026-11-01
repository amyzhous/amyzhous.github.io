/**
 * The drawing register. Drawn, never decorative, shared between the home
 * plate and the Project Files case page, where the `case-reg` wrapper
 * changes its size but not its structure.
 *
 * The conversion funnel and the platform matrix lived here too, until the
 * case studies they illustrated were retired.
 */
import { registerRows } from '../data/site.js';
import { esc, map } from './html.js';

const ROW_CLASS = ['row-1', 'row-2', 'row-3', 'row-4', 'row-5'];

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
