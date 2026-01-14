import { Header } from '@/shared/layouts/Header';
import { Footer } from '@/shared/layouts/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
        <div className="fixed bottom-8 right-8 z-50">
          <a href="https://wa.me/51973139617" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative transition-transform duration-300 group-hover:scale-110">
              {/* Anillo de animación */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              
              <img 
                src="https://res.cloudinary.com/di65tbibv/image/upload/v1768279519/bien-bonita/project-logos/WhatsApp.svg_t7hquw.png" 
                alt="WhatsApp" 
                className="relative w-16 h-16" 
              />
              
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
                1
              </span>
            </div>
          </a>
        </div>
      <Footer />
    </>
  );
}
