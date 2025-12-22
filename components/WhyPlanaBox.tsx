export default function WhyPlanaBox() {
  const features = [
    {
      icon: "🔑",
      title: "Acceso inteligente con móvil",
      description: "Entra con tu móvil o pin. El acceso está vinculado a estar al día de pago.",
    },
    {
      icon: "💳",
      title: "Pago automático",
      description: "Domiciliación o tarjeta. Te olvidas de gestionar pagos cada mes.",
    },
    {
      icon: "🔔",
      title: "Avisos y control de impagos",
      description: "Recordatorios automáticos y suspensión de acceso si no hay pago.",
    },
    {
      icon: "🕓",
      title: "Acceso 24/7 real",
      description: "Entra cuando quieras, todos los días del año.",
    },
    {
      icon: "🔒",
      title: "Máxima seguridad",
      description: "CCTV 24/7, alarma, accesos controlados y seguro incluido.",
    },
    {
      icon: "🚉",
      title: "Ubicación inmejorable",
      description: "Frente a la estación de tren de Castelló, con puerta grande de carga.",
    },
  ];

  return (
    <section id="por-que-planabox" className="py-20 bg-gradient-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-sm md:text-base font-semibold text-brand-primary uppercase tracking-wide mb-2">
            POR QUÉ PLANABOX
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12">
            Por qué elegir PlanaBox
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary/30 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

