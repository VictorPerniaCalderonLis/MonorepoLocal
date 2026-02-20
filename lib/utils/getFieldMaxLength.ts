export const getMaxLength = (schema: any, fieldName: string) => {
  if (!schema?.fields) return null;

  const keys = fieldName.split(".");
  let field = schema.fields;

  for (const key of keys) {
    if (!field[key]) return null;
    field = field[key].fields ? field[key].fields : field[key];
  }

  if (field?.tests) {
    const maxTest = field.tests.find(
      (test: any) => test.OPTIONS?.name === "max"
    );
    return maxTest ? maxTest.OPTIONS.params.max : null;
  }

  return null;
};
