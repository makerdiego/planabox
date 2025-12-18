import Image from "next/image";

export default function Installations() {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Nuestras instalaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Espacios modernos, limpios y seguros diseñados para proteger tus pertenencias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/storage-corridor.png"
                alt="Instalaciones PlanaBox - Pasillo con trasteros"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  Instalaciones modernas
                </h3>
                <p className="text-gray-700">
                  Nuestros trasteros están diseñados con los más altos estándares de calidad. 
                  Espacios bien iluminados, limpios y organizados que garantizan la protección 
                  de tus pertenencias.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  Acceso cómodo
                </h3>
                <p className="text-gray-700">
                  Pasillos amplios y bien iluminados que facilitan el acceso a tu trastero. 
                  Diseñado para que puedas mover tus pertenencias sin dificultades, con 
                  altura suficiente para cargar cómodamente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  Seguridad 24/7
                </h3>
                <p className="text-gray-700">
                  Todas las instalaciones están vigiladas con CCTV las 24 horas del día. 
                  Sistema de alarma y control de accesos que garantiza la seguridad de 
                  tus pertenencias en todo momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

