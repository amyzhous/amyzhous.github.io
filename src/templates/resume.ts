import { resume } from '../data/resume.js';
import { esc, map } from './html.js';

export const render = (): string => `
<div class="sheet">

  <!-- name left, site right -->
  <div class="topline">
    <p class="ink name">${esc(resume.name)}</p>
    <span class="spacer"></span>
    <p class="where">${esc(resume.designedContact)}</p>
  </div>

  <p class="serif ink positioning">
    <em>${esc(resume.positioningEmphasis)}</em>${esc(resume.positioningRest)}
  </p>

  <div class="block block-head">
    <p class="lbl">Work Experience</p>
    <span></span>
  </div>

  ${map(
    resume.roles,
    (r) => `<div class="block role">
    <p class="serif ink role-company">${esc(r.company)}</p>
    <div>
      <div class="role-title-row">
        <p class="ink role-title">${esc(r.title)}</p>
        <p class="role-dates">${esc(r.dates)}</p>
      </div>
      ${map(r.designedLines, (l) => `<p class="sub">${esc(l)}</p>`)}
    </div>
  </div>`,
  )}

  <div class="block block-skills skills">
    <p class="lbl">Skills</p>
    <div>${map(resume.designedSkills, (s) => `<p class="sub">${esc(s)}</p>`)}</div>
  </div>

  <div class="block block-education">
    <p class="lbl">Education</p>
    <p class="sub">${esc(resume.education.designed)}</p>
  </div>

</div>`;

export const head = (): string => `
  <title>${esc(resume.name)} — résumé</title>
  <meta name="description" content="${esc(resume.shortTitle)}">`;
