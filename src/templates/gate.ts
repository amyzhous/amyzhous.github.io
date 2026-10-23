/**
 * A soft lock on the portfolio.
 *
 * This is a courtesy gate, not security. The site is static, so every page is
 * already in the HTML the browser downloads — anyone willing to open View
 * Source or fetch the URL directly can read it without ever meeting this
 * form. What the gate does is stop casual browsing and signal that the work
 * is shared deliberately. Real protection needs a host that checks
 * credentials before serving the bytes.
 *
 * The password is stored as a SHA-256 hash rather than plain text, so the
 * word itself is not sitting in the page source.
 */

/** SHA-256 of the password. Regenerate with: printf 'word' | shasum -a 256 */
export const PASSWORD_HASH =
  '1906bc7c801f03c41551b06e2fd406e8f471787c51357e8731ec61dd599f04c8';

import { launched } from '../data/site.js';

const KEY = 'portfolio-open';

/**
 * Runs in the document head, before anything paints, so a locked page never
 * flashes its content. Everything it needs is inline for the same reason.
 */
export const headScript = (): string => `
${launched ? '' : '<meta name="robots" content="noindex, nofollow">'}
<style>
  html.is-locked body > *:not(.gate) { display: none !important; }
  html:not(.is-locked) .gate { display: none; }
  .gate {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: #FDFDFC;
    font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif;
  }
  .gate-inner { width: 100%; max-width: 300px; }
  .gate-label {
    margin: 0 0 14px;
    font-size: 11px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #6E6E69;
  }
  .gate-lede {
    margin: 0 0 26px;
    font-family: Newsreader, Georgia, serif;
    font-weight: 400;
    font-size: 19px;
    line-height: 1.45;
    color: #21201C;
  }
  .gate-field { position: relative; margin-bottom: 18px; }
  .gate-input {
    width: 100%;
    padding: 0 0 9px;
    border: 0;
    border-bottom: 1px solid #DAD9D6;
    background: none;
    font: inherit;
    font-size: 15px;
    color: #21201C;
    border-radius: 0;
  }
  .gate-input:focus { outline: none; }
  .gate-field::after {
    content: '';
    position: absolute;
    right: 0; bottom: -1px; left: 0;
    height: 2px;
    background: linear-gradient(120deg, #FFBEE5 0%, #FFD788 70%);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 380ms cubic-bezier(.2,.7,.2,1);
  }
  .gate-field:focus-within::after { transform: scaleX(1); }
  .gate-row { display: flex; align-items: center; gap: 16px; }
  .gate-submit {
    padding: 9px 18px;
    border: 1px solid #21201C;
    background: #21201C;
    color: #FDFDFC;
    font: inherit;
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 300ms, color 300ms;
  }
  .gate-submit:hover { background: transparent; color: #21201C; }
  .gate-submit:focus-visible,
  .gate-input:focus-visible { outline: 2px solid #21201C; outline-offset: 3px; }
  .gate-error {
    margin: 0;
    font-size: 12.5px;
    color: #5F5E58;
    opacity: 0;
    transition: opacity 240ms;
  }
  .gate-error[data-shown] { opacity: 1; }
  @media (prefers-reduced-motion: reduce) {
    .gate-field::after, .gate-error, .gate-submit { transition: none; }
  }
</style>
<script>
  try {
    if (sessionStorage.getItem('${KEY}') !== '1') {
      document.documentElement.classList.add('is-locked');
    }
  } catch (e) {
    document.documentElement.classList.add('is-locked');
  }
</script>`;

/** The form itself. Real elements, labelled, with a live error region. */
export const markup = (): string => `
<div class="gate" data-gate>
  <div class="gate-inner">
    <p class="gate-lede">Hey, this page is locked.<br>Enter password to enter.</p>
    <form data-gate-form>
      <div class="gate-field">
        <label class="gate-label" for="gate-input" style="display:block;margin-bottom:8px">Password</label>
        <input class="gate-input" id="gate-input" name="passphrase" type="password"
               autocomplete="current-password" autocapitalize="off" autocorrect="off"
               spellcheck="false" required>
      </div>
      <div class="gate-row">
        <button class="gate-submit" type="submit">Enter</button>
        <p class="gate-error" data-gate-error role="status" aria-live="polite"></p>
      </div>
    </form>
  </div>
</div>
<script type="module">
  const KEY = '${KEY}';
  const HASH = '${PASSWORD_HASH}';
  const gate = document.querySelector('[data-gate]');
  const form = document.querySelector('[data-gate-form]');
  const error = document.querySelector('[data-gate-error]');
  const input = document.getElementById('gate-input');

  if (document.documentElement.classList.contains('is-locked')) {
    input.focus();
  }

  const digest = async (value) => {
    if (!crypto?.subtle) return null;
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
    return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  const open = () => {
    try { sessionStorage.setItem(KEY, '1'); } catch (e) { /* private mode */ }
    document.documentElement.classList.remove('is-locked');
    gate.remove();
    document.dispatchEvent(new CustomEvent('gate:open'));
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const value = input.value.trim().toLowerCase();
    const hashed = await digest(value);
    if (hashed === HASH) { open(); return; }
    error.textContent = 'That is not it. Try again.';
    error.setAttribute('data-shown', '');
    input.select();
  });

  input.addEventListener('input', () => {
    error.removeAttribute('data-shown');
  });
</script>`;
