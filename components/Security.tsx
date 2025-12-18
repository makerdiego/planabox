import Image from "next/image";
import { config } from "@/lib/config";

export default function Security() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
          Seguridad y acceso
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-5">
                {config.securityFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-gray-700 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-brand-primary/20 transition-colors">
                      <svg
                        className="w-5 h-5 text-brand-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[300px] bg-gradient-to-br from-brand-light to-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100">
              <Image
                src="/images/security-icon.png"
                alt="Seguridad PlanaBox"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

