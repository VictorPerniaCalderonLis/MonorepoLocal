import { ExampleCustomGrid } from '../../../../components/shared';
import { useExampleProjectModule } from '../hooks/useExampleProjectModule';

export const ExampleProject = () => {
  const {
    projects,
    isLoadingProjects,
    selectedProject,
    isLoadingProject,
    selectedProjectId,
    pendingCreateProject,
    pendingDeleteProject,
    pendingUpdateProject,
    setSelectedProjectId,
    handleCreateProject,
    handleUpdateProject,
    handleDeleteProject,
  } = useExampleProjectModule();

  return (
    <div className="container mx-auto space-y-8 p-6">
      <h1 className="text-3xl font-bold">Demo del Servicio CRUD - Proyectos</h1>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          Todos los Proyectos - <span className="">(GetAll)</span>
        </h2>
        {isLoadingProjects ? (
          <div className="h-32 animate-pulse rounded-lg bg-gray-100"></div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => (
              <ExampleCustomGrid
                key={project.id}
                data={project}
                isLoading={false}
                title={project.displayName}
              />
            ))}
          </div>
        )}
      </div>

      {/* Selector de proyecto */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          Proyecto Seleccionado - (getById)
        </h2>
        <div className="mb-4 flex gap-2">
          {[1, 2, 3].map((id) => (
            <button
              key={id}
              onClick={() => setSelectedProjectId(id)}
              className={`rounded px-4 py-2 ${
                selectedProjectId === id
                  ? 'bg-primary text-white'
                  : 'text-primary bg-gray-200'
              }`}
            >
              Proyecto {id}
            </button>
          ))}
        </div>

        <ExampleCustomGrid
          data={selectedProject}
          isLoading={isLoadingProject}
          title="Detalles del Proyecto"
        />
      </div>

      {/* Acciones CRUD */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          Acciones CRUD - (Create, Update, Delete)
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handleCreateProject}
            disabled={pendingCreateProject}
            className="bg-success rounded px-6 py-2 text-white transition-all hover:bg-green-600 disabled:opacity-50"
          >
            {pendingCreateProject ? 'Creando...' : 'Crear Proyecto'}
          </button>

          <button
            onClick={handleUpdateProject}
            disabled={pendingUpdateProject || !selectedProject}
            className="bg-info rounded px-6 py-2 text-white transition-all hover:bg-blue-600 disabled:opacity-50"
          >
            {pendingUpdateProject ? 'Actualizando...' : 'Actualizar Proyecto'}
          </button>

          <button
            onClick={handleDeleteProject}
            disabled={pendingDeleteProject || !selectedProject}
            className="bg-error rounded px-6 py-2 text-white transition-all hover:bg-red-600 disabled:opacity-50"
          >
            {pendingDeleteProject ? 'Eliminando...' : 'Eliminar Proyecto'}
          </button>
        </div>
      </div>
    </div>
  );
};
