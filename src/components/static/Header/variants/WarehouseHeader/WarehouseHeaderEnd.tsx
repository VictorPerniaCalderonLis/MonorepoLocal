import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FaUserCircle } from 'react-icons/fa';
import { useSidebarStore } from '../../../../../store/sidebarStore';
import { useLanguageSelector } from '../../../LanguageSelector/hooks/useLanguageSelector';
export const WarehouseHeaderEnd = () => {
  const { selectedLanguage, handleChange } = useLanguageSelector();
  const { collapsed } = useSidebarStore();

  const { t } = useTranslation('common');

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    handleChange(event.target.value);
  };

  // De este hook sacaremos los valores de LARRAITZ ILLUNBE  y ALMACEN que están hardcoded
  //  const { user } = useUserStore();

  return (
    <div className="ml-auto shrink-0 items-center gap-3">
      <div className="flex items-center gap-4">
        <div className="inline-flex shrink-0 items-center gap-4">
          <div className="flex flex-col leading-tight">
            <span className="font-roboto text-headerText text-base leading-normal font-medium">
              LARRAITZ ILLUNBE
            </span>
            <span className="text-headerText text-xs leading-normal font-extralight tracking-normal uppercase">
              ALMACÉN
            </span>
          </div>
          <div
            className={
              collapsed
                ? 'h-full w-auto max-[560px]:hidden'
                : 'h-full w-auto max-[655px]:hidden'
            }
          >
            <FaUserCircle size={30} />
          </div>
        </div>
        <div className={`w-[130px] ${collapsed ? '' : 'max-[655px]:hidden'} `}>
          <FormControl
            size="small"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                height: 40,
              },
            }}
          >
            <InputLabel id="language-select-label">
              {selectedLanguage === 'es-ES'
                ? t('languages.es')
                : t('languages.eu')}
            </InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={selectedLanguage}
              label={
                selectedLanguage === 'es-ES'
                  ? t('languages.es')
                  : t('languages.eu')
              }
              onChange={handleSelectChange}
            >
              <MenuItem value="es-ES">{t('languages.es')}</MenuItem>
              <MenuItem value="eu-EU">{t('languages.eu')}</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default WarehouseHeaderEnd;
