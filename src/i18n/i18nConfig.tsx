import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//passes i18n down to react-i18next
i18n.use(initReactI18next).init({
  resources: {
    // español
    es: {
      static: {
        error: {
          title: 'Esto es un error.',
          message: 'Pongase en contacto con el administrador.',
          button: 'Volver al inicio',
        },
        notFound: {
          title: 'Página no encontrada.',
          message: 'Lo sentimos, la página que buscas no existe.',
          button: 'Volver al inicio',
        },
        notAllowed: {
          title: 'No tienes una planta asignada',
          message:
            'Por favor, contacta al administrador para que asigne una planta.',
          button: 'Volver al inicio',
        },
        footer: {
          mainText: 'Footer de ejemplo',
        },
        logo: {
          altText: 'LIS Data Solutions',
        },
        navbar: {
          home: 'Inicio',
          example1: 'Ejemplo 1',
          example2: 'Ejemplo 2',
          examples: 'Ejemplos',
          request: 'Solicitudes',
          administration: 'Administración',
          notifications: 'Notificaciones',
        },
      },
      pages: {
        home: {
          mainText: 'Página home de ejemplo',
        },
      },
      common: {
        true: 'Sí',
        false: 'No',
        api: {
          loading: 'Cargando...',
          procesando: 'Procesando...',
          operacionExitosa: 'Operación exitosa',
        },
        autocomplete: {
          searchPlaceholder: 'Buscar...',
          noOptions: 'No se encontraron opciones',
        },
        buttons: {
          loading: 'Cargando',
          create: 'Crear',
          edit: 'Editar',
          delete: 'Eliminar',
          save: 'Guardar',
          cancel: 'Cancelar',
          back: 'Volver',
          export: 'Exportar',
          add: 'Añadir',
          viewRecentChanges: 'Ver Últ. Mod.',
        },
        auth: {
          description: '¿Está seguro que desea cerrar sesión?',
          login: 'Iniciar sesión',
          logout: 'Cerrar sesión',
        },
        languages: {
          spanish: 'Español',
          english: 'Inglés',
          changeLanguage: 'Cambiar idioma',
          es: 'ES',
          eu: 'EU',
        },
        actualDate: 'Fecha actual',
      },
    },
    // inglés
    en: {
      static: {
        error: {
          title: 'This is an error.',
          message: 'Please contact the administrator.',
          button: 'Go back to home',
        },
        notAllowed: {
          title: "You don't have a plant assigned",
          message: 'Please contact the administrator to assign a plant.',
          button: 'Go back to home',
        },
        notFound: {
          title: 'Page not found.',
          message: 'Sorry, the page you are looking for does not exist.',
          button: 'Go back to home',
        },
        footer: {
          mainText: 'Example footer',
        },
        logo: {
          altText: 'LIS Data Solutions',
        },
        navbar: {
          home: 'Home',
          example1: 'Example 1',
          example2: 'Example 2',
          examples: 'Examples',
          request: 'Requests',
          administration: 'Administration',
          notifications: 'Notifications',
        },
      },
      pages: {
        home: {
          mainText: 'Example home page',
        },
        example1: {},
        example2: {},
      },
      common: {
        true: 'Yes',
        false: 'No',
        api: {
          loading: 'Loading...',
          procesando: 'Processing...',
          operacionExitosa: 'Operation successful',
        },
        autocomplete: {
          searchPlaceholder: 'Search...',
          noOptions: 'No options found',
        },
        buttons: {
          loading: 'Loading',
          create: 'Create',
          edit: 'Edit',
          delete: 'Delete',
          save: 'Save',
          cancel: 'Cancel',
          back: 'Back',
          export: 'Export',
          add: 'Add',
          viewRecentChanges: 'View Last mod.',
        },
        auth: {
          description: 'Are you sure you want to log out?',
          login: 'Login',
          logout: 'Logout',
        },
        languages: {
          spanish: 'Spanish',
          english: 'English',
          changeLanguage: 'Change language',
          es: 'ES',
          eu: 'EU',
        },
        actualDate: 'Current date',
      },
    },
  },
  lng: 'es', // Default language is Spanish
  fallbackLng: 'en', // If a translation is missing in the current language, fall back to English
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
