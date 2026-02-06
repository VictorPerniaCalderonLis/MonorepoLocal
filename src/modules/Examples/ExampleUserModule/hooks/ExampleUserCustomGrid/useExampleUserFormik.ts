import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserFormValues } from '../../../../../models/Examples/ExampleUsers';

export function useExampleUserFormik() {
  const initialValues: UserFormValues = { id: '' };

  const validationSchema = Yup.object().shape({
    id: Yup.number()
      .typeError('Debe ser un número')
      .min(0, 'El ID no puede ser negativo')
      .required('Campo requerido'),
  });

  const formik = useFormik<UserFormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        console.log('⏳ Enviando formulario...');
        await new Promise((res) => setTimeout(res, 500));
        actions.setFieldValue('id', values.id);
        console.log('✅ Formulario enviado con éxito:', values);
      } catch (error) {
        console.error('❌ Error al enviar formulario:', error);
      } finally {
        actions.setSubmitting(false);
      }
    },
    validate: (values) => {
      console.log('🔍 Validando...', values);
    },
    onReset: () => {
      console.log('🔄 Formulario reseteado');
    },
  });

  const extraValues = { userType: 'admin', theme: 'dark' };
  const extraConfig = { estado: true, maxSteps: 3 };

  return { formik, validationSchema, extraValues, extraConfig };
}
