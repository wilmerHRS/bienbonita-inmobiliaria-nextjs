import { Heart } from 'lucide-react';
import Image from 'next/image';

export function Trust() {
  return (
    <div>
      <div className="grid grid-cols-3 my-12 gap-4 items-center">
        <div className="col-span-2 flex items-center justify-between bg-red-500 rounded-r-4xl">
          <p className="text-5xl text-white px-10">
            <span className="text-8xl font-bold">+10</span> años <br /> de
            experiencia
          </p>
          <Image
            src="https://res.cloudinary.com/di65tbibv/image/upload/v1765151661/bien-bonita/projects/5d39b696-bd90-4992-a24c-12b835361543.png"
            alt="logo"
            width={350}
            height={350}
            className="rounded-r-4xl"
          />
        </div>
        <p className="text-5xl font-bold text-red-500 ml-6">
          Confianza <span className="text-7xl font-bold block">Bienbonita</span>
        </p>
      </div>
      <div className="grid grid-cols-3 my-12 gap-4 items-center">
        <div className="w-full h-full pr-6">
          <div className="flex items-center justify-center h-full w-full rounded-r-4xl bg-red-500 py-2 px-10 gap-3">
            <p className="text-xl font-bold text-white ">
              Cada lote entregado es una historia de confianza cumplida.
            </p>
            <div className="bg-white rounded-full p-3">
              <Heart className="text-red-500" size={70} />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-between bg-red-500 rounded-l-4xl">
          <p className="text-4xl text-white px-10">
            <span className="text-8xl font-bold">+500</span> <br />{' '}
            <span>Familias beneficiadas</span>
          </p>
          <Image
            src="https://res.cloudinary.com/di65tbibv/image/upload/v1765151661/bien-bonita/projects/5d39b696-bd90-4992-a24c-12b835361543.png"
            alt="logo"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
