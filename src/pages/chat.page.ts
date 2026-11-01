import { markup as chatMarkup } from '../templates/chat.js';
import { headScript, markup as gateMarkup } from '../templates/gate.js';
import { site } from '../data/site.js';

export const head = (): string =>
  `<title>${site.name} · ${site.roleLabel}</title>
<meta name="description" content="${site.lede}">` + headScript();

export const body = (): string => gateMarkup() + chatMarkup();
