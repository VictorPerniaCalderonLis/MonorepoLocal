import { DevTools, FormatSimple, Tolgee } from "@tolgee/web";

const esES = {
  test: "Español",
  languages: {
    es: "Español",
    eu: "Euskera",
  },
  navbar: {
    home: "Inicio",
    notifications: "Notificaciones",
    logout: "Salir",
  },
};

const euEU = {
  test: "Euskara",
  languages: {
    es: "Gaztelania",
    eu: "Euskara",
  },
  navbar: {
    home: "Hasiera",
    notifications: "Jakinarazpenak",
    logout: "Irten",
  },
};

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: "es-ES",
    fallbackLanguage: "es-ES",
    availableLanguages: ["es-ES", "eu-EU"],
    staticData: {
      "es-ES": esES,
      "eu-EU": euEU,
    },
  });
