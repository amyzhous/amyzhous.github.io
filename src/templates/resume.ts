import { resume } from '../data/resume.js';
import { emphasise, esc, map } from './html.js';

const contact = [resume.email, resume.phone, resume.site, resume.linkedin];

export const render = (): string => `
<div class="sheet">

  <p class="name">${esc(resume.name)}</p>
  <p class="role-line">${esc(resume.shortTitle)}</p>
  <p class="contact">${map(contact, (c) => `<span>${esc(c)}</span>`)}</p>

  <p class="summary">${esc(resume.summary)}</p>

  <div class="block block-head">
    <p class="lbl">Experience</p>
    <span></span>
  </div>

  ${map(
    resume.roles,
    (r) => `<div class="block role">
    <div>
      <p class="role-company">${esc(r.company)}</p>
      <p class="role-dates">${esc(r.dates)}</p>
    </div>
    <div>
      <p class="role-title">${esc(r.title)}</p>
      ${map(r.lines, (l) => `<p class="sub">${emphasise(l)}</p>`)}
    </div>
  </div>`,
  )}

  <div class="block block-skills">
    <p class="lbl">Skills</p>
    <div>
      ${map(resume.skills, (s) => `<p class="sub"><b>${esc(s.k)}:</b> ${esc(s.v)}</p>`)}
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
