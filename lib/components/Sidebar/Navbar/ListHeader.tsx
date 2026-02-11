import { styled } from '@mui/material';

export const ListHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'highlighted',
})<{
  highlighted?: boolean;
}>(({ theme, highlighted }) => ({
  fontWeight: highlighted ? 600 : 500,
  fontSize: 13,
  color: highlighted ? theme.palette.primary.main : theme.palette.text.primary,
  padding: '8px 16px 4px 16px',
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  backgroundColor: 'inherit',
}));
