// Configuracion de las opciones de toast

import { DefaultToastOptions } from 'react-hot-toast';

export const toastOptions: DefaultToastOptions = {
  success: {
    iconTheme: {
      primary: 'var(--success)',
      secondary: 'white',
    },
  },
  error: {
    iconTheme: {
      primary: 'var(--error)',
      secondary: 'white',
    },
  },
};
