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
  'project-files': 'How did Project Files become a paid product?',
  'activation-growth': 'How did you approach activation?',
  'construction-data-ai': 'What did you propose for construction data and AI?',
  'self-serve-billing': 'How does self-serve billing work?',
};

const SLUG_BY_QUESTION: Record<string, string> = Object.fromEntries(
  Object.entries(QUESTION_BY_SLUG).map(([slug, q]) => [q, slug]),
);

const threadButtons = (): HTMLElement[] =>
  Array.from(document.querySelectorAll<HTMLElement>('.side .th'));

/** ── arriving: open the thread the case study sent us to ── */

/** Resolves once the bundle has rendered its landing answer, or gives up. */
const settled = (): Promise<void> =>
  new Promise((resolve) => {
    if (document.querySelector('.entry')) return resolve();
    const stop = setTimeout(finish, 2000);
    const observer = new MutationObserver(() => {
      if (document.querySelector('.entry')) finish();
    });
    function finish(): void {
      clearTimeout(stop);
      observer.disconnect();
      resolve();
    }
    observer.observe(document.body, { childList: true, subtree: true });
  });

const openRequestedThread = async (): Promise<void> => {
  const slug = new URLSearchParams(location.search).get('thread');
  const question = slug ? QUESTION_BY_SLUG[slug] : undefined;
  if (!question) return;

  // Leave the address bar clean, so a reload does not re-trigger this.
  history.replaceState(null, '', location.pathname);

  // The bundle renders its landing answer during boot; asking before that
  // lands finishes gets the new answer wiped when it does.
  await settled();

  const button = threadButtons().find((b) => b.dataset.q === question);
  if (!button) return;

  const existing = Array.from(document.querySelectorAll('.entry'));
  // Its own click handler is what runs the typing and streaming.
  button.click();
  const added = document.querySelectorAll('.entry').length > existing.length;
  if (added) existing.forEach((el) => el.remove());

  document.querySelector('.scroller')?.scrollTo?.({ top: 0 });
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
      location.href = slug ? `/${slug}.html` : '/classic.html';
    },
    true,
  );
};

const start = (): void => {
  wireClassicLink();
  void openRequestedThread();
};

// While the lock is up the page is display:none and nothing should animate
// behind it.
if (document.documentElement.classList.contains('is-locked')) {
  document.addEventListener('gate:open', start, { once: true });
} else {
  start();
}
