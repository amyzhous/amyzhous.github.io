/**
 * One content source for both résumé exports.
 *
 * `*asterisks*` in a bullet mark the emphasis Amy put on it. The designed
 * résumé renders them bold; the ATS version strips them, so nothing but plain
 * text reaches a parser.
 */

export const resume = {
  name: 'Amy Zhou',
  shortTitle: 'Senior Product Designer',
  email: 'ayjzhou@gmail.com',
  phone: '(905) 348-2989',
  site: 'amyzhous.github.io',
  linkedin: 'linkedin.com/in/amyyjzhou',

  /** Amy's own words. Both résumés open with this. */
  summary:
    'Senior Product Designer experienced in leading end-to-end design of complex digital products from discovery through launch. My work spans product strategy, design, and growth, from improving customer onboarding to shaping how teams design and build software.',

  education: {
    school: 'University of Waterloo',
    degree: 'BA, Economics',
  },

  roles: [
    {
      company: 'Part3 Technologies',
      title: 'Senior Product Designer',
      dates: 'Sep 2023 – Present',
      datesLong: 'September 2023 – Present',
      lines: [
        'Led product design for a B2B construction administration SaaS platform serving 280+ active organizations across 6K+ projects and 690K+ documents.',
        'Led 0→1 design of a new business vertical from customer discovery through launch, associated with an estimated $650K in annual recurring revenue and 58K+ drawings managed.',
        'Co-led customer activation with CX, defining four activation metrics, establishing the first baseline through SQL dashboards, and designing onboarding improvements informed by funnel analysis.',
        'Led UX design for AI-powered features, working with product and engineering to integrate AI into existing workflows while keeping users in control.',
        'Partnered with product, engineering, customer support, sales, and marketing to align customer needs, business priorities, and design decisions.',
        'Redesigned complex workflows across user roles and third-party integrations to improve consistency across the product.',
        'Worked closely with the CTO and engineering to establish design standards, reusable components, AI-assisted design workflows, and design QA practices.',
      ],
    },
    {
      company: 'InnoSoft',
      title: 'Product Designer II',
      dates: 'Feb 2021 – Sep 2023',
      datesLong: 'February 2021 – September 2023',
      lines: [
        'Led design of a league management product, contributing to 2× revenue growth following launch.',
        'Designed and launched a 0→1 MVP, supporting adoption across 100,000+ users.',
        'Improved onboarding and acquisition flows through iterative design and experimentation, increasing conversion by 50%.',
        'Designed analytics, communication, and scheduling experiences across web and mobile.',
        'Led design system improvements, created reusable components, and introduced Figma to the design team.',
        'Mentored junior designers and collaborated across four product teams.',
      ],
    },
    {
      company: 'Search+Gather',
      title: 'Designer',
      dates: 'Aug 2020 – Oct 2022',
      datesLong: 'August 2020 – October 2022',
      lines: [
        'Designed marketing and product experiences for B2B SaaS clients, including Coinbase, HeyOrca, HiMama, Kritik, TopHat, and Magical.',
      ],
    },
  ],

  skills: [
    {
      k: 'Design',
      v: 'Product design, interaction design, visual design, prototyping, information architecture, design systems, accessibility (WCAG).',
    },
    {
      k: 'Research & Growth',
      v: 'Customer discovery, usability testing, activation, onboarding, monetization, funnel analysis, SQL.',
    },
    {
      k: 'Tools',
      v: 'Figma, Adobe CC, UserTesting, Linear, Storybook, HTML/CSS, Claude, Claude Code, Cursor, Figma Make.',
    },
  ],
} as const;
