export interface IClient {
  created_at?: string;
  document: string;
  fullname?: string | null;
  id?: number;
  phone: string;
  project_id?: string;
}

export interface IClientResponse {
  id: number;
  document: string;
  fullname: string;
  phone: string;
  project_id: string;
  created_at: string;
  project: {
    name: string;
  };
}
