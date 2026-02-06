export const HEADER_TYPE = {
  LINE_OPERATOR: 'line_operator',
  WAREHOUSE: 'warehouse',
  QUALITY: 'quality',
} as const;

export type HeaderType = (typeof HEADER_TYPE)[keyof typeof HEADER_TYPE];

export interface HeaderProps {
  headerType?: HeaderType;
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
}
