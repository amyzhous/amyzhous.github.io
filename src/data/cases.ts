/**
 * Case studies, read from the exported pages in `src/content/cases-html/`.
 *
 * Those files are the source of truth for both the case pages and anything
 * that describes them — the index cards and the chat view. Every field here
 * is lifted out of the markup, never written: if the index and a case study
 * disagree, it is because something stopped reading from here.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIR = resolve('src/content/cases-html');

export interface Stat {
  figure: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** Position in the reading order, as the index numbers them. */
  n: string;
  /** The project's name, from the page's h1. */
  name: string;
  /** The line above the title: discipline and client. */
  kicker: string;
  /** The opening sentence, used wherever the case needs describing. */
  standfirst: string;
  /** Headline figures, where the case has them. */
  stats: Stat[];
  /** The closing line of the overview — what the case is, in one sentence. */
  summary: string;
  /** The direction for the opening image. */
  heroNote?: string;
  /** The opening image itself, once it exists. */
  heroSrc?: string;
  role: string;
}

/** The opening image of each case, where one has been made. */
const HERO_NAMES: Record<string, string> = {
  'project-files': 'hero',
  'activation-growth': 'hero',
  'construction-data-ai': 'hero',
  'self-serve-billing': 'hero',
};

const HERO: Record<string, string | undefined> = Object.fromEntries(
  Object.entries(HERO_NAMES).map(([slug, name]) => {
    const ext = ['mp4', 'jpg', 'png', 'webp'].find((e) =>
      existsSync(`public/case/${slug}/${name}.${e}`),
    );
    return [slug, ext ? `/case/${slug}/${name}.${ext}` : undefined];
  }),
);

/** Reading order. */
const SLUGS = [
  'project-files',
  'activation-growth',
  'construction-data-ai',
  'self-serve-billing',
] as const;

const strip = (s: string): string =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

const one = (re: RegExp, s: string): string => {
  const m = re.exec(s);
  return m ? strip(m[1]!) : '';
};

const parse = (slug: string, i: number): CaseStudy => {
  const html = readFileSync(join(DIR, `${slug}.html`), 'utf8');
  const overview = /<section id="overview">([\s\S]*?)<\/section>/.exec(html)?.[1] ?? '';
  const paragraphs = [...overview.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1]!));

  return {
    slug,
    n: String(i + 1).padStart(2, '0'),
    name: one(/<h1>([\s\S]*?)<\/h1>/, html),
    kicker: one(/<p class="kicker">([\s\S]*?)<\/p>/, html),
    standfirst: paragraphs[0] ?? '',
    summary: paragraphs[paragraphs.length - 1] ?? '',
    // only the first figures block — the page's headline numbers. Later
    // blocks are section detail, and on one case they are figures the page
    // itself says could not be reproduced.
    stats: [
      ...(/<div class="stats[^"]*">([\s\S]*?)<\/div>\s*<\/section>/.exec(html)?.[1] ?? '').matchAll(
        /<div><b>([\s\S]*?)<\/b><span>([\s\S]*?)<\/span><\/div>/g,
      ),
    ].map((m) => ({ figure: strip(m[1]!), label: strip(m[2]!) })),
    heroNote: one(/<div class="slot [^"]*"><span>([\s\S]*?)<\/span>/, html) || undefined,
    heroSrc: HERO[slug],
    role: one(/<dt>Role<\/dt><dd>([\s\S]*?)<\/dd>/, html),
  };
};

export const caseStudies: CaseStudy[] = SLUGS.map(parse);

export const caseBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c]),
);
