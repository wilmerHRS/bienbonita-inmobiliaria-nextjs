'use server';

import { getAllProjectsUseCase } from '../use-cases/project/get-all-projects.use-case';

export const getAllProjectAction = async (page?: number, pageSize?: number) => {
  return getAllProjectsUseCase(page, pageSize);
};
