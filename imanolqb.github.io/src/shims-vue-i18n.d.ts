// src/shims-vue-i18n.d.ts
import { DefineLocaleMessage } from 'vue-i18n';

declare module 'vue-i18n' {
    // Define las claves de mensaje específicas de tu aplicación
    export interface DefineLocaleMessage {
        'about-navbar': string;
        'resume-navbar': string;
        'portfolio-navbar': string;
        'contact-navbar': string;
        'TFG-navbar': string;
    }
}