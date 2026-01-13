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
          href="/proyectos/38121371-1fcb-48fe-86b4-aaff2b951335"
          className="block p-4 text-sm font-medium hover:bg-accent"
        > Real Felipe
        </Link>
        {/* Items del list en móvil */}
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
          <Link href="/project/aca48e5b-b585-4f88-84f5-498abd6bf567">Real Felipe</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/project/38121371-1fcb-48fe-86b4-aaff2b951335">San Francisco</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/project/c382db86-b273-4c8a-bf24-34289cfd801a">Santa Lucia</Link>
        </DropdownMenuItem>
          <DropdownMenuItem asChild>
          <Link href="/project/1031ef3e-94e2-4e1a-81bb-ee9e16795f9d">Villa Bonita</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/project/656703ae-32c4-4347-b494-87622a076b89">Villa Maria</Link>
        </DropdownMenuItem>
        {/* Más items aquí */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
