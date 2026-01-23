'use client';

import { createProjectAction } from '@/data/actions/create-project.action';
import { getAllProjectStatusesAction } from '@/data/actions/get-all-project-statuses.action';
import { updateProjectAction } from '@/data/actions/update-project.action';
import {
  IProjectCreate,
  IProjectResponse,
  IProjectStatusResponse,
} from '@/data/interfaces/project.interface';
import { ProjectModal } from '@/modules/projects/components/ProjectModal';
import { ProjectTable } from '@/modules/projects/components/ProjectTable';
import { Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProjectPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<IProjectResponse | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [projectStatuses, setProjectStatuses] = useState<IProjectStatusResponse[]>([]);

  const handleRefresh = () => setRefreshKey((prev) => prev + 1);

  useEffect(() => {
    const fetchProjectStatuses = async () => {
      try {
        const statuses = await getAllProjectStatusesAction();
        setProjectStatuses(statuses);
      } catch (error) {
        console.error('Error fetching project statuses:', error);
      }
    };

    fetchProjectStatuses();
  }, []);

  const handleCreate = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleEdit = (project: IProjectResponse) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSubmit = async (values: IProjectCreate) => {
    if (selectedProject) {
      const res = await updateProjectAction(selectedProject.id, values);
      if (res) {
        handleRefresh();
      }
    } else {
      const res = await createProjectAction(values);
      if (res) {
        handleRefresh();
      }
    }
    handleCloseModal();
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Gestion de Proyectos
        </h1>
        <button
          className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer"
          onClick={handleCreate}
        >
          <Plus className="w-4 h-4" /> Nuevo Registro
        </button>
      </div>
      <ProjectTable handleEdit={handleEdit} refreshKey={refreshKey} />
      {isModalOpen ? (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialData={selectedProject}
          onSubmit={handleSubmit}
          projectStatuses={projectStatuses}
        />
      ) : null}
    </div>
  );
}
