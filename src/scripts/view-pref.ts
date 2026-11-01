/**
 * Which view someone last chose, remembered across pages.
 *
 * A case study only exists in the classic view, so its switch does not
 * navigate — clicking it records a preference instead. That preference is
 * what "All work" honours, so leaving a case study returns you to whichever
 * view you picked.
 */
const KEY = 'viewPref';
export type View = 'chat' | 'classic';

export const getView = (): View => {
  try {
    return localStorage.getItem(KEY) === 'chat' ? 'chat' : 'classic';
  } catch {
    return 'classic';
  }
};

export const setView = (v: View): void => {
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* private mode */
  }
};

export const homeFor = (v: View): string => (v === 'chat' ? '/' : '/classic.html');

/**
 * On a case study the switch is a preference control, not navigation: it
 * marks the choice and points "All work" at the matching home.
 */
export const wirePreferenceToggle = (): void => {
  const toggle = document.querySelector<HTMLElement>('[data-pref-toggle]');
  const back = document.querySelector<HTMLAnchorElement>('[data-home]');
  if (!toggle) return;

  const halves = Array.from(toggle.querySelectorAll<HTMLButtonElement>('button[data-mode]'));

  const reflect = (v: View): void => {
    halves.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === v)));
    if (back) back.href = homeFor(v);
  };

  reflect(getView());

  halves.forEach((b) =>
    b.addEventListener('click', () => {
      const v = b.dataset.mode === 'chat' ? 'chat' : 'classic';
      setView(v);
      reflect(v);
    }),
  );
};
