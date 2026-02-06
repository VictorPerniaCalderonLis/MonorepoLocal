import { HEADER_TYPE, HeaderProps } from './types/header.types';
import LineOperatorHeader from './variants/LineOperatorHeader/LineOperatorHeader';
import QualityHeader from './variants/QualityHeader/QualityHeader';
import WarehouseHeader from './variants/WarehouseHeader/WarehouseHeader';

export const Header = ({ headerType }: HeaderProps) => {
  const renderHeaderByType = () => {
    switch (headerType) {
      case HEADER_TYPE.LINE_OPERATOR:
        return <LineOperatorHeader />;

      case HEADER_TYPE.WAREHOUSE:
        return <WarehouseHeader />;

      case HEADER_TYPE.QUALITY:
        return <QualityHeader />;

      default:
        return null;
    }
  };
  return (
    <header className="bg-background2 flex h-[85px] items-center px-4">
      {renderHeaderByType()}
    </header>
  );
};

export default Header;
