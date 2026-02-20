import { Autocomplete } from '@mui/material';
import { debounce, get, merge } from 'lodash';
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { isFieldRequired } from '../../utils/isFieldRequired';
import { sortAlphanumeric } from '../../utils/sortAlphanumeric';
import { InputIrizar } from '../Input/InputIrizar';
import { defaultInputSx } from '../shared/styles/input.styles';
import { buildFetchInput, buildQueryInput } from './CustomAutocomplete.helpers';
import { CustomAutocompleteProps } from './CustomAutocomplete.types';

export const CustomAutocomplete = <T extends { id: string | number }>({
  formik,
  id,
  label,
  options,
  isLoading,
  getOptionLabel = (option: any) => option.name,
  fetchFuction,
  onSelectedChange,
  fetchOption,
  placeholder,
  startAdornment,
  ...props
}: CustomAutocompleteProps<T>) => {
  const { t } = useTranslation('autocomplete');
  const buttonClickedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [dynamicOptions, setDynamicOptions] = useState<T[]>(options ?? []);
  const [loadingDynamic, setLoadingDynamic] = useState(false);

  const fieldValue = get(formik.values, id, null);

  const orderedOptions = useMemo(() => {
    if (dynamicOptions.length === 0) return [];
    return sortAlphanumeric(dynamicOptions, getOptionLabel);
  }, [dynamicOptions]);

  const selectedOption = useMemo(
    () =>
      dynamicOptions.find((option) => option.id === fieldValue) ??
      (props.multiple ? ([] as unknown as T) : null),
    [dynamicOptions, fieldValue],
  );

  useEffect(() => {
    if (Array.isArray(options) && options.length > 0) {
      setDynamicOptions(options);
    }
  }, [options]);

  useEffect(() => {
    if (!fieldValue || !fetchFuction) return;

    const loadInitialOption = async () => {
      setLoadingDynamic(true);
      try {
        const input = fetchOption?.filtredId
          ? buildQueryInput('id', fieldValue, '&')
          : buildQueryInput('id', fieldValue, '?');

        const fetchedOptions = await fetchFuction({
          filtredId: fetchOption?.filtredId,
          input,
        });

        setDynamicOptions(fetchedOptions);
      } catch (error) {
        console.error('Error fetching selected option:', error);
      } finally {
        setLoadingDynamic(false);
      }
    };

    loadInitialOption();
  }, [fieldValue]);

  const handleSearch = useCallback(
    debounce(async (inputValue: string) => {
      if (!fetchFuction || !inputValue.trim() || inputValue.length <= 2) return;

      setLoadingDynamic(true);
      setHasSearched(false);

      try {
        const searchTerm = inputValue.split(',')[0];
        const input = fetchOption?.filtredId
          ? buildFetchInput(fetchOption, searchTerm, '&')
          : buildFetchInput(fetchOption, searchTerm, '?');

        const fetchedOptions = await fetchFuction({
          filtredId: fetchOption?.filtredId,
          input,
        });

        setDynamicOptions(fetchedOptions ?? []);
      } catch (error) {
        console.error('Error fetching options:', error);
      } finally {
        setHasSearched(true);
        setLoadingDynamic(false);
      }
    }, 300),
    [fetchFuction, fetchOption],
  );

  const handleInputChange = (_: React.SyntheticEvent, value: string) => {
    if (value) handleSearch(value);
  };

  const handleChange = (_: React.SyntheticEvent, value: T | null) => {
    formik.setFieldValue(id, value?.id ?? null);
    onSelectedChange?.(value);
    inputRef.current?.blur();
  };

  const handleOpen = () => {
    if (!buttonClickedRef.current) {
      if (props.disabled || !fetchOption) return;
      formik.setFieldValue(id, null);
    }
    buttonClickedRef.current = false;
  };

  const handleBlur = () => {
    if (!fieldValue && fetchOption) {
      setHasSearched(false);
      setDynamicOptions([]);
    }
  };

  const noOptionsText = useMemo(() => {
    const hasNoStaticOptions = !fetchFuction && options?.length === 0;
    const hasNoFetchedOptions =
      fetchFuction && hasSearched && orderedOptions.length === 0;

    return hasNoStaticOptions || hasNoFetchedOptions
      ? t('noResults')
      : t('search');
  }, [fetchFuction, options, hasSearched, orderedOptions]);

  return (
    <Autocomplete
      {...props}
      className={props.className}
      sx={merge({}, defaultInputSx, props.sx)}
      options={orderedOptions}
      loading={isLoading || loadingDynamic}
      disablePortal
      fullWidth
      data-cy={id}
      loadingText={t('loading')}
      noOptionsText={noOptionsText}
      value={selectedOption}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onOpen={handleOpen}
      onBlur={handleBlur}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(option, value) =>
        !!option && !!value && option.id === value.id
      }
      renderInput={(params) => {
        const { InputProps, ...rest } = params;

        const endAdornment = InputProps.endAdornment
          ? cloneElement(
              InputProps.endAdornment as React.ReactElement<{
                onMouseDown: (e: React.MouseEvent) => void;
              }>,
              {
                onMouseDown: (e: React.MouseEvent) => {
                  buttonClickedRef.current = true;
                  e.nativeEvent.stopImmediatePropagation();
                },
              },
            )
          : null;

        return (
          <InputIrizar
            {...rest}
            placeholder={placeholder}
            label={label}
            ref={inputRef}
            formik={formik}
            slotProps={{
              input: {
                ...InputProps,
                startAdornment: startAdornment ?? InputProps.startAdornment,
                endAdornment,
              },
              inputLabel: { shrink: true },
            }}
            required={isFieldRequired(formik.validationSchema, id)}
            error={
              get(formik.touched, id, false) &&
              Boolean(get(formik.errors, id, false))
            }
            helperText={
              get(formik.touched, id, false) && get(formik.errors, id, '')
                ? String(get(formik.errors, id, ''))
                : undefined
            }
          />
        );
      }}
    />
  );
};
