// import { createClient } from '@/config/supabase.server';

// export default async function AdminDashboard() {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   return (
//     <div className="p-8">
//       <h1>Panel de Administrador</h1>
//       <p>Bienvenido: {user?.email}</p>

//       {/* Botón de Logout */}
//       <form action="/auth/signout" method="post">
//         <button type="submit" className="text-red-500 underline">
//           Cerrar sesión
//         </button>
//       </form>
//     </div>
//   );
// }
import { Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';

/**
 * Componente principal de la aplicación de administración.
 * Ahora con la navegación lateral situada a la IZQUIERDA.
 */
export default function DashboardPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Panel de Control
          </h1>
          <p className="text-slate-500 mt-1">
            Resumen general de las operaciones de hoy.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm shadow-blue-200">
          <Plus className="w-4 h-4" /> Nuevo Reporte
        </button>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: 'Ingresos Totales',
            value: '$45,231.89',
            change: '+20.1%',
            icon: ArrowUpRight,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
          },
          {
            label: 'Nuevos Clientes',
            value: '+2,350',
            change: '+180.1%',
            icon: ArrowUpRight,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
          },
          {
            label: 'Proyectos Activos',
            value: '122',
            change: '-4.3%',
            icon: ArrowDownRight,
            color: 'text-red-600',
            bg: 'bg-red-50',
          },
          {
            label: 'Tasa de Conversión',
            value: '3.4%',
            change: '+12.5%',
            icon: ArrowUpRight,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]"
          >
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="flex items-baseline justify-between mt-2">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${stat.bg} ${stat.color}`}
              >
                <stat.icon className="w-3 h-3" /> {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico y Actividad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-lg">Crecimiento Mensual</h2>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>{' '}
                Ingresos
              </div>
            </div>
          </div>
          <div className="h-64 w-full bg-slate-50/50 rounded-xl flex items-end justify-between p-4 gap-2 border border-slate-100">
            {[40, 70, 45, 90, 65, 80, 50, 95, 75, 85, 60, 70].map((h, i) => (
              <div
                key={i}
                className="w-full bg-blue-100 rounded-t-sm transition-all hover:bg-blue-600 group relative"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1.5 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  ${h},000
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Ene</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Abr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Ago</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dic</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h2 className="font-semibold text-lg mb-6">Logs de Actividad</h2>
          <div className="space-y-6 flex-1">
            {[
              {
                user: 'Juan Perez',
                action: 'creó un proyecto',
                time: '2m',
                initial: 'JP',
                color: 'bg-orange-100 text-orange-600',
              },
              {
                user: 'Maria Garcia',
                action: 'tarea completada',
                time: '15m',
                initial: 'MG',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                user: 'Carlos Ruiz',
                action: 'archivos subidos',
                time: '1h',
                initial: 'CR',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                user: 'Ana Lopez',
                action: 'perfil actualizado',
                time: '3h',
                initial: 'AL',
                color: 'bg-emerald-100 text-emerald-600',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div
                  className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs ${item.color}`}
                >
                  {item.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-none">
                    {item.user}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 truncate">
                    {item.action}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-slate-300">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
            Ver Todo
          </button>
        </div>
      </div>
    </div>
  );
}
