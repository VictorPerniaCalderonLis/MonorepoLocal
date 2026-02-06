import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageSelector = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const languageMap: Record<string, string> = {
    es: 'es-ES',
    en: 'en-EN',
  };
  const selectedLanguage = languageMap[i18n.language] || i18n.language;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (langValue: string) => {
    const lang =
      Object.keys(languageMap).find((key) => languageMap[key] === langValue) ||
      langValue;
    i18n.changeLanguage(lang);
    handleClose();
  };

  return {
    handleChange,
    selectedLanguage,
    handleOpen,
    handleClose,
    anchorEl,
  };
};
