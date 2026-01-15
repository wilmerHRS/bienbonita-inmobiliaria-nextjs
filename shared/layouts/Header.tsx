import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenuDemo } from '../components/DropdownMenu';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur main-page-color text-white">
      <div className="max-w-7xl mx-auto flex h-18 items-center justify-between px-4">
        {/* Logo (Izquierda) */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Reemplaza con tu componente de Logo o una imagen */}
          {/* <span className="font-bold text-lg">Mi Logo</span> */}
          <Image
            src={
              'https://res.cloudinary.com/di65tbibv/image/upload/t_Logo%20overlay/v1762550914/foto-perfil_a3ncr2.png'
            }
            alt="Logo de la Empresa"
            width={120}
            height={40}
          />
        </Link>

        {/* Navegación para Desktop (Ocultar en Móvil) */}
        {/* La clase 'hidden md:flex' oculta en móvil y lo muestra como 'flex' en 'md' (768px) o superior. */}
        <nav className="hidden md:flex items-center space-x-6 gap-6">
          <DropdownMenuDemo /> {/* Componente para 'Proyectos' */}
          <Link
            href="/oferts"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Ofertas
          </Link>
          <Link
            href="/nosotros"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Nosotros
          </Link>
          <Link
            href="/references"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Referencias
          </Link>
          <Button className="h-12 w-40 rounded-full" asChild>
            <Link href="#form-project">Cotiza Aquí</Link>
          </Button>
        </nav>

        {/* Menú Hamburguesa (Mostrar solo en Móvil) */}
        <div className="md:hidden">
          {/*
            TRUCO CSS: Utilizamos un input de checkbox oculto
            y el selector de hermandad general (~) en CSS
            para controlar la visibilidad del menú móvil.
          */}
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <MenuIcon className="h-6 w-6" />
          </label>

          {/* Menú Móvil - Su visibilidad se controla con CSS puro */}
          <div id="mobile-menu" className="mobile-menu-content">
            {/* Contenido del menú móvil */}
            <DropdownMenuDemo isMobile={true} />
            <Link
              href="/ofertas"
              className="block p-4 text-sm font-medium hover:bg-accent"
            >
              Ofertas
            </Link>
            <Link
              href="/nosotros"
              className="block p-4 text-sm font-medium hover:bg-accent"
            >
              Nosotros
            </Link>
            <div className="p-4">
              <Button asChild className="w-full">
                <Link href="#form-project">Cotiza Aquí</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
