"use client";

import { useState } from "react";
import { config } from "@/lib/config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    size: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setLoading(false);
        config.analytics.trackEvent("waitlist_signup", {
          size: formData.size,
          source: "waitlist_form",
        });
        
          setTimeout(() => {
            setFormData({ name: "", phone: "", email: "", size: "", message: "" });
          }, 5000);
      } else {
        // Obtener el mensaje de error específico del servidor
        const errorData = await response.json().catch(() => ({ error: "Error desconocido" }));
        setLoading(false);
        alert(errorData.error || "Hubo un error al enviar el formulario. Por favor, intenta de nuevo o contáctanos por WhatsApp.");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setLoading(false);
      alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo o contáctanos por WhatsApp.");
    }
  };

  const handleWhatsAppClick = (size?: string) => {
    const sizeText = size || "2 m²";
    const message = encodeURIComponent(
      `Hola, me interesa la promo de ${sizeText} a 49€/mes (3 meses). ¿Hay disponibilidad? ¿Cómo funciona el acceso 24/7 con llave móvil?`
    );
    window.open(
      `https://wa.me/34${config.contact.whatsapp.replace(/\D/g, "")}?text=${message}`,
      "_blank"
    );
    config.analytics.trackEvent("whatsapp_click", { source: "contact", size });
  };

  return (
    <section id="lista-espera" className="py-20 bg-gradient-light scroll-mt-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-semibold mb-4">
            📋 Únete a la lista de espera
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Reserva tu trastero
          </h2>
          <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            Promo limitada a primeras {config.promo.maxUnits} altas
          </p>
          <p className="text-gray-500">
            {config.contact.location}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* WhatsApp */}
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              O contáctanos por WhatsApp
            </h3>
            <div className="space-y-4 mb-8">
              <button
                onClick={() => handleWhatsAppClick()}
                className="w-full px-6 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Hablar por WhatsApp
              </button>
              <div className="text-center text-gray-600">
                <p className="text-sm">Responde rápido, normalmente en menos de 1 hora</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gradient-to-br from-white to-brand-light p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Formulario de lista de espera
            </h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-brand-dark mb-2">¡Te has apuntado correctamente!</p>
                <p className="text-gray-600">Te contactaremos pronto para confirmar tu lugar en la lista.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo *"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono *"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (opcional)"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                />
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all bg-white"
                >
                  <option value="">Tamaño de interés</option>
                  {config.pricing.map((item, index) => {
                    const hasPromo = (item as any).promoActive && (item as any).promoPrice;
                    const displayPrice = hasPromo ? (item as any).promoPrice : item.price;
                    return (
                      <option key={index} value={item.size}>
                        {item.size} - {displayPrice}€/mes
                      </option>
                    );
                  })}
                </select>
                <textarea
                  name="message"
                  placeholder="Cuéntanos cuándo lo necesitarías o cualquier pregunta (opcional)"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none transition-all"
                />
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full px-6 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Apuntarme a la lista de espera"
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Al apuntarte, aceptas que te contactemos para informarte sobre el lanzamiento
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
