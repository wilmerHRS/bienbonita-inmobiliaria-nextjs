import { createClient } from '@/config/supabase.server';
import { IProjectStatusResponse } from '../interfaces/project.interface';

const getAll = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('project_status')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching project statuses:', error);
    return [];
  }

  return data as IProjectStatusResponse[];
};

const projectStatusService = {
  getAll,
};

export default projectStatusService;