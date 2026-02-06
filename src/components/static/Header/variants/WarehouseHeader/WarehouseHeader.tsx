import { HeaderSeparator } from '../../slots/HeaderSeparator';
import WarehouseHeaderCenter from './WarehouseHeaderCenter';
import WarehouseHeaderEnd from './WarehouseHeaderEnd';
import WarehouseHeaderStart from './WarehouseHeaderStart';

export const WarehouseHeader = () => {
  return (
    <header className="bg-background2 flex h-[85px] w-full items-center px-4">
      <WarehouseHeaderStart />
      <div className="hidden min-[835px]:block">
        <HeaderSeparator />
      </div>
      <div className="hidden min-[835px]:block">
        <WarehouseHeaderCenter />
      </div>
      <div className="hidden min-[835px]:block">
        <HeaderSeparator />
      </div>
      <div className="ml-auto">
        <WarehouseHeaderEnd />
      </div>
    </header>
  );
};

export default WarehouseHeader;
