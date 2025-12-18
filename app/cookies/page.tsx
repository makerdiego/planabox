import Link from "next/link";

export const metadata = {
  title: "Política de Cookies - PlanaBox",
  description: "Política de cookies de PlanaBox",
};

export default function Cookies() {
  return (
    <div className="min-h-screen bg-brand-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-8">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, 
                tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca 
                su dispositivo y almacene información sobre sus preferencias o acciones pasadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="text-xl font-semibold text-brand-dark mb-3 mt-6">Cookies Técnicas (Necesarias)</h3>
              <p>
                Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse. 
                Permiten funciones básicas como la navegación y el acceso a áreas seguras del sitio web.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Finalidad:</strong> Permitir el funcionamiento básico del sitio web</li>
                <li><strong>Duración:</strong> Sesión o permanente</li>
                <li><strong>Opcionalidad:</strong> No pueden desactivarse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Cookies de Terceros</h2>
              <p>
                Actualmente, este sitio web no utiliza cookies de terceros para publicidad o análisis. 
                Si en el futuro implementamos servicios de análisis (como Google Analytics) o publicidad, 
                actualizaremos esta política para informarle adecuadamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Gestión de Cookies</h2>
              <p>
                Puede controlar y gestionar las cookies en su navegador. La mayoría de los navegadores 
                permiten rechazar todas las cookies, aceptar solo las cookies de primera parte o recibir 
                una notificación antes de que se almacene una cookie.
              </p>
              <p className="mt-4">
                Puede encontrar información sobre cómo gestionar las cookies en los navegadores más comunes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Consentimiento</h2>
              <p>
                Al continuar navegando por este sitio web después de haber sido informado sobre el uso 
                de cookies, entendemos que acepta el uso de cookies técnicas necesarias para el funcionamiento 
                del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Actualizaciones de esta Política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Cookies. Le recomendamos revisar 
                esta página periódicamente para estar informado sobre cualquier cambio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos por WhatsApp 
                al 652 92 22 75.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="text-brand-primary hover:text-brand-dark font-semibold transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

