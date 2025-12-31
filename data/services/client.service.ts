import { createClient } from '@/config/supabase.server';
import { IClient, IClientResponse } from '../interfaces/client.interface';
import { IPagResponse } from '../interfaces/global.interface';

const create = async (body: IClient) => {
  const supabase = await createClient();
  const { error } = await supabase.from('client').insert({ ...body });
  if (error) return false;

  return true;
};

export const getAll = async (page: number = 1, pageSize: number = 10) => {
  const supabase = await createClient();

  // Calcular el rango
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('client')
    .select(`*, project ( name )`, { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    console.error('Error fetching clients:', error);
    return { data: [], count: 0 } as IPagResponse<IClientResponse>;
  }

  return {
    data,
    count: count || 0,
  } as IPagResponse<IClientResponse>;
};

const clientService = {
  create,
  getAll,
};

export default clientService;
