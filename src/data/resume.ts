/**
 * One content source for both résumé exports. Placeholders in [SQUARE
 * BRACKETS] are deliberate — the two earlier roles and education are still
 * to fill.
 */

export const resume = {
  name: 'Amy Zhou',
  shortTitle: 'Senior Product Designer',
  email: 'amy@part3.io',
  contactLine: '[City, Country] | [Phone] | amy@part3.io | [portfolio URL] | [LinkedIn URL]',
  designedContact: 'amy@part3.io · [portfolio]',
  positioningEmphasis: 'Senior / Staff Product Designer',
  positioningRest:
    ' — turning complex, high-stakes construction workflows into tools people trust, owning the outcome from the measurement framework through to the shipped screen.',
  atsSummary:
    'Senior product designer with [X] years of experience in complex B2B workflows, design systems and AI features. Sole designer at a construction technology SaaS company, owning design across the entire product surface. Specialises in growth and activation: defines the measurement framework, diagnoses the funnel, and ships the redesign.',
  education: {
    designed: '[Degree], [School] · [Year]',
    atsDegree: '[Degree], [Field of Study]',
    atsWhen: '[School] | [City] | [Year]',
  },
  roles: [
    {
      company: 'Part3',
      location: '[City]',
      dates: 'Sept 2023 – Present',
      datesLong: 'September 2023 – Present',
      /** The designed résumé keeps the full progression on one line. */
      title: 'Senior Product Designer, sole designer → Design + Activation Loop Lead',
      atsTitle: 'Senior Product Designer',
      /** Tighter phrasing for the designed, one-page layout. */
      designedLines: [
        'Construction administration SaaS. Design foundation, design system, and the product’s first AI design language.',
        'Submittal Assistant: defined the AI design language now standard for every AI feature; led the V1 to V2 rebuild. Relaunch drove 0 to ~170 reviews a week and ~88 weekly users.',
        'Project Files, 0 to 1: information architecture, version model, drawing-package UX. ~55 orgs, 46 paid, 406 projects, ~37,500 drawings.',
        'Activation Loop: created and own the initiative, the time-to-first-value framework, the onboarding redesigns and the dashboard in self-taught SQL. Self-led median TTFV fell from 18 days to 4 in Q2, against a 14-day target.',
        'Shipped 10+ features in a quarter including Teams v2 and step-based submittals. Design principles and copy standards merged into the codebase.',
      ],
      atsLines: [
        'Sole designer at a construction administration SaaS company; built the design foundation and design system across the entire product surface.',
        'Defined the company’s first AI design language, now the standard for every AI feature, and led the V1 to V2 rebuild of AI submittal review. Relaunch drove 0 to 170 reviews per week and 88 weekly active users.',
        'Led Project Files from 0 to 1, owning information architecture, the version model and drawing-package UX. Adopted by 55 organisations, 46 of them paid, across 406 projects and 37,500 drawings.',
        'Created and owns the activation initiative: the time-to-first-value measurement framework, the onboarding redesigns, and the activation dashboard built in SQL. Self-led median time-to-first-value fell from 18 days to 4 in Q2, against a 14-day target.',
        'Shipped 10 or more features in a single quarter and authored the design principles and product copy standards now merged into the codebase.',
      ],
    },
    {
      company: '[Company two]',
      atsCompany: '[Company Two]',
      location: '[City]',
      dates: '[Dates]',
      datesLong: '[Month Year] – [Month Year]',
      title: '[Your title]',
      atsTitle: '[Your Title]',
      designedLines: [
        '[What the company does, and the scope you held.]',
        '[The headline thing you did, and what it changed. A number if you have one.]',
      ],
      atsLines: [
        '[What the company does and the scope you held.]',
        '[The headline thing you did and what it changed, with a number if you have one.]',
      ],
    },
    {
      company: '[Company three]',
      atsCompany: '[Company Three]',
      location: '[City]',
      dates: '[Dates]',
      datesLong: '[Month Year] – [Month Year]',
      title: '[Your title]',
      atsTitle: '[Your Title]',
      designedLines: [
        '[What the company does, and the scope you held.]',
        '[The headline thing you did, and what it changed.]',
      ],
      atsLines: [
        '[What the company does and the scope you held.]',
        '[The headline thing you did and what it changed.]',
      ],
    },
  ],
  /** Condensed for the one-page designed layout. */
  designedSkills: [
    'Product and interaction design, design systems, prototyping in Figma and React, AI-feature UX, UX writing, usability and QA.',
    'Activation and onboarding strategy, funnel diagnosis, metrics definition and instrumentation in SQL, cross-functional facilitation.',
    'Construction administration: submittals, RFIs, drawings and specs, field reporting, certificates.',
  ],
  atsSkills: [
    'Design: product design, interaction design, design systems, prototyping, mobile and responsive design, AI feature design, UX writing, usability testing.',
    'Growth and product: activation strategy, onboarding design, funnel analysis, metrics definition and instrumentation, cross-functional facilitation.',
    'Technical: Figma, React, HTML, CSS, SQL, Linear, Storybook.',
    'Domain: construction administration, submittals, RFIs, drawings and specifications, field reporting.',
  ],
} as const;
