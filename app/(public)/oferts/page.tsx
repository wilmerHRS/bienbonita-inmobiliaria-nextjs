import { Tag } from 'lucide-react'; 

export default function OfertasPlaceholder() {
  return (
    <div className="w-full py-16 px-4 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
        
        {/* Adorno superior en Rojo */}
        <div className="h-2 bg-[#E11D48] w-full" /> 

        <div className="p-8 text-center flex flex-col items-center">
          {/* Icono de Oferta */}
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <Tag className="w-10 h-10 text-[#E11D48]" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            ¡Próximamente <span className="text-[#E11D48]">Grandes Ofertas</span>!
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Estamos seleccionando las mejores propiedades con precios exclusivos para ti. 
            ¡No te pierdas el lanzamiento de nuestra sección de descuentos!
          </p>

          {/* Botón de Llamada a la acción */}
          <button className="bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-red-200">
            Avísame cuando estén listas
          </button>
        </div>

        {/* Marca de agua o detalle decorativo inferior */}
        <div className="absolute bottom-[-10px] right-[-10px] opacity-5">
           <Tag className="w-32 h-32 text-black" />
        </div>
      </div>
    </div>
  );
}