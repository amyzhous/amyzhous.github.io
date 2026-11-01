import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/figures.css';
import '../styles/home.css';
import '../styles/motion.css';
import { startAutoScroll } from './autoscroll.js';
import { setView } from './view-pref.js';

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

// Crossing to the chat view is also a choice; remember it.
document
  .querySelector('.viewtgl a[href="/"]')
  ?.addEventListener('click', () => setView('chat'));
