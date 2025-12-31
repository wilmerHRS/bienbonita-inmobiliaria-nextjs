'use server';

import { IClient } from '../interfaces/client.interface';
import { createClientUseCase } from '../use-cases/client/create-client.use-case';

export const createClientAction = async (body: IClient) => {
  return createClientUseCase(body);
};
