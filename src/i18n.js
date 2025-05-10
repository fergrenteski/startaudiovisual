import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';

i18n
    .use(LanguageDetector) // Detecta automaticamente a linguagem do navegador
    .use(initReactI18next)
    .init({
        resources: {
            pt: { translation: translationPT },
            en: { translation: translationEN }
        },
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
