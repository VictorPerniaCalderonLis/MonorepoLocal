import { HeaderSeparator } from '../../slots/HeaderSeparator';
import WarehouseHeaderCenter from './WarehouseHeaderCenter';
import WarehouseHeaderEnd from './WarehouseHeaderEnd';
import WarehouseHeaderStart from './WarehouseHeaderStart';

export const WarehouseHeader = () => {
  return (
    <header className="bg-background2 flex h-[85px] w-full items-center px-4">
      <WarehouseHeaderStart />

      <HeaderSeparator />

      <WarehouseHeaderCenter />

      <HeaderSeparator />

      <div className="ml-auto">
        <WarehouseHeaderEnd />
      </div>
    </header>
  );
};

export default WarehouseHeader;
