import {
  MOCK_PROJECTS,
  MOCK_SINGLE_PROJECT,
} from '../../../constants/MOCK/EXAMPLES/EXAMPLE_PROJECTS/EXAMPLE_PROJECTS_MOCK_DATA';
import {
  ExampleProjectApiCreateReq,
  ExampleProjectApiUpdateReq,
  ExampleProjectCreateReq,
  ExampleProjectGetAllRes,
  ExampleProjectGetByIdRes,
  ExampleProjectUpdateReq,
} from '../../../models/Examples/ExampleProjects';
import { BaseCrudService, CrudConfig } from '../../core/api';
import {
  ApiToFrontExampleProjectCreateRes,
  ApiToFrontExampleProjectGetAllRes,
  ApiToFrontExampleProjectGetByIdRes,
  ApiToFrontExampleProjectUpdateRes,
  FrontToApiExampleProjectCreateReq,
  FrontToApiExampleProjectUpdateReq,
} from './ExampleCrudAdapter';

// Configuración específica para el servicio de proyectos
type ProjectCrudConfig = CrudConfig<ExampleProjectGetByIdRes> & {
  getAll: ExampleProjectGetAllRes;
  getById: ExampleProjectGetByIdRes;
  createReq: ExampleProjectApiCreateReq;
  createRes: ExampleProjectGetByIdRes;
  updateReq: ExampleProjectApiUpdateReq;
  updateRes: ExampleProjectGetByIdRes;
};

export class ExampleProjectCrudService extends BaseCrudService<ProjectCrudConfig> {
  constructor() {
    super('projects', {
      // Configuración para getAll
      getAllConfig: {
        adapter: ApiToFrontExampleProjectGetAllRes,
        mockData: () => {
          console.log('Obteniendo lista de proyectos');
          return MOCK_PROJECTS;
        },
      },

      // Configuración para getById
      getByIdConfig: {
        adapter: ApiToFrontExampleProjectGetByIdRes,
        mockData: (id: string | number) => {
          console.log(`Obteniendo proyecto con ID: ${id}`);
          return MOCK_SINGLE_PROJECT;
        },
      },

      // Configuración para create
      createConfig: {
        adapter: ApiToFrontExampleProjectCreateRes,
        mockData: (data: ExampleProjectCreateReq) => {
          console.log('Simulando creación de proyecto');
          console.log(
            'Datos que se enviarían al backend:',
            FrontToApiExampleProjectCreateReq(data),
          );
          // Simular respuesta del backend
          return {
            project_id: '4',
            name: data.name,
            description: data.description,
            status: data.status,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            owner_id: data.ownerId,
            budget: data.budget,
            is_public: data.isPublic,
          };
        },
      },

      // Configuración para update
      updateConfig: {
        adapter: ApiToFrontExampleProjectUpdateRes,
        mockData: (id: string | number, data: ExampleProjectUpdateReq) => {
          console.log(`✏️ Simulando actualización de proyecto con ID: ${id}`);
          console.log(
            'Datos que se enviarían al backend:',
            FrontToApiExampleProjectUpdateReq(data),
          );

          // Simular respuesta del backend (proyecto actualizado)
          return {
            ...MOCK_SINGLE_PROJECT,
            project_id: Number(id),
            ...(data.name && { name: data.name }),
            ...(data.description && {
              description: data.description,
            }),
            ...(data.status && { status: data.status }),
            ...(data.budget && { budget: data.budget }),
            ...(data.isPublic !== undefined && {
              is_public: data.isPublic,
            }),
            updated_at: new Date().toISOString(),
          };
        },
      },

      // Configuración para delete
      deleteConfig: {
        mockData: (id: string | number) => {
          console.log(`Simulando eliminación de proyecto con ID: ${id}`);
          return undefined;
        },
      },
    });
  }

  // Métodos adicionales específicos del servicio de proyectos
  async getProjectsByStatus(
    status: 'active' | 'inactive' | 'completed',
  ): Promise<ExampleProjectGetAllRes> {
    console.log(`Obteniendo proyectos con estado: ${status}`);

    return this.executeCustomMethod<ExampleProjectGetAllRes>(
      this.api.get(`${this.baseUrl}/status/${status}`),
      ApiToFrontExampleProjectGetAllRes,
      () => MOCK_PROJECTS.filter((project) => project.status === status),
    );
  }

  async getProjectsByOwner(ownerId: number): Promise<ExampleProjectGetAllRes> {
    console.log(`Obteniendo proyectos del propietario: ${ownerId}`);

    return this.executeCustomMethod<ExampleProjectGetAllRes>(
      this.api.get(`${this.baseUrl}/owner/${ownerId}`),
      ApiToFrontExampleProjectGetAllRes,
      () => MOCK_PROJECTS.filter((project) => project.owner_id === ownerId),
    );
  }
}

// Exportar instancia del servicio
export const exampleProjectCrudService = new ExampleProjectCrudService();
