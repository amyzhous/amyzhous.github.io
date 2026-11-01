/**
 * Keeps the Classic/Chat switch on the thing you are already looking at.
 *
 * Toggling should change the view, not the subject. Arriving from a case
 * study opens that project's thread rather than the landing answer, and
 * going back to Classic from a project thread returns to that case study.
 *
 * The bundle has no concept of either, so both are added here rather than in
 * its own script, which stays as it shipped.
 */

import '../styles/chat-view.css';

/** The question each project's thread is keyed on, as the bundle writes it. */
const QUESTION_BY_SLUG: Record<string, string> = {
  'project-files': 'How did Project Files reach 40% of customers?',
  'ai-strategy': 'Why did only 15% accept the AI review?',
  'unified-submittals': 'How did four submittal flows become one?',
};

const SLUG_BY_QUESTION: Record<string, string> = Object.fromEntries(
  Object.entries(QUESTION_BY_SLUG).map(([slug, q]) => [q, slug]),
);

const threadButtons = (): HTMLElement[] =>
  Array.from(document.querySelectorAll<HTMLElement>('.side .th'));

/** ── arriving: open the thread the case study sent us to ── */
const openRequestedThread = (): void => {
  const slug = new URLSearchParams(location.search).get('thread');
  const question = slug ? QUESTION_BY_SLUG[slug] : undefined;
  if (!question) return;

  const button = threadButtons().find((b) => b.dataset.q === question);
  if (!button) return;

  // The bundle's own click handler does the rest.
  button.click();
  // Leave the address bar clean, so a reload does not re-trigger it.
  history.replaceState(null, '', location.pathname);
};

/** ── leaving: go back to the case study this thread is about ── */
const wireClassicLink = (): void => {
  const classic = document.querySelector<HTMLElement>('.viewtgl [data-mode="classic"]');
  if (!classic) return;

  classic.addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      // Runs before the bundle's own handler, which would switch to its
      // bundled classic view instead.
      event.stopImmediatePropagation();
      const active = threadButtons().find((b) => b.getAttribute('aria-current') === 'true');
      const slug = active?.dataset.q ? SLUG_BY_QUESTION[active.dataset.q] : undefined;
      location.href = slug ? `/${slug}.html` : '/';
    },
    true,
  );
};

const start = (): void => {
  wireClassicLink();
  openRequestedThread();
};

// While the lock is up the page is display:none and nothing should animate
// behind it.
if (document.documentElement.classList.contains('is-locked')) {
  document.addEventListener('gate:open', start, { once: true });
} else {
  start();
}
