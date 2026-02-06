import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { logoData } from '../../../constants/logo/logoData';
import { useDocumentTitle } from '../../../hooks';

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  useDocumentTitle('Error');

  const { t } = useTranslation('static');

  return (
    <div className="bg-primaryBg flex h-full items-center justify-center overflow-y-auto">
      <div className="flex h-full flex-col p-4 md:h-3/4 md:w-3/4 md:flex-row">
        <div className="flex h-full flex-col gap-8 md:w-1/2 md:gap-0 md:overflow-y-auto">
          <div className="flex h-1/2 flex-col gap-4">
            <div className="flex h-1/2 items-start justify-start">
              <img
                alt={logoData.alt}
                src={logoData.logotipo}
                className="h-full rounded-md"
              />
            </div>

            <div className="text-primaryText flex flex-col gap-4">
              <p className="text-3xl font-medium">{t('error.title')}</p>
              <p className="text-2xl">{t('error.message')}</p>
            </div>
          </div>
          <div className="h-1/2 text-xl">
            {error ? (
              <div className="h-full md:overflow-y-auto">
                <div className="bg-red-200 p-4 text-gray-800">
                  {error?.message}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <Button color={'error'} onClick={resetErrorBoundary}>
              {t('error.button')}
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-2xl">
            <img alt="Error" src="/img/error.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
