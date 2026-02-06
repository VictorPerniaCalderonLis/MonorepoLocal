import {
  ExampleUserGetByIdRes,
  ExampleUsersApiGetByIdRes,
} from '../../../models/Examples/ExampleUsers';

// Solo especifica las diferencias
export const ApiToFrontExampleUsersGetByIdRes = (
  response: ExampleUsersApiGetByIdRes,
): ExampleUserGetByIdRes => {
  const { user_id, created_at, is_active, ...rest } = response;

  return {
    id: user_id,
    createdAt: new Date(created_at),
    isActive: is_active,
    displayName: `${response.name} (${response.email})`,
    ...rest, // name, email se mantienen
  };
};
