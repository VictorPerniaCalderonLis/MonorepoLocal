import { FormikProps } from 'formik';
import { createContext, ReactNode, useContext, useMemo } from 'react';
import * as Yup from 'yup';

export interface CustomFormContextType<T = any> {
  formik: FormikProps<T> | null;
  validationSchema: Yup.AnySchema | null;
  extraValues?: Record<string, unknown>;
  extraConfig?: Record<string, unknown>;
}

const CustomFormContext = createContext<CustomFormContextType<any> | undefined>(
  undefined,
);

export function useCustomFormContext<T = any>(): CustomFormContextType<T> {
  const context = useContext(CustomFormContext);
  if (!context) {
    throw new Error(
      'useCustomFormContext must be used within a CustomFormProvider',
    );
  }
  return context as CustomFormContextType<T>;
}

interface CustomFormProviderProps<T = any> {
  formik: FormikProps<T>;
  validationSchema: Yup.AnySchema;
  children: ReactNode;
  extraValues?: Record<string, unknown>;
  extraConfig?: Record<string, unknown>;
}

export const CustomFormProvider = <T,>({
  formik,
  validationSchema,
  children,
  extraValues,
  extraConfig,
}: CustomFormProviderProps<T>) => {
  const value = useMemo(
    () => ({
      formik,
      validationSchema,
      extraValues,
      extraConfig,
    }),
    [formik, validationSchema, extraValues, extraConfig],
  );

  return (
    <CustomFormContext.Provider value={value}>
      {children}
    </CustomFormContext.Provider>
  );
};
