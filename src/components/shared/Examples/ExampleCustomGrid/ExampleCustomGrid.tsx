import { useTranslation } from 'react-i18next';

export const ExampleCustomGrid = ({
  data,
  isLoading,
  title,
}: {
  data: any;
  isLoading: boolean;
  title?: string;
}) => {
  const { t } = useTranslation('common');
  if (isLoading) {
    return <div className="p-4">{t('loading')}</div>;
  }

  if (!data) {
    return <div className="p-4">{t('noDataFound')}</div>;
  }

  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'boolean') return value ? 'Sí' : 'No';
    if (value instanceof Date) return value.toLocaleDateString();
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  return (
    <div className="p-6">
      {title && <h3 className="mb-4 text-lg font-bold">{title}</h3>}
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex">
            <strong className="min-w-[120px]">{key}:</strong>
            <span className="ml-2">{formatValue(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
