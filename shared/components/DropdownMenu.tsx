// components/DropdownMenuDemo.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { IProjectResponse } from "@/data/interfaces/project.interface";

interface DropdownMenuDemoProps {
  isMobile?: boolean;
  projects: IProjectResponse[];
}

export function DropdownMenuDemo({
  isMobile = false,
  projects,
}: DropdownMenuDemoProps) {
  // En móvil, simplemente mostramos un enlace si no quieres un desplegable complejo.
  // Pero para mantener la estructura, usaremos el mismo componente.
  // Nota: Un menú desplegable en móvil a menudo se maneja mejor con un "Acordeón" o "Sidebar".

  // Permite cerrar el sidebar al seleccionar un proyecto en móvil
  const handleSelect = () => {
    // Si tienes una función para cerrar el sidebar, llámala aquí
    if (typeof window !== "undefined") {
      const event = new CustomEvent("closeSidebar");
      window.dispatchEvent(event);
    }
  };

  if (isMobile) {
    return (
      <div className="bg-white rounded-xl shadow-lg py-2 px-0 animate-fadeIn">
        {projects.map((item) => (
          <Link
            key={item.id}
            href={`/project/${item.id}`}
            onClick={handleSelect}
            className="block p-4 text-base font-semibold text-white bg-red-600 rounded-lg my-2 mx-2 transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:bg-red-700 focus:scale-105 shadow-md text-center animate-fadeInItem"
            style={{ letterSpacing: "0.5px" }}
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
        {projects.map((item) => (
          <Link
            key={item.id}
            href={`/project/${item.id}`}
            className="block p-4 text-base font-semibold text-white bg-red-600 rounded-lg my-2 mx-2 transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:bg-red-700 focus:scale-105 shadow-md text-center animate-fadeInItem"
            style={{ letterSpacing: "0.5px" }}
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
