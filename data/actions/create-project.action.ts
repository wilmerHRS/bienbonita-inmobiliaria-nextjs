'use server';

import { IProjectCreate } from '../interfaces/project.interface';
import { createProjectUseCase } from '../use-cases/project/create-project.use-case';

export const createProjectAction = async (body: IProjectCreate) => {
  const res = await createProjectUseCase(body);

  return res;
};
