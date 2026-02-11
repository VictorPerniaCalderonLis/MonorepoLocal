import { ReactElement } from 'react';
import { Header } from '../components/Header/Header';
import { HeaderProps } from '../components/Header/types/header.types';
import { SidebarProps } from '../components/Sidebar/Navbar/type/SidebarProps';
import { Sidebar } from '../components/Sidebar/Sidebar';
export const MainLayout = ({
  children,
  headerprops,
  sidebarProps,
}: {
  children: ReactElement;
  headerprops: HeaderProps;
  sidebarProps: SidebarProps;
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...sidebarProps} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header {...headerprops} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
