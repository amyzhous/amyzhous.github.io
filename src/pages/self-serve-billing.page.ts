import { head as caseHead, render } from '../templates/case.js';
import { headScript, markup } from '../templates/gate.js';

export const head = (): string => caseHead('self-serve-billing') + headScript();
export const body = (): string => markup() + render('self-serve-billing');
