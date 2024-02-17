import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "fr",
  debug: true,
  supportedLngs: ["en", "fr"],
  resources: {
    en: {
      translation: {
        "About me": "About me",
        "Back to home": "Back to home",
        "Change language": "Change language",
        "Filter by item": "Filter by item",
        "Message sent !": "Message sent !",
        "My work": "My work",
        "Send message": "Send",
        "Show All": "All",
        "Talk to me !": "Talk to me !",
        "Trained 100% remotely in front-end development, and more particularly React, I put my skills at your service to complete your website project. You can look at my different creations here, and contact me directly via the dedicated form. Enjoy your visit !":
          "Trained 100% remotely in front-end development, and more particularly React, I put my skills at your service to complete your website project. You can look at my different creations here, and contact me directly via the dedicated form. Enjoy your visit !",
        "Your email address": "Your email address",
        "Your message here": "Your message here",
        "Your name": "Your name",
      },
    },
    fr: {
      translation: {
        "About me": "À propos de moi",
        "Back to home": "Retourner à l'accueil",
        "Change language": "Changer la langue",
        "Filter by item": "Filtrer par item",
        "Message sent !": "Message envoyé !",
        "My work": "Mon portfolio",
        "Send message": "Envoyer",
        "Show All": "Tous",
        "Talk to me !": "Contactez-moi !",
        "Trained 100% remotely in front-end development, and more particularly React, I put my skills at your service to complete your website project. You can look at my different creations here, and contact me directly via the dedicated form. Enjoy your visit !":
          "Formé 100% à distance au développement front-end, et plus particulièrement React, je mets mes compétences à votre service pour mener à bien votre projet de site web. Vous pourrez ici regarder mes différentes créations, et me contacter directement via le formulaire dédié. Bonne visite !",
        "Your email address": "Votre adresse mail",
        "Your message here": "Votre message ici",
        "Your name": "Votre nom",
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
