'use server';

import { getAllProjectStatusesUseCase } from '../use-cases/project/get-all-project-statuses.use-case';

export const getAllProjectStatusesAction = async () => {
  return getAllProjectStatusesUseCase();
};