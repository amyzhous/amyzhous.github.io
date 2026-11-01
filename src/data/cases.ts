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
  | { t: 'figure'; kind: string; note: string };

export interface Section {
  heading: string;
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
  role: string;
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

  const sections: Section[] = [];
  for (const p of paras) {
    if (p.startsWith('## ')) sections.push({ heading: p.replace(/^##\s*/, ''), blocks: [] });
    else if (sections.length) sections[sections.length - 1]!.blocks.push(asBlock(p));
  }

  return {
    slug: SLUGS[file.replace(/\.md$/, '')]!,
    n: n!,
    name: name!.trim(),
    kicker,
    headline,
    standfirst,
    metrics,
    role,
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
