import { ReactNode } from 'react';

export interface NavbarItem {
  path: string;
  label: string;
  icon?: ReactNode;
  fieldIcon?: ReactNode;
  children?: NavbarItem[];
}
