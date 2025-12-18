import { config } from "@/lib/config";

export default function PricingTable() {
  return (
    <section id="precios" className="py-20 bg-gradient-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
          Precios previstos
        </h2>
        <p className="text-center text-gray-600 mb-2">
          IVA incluido
        </p>
        {config.specialPromo.active && (
          <div className="bg-brand-primary/10 border-2 border-brand-primary/30 rounded-xl p-4 max-w-2xl mx-auto mb-4">
            <p className="text-brand-primary font-bold text-lg mb-1">
              🎁 {config.specialPromo.title}
            </p>
            <p className="text-brand-dark font-semibold">
              {config.specialPromo.description}
            </p>
          </div>
        )}
        <p className="text-center text-brand-primary font-semibold mb-12">
          Los primeros {config.waitlist.earlyBirdLimit} obtendrán un 20% de descuento en los primeros 3 meses
        </p>

        <div className="max-w-4xl mx-auto mt-12">
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
                              ¡OFERTA!
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
                          {hasPromo && (
                            <span className="text-xs text-brand-primary font-semibold mt-1">
                              {(item as any).promoText}
                            </span>
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
        </div>
      </div>
    </section>
  );
}

