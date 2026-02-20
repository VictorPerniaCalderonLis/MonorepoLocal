import { InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import { CustomAutocomplete } from '../Autocomplete/CustomAutocomplete';
import { CustomAutocompleteProps } from '../Autocomplete/CustomAutocomplete.types';

type SearchBarAutocompleteProps<T extends { id: string | number }> = Omit<
  CustomAutocompleteProps<T>,
  'label'
> & {
  label?: string;
};

export const SearchBarAutocomplete = <T extends { id: string | number }>({
  label = '',
  ...props
}: SearchBarAutocompleteProps<T>) => {
  const { t } = useTranslation('autocomplete');

  return (
    <CustomAutocomplete
      {...props}
      label={label}
      placeholder="buscar.."
      startAdornment={
        <InputAdornment position="start">
          <FiSearch style={{ color: '#56585A' }} />
        </InputAdornment>
      }
    />
  );
};

export default SearchBarAutocomplete;
