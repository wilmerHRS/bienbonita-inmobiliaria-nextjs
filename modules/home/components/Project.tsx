import Image from 'next/image';
import { Eye } from 'lucide-react';
import SlideImages from './SlideImages';

const Project = () => {
  return (
    <div className="relative max-w-[500px] min-w-[500px] shadow-xl rounded-xl">
      <div className="absolute top-0 w-full flex z-10">
        <div className="bg-white rounded-br-full rounded-tl-xl p-4">
          <Image
            src="https://res.cloudinary.com/di65tbibv/image/upload/v1763759610/bien-bonita/project-logos/san-francisco_kyx9mt.png"
            alt="logo del Proyecto"
            width={250}
            height={250}
          />
        </div>
      </div>
      <SlideImages />
      <div className="grid grid-cols-2">
        <div className="bg-red-500 flex gap-2 justify-center items-end text-white py-4 px-2 rounded-bl-xl">
          <span>Cuotas desde</span>
          <span className="font-bold text-3xl">S/.499</span>
        </div>
        <div className="flex gap-2 justify-center items-center font-bold">
          <Eye className="h-6 w-6" />
          <span> Ver Proyecto</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
