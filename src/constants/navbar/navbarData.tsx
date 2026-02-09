import { BsCardChecklist } from 'react-icons/bs';
import { IoMdNotificationsOutline, IoMdSettings } from 'react-icons/io';
import { NavbarItem } from '../../models/constants/Navbar/NavbarData';
export const navbarData: NavbarItem[] = [
  {
    path: '/ruta1',
    label: 'request',
    icon: <BsCardChecklist size={30} />,
    fieldIcon: <BsCardChecklist size={30} />,
  },
  {
    path: '/ruta2',
    label: 'administration',
    icon: <IoMdSettings size={30} />,
    fieldIcon: <IoMdSettings size={30} />,
  },
  {
    path: '/ruta3',
    label: 'notifications',
    icon: <IoMdNotificationsOutline size={30} />,
    fieldIcon: <IoMdNotificationsOutline size={30} />,
    hasBadge: true,
  },
];
