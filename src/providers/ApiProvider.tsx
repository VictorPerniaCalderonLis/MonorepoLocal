import { ApiHooksProvider } from '@lis-data-solutions/lis-query';
import { ReactNode } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

interface ToastOptions {
  pending?: string;
  success?: string | ((data: unknown) => string);
  error?: string | ((error: unknown) => string);
}

export function ApiProvider({ children }: Readonly<{ children: ReactNode }>) {
  const { t } = useTranslation('common');

  return (
    <ApiHooksProvider
      config={{
        toastConfig: {
          promiseToast: (promise: Promise<unknown>, options: ToastOptions) =>
            toast.promise(promise, {
              loading: options.pending ?? t('loading'),
              success: options.success,
              error: options.error,
            }),
          enabledFor: 'all',
          defaultMessages: {
            pending: () => t('api.procesando'),
            success: () => t('api.operacionExitosa'),
            error: (_, error: any) => {
              const detail = error?.response?.data?.detail;
              if (typeof detail === 'string') return detail;
              if (Array.isArray(detail) && detail[0]) {
                return (
                  detail[0].ctx?.reason || detail[0].msg || detail[0].message
                );
              }
              return error.message || 'Error';
            },
          },
        },
        errorConfig: {
          retryConfig: {
            maxRetries: 2,
            retryDelay: 1000,
          },
        },
        defaultQueryOptions: {
          retry: 1,
          staleTime: 30000,
          refetchOnWindowFocus: false,
        },
      }}
    >
      {children}
    </ApiHooksProvider>
  );
}
