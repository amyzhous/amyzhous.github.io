import { resume } from '../data/resume.js';
import { emphasise, esc, map } from './html.js';

const contact = [resume.email, resume.phone, resume.site, resume.linkedin];

/** A section: its label in the rail, everything else in the content column. */
const section = (label: string, body: string): string => `
  <section class="section">
    <p class="lbl">${esc(label)}</p>
    <div>${body}</div>
  </section>`;

export const render = (): string => `
<div class="sheet">

  <p class="name">${esc(resume.name)}</p>
  <p class="contact">${map(contact, (c) => `<span>${esc(c)}</span>`)}</p>
  <p class="summary">${esc(resume.summary)}</p>

  ${section(
    'Experience',
    map(
      resume.roles,
      (r) => `<div class="entry">
      <p class="entry-title">${esc(r.title)}</p>
      <p class="entry-meta">${esc(r.company)} · ${esc(r.dates)}</p>
      <ul class="bullets">${map(r.lines, (l) => `<li>${emphasise(l, false)}</li>`)}</ul>
    </div>`,
    ),
  )}

  ${section(
    'Skills',
    map(
      resume.skills,
      (s) => `<p class="sub"><span class="key">${esc(s.k)}:</span> ${esc(s.v)}</p>`,
    ),
  )}

  ${section(
    'Education',
    `<p class="sub">${esc(resume.education.school)} · ${esc(resume.education.degree)}</p>`,
  )}

</div>`;

export const head = (): string => `
  <title>${esc(resume.name)} — résumé</title>
  <meta name="robots" content="noindex">
  <meta name="description" content="${esc(resume.shortTitle)}">`;
