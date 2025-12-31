import { Heart } from 'lucide-react';
import Image from 'next/image';

export function Trust() {
  return (
    <div>
      <div className="md:grid grid-cols-3 mt-0 mb-6 md:mb-12 gap-4 items-center">
        <p className="block md:hidden text-3xl font-bold text-red-500 mb-8 text-center">
          Confianza <span className="text-5xl font-bold block">Bienbonita</span>
        </p>
        <div className="col-span-2 flex items-center justify-between bg-red-500 rounded-r-4xl">
          <p className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-white px-5 sm:px-10">
            <span className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold">
              +10
            </span>{' '}
            años <br /> de experiencia
          </p>
          <Image
            src="https://res.cloudinary.com/di65tbibv/image/upload/v1765151661/bien-bonita/projects/5d39b696-bd90-4992-a24c-12b835361543.png"
            alt="logo"
            width={350}
            height={350}
            className="rounded-r-4xl w-[200px] h-[140px] sm:w-[290px] sm:h-[200px] lg:w-[350px] lg:h-[232px] object-cover"
          />
        </div>
        <p className="md:block hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500 lg:ml-6">
          Confianza{' '}
          <span className="text-5xl lg:text-6xl xl:text-7xl font-bold block">
            Bienbonita
          </span>
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 mb-12 mt-6 md:mt-12 gap-4 items-center">
        <div className="w-full h-full lg:pr-6 mb-6 md:mb-0">
          <div className="flex items-center justify-around md:justify-center h-full w-full rounded-r-4xl bg-red-500 py-5 md:py-2 px-10 gap-3">
            <p className="xl:text-xl font-bold text-white ">
              Cada lote entregado es una historia de confianza cumplida.
            </p>
            <div className="bg-white rounded-full p-2 md:p-3">
              <Heart className="text-red-500 w-10 h-10 md:w-14 md:h-14 lg:w-[70px] lg:h-[70px]" />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-between bg-red-500 rounded-l-4xl">
          <p className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white px-5 sm:px-10">
            <span className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold">
              +500
            </span>{' '}
            <br /> <span>Familias beneficiadas</span>
          </p>
          <Image
            src="https://res.cloudinary.com/di65tbibv/image/upload/v1765151661/bien-bonita/projects/5d39b696-bd90-4992-a24c-12b835361543.png"
            alt="logo"
            width={350}
            height={350}
            className="w-[200px] h-[140px] sm:w-[290px] sm:h-[200px] lg:w-[350px] lg:h-[232px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
