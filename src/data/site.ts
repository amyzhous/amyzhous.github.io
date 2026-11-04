/**
 * Every string here is final copy from CONTENT.md.
 *
 * Anything still in [SQUARE BRACKETS] is a deliberate placeholder — do not
 * invent a replacement. Fill them in this file and the whole site updates.
 *
 * The name, email, LinkedIn and résumé link below were taken from
 * amyzhous.github.io, not invented.
 */

export const site = {
  name: 'Amy Zhou',
  roleLabel: 'Product designer',
  email: 'ayjzhou@gmail.com',
  resumeHref: 'https://drive.google.com/file/d/1j4ykMs8B7TO3vfYmPjJoGhWmnjomap9A/view?usp=sharing',
  linkedinHref: 'https://www.linkedin.com/in/amyyjzhou/',
  lede:
    'I lead end-to-end design of complex digital products, from discovery through launch. My work spans product strategy, design, and growth, from improving customer onboarding to shaping how teams design and build software.',
} as const;

/**
 * Flip to true when the work is ready to be found.
 *
 * While this is false every page carries noindex and robots.txt disallows
 * everything. The password gate stops people browsing, but it does nothing
 * about crawlers — they read the HTML directly and never meet the form — so
 * keeping the site out of search results takes this as well as the lock.
 */
export const launched = true;

/** Auto-scroll speed for the home work column, px/second. 0 disables. */
export const autoScrollSpeed = 18;

import { caseStudies } from './cases.js';

export type Slug = string;

export const paths: Record<Slug, string> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, `/${c.slug}.html`]),
);

export interface RegisterRow {
  no: string;
  title: string;
  rev: string;
  /** The one inverted revision chip — the current sheet. */
  current?: boolean;
}

export const registerRows: RegisterRow[] = [
  { no: 'A-101', title: 'Level 1 Floor Plan', rev: 'R2' },
  { no: 'A-102', title: 'Level 2 Floor Plan', rev: 'R1' },
  { no: 'A-201', title: 'North Elevation', rev: 'R3', current: true },
  { no: 'A-202', title: 'South Elevation', rev: 'R1' },
  { no: 'S-101', title: 'Foundation Plan', rev: 'R2' },
];

export interface WorkEntry {
  slug: Slug;
  n: string;
  short: string;
  kicker: string;
  title: string;
  metric: string;
  /**
   * The drawing register is the one drawn diagram that still belongs to a
   * live case study. The rest carry their hero direction as a placeholder
   * until the visual exists.
   */
  figure: 'register' | 'placeholder';
  heroNote?: string;
  heroSrc?: string;
}

export const work: WorkEntry[] = caseStudies.map((c) => ({
  slug: c.slug,
  n: c.n,
  short: c.kicker,
  kicker: c.kicker,
  title: c.name,
  // the headline figures, as the case study states them. A case without
  // figures shows none: a truncated sentence in their place said nothing.
  metric: c.stats.map((st) => `${st.figure} ${st.label}`).join(' · '),
  figure: c.slug === 'project-files' ? 'register' : 'placeholder',
  heroNote: c.heroNote,
  heroSrc: c.heroSrc,
}));
