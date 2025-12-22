"use client";

import { config } from "@/lib/config";

export default function PricingTable() {
  const scrollToForm = () => {
    const formSection = document.getElementById("lista-espera");
    formSection?.scrollIntoView({ behavior: "smooth" });
    config.analytics.trackEvent("cta_consultar_disponibilidad", { source: "pricing" });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa un trastero pequeño desde 49€/mes. ¿Hay disponibilidad?"
    );
    window.open(
      `https://wa.me/34${config.contact.whatsapp.replace(/\D/g, "")}?text=${message}`,
      "_blank"
    );
    config.analytics.trackEvent("whatsapp_click", { source: "pricing" });
  };

  return (
    <section id="precios" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
          Precios
        </h2>
        <p className="text-center text-gray-600 mb-2">
          IVA incluido · Seguro incluido
        </p>
        <p className="text-center text-sm text-gray-500 mb-12">
          Promo limitada a primeras {config.promo.maxUnits} altas. Sujeta a disponibilidad.
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
                {config.pricing.map((item: any, index) => {
                  const hasPromo = item.promoActive && item.promoPrice;
                  const promoPrice = hasPromo ? item.promoPrice : item.price;
                  const standardPrice = hasPromo ? item.price : null;
                  const promoMonths = hasPromo ? item.promoMonths : null;
                  const isConsultar = item.isConsultar;
                  
                  return (
                    <tr
                      key={index}
                      className={`hover:bg-brand-light transition-all duration-200 hover:shadow-md ${
                        hasPromo ? "bg-brand-primary/5 border-l-4 border-brand-primary" : ""
                      }`}
                    >
                      <td className="px-6 py-5 font-semibold text-brand-dark text-lg">
                        <div className="flex flex-col gap-1">
                          {item.category && (
                            <span className="font-bold text-brand-primary">{item.category}</span>
                          )}
                          <div className="flex items-center gap-2">
                            {item.size}
                            {hasPromo && (
                              <span className="px-2 py-1 bg-brand-primary text-white text-xs font-bold rounded-full">
                                PROMO
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex flex-col items-end">
                          {isConsultar ? (
                            <span className="font-semibold text-gray-600">
                              Consultar disponibilidad
                            </span>
                          ) : hasPromo && standardPrice ? (
                            <>
                              <span className="text-gray-400 text-sm line-through">
                                {standardPrice}€/mes
                              </span>
                              <span className="font-bold text-brand-primary text-2xl">
                                Desde {promoPrice}€/mes
                              </span>
                              <span className="text-xs text-brand-primary font-semibold">
                                (por {promoMonths} meses)
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="font-bold text-brand-primary text-2xl">
                                Desde {item.price}€
                              </span>
                              <span className="text-gray-500 text-sm">/mes</span>
                            </>
                          )}
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

          {/* Texto recomendado */}
          <div className="text-center mt-6 mb-8">
            <p className="text-gray-700 text-lg">
              ¿No sabes qué tamaño elegir? Escríbenos y te ayudamos sin compromiso.
            </p>
            <p className="text-gray-600 mt-2">
              El tamaño más elegido es <span className="font-semibold text-brand-primary">Pequeños (2 m²)</span>.
            </p>
          </div>

          {/* CTAs debajo de la tabla */}
          <div className="text-center space-y-4">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-105"
            >
              Consultar disponibilidad
            </button>
            <div>
              <button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-white text-brand-primary rounded-xl font-semibold shadow-md hover:shadow-lg transition-all border-2 border-brand-primary hover:bg-brand-light inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </button>
              <p className="text-sm text-gray-600 mt-2">
                {config.contact.whatsappResponseTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
