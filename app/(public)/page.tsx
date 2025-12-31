import Project from '@/modules/home/components/Project';
import YoutubeEmbed from '@/shared/components/YoutubeEmbed';
import { ContactForm } from '@/components/home/ContactForm';
import { getAllProjectsForHomeUseCase } from '@/data/use-cases/project/get-all-projects-for-home.use-case';
import { Trust } from '@/modules/home/components/Trust';

export default async function Home() {
  const projects = await getAllProjectsForHomeUseCase();

  return (
    <main className="relative">
      {/* Video promocional */}
      <YoutubeEmbed videoId="bsafKN7z90I">
        <h4 className="text-4xl md:text-6xl font-bold mb-4 md:w-lg leading-20">
          El <span className="bg-red-500 px-2 rounded">TERRENO</span> de tus
          sueños al ALCANCE de tu{' '}
          <span className="bg-red-500 px-2 rounded">BOLSILLO</span>
        </h4>
      </YoutubeEmbed>
      <div className="max-w-7xl mx-auto px-4">
        {/* Proyectos */}
        <div className="py-8">
          <h2 className="text-4xl sm:text-5xl text-red-600 font-bold m-6 mb-12 text-center">
            Proyectos Novedosos
          </h2>
          <div className="flex flex-wrap justify-center md:gap-20 gap-10">
            {projects.map((item) => (
              <Project key={item.id} project={item} />
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactForm projects={projects} />
        {/* Confianza */}
        <div className="py-6">
          <Trust />
        </div>
      </div>
    </main>
  );
}
