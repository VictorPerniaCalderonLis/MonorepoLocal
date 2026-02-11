import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useTolgee, useTranslate } from '@tolgee/react';
import { FaUserCircle } from 'react-icons/fa';
import { WarehouseHeaderEndProps } from './types/WharehouseHeader.types';

export const WarehouseHeaderEnd = ({
  collapsed,
  selectedLanguage,
  onChangeLanguage,
  user,
  warehouseName,
}: WarehouseHeaderEndProps) => {
  const { t } = useTranslate();

  console.log('selectedLanguage  ', selectedLanguage);
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    onChangeLanguage(event.target.value);
  };
  const { getLanguage } = useTolgee();
  const language = getLanguage();
  return (
    <div className="ml-auto shrink-0 items-center gap-3">
      <div className="flex items-center gap-4">
        <div className="inline-flex shrink-0 items-center gap-4">
          <div className="flex flex-col leading-tight">
            <span className="font-roboto text-headerText text-base leading-normal font-medium">
              {user}
            </span>
            <span className="text-headerText text-xs leading-normal font-extralight tracking-normal uppercase">
              {warehouseName}
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
              {language === 'es-ES' ? t('languages.es') : t('languages.eu')}
            </InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label={
                language === 'es-ES' ? t('languages.es') : t('languages.eu')
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
