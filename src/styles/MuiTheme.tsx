// Configuracion del tema de Material UI

import { createTheme } from '@mui/material/styles';

const getCssVariable = (value: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(value)
    .trim();
};

declare module '@mui/material/styles' {
  interface Palette {
    background2: {
      main: string;
    };
  }

  interface PaletteOptions {
    background2?: {
      main: string;
    };
  }
}

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: getCssVariable('--primary'),
    },
    secondary: {
      main: getCssVariable('--secondary'),
    },
    warning: {
      main: getCssVariable('--warning'),
    },
    success: {
      main: getCssVariable('--success'),
    },
    error: {
      main: getCssVariable('--error'),
    },
    info: {
      main: getCssVariable('--info'),
    },
  },
  typography: {
    h1: {
      color: '#FF0000',
      fontFamily: getCssVariable('--secondary-font'),
    },
  },
});
