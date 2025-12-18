import { config } from "@/lib/config";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
          Cómo funciona
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 relative">
          {config.howItWorks.map((step, index) => (
            <div key={step.step} className="text-center group relative">
              {index < config.howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-primary/30 to-transparent z-0"></div>
              )}
              <div className="relative inline-block mb-6 z-10">
                <div className="w-20 h-20 gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-glow group-hover:shadow-glow-hover transition-all transform group-hover:scale-110">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

