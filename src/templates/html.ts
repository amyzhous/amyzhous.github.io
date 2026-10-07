/** Minimal template helpers. */

const ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/**
 * Escapes text for HTML. Content strings in the data modules are plain text —
 * square-bracket placeholders, arrows and typographic quotes all pass through
 * untouched.
 */
export const esc = (s: string): string => s.replace(/[&<>"']/g, (c) => ENTITIES[c]!);

/** Marks a string as already-safe HTML (used for the few `&nbsp;` labels). */
export const raw = (s: string): string => s;

export const join = (parts: string[]): string => parts.join('');

export const map = <T>(items: readonly T[], fn: (item: T, i: number) => string): string =>
  items.map(fn).join('');

export const attr = (name: string, value: string | number | undefined | null): string =>
  value === undefined || value === null || value === '' ? '' : ` ${name}="${esc(String(value))}"`;
