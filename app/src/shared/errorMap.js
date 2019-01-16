const tryItAgain = 'Ggf. Internet-Verbindung überprüfen und nochmals versuchen.';
const newLine = '<br>';

export const UNEXPECTED_ERROR = 'unexpectedError';
export const LOAD_YEAR_ERROR = 'loadYearsError';
export const LOAD_EVENTS_ERROR = 'loadEventsError';
export const LOAD_EVENT_ERROR = 'loadEventError';

export const ErrorMap = new Map();
ErrorMap.set(UNEXPECTED_ERROR, 'Unbekannter!' + newLine + tryItAgain);
ErrorMap.set(LOAD_YEAR_ERROR, 'Fehler beim Laden der Jahre!' + newLine + tryItAgain);
ErrorMap.set(LOAD_EVENTS_ERROR, 'Fehler beim Laden der Veranstaltungen!' + newLine + tryItAgain);
ErrorMap.set(LOAD_EVENT_ERROR, 'Fehler beim Laden einer Veranstaltung!' + newLine + tryItAgain);
