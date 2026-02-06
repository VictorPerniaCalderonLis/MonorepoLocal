import { useTranslation } from 'react-i18next';
import { getActualDate } from '../../../../../utils/getActualDate';
export const WarehouseHeaderCenter = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
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
