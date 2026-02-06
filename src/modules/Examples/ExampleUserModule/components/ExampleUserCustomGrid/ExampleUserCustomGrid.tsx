import { ExampleCustomGrid } from '../../../../../components/shared';
import { CustomFormProvider } from '../../../../../contexts';
import { UserFormValues } from '../../../../../models/Examples/ExampleUsers';
import {
  useExampleUserFormik,
  useExampleUserModule,
} from '../../hooks/ExampleUserCustomGrid';
import { ExampleUserForm } from './ExampleUserForm';

export const ExampleUserCustomGrid = () => {
  const { useExampleGetUserByIdQuery } = useExampleUserModule();

  const { formik, validationSchema, extraValues, extraConfig } =
    useExampleUserFormik();

  const { data: user, isLoading } = useExampleGetUserByIdQuery(1);

  return (
    <CustomFormProvider<UserFormValues>
      formik={formik}
      validationSchema={validationSchema}
      extraValues={extraValues}
      extraConfig={extraConfig}
    >
      <div>
        <ExampleCustomGrid
          data={user}
          isLoading={isLoading}
          title="Example use of API"
        />
        <ExampleUserForm />
      </div>
    </CustomFormProvider>
  );
};
