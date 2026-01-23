'use client';

import { IProjectStatusResponse } from '@/data/interfaces/project.interface';
import { useForm, Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ProjectFormValues,
  projectSchema,
} from '../validations/create-project.validation';
import { IProjectResponse } from '@/data/interfaces/project.interface';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: IProjectResponse | null;
  onSubmit: (values: ProjectFormValues) => void;
  projectStatuses: IProjectStatusResponse[];
}

export function ProjectModal({
  isOpen,
  onClose,
  initialData,
  onSubmit,
  projectStatuses,
}: ProjectModalProps) {

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema) as Resolver<ProjectFormValues>,
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      location: initialData?.location || '',
      average_price: initialData?.average_price ?? 0,
      square_meters: initialData?.square_meters ?? 0,
      status_id: initialData?.status_id ?? 1,
      youtube_video_id: initialData?.youtube_video_id || '',
      image_url: initialData?.image_url || '',
      logo_url: initialData?.logo_url || '',
      map_url: initialData?.map_url || '',
    },
  });

  const handleInternalSubmit = (values: ProjectFormValues) => {
    onSubmit(values);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialData ? 'Editar Proyecto' : 'Nuevo Proyecto'}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleInternalSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre - Ocupa 2 columnas */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Nombre del Proyecto</FormLabel>
                    <FormControl>
                      <Input placeholder="Urbanización..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Descripción - Ocupa 2 columnas */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Ubicación */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Ubicación</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Youtube ID */}
              <FormField
                control={form.control}
                name="youtube_video_id"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>ID Video Youtube</FormLabel>
                    <FormControl>
                      <Input placeholder="ID del video" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* URLs */}
              <FormField
                control={form.control}
                name="image_url"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>URL Imagen Portada</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="logo_url"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>URL Logo</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="map_url"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>URL Mapa (Google)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Precio */}
              <FormField
                control={form.control}
                name="average_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Precio Promedio (S/.)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Metros Cuadrados */}
              <FormField
                control={form.control}
                name="square_meters"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Metros Cuadrados (m²)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Estado */}
              <FormField
                control={form.control}
                name="status_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value?.toString()}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {projectStatuses.map((status) => (
                          <SelectItem key={status.id} value={status.id.toString()}>
                            {status.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {initialData ? 'Actualizar' : 'Crear'} Proyecto
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
