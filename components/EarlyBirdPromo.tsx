"use client";

import { config } from "@/lib/config";

export default function EarlyBirdPromo() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("lista-espera");
    waitlistSection?.scrollIntoView({ behavior: "smooth" });
    config.analytics.trackEvent("early_bird_click", { source: "promo" });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-primary via-[#256d43] to-[#1a5a35] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            🎉 Campaña Early Bird
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sé uno de los primeros {config.waitlist.earlyBirdLimit}
          </h2>
          {config.specialPromo.active && (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold mb-2">
                🎁 Trastero 2m² a 49€/mes
              </p>
              <p className="text-lg text-white/90">
                {config.specialPromo.description}
              </p>
            </div>
          )}
          <p className="text-xl md:text-2xl mb-2 text-white/90">
            {config.waitlist.earlyBirdBenefit}
          </p>
          <p className="text-lg mb-8 text-white/80">
            Únete a nuestra lista de espera y obtén beneficios exclusivos cuando abramos
          </p>
          <button
            onClick={scrollToWaitlist}
            className="px-8 py-4 bg-white text-brand-primary rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gray-50"
          >
            Únete ahora →
          </button>
        </div>
      </div>
    </section>
  );
}

