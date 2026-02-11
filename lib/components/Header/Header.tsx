import { HEADER_TYPE } from "../../constants/HeaderType/HeaderType";
import { HeaderProps } from "./types/header.types";
import LineOperatorHeader from "./variants/LineOperatorHeader/LineOperatorHeader";
import QualityHeader from "./variants/QualityHeader/QualityHeader";
import WarehouseHeader from "./variants/WarehouseHeader/WarehouseHeader";

export const Header = (props: HeaderProps) => {
  switch (props.headerType) {
    case HEADER_TYPE.WAREHOUSE:
      return <WarehouseHeader {...props.warehouse} />;
    case HEADER_TYPE.QUALITY:
      return <QualityHeader {...props.quality} />;
    case HEADER_TYPE.LINE_OPERATOR:
      return <LineOperatorHeader {...props.lineOperator} />;
    default:
      return null;
  }
};
