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
      promoText: "PROMO"
    },
    { size: "3,0 m²", price: 89, description: "Mudanza parcial, herramientas" },
    { size: "5,0 m²", price: 135, description: "Habitación completa" },
    { size: "8–9 m²", price: 179, description: "Mini-almacén" },
  ],

  // Promoción especial
  specialPromo: {
    active: true,
    badgeText: "Promo lanzamiento: 2 m² a 49€/mes (primeras reservas)",
    title: "Promoción especial: 2m² al precio de 1,5m²",
    description: "Trastero de 2m² a solo 49€/mes para las primeras reservas (precio normal: 64€/mes)",
    limit: "Solo primeras reservas",
  },

  // Features rápidas del hero (4 iconos)
  heroFeatures: [
    {
      title: "Llave móvil",
      icon: "🔑",
    },
    {
      title: "Pago automático",
      icon: "💳",
    },
    {
      title: "Recordatorios",
      icon: "🔔",
    },
    {
      title: "Acceso 24/7 + CCTV/alarma",
      icon: "🔒",
    },
  ],

  // Qué cabe en cada tamaño (mejorado con objetos realistas)
  sizeContents: [
    {
      size: "1,5–2 m²",
      items: ["6–10 cajas grandes", "2 maletas grandes", "Bici"],
      description: "Altura 2,4m: se aprovecha en vertical",
      icon: "📦",
    },
    {
      size: "3 m²",
      items: ["Estantería", "Bici", "Herramientas", "Cajas apiladas"],
      description: "Altura 2,4m: se aprovecha en vertical",
      icon: "🔧",
    },
    {
      size: "5 m²",
      items: ["Habitación completa", "Colchón", "Cajas", "Estantería"],
      description: "Altura 2,4m: se aprovecha en vertical",
      icon: "🛏️",
    },
    {
      size: "8–9 m²",
      items: ["Mini-almacén", "Mudanza piso 1 habitación"],
      description: "Altura 2,4m: se aprovecha en vertical",
      icon: "🏢",
    },
  ],

  // Seguridad y acceso (ampliado)
  securityFeatures: [
    "Acceso 24/7",
    "Llave móvil con permisos revocables",
    "CCTV 24/7 con grabación",
    "Alarma",
    "Seguro: según modalidad",
    "Puerta grande de carga",
  ],

  // Testimonios/Prueba social
  testimonials: [
    {
      text: "Acceso 24/7 y puerta de carga: comodísimo. Puedo ir cuando quiero sin complicaciones.",
      author: "Cliente",
    },
    {
      text: "Lo de pagar automático me salva. No tengo que preocuparme de nada.",
      author: "Cliente",
    },
    {
      text: "Muy seguro y fácil de contratar. La llave móvil funciona perfecto.",
      author: "Cliente",
    },
  ],

  // FAQ (10 preguntas estratégicas)
  faqs: [
    {
      question: "¿Acceso 24/7?",
      answer:
        "Sí, puedes acceder a tu trastero en cualquier momento del día, todos los días del año, mediante la app móvil.",
    },
    {
      question: "¿Cómo funciona la llave móvil?",
      answer:
        "Descargas nuestra app, recibes tus credenciales y accedes al trastero escaneando un código QR o usando la función de apertura remota. Puedes gestionar permisos y compartir acceso si lo necesitas.",
    },
    {
      question: "¿Qué puedo guardar?",
      answer:
        "Puedes guardar herramientas, muebles, cajas, bicicletas, electrodomésticos y otros objetos de uso doméstico. No se permiten materiales inflamables, tóxicos, perecederos o ilegales.",
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
      question: "¿Cómo elijo tamaño?",
      answer:
        "Te recomendamos visitarnos o consultar nuestra guía de tamaños. También puedes contactarnos y te asesoramos según lo que necesites guardar.",
    },
    {
      question: "¿Puedo cambiar de tamaño?",
      answer:
        "Sí, si hay disponibilidad puedes cambiar a un trastero más grande o más pequeño. Contacta con nosotros para conocer las condiciones.",
    },
    {
      question: "¿Seguro incluido?",
      answer:
        "El seguro disponible dependerá de la modalidad contratada. Te informaremos de las opciones disponibles durante el proceso de contratación.",
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
    socialProof: "Apertura próxima · primeras unidades con promo",
  },

  // SEO
  seo: {
    title: "PlanaBox | Trasteros en Castelló frente a la estación (24/7)",
    description:
      "Trasteros inteligentes en Castelló: acceso 24/7 con llave móvil, pago automático y máxima seguridad. Frente a la estación.",
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
