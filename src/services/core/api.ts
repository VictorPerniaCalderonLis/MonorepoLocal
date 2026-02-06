// Configuración base de api para toda la aplicación
import { AbstractBaseService } from '@lis-data-solutions/lis-query';
import { AxiosResponse } from 'axios';
import { CrudConfig, CrudTypes } from './models/apiCore.types';

// Servicio base
export class BaseService extends AbstractBaseService {
  constructor(
    endpoint: string,
    baseUrl?: string,
    tokenSessionStorageKey?: string,
    customHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    },
    customHandleRequest?: <R>(request: Promise<AxiosResponse<R>>) => Promise<R>,
  ) {
    const apiToken =
      tokenSessionStorageKey || import.meta.env.VITE_APP_API_TOKEN;
    const fullUrl = baseUrl
      ? `${baseUrl}/${endpoint}`
      : `${import.meta.env.VITE_APP_API_URL}/${endpoint}`;

    super(endpoint, fullUrl, apiToken, customHeaders, customHandleRequest);
  }

  // Función métodos personalizados
  protected async executeCustomMethod<T>(
    apiRequest: Promise<AxiosResponse> | (() => Promise<AxiosResponse>),
    adapter?: (data: any) => T,
    mockDataFunction?: (...args: any[]) => unknown,
    ...mockArgs: any[]
  ): Promise<T> {
    const request = mockDataFunction
      ? Promise.resolve({
          data: mockDataFunction(...mockArgs),
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        } as AxiosResponse)
      : typeof apiRequest === 'function'
        ? apiRequest()
        : apiRequest;

    const response = await this.handleRequest(request);
    return adapter ? adapter(response) : (response as T);
  }
}

// BaseCrudService
export class BaseCrudService<
  TTypes extends CrudTypes = CrudTypes,
> extends BaseService {
  protected config: CrudConfig;

  constructor(
    endpoint: string,
    config: CrudConfig = {},
    ...baseArgs: ConstructorParameters<typeof BaseService> extends [
      string,
      ...infer Rest,
    ]
      ? Rest
      : never
  ) {
    super(endpoint, ...baseArgs);
    this.config = config;
  }

  // Helper unificado para adapters
  private getAdapter(
    adapterConfig: any,
    type: 'fromApi' | 'toApi' = 'fromApi',
  ): ((data: any) => any) | undefined {
    if (!adapterConfig) return undefined;
    if (typeof adapterConfig === 'function') return adapterConfig;
    if (typeof adapterConfig === 'object') return adapterConfig[type];
    return undefined;
  }

  // Helper para ejecutar CRUD
  private async executeCrud<T>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: any,
    configKey?: keyof CrudConfig,
    ...mockArgs: any[]
  ): Promise<T> {
    const config = configKey ? this.config[configKey] : undefined;
    const toApiAdapter = this.getAdapter(config?.adapter, 'toApi');
    const requestData = data && toApiAdapter ? toApiAdapter(data) : data;

    const apiCall =
      method === 'get' || method === 'delete'
        ? this.api[method](url)
        : this.api[method](url, requestData);

    return this.executeCustomMethod<T>(
      apiCall,
      this.getAdapter(config?.adapter, 'fromApi'),
      config?.mockData,
      ...mockArgs,
    );
  }

  async getAll(): Promise<TTypes['getAll']> {
    return this.executeCrud<TTypes['getAll']>(
      'get',
      this.baseUrl,
      undefined,
      'getAllConfig',
    );
  }

  async getById(id: string | number): Promise<TTypes['getById']> {
    return this.executeCrud<TTypes['getById']>(
      'get',
      `${this.baseUrl}/${id}`,
      undefined,
      'getByIdConfig',
      id,
    );
  }

  async create(data: TTypes['createReq']): Promise<TTypes['createRes']> {
    return this.executeCrud<TTypes['createRes']>(
      'post',
      this.baseUrl,
      data,
      'createConfig',
      data,
    );
  }

  async update(
    id: string | number,
    data: TTypes['updateReq'],
  ): Promise<TTypes['updateRes']> {
    return this.executeCrud<TTypes['updateRes']>(
      'put',
      `${this.baseUrl}/${id}`,
      data,
      'updateConfig',
      id,
      data,
    );
  }

  async delete(id: string | number): Promise<void> {
    return this.executeCrud<void>(
      'delete',
      `${this.baseUrl}/${id}`,
      undefined,
      'deleteConfig',
      id,
    );
  }
}

export type { CrudConfig, CrudTypes };

/*
Mejoras implementadas:

[x] - executeCustomMethod simplificado con rest parameters (...mockArgs)
[x] - Eliminados console.warns innecesarios
[x] - Constructores simplificados con rest parameters
[x] - Unificados getAdapter y getToApiAdapter en una función
[x] - Métodos CRUD simplificados con helper executeCrud
[x] - Eliminada duplicación de lógica en métodos CRUD

Pendientes para futuras mejoras:

[] - Catch de errores centralizado
[] - Evitar duplicación de tipado en servicios que extienden esta clase
[] - Considerar generics para automatizar más el tipado
*/
