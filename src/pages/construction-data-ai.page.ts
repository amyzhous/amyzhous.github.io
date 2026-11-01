import { head as caseHead, render } from '../templates/case.js';
import { headScript, markup } from '../templates/gate.js';

export const head = (): string => caseHead('construction-data-ai') + headScript();
export const body = (): string => markup() + render('construction-data-ai');
