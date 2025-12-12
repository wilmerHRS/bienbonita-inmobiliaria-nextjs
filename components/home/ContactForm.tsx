'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

const formSchema = z.object({
  project: z.string().min(1, 'Por favor selecciona un proyecto'),
  fullName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  dni: z.string().min(8, 'El DNI debe tener al menos 8 dígitos'),
  phone: z
    .string()
    .min(9, 'El número de celular debe tener al menos 9 dígitos'),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  consentAccepted: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar el consentimiento de clientes potenciales',
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      project: '',
      fullName: '',
      dni: '',
      phone: '',
      termsAccepted: false,
      consentAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log(values);
    // Here you would typically send the data to your API
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after submission
      form.reset();
    }, 2000);
  }

  return (
    <div className="bg-red-50 rounded-4xl shadow-xl overflow-hidden mx-auto my-12">
      <div className="md:grid grid-cols-2">
        {/* Form Section */}
        <div className="w-full py-10 px-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Completa tus datos y da el siguiente paso hacia tu nuevo hogar
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Project Selection */}
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Proyecto</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full bg-white py-6 rounded-2xl">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona un proyecto" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="casa-modelo-a">
                          Casa Modelo A
                        </SelectItem>
                        <SelectItem value="casa-modelo-b">
                          Casa Modelo B
                        </SelectItem>
                        <SelectItem value="casa-modelo-c">
                          Casa Modelo C
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombres y Apellidos</FormLabel>
                    <FormControl className="bg-white py-6 rounded-2xl">
                      <Input
                        placeholder="Ingresa tus nombres y apellidos"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DNI */}
              <FormField
                control={form.control}
                name="dni"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DNI</FormLabel>
                    <FormControl className="bg-white py-6 rounded-2xl">
                      <Input placeholder="Ingresa tu DNI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl className="bg-white py-6 rounded-2xl">
                      <Input
                        placeholder="Ingresa tu número de celular"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms Checkbox */}
              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <div className="py-2 mb-0">
                    <FormItem className="flex flex-row">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          He leído y acepto los Términos y condiciones y la
                          Política de Privacidad.
                        </FormLabel>
                      </div>
                    </FormItem>
                    <FormMessage />
                  </div>
                )}
              />

              {/* Consent Checkbox */}
              <FormField
                control={form.control}
                name="consentAccepted"
                render={({ field }) => (
                  <div className="py-2 mb-6">
                    <FormItem className="flex flex-row">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          He leído y acepto el Consentimiento de Clientes
                          potenciales.
                        </FormLabel>
                      </div>
                    </FormItem>
                    <FormMessage />
                  </div>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-700 rounded-full cursor-pointer text-white font-bold py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar información'}
              </Button>
            </form>
          </Form>
        </div>

        {/* Image Section */}
        <div className="h-full relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwqpq6u6p/image/upload/v1765557217/bien-bonita/home-form_x0yilt.png"
            alt="Imagen de referencia"
            // CLAVE 2: Usar fill={true} para que la imagen ocupe el 100% del contenedor padre
            fill={true}
            // CLAVE 3: object-cover para que la imagen cubra todo el espacio sin distorsionarse
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw" // Ayuda a Next.js
          />
        </div>
      </div>
    </div>
  );
}
