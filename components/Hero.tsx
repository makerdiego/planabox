"use client";

import Image from "next/image";
import { config } from "@/lib/config";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa conocer más sobre PlanaBox"
    );
    window.open(
      `https://wa.me/34${config.contact.whatsapp.replace(/\D/g, "")}?text=${message}`,
      "_blank"
    );
    config.analytics.trackEvent("whatsapp_click", { source: "hero" });
  };


  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("lista-espera");
    waitlistSection?.scrollIntoView({ behavior: "smooth" });
    config.analytics.trackEvent("join_waitlist_click", { source: "hero" });
  };

  return (
    <section className="relative bg-gradient-light py-20 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-primary/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Badge de "Próximamente" */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-semibold mb-6">
              <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
              {config.waitlist.comingSoon}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight">
              Trasteros inteligentes en Castelló
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Acceso 24/7 con llave móvil, pago automático y máxima seguridad.
              <span className="block mt-2 font-semibold text-brand-primary">Frente a la estación de tren.</span>
            </p>

            {config.specialPromo.active && (
              <div className="mb-6 p-4 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 border-2 border-brand-primary/30 rounded-xl">
                <p className="text-lg font-bold text-brand-primary mb-1">
                  🎁 Promoción especial de lanzamiento
                </p>
                <p className="text-brand-dark font-semibold">
                  Trastero 2m² a <span className="text-brand-primary text-xl">49€/mes</span> para primeras reservas
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              {config.heroBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-xl text-brand-dark font-medium shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToWaitlist}
                className="px-8 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-105"
              >
                Únete a la lista de espera
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-brand-primary hover:bg-brand-light"
              >
                Hablar por WhatsApp
              </button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-white to-brand-light rounded-2xl shadow-glow flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <Image
              src="/images/hero-planabox.png"
              alt="PlanaBox - Trasteros inteligentes"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

