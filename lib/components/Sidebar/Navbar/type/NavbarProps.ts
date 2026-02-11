import { NavbarItem } from '../../../types/Navbar/NavbarItem';

export interface NavbarProps {
  filteredNavbarData: NavbarItem[];
  collapsed: boolean;
  toggleCollapsed: () => void;
  badgeCount?: number;
}
