import { HeaderSeparator } from "../../slots/HeaderSeparator";
import { WarehouseHeaderProps } from "./types/WharehouseHeader.types";
import WarehouseHeaderCenter from "./WarehouseHeaderCenter";
import { WarehouseHeaderEnd } from "./WarehouseHeaderEnd";
import WarehouseHeaderStart from "./WarehouseHeaderStart";

export const WarehouseHeader = ({
  center,
  end,
  separator,
}: WarehouseHeaderProps) => {
  return (
    <header className="bg-background2 flex h-[85px] w-full items-center px-4">
      <WarehouseHeaderStart />
      <HeaderSeparator collapsed={separator?.collapsed ?? false} />
      <WarehouseHeaderCenter collapsed={center?.collapsed ?? false} />
      <HeaderSeparator collapsed={separator?.collapsed ?? false} />
      <WarehouseHeaderEnd
        collapsed={end?.collapsed ?? false}
        onChangeLanguage={end?.onChangeLanguage ?? (() => {})}
        selectedLanguage={end?.selectedLanguage ?? "es-ES"}
        user={end?.user ?? ""}
        warehouseName={end?.warehouseName ?? ""}
      />
    </header>
  );
};

export default WarehouseHeader;
