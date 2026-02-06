import { useSidebarStore } from '../../../store/sidebarStore';
import { Navbar } from './Navbar/Navbar';

export const Sidebar = () => {
  const { collapsed } = useSidebarStore();

  return (
    <aside
      className={`relative z-10 ${
        collapsed ? 'w-[114px]' : 'w-[246px]'
      } duration-300 ease-in-out select-none`}
    >
      <div className="sticky top-0 flex h-dvh flex-col items-center text-sm">
        <Navbar />
      </div>
    </aside>
  );
};
