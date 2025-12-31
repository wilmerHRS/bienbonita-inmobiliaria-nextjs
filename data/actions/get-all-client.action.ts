'use server';

import { getAllClientUseCase } from '../use-cases/client/get-all-client.use-case';

export const getAllClientAction = async (page?: number, pageSize?: number) => {
  return getAllClientUseCase(page, pageSize);
};
