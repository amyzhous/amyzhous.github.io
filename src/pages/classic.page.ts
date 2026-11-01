import { head as pageHead, render } from '../templates/home.js';
import { headScript, markup } from '../templates/gate.js';

export const head = (): string => pageHead() + headScript();
export const body = (): string => markup() + render();
