import { resume } from '../data/resume.js';
import { emphasise, esc, map } from './html.js';

const contact = [resume.email, resume.phone, resume.site, resume.linkedin].join(' | ');

export const render = (): string => `
<div class="sheet">

  <!-- contact block: plain lines, no columns -->
  <h1>${esc(resume.name)}</h1>
  <p class="body" style="margin-bottom: 5px">${esc(resume.shortTitle)}</p>
  <p class="body contact">${esc(contact)}</p>

  <h2>Experience</h2>
  ${map(
    resume.roles,
    (r) => `<div class="role">
    <p class="job">${esc(r.title)}</p>
    <p class="when">${esc(r.company)} | ${esc(r.datesLong)}</p>
    <ul>${map(r.lines, (l) => `<li>${emphasise(l, false)}</li>`)}</ul>
  </div>`,
  )}

  <h2>Skills</h2>
  <div class="skills">
    ${map(resume.skills, (s) => `<p class="body">${esc(s.k)}: ${esc(s.v)}</p>`)}
  </div>

  <h2>Education</h2>
  <p class="job">${esc(resume.education.degree)}</p>
  <p class="when">${esc(resume.education.school)}</p>

</div>`;

export const head = (): string => `
  <title>${esc(resume.name)} — résumé (ATS)</title>
  <meta name="robots" content="noindex">
  <meta name="description" content="${esc(resume.shortTitle)} — ATS-parseable résumé">`;
