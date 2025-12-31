import { IClient } from '@/data/interfaces/client.interface';
import clientService from '../../services/client.service';

export const createClientUseCase = (body: IClient) => {
  return clientService.create(body);
};
