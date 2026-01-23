import projectStatusService from '../../services/project-status.service';
import { IProjectStatusResponse } from '../../interfaces/project.interface';

export const getAllProjectStatusesUseCase = (): Promise<IProjectStatusResponse[]> => {
  return projectStatusService.getAll();
};