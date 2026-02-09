import { useSidebarStore } from '../../../../store/sidebarStore';

export const HeaderSeparator = () => {
  const { collapsed } = useSidebarStore();

  return (
    <div
      className={`mx-4 hidden h-6 w-px bg-gray-300 ${
        collapsed ? 'min-[856px]:block' : 'min-[945px]:block'
      }`}
    />
  );
};
