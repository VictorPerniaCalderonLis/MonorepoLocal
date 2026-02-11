import { useTolgee } from '@tolgee/react';
import { HEADER_TYPE } from '../lib/constants/HeaderType/HeaderType';
import { MainLayout } from '../lib/layouts/MainLayout';
import { navbarData } from './constants/navbar/navbarData';
import { AppRouter } from './router';
import { useSidebarStore } from './store/sidebarStore';

export const App = () => {
  const { collapsed } = useSidebarStore();
  const { getLanguage, changeLanguage } = useTolgee();

  return (
    <MainLayout
      sidebarProps={{ items: navbarData }}
      headerprops={{
        headerType: HEADER_TYPE.WAREHOUSE,
        warehouse: {
          end: {
            user: 'test',
            warehouseName: 'testWarehouse',
            selectedLanguage: getLanguage() as string,
            onChangeLanguage: changeLanguage,
            collapsed,
          },
        },
      }}
    >
      <AppRouter />
    </MainLayout>
  );
};
