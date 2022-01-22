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
      "add-cart-button": "Add to cart",
      "delete-all-products-button": "Delete all products from cart",
      "modal": {
        "header": "WARNING!",
        "body": "You are about to delete all products from database",
        "cancel": "Cancel",
        "confirm": "I confirm that I want to delete all products from database"
      }
    }
  },
  ee: {
    translation: {
      "admin-link": "Administraatori vaade",
      "cart-link": "Ostukorv",
      "add-cart-button": "Lisa ostukorvi",
      "delete-all-products-button": "Kustuta kõik tooted andmebaasist",
      "modal": {
        "header": "HOIATUS!",
        "body": "Oled kõik tooted andmebaasist ära kustutamas",
        "cancel": "Katkesta",
        "confirm": "Kinnitan et soovin kõik totoed andmebaasist kustutada"
      }
    }
  },
  ru: {
    translation: {
      "admin-link": "RU Administraatori vaade",
      "cart-link": "RU Ostukorv",
      "add-cart-button": "RU Lisa ostukorvi",
      "delete-all-products-button": "RU Kustuta kõik tooted andmebaasist",
      "modal": {
        "header": "WARNING!",
        "body": "You are about to delete all products from database",
        "cancel": "Cancel",
        "confirm": "I confirm that I want to delete all products from database"
      }
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