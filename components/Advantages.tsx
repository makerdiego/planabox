import { config } from "@/lib/config";

export default function Advantages() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
          ¿Por qué PlanaBox?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          La solución más moderna y conveniente para guardar tus pertenencias en Castelló
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-brand-light p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary/20 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

