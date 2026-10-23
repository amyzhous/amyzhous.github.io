import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/figures.css';
import '../styles/home.css';
import '../styles/motion.css';
import { startAutoScroll } from './autoscroll.js';

const scroller = document.querySelector<HTMLElement>('[data-scroller]');

/**
 * While the page is locked its content is display:none, so the work column
 * has no height to measure. Wait for the gate to open before starting.
 */
const start = (): void => {
  if (scroller) startAutoScroll(scroller);
};

if (document.documentElement.classList.contains('is-locked')) {
  document.addEventListener('gate:open', start, { once: true });
} else {
  start();
}
