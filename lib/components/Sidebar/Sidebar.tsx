import { useSidebarStore } from '../../store/sidebarStore';
import { Navbar } from './Navbar/Navbar';
import { SidebarProps } from './Navbar/type/SidebarProps';

export const Sidebar = ({ items, badgeCount }: SidebarProps) => {
  const { collapsed, toggleCollapsed } = useSidebarStore();

  return (
    <aside
      className={`relative z-10 ${
        collapsed ? 'w-[114px]' : 'w-[246px]'
      } duration-300 ease-in-out select-none`}
    >
      <div className="sticky top-0 flex h-dvh flex-col items-center text-sm">
        <Navbar
          collapsed={collapsed}
          filteredNavbarData={items}
          toggleCollapsed={toggleCollapsed}
          badgeCount={badgeCount}
        />
      </div>
    </aside>
  );
};
