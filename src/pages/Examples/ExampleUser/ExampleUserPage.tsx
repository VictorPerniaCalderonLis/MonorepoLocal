import { PageBreadcrumbsLayout } from '../../../layouts';
import { ExampleUserCustomGrid } from '../../../modules/Examples/ExampleUserModule/components/ExampleUserCustomGrid/ExampleUserCustomGrid';

export const ExampleUserPage = () => {
  return (
    <PageBreadcrumbsLayout>
      <ExampleUserCustomGrid />
    </PageBreadcrumbsLayout>
  );
};
