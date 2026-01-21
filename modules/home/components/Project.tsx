import Image from 'next/image';
import { Eye } from 'lucide-react';
import SlideImages from './SlideImages';
import { IProjectResponse } from '@/data/interfaces/project.interface';
import Link from 'next/link';
import { images } from '@/modules/projects/constants/images.constant';

interface ProjectProps {
  project: IProjectResponse;
}

const Project = ({ project }: ProjectProps) => {
  const img = images[project.id];
  
  return (
    <Link href={`/project/${project.id}`}>
      <div className="relative sm:max-w-[300px] sm:min-w-[300px] sm:max-w-[400px] sm:min-w-[400px] md:max-w-[500px] md:min-w-[500px] shadow-xl rounded-xl">
        <div className="absolute top-0 w-full flex z-10">
          <div className="bg-white rounded-br-full rounded-tl-xl pt-4 pb-5 pl-2 pr-8">
            <Image
              src={project.logo_url ?? ''}
              alt="logo del Proyecto"
              width={250}
              height={100}
              className="h-[76px] w-[250px] object-contain"
            />
          </div>
        </div>
        <SlideImages images={img} />
        <div className="grid grid-cols-2">
          <div className="bg-red-500 flex gap-2 justify-center items-end text-white py-4 px-2 rounded-bl-xl">
            <span>Lotes desde</span>
            <span className="font-bold text-3xl">
              S/.{project.average_price}
            </span>
          </div>
          <div className="flex gap-2 justify-center items-center font-bold">
            <Eye className="h-6 w-6" />
            <span> Ver Proyecto</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
