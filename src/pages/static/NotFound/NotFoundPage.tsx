import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { logoData } from '../../../constants/logo/logoData';
import { useDocumentTitle } from '../../../hooks';

export const NotFoundPage = () => {
  useDocumentTitle('404 - Página no encontrada');
  const { t } = useTranslation('static');

  return (
    <div className="bg-primaryBg flex h-full justify-center overflow-y-auto">
      <div className="flex items-center p-4 md:flex-row">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-start">
              <img
                alt={logoData.alt}
                src={logoData.logotipo}
                className="h-full rounded-md"
              />
            </div>

            <div className="text-primaryText mt-20 flex flex-col gap-5">
              <p className="text-3xl font-medium">{t('notFound.title')}</p>
              <p className="text-2xl">{t('notFound.message')}</p>
            </div>
          </div>
          <div>
            <Button color={'info'} onClick={() => (window.location.href = '/')}>
              {t('notFound.button')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
