import { TextFieldProps } from '@mui/material';
import { FormikProps } from 'formik';

interface FormikWithSchema<T> extends FormikProps<T> {
  validationSchema?: unknown;
}

export interface InputIrizarProps<T = Record<string, unknown>>
  extends Omit<TextFieldProps, 'name' | 'error' | 'helperText'> {
  formik: FormikWithSchema<T>;
  id: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  error?: boolean;
  helperText?: React.ReactNode;
  disableNegativeAndSpecialChars?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  hideNumberSpinners?: boolean;
}
