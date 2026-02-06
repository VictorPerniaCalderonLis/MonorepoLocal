import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../../components/static/LanguageSelector/LanguageSelector';
import { useDocumentTitle } from '../../hooks';

export const Home = () => {
  const { t } = useTranslation('pages');
  const { t: lng } = useTranslation('common');
  useDocumentTitle('Home');

  return (
    <section className="bg-primaryBg flex h-full w-full flex-col items-center justify-center">
      <p>{t('home.mainText')}</p>
      <div className="flex items-center">
        {lng('languages.changeLanguage')}:
        <LanguageSelector />
      </div>
    </section>
  );
};
