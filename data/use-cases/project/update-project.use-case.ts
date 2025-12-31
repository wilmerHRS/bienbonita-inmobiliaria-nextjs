import projectService from '../../services/project.service';
import { IProjectCreate } from '@/data/interfaces/project.interface';

export const updateProjectUseCase = (id: string, body: IProjectCreate) => {
  return projectService.update(id, body);
};
