import { HeaderProps } from '../../types/header.types';

export const LineOperatorHeader = ({ start, center, end }: HeaderProps) => {
  return (
    <header className="bg-background2 flex h-[85px] w-full items-center px-4">
      {start && <div className="flex shrink-0 items-center">{start}</div>}

      {start && center && <div className="mx-4 h-6 w-px bg-gray-300" />}

      {center && (
        <div className="flex min-w-0 flex-1 items-center justify-between">
          {center}
        </div>
      )}

      {center && end && <div className="mx-4 h-6 w-px bg-gray-300" />}

      {end && <div className="flex shrink-0 items-center gap-3">{end}</div>}
    </header>
  );
};

export default LineOperatorHeader;
