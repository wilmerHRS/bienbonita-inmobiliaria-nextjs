import projectService from '../../services/project.service';

export const getAllProjectByIdUseCase = (id: string) => {
  return projectService.getById(id);
};
