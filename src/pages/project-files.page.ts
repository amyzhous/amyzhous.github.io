import { head as caseHead, render } from '../templates/case.js';

export const head = (): string => caseHead('project-files');
export const body = (): string => render('project-files');
