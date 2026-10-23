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

The sample size and period on the AI funnel figure · the case study bodies.

The résumé is complete. Its only open item is a location line: ATS tools
often filter on one, and none was supplied, so neither version claims a city
rather than inventing one.

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

Links are the only colour on the site: a gradient hairline, taken from
michiecao.com, that sweeps in on hover and retracts the way it came. It is a
pseudo-element scaled on the X axis rather than an animated `background-size`,
because transform runs on the compositor and the line does not repaint on
every frame. `--link-grad`, `--link-underline` and `--link-sweep` control it.

The back control in the case header is navigation rather than prose, so it
carries no underline and shifts colour instead — the same treatment as the
rail index.

There is no theme switching. Every colour is a token in `src/styles/tokens.css`
and nothing else in the stylesheets hardcodes one, so the whole site could be
re-themed from that file alone.

## Micro-motion

Four small things beyond the original inventory, all of them reporting
something rather than decorating:

- **The rail index carries a gradient rule** that slides to whichever project
  the work column is showing. The hairlines between entries already existed in
  `--rule`; this is the same line in gradient, so it adds a movement rather
  than an object. It is driven from `placeMarker()` in `autoscroll.ts`, and it
  stays at `scaleX(0)` until it has somewhere to be — on the stacked layout,
  where nothing tracks an active project, it never appears.
- **Pages cross-fade** via cross-document view transitions, 320ms on the
  site's own curve. Browsers without support navigate exactly as before.
- **The next-case title** takes the same left-to-right wipe the home project
  titles use, so the two ways out of a page behave alike.
- **The metric strip** arrives a cell at a time on scroll, matching the
  stagger the register rows already had.

All four are off under `prefers-reduced-motion: reduce`.

## Favicon

The mark is a Newsreader "A" in `--text` on the `--ground` tile — the site's
own name treatment at icon scale. `public/favicon.ico` carries 16, 32 and 48px;
the 16px tile is set in weight 500 because the lighter cut loses its serifs at
that size. Regenerate with `scripts/make-favicon.mjs` if the type ever changes.

## The passphrase gate

`src/templates/gate.ts` puts a lock over the four site pages. The résumés are
deliberately left open: they are unlinked and `noindex`, and the gate would
otherwise be what got printed into the PDF.

**It is a courtesy gate, not security.** The site is static, so every page is
already inside the HTML the browser downloads — anyone who opens View Source
or fetches the URL directly reads it without meeting the form. What it does
is stop casual browsing and make it clear the work is shared deliberately.
Real protection means a host that checks credentials before serving the
bytes: Cloudflare Access in front of the Pages site, or moving to a host with
built-in password protection.

The passphrase ships as a SHA-256 hash, not plain text, so the word itself is
not sitting in the page source. To change it:

```bash
printf 'newword' | shasum -a 256
```

and paste the result into `PASSPHRASE_HASH`. Input is lowercased and trimmed
before hashing. Unlocking is remembered in `sessionStorage`, so it is asked
once per browser session rather than once per page.

## Old URLs

The previous site's five case study URLs are kept alive as redirect stubs to
the index, emitted from the `redirects` map in `vite.config.ts`. All five
served the same unfinished template, so there is no page-for-page mapping.
The old site is on the `backup/pre-redesign-site` branch.

## Résumés

`resume.html` and `resume-ats.html` are print documents, not web pages: Letter,
816 × 1056 at 96dpi, one page each, built from one content source in
`src/data/resume.ts` so the two cannot drift apart. Both carry `noindex`.

`*asterisks*` in a bullet mark emphasis: the designed résumé sets those runs
bold, the ATS version strips the markers so a parser only ever sees plain
text. Both open with Amy's summary, in `resume.summary`.

The designed résumé is set in Instrument Sans throughout — one typeface, no
serif — and its rail means one thing only: this is a section. Everything
belonging to an entry (role, company, dates, bullets) lives in the content
column, so the two levels never share a column, and a hairline opens each
section. Weight carries meaning rather than decoration: 600 marks a heading
or the key of a key–value pair, and nothing inside running prose is bold.

Earlier versions got this wrong in three ways worth not repeating — the
company was set larger than the role title, metrics were bolded scattershot
through the bullets, and the ink ramp put section labels at 2.4:1 and dates
at 2.2:1. Every colour now clears 4.5:1 on white, the lowest being 5.1:1.

Their layouts are tuned so the content ends inside the page in *print*
metrics, which run taller than on screen. Current slack is 26px on the
designed résumé and 16px on the ATS one — both pages are full, so if you add
a bullet, re-run `npm run resume` and check it is still one page.

The PDFs are built on demand into `dist/pdf/` and are not deployed — the
site's Résumé link points at Google Drive. Publishing them instead would mean
running the export in CI, which needs Chrome on the runner.
