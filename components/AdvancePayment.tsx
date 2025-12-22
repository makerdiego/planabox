export default function AdvancePayment() {
  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-8">
            Ahorra con pago anticipado
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center">
            Si sabes que vas a necesitar tu trastero durante un tiempo, puedes ahorrar con estas opciones:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
              <div className="text-3xl flex-shrink-0">💰</div>
              <div>
                <h3 className="font-bold text-brand-dark text-xl mb-2">
                  10% de descuento pagando 6 meses por adelantado
                </h3>
                <p className="text-gray-700">
                  Ideal para periodos de mudanza o almacenamiento temporal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-brand-primary/10 rounded-xl border-2 border-brand-primary/30">
              <div className="text-3xl flex-shrink-0">💎</div>
              <div>
                <h3 className="font-bold text-brand-dark text-xl mb-2">
                  15% de descuento pagando 12 meses por adelantado
                </h3>
                <p className="text-gray-700">
                  La mejor opción para ahorro máximo y tranquilidad durante todo el año.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-light p-6 rounded-xl mb-6">
            <p className="text-gray-700 text-center">
              <span className="font-semibold">El descuento se aplica sobre el precio mensual del trastero.</span>
              <br />
              Ideal para evitar subidas y olvidarte de pagos mensuales.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong>Condiciones:</strong> Descuentos válidos para nuevas altas. Pago anticipado no reembolsable. No acumulable con otras promociones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

