import {
  ExampleUsersApiGetAllRes,
  ExampleUsersApiGetByIdRes,
} from '../../../../models/Examples/ExampleUsers/ExampleUsersForApi/ExampleUsersApi.types';

export const MOCK_USERS: ExampleUsersApiGetAllRes = [
  {
    user_id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    created_at: '2024-01-15T10:30:00Z',
    is_active: true,
  },
  {
    user_id: 2,
    name: 'María García',
    email: 'maria@example.com',
    created_at: '2024-02-20T14:15:00Z',
    is_active: true,
  },
  {
    user_id: 3,
    name: 'Carlos López',
    email: 'carlos@example.com',
    created_at: '2024-03-10T09:45:00Z',
    is_active: false,
  },
];

export const MOCK_SINGLE_USER: ExampleUsersApiGetByIdRes = MOCK_USERS[0];
