import { createI18n } from 'vue-i18n';
import enUS from '@/assets/locales/en-US.json';
import esES from '@/assets/locales/es-ES.json';
import frFR from '@/assets/locales/fr-FR.json';

type MessageSchema = typeof enUS; // Usamos el inglés como schema base

const i18n = createI18n<[MessageSchema], 'en-US' | 'es-ES' | 'fr-FR'>({
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'es-ES': esES,
        'fr-FR': frFR
    },
    globalInjection: true
});

export default i18n;