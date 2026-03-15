
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"
import ru from '../public/locales/ru/translation.json'
import en from '../public/locales/en/translation.json'
import i18next from "i18next"
import LaguageDetector from "i18next-browser-languagedetector"

i18next
    .use(Backend)
    .use(LaguageDetector)
    .use(initReactI18next)
    .init({
        fallbakLng: "ru",
        debug: true,
        backend: {
             loadPath: "/locales/{{lng}/translation.json"
        },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: { translation: ru },
            en:{translation:en}
        }    
})