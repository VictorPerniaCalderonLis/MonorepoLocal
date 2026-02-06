import { useCreateApiHooks } from '@lis-data-solutions/lis-query';
import { FormikProps } from 'formik';
import toast from 'react-hot-toast';
import { exampleUserService } from '../../../../../services/Examples/ExampleBaseService_usersService/ExampleBaseService';

export function useExampleUserModule(formik?: FormikProps<any> | null) {
  const { useExampleGetUserByIdQuery, useExampleDeleteUserByIdMutation } =
    useCreateApiHooks(exampleUserService, 'example', {
      toastConfig: {
        promiseToast: (promise: any, options: any) =>
          toast.promise(promise, {
            loading: options.pending ?? 'Cargando usuario...',
            success: options.success ?? 'Usuario obtenido correctamente',
            error: options.error,
          }),
        enabledFor: 'queries',
        defaultMessages: {
          pending: 'Obteniendo usuario...',
          success: 'Usuario cargado',
          error: (error: any) => `Error: ${error.message}`,
        },
      },
    });

  const deleteUser = useExampleDeleteUserByIdMutation();

  // Handler para cambiar el id
  const handleChangeId = (delta: number) => {
    if (!formik) return;
    const currentId = Number(formik.values.id) || 0;
    let newId = currentId + delta;
    if (newId < 0) newId = 0;
    formik.setFieldValue('id', newId);
  };

  // Handler para eliminar usuario
  const handleDeleteUser = () => {
    if (formik?.values.id) {
      deleteUser.mutate([formik.values.id]);
    }
  };

  return {
    useExampleGetUserByIdQuery,
    handleChangeId,
    handleDeleteUser,
  };
}
