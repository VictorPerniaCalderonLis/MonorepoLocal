import { useCreateApiHooks } from '@lis-data-solutions/lis-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  ExampleProjectApiCreateReq,
  ExampleProjectApiUpdateReq,
} from '../../../../models/Examples/ExampleProjects';
import { exampleProjectCrudService } from '../../../../services/Examples/ExampleCrudService_projectsService/ExampleCrudService';

export function useExampleProjectModule() {
  const {
    useExampleProjectCreateMutation,
    useExampleProjectDeleteMutation,
    useExampleProjectGetAllQuery,
    useExampleProjectGetByIdQuery,
    useExampleProjectUpdateMutation,
  } = useCreateApiHooks(exampleProjectCrudService, 'exampleProject', {
    toastConfig: {
      promiseToast: (promise: any, options: any) =>
        toast.promise(promise, {
          loading: options.pending ?? 'Procesando...',
          success: options.success ?? 'Operación completada',
          error: options.error,
        }),
      enabledFor: 'all',
      defaultMessages: {
        pending: 'Cargando...',
        success: 'mensaje useCreateApiHooks',
        error: (error: any) => `Error: ${error.message}`,
      },
    },
  });

  // Estado y lógica específica del módulo
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  // Queries
  const { data: projects, isLoading: isLoadingProjects } =
    useExampleProjectGetAllQuery();
  const { data: selectedProject, isLoading: isLoadingProject } =
    useExampleProjectGetByIdQuery(selectedProjectId);

  // Mutations
  const createProject = useExampleProjectCreateMutation();
  const updateProject = useExampleProjectUpdateMutation();
  const deleteProject = useExampleProjectDeleteMutation();

  // Handlers
  const handleCreateProject = () => {
    const newProject: ExampleProjectApiCreateReq = {
      name: `Proyecto Nuevo ${Date.now()}`,
      description: 'Descripción del nuevo proyecto',
      status: 'active',
      owner_id: 1,
      budget: 50000,
      is_public: true,
    };
    createProject.mutate([newProject]);
  };

  const handleUpdateProject = () => {
    if (!selectedProject) return;
    const updateData: ExampleProjectApiUpdateReq = {
      name: `${selectedProject.name} - Actualizado`,
      description: selectedProject.description,
      status: selectedProject.status,
      owner_id: selectedProject.ownerId,
      budget: selectedProject.budget + 10000,
      is_public: selectedProject.isPublic,
    };
    updateProject.mutate([selectedProject.id, updateData]);
  };

  const handleDeleteProject = () => {
    if (!selectedProject) return;
    deleteProject.mutate([selectedProject.id]);
  };

  return {
    projects,
    isLoadingProjects,
    selectedProject,
    isLoadingProject,
    selectedProjectId,
    pendingCreateProject: createProject.isPending,
    pendingUpdateProject: updateProject.isPending,
    pendingDeleteProject: deleteProject.isPending,
    setSelectedProjectId,
    handleCreateProject,
    handleUpdateProject,
    handleDeleteProject,
  };
}
