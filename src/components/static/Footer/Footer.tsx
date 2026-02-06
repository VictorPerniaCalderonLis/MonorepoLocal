import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('static');

  return (
    <footer className="z-10 flex h-16 items-center justify-center p-4">
      <p>{t('footer.mainText')}</p>
    </footer>
  );
};
