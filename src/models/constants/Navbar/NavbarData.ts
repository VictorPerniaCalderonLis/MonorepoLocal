import { ReactNode } from 'react';

export interface NavbarItem {
  path: string;
  label: string;
  icon?: any;
  fieldIcon?: ReactNode;
  children?: NavbarItem[];
  hasBadge?: boolean;
}
