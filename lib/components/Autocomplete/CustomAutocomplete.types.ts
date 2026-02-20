import { AutocompleteProps } from '@mui/material';
import { ReactNode } from 'react';
export interface FetchOption {
  filtredId?: string | number;
  filtredValueName: string;
}

export interface CustomAutocompleteProps<T extends { id: string | number }>
  extends Omit<
    AutocompleteProps<T, false, false, false>,
    | 'id'
    | 'renderInput'
    | 'options'
    | 'value'
    | 'onChange'
    | 'loading'
    | 'onInputChange'
  > {
  formik: any;
  label: string;
  options?: T[];
  isLoading: boolean;
  id: string;
  onSelectedChange?: (value: T | null) => void;
  fetchOption?: FetchOption;
  fetchFuction?: (params: {
    filtredId?: string | number;
    input: string;
  }) => Promise<T[]>;
  startAdornment?: ReactNode;
  placeholder?: string;
}
