import { navbarData } from '../constants/navbar/navbarData';
import { NavbarItem } from '../models/constants/Navbar/NavbarData';

// genera una lista plana de { path, label } de forma recursiva
function flattenNav(
  data: NavbarItem[],
  result: { path: string; label: string }[] = [],
): { path: string; label: string }[] {
  for (const item of data) {
    result.push({ path: item.path, label: item.label });
    if (item.children) {
      flattenNav(item.children, result);
    }
  }
  return result;
}

// determina si un grupo esta activo (por path o si es el primero y estamos en el padre)
export function isGroupActive(
  itemPath: string,
  subItemPath: string,
  idx: number,
  currentPath: string,
): boolean {
  const isRoot = itemPath === '/leveler' && currentPath === '/leveler';
  return subItemPath === currentPath || (isRoot && idx === 0);
}

// determina si hijo esta activo (por path o si es el primero y el grupo esta activo)
export function isAnyChildActive(
  subItem: NavbarItem,
  isGroupActive: boolean,
  currentPath: string,
): boolean {
  if (!subItem.children) return false;
  return subItem.children.some(
    (p, i) => p.path === currentPath || (isGroupActive && i === 0),
  );
}

export const getLabel = (path: string) =>
  flattenNav(navbarData).find((i) => i.path === path)?.label || '';

export function filterNavbarData(
  navbarData: NavbarItem[],
  hasPermission: (resource: string, scope: string) => boolean,
) {
  return navbarData.filter((item) => {
    if (!item.label) return true;
    return hasPermission(item.label, 'view');
  });
}
