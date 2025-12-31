import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500 max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Configuración</h1>
      <div className="space-y-6">
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Perfil del Administrador</h2>
              <p className="text-sm text-slate-500">
                Gestiona tus datos personales y cuenta.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                defaultValue="Admin Usuario"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                defaultValue="admin@nexus.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold mb-6">Seguridad</h2>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <p className="text-sm font-bold text-slate-700">
                Autenticación de Dos Pasos
              </p>
              <p className="text-xs text-slate-500">
                Añade una capa extra de seguridad.
              </p>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
            </button>
          </div>
        </section>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 sm:flex-none px-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Guardar Configuración
          </button>
          <button className="flex-1 sm:flex-none px-8 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            Descartar
          </button>
        </div>
      </div>
    </div>
  );
}
