import { merge } from 'lodash';

export const defaultInputSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover fieldset': { borderColor: 'rgba(0, 0, 0, 0.5)' },
    '&.Mui-focused fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&.Mui-error fieldset': { borderColor: '#ef4444' },
    '& input': {
      color: 'rgba(0, 0, 0, 0.87)',
      caretColor: 'rgba(0, 0, 0, 0.87)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: '#ef4444',
  },
  '& .MuiInputLabel-root.Mui-focused.Mui-error': {
    color: '#ef4444',
  },
  '& input, & textarea': {
    color: 'rgba(0, 0, 0, 0.87)',
    caretColor: 'rgba(0, 0, 0, 0.87)',
  },
  '& input[type=date]::-webkit-calendar-picker-indicator': {
    opacity: 0.5,
    cursor: 'pointer',
  },
} as const;

export const getInputSx = (hideNumberSpinners: boolean) => {
  const noSpinnersSx = hideNumberSpinners
    ? {
        '& .MuiOutlinedInput-root': {
          '& input[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
          },
        },
      }
    : {};

  return merge({}, defaultInputSx, noSpinnersSx);
};
