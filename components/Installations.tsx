"use client";

import Image from "next/image";
import { useState } from "react";

export default function Installations() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const images = [
    {
      src: "/images/storage-corridor.png",
      alt: "Pasillo de trasteros PlanaBox",
      title: "Pasillos",
      description: "Espacios amplios y bien iluminados para fácil acceso",
      placeholderText: "Usando: storage-corridor.png",
    },
    {
      src: "/images/facility-unit.png",
      alt: "Interior de trastero PlanaBox de 2m²",
      title: "Interior 2m²",
      description: "Trastero de 2m² con altura de 2,4m para aprovechar el espacio",
      placeholderText: "Añadir imagen: facility-unit.png",
    },
  ];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
          Nuestras instalaciones
        </h2>
        <div className={`grid gap-8 max-w-6xl mx-auto ${images.length === 1 ? 'md:grid-cols-1 max-w-2xl' : images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {images.map((img, index) => (
            <div key={index} className="group">
              <div className="relative h-[300px] bg-gradient-to-br from-brand-light to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-4">
                {!imageErrors[index] ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-4"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                    <div className="text-center p-4">
                      <p className="text-sm">{img.placeholderText}</p>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{img.title}</h3>
              <p className="text-gray-600">{img.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
