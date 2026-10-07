import { createRequire } from 'node:module';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const require = createRequire(import.meta.url);

/** Every page, and the module that renders its markup. */
const pages = {
  'index.html': { module: 'src/pages/home.page.ts' },
  'project-files.html': { module: 'src/pages/project-files.page.ts' },
  'ai-strategy.html': { module: 'src/pages/ai-strategy.page.ts' },
  'unified-submittals.html': { module: 'src/pages/unified-submittals.page.ts' },
  'resume.html': { module: 'src/pages/resume.page.ts' },
  'resume-ats.html': { module: 'src/pages/resume-ats.page.ts' },
} as const;

/**
 * URLs from the previous site. Every one of them served the same unfinished
 * "Permit Flow" template rather than the case study its link promised, so
 * there is no equivalent page to send them to — they go to the index, where
 * the current work is one click away.
 */
const redirects: Record<string, string> = {
  'rfi-intelligence.html': '/',
  'submittal-workflow.html': '/',
  'approvals-command.html': '/',
  'field-inspection.html': '/',
  'case-study.html': '/',
};

/** A no-JavaScript-required redirect stub, styled so a flash is not jarring. */
const redirectPage = (to: string): string => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}">
<title>Moved</title>
<style>
  body { margin: 0; min-height: 100vh; display: grid; place-items: center;
         background: #0D0D0F; color: #9A9AA2; color-scheme: dark;
         font: 400 14px/1.6 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
  p { margin: 0; padding: 0 24px; text-align: center; }
  a { color: #EDEDEF; }
</style>
</head>
<body>
<p>This page has moved. <a href="${to}">Go to the work</a>.</p>
<script>location.replace(${JSON.stringify(to)});</script>
</body>
</html>
`;

/** Emits those stubs alongside the built pages. */
const emitRedirects = (): Plugin => ({
  name: 'emit-redirects',
  generateBundle() {
    for (const [from, to] of Object.entries(redirects)) {
      this.emitFile({ type: 'asset', fileName: from, source: redirectPage(to) });
    }
  },
});

interface PageModule {
  head: () => string;
  body: () => string;
}

/**
 * Renders each page's markup at build time, so the HTML Vite emits is the
 * finished document and nothing waits on JavaScript.
 *
 * In `serve` the modules are loaded through Vite's own SSR pipeline, which
 * gives hot reload on content edits. In `build` there is no dev server, so
 * esbuild bundles each page module to a temporary ESM file and it is imported.
 */
const renderPages = (): Plugin => {
  let loadModule: ((id: string) => Promise<PageModule>) | undefined;
  let cleanup: (() => Promise<void>) | undefined;

  return {
    name: 'render-pages',
    enforce: 'pre',

    configureServer(server) {
      loadModule = async (id) =>
        (await server.ssrLoadModule(`/${id}`)) as unknown as PageModule;
      // Content and template edits should reload the browser, not just HMR CSS.
      server.watcher.on('change', (file) => {
        if (/src\/(data|templates|pages)\//.test(file)) {
          server.ws.send({ type: 'full-reload' });
        }
      });
    },

    async buildStart() {
      if (loadModule) return; // serve mode already set it up
      const esbuild = require('esbuild') as typeof import('esbuild');
      const dir = await mkdtemp(join(tmpdir(), 'portfolio-ssr-'));
      cleanup = () => rm(dir, { recursive: true, force: true });

      const outfiles = new Map<string, string>();
      for (const page of Object.values(pages)) {
        const outfile = join(dir, `${page.module.replace(/[^a-z0-9]/gi, '_')}.mjs`);
        await esbuild.build({
          entryPoints: [resolve(page.module)],
          outfile,
          bundle: true,
          format: 'esm',
          platform: 'node',
          target: 'node18',
          // The CSS imports in the page entries are for the browser bundle only.
          external: ['*.css'],
        });
        outfiles.set(page.module, outfile);
      }

      loadModule = async (id) =>
        (await import(pathToFileURL(outfiles.get(id)!).href)) as PageModule;
    },

    // The HTML is rendered in the output phase, after buildEnd, so the temporary
    // SSR bundles have to survive until the whole bundle is closed.
    async closeBundle() {
      await cleanup?.();
    },

    async transformIndexHtml(html, ctx) {
      const key = ctx.path.replace(/^\//, '') || 'index.html';
      const page = pages[key as keyof typeof pages];
      if (!page) return html;
      const mod = await loadModule!(page.module);
      return html.replace('<!--head-->', mod.head()).replace('<!--app-->', mod.body());
    },
  };
};

export default defineConfig({
  appType: 'mpa',
  plugins: [renderPages(), emitRedirects()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    rollupOptions: {
      input: Object.fromEntries(
        Object.keys(pages).map((p) => [p.replace(/\.html$/, ''), resolve(p)]),
      ),
    },
  },
  server: { port: 5173 },
});
