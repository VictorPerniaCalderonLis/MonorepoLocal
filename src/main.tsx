// lib
import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

// i18n
import './i18n/i18nConfig.tsx';

// estilos
import './index.css';
import { MuiTheme } from './styles/MuiTheme.tsx';
import { toastOptions } from './styles/toastOptions.ts';

// local
import { TolgeeProvider } from '@tolgee/react';
import { App } from './App.tsx';
import { tolgee } from './i18n/tolgee.ts';
import { ErrorFallback } from './pages/static/Error/ErrorFallback.tsx';
import { ApiProvider } from './providers/ApiProvider.tsx';

// TODO: en caso de tener autenticación por @lis-data-solutions/lis-security-keycloak
// const oidcConfig = {
//   url: import.meta.env.VITE_APP_KEYCLOAK_URL,
//   realm: import.meta.env.VITE_APP_REALM,
//   clientId: import.meta.env.VITE_APP_CLIENT_ID,
//   redirectUri: import.meta.env.VITE_APP_REDIRECT_URI,
//   permissionsClientId: 'backend',
// };

ReactDOM.createRoot(document.getElementById('root')!).render(
  // TODO: en caso de tener autenticación por @lis-data-solutions/lis-security-keycloak
  // <AuthProvider oidcConfig={oidcConfig}>
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <TolgeeProvider tolgee={tolgee}>
      <ThemeProvider theme={MuiTheme}>
        <Toaster toastOptions={toastOptions} />
        <CssBaseLine />
        <ApiProvider>
          <Router>
            <App />
          </Router>
        </ApiProvider>
      </ThemeProvider>
    </TolgeeProvider>
  </ErrorBoundary>,
  // </AuthProvider>,
);
