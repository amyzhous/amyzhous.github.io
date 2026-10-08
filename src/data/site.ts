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
  resumeHref:
    'https://drive.google.com/file/d/1j4ykMs8B7TO3vfYmPjJoGhWmnjomap9A/view?usp=sharing',
  linkedinHref: 'https://www.linkedin.com/in/amyyjzhou/',
  lede:
    'I design the software construction teams run their day on, and I stay on it until it ships and the number moves.',
} as const;

/** Auto-scroll speed for the home work column, px/second. 0 disables. */
export const autoScrollSpeed = 18;

export type Slug = 'project-files' | 'ai-strategy' | 'unified-submittals';

export const paths: Record<Slug, string> = {
  'project-files': '/project-files.html',
  'ai-strategy': '/ai-strategy.html',
  'unified-submittals': '/unified-submittals.html',
};

export interface RegisterRow {
  no: string;
  title: string;
  rev: string;
  /** The one inverted revision chip — the current sheet. */
  current?: boolean;
}

export interface FunnelBar {
  k: string;
  v: string;
  w: string;
  fill: string;
}

export const registerRows: RegisterRow[] = [
  { no: 'A-101', title: 'Level 1 Floor Plan', rev: 'R2' },
  { no: 'A-102', title: 'Level 2 Floor Plan', rev: 'R1' },
  { no: 'A-201', title: 'North Elevation', rev: 'R3', current: true },
  { no: 'A-202', title: 'South Elevation', rev: 'R1' },
  { no: 'S-101', title: 'Foundation Plan', rev: 'R2' },
];

export const funnelBars: FunnelBar[] = [
  { k: 'Opened', v: '83%', w: '83%', fill: 'var(--fill-1)' },
  { k: 'Read', v: '70%', w: '70%', fill: 'var(--fill-2)' },
  { k: 'Accepted', v: '15%', w: '15%', fill: 'var(--fill-3)' },
];

export const funnelFootnote = 'n = [SAMPLE] · [PERIOD]';

export interface WorkEntry {
  slug: Slug;
  n: string;
  short: string;
  kicker: string;
  title: string;
  metric: string;
  /** Which of the three diagrams sits on the plate. */
  figure: 'register' | 'funnel' | 'matrix';
  /** Shorter metric for the phone composition. */
  metricPhone: string;
}

export const work: WorkEntry[] = [
  {
    slug: 'project-files',
    n: '01',
    short: 'Project Files',
    kicker: 'Project Files · 0→1 · Systems',
    title: 'From file management to a new paid product',
    metric: '58K+ drawings · 40% of existing customers',
    metricPhone: '58K+ drawings · 40% of existing customers',
    figure: 'register',
  },
  {
    slug: 'ai-strategy',
    n: '02',
    short: 'AI Strategy',
    kicker: 'AI Strategy · Design language',
    title: 'Designing for what happens after the answer',
    metric: '83% opened → 15% accepted',
    metricPhone: '83% opened → 15% accepted',
    figure: 'funnel',
  },
  {
    slug: 'unified-submittals',
    n: '03',
    short: 'Unified Submittals',
    kicker: 'Unified Submittals · Systems · Craft',
    title: 'Four versions of the same job, made into one',
    metric: '4 → 1 review paths · ~24K submittals a month',
    metricPhone: '4 → 1 review paths · ~24K a month',
    figure: 'matrix',
  },
];
