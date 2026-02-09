import { useTranslation } from 'react-i18next';
import { useSidebarStore } from '../../../../../store/sidebarStore';
import { getActualDate } from '../../../../../utils/getActualDate';
export const WarehouseHeaderCenter = () => {
  const { t, i18n } = useTranslation('common');

  const { collapsed } = useSidebarStore();

  return (
    <div
      className={`hidden min-w-0 flex-1 items-center justify-end gap-4 ${
        collapsed ? 'min-[856px]:flex' : 'min-[945px]:flex'
      }`}
    >
      <div className="flex flex-col leading-tight">
        <span className="font-roboto text-headerText text-xs leading-normal font-extralight uppercase">
          {t('actualDate')}
        </span>

        <span className="font-roboto text-headerText text-base leading-normal font-medium">
          {getActualDate(i18n.language)}
        </span>
      </div>
    </div>
  );
};

export default WarehouseHeaderCenter;
