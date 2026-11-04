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
