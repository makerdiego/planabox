"use client";

import Link from "next/link";
import { config } from "@/lib/config";

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa la promo de 2 m² a 49€/mes (3 meses). ¿Hay disponibilidad? ¿Cómo funciona el acceso 24/7 con llave móvil?"
    );
    window.open(
      `https://wa.me/34${config.contact.whatsapp.replace(/\D/g, "")}?text=${message}`,
      "_blank"
    );
    config.analytics.trackEvent("whatsapp_click", { source: "footer" });
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Información de la empresa */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-brand-primary">PlanaBox</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Trasteros inteligentes en Castelló de la Plana. Acceso 24/7 con llave móvil, 
              pago automático y máxima seguridad. Frente a la estación de tren.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              <strong>Ubicación:</strong> {config.contact.location}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-4 py-2 bg-brand-primary/20 hover:bg-brand-primary/30 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-semibold">WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-primary">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#precios" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#lista-espera" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Lista de espera
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces legales */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-primary">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aviso-legal" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Información legal y copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-400">
            <div>
              <p className="mb-2">
                © {new Date().getFullYear()} PlanaBox. Todos los derechos reservados.
              </p>
              <p className="text-xs">
                Los precios y promociones son indicativos y pueden estar sujetos a cambios.
                Promociones limitadas para primeras reservas.
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs">
                Trasteros inteligentes en Castelló de la Plana
              </p>
              <p className="text-xs mt-1">
                Pre-lanzamiento - Lista de espera activa
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
