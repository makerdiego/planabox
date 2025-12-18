import { google } from "googleapis";

/**
 * Guarda datos en Google Sheets
 * 
 * Configuración requerida:
 * 1. Crear una cuenta de servicio en Google Cloud Console
 * 2. Habilitar Google Sheets API
 * 3. Compartir la hoja con el email de la cuenta de servicio
 * 4. Configurar las variables de entorno
 */
export async function appendToGoogleSheet(data: {
  name: string;
  phone: string;
  email?: string;
  size?: string;
  message?: string;
}) {
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!process.env.GOOGLE_SHEETS_CREDENTIALS) {
      throw new Error("GOOGLE_SHEETS_CREDENTIALS no está configurado");
    }

    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error("GOOGLE_SHEET_ID no está configurado");
    }

    // Parsear las credenciales JSON
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);

    // Autenticar usando cuenta de servicio
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key.replace(/\\n/g, "\n"),
        project_id: credentials.project_id,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // ID de la hoja de cálculo (de la URL)
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Nombre de la hoja dentro del documento (default: "Hoja 1" o "Sheet1")
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Hoja 1";

    // Preparar los datos a insertar
    const timestamp = new Date().toLocaleString("es-ES", {
      timeZone: "Europe/Madrid",
    });

    const rowData = [
      timestamp, // Fecha y hora
      data.name,
      data.phone,
      data.email || "No especificado",
      data.size || "No especificado",
      data.message || "Sin mensaje",
    ];

    // Verificar si la hoja tiene encabezados (primera fila)
    // Si no los tiene, los creamos
    const range = `${sheetName}!A:F`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:F1`,
    });

    const hasHeaders =
      response.data.values && response.data.values.length > 0;

    if (!hasHeaders) {
      // Crear encabezados si no existen
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:F1`,
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "Fecha y Hora",
              "Nombre",
              "Teléfono",
              "Email",
              "Tamaño",
              "Mensaje",
            ],
          ],
        },
      });
    }

    // Añadir nueva fila
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:F`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error guardando en Google Sheets:", error);
    throw error;
  }
}

