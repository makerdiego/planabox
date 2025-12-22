"use client";

import Image from "next/image";
import { config } from "@/lib/config";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa un trastero pequeño desde 49€/mes. ¿Hay disponibilidad?"
    );
    window.open(
      `https://wa.me/34${config.contact.whatsapp.replace(/\D/g, "")}?text=${message}`,
      "_blank"
    );
    config.analytics.trackEvent("whatsapp_click", { source: "hero" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("lista-espera");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    config.analytics.trackEvent("cta_reservar", { source: "hero" });
  };

  return (
    <section className="relative bg-gradient-light pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-primary/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight">
              Trasteros en Castelló, frente a la estación.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Acceso las 24h, pago automático y máxima seguridad.
            </p>

            <p className="text-gray-600 mb-6 text-lg">
              Guarda tus cosas, sin horarios y sin complicaciones.
            </p>

            {/* Badge grande de promo */}
            {config.promo.active && (
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-brand-primary/15 border-2 border-brand-primary/30 rounded-xl text-brand-primary font-bold text-lg mb-2">
                  <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
                  {config.promo.badgeText}
                </div>
                <p className="text-sm text-gray-600 ml-1">
                  {config.promo.disclaimer}
                </p>
              </div>
            )}

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-105"
              >
                Reservar ahora
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-brand-primary hover:bg-brand-light"
              >
                WhatsApp
              </button>
            </div>

            {/* Features rápidas con iconos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {config.heroFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="text-sm font-semibold text-brand-dark">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full bg-gradient-to-br from-white to-brand-light rounded-2xl shadow-glow overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative w-full">
              <Image
                src="/images/hero-planabox.png"
                alt="PlanaBox - Trasteros inteligentes"
                width={800}
                height={600}
                className="w-full h-auto block"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
