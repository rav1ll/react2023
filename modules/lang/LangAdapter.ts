import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as en from './localization/en.json';
import * as ru from './localization/ru.json';
import {LangType} from './LangType';
export const defaultNS = 'common';
export const resources = {
    ru,
    en,
};
i18n.use(initReactI18next).init({
    resources,
    defaultNS,
    lng: LangType.RU,
    compatibilityJSON: 'v3',
    returnNull: false,
    interpolation: {
        escapeValue: false,
    },
});
export const Localization = i18n;
