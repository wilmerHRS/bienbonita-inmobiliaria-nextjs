'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Loader2,
  SquarePen,
  Trash2,
} from 'lucide-react';
import { getAllProjectAction } from '@/data/actions/get-all-project.action';
import { IProjectResponse } from '@/data/interfaces/project.interface';

export interface ProjectTableProps {
  handleEdit: (project: IProjectResponse) => void;
  refreshKey: number;
}

export function ProjectTable({ handleEdit, refreshKey }: ProjectTableProps) {
  const [projects, setProjects] = useState<IProjectResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, count } = await getAllProjectAction(
          currentPage,
          pageSize
        );
        if (isMounted) {
          setProjects(data);
          setTotalCount(count);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, [currentPage, pageSize, refreshKey]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="space-y-4">
      {/* Contenedor con scroll y altura máxima */}
      <div className="rounded-md border overflow-auto max-h-[600px] relative">
        <Table className="bg-white min-w-[1500px]">
          {/* min-w asegura que haya scroll horizontal */}
          <TableHeader className="sticky top-0 z-20 bg-white">
            <TableRow className="bg-red-50 text-red-600 hover:bg-red-50">
              <TableHead className="text-red-600">Nombre</TableHead>
              <TableHead className="text-red-600">Descripción</TableHead>
              <TableHead className="text-red-600">Ubicación</TableHead>
              <TableHead className="text-red-600">Precio Promedio</TableHead>
              <TableHead className="text-red-600">Estado</TableHead>
              <TableHead className="text-red-600">Logo</TableHead>
              <TableHead className="text-red-600">Portada</TableHead>
              <TableHead className="text-red-600">ID Video Youtube</TableHead>
              <TableHead className="text-red-600">Url Mapa</TableHead>
              <TableHead className="text-red-600">Fecha Reg.</TableHead>

              {/* Columna Opciones Sticky en Header */}
              <TableHead className="text-red-600 sticky right-0 bg-red-50 z-30 border-l shadow-[-4px_0_4px_-2px_rgba(0,0,0,0.05)]">
                Opciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={11} className="h-24 text-center">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={11} className="h-24 text-center">
                  No se encontraron proyectos.
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id} className="group">
                  <TableCell className="font-semibold whitespace-nowrap">
                    {project.name}
                  </TableCell>
                  <TableCell className="max-w-[250px] truncate">
                    {project.description}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {project.location}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    S/. {project.average_price}
                  </TableCell>
                  <TableCell>{project.project_status?.name}</TableCell>
                  <TableCell className="max-w-[150px] truncate text-blue-500">
                    {project.logo_url}
                  </TableCell>
                  <TableCell className="max-w-[150px] truncate text-blue-500">
                    {project.image_url}
                  </TableCell>
                  <TableCell>{project.youtube_video_id}</TableCell>
                  <TableCell className="max-w-[150px] truncate text-blue-500">
                    {project.map_url}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {project.created_at
                      ? new Date(project.created_at).toLocaleDateString()
                      : '-'}
                  </TableCell>

                  {/* Columna Opciones Sticky en Body */}
                  <TableCell className="sticky right-0 bg-white group-hover:bg-slate-50 z-10 border-l shadow-[-4px_0_4px_-2px_rgba(0,0,0,0.05)]">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="cursor-pointer bg-yellow-200 hover:bg-yellow-500 text-black hover:text-white"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="cursor-pointer bg-blue-300 hover:bg-blue-500 text-black hover:text-white"
                        onClick={() => handleEdit(project)}
                      >
                        <SquarePen className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="cursor-pointer bg-red-300 hover:bg-red-500 text-black hover:text-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Controles de Paginación */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-muted-foreground">
          Total: <span className="font-semibold">{totalCount}</span> proyectos
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
          </Button>
          <div className="text-sm font-medium">
            Página {currentPage} de {totalPages || 1}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages || loading}
          >
            Siguiente <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
