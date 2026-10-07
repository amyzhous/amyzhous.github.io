/**
 * Case study content. Placeholders in [SQUARE BRACKETS] are deliberate.
 */
import type { Slug } from './site.js';

export type Prose =
  /** A paragraph. `lead` renders as the bold run before the colon. */
  | { t: 'p'; lead?: string; text: string; small?: boolean }
  /** A serif sub-heading inside the right-hand column. */
  | { t: 'h2'; text: string }
  /** Serif statement lines, e.g. the content model. */
  | { t: 'lines'; items: string[] }
  /** "What shipped" lines. */
  | { t: 'shipped'; items: string[] }
  /** Caption-sized aside. */
  | { t: 'note'; text: string }
  | { t: 'quote'; text: string; cite: string }
  | {
      t: 'options';
      items: {
        name: string;
        up: string;
        down: string;
        mark: string;
        chosen: boolean;
      }[];
    };

export interface Section {
  label: string;
  heading?: string;
  body: Prose[];
  /** Overrides the default 128px of space below the section. */
  padBottom?: string;
}

export type Figure =
  | { kind: 'register' }
  | { kind: 'funnel' }
  | { kind: 'matrix'; rows: { row: string; open: string; staged: string }[]; foot: string }
  | { kind: 'beforeAfter'; before: string; after: { title: string; evidence: string; cite: string } }
  | { kind: 'roles'; items: { name: string; body: string }[] };

export type Block =
  | ({ t: 'section' } & Section)
  | { t: 'metrics'; items: { v: string; k: string }[]; size?: 'lg' | 'md' }
  | { t: 'bigNumber'; v: string; text: string }
  | { t: 'figure'; n: string; caption: string; bleed: boolean; figure: Figure };

export interface CaseStudy {
  slug: Slug;
  n: string;
  title: string;
  standfirst: string;
  meta: { k: string; v: string }[];
  /** Figure that sits between the meta box and the first section. */
  hero: { n: string; caption: string; figure: Figure };
  blocks: Block[];
  next: { slug: Slug; title: string; blurb: string };
}

const projectFiles: CaseStudy = {
  slug: 'project-files',
  n: '01',
  title: 'Project Files',
  standfirst:
    'A document store rebuilt as structured construction content, and sold as a product.',
  meta: [
    { k: 'Role', v: 'Lead Product Designer' },
    { k: 'Team', v: '[1 PM, 4 eng, 1 research]' },
    { k: 'Type', v: 'SaaS · Construction' },
    { k: 'Year', v: '[2024 — 25]' },
  ],
  hero: {
    n: 'Fig. 1',
    caption:
      'A combined PDF goes in; a structured set comes out, with the current revision never in question.',
    figure: { kind: 'register' },
  },
  blocks: [
    {
      t: 'section',
      label: '01 &nbsp;Overview',
      heading: 'The product that turned storage into revenue',
      body: [
        {
          t: 'p',
          text: "[Two or three sentences: what Project Files is, who uses it, and why the company built it. Write it the way you'd explain it to someone outside construction.]",
        },
      ],
    },
    {
      t: 'section',
      label: '02 &nbsp;The problem',
      heading: 'Documents were files, not content',
      body: [
        {
          t: 'p',
          lead: 'The current drawing was a guess',
          text: '[what happened when someone built from a superseded sheet.]',
        },
        {
          t: 'p',
          lead: 'Nothing downstream could read the documents',
          text: '[why search, AI and integrations all stalled at the same wall.]',
        },
        {
          t: 'p',
          lead: 'Storage was not something anyone would pay for',
          text: '[the commercial problem underneath the user problem.]',
        },
        {
          t: 'p',
          text: '[Who was hurting and how you knew. Lead with the evidence you had at the time: support volume, drop-off, a sales objection, five interviews. Name the number.]',
        },
        {
          t: 'quote',
          text: '[A real customer quote about hunting for the current drawing.]',
          cite: '[Role, company type]',
        },
      ],
    },
    {
      t: 'section',
      label: '03 &nbsp;The reframe',
      heading: 'From storing files to understanding construction content',
      body: [
        { t: 'p', text: '[Why this model was the unlock, in two or three sentences.]' },
        {
          t: 'lines',
          items: [
            'Drawing set → Drawing → Revisions',
            'Specifications → Divisions → Sections',
          ],
        },
      ],
    },
    {
      t: 'section',
      label: '04 &nbsp;Decisions',
      heading: 'Three decisions that shaped it',
      body: [
        {
          t: 'p',
          lead: '[Decision one, stated as a choice]',
          text: '[what you chose, what you rejected, and the evidence that settled it.]',
        },
        {
          t: 'p',
          lead: '[Decision two, stated as a choice]',
          text: '[a constraint you worked inside and how the design absorbed it.]',
        },
        {
          t: 'p',
          lead: '[Decision three, stated as a choice]',
          text: '[something you cut. Say what it cost and why it was worth it.]',
        },
      ],
    },
    {
      t: 'section',
      label: '05 &nbsp;Outcome',
      heading: 'What happened after it shipped',
      padBottom: '72px',
      body: [
        {
          t: 'p',
          text: 'A faster path from a combined PDF to a browsable set, one model everything downstream reads from, and a product customers pay for.',
        },
        {
          t: 'p',
          text: '[How you measured it, over what window, and how confident you are. If the sample was small, say so. It reads as rigour.]',
        },
      ],
    },
    {
      t: 'metrics',
      items: [
        { v: '58K+', k: 'Drawings processed' },
        { v: '40%', k: 'Of existing customers' },
        { v: '6×', k: 'Higher enablement' },
      ],
    },
    {
      t: 'section',
      label: 'What shipped',
      body: [
        {
          t: 'shipped',
          items: [
            'A structured content model: drawing sets, revisions, specifications.',
            'An import that turns one combined PDF into a browsable set.',
            'A paid product, adopted by 40% of existing customers.',
          ],
        },
      ],
    },
    {
      t: 'section',
      label: "What I'd do differently",
      body: [
        {
          t: 'p',
          text: '[The honest paragraph. Name one thing that didn’t work and what you learned. This is the section interviewers quote back to you.]',
        },
      ],
    },
  ],
  next: {
    slug: 'ai-strategy',
    title: 'AI Strategy',
    blurb:
      'People opened AI readily and then stopped: 83% opened, 70% read the findings, 15% accepted. Discovery was not the problem. I set the direction, the design language and the funnel the org now measures.',
  },
};

const aiStrategy: CaseStudy = {
  slug: 'ai-strategy',
  n: '02',
  title: 'AI Strategy',
  standfirst:
    'A position, a design language and a measurement model for every AI surface in the product.',
  meta: [
    { k: 'Role', v: 'Design lead, AI' },
    { k: 'With', v: '[PM, N eng, data]' },
    { k: 'Type', v: 'Strategy · Design system' },
    { k: 'Year', v: '[2025]' },
  ],
  hero: {
    n: 'Fig. 1',
    caption: 'Opening was never the bottleneck. Acceptance was.',
    figure: { kind: 'funnel' },
  },
  blocks: [
    {
      t: 'section',
      label: '01 &nbsp;Overview',
      heading: 'Four AI surfaces, no shared position',
      body: [
        {
          t: 'p',
          text: '[Two or three sentences: how many AI surfaces existed, who built them, and what I was asked to do about it.]',
        },
      ],
    },
    {
      t: 'section',
      label: '02 &nbsp;The evidence',
      heading: 'People were willing to open AI. The drop came after they saw the output.',
      body: [
        {
          t: 'p',
          text: '[Where the data came from, over what window, and what you expected to find instead.]',
        },
      ],
    },
    {
      t: 'section',
      label: '03 &nbsp;The reframe',
      heading: 'What happens after users see the answer?',
      body: [{ t: 'p', text: '[Why this question changed the roadmap, and what it ruled out.]' }],
    },
    {
      t: 'section',
      label: "04 &nbsp;How we'd win",
      heading: 'Four shifts the whole product follows',
      body: [
        {
          t: 'p',
          lead: 'From verdicts to evidence',
          text: 'lead with what was found and where, not with a judgement.',
        },
        {
          t: 'p',
          lead: 'From AI destinations to contextual help',
          text: 'stop sending people to an AI place; put it where the work already is.',
        },
        {
          t: 'p',
          lead: 'From false certainty to calibrated confidence',
          text: 'say how sure the system is, in terms a reviewer can act on.',
        },
        {
          t: 'p',
          lead: 'From model runs to human behaviour',
          text: 'measure what people did with the output, not what the model produced.',
        },
      ],
    },
    {
      t: 'section',
      label: '05 &nbsp;Evidence before verdicts',
      heading: "A verdict a reviewer can't check is a verdict they won't use",
      padBottom: '56px',
      body: [
        {
          t: 'p',
          text: '[What changed in the output, and what it cost to produce the evidence alongside the finding.]',
        },
      ],
    },
    {
      t: 'figure',
      n: 'Fig. 2',
      caption: 'The same finding, restated so a reviewer can check it against the source.',
      bleed: false,
      figure: {
        kind: 'beforeAfter',
        before: 'Manufacturer not approved',
        after: {
          title: 'Potential mismatch',
          evidence: '[The evidence, quoted from the document.]',
          cite: 'Spec 08 41 13 · §2.2 · p.4',
        },
      },
    },
    {
      t: 'section',
      label: '06 &nbsp;Measurement',
      heading: "We were counting the model's activity, not the human's",
      padBottom: '56px',
      body: [
        { t: 'p', lead: 'What we had', text: 'runs and generated rows.' },
        {
          t: 'p',
          lead: 'What we needed',
          text: 'opened → read → verified → accepted or dismissed → returned.',
        },
      ],
    },
    {
      t: 'bigNumber',
      v: '~59×',
      text: 'activity inflation from a single human action, which is how a dashboard looks healthy while nobody uses the output.',
    },
    {
      t: 'section',
      label: 'What shipped',
      body: [
        {
          t: 'shipped',
          items: [
            'A position the company now designs every AI surface from.',
            'A six-component AI design language teams build on.',
            'A behavioural funnel the org reports against.',
          ],
        },
        {
          t: 'note',
          text: 'Strategy work, so the output is direction and instruments rather than a launch metric.',
        },
      ],
    },
    {
      t: 'section',
      label: "What I'd do differently",
      body: [{ t: 'p', text: "[Short. What you'd do differently, and what you still don't know.]" }],
    },
  ],
  next: {
    slug: 'unified-submittals',
    title: 'Unified Submittals',
    blurb:
      'Submittal review had grown four paths across two platforms, with Bluebeam cutting across all of them. The research said the problem was not four screens. It was four versions of one job.',
  },
};

const unifiedSubmittals: CaseStudy = {
  slug: 'unified-submittals',
  n: '03',
  title: 'Unified Submittals',
  standfirst: 'Four review paths across two platforms, redesigned as one role-shaped surface.',
  meta: [
    { k: 'Role', v: 'Lead Product Designer' },
    { k: 'With', v: '[PM, N eng, CX, partners]' },
    { k: 'Type', v: 'Systems · Workflow' },
    { k: 'Year', v: '[2025 — 26]' },
  ],
  hero: {
    n: 'Fig. 1',
    caption: 'Four paths a reviewer had to understand before they could start.',
    figure: {
      kind: 'matrix',
      rows: [
        {
          row: 'Part3',
          open: '[What open review looked like here]',
          staged: '[What staged review looked like here]',
        },
        {
          row: 'Procore',
          open: '[What open review looked like here]',
          staged: '[What staged review looked like here]',
        },
      ],
      foot: 'Bluebeam sits as a layer across every cell',
    },
  },
  blocks: [
    {
      t: 'section',
      label: '01 &nbsp;Overview',
      heading: 'The busiest workflow in the product',
      padBottom: '56px',
      body: [
        {
          t: 'p',
          text: '[Two or three sentences: what submittal review is, who touches it, and why it mattered that it had fragmented.]',
        },
      ],
    },
    {
      t: 'metrics',
      size: 'md',
      items: [
        { v: '55%', k: '[what this share represents]' },
        { v: '374K+', k: 'Submittals in the system' },
        { v: '~24K', k: 'Per month' },
      ],
    },
    {
      t: 'section',
      label: '02 &nbsp;Where it broke',
      heading: 'Two platforms, two review modes, Bluebeam across all of it',
      body: [
        {
          t: 'p',
          text: '[How the four paths accumulated, and why each one made sense at the time it was built.]',
        },
        { t: 'p', lead: 'Files', text: '[what went wrong with files across the four paths.]' },
        { t: 'p', lead: 'Reviewers', text: '[what went wrong with who was reviewing.]' },
        { t: 'p', lead: 'Responses', text: '[what went wrong with responses.]' },
        { t: 'p', lead: 'Return', text: '[what went wrong at the return.]' },
      ],
    },
    {
      t: 'section',
      label: '03 &nbsp;The research insight',
      heading: "The problem wasn't four screens. It was four versions of the same job.",
      body: [
        {
          t: 'p',
          text: '[What the research was, who you spoke to, and the moment this became obvious.]',
        },
      ],
    },
    {
      t: 'section',
      label: '04 &nbsp;The decision',
      heading: 'Three ways forward, and what each one cost',
      body: [
        {
          t: 'options',
          items: [
            {
              name: 'Keep four workflows',
              up: 'lower immediate change.',
              down: 'the complexity stays, and grows.',
              mark: 'Rejected',
              chosen: false,
            },
            {
              name: 'Special-case Bluebeam',
              up: 'fast.',
              down: 'creates another exception to maintain.',
              mark: 'Rejected',
              chosen: false,
            },
            {
              name: 'Unify the experience',
              up: 'clearer long-term direction.',
              down: 'more work up front.',
              mark: 'What we chose',
              chosen: true,
            },
          ],
        },
      ],
    },
    {
      t: 'section',
      label: "05 &nbsp;How we'd win",
      heading: 'Four rules the redesign follows',
      body: [
        {
          t: 'p',
          lead: 'One entry point',
          text: 'a reviewer should not need to know how the project was configured.',
        },
        { t: 'p', lead: 'One surface', text: 'document, markup and response in the same place.' },
        {
          t: 'p',
          lead: 'Role-shaped',
          text: 'same record, shaped to what each role owes the next one.',
        },
        {
          t: 'p',
          lead: 'Separate the jobs',
          text: 'responding and responding on behalf are different acts.',
        },
      ],
    },
    {
      t: 'section',
      label: '06 &nbsp;Role-shaped',
      heading: 'The same submittal, shaped to what each role owes the next one',
      padBottom: '56px',
      body: [
        {
          t: 'p',
          text: "[One surface, three jobs. What changes per role, and what deliberately doesn't.]",
        },
      ],
    },
    {
      t: 'figure',
      n: 'Fig. 2',
      caption: 'What each role sees, and what they owe the next person in the chain.',
      bleed: false,
      figure: {
        kind: 'roles',
        items: [
          { name: 'Prime', body: '[What this role has to do, and what the surface gives them.]' },
          {
            name: 'Consultant',
            body: '[What this role has to do, and what the surface gives them.]',
          },
          {
            name: 'Contractor',
            body: '[What this role has to do, and what the surface gives them.]',
          },
        ],
      },
    },
    {
      t: 'section',
      label: 'Status',
      body: [
        { t: 'h2', text: 'Designed and aligned. Heading into rollout.' },
        { t: 'p', text: 'No launch metric yet, so here is what we will measure and why.' },
        { t: 'p', lead: 'Support', text: 'tickets about where to go or what happened.' },
        { t: 'p', lead: 'Revert', text: 'teams asking to go back to the old path.' },
        { t: 'p', lead: 'Return failures', text: 'submittals that do not make it back cleanly.' },
        { t: 'p', lead: 'Review time', text: 'time from open to return.' },
      ],
    },
    {
      t: 'section',
      label: "What I'd do differently",
      body: [
        { t: 'p', text: "[Short. The thing you're least sure about going into rollout.]" },
      ],
    },
  ],
  next: {
    slug: 'project-files',
    title: 'Project Files',
    blurb:
      'Teams stored drawings as files and hunted for the current one. We taught the system to understand drawing sets, revisions and specifications, and it became a product customers pay for.',
  },
};

export const cases: Record<Slug, CaseStudy> = {
  'project-files': projectFiles,
  'ai-strategy': aiStrategy,
  'unified-submittals': unifiedSubmittals,
};
