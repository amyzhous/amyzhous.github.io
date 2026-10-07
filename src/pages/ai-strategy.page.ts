import { head as caseHead, render } from '../templates/case.js';

export const head = (): string => caseHead('ai-strategy');
export const body = (): string => render('ai-strategy');
