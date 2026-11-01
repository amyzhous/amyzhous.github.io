/**
 * Case studies, parsed from the markdown in `src/content/cases/`.
 *
 * The markdown is the source of truth — edit the `.md` files, not this. Each
 * follows the same shape:
 *
 *     ## 01. Project Files                 ← number and short name
 *     Flagship case · 0→1 product · …      ← kicker
 *     # We weren't building another …      ← headline
 *     **standfirst**
 *     **metrics**
 *     **Role:** …
 *     [HERO — direction for the visual]
 *     ## Section heading
 *     prose…
 *
 * Two kinds of line are notes to Amy rather than content, and are dropped:
 * the editorial aside some files carry above the headline, and everything
 * from "Why this works:" to the end.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIR = resolve('src/content/cases');

export type Block =
  | { t: 'p'; text: string }
  /** A visual that is still a direction, not a drawn thing. */
  | { t: 'figure'; kind: string; note: string }
  /** The sentence the case turns on, set apart from the prose. */
  | { t: 'pull'; text: string }
  /** The judgment call: what a senior reader is looking for. */
  | { t: 'decision'; label: string; text: string }
  /** What she took from it, closing the case as she closes her writing. */
  | { t: 'reflection'; text: string };

/** One figure off the metrics line. A metric without a number is label-only. */
export interface Stat {
  figure?: string;
  label: string;
}

export interface Section {
  heading: string;
  /** What kind of thing this section is, labelled above the heading. */
  kind?: string;
  blocks: Block[];
}

export interface CaseStudy {
  slug: string;
  n: string;
  /** Short name, for the rail and the work list. */
  name: string;
  kicker: string;
  headline: string;
  standfirst: string;
  metrics: string;
  /** The metrics line, split so the figures can carry the top of the page. */
  stats: Stat[];
  /** What the figures do and don't prove. Amy's caveat, where she wrote one. */
  statNote?: string;
  role: string;
  /** Who she worked with, named in her own words. */
  team?: string;
  /** The opening visual, above the first section. */
  hero?: Block & { t: 'figure' };
  sections: Section[];
}

const SLUGS: Record<string, string> = {
  '01_project_files': 'project-files',
  '02_activation_growth': 'activation-growth',
  '03_construction_data_ai': 'construction-data-ai',
  '04_self_serve_billing': 'self-serve-billing',
};

const FIGURE = /^\[([A-Z][A-Z \-]*?)\s*—\s*([\s\S]+)\]$/;

/** A metric that opens with a figure: "58K+ drawings managed", "0→1 paid …". */
const STAT = /^([0-9][^\s]*)\s+(.+)$/;

/**
 * Three things below are keyed by slug rather than parsed, because the
 * markdown does not mark them up: which sentence the case turns on, which
 * one carries the judgment call, what the figures do not prove, and who she
 * worked with. Every string is quoted from the markdown itself — a paragraph
 * is matched by its opening words, never rewritten.
 */
const PULL: Record<string, string> = {
  'project-files': 'The important distinction was simple:',
  'activation-growth': 'The challenge wasn’t simply reducing the number of onboarding steps.',
  'construction-data-ai': 'I proposed a different starting point:',
  'self-serve-billing': 'Making those two people complete the same action',
};

const DECISION: Record<string, { label: string; starts: string }> = {
  'project-files': { label: 'The trade-off', starts: 'The tradeoff was between automation and control.' },
  'activation-growth': { label: 'The decision', starts: 'Rather than treating onboarding as a single wizard' },
  'construction-data-ai': { label: 'The decision', starts: 'The important distinction was between helping users' },
  'self-serve-billing': { label: 'The decision', starts: 'The team adopted the second approach' },
};

/** Amy's own caveat about what the numbers cover. */
const STAT_NOTE: Record<string, string> = {
  'activation-growth':
    'That was a starting point for evaluation, not evidence that these changes caused an improvement.',
  'construction-data-ai':
    'The product was still in development at this stage, so customer adoption and effectiveness remain unmeasured.',
  'self-serve-billing':
    'The usage figures cover the wider self-serve seat-management system, not the isolated effect of the provisional-access design.',
};

/**
 * Where the markdown's Role line also names the partners, the clause moves
 * to Team rather than being printed twice. These are the role lines with
 * that clause cut off — no word is changed.
 */
const ROLE_TRIM: Record<string, string> = {
  'activation-growth': 'Product design and activation prioritization',
  'construction-data-ai': 'Product concept and interaction design exploration',
  'self-serve-billing': 'Product design for member access, billing approval, and related user states',
};

/**
 * Nothing in the markdown names the collaborators as a field, so there is no
 * Team to print. Earlier this held noun phrases worked up out of Amy's
 * sentences; they were the only words on the page she had not written, so
 * they are gone. Fill this in when she supplies the real thing.
 */
const TEAM: Record<string, string> = {};

/** What each section is, in order. Labels, not copy. */
const KINDS: Record<string, string[]> = {
  'project-files': ['Problem', 'Solution', 'Solution', 'Outcome'],
  'activation-growth': ['Problem', 'Solution', 'Outcome'],
  'construction-data-ai': ['Problem', 'Solution', 'Solution', 'Solution'],
  'self-serve-billing': ['Problem', 'Trade-off', 'Solution', 'Outcome'],
};

/** The closing paragraph, matched by its opening words as the others are. */
const REFLECTION: Record<string, string> = {
  'project-files': 'That distinction continues to shape how I think about the product',
  'activation-growth': 'The larger lesson was that activation couldn\u2019t be reduced to finishing setup',
  'construction-data-ai': 'The opportunity:',
  'self-serve-billing': 'The design challenge was balancing two legitimate needs',
};

/** Curly and straight quotes both appear in the source; compare without them. */
const loose = (s: string) =>
  s.replace(/\*\*/g, '').replace(/[‘’“”]/g, "'").toLowerCase();

const parse = (file: string): CaseStudy => {
  const raw = readFileSync(join(DIR, file), 'utf8');
  // Everything from the author's note to the end is not content.
  const body = raw.split(/^Why this works:/m)[0]!;
  const paras = body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const titleLine = paras.shift()!; // "## 01. Project Files"
  const [, n, name] = /^##\s*(\d+)\.\s*(.+)$/.exec(titleLine)!;
  const kicker = paras.shift()!;

  // Some files carry an editorial aside here, before the headline.
  while (paras.length && !paras[0]!.startsWith('# ')) paras.shift();

  const headline = paras.shift()!.replace(/^#\s*/, '');
  const strip = (s: string) => s.replace(/^\*\*|\*\*$/g, '').trim();
  const standfirst = strip(paras.shift()!);
  const metrics = strip(paras.shift()!);
  const role = paras.shift()!.replace(/^\*\*Role:\*\*\s*/, '').trim();

  const asBlock = (p: string): Block => {
    const fig = FIGURE.exec(p.replace(/\s+/g, ' '));
    return fig
      ? { t: 'figure', kind: fig[1]!.trim(), note: fig[2]!.trim() }
      : { t: 'p', text: p };
  };

  let hero: (Block & { t: 'figure' }) | undefined;
  if (paras[0] && FIGURE.test(paras[0].replace(/\s+/g, ' '))) {
    hero = asBlock(paras.shift()!) as Block & { t: 'figure' };
  }

  const slug = SLUGS[file.replace(/\.md$/, '')]!;

  const sections: Section[] = [];
  for (const p of paras) {
    if (p.startsWith('## '))
      sections.push({
        heading: p.replace(/^##\s*/, ''),
        kind: KINDS[slug]?.[sections.length],
        blocks: [],
      });
    else if (sections.length) sections[sections.length - 1]!.blocks.push(asBlock(p));
  }

  // Lift the two sentences that carry the case out of the running prose. The
  // text is untouched; only where it sits on the page changes.
  const pull = PULL[slug];
  const decision = DECISION[slug];
  const reflection = REFLECTION[slug];
  for (const s of sections) {
    s.blocks = s.blocks.map((b) => {
      if (b.t !== 'p') return b;
      const text = loose(b.text);
      if (pull && text.startsWith(loose(pull))) return { t: 'pull', text: b.text };
      if (decision && text.startsWith(loose(decision.starts)))
        return { t: 'decision', label: decision.label, text: b.text };
      if (reflection && text.startsWith(loose(reflection))) return { t: 'reflection', text: b.text };
      return b;
    });
  }

  const stats: Stat[] = metrics
    .replace(/^Outcome:\s*/i, '')
    .split('·')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const m = STAT.exec(part);
      return m ? { figure: m[1]!, label: m[2]! } : { label: part };
    });

  return {
    slug,
    n: n!,
    name: name!.trim(),
    kicker,
    headline,
    standfirst,
    metrics,
    stats,
    statNote: STAT_NOTE[slug],
    role: ROLE_TRIM[slug] ?? role,
    team: TEAM[slug],
    hero,
    sections,
  };
};

export const caseStudies: CaseStudy[] = readdirSync(DIR)
  .filter((f) => /^\d\d_.*\.md$/.test(f))
  .sort()
  .map(parse);

export const caseBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c]),
);
