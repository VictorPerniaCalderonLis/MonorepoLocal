// import { useAuth } from '@lis-data-solutions/lis-security-keycloak';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogOutOutline } from 'react-icons/io5';
import { RxChevronLeft } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import { logoData } from '../../../../constants/logo/logoData';
import { navbarData } from '../../../../constants/navbar/navbarData';
import { NavbarItem } from '../../../../models/constants/Navbar/NavbarData';
import { useSidebarStore } from '../../../../store/sidebarStore';
import { NavbarItem as NavbarItemComponent } from './NavbarItem';
export const Navbar = () => {
  const { collapsed, toggleCollapsed } = useSidebarStore();
  // TODO: en caso de tener autenticación por @lis-data-solutions/lis-security-keycloak
  // const { hasPermission } = useAuth();
  const { t } = useTranslation('static');
  const location = useLocation();
  const [filteredNavbarData] = useState<NavbarItem[]>(navbarData);

  // TODO: en caso de tener autenticación por @lis-data-solutions/lis-security-keycloak
  // const [filteredNavbarData] = useState<NavbarItem[]>(() => filterNavbarData(navbarData, hasPermission));

  return (
    <div className="z-10 flex w-full flex-1 grow">
      <div className="flex h-full min-h-dvh w-full flex-col rounded-r-lg bg-white shadow transition-all duration-300 ease-in-out">
        <button
          onClick={toggleCollapsed}
          className={`hover:text-primary absolute top-10 -right-10 transform text-2xl transition-transform duration-300 ease-in-out hover:scale-110 ${collapsed ? '' : 'absolute -right-12'}`}
        >
          <RxChevronLeft
            size={33}
            className={`transition-all duration-300 ${collapsed ? '-rotate-180' : ''} ${location.pathname === '/' ? 'text-white' : 'text-black'} `}
          />
        </button>

        <div className="flex justify-center py-7 transition-all duration-300 ease-in-out">
          <a href="/">
            <img
              alt={t('logo.' + logoData.alt)}
              src={!collapsed ? logoData.logotipo : logoData.isologo}
              className={`pointer-events-none h-12 transition-opacity duration-300 ${collapsed ? 'h-10' : 'h-16'}`}
              onClick={toggleCollapsed}
            />
          </a>
        </div>
        <nav className="flex flex-1 flex-col justify-between px-2">
          <ul
            className={`overflow-x-hidden overflow-y-auto ${collapsed ? 'space-y-4' : ''}`}
            style={{
              height: 'calc(100dvh - 250px)',
            }}
          >
            {filteredNavbarData.map((item) => (
              // todo: hacer esto bien
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
