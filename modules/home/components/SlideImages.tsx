'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IImage } from "@/modules/projects/constants/images.constant"

export interface SlideImagesProps {
  images: IImage[]
}

export default function SlideImages({ images }: SlideImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ASPECT_RATIO_HEIGHT = '310px';

  // 1. Función para avanzar la imagen (en bucle)
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
      {images.map((slideImage, index) => (
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
