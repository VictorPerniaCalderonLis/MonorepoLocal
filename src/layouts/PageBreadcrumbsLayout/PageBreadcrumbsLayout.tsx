import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { getLabel } from '../../utils/navbarDataUtils';

export const PageBreadcrumbsLayout = ({
  children,
}: {
  children: ReactElement;
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation('static');
  const paths = pathname === '/' ? [] : pathname.split('/').filter(Boolean);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              component={RouterLink}
              to="/"
            >
              {t('navbar.home')}
            </Link>
            {paths.map((_, idx) => {
              const to = '/' + paths.slice(0, idx + 1).join('/');
              const label = t(`navbar.${getLabel(to)}`);
              return idx === paths.length - 1 ? (
                <span className="text-primary font-semibold" key={to}>
                  {label}
                </span>
              ) : (
                <Link
                  underline="hover"
                  color="inherit"
                  component={RouterLink}
                  to={to}
                  key={to}
                >
                  {label}
                </Link>
              );
            })}
          </Breadcrumbs>
        </div>
        <div className="bg-secondaryBg h-[85dvh] w-[85dvw] overflow-auto rounded-xl p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
