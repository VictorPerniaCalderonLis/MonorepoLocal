  export function isFieldRequired(schema: any, fieldName: string): boolean {
    if (!schema || !schema.fields) {
      return false;
    }
  
    const keys = fieldName.split("."); // Convierte "company.name" en ["company", "name"]
    let field = schema.fields;
  
    // Recorremos la estructura de fields hasta llegar al campo final
    for (const key of keys) {
      if (!field[key]) return false; // Si no existe la clave, retornamos false
      field = field[key].fields ? field[key].fields : field[key]; // Si hay más campos anidados, seguimos avanzando
    }
  
    // Verificamos si el campo es requerido según sus validaciones
    if (field?.exclusiveTests?.required === true) {
      return true;
    }
    if (field?.spec?.optional === false) {
      return true;
    }
  
    return false;
  }