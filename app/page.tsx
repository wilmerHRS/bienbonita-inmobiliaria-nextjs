import Project from '@/modules/home/components/Project';
import YoutubeEmbed from '@/shared/components/YoutubeEmbed';
import { ContactForm } from '@/components/home/ContactForm';

export default function Home() {
  return (
    <main className="relative">
      {/* Video promocional */}
      <YoutubeEmbed videoId="bsafKN7z90I">
        <h4 className="text-6xl font-bold mb-4 w-lg leading-20">
          El <span className="bg-red-500 px-2 rounded">TERRENO</span> de tus
          sueños al ALCANCE de tu{' '}
          <span className="bg-red-500 px-2 rounded">BOLSILLO</span>
        </h4>
      </YoutubeEmbed>
      <div className="max-w-7xl mx-auto px-4">
        {/* Proyectos */}
        <div className="py-8">
          <h2 className="text-5xl font-bold m-6 mb-12 text-center">
            Proyectos Novedosos
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {[1, 2, 3, 4, 5].map((item) => (
              <Project key={item} />
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </main>
  );
}
