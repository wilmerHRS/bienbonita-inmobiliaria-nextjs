import clientService from '../../services/client.service';

export const getAllClientUseCase = (page?: number, pageSize?: number) => {
  return clientService.getAll(page, pageSize);
};
