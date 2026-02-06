import { MOCK_SINGLE_USER } from '../../../constants/MOCK/EXAMPLES/EXAMPLE_USER/EXAMPLE_USER_MOCK_DATA';
import { ExampleUserGetByIdRes } from '../../../models/Examples/ExampleUsers';
import { BaseService } from '../../core/api';
import { ApiToFrontExampleUsersGetByIdRes } from './ExampleBaseAdapter';

export class ExampleUserService extends BaseService {
  constructor() {
    super('users', import.meta.env.VITE_APP_API_URL_USERS);
  }

  // Métodos específicos del servicio de usuarios
  async getUserById(id: number): Promise<ExampleUserGetByIdRes> {
    return this.executeCustomMethod<ExampleUserGetByIdRes>(
      this.api.get(`${this.baseUrl}/${id}`),
      ApiToFrontExampleUsersGetByIdRes,
      (id?: string | number) => {
        console.log(`Obteniendo usuario con ID: ${id}`);
        return MOCK_SINGLE_USER;
      },
      [id],
    );
  }

  async deleteUserById(id: number): Promise<void> {
    return this.executeCustomMethod<void>(
      this.api.delete(`${this.baseUrl}/${id}`),
      undefined,
      (id?: string | number) => {
        console.log(`Simulando eliminación de usuario con ID: ${id}`);
        return undefined;
      },
      [id],
    );
  }
}

export const exampleUserService = new ExampleUserService();
