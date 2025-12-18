"use client";

import { useState } from "react";
import { config } from "@/lib/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Encontrar el índice de la pregunta "¿Qué puedo guardar?"
  const quePuedoGuardarIndex = config.faqs.findIndex(
    (faq) => faq.question.toLowerCase().includes("qué puedo guardar")
  );

  return (
    <section id="faq" className="py-20 bg-brand-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {config.faqs.map((faq, index) => {
            const isQuePuedoGuardar = index === quePuedoGuardarIndex;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-brand-light transition-colors group"
                >
                  <span className="font-semibold text-brand-dark text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <svg
                      className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-5 bg-brand-light border-t border-gray-100">
                    {isQuePuedoGuardar ? (
                      <div className="space-y-6">
                        {/* Qué puedes guardar */}
                        <div>
                          <h4 className="font-bold text-brand-dark mb-2">
                            {config.allowedItems.title}
                          </h4>
                          <p className="text-gray-700 mb-3 text-sm">
                            {config.allowedItems.description}
                          </p>
                          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {config.allowedItems.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Qué no está permitido */}
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="font-bold text-brand-dark mb-2">
                            {config.prohibitedItems.title}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {config.prohibitedItems.description}
                          </p>
                        </div>

                        {/* Responsabilidad y limpieza */}
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="font-bold text-brand-dark mb-2">
                            {config.responsibility.title}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {config.responsibility.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
