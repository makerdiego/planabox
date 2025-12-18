// Configuración centralizada para PlanaBox
// Edita aquí los precios, contactos y contenido sin tocar componentes

export const config = {
  // Contacto
  contact: {
    whatsapp: "652922275", // Número sin espacios ni guiones para WhatsApp (652 92 22 75)
    whatsappDisplay: "652 92 22 75", // Número con formato para mostrar
    email: "info@planabox.es", // Email para contacto (opcional, no se muestra directamente)
    location: "Frente a la estación de tren de Castelló",
  },

  // Precios (IVA incluido)
  pricing: [
    { size: "1,5 m²", price: 49, description: "Para maletas, cajas y bici" },
    { 
      size: "2,0 m²", 
      price: 64, 
      originalPrice: 64, // Precio original
      promoPrice: 49, // Precio promocional para primeras reservas
      promoActive: true, // Activar promoción
      description: "Para maletas, cajas y bici",
      promoText: "Promoción especial primeras reservas"
    },
    { size: "3,0 m²", price: 89, description: "Mudanza parcial, herramientas" },
    { size: "5,0 m²", price: 135, description: "Habitación completa" },
    { size: "8–9 m²", price: 179, description: "Mini-almacén" },
  ],

  // Promoción especial
  specialPromo: {
    active: true,
    title: "Promoción especial: 2m² al precio de 1,5m²",
    description: "Trastero de 2m² a solo 49€/mes para las primeras reservas (precio normal: 64€/mes)",
    limit: "Solo primeras reservas",
  },

  // Badges del hero
  heroBadges: [
    "Desde 49€/mes",
    "Mínimo 1,5 m²",
    "Altura 2,4 m",
    "Puerta grande de carga",
  ],

  // Ventajas principales
  advantages: [
    {
      title: "Llave móvil",
      description: "Acceso mediante app móvil. Permisos revocables en tiempo real.",
      icon: "📱",
    },
    {
      title: "Pago automático",
      description: "SEPA o tarjeta. Olvídate de recordatorios y pagos manuales.",
      icon: "💳",
    },
    {
      title: "Recordatorios y suspensión",
      description: "Te avisamos antes del vencimiento. Si hay impago, se suspende el acceso según condiciones.",
      icon: "🔔",
    },
    {
      title: "Seguridad total",
      description: "CCTV 24/7, alarma y seguro incluido. Tu espacio está protegido.",
      icon: "🔒",
    },
  ],

  // Qué cabe en cada tamaño
  sizeContents: [
    {
      size: "1,5–2 m²",
      items: ["Maletas", "Cajas", "Bici"],
      icon: "📦",
    },
    {
      size: "3 m²",
      items: ["Mudanza parcial", "Herramientas"],
      icon: "🔧",
    },
    {
      size: "5 m²",
      items: ["Habitación completa"],
      icon: "🛏️",
    },
    {
      size: "8–9 m²",
      items: ["Mini-almacén"],
      icon: "🏢",
    },
  ],

  // Cómo funciona (3 pasos)
  howItWorks: [
    {
      step: 1,
      title: "Elige tamaño",
      description: "Selecciona el trastero que mejor se adapte a tus necesidades.",
    },
    {
      step: 2,
      title: "Contrata",
      description: "Completa el proceso en minutos y configura tu pago automático.",
    },
    {
      step: 3,
      title: "Accede con móvil",
      description: "Descarga la app y accede a tu espacio las 24 horas del día.",
    },
  ],

  // Seguridad y acceso
  securityFeatures: [
    "CCTV 24/7",
    "Alarma",
    "Accesos controlados",
    "Seguro (según modalidad)",
  ],

  // FAQ
  faqs: [
    {
      question: "¿Qué es la lista de espera y cuándo estará disponible?",
      answer:
        "PlanaBox está en fase de pre-lanzamiento. Al unirte a nuestra lista de espera, te garantizas ser uno de los primeros en acceder cuando abramos. Los primeros 50 usuarios obtendrán un 20% de descuento en los primeros 3 meses. Te contactaremos cuando estemos listos para abrir.",
    },
    {
      question: "¿Hay acceso 24/7?",
      answer:
        "Sí, cuando estemos operativos, podrás acceder a tu trastero en cualquier momento del día, todos los días del año, mediante la app móvil.",
    },
    {
      question: "¿Cómo funciona la llave móvil?",
      answer:
        "Descargas nuestra app, recibes tus credenciales y accedes al trastero escaneando un código QR o usando la función de apertura remota. Puedes gestionar permisos y compartir acceso si lo necesitas.",
    },
    {
      question: "¿Hay fianza?",
      answer:
        "Puede requerirse una fianza según el tamaño del trastero. Te informaremos de las condiciones durante el proceso de contratación.",
    },
    {
      question: "¿Permanencia mínima?",
      answer:
        "Consulta nuestras condiciones actuales. Ofrecemos flexibilidad para adaptarnos a tus necesidades.",
    },
    {
      question: "¿Qué pasa si hay impago?",
      answer:
        "Te enviamos recordatorios antes del vencimiento. Si no se realiza el pago, se suspende el acceso según las condiciones contratadas hasta regularizar la situación.",
    },
    {
      question: "¿Cómo se elige el tamaño?",
      answer:
        "Te recomendamos visitarnos o consultar nuestra guía de tamaños. También puedes contactarnos y te asesoramos según lo que necesites guardar.",
    },
    {
      question: "¿Puedo cambiar de tamaño?",
      answer:
        "Sí, si hay disponibilidad puedes cambiar a un trastero más grande o más pequeño. Contacta con nosotros para conocer las condiciones.",
    },
    {
      question: "¿Cómo doy de baja?",
      answer:
        "Puedes darte de baja comunicándolo con el aviso previo establecido en tu contrato. Retira tus pertenencias y finalizamos el proceso.",
    },
  ],

  // Lista de espera y promoción
  waitlist: {
    enabled: true,
    earlyBirdBenefit: "20% descuento en los primeros 3 meses",
    earlyBirdLimit: 50, // Primeros 50 en la lista
    comingSoon: "Próximamente en Castelló",
  },

  // SEO
  seo: {
    title: "PlanaBox - Trasteros Inteligentes en Castelló | Lista de Espera",
    description:
      "Únete a la lista de espera de PlanaBox: trasteros inteligentes en Castelló. Acceso 24/7, llave móvil y máxima seguridad. Beneficios especiales para primeros usuarios.",
    ogImage: "/images/og-planabox.png",
  },

  // Analytics events (placeholders)
  analytics: {
    trackEvent: (eventName: string, properties?: Record<string, any>) => {
      // TODO: Integrar con Google Analytics, Mixpanel, etc.
      if (typeof window !== "undefined") {
        console.log("Analytics Event:", eventName, properties);
        // Ejemplo: gtag('event', eventName, properties);
      }
    },
  },
};

