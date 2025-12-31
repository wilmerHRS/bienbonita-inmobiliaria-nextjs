import { ClientTable } from '@/modules/clients/components/ClientTable';
import { Plus } from 'lucide-react';

export default function ClientPage() {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Gestion de Clientes
        </h1>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nuevo Registro
        </button>
      </div>
      <p className="text-slate-500 mb-5">
        Lista de clientes registrados desde el formulario de registro en página
        de inicio y en cada formulario por página de proyecto.
      </p>
      <ClientTable />
    </div>
  );
}
