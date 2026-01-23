import { createClient } from "@/config/supabase.server";
import {
  IProjectCreate,
  IProjectResponse,
} from "../interfaces/project.interface";
import { IPagResponse } from "../interfaces/global.interface";
import { ProjectStatus } from "@/modules/projects/enums/project-status.enum";

const getAllForHome = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("project")
    .select("*")
    .order("created_at", { ascending: false })
    .neq("status_id", ProjectStatus.INACTIVE);
  if (error) throw error;

  return data as IProjectResponse[];
};

const getAll = async (page: number = 1, pageSize: number = 10) => {
  const supabase = await createClient();

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from("project")
    .select(`*, project_status ( name )`, { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Error fetching projects:", error);
    return { data: [], count: 0 } as IPagResponse<IProjectResponse>;
  }

  return {
    data,
    count: count || 0,
  } as IPagResponse<IProjectResponse>;
};

const getById = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("project")
    .select(`*, project_status ( name )`)
    .eq("id", id)
    .neq("status_id", ProjectStatus.INACTIVE)
    .single();

  if (error) {
    console.error("Error al obtener el proyecto:", error.message);
    return null;
  }

  return data as IProjectResponse;
};

const create = async (body: IProjectCreate) => {
  const supabase = await createClient();
  const { error } = await supabase.from("project").insert({ ...body });
  if (error) return false;

  return true;
};

const update = async (id: string, body: IProjectCreate) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from("project")
    .update({
      ...body,
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating project:", error.message);
    return false;
  }

  return true;
};

const projectService = {
  getAll,
  getAllForHome,
  getById,
  create,
  update,
};

export default projectService;
