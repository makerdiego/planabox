// Configuración centralizada para PlanaBox
// Edita aquí los precios, contactos y contenido sin tocar componentes

export const config = {
  // Promo principal (única promo)
  promo: {
    active: true,
    size: "2 m²",
    promoPrice: 49, // €/mes durante los primeros 3 meses
    standardPrice: 64, // €/mes después de los 3 meses
    months: 3, // Duración de la promo
    maxUnits: 20, // Primeras 20 altas
    badgeText: "Promo lanzamiento: 2 m² a 49€/mes durante 3 meses · primeras 20 altas",
    disclaimer: "Después: 64€/mes. Oferta sujeta a disponibilidad.",
  },

  // Contacto
  contact: {
    whatsapp: "644536626", // Número sin espacios ni guiones para WhatsApp (644 536 626)
    whatsappDisplay: "644 536 626", // Número con formato para mostrar
    email: "info@planabox.es", // Email para contacto (opcional, no se muestra directamente)
    location: "Frente a la estación de tren de Castelló",
    whatsappResponseTime: "Respondemos en horario comercial.",
    // Coordenadas para el mapa
    coordinates: {
      lat: 39.98985784831499,
      lng: -0.0510708180475834,
      radiusMeters: 50, // Radio del círculo en metros
    },
  },

  // Precios (IVA incluido) - Simplificado a 3 categorías principales
  pricing: [
    {
      category: "Pequeños",
      size: "≈ 1,5 – 2 m²",
      price: 49,
      description: "Cajas, maletas, bicicletas y herramientas.",
      promoActive: true,
      promoPrice: 49,
      promoMonths: 3,
    },
    {
      category: "Medianos",
      size: "≈ 3 – 4 m²",
      price: 89,
      description: "Mudanza parcial o material profesional.",
    },
    {
      category: "Grandes",
      size: "≈ 5 – 6 m²",
      price: 135,
      description: "Habitación completa o trastero familiar.",
    },
    {
      category: "XL / Especiales",
      size: "≈ 8 m² o más",
      price: null,
      description: "Consultar disponibilidad",
      isConsultar: true,
    },
  ],

  // Features rápidas del hero (3 iconos)
  heroFeatures: [
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

  // Qué puedes guardar
  allowedItems: {
    title: "Qué puedes guardar",
    items: [
      "Herramientas",
      "Escaleras",
      "Cubos",
      "Cajas, maletas",
      "Bicicletas",
      "Estanterías",
      "Material seco (sin líquidos peligrosos)",
    ],
    description: "Puedes guardar herramientas, escaleras, cubos, cajas, maletas, bicis, estanterías y material seco sin problema.",
  },

  // Qué no está permitido
  prohibitedItems: {
    title: "Qué no está permitido",
    items: [
      "Productos inflamables, tóxicos o peligrosos (gasolina, disolventes, pinturas abiertas, bombonas)",
      "Alimentos perecederos",
      "Animales",
      "Materiales con olores fuertes",
      "Cualquier contenido ilegal",
    ],
    description: "Por seguridad no se permite almacenar productos inflamables, tóxicos o peligrosos (gasolina, disolventes, pinturas abiertas, bombonas), alimentos perecederos, animales, materiales con olores fuertes ni cualquier contenido ilegal.",
  },

  // Responsabilidad y limpieza
  responsibility: {
    title: "Responsabilidad y limpieza",
    description: "Cada cliente es responsable del uso de su trastero. El espacio debe devolverse en buen estado; si hubiera suciedad, manchas o daños, se repercutirá el coste de limpieza o reparación (normalmente contra fianza, si aplica). Los trasteros son para almacenaje, no para realizar actividades dentro.",
  },

  // Seguridad y acceso (consistente con seguro incluido)
  securityFeatures: [
    "CCTV 24/7",
    "Alarma",
    "Accesos controlados con llave móvil",
    "Seguro incluido",
    "Acceso 24/7",
    "Puerta grande de carga",
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
        "El acceso al centro se realiza mediante PIN personal, activo mientras los pagos estén al día. Recibes tu pin personal y accedes al recinto. Cada cliente cierra su trastero con candado propio. PlanaBox no dispone de llaves ni acceso al interior de los trasteros.",
    },
    {
      question: "¿Qué puedo guardar?",
      answer: "Puedes guardar herramientas, escaleras, cubos, cajas, maletas, bicis, estanterías y material seco sin problema. No se permite almacenar productos inflamables, tóxicos o peligrosos (gasolina, disolventes, pinturas abiertas, bombonas), alimentos perecederos, animales, materiales con olores fuertes ni cualquier contenido ilegal. Cada cliente es responsable del uso de su trastero. El espacio debe devolverse en buen estado; si hubiera suciedad, manchas o daños, se repercutirá el coste de limpieza o reparación (normalmente contra fianza, si aplica). Los trasteros son para almacenaje, no para realizar actividades dentro.",
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
        "El acceso al recinto está vinculado al cumplimiento de las obligaciones de pago. En caso de impago, se enviarán avisos automáticos y el acceso podrá suspenderse hasta la regularización. Si el impago se prolonga, el contrato podrá resolverse conforme a las condiciones y a los procedimientos legales correspondientes.",
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
      question: "¿El seguro está incluido?",
      answer:
        "Sí, seguro incluido con cobertura básica.",
    },
    {
      question: "¿Hay descuentos por larga duración?",
      answer:
        "Sí. Ofrecemos un 10% de descuento pagando 6 meses por adelantado y un 15% de descuento pagando 12 meses por adelantado. Es una opción ideal si buscas estabilidad y ahorro.",
    },
    {
      question: "¿Cómo doy de baja?",
      answer:
        "Puedes darte de baja comunicándolo con el aviso previo establecido en tu contrato. Retira tus pertenencias y finalizamos el proceso.",
    },
  ],

  // SEO
  seo: {
    title: "PlanaBox | Trasteros en Castelló frente a la estación (24/7)",
    description:
      "Trasteros inteligentes en Castelló: acceso 24/7 con llave móvil, pago automático y máxima seguridad. Frente a la estación.",
    ogImage: "/images/share.jpeg",
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
