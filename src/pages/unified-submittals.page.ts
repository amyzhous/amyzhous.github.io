import { head as caseHead, render } from '../templates/case.js';

export const head = (): string => caseHead('unified-submittals');
export const body = (): string => render('unified-submittals');
