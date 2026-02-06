export interface ExampleUsersApiGetByIdRes {
  user_id: number;
  name: string;
  email: string;
  created_at: string; // viene como string de la API
  is_active: boolean;
}

export type ExampleUsersApiGetAllRes = ExampleUsersApiGetByIdRes[];
