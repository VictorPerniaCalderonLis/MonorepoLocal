import { NavbarItem } from "../components/types/Navbar/NavbarItem";

// determina si un grupo esta activo (por path o si es el primero y estamos en el padre)
export function isGroupActive(
  itemPath: string,
  subItemPath: string,
  idx: number,
  currentPath: string,
): boolean {
  const isRoot = itemPath === "/leveler" && currentPath === "/leveler";
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
