const tryItAgain = 'Ggf. Internet-Verbindung überprüfen und nochmals versuchen.';
const newLine = '<br>';

export const UNEXPECTED_ERROR = 'unexpectedError';
export const LOAD_YEARS_ERROR = 'loadYearsError';
export const LOAD_EVENTS_ERROR = 'loadEventsError';
export const LOAD_EVENT_ERROR = 'loadEventError';
export const NO_YEARS_ERROR = 'noYearsError';
export const NO_EVENTS_ERROR = 'noEventsError';
export const NO_EVENT_ERROR = 'noEventError';

export const ErrorMap = new Map();
ErrorMap.set(UNEXPECTED_ERROR, 'Unbekannter!' + newLine + tryItAgain);
ErrorMap.set(LOAD_YEARS_ERROR, 'Fehler beim Laden der Jahre!' + newLine + tryItAgain);
ErrorMap.set(LOAD_EVENTS_ERROR, 'Fehler beim Laden der Veranstaltungen!' + newLine + tryItAgain);
ErrorMap.set(LOAD_EVENT_ERROR, 'Fehler beim Laden einer Veranstaltung!' + newLine + tryItAgain);
ErrorMap.set(NO_YEARS_ERROR, 'Es wurden keine Jahre gefunden!');
ErrorMap.set(NO_EVENTS_ERROR, 'Für das gewählten Jahr wurden keine Veranstaltungen gefunden!');
ErrorMap.set(NO_EVENT_ERROR, 'Die gewählte Veranstaltungen wurde nicht gefunden!');

