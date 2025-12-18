import Image from "next/image";
import { config } from "@/lib/config";

export default function SizeContents() {
  return (
    <section id="tamanos" className="py-20 bg-gradient-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
          ¿Qué cabe en cada tamaño?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Altura 2,4m: se aprovecha en vertical
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {config.sizeContents.map((size, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary/30 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {size.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                {size.size}
              </h3>
              <ul className="space-y-2 mb-4">
                {size.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 italic">
                {size.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ilustración de tamaños */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            <div className="relative w-full aspect-[2/1] pt-8 pb-4 px-4">
              <Image
                src="/images/sizes-illustration.png"
                alt="Ilustración de tamaños de trasteros"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
