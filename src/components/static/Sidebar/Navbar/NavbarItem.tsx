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
    <>
      <li key={item.label} className="group flex items-center justify-center">
        <button
          onClick={item.children ? handleMenuClick : () => navigate(item.path)}
          aria-controls={`menu-${item.label}`}
          className={`hover:text-primary flex h-auto flex-col items-center justify-center gap-2 px-2 py-2 transition-all duration-200 ease-in-out hover:translate-x-1 ${
            isActive ? 'text-primary font-medium' : ''
          }`}
        >
          <span
            className={`${collapsed && (isActive ? 'bg-secondary text-primary' : 'group-hover:bg-primary/10')} rounded-full p-2 transition-all duration-200`}
          >
            {isActive && !collapsed && item.fieldIcon
              ? item.fieldIcon
              : item.icon}
          </span>
          {!collapsed && (
            <span
              className={`${isActive ? 'text-primaryText hover:text-primaryText font-medium' : ''} text-center text-wrap transition-opacity duration-300 ease-in-out`}
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
            // grupo activo
            const groupActive = isGroupActive(
              item.path,
              subItem.path,
              idx,
              location.pathname,
            );

            // algun hijo activo
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
                      p.path === location.pathname ||
                      (groupActive && pIdx === 0)
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
    </>
  );
};
