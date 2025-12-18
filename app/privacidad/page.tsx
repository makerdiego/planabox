import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad - PlanaBox",
  description: "Política de privacidad y protección de datos de PlanaBox",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-brand-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Responsable del Tratamiento</h2>
              <p>
                PlanaBox es el responsable del tratamiento de los datos personales que nos proporcione 
                a través de este sitio web o mediante el formulario de lista de espera.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Denominación:</strong> PlanaBox</li>
                <li><strong>Dirección:</strong> Frente a la estación de tren de Castelló de la Plana</li>
                <li><strong>Contacto:</strong> WhatsApp 644 536 626</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Datos que Recopilamos</h2>
              <p>
                Recopilamos los siguientes datos personales cuando se inscribe en nuestra lista de espera:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nombre completo:</strong> Para identificarlo personalmente</li>
                <li><strong>Teléfono:</strong> Para contactarle y confirmar su interés</li>
                <li><strong>Email:</strong> Para enviarle información sobre el lanzamiento y promociones</li>
                <li><strong>Tamaño de interés:</strong> Para conocer sus necesidades y preparar la oferta</li>
                <li><strong>Mensaje:</strong> Información adicional que desee compartir (opcional)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Finalidad del Tratamiento</h2>
              <p>
                Sus datos personales serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar su inscripción en la lista de espera</li>
                <li>Contactarle para informarle sobre el lanzamiento de PlanaBox</li>
                <li>Enviarle información sobre promociones y ofertas especiales</li>
                <li>Confirmar su interés y facilitar el proceso de contratación cuando estemos operativos</li>
                <li>Mejorar nuestros servicios y comunicación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Base Legal</h2>
              <p>
                El tratamiento de sus datos personales se basa en:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consentimiento del interesado:</strong> Al rellenar el formulario, usted consiente 
                el tratamiento de sus datos para las finalidades indicadas</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Conservación de Datos</h2>
              <p>
                Sus datos personales se conservarán mientras mantenga su inscripción en la lista de espera 
                y, posteriormente, durante los plazos legalmente establecidos. Si desea darse de baja de 
                la lista de espera, puede solicitarlo en cualquier momento contactándonos por WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales 
                contra el acceso no autorizado, la alteración, divulgación o destrucción. Sus datos se almacenan 
                de forma segura y solo son accesibles por personal autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Derechos del Usuario</h2>
              <p>
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> Obtener información sobre sus datos personales que tratamos</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos personales</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos personales</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinadas circunstancias</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Retirar el consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puede contactarnos por WhatsApp al 644 536 626.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Compartir Datos</h2>
              <p>
                No compartimos sus datos personales con terceros, excepto cuando sea necesario para cumplir 
                con obligaciones legales o cuando sea necesario para la prestación del servicio (por ejemplo, 
                almacenamiento seguro en Google Sheets para gestionar la lista de espera).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">9. Cookies</h2>
              <p>
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. Para más información, 
                consulte nuestra{" "}
                <Link href="/cookies" className="text-brand-primary hover:underline">
                  Política de Cookies
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">10. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad. Las modificaciones 
                serán publicadas en esta página y, si son sustanciales, le notificaremos por email o WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">11. Contacto</h2>
              <p>
                Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de sus datos, 
                puede contactarnos por WhatsApp al 644 536 626.
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

