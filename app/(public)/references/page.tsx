"use client"

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

const testimonios = [
    // Agregar más de 3 testimonios para que el carrusel tenga algo que mover
    { img: "https://res.cloudinary.com/di65tbibv/image/upload/v1768338697/bien-bonita/clients/an-cl3.jpg", frase: '"Todo legal, transparente y en el tiempo prometido. ¡Excelente!"', autor: "Mery V. – Real Felipe" },
    
    { img: "https://res.cloudinary.com/di65tbibv/image/upload/v1768338697/bien-bonita/clients/ke-cl3.jpg", frase: '"Súper transparentes desde el primer día. Muy felices con nuestra compra."', autor: "Familia Gamboa – Villa Marcelo" },
    { img: "https://res.cloudinary.com/di65tbibv/image/upload/v1768338697/bien-bonita/clients/an-cl2.jpg", frase: '"Un sueño hecho realidad. Gracias por la paciencia con mis dudas."', autor: "Teresa M. – Real Felipe" },
    // AÑADE ESTOS EJEMPLOS PARA PROBAR LA NAVEGACIÓN
    { img: "https://res.cloudinary.com/di65tbibv/image/upload/v1768338697/bien-bonita/clients/ke-cl2.jpg", frase: '"Atención de primera. Te acompañan en cada paso de la firma."', autor: "Nancy V. – Villa Marcelo" },
    { img: "https://res.cloudinary.com/di65tbibv/image/upload/v1768338697/bien-bonita/clients/an-cl1.jpg", frase: '"Me dieron la seguridad que otras inmobiliarias no me daban. ¡Sigan así!."', autor: "Magaly G. – Real Felipe" },
    { img: "https://res.cloudinary.com/di65tbibv/image/upload/v1768338697/bien-bonita/clients/ke-cl1.jpg", frase: '"Por fin tengo un lugar mío, fue la mejor decisión que tomé."', autor: "Fiorella  – Villa Marcelo" },
];

export default function ReferenciasPage() {
    // 🚨 ESTADO: Controla el índice de la primera tarjeta visible (0, 1, 2, 3, ...)
    const [startIndex, setStartIndex] = useState(0);

    const cardsToShow = 3; // Mostrar 3 tarjetas a la vez
    const totalTestimonios = testimonios.length;

    // Calcula el índice máximo al que se puede llegar antes de que el carrusel muestre espacio en blanco
    // Si hay 5 tarjetas y se muestran 3, el índice máximo es 2 (0, 1, 2)
    const maxIndex = totalTestimonios - cardsToShow;

    const nextSlide = () => {
        setStartIndex((prevIndex) => {
            // 🚨 CAMBIO CLAVE: Avanza solo 1 posición (en lugar de cardsToShow)
            // Usa Math.min para no pasar del límite (maxIndex)
            return Math.min(prevIndex + 1, maxIndex);
        });
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) => {
            // 🚨 CAMBIO CLAVE: Retrocede solo 1 posición (en lugar de cardsToShow)
            // Usa Math.max para no pasar de 0
            return Math.max(prevIndex - 1, 0);
        });
    };

    // Este cálculo ya estaba bien, ya que mueve 33.33% por cada unidad que avanza startIndex.
    const translateValue = `-${startIndex * (100 / cardsToShow)}%`;

    return (
        <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 text-center mb-8">
                Nuestros clientes, nuestra mejor garantía
            </h1>

            <div className="relative w-full max-w-6xl mx-auto px-4">
                
                {/* ⬅️ Botón de Retroceder */}
                <button
                    onClick={prevSlide}
                    disabled={startIndex === 0} // Desactiva si ya estás en el inicio
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition disabled:opacity-50`}
                    aria-label="Anterior conjunto de testimonios"
                >
                    &lt;
                </button>

                {/* Contenedor del Carrusel (Viewport) */}
                <div className="overflow-hidden">
                    
                    {/* Contenedor Interior: Se mueve horizontalmente con 'transform' */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(${translateValue})` }}
                    >
                        {testimonios.map((t, idx) => (
                            // Contenedor principal de cada testimonio (Mantiene el ancho w-1/3)
                            <div 
                                key={idx} 
                                className="flex flex-col items-center flex-shrink-0 w-full md:w-1/3 p-3"
                                style={{ minWidth: `${100 / cardsToShow}%` }} 
                            >
                                {/* 🚨 Estructura de Card */}
                                <div className="flex flex-col items-center w-full">
                                    {/* Contenedor de la IMAGEN: h-[450px] para que sea más largo */}
                                    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-lg">
                                        <Image
                                            src={t.img}
                                            alt={t.autor}
                                            fill
                                            className="object-cover object-top w-full h-full"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            priority={idx === 0}
                                        />
                                    </div>

                                    {/* Contenedor del TEXTO/FRASE: Superposición */}
                                        <div className="bg-white rounded-xl shadow-2xl px-6 py-5 mt-[-70px] max-w-sm w-[90%] flex flex-col items-center z-10 border-t-8 border-white">
                                            {/* Estrellas de puntuación */}
                                                <div className="flex items-center gap-1 mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                            ))}
                                                            </div>
                                                            <p className="text-xl font-bold text-red-700 text-center mb-2">{t.frase}</p>
                                                    <span className="text-sm text-gray-500 text-center">{t.autor}</span>
                                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ➡️ Botón de Avanzar */}
                <button
                    onClick={nextSlide}
                    // Desactiva si startIndex ya está en el último índice que permite el carrusel
                    disabled={startIndex >= maxIndex} 
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition disabled:opacity-50`}
                    aria-label="Siguiente conjunto de testimonios"
                >
                    &gt;
                </button>
            </div>
            
            {/* Indicadores de posición: Ahora se basan en el índice simple */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array(totalTestimonios - cardsToShow + 1).fill(0).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setStartIndex(index)}
                        className={`h-2 w-2 rounded-full ${startIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
                        aria-label={`Ir a la tarjeta ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}