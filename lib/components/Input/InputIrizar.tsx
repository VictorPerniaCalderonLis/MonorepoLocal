import { TextField } from '@mui/material';
import clsx from 'clsx';
import { get, merge } from 'lodash';
import React, { useMemo } from 'react';
import { getMaxLength } from '../../utils/getFieldMaxLength';
import { isFieldRequired } from '../../utils/isFieldRequired';
import { getInputSx } from '../shared/styles/input.styles';
import { InputIrizarProps } from './InputIrizar.types';

export const InputIrizar = <T = Record<string, unknown>,>({
  formik,
  label,
  id,
  type = 'text',
  slotProps = { inputLabel: { shrink: true } },
  className = 'col-span-1',
  error,
  helperText,
  disableNegativeAndSpecialChars = false,
  multiline = false,
  rows,
  maxRows,
  hideNumberSpinners = false,
  ...props
}: InputIrizarProps<T>) => {
  const maxLength = getMaxLength(formik?.validationSchema, id);
  const currentValue = (get(formik?.values, id, '') as string) ?? '';
  const currentLength = currentValue.length;
  const isTouched = get(formik?.touched, id, false);
  const fieldError = get(formik?.errors, id, '');
  const computedSx = useMemo(
    () => merge({}, getInputSx(hideNumberSpinners), props.sx),
    [hideNumberSpinners, props.sx],
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      disableNegativeAndSpecialChars &&
      type === 'number' &&
      event.target.value !== ''
    ) {
      const numValue = Number.parseFloat(event.target.value);
      if (numValue < 0) {
        event.target.value = '0';
      }
    }

    props.onChange?.(event);
    if (!formik) return;

    const value =
      type === 'number' && event.target.value === ''
        ? null
        : event.target.value;

    formik.setFieldValue(id, value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      disableNegativeAndSpecialChars &&
      ['-', '+', 'e', 'E', '.'].includes(e.key)
    ) {
      e.preventDefault();
    }
    props.onKeyDown?.(e);
  };

  return (
    <div className={clsx('flex flex-col', className)}>
      <TextField
        required={
          props.required ?? isFieldRequired(formik?.validationSchema, id)
        }
        {...props}
        sx={computedSx}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        slotProps={slotProps}
        label={label}
        name={id}
        data-cy={id}
        type={type}
        onChange={handleChange}
        onBlur={formik?.handleBlur}
        error={error ?? (isTouched && Boolean(fieldError))}
        helperText={helperText ?? (isTouched && (fieldError as string))}
        variant="outlined"
        size="small"
        onKeyDown={handleKeyDown}
      />

      {maxLength && (
        <div className="flex w-full justify-end">
          <span
            className={clsx('text-xs', {
              'text-error': currentLength > maxLength,
              'text-gray-400': currentLength <= maxLength,
            })}
          >
            {currentLength} / {maxLength}
          </span>
        </div>
      )}
    </div>
  );
};
