import { createClient } from '@/config/supabase.server';
import { ILogin } from '../interfaces/login.interface';

const login = async (body: ILogin) => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(body);

  if (error) return false;

  return true;
};

const authService = {
  login,
};

export default authService;
