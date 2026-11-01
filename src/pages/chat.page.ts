import { markup as chatMarkup } from '../templates/chat.js';
import { headScript, markup as gateMarkup } from '../templates/gate.js';
import { launched } from '../data/site.js';

/**
 * The chat view is the imported bundle, unaltered. Everything below is this
 * site's, not the bundle's: the lock, and the crawler rules every other page
 * follows. Its title, description and social tags are its own, in chat.html.
 */
export const head = (): string =>
  (launched ? '' : '<meta name="robots" content="noindex, nofollow">') + headScript();

export const body = (): string => gateMarkup() + chatMarkup();
