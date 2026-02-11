import { useTolgee } from '@tolgee/react';
import { ReactElement } from 'react';
import { Header } from '../../../lib/components/Header/Header';
import { HEADER_TYPE } from '../../../lib/constants/HeaderType/HeaderType';
import { Sidebar } from '../../components/static/Sidebar/Sidebar';
import { useSidebarStore } from '../../store/sidebarStore';

export const RowFlexLayout = ({ children }: { children: ReactElement }) => {
  const { collapsed } = useSidebarStore();
  const { getLanguage, changeLanguage } = useTolgee();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          headerType={HEADER_TYPE.WAREHOUSE}
          warehouse={{
            end: {
              user: 'test',
              warehouseName: 'testWarehouse',
              selectedLanguage: getLanguage() as string,
              onChangeLanguage: changeLanguage,
              collapsed,
            },
          }}
        />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
