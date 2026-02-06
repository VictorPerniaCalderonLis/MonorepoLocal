import { ReactElement } from 'react';
import { Header } from '../../components/static';
import { Sidebar } from '../../components/static/Sidebar/Sidebar';

export const RowFlexLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header headerType={'warehouse'} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
