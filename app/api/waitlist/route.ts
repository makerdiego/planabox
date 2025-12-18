import { NextRequest, NextResponse } from "next/server";
import { appendToGoogleSheet } from "@/lib/googleSheets";

// Rate limiting simple (basado en IP)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Máximo 5 solicitudes
const RATE_LIMIT_WINDOW = 60000; // Por minuto (60 segundos)

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown";
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(key);

  if (!record || now > record.resetTime) {
    requestCounts.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Sanitizar y validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Sanitizar y validar teléfono (español básico)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[0-9\s\-()]{9,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Sanitizar texto
function sanitizeText(text: string, maxLength: number = 500): string {
  return text
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ""); // Eliminar caracteres peligrosos básicos
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Por favor, espera un momento." },
        { status: 429 }
      );
    }

    const body = await request.json();
    let { name, phone, email, size, message } = body;

    // Validación básica
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Sanitizar y validar datos
    name = sanitizeText(name, 100);
    email = email.trim().toLowerCase();
    phone = phone.trim();

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Teléfono inválido" },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: "El nombre debe tener al menos 2 caracteres" },
        { status: 400 }
      );
    }

    size = size ? sanitizeText(size, 50) : undefined;
    message = message ? sanitizeText(message, 500) : undefined;

    // Intentar guardar en Google Sheets si está configurado
    if (process.env.GOOGLE_SHEETS_CREDENTIALS && process.env.GOOGLE_SHEET_ID) {
      try {
        await appendToGoogleSheet({
          name,
          phone,
          email,
          size,
          message,
        });
        console.log("✅ Datos guardados en Google Sheets:", { name, email });
      } catch (sheetsError) {
        // Si falla Google Sheets, continuamos y logueamos
        console.error("⚠️ Error guardando en Google Sheets:", sheetsError);
        console.log("📝 Datos de la solicitud:", {
          name,
          phone,
          email,
          size: size || "No especificado",
          message: message || "Sin mensaje",
          timestamp: new Date().toISOString(),
        });
      }
    } else {
      // Si no está configurado Google Sheets, solo logueamos
      console.log("📝 Nueva solicitud de lista de espera (Google Sheets no configurado):", {
        name,
        phone,
        email,
        size: size || "No especificado",
        message: message || "Sin mensaje",
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Te has apuntado correctamente a la lista de espera" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error procesando solicitud:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

