/**
 * The home page's work column auto-scrolls and loops seamlessly.
 *
 * Five things matter here, all of them found the hard way:
 *
 * 1. The position is accumulated as a float. At 18px/second each frame
 *    advances ~0.3px, and assigning that straight to `scrollTop` rounds it to
 *    zero, so the column never moves.
 * 2. The list is rendered twice. Wrapping to the second copy is invisible
 *    because the content is identical: when the position reaches the second
 *    copy's `offsetTop`, subtract that value. Never animate back to the top —
 *    a smooth rewind reads as a mistake.
 * 3. It yields to the reader. A pointer entering the column pauses it; a wheel
 *    or touch event hands over control for four seconds. After the reader
 *    scrolls, the position is normalised back into the first copy before
 *    resuming.
 * 4. The rail index tracks the active project modulo three, so the second copy
 *    still highlights the right entry.
 * 5. Speed is a prop (`data-speed`, px/second). 0 disables it.
 */

const HANDOVER_MS = 4000;
/** A project is "active" once it has passed this far up the column. */
const ACTIVE_LINE = 0.45;
const PROJECT_COUNT = 3;

export const startAutoScroll = (scroller: HTMLElement): (() => void) => {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const speed = Number(scroller.dataset.speed ?? 18);
  const indexLinks = Array.from(
    document.querySelectorAll<HTMLElement>('.rail-index .idx'),
  );
  const projects = Array.from(scroller.querySelectorAll<HTMLElement>('.proj'));

  let held = false;
  let idleUntil = 0;
  /** Float position; `scrollTop` alone rounds and stalls. */
  let pos = scroller.scrollTop;
  let active = 0;
  let raf = 0;

  const loopPoint = (): number => {
    const marker = scroller.querySelector<HTMLElement>('.loop-start');
    return marker ? marker.offsetTop : scroller.scrollHeight - scroller.clientHeight;
  };

  /** Pull the reader's position back into the first copy of the list. */
  const sync = (): void => {
    const point = loopPoint();
    let p = scroller.scrollTop;
    if (point > 1 && p >= point) p -= point;
    pos = p;
  };

  const setActive = (next: number): void => {
    if (next === active) return;
    active = next;
    indexLinks.forEach((link, i) => link.classList.toggle('idx-on', i === active));
  };

  const hold = (): void => {
    held = true;
    sync();
  };
  const release = (): void => {
    held = false;
    sync();
  };
  const nudge = (): void => {
    idleUntil = performance.now() + HANDOVER_MS;
    sync();
  };

  scroller.addEventListener('mouseenter', hold);
  scroller.addEventListener('mouseleave', release);
  scroller.addEventListener('focusin', hold);
  scroller.addEventListener('focusout', release);
  scroller.addEventListener('wheel', nudge, { passive: true });
  scroller.addEventListener('touchstart', nudge, { passive: true });

  let last = performance.now();
  const step = (now: number): void => {
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;

    const point = loopPoint();
    const running =
      !reduced?.matches && !held && now > idleUntil && point > 1 && speed > 0;

    if (running) {
      pos += speed * dt;
      if (pos >= point) pos -= point;
      scroller.scrollTop = Math.round(pos);
    }

    // Which project is in view, for the rail index. Below 900px the column is
    // no longer a scroller and the rail is just a list, so leave it alone.
    if (scroller.scrollHeight > scroller.clientHeight + 1) {
      let next = active;
      const line = scroller.clientHeight * ACTIVE_LINE;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i]!.offsetTop - scroller.scrollTop <= line) next = i % PROJECT_COUNT;
      }
      setActive(next);
    }

    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);

  return () => {
    cancelAnimationFrame(raf);
    scroller.removeEventListener('mouseenter', hold);
    scroller.removeEventListener('mouseleave', release);
    scroller.removeEventListener('focusin', hold);
    scroller.removeEventListener('focusout', release);
    scroller.removeEventListener('wheel', nudge);
    scroller.removeEventListener('touchstart', nudge);
  };
};
