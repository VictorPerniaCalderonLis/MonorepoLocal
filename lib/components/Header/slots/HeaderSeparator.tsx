import { WarehouseHeaderSeparatorProps } from "../variants/WarehouseHeader/types/WharehouseHeader.types";

export const HeaderSeparator = ({
  collapsed,
}: WarehouseHeaderSeparatorProps) => {
  return (
    <div
      className={`mx-4 hidden h-6 w-px bg-gray-300 ${
        collapsed ? "min-[856px]:block" : "min-[945px]:block"
      }`}
    />
  );
};
