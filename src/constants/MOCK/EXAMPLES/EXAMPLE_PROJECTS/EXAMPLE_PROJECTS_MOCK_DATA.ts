import {
  ExampleProjectApiGetAllRes,
  ExampleProjectApiGetByIdRes,
} from '../../../../models/Examples/ExampleProjects/ExampleProjectsForApi/ExampleProjectsApi.types';

export const MOCK_PROJECTS: ExampleProjectApiGetAllRes = [
  {
    project_id: 1,
    name: 'Proyecto Alpha',
    description: 'Desarrollo de aplicación web moderna',
    status: 'active',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T14:45:00Z',
    owner_id: 101,
    budget: 50000,
    is_public: true,
  },
  {
    project_id: 2,
    name: 'Proyecto Beta',
    description: 'Sistema de gestión empresarial',
    status: 'inactive',
    created_at: '2024-02-01T09:15:00Z',
    updated_at: '2024-02-05T16:20:00Z',
    owner_id: 102,
    budget: 75000,
    is_public: false,
  },
  {
    project_id: 3,
    name: 'Proyecto Gamma',
    description: 'Plataforma de e-commerce',
    status: 'completed',
    created_at: '2024-03-10T11:00:00Z',
    updated_at: '2024-03-25T13:30:00Z',
    owner_id: 103,
    budget: 120000,
    is_public: true,
  },
];

export const MOCK_SINGLE_PROJECT: ExampleProjectApiGetByIdRes =
  MOCK_PROJECTS[0];
