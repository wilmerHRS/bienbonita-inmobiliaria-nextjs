export interface IProjectResponse {
  id: string;
  name: string;
  description: string | null;
  average_price: number;
  square_meters: number;
  image_url: string | null;
  location: string;
  logo_url: string | null;
  map_url: string | null;
  status_id: number | null;
  youtube_video_id: string | null;
  created_at: string;
  project_status: {
    name: string;
  };
}

export interface IProjectStatusResponse {
  id: number;
  name: string;
  created_at: string;
}

export interface IProjectCreate {
  name: string;
  description?: string | null;
  location: string;
  average_price: number;
  square_meters: number;
  status_id?: number | null;
  logo_url?: string | null;
  image_url?: string | null;
  youtube_video_id?: string | null;
  map_url?: string | null;
}
