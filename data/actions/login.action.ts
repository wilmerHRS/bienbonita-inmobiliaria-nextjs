'use server';

import { ILogin } from '../interfaces/login.interface';
import { loginUseCase } from '../use-cases/auth/login.use-case';
import { redirect } from 'next/navigation';

export const loginAction = async (body: ILogin) => {
  const result = await loginUseCase(body);

  if (result) redirect('/dashboard');

  redirect('/login?error=auth-failed');
};
