import { HEADER_TYPE } from "../../../constants/HeaderType/HeaderType";
import { WarehouseHeaderProps } from "../variants/WarehouseHeader/types/WharehouseHeader.types";

export interface WarehouseHeaderVariantProps {
  headerType: HEADER_TYPE.WAREHOUSE;
  warehouse: WarehouseHeaderProps;
}

export interface QualityHeaderVariantProps {
  headerType: HEADER_TYPE.QUALITY;
  quality: any;
}

export interface LineOperatorHeaderVariantProps {
  headerType: HEADER_TYPE.LINE_OPERATOR;
  lineOperator: any;
}
export type HeaderProps =
  | WarehouseHeaderVariantProps
  | QualityHeaderVariantProps
  | LineOperatorHeaderVariantProps;
