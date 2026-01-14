"use client";
import React from "react";
import { Header } from '@/shared/layouts/Header';

    import react from "react";

export default function NosotrosPage() {
	const [tab, setTab] = react.useState<'mision' | 'vision'>('mision');
	return (
		<>
			<main className="bg-white min-h-screen">
				<section className="w-full relative">
					<img
						src="https://res.cloudinary.com/di65tbibv/image/upload/v1767674320/bien-bonita/projects/villa-bonita/VILLA_BONITA_1.png"
						alt="Familia en parque de Menorca"
						className="w-full h-[400px] object-cover object-center"
					/>
				</section>
				<section className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-16 gap-8">
					<div className="md:w-1/2 text-left">
						<h2 className="text-red-600 font-bold text-4xl md:text-5xl mb-4">
							Somos <br />
							<span className="text-red-600 text-2xl md:text-3xl font-semibold">una empresa</span><br />
							<span className="text-red-600 text-3xl md:text-4xl font-bold">100% Chiclayana</span>
						</h2>
					</div>
					<div className="md:w-1/2 text-gray-700 text-lg md:text-xl">
						<p>
							con más de 25 años desarrollando habilitaciones urbanas y nuestro principal objetivo es mejorar considerablemente la calidad de vida de las familias peruanas. Por eso contamos con todos los servicios básicos, pórticos de ingreso, además de miles de m² de áreas verdes con desarrollo paisajista y zonas recreativas, donde nuestros clientes podrán vivir como siempre soñaron. Nuestro modelo de gestión contribuye con el crecimiento ordenado y planificado del país y de sus ciudades. Esto nos ha permitido ser un aliado para el progreso de nuestros clientes, así como del entorno social y urbano de cada uno de nuestros proyectos.
						</p>
					</div>
				</section>
				{/* Sección Misión y Visión */}
				<section className="bg-gray-100 py-12 px-4 md:px-32 flex flex-col items-center justify-center text-center">
					<div className="flex gap-8 mb-6 justify-center">
						<button
							className={`text-3xl font-bold mr-4 pb-1 border-b-4 ${tab === 'mision' ? 'text-red-600 border-red-600' : 'text-black border-transparent'}`}
							onClick={() => setTab('mision')}
						>
							Misión
						</button>
						<button
							className={`text-3xl font-bold pb-1 border-b-4 ${tab === 'vision' ? 'text-red-600 border-red-600' : 'text-black border-transparent'}`}
							onClick={() => setTab('vision')}
						>
							Visión
						</button>
					</div>
					{tab === 'mision' && (
						<div>
							<h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">¿Por qué estamos aquí?</h3>
							<p className="text-black text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
								Construimos bonitos lugares para vivir; contribuyendo al crecimiento ordenado de las ciudades, por medio de nuestros servicios y proyectos inmobiliarios.
							</p>
						</div>
					)}
					{tab === 'vision' && (
						<div>
							<h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">¿A dónde queremos llegar?</h3>
							<p className="text-black text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
								Ser la mejor elección en servicios y productos inmobiliarios de la Región, generando la mejor rentabiliDad a nuestros inversionistas con un equipo de alto nivel.
							</p>
						</div>
					)}
				</section>
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
			</main>
		</>
	);
}
