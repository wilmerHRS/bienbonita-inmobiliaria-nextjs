import projectService from '../../services/project.service';

export const getAllProjectsUseCase = (page?: number, pageSize?: number) => {
  return projectService.getAll(page, pageSize);
};
