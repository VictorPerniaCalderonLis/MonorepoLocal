import { Divider, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavbarItem as NavbarItemType } from '../../../../models/constants/Navbar/NavbarData';
import {
  isAnyChildActive,
  isGroupActive,
} from '../../../../utils/navbarDataUtils';
import { ListHeader } from './ListHeader';

interface NavbarItemProps {
  item: NavbarItemType;
  isActive: boolean;
  collapsed: boolean;
  t: (key: string) => string;
}

export const NavbarItem = ({
  item,
  isActive,
  collapsed,
  t,
}: NavbarItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <li key={item.label} className="group flex items-center justify-center">
      <button
        onClick={item.children ? handleMenuClick : () => navigate(item.path)}
        aria-controls={`menu-${item.label}`}
        className={`flex overflow-hidden transition-[background-color,transform] duration-200 ease-out hover:translate-x-0.5 ${
          collapsed
            ? 'h-16 w-[90px] flex-col items-center justify-center rounded-2xl'
            : 'h-16 w-full max-w-[222px] flex-row items-center gap-4 rounded-[18px] px-6'
        } ${isActive ? 'bg-primary font-medium text-white' : 'bg-white text-black'} `}
      >
        <span
          className={`flex h-8 w-8 items-center justify-center ${
            isActive ? 'text-white' : 'text-black'
          }`}
        >
          {isActive && !collapsed && item.fieldIcon
            ? item.fieldIcon
            : item.icon}
        </span>

        {!collapsed && (
          <span
            className={`text-sm leading-none uppercase ${
              isActive ? 'text-white' : 'text-black'
            }`}
          >
            {t('navbar.' + item.label)}
          </span>
        )}
      </button>
      <Menu
        id={`menu-${item.label}`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'left' }}
      >
        {item.children?.map((subItem: NavbarItemType, idx: number) => {
          const groupActive = isGroupActive(
            item.path,
            subItem.path,
            idx,
            location.pathname,
          );

          const anyChildActive = isAnyChildActive(
            subItem,
            groupActive,
            location.pathname,
          );

          return (
            <div key={subItem.label + '-group'}>
              {idx > 0 && <Divider />}
              <ListHeader highlighted={anyChildActive}>
                <div className="flex items-center gap-2 underline">
                  {anyChildActive ? subItem.fieldIcon : subItem.icon}
                  {t('navbar.' + subItem.label)}
                </div>
              </ListHeader>
              {subItem.children?.map((p: NavbarItemType, pIdx: number) => (
                <MenuItem
                  key={p.path}
                  onClick={handleClose}
                  component={Link}
                  to={p.path}
                  dense
                  sx={
                    p.path === location.pathname || (groupActive && pIdx === 0)
                      ? {
                          backgroundColor: (theme) =>
                            theme.palette.action.selected,
                        }
                      : {}
                  }
                >
                  {t('navbar.' + p.label)}
                </MenuItem>
              ))}
            </div>
          );
        })}
      </Menu>
    </li>
  );
};
