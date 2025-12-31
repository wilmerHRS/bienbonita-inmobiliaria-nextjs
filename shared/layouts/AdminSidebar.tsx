'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export function AdminSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Agregamos la propiedad 'href' a cada item
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      id: 'clientes',
      label: 'Clientes',
      icon: Users,
      href: '/dashboard/client',
    },
    {
      id: 'proyectos',
      label: 'Proyectos',
      icon: FolderKanban,
      href: '/dashboard/project',
    },
    {
      id: 'configuracion',
      label: 'Configuración',
      icon: Settings,
      href: '/dashboard/settings',
    },
  ];

  return (
    <aside
      className={`bg-white border-r border-slate-200 transition-all duration-300 ease-in-out relative flex flex-col z-20 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Botón para colapsar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute -right-3 top-20 bg-white border border-slate-200 rounded-full p-1 hover:bg-slate-50 shadow-sm z-30"
      >
        {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Logo / Título */}
      <div className="p-6 flex items-center gap-3 h-16 border-b border-slate-200">
        <div className="bg-red-500 p-2 rounded-lg shrink-0">
          <LayoutDashboard className="w-5 h-5 text-white" />
        </div>
        {isSidebarOpen && (
          <span className="font-bold text-lg tracking-tight truncate">
            Bienbonita
          </span>
        )}
      </div>

      {/* Navegación */}
      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => {
          // Validamos si la ruta actual coincide con el href del item
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all group ${
                isActive
                  ? 'bg-red-50 text-red-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon
                className={`w-5 h-5 shrink-0 ${
                  isActive
                    ? 'text-red-600'
                    : 'text-slate-400 group-hover:text-slate-600'
                }`}
              />
              {isSidebarOpen && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
              {isActive && isSidebarOpen && (
                <div className="ml-auto w-1.5 h-1.5 bg-red-600 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer del Aside */}
      <div className="p-4 border-t border-slate-100">
        {isSidebarOpen ? (
          <div className="bg-slate-900 rounded-2xl p-4 text-white overflow-hidden relative">
            <p className="text-xs font-medium text-slate-400">Espacio en uso</p>
            <p className="text-lg font-bold mt-1">75%</p>
            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3">
              <div className="bg-blue-500 h-full w-[75%] rounded-full"></div>
            </div>
            <button className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition-colors">
              Actualizar Plan
            </button>
          </div>
        ) : (
          <div className="flex justify-center py-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </aside>
  );
}
