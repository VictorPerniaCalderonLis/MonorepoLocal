# Plantilla Base para Proyectos LIS Frontend

Esta plantilla sirve como base para iniciar nuevos proyectos frontend con React y TypeScript. Incluye una configuración preestablecida con herramientas y patrones de desarrollo recomendados.

## Instalación

Para realiar la instalación o la actualización de la libreria. Ejecutar el siguiente comando: `npm i -g create-lis-project@latest`
Para inicializar un nuevo proyecto ejecutar: `npx create-lis-project "nombre"`

## Estructura de carpetas

```
src/
├── components/            # Componentes reutilizables
│   ├── shared/            # Componentes compuestos reutilizables
│   ├── static/            # Componentes estáticos (Header, Footer, Sidebar)
│   └── ui/                # Componentes de UI básicos
│
├── constants/             # Constantes globales y datos mock
├── contexts/              # Contextos de React
├── hooks/                 # Hooks personalizados
├── i18n/                  # Configuración de internacionalización
├── layouts/               # Layouts de la aplicación
├── models/                # Tipos e interfaces TypeScript
├── modules/               # Lógica de negocio por módulo
├── pages/                 # Componentes de página/vistas
├── providers/             # Proveedores de contexto
│   └── ApiProvider.tsx    # Proveedor para la configuración de la API
│
├── services/              # Servicios de API
│   └── core/              # Configuración base de la API
│
├── store/                 # Estado global (Zustand)
├── styles/                # Configuración de temas y estilos
└── router.tsx             # Configuración de rutas
```

## Librerías instaladas

- **Material UI**: Biblioteca de componentes de UI.
- **react-i18next, i18next**: Internacionalización de la aplicación.
- **react-error-boundary**: Manejo de errores en componentes React.
- **react-hot-toast**: Notificaciones tipo toast.
- **react-icons**: Iconos populares para React.
- **@tanstack/react-query**: Gestión de datos en el cliente, facilita la creación de queries.
- **axios**: Cliente HTTP para llamadas a la API.
- **react-router-dom**: Manejo de rutas y navegación.
- **zustand**: Gestión de estado global en React.
- **tailwindcss**: Framework de CSS.
- **cypress**: Herramienta de testing.
- **eslint, prettier**: Formateo y reglas de estilo.
- **lint-staged, husky**: Automatización de herramientas en los commits.
- **@lis-data-solutions/lis-query**: Simplifica la integración de APIs REST.

### API Integration Framework

[LIS Query - API Integration Framework](https://npm.lisdatasolutions.com:4873/-/web/detail/@lis-data-solutions/lis-query)

Esta librería proporciona utilidades para simplificar la integración con APIs:

- `ApiHooksProvider`: Proveedor de configuración global para APIs.
- `AbstractBaseService`: Clase base para servicios de API.
- `AbstractCrudService`: Clase base para servicios CRUD.
- `useCreateApiHooks`: Fábrica de hooks para generar hooks específicos.

## Guía de Uso

### 1. ApiProvider - Configuración Global de la API

El `ApiProvider` envuelve la aplicación y configura el comportamiento global de las peticiones HTTP (toasts, reintentos, tiempos de cache).

```tsx
// src/providers/ApiProvider.tsx
import { ApiHooksProvider } from '@lis-data-solutions/lis-query';

<ApiHooksProvider config={{
  toastConfig: {
    promiseToast: toast.promise,
    enabledFor: 'mutations', // 'all' | 'mutations' | 'queries' | 'none'
    defaultMessages: { pending, success, error }
  },
  errorConfig: {
    retryConfig: { maxRetries: 2, retryDelay: 1000 }
  },
  defaultQueryOptions: {
    retry: 1,
    staleTime: 30000,
    refetchOnWindowFocus: false
  }
}}>
  {children}
</ApiHooksProvider>
```

### 2. Servicios - Conexión con la API

#### BaseService - Para métodos personalizados

Extiende `AbstractBaseService` para crear servicios con métodos específicos:

```typescript
// src/services/exampleService.ts
import { BaseService } from '../core/api';

export class UserService extends BaseService {
  constructor() {
    super('users', import.meta.env.VITE_APP_API_URL);
  }

  async getUserById(id: number): Promise<User> {
    return this.executeCustomMethod<User>(
      this.api.get(`${this.baseUrl}/${id}`),
      ApiToFrontAdapter,  // Opcional: transforma datos de API a frontend
      mockDataFunction,   // Opcional: datos mock para desarrollo
      [id]               // Args para la función mock
    );
  }
}

export const userService = new UserService();
```

#### BaseCrudService - Para operaciones CRUD completas

Proporciona automáticamente `getAll`, `getById`, `create`, `update`, `delete`:

```typescript
// src/services/projectService.ts
import { BaseCrudService, CrudConfig } from '../core/api';

type ProjectCrudConfig = CrudConfig<Project> & {
  getAll: Project[];
  getById: Project;
  createReq: CreateProjectReq;
  createRes: Project;
  updateReq: UpdateProjectReq;
  updateRes: Project;
};

export class ProjectService extends BaseCrudService<ProjectCrudConfig> {
  constructor() {
    super('projects', {
      getAllConfig: { adapter, mockData },
      getByIdConfig: { adapter, mockData },
      createConfig: { adapter, mockData },
      updateConfig: { adapter, mockData },
      deleteConfig: { mockData }
    });
  }

  // Métodos adicionales personalizados
  async getProjectsByStatus(status: string): Promise<Project[]> {
    return this.executeCustomMethod<Project[]>(
      this.api.get(`${this.baseUrl}/status/${status}`),
      adapter,
      mockData
    );
  }
}

export const projectService = new ProjectService();
```

### 4. PageBreadcrumbsLayout - Layout con breadcrumbs automáticos

Genera breadcrumbs dinámicos basados en la ruta actual y traducciones de i18n:

```tsx
// src/pages/ExamplePage.tsx
import { PageBreadcrumbsLayout } from '../../layouts';

export const ExamplePage = () => {
  return (
    <PageBreadcrumbsLayout>
      <YourContentComponent />
    </PageBreadcrumbsLayout>
  );
};
```

Requisitos:

- Las rutas deben estar definidas en `navbarData.tsx`
- Las traducciones en i18n bajo `static.navbar.<label>`

### 6. navbarData y Sidebar - Sistema de menús dinámicos

Define la estructura de navegación en `src/constants/navbar/navbarData.tsx`:

```tsx
import { NavbarItem } from '../../models/constants/Navbar/NavbarData';

export const navbarData: NavbarItem[] = [
  {
    path: '/',
    label: 'home',
    icon: <IoHomeOutline size={30} />,
    fieldIcon: <IoHome size={30} />
  },
  {
    path: '/examples',
    label: 'examples',
    icon: <HiOutlineCog6Tooth size={30} />,
    fieldIcon: <HiCog6Tooth size={30} />,
    children: [
      {
        path: '/examples',
        label: 'examples',
        icon: <HiOutlineCog6Tooth size={15} />,
        fieldIcon: <HiCog6Tooth size={15} />,
        children: [
          { path: '/examples/example1', label: 'example1' },
          { path: '/examples/example2', label: 'example2' }
        ]
      }
    ]
  }
];
```

Características:

- **Menús multinivel**: Soporta submenús anidados
- **Iconos dinámicos**: `icon` (normal) y `fieldIcon` (activo)
- **Traducciones automáticas**: El `label` se traduce desde `i18n` (`static.navbar.<label>`)
- **Sidebar colapsable**: Usa `useSidebarStore` para manejar el estado

## Ejemplos incluidos

Esta plantilla incluye ejemplos que muestran los patrones recomendados. **Se recomienda eliminar estos archivos y carpetas al iniciar un proyecto real.**

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye el proyecto para producción.
- `npm run build:dev|uat|prod`: Construye el proyecto para el entorno especificado.
- `npm run lint`: Ejecuta el linter.
- `npm run format`: Formatea el código.
- `npm run cy`: Ejecuta Cypress para testing.

## Archivos de configuración externa incluidos

- `.gitlab-ci.yml`
- `dockerfile`
- `nginx.conf`
