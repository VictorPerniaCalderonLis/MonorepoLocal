import { HiCog6Tooth, HiOutlineCog6Tooth } from 'react-icons/hi2';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { NavbarItem } from '../../models/constants/Navbar/NavbarData';

export const navbarData: NavbarItem[] = [
  {
    path: '/',
    label: 'home',
    icon: <IoHomeOutline size={30} />,
    fieldIcon: <IoHome size={30} />,
  },
  {
    path: '/examples',
    label: 'examples',
    icon: <HiOutlineCog6Tooth size={30} />,
    fieldIcon: <HiCog6Tooth size={30} />,
    children: [
      {
        path: '/examples',
        label: 'examples',
        icon: <HiOutlineCog6Tooth size={15} />,
        fieldIcon: <HiCog6Tooth size={15} />,
        children: [
          {
            path: '/examples/example1',
            label: 'example1',
          },
          {
            path: '/examples/example2',
            label: 'example2',
          },
        ],
      },
    ],
  },
];
