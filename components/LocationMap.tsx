"use client";

interface LocationMapProps {
  lat: number;
  lng: number;
  radiusMeters?: number;
}

export default function LocationMap({ lat, lng }: LocationMapProps) {
  // URL de Google Maps Embed (no requiere API key) - simplemente coordenadas
  const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es&z=17&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación PlanaBox - Frente a la estación de tren de Castelló"
      />
    </div>
  );
}
