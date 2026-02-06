import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogOutOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { navbarData } from '../../../../constants/navbar/navbarData';
import { NavbarItem } from '../../../../models/constants/Navbar/NavbarData';
import { useSidebarStore } from '../../../../store/sidebarStore';
import { NavbarItem as NavbarItemComponent } from './NavbarItem';
export const Navbar = () => {
  const { collapsed, toggleCollapsed } = useSidebarStore();
  const { t } = useTranslation('static');
  const location = useLocation();
  const [filteredNavbarData] = useState<NavbarItem[]>(navbarData);
  return (
    <div className="z-10 flex w-full flex-1 grow">
      <div className="flex h-full min-h-dvh w-full flex-col rounded-r-lg bg-white shadow transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center gap-4 p-4">
          <IconButton className="bg-transparent" onClick={toggleCollapsed}>
            {collapsed ? (
              <CloseRoundedIcon sx={{ color: 'var(--text-primary-color)' }} />
            ) : (
              <MenuRoundedIcon sx={{ color: 'var(--text-primary-color)' }} />
            )}
          </IconButton>
        </div>
        <nav className="flex flex-1 flex-col justify-between px-2">
          <ul
            className={`overflow-x-hidden overflow-y-auto ${collapsed ? 'space-y-4' : ''}`}
            style={{
              height: 'calc(100dvh - 250px)',
            }}
          >
            {filteredNavbarData.map((item) => (
              <NavbarItemComponent
                key={item.path}
                item={item}
                isActive={
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path)
                }
                collapsed={collapsed}
                t={t}
              />
            ))}
          </ul>
          <div className="flex justify-center p-4">
            <IoLogOutOutline size={25} />
          </div>
        </nav>
      </div>
    </div>
  );
};
