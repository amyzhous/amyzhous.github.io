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
| `vite.config.ts` | Renders each page at build time, then Vite bundles it |
| `*.html` | One entry per route; they hold `<!--head-->` and `<!--app-->` |

Everything in `[SQUARE BRACKETS]` is a deliberate placeholder. Filling one in
its data file updates every page that uses it.

### Still to fill

City · phone · portfolio URL · LinkedIn URL · résumé PDF link · education · the
two earlier roles · the sample size and period on the AI funnel figure · the
one-sentence voice line on the home rail.

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

## Résumés

`resume.html` and `resume-ats.html` are print documents, not web pages: Letter,
816 × 1056 at 96dpi, one page each. Their layouts are tuned so the content ends
inside the page in *print* metrics, which run slightly taller than screen — if
you add a bullet, re-run `npm run resume` and check it is still one page.
