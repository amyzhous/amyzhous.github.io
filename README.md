# Amy Zhou — portfolio

Static site built from the approved designs in `reference/`. Vite + TypeScript,
hand-written CSS with custom properties, no framework and no component library.
Every page's markup is rendered at build time, so the HTML that ships is the
finished document.

## Running it

Node 18+ (`.nvmrc` pins 24).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static bundle in dist/
npm run preview
npm run typecheck
npm run resume     # exports both résumé PDFs to dist/pdf/ (needs Chrome)
```

`npm run build` emits `dist/` as plain files — deploy it to any static host.

## Where things are

| Path | What's in it |
| --- | --- |
| `src/data/site.ts` | Home copy, the three work entries, auto-scroll speed |
| `src/data/cases.ts` | All three case studies, section by section |
| `src/data/resume.ts` | One content source for both résumé exports |
| `src/templates/` | The functions that turn that data into HTML |
| `src/styles/` | `tokens` → `base` → `figures` → page sheet → `motion` |
| `src/scripts/autoscroll.ts` | The home page's looping work column |
| `public/` | Favicon set, copied to the site root as-is |
| `vite.config.ts` | Renders each page at build time, emits the redirect stubs |
| `*.html` | One entry per route; they hold `<!--head-->` and `<!--app-->` |

Everything in `[SQUARE BRACKETS]` is a deliberate placeholder. Filling one in
its data file updates every page that uses it.

### Still to fill

Education · the two earlier roles · the sample size and period on the AI
funnel figure · the case study bodies.

### One number to settle

The site says **58K+ drawings**; the résumé says **37,500**. Different as-of
dates — pick one source of truth before either goes out.

## Motion

Scroll-driven animations are real CSS (`animation-timeline: view()` and
`scroll()`), each with an `@supports` fallback that shows the finished state.
They animate `clip-path` and `opacity` only — `transform` is reserved for hover,
and animating it on those elements breaks the hover behaviour.
`prefers-reduced-motion: reduce` turns all of it off, including the auto-scroll.

The home work column auto-scrolls at 18px/second (`autoScrollSpeed` in
`src/data/site.ts`; 0 disables it). The list renders twice so the loop has no
seam, the duplicate is hidden from assistive tech and the tab order, and the
column yields to the reader on hover, wheel or touch.

## Theme and colour

Light editorial on a warm neutral ground. The ramp is the "sand" family
measured from emilkowal.ski; the text steps between its 11th and 12th stops
were solved so each token holds the contrast ratio it had in the dark theme
this replaces, against the surface it actually sits on. `--label` is the one
departure: it is set to clear 4.5:1 on `--plate` rather than reproduce the old
3.6:1, because the 9px figure micro-text inherits it. Every page now audits at
zero contrast failures, lowest 4.5:1.

The serif runs at 400, not the 300 the dark theme used. Light-on-dark
irradiation thickens a stroke; dark-on-light thins it, so the original cut
read as spindly once the ground flipped. Only display sizes, which carry
weight on their own, stay lighter — `--serif-weight` and `--serif-display`.

Links are the only colour on the site: a gradient hairline at rest that grows
into a highlight on hover, the mechanic measured from michiecao.com. It lives
in `--link-grad` / `--link-rest` / `--link-hover`, so changing it is one edit.

There is no theme switching. Every colour is a token in `src/styles/tokens.css`
and nothing else in the stylesheets hardcodes one, so the whole site could be
re-themed from that file alone.

## Favicon

The mark is a Newsreader "A" in `--text` on the `--ground` tile — the site's
own name treatment at icon scale. `public/favicon.ico` carries 16, 32 and 48px;
the 16px tile is set in weight 500 because the lighter cut loses its serifs at
that size. Regenerate with `scripts/make-favicon.mjs` if the type ever changes.

## Old URLs

The previous site's five case study URLs are kept alive as redirect stubs to
the index, emitted from the `redirects` map in `vite.config.ts`. All five
served the same unfinished template, so there is no page-for-page mapping.
The old site is on the `backup/pre-redesign-site` branch.

## Résumés

`resume.html` and `resume-ats.html` are print documents, not web pages: Letter,
816 × 1056 at 96dpi, one page each. Their layouts are tuned so the content ends
inside the page in *print* metrics, which run slightly taller than screen — if
you add a bullet, re-run `npm run resume` and check it is still one page.
