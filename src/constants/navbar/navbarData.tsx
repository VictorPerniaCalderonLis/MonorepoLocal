import FactCheckIcon from '@mui/icons-material/FactCheck';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavbarItem } from '../../models/constants/Navbar/NavbarData';
export const navbarData: NavbarItem[] = [
  {
    path: '/ruta1',
    label: 'request',
    icon: <FactCheckIcon sx={{ fontSize: 30 }} />,
    fieldIcon: <FactCheckIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: '/ruta2',
    label: 'administration',
    icon: <SettingsIcon sx={{ fontSize: 30 }} />,
    fieldIcon: <SettingsIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: '/ruta3',
    label: 'notifications',
    icon: <NotificationsNoneIcon sx={{ fontSize: 30 }} />,
    fieldIcon: <NotificationsNoneIcon sx={{ fontSize: 30 }} />,
    hasBadge: true,
  },
];
