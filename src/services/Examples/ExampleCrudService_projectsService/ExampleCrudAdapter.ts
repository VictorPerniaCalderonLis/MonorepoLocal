import {
  ExampleProjectApiCreateReq,
  ExampleProjectApiGetAllRes,
  ExampleProjectApiGetByIdRes,
  ExampleProjectApiUpdateReq,
  ExampleProjectCreateReq,
  ExampleProjectGetAllRes,
  ExampleProjectGetByIdRes,
  ExampleProjectUpdateReq,
} from '../../../models/Examples/ExampleProjects';

// Parser para un proyecto individual - devuelve ExampleProjectParsed
export const ApiToFrontExampleProjectGetByIdRes = (
  data: ExampleProjectApiGetByIdRes,
): ExampleProjectGetByIdRes => {
  const { project_id, created_at, updated_at, owner_id, is_public, ...rest } =
    data;

  return {
    id: project_id,
    createdAt: new Date(created_at),
    updatedAt: new Date(updated_at),
    ownerId: owner_id,
    isPublic: is_public,
    displayName: `${data.name} - ${data.status}`,
    budgetFormatted: `$${data.budget.toLocaleString()}`,
    ...rest, // name, description, status, budget se mantienen automáticamente
  };
};

// Parser para lista de proyectos - devuelve ExampleProjectGetAllRes
export const ApiToFrontExampleProjectGetAllRes = (
  data: ExampleProjectApiGetAllRes,
): ExampleProjectGetAllRes => {
  return data.map(ApiToFrontExampleProjectGetByIdRes);
};

// Parser para respuesta de CREATE - devuelve ExampleProjectParsed (CreateRes)
export const ApiToFrontExampleProjectCreateRes = (
  data: ExampleProjectApiGetByIdRes,
): ExampleProjectGetByIdRes => {
  return ApiToFrontExampleProjectGetByIdRes(data); // Reutiliza parseProject
};

// Parser para respuesta de UPDATE - devuelve ExampleProjectParsed (UpdateRes)
export const ApiToFrontExampleProjectUpdateRes = (
  data: ExampleProjectApiGetByIdRes,
): ExampleProjectGetByIdRes => {
  return ApiToFrontExampleProjectGetByIdRes(data); // Reutiliza parseProject
};

// Parser para convertir data de create a formato API (para logs/debug)
export const FrontToApiExampleProjectCreateReq = (
  data: ExampleProjectCreateReq,
): ExampleProjectApiCreateReq => {
  const { ownerId, isPublic, ...rest } = data;

  return {
    owner_id: ownerId,
    is_public: isPublic,
    ...rest,
  };
};

// Parser para convertir data de update a formato API (para logs/debug)
export const FrontToApiExampleProjectUpdateReq = (
  data: ExampleProjectUpdateReq,
): ExampleProjectApiUpdateReq => {
  const { ownerId, isPublic, ...rest } = data;

  return {
    owner_id: ownerId,
    is_public: isPublic,
    ...rest,
  };
};
