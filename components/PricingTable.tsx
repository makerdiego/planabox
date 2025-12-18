"use client";

import { config } from "@/lib/config";

export default function PricingTable() {
  const scrollToForm = () => {
    const formSection = document.getElementById("lista-espera");
    formSection?.scrollIntoView({ behavior: "smooth" });
    config.analytics.trackEvent("cta_consultar_disponibilidad", { source: "pricing" });
  };

  return (
    <section id="precios" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
          Precios
        </h2>
        <p className="text-center text-gray-600 mb-2">
          IVA incluido
        </p>
        <p className="text-center text-sm text-gray-500 mb-12">
          Promos limitadas para primeras unidades. Sujeta a disponibilidad.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <table className="w-full">
              <thead className="gradient-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Tamaño</th>
                  <th className="px-6 py-4 text-right font-semibold">
                    Precio/mes
                  </th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">
                    Ideal para
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {config.pricing.map((item, index) => {
                  const hasPromo = (item as any).promoActive && (item as any).promoPrice;
                  const promoPrice = hasPromo ? (item as any).promoPrice : item.price;
                  const originalPrice = hasPromo ? (item as any).originalPrice : null;
                  
                  return (
                    <tr
                      key={index}
                      className={`hover:bg-brand-light transition-all duration-200 hover:shadow-md ${
                        hasPromo ? "bg-brand-primary/5 border-l-4 border-brand-primary" : ""
                      }`}
                    >
                      <td className="px-6 py-5 font-semibold text-brand-dark text-lg">
                        <div className="flex items-center gap-2">
                          {item.size}
                          {hasPromo && (
                            <span className="px-2 py-1 bg-brand-primary text-white text-xs font-bold rounded-full">
                              {(item as any).promoText || "PROMO"}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex flex-col items-end">
                          {hasPromo && originalPrice && (
                            <span className="text-gray-400 text-sm line-through">
                              {originalPrice}€
                            </span>
                          )}
                          <span className="font-bold text-brand-primary text-2xl">
                            {promoPrice}€
                          </span>
                          <span className="text-gray-500 text-sm">/mes</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700 hidden md:table-cell">
                        {item.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CTA debajo de la tabla */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-105"
            >
              Consultar disponibilidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
