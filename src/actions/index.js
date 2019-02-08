import { CHANGE_LANGUAGE } from './types';

export const fetchLanguage = language => ({
	type: CHANGE_LANGUAGE,
	language
});
