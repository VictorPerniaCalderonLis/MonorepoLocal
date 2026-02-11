import { useTolgee, useTranslate } from '@tolgee/react';
import { getActualDate } from '../../../../utils/getActualDate';
import { WarehouseHeaderCenterProps } from './types/WharehouseHeader.types';
export const WarehouseHeaderCenter = ({
  collapsed,
}: WarehouseHeaderCenterProps) => {
  const { t } = useTranslate();
  const { getLanguage } = useTolgee();
  const language = getLanguage();

  console.log('lan', language);
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
          {getActualDate(language as string)}
        </span>
      </div>
    </div>
  );
};

export default WarehouseHeaderCenter;
