import '../styles/tokens.css';
import '../styles/case.css';

/**
 * The rail's contents highlight whichever section is being read. This is the
 * script from Amy's exported pages, unchanged apart from being typed.
 */
const links = [...document.querySelectorAll<HTMLAnchorElement>('.toc a')];
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${entry.target.id}`));
    }),
  { rootMargin: '-35% 0px -60% 0px' },
);
document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));

/**
 * The exploration carousel: one board at a time, the others as thumbnails.
 * Without this the first board is simply the one on show, which is the
 * state the markup ships in.
 */
document.querySelectorAll<HTMLElement>('[data-explore]').forEach((root) => {
  const slides = [...root.querySelectorAll<HTMLElement>('.explore-stage img')];
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('.explore-thumbs button')];

  const show = (i: number): void => {
    slides.forEach((s, n) => {
      s.hidden = n !== i;
    });
    tabs.forEach((t, n) => t.setAttribute('aria-selected', String(n === i)));
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => show(i));
    // left and right move between boards, as a tablist should
    tab.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      const next = (i + step + tabs.length) % tabs.length;
      tabs[next]!.focus();
      show(next);
    });
  });
});
