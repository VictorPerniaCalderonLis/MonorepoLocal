import { PageBreadcrumbsLayout } from '../../../layouts';
import { ExampleProject } from '../../../modules/Examples/ExampleProjectModule/components/ExampleProject';

export const ExampleProjectPage = () => {
  return (
    <PageBreadcrumbsLayout>
      <ExampleProject />
    </PageBreadcrumbsLayout>
  );
};
