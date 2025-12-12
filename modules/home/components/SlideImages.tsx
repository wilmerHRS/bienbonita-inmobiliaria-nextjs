'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Lista de imágenes a rotar (usando tus URLs)
const slideImages = [
  {
    url: 'https://res.cloudinary.com/di65tbibv/image/upload/v1765151701/bien-bonita/projects/04a427f2-dfd5-4beb-8f44-074aafbcbe93.png',
    caption: 'Imagen 1',
  },
  {
    url: 'https://res.cloudinary.com/di65tbibv/image/upload/v1765151687/bien-bonita/projects/54071261-0f5e-4c31-a383-eaa1f502cfa1.png',
    caption: 'Imagen 2',
  },
  {
    url: 'https://res.cloudinary.com/di65tbibv/image/upload/v1765151661/bien-bonita/projects/5d39b696-bd90-4992-a24c-12b835361543.png',
    caption: 'Imagen 3',
  },
];

export default function SlideImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ASPECT_RATIO_HEIGHT = '310px';

  // 1. Función para avanzar la imagen (en bucle)
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  // 1. CLAVE: Manejador para iniciar la rotación (onMouseEnter)
  const handleMouseEnter = () => {
    // 1.1 Limpiar cualquier intervalo previo (seguridad)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // 1.2 PASO CLAVE: Avanzar a la siguiente imagen de forma INSTANTÁNEA
    // Ejecutamos la función de avance justo al iniciar el hover.
    goToNextSlide();

    // 1.3 Iniciar el intervalo: El temporizador empieza a contar *después* de esta primera transición
    // El cambio ocurrirá cada 2000 milisegundos (2 segundos) a partir de ahora.
    const id = setInterval(goToNextSlide, 2000);
    intervalRef.current = id;
  };

  // 2. Manejador para detener la rotación y reiniciar (onMouseLeave)
  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Regresar a la primera imagen
    setCurrentIndex(0);
  };

  // 3. Limpieza: Asegura que el intervalo se detenga si el componente se desmonta
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-t-xl"
      style={{ paddingTop: ASPECT_RATIO_HEIGHT }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slideImages.map((slideImage, index) => (
        <Image
          key={index}
          src={slideImage.url}
          alt={slideImage.caption}
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`
            absolute transition-opacity duration-1500 ease-in-out object-cover 
            ${index === currentIndex ? 'opacity-100 z-9' : 'opacity-0 z-0'}
          `}
        />
      ))}
    </div>
  );
}
