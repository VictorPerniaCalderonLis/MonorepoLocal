import { FetchOption } from './CustomAutocomplete.types';

export const buildQueryInput = (
  key: string,
  value: string | number,
  prefix: '?' | '&',
) => `${prefix}${key}=${value}`;

export const buildFetchInput = (
  fetchOption: FetchOption | undefined,
  value: string | number,
  prefix: '?' | '&',
): string => {
  if (!fetchOption?.filtredValueName) return '';
  return buildQueryInput(fetchOption.filtredValueName, value, prefix);
};
