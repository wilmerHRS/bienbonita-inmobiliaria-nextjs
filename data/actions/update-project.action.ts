'use server';

import { IProjectCreate } from '../interfaces/project.interface';
import { updateProjectUseCase } from '../use-cases/project/update-project.use-case';

export const updateProjectAction = async (id: string, body: IProjectCreate) => {
  const res = await updateProjectUseCase(id, body);

  return res;
};
