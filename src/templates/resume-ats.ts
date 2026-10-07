import { resume } from '../data/resume.js';
import { esc, map } from './html.js';

export const render = (): string => `
<div class="sheet">

  <!-- contact block: plain lines, no columns -->
  <h1>${esc(resume.name)}</h1>
  <p class="body" style="margin-bottom: 5px">${esc(resume.shortTitle)}</p>
  <p class="body contact">${esc(resume.contactLine)}</p>

  <h2>Summary</h2>
  <p class="body">${esc(resume.atsSummary)}</p>

  <h2>Experience</h2>
  ${map(
    resume.roles,
    (r) => `<div class="role">
    <p class="job">${esc(r.atsTitle)}</p>
    <p class="when">${esc('atsCompany' in r ? r.atsCompany : r.company)} | ${esc(r.location)} | ${esc(
      r.datesLong,
    )}</p>
    <ul>${map(r.atsLines, (l) => `<li>${esc(l)}</li>`)}</ul>
  </div>`,
  )}

  <h2>Skills</h2>
  <div class="skills">${map(resume.atsSkills, (s) => `<p class="body">${esc(s)}</p>`)}</div>

  <h2>Education</h2>
  <p class="job">${esc(resume.education.atsDegree)}</p>
  <p class="when">${esc(resume.education.atsWhen)}</p>

</div>`;

export const head = (): string => `
  <title>${esc(resume.name)} — résumé (ATS)</title>
  <meta name="description" content="${esc(resume.shortTitle)} — ATS-parseable résumé">`;
