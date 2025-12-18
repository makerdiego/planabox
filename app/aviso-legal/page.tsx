import Link from "next/link";

export const metadata = {
  title: "Aviso Legal - PlanaBox",
  description: "Aviso legal de PlanaBox - Trasteros inteligentes en Castelló",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-brand-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-8">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Datos Identificativos</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios 
                de la Sociedad de la Información y de Comercio Electrónico, se informa que el 
                presente sitio web es propiedad de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Denominación:</strong> PlanaBox</li>
                <li><strong>Dirección:</strong> Frente a la estación de tren de Castelló de la Plana</li>
                <li><strong>Contacto:</strong> 644 536 626</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Objeto</h2>
              <p>
                El presente Aviso Legal regula el uso del sitio web www.planabox.es (en adelante, 
                el "Sitio Web"), propiedad de PlanaBox. El acceso y uso del Sitio Web atribuye la 
                condición de Usuario e implica la aceptación de todas las condiciones incluidas en 
                este Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Condiciones de Uso</h2>
              <p>
                El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios que 
                PlanaBox ofrece a través del Sitio Web y, con carácter enunciativo pero no limitativo, 
                a no emplearlos para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, 
                de apología del terrorismo o atentatorio contra los derechos humanos</li>
                <li>Provocar daños en los sistemas físicos y lógicos de PlanaBox, de sus proveedores o 
                de terceras personas</li>
                <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros 
                usuarios y modificar o manipular sus mensajes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos del Sitio Web, entendiendo por estos, a título meramente 
                enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, 
                así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad 
                pertenece a PlanaBox, sin que puedan entenderse cedidos al Usuario ninguno de los 
                derechos de explotación sobre los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
              <p>
                PlanaBox no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier 
                naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los 
                contenidos, falta de disponibilidad del portal o la transmisión de virus o programas 
                maliciosos o lesivos en los contenidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Modificaciones</h2>
              <p>
                PlanaBox se reserva el derecho de efectuar sin previo aviso las modificaciones que 
                considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los 
                contenidos y servicios que se presten a través de la misma como la forma en la que 
                éstos aparezcan presentados o localizados en el Sitio Web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Lista de Espera</h2>
              <p>
                La inscripción en la lista de espera no constituye una reserva ni garantiza la 
                disponibilidad de un trastero. Los precios y promociones mostrados son indicativos 
                y pueden estar sujetos a cambios. PlanaBox se reserva el derecho de modificar las 
                condiciones y precios antes de la apertura oficial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Legislación Aplicable</h2>
              <p>
                La relación entre PlanaBox y el Usuario se regirá por la normativa española vigente 
                y cualquier controversia se someterá a los Juzgados y tribunales de Castellón de la Plana.
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

