import projectService from '../../services/project.service';

export const getAllProjectsForHomeUseCase = () => {
  return projectService.getAllForHome();
};
