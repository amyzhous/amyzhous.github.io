import { resume } from '../data/resume.js';
import { emphasise, esc, map } from './html.js';

const contact = [resume.email, resume.phone, resume.site, resume.linkedin].join(' · ');

export const render = (): string => `
<div class="sheet">

  <!-- name left, contact right -->
  <div class="topline">
    <p class="ink name">${esc(resume.name)}</p>
    <span class="spacer"></span>
    <p class="where">${esc(contact)}</p>
  </div>

  <div class="block block-head">
    <p class="lbl">Experience</p>
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
      ${map(r.lines, (l) => `<p class="sub">${emphasise(l)}</p>`)}
    </div>
  </div>`,
  )}

  <div class="block block-skills skills">
    <p class="lbl">Skills</p>
    <div>
      ${map(
        resume.skills,
        (s) => `<p class="sub"><b>${esc(s.k)}:</b> ${esc(s.v)}</p>`,
      )}
    </div>
  </div>

  <div class="block block-education">
    <p class="lbl">Education</p>
    <p class="sub"><b>${esc(resume.education.school)}</b> · ${esc(resume.education.degree)}</p>
  </div>

</div>`;

export const head = (): string => `
  <title>${esc(resume.name)} — résumé</title>
  <meta name="robots" content="noindex">
  <meta name="description" content="${esc(resume.shortTitle)}">`;
