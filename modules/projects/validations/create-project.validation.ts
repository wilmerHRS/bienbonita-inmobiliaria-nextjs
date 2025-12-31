import { z } from 'zod';

const castToNumber = (val: unknown) => {
  if (typeof val === 'string' && val.trim() === '') return undefined;
  return typeof val === 'string' ? Number(val) : val;
};

export const projectSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  description: z.string().min(10, 'La descripción es muy corta'),
  location: z.string().min(1, 'La ubicación es obligatoria'),
  average_price: z.preprocess(
    castToNumber,
    z.number('Debe ser un número').positive('El precio debe ser mayor a 0')
  ),
  status_id: z.preprocess(castToNumber, z.number().int()),
  youtube_video_id: z.string().optional().or(z.literal('')),
  image_url: z.string().url('Debe ser una URL válida'),
  logo_url: z
    .string()
    .url('Debe ser una URL válida')
    .optional()
    .or(z.literal('')),
  map_url: z
    .string()
    .url('Debe ser una URL válida')
    .optional()
    .or(z.literal('')),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
