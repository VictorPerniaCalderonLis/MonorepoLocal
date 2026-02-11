import { FC, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children = 'Click me',
  variant = 'primary',
  ...props
}) => {
  return (
    <button {...props} data-variant={variant}>
      {children}
    </button>
  );
};
