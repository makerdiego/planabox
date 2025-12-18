"use client";

import { config } from "@/lib/config";
import LocationMap from "@/components/LocationMap";

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Ubicación
          </h2>
          <p className="text-xl text-gray-600">
            {config.contact.location}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <LocationMap 
            lat={config.contact.coordinates.lat} 
            lng={config.contact.coordinates.lng} 
            radiusMeters={config.contact.coordinates.radiusMeters} 
          />
        </div>
      </div>
    </section>
  );
}

