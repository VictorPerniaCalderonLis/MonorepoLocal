export interface WarehouseHeaderBaseProps {
  collapsed?: boolean;
}

export interface WarehouseHeaderStartProps extends WarehouseHeaderBaseProps {}
export interface WarehouseHeaderCenterProps extends WarehouseHeaderBaseProps {}
export interface WarehouseHeaderSeparatorProps extends WarehouseHeaderBaseProps {}
export interface WarehouseHeaderCollapsedProps extends WarehouseHeaderBaseProps {}
export interface WarehouseHeaderEndProps extends WarehouseHeaderBaseProps {
  selectedLanguage: string;
  onChangeLanguage: (language: string) => void;
  user: string;
  warehouseName: string;
}

export interface WarehouseHeaderProps {
  start?: WarehouseHeaderStartProps;
  center?: WarehouseHeaderCenterProps;
  end?: WarehouseHeaderEndProps;
  separator?: WarehouseHeaderSeparatorProps;
}
