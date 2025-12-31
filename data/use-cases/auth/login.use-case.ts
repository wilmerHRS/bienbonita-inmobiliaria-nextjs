import authService from '../../services/auth.service';
import { ILogin } from '@/data/interfaces/login.interface';

export const loginUseCase = (body: ILogin) => {
  return authService.login(body);
};
