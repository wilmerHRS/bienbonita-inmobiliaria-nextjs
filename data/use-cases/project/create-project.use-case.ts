import projectService from '../../services/project.service';
import { IProjectCreate } from '@/data/interfaces/project.interface';

export const createProjectUseCase = (body: IProjectCreate) => {
  return projectService.create(body);
};
