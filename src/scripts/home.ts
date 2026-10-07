import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/figures.css';
import '../styles/home.css';
import '../styles/motion.css';
import { startAutoScroll } from './autoscroll.js';

const scroller = document.querySelector<HTMLElement>('[data-scroller]');
if (scroller) startAutoScroll(scroller);
