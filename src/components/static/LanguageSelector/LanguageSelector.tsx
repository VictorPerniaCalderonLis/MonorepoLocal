import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';
import { useLanguageSelector } from './hooks/useLanguageSelector';

export const LanguageSelector = () => {
  const { t } = useTranslation('common');

  const { selectedLanguage, handleChange, handleOpen, handleClose, anchorEl } =
    useLanguageSelector();

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        aria-controls="language-menu"
        aria-haspopup="true"
      >
        <MdOutlineLanguage />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          selected={selectedLanguage === 'es-ES'}
          onClick={() => handleChange('es-ES')}
        >
          {t('languages.spanish')}
        </MenuItem>
        <MenuItem
          selected={selectedLanguage === 'en-EN'}
          onClick={() => handleChange('en-EN')}
        >
          {t('languages.english')}
        </MenuItem>
      </Menu>
    </>
  );
};
