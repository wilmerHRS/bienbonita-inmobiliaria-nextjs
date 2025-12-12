// components/DropdownMenuDemo.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface DropdownMenuDemoProps {
  isMobile?: boolean;
}

export function DropdownMenuDemo({ isMobile = false }: DropdownMenuDemoProps) {
  // En móvil, simplemente mostramos un enlace si no quieres un desplegable complejo.
  // Pero para mantener la estructura, usaremos el mismo componente.
  // Nota: Un menú desplegable en móvil a menudo se maneja mejor con un "Acordeón" o "Sidebar".

  if (isMobile) {
    return (
      <>
        <Link
          href="/proyectos"
          className="block p-4 text-sm font-medium hover:bg-accent"
        >
          Proyectos (Ver Todos)
        </Link>
        {/* Items del list en móvil */}
        <Link
          href="/proyectos/web"
          className="block pl-8 py-2 text-sm text-muted-foreground hover:bg-accent"
        >
          Proyectos Web
        </Link>
        <Link
          href="/proyectos/movil"
          className="block pl-8 py-2 text-sm text-muted-foreground hover:bg-accent"
        >
          Proyectos Móvil
        </Link>
      </>
    );
  }

  // Versión Desktop
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <button className="flex items-center text-sm font-medium transition-colors hover:text-primary">
          Proyectos <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/proyectos">Ver Todos</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/proyectos/web">Proyectos Web</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/proyectos/movil">Proyectos Móvil</Link>
        </DropdownMenuItem>
        {/* Más items aquí */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
