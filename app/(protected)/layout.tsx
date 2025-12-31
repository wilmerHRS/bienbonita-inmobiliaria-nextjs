import { AdminHeader } from '@/shared/layouts/AdminHeader';
import { AdminSidebar } from '@/shared/layouts/AdminSidebar';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Menú de Navegación Lateral (Izquierda) */}
      <AdminSidebar />

      {/* Contenido Principal (Derecha) */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header Superior */}
        <AdminHeader />

        {/* Área de Visualización según Tab activa */}
        <div className="p-8 max-w-7xl mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}
