import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { IoLogOutOutline } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
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
      <div className="flex h-full min-h-dvh w-full flex-col rounded-r-lg bg-white transition-all duration-700 ease-in-out">
        <div className="flex grow flex-col items-center pt-4">
          <IconButton className="bg-transparent" onClick={toggleCollapsed}>
            {collapsed ? (
              <IoMdClose
                size={30}
                style={{ color: 'var(--text-primary-color)' }}
              />
            ) : (
              <LuMenu
                size={30}
                style={{ color: 'var(--text-primary-color)' }}
              />
            )}
          </IconButton>

          <nav
            className="flex flex-1 grow flex-col justify-between pt-4"
            style={{ width: '100%' }}
          >
            <ul
              className={`'} overflow-x-hidden overflow-y-auto`}
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
            <div className="flex w-full justify-center pr-4 pb-4">
              <div className="flex cursor-pointer items-center gap-2">
                <IoLogOutOutline size={25} />
                {collapsed ? null : <span>Salir</span>}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
