import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin-link": "Admin view",
      "cart-link": "Cart",
      "add-cart-button": "Add to cart"
    }
  },
  ee: {
    translation: {
      "admin-link": "Administraatori vaade",
      "cart-link": "Ostukorv",
      "add-cart-button": "Lisa ostukorvi"
    }
  },
  ru: {
    translation: {
      "admin-link": "RU Administraatori vaade",
      "cart-link": "RU Ostukorv",
      "add-cart-button": "RU Lisa ostukorvi"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language"),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;