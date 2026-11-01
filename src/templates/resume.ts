import { resume } from '../data/resume.js';
import { emphasise, esc, map } from './html.js';

/**
 * The contact line is a set of real links, so it works both on the page and
 * in the PDF — a printed resume whose address is only text makes a reader
 * retype it. The label stays as written; only the href is added.
 */
const contact: { text: string; href: string }[] = [
  { text: resume.email, href: `mailto:${resume.email}` },
  { text: resume.phone, href: `tel:${resume.phone.replace(/[^\d+]/g, '')}` },
  { text: resume.site, href: `https://${resume.site.replace(/^https?:\/\//, '')}` },
  { text: resume.linkedin, href: `https://${resume.linkedin.replace(/^https?:\/\//, '')}` },
];

/** A section: its label in the rail, everything else in the content column. */
const section = (label: string, body: string): string => `
  <section class="section">
    <p class="lbl">${esc(label)}</p>
    <div>${body}</div>
  </section>`;

export const render = (): string => `
<div class="sheet">

  <p class="name">${esc(resume.name)}</p>
  <p class="contact">${map(contact, (c) => `<a href="${esc(c.href)}">${esc(c.text)}</a>`)}</p>
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
