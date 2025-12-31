import Link from 'next/link';
import { Facebook, Instagram, Music2 } from 'lucide-react'; // Music2 se usa habitualmente para TikTok en Lucide
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="main-page-color text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Columna 1: Contactos */}
        <div className="flex flex-col space-y-4 items-center">
          <h3 className="font-bold text-lg mb-2">Contactos</h3>
          <p className="text-sm leading-relaxed max-w-[200px] text-center">
            Prolongación Av. Túpac Amaru Mz C Lote N° 1
          </p>
          <p className="text-sm">+51 973 139 617</p>
          <p className="text-sm break-all">
            informes@inmobiliariabienbonita.com
          </p>
        </div>

        {/* Columna 2: Legales */}
        <div className="flex flex-col space-y-4 items-center">
          <h3 className="font-bold text-lg mb-2">Legales</h3>
          <Link href="#" className="text-sm hover:underline">
            Condiciones de uso
          </Link>
          <Link href="#" className="text-sm hover:underline text-center">
            Defensoria de cliente inmobiliario
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Codigo de Ética
          </Link>
        </div>

        {/* Columna 3: Politicas */}
        <div className="flex flex-col space-y-4 items-center">
          <h3 className="font-bold text-lg mb-2">Politicas</h3>
          <Link href="#" className="text-sm hover:underline">
            Politica de cookies
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Politicas de privacidad
          </Link>
          <Link href="#" className="text-sm hover:underline text-center">
            Politica de seguridad de informacion
          </Link>
        </div>

        {/* Columna 4: Logo y Redes */}
        <div className="flex flex-col items-center space-y-6">
          {/* Simulación del Logo */}
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center">
              {/* Reemplaza con tu componente de Logo o una imagen */}
              {/* <span className="font-bold text-lg">Mi Logo</span> */}
              <Image
                src={
                  'https://res.cloudinary.com/di65tbibv/image/upload/t_Logo%20overlay/v1762550914/foto-perfil_a3ncr2.png'
                }
                alt="Logo de la Empresa"
                width={200}
                height={100}
              />
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <p className="text-sm font-medium">Síguenos en:</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white text-[#e61e25] p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Facebook size={20} fill="currentColor" />
              </Link>
              <Link
                href="#"
                className="bg-white text-[#e61e25] p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="bg-white text-[#e61e25] p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Music2 size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
