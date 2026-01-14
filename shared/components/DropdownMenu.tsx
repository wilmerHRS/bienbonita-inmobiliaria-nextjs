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

  // Permite cerrar el sidebar al seleccionar un proyecto en móvil
  const handleSelect = () => {
    // Si tienes una función para cerrar el sidebar, llámala aquí
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('closeSidebar');
      window.dispatchEvent(event);
    }
  };

  if (isMobile) {
    return (
      <div className="bg-white rounded-xl shadow-lg py-2 px-0 animate-fadeIn">
        {[{
          name: 'Real Felipe', href: '/project/aca48e5b-b585-4f88-84f5-498abd6bf567'
        }, {
          name: 'Villa Marcelo', href: '/project/a8be8b80-8a0f-4762-aae2-a02d00df092c'
        }, {
          name: 'San Francisco', href: '/project/38121371-1fcb-48fe-86b4-aaff2b951335'
        }, {
          name: 'Santa Lucia', href: '/project/c382db86-b273-4c8a-bf24-34289cfd801a'  
        }, {
          name: 'Villa Bonita', href: '/project/1031ef3e-94e2-4e1a-81bb-ee9e16795f9d'
        }, {
          name: 'Villa Maria', href: '/project/a8be8b80-8a0f-4762-aae2-a02d00df092c'
        }].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleSelect}
            className="block p-4 text-base font-semibold text-white bg-red-600 rounded-lg my-2 mx-2 transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:bg-red-700 focus:scale-105 shadow-md text-center animate-fadeInItem"
            style={{ letterSpacing: '0.5px' }}
          >
            {item.name}
          </Link>
        ))}
      </div>
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
      <DropdownMenuContent className="w-56 bg-white rounded-xl shadow-lg py-2 px-0 animate-fadeIn">
        {[{
          name: 'Real Felipe', href: '/project/aca48e5b-b585-4f88-84f5-498abd6bf567'
        }, {
          name: 'San Francisco', href: '/project/38121371-1fcb-48fe-86b4-aaff2b951335'
        }, {
          name: 'Santa Lucia', href: '/project/c382db86-b273-4c8a-bf24-34289cfd801a'
        }, {
          name: 'Villa Bonita', href: '/project/1031ef3e-94e2-4e1a-81bb-ee9e16795f9d'
        }, {
          name: 'Villa Maria', href: '/project/656703ae-32c4-4347-b494-87622a076b89'
        }, {
          name: 'Villa Marcelo', href: '/project/a8be8b80-8a0f-4762-aae2-a02d00df092c'
        }].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-4 text-base font-semibold text-white bg-red-600 rounded-lg my-2 mx-2 transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:bg-red-700 focus:scale-105 shadow-md text-center animate-fadeInItem"
            style={{ letterSpacing: '0.5px' }}
          >
            {item.name}
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
// Animaciones para fadeIn y fadeInItem
// Puedes agregar esto en tu CSS global si no tienes tailwind custom utilities:
// .animate-fadeIn { animation: fadeIn 0.3s; }
// .animate-fadeInItem { animation: fadeInItem 0.4s; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px);} to { opacity: 1; transform: none; } }
// @keyframes fadeInItem { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1); } }
}
