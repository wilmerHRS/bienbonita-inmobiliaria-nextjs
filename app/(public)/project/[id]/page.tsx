import { getAllProjectByIdUseCase } from '@/data/use-cases/project/get-project-by-id.use-case';
import { Trust } from '@/modules/home/components/Trust';
import { CarouselImages } from '@/modules/projects/components/CarouselImages';
import { ContactForm } from '@/modules/projects/components/ContactForm';
import { images } from '@/modules/projects/constants/images.constant';
import YoutubeEmbed from '@/shared/components/YoutubeEmbed';
import { CarFront, ScrollText, ShowerHead, Shrub, StretchHorizontal, StretchVertical } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const services = [
  {
    id: "propiedad",
    icon: <ScrollText className="h-18 w-18" />,
    title: "Título de Propiedad"
  }, {
    id: "agua-desague",
    icon: <ShowerHead className="h-18 w-18" />,
    title: "Agua y Desague"
  },{
    id:"parques",
    icon: <Shrub className="h-18 w-18" />,
    title: "Parques y Areas"
  },{
    id:"pistas y veredas",
    icon: <CarFront   className="h-18 w-18" />,
    title: "Pistas y + Veredas",
  }
]

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = await getAllProjectByIdUseCase(id);

  if (!project) redirect('/');

  const img = images[project.id];

  return (
    <div>
      <Image
        src={project.image_url ?? ''}
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="max-w-7xl mx-auto px-4 mt-16 mb-6">
        <div className="md:grid md:grid-cols-9 gap-1 items-start">
          <div className="col-span-5">
            {/* Header */}
            <div className="flex items-center gap-4 sm:gap-8 md:gap-4 lg:gap-8">
              <Image
                src={project.logo_url ?? ''}
                alt=""
                width={350}
                height={150}
                className="h-[90px] w-[200px] sm:h-[150px] sm:w-[350px] md:h-[100px] md:w-[280px] lg:h-[150px] lg:w-[350px] object-contain"
              />
              <div className="bg-red-500 text-white py-4 px-4 sm:px-6 rounded-l-2xl w-full">
                <span>Cuotas desde</span>
                <br />
                <span className="font-bold text-3xl sm:text-4xl lg:text-5xl">
                  S/.{project.average_price}
                </span>
              </div>
              {/* <p>{project.name}</p> */}
            </div>
            {/* Body */}
            <div className="my-4">
              <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
              <p className="font-bold text-red-800 mt-2">
                ¡Explora un nuevo comienzo, en el lugar ideal!
              </p>
            </div>
            {/* Services */}
            <div className="mt-12">
              <h5 className="text-2xl font-bold text-red-600">
                Disfruta con todo equipado
              </h5>
              <div className="flex flex-wrap items-center gap-6 mt-5">
                {/* SERVICIOS */}
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="w-34 h-38 bg-red-50 text-red-800 rounded-xl p-2 flex flex-col items-center"
                  >
                    {service.icon}
                    <span className="block text-center my-auto font-bold">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Images */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">
                Espacios diseñados para ti
              </h2>
              <CarouselImages images={img} />
            </div>
            {/* Map */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-red-600 mb-8">
                Conoce la Ubicación de tu próximo hogar
              </h2>
              <div className="w-full">
                <iframe
                  src={project.map_url ?? ''}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[330px] sm:h-[400px] md:h-[500px] rounded-4xl"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              labore quos mollitia in illo nostrum impedit natus ab voluptates
              molestias. Voluptatem dolor totam, quasi repudiandae cupiditate
              cum. Laboriosam, autem dolores.
            </p>
          </div> */}
          <div className="md:pl-8 md:sticky md:top-56 z-10 col-span-4 mt-12 md:mt-0">
            <div className="rounded-4xl shadow-xl overflow-hidden border-red-200 border-2 md:-mt-30">
              <ContactForm projectId={project.id} projectTitle={project.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        {/* <div className="bg-red-50 px-4 py-12">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Espacios diseñados para ti
          </h2>
          {project.youtube_video_id && (
            <div className="max-w-7xl mx-auto px-4 mb-12">
              <YoutubeEmbed videoId={project.youtube_video_id} rounded />
            </div>
          )}
          <div className="max-w-5xl mx-auto px-6">
            <CarouselImages />
          </div>
        </div> */}
        {project.youtube_video_id && (
          <YoutubeEmbed videoId={project.youtube_video_id} />
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Trust />
      </div>
      {/* <div className="my-16">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Conoce la Ubicación de tu próximo hogar
        </h2>
        <div className="max-w-7xl mx-auto px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9425171677076!2d-79.83451672418857!3d-6.776851166274553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef2c56f229ad%3A0x9ef53152a0c6b9d!2sReal%20Plaza%20Chiclayo.!5e0!3m2!1ses-419!2spe!4v1767053257980!5m2!1ses-419!2spe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] rounded-4xl"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
}
