# Configuración de Google Sheets para PlanaBox

Esta guía te ayudará a configurar Google Sheets para guardar automáticamente los datos del formulario de lista de espera.

## 📋 Pasos para configurar

### 1. Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala, por ejemplo: "Lista de Espera PlanaBox"
4. **Copia el ID de la hoja** de la URL:
   ```
   https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID_AQUI/edit
   ```
   El ID es la parte larga entre `/d/` y `/edit`

### 2. Crear un proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuevo proyecto o selecciona uno existente
3. Nómbralo, por ejemplo: "PlanaBox"

### 3. Habilitar Google Sheets API

1. En el menú lateral, ve a **"APIs y servicios"** > **"Biblioteca"**
2. Busca **"Google Sheets API"**
3. Haz clic en **"Habilitar"**

### 4. Crear una Cuenta de Servicio

1. Ve a **"APIs y servicios"** > **"Credenciales"**
2. Haz clic en **"Crear credenciales"** > **"Cuenta de servicio"**
3. Completa:
   - **Nombre**: `planabox-sheets` (o el que prefieras)
   - **ID**: Se generará automáticamente
   - **Descripción**: "Cuenta de servicio para guardar lista de espera"
4. Haz clic en **"Crear y continuar"**
5. En "Conceder acceso a este proyecto", puedes saltarte este paso
6. Haz clic en **"Listo"**

### 5. Generar la clave JSON

1. En la lista de cuentas de servicio, encuentra la que acabas de crear
2. Haz clic en el email de la cuenta de servicio
3. Ve a la pestaña **"Claves"**
4. Haz clic en **"Agregar clave"** > **"Crear nueva clave"**
5. Selecciona **"JSON"**
6. Haz clic en **"Crear"**
7. Se descargará un archivo JSON - **GUÁRDALO EN UN LUGAR SEGURO**

### 6. Compartir la hoja con la cuenta de servicio

1. Abre el archivo JSON que descargaste
2. Copia el valor de `client_email` (algo como: `planabox-sheets@tu-proyecto.iam.gserviceaccount.com`)
3. Abre tu Google Sheet
4. Haz clic en el botón **"Compartir"** (arriba a la derecha)
5. Pega el email de la cuenta de servicio
6. Da permisos de **"Editor"**
7. Haz clic en **"Enviar"** (puedes desmarcar "Notificar a las personas")

### 7. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=tu_sheet_id_aqui
GOOGLE_SHEET_NAME=Hoja 1
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"tu-proyecto","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"planabox-sheets@tu-proyecto.iam.gserviceaccount.com","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"..."}
```

**⚠️ IMPORTANTE:**
- `GOOGLE_SHEET_ID`: El ID que copiaste en el paso 1
- `GOOGLE_SHEET_NAME`: El nombre de la pestaña/hoja (por defecto "Hoja 1" o "Sheet1")
- `GOOGLE_SHEETS_CREDENTIALS`: Todo el contenido del archivo JSON descargado, como una sola línea

### 8. Formato del JSON en .env.local

El JSON debe estar en una sola línea y con las comillas escapadas. Puedes usar una herramienta online como [jsonformatter.org](https://jsonformatter.org) para convertirlo, o usar este formato:

```env
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"...","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"..."}'
```

**Alternativa más simple:** Si tienes problemas con el formato JSON en una línea, puedes:

1. Crear un archivo `credentials.json` en la raíz del proyecto (pero **NO lo subas a Git**)
2. Añadir `credentials.json` al `.gitignore`
3. Modificar `lib/googleSheets.ts` para leer del archivo en lugar de la variable de entorno

### 9. Configurar en Vercel (para producción)

1. Ve a tu proyecto en Vercel
2. Ve a **Settings** > **Environment Variables**
3. Añade las tres variables:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME` (opcional, por defecto "Hoja 1")
   - `GOOGLE_SHEETS_CREDENTIALS` (el JSON completo en una línea)

### 10. Estructura de la hoja

La hoja se creará automáticamente con estos encabezados:
- Fecha y Hora
- Nombre
- Teléfono
- Email
- Tamaño
- Mensaje

No necesitas crear los encabezados manualmente, se crearán automáticamente la primera vez que se use.

## ✅ Verificar que funciona

1. Reinicia el servidor de desarrollo: `npm run dev`
2. Llena el formulario en la web
3. Revisa tu Google Sheet - deberías ver una nueva fila con los datos

## 🔒 Seguridad

- **NUNCA** subas el archivo JSON de credenciales a Git
- Asegúrate de que `.env.local` esté en `.gitignore`
- En producción, usa las variables de entorno de Vercel
- La cuenta de servicio solo debe tener acceso a la hoja específica

## 🐛 Solución de problemas

### Error: "GOOGLE_SHEETS_CREDENTIALS no está configurado"
- Verifica que el archivo `.env.local` existe
- Verifica que las variables estén escritas correctamente
- Reinicia el servidor después de cambiar `.env.local`

### Error: "The caller does not have permission"
- Asegúrate de compartir la hoja con el email de la cuenta de servicio
- Verifica que le diste permisos de "Editor"

### Error: "Unable to parse range"
- Verifica que `GOOGLE_SHEET_NAME` coincida exactamente con el nombre de la pestaña
- Si la hoja se llama "Sheet1", usa `GOOGLE_SHEET_NAME=Sheet1`
- Si la hoja se llama "Hoja 1", usa `GOOGLE_SHEET_NAME=Hoja 1`

### Error de formato JSON
- Asegúrate de que el JSON esté en una sola línea
- Las comillas dentro del JSON deben estar escapadas
- Puedes usar comillas simples para envolver todo: `GOOGLE_SHEETS_CREDENTIALS='{...}'`

## 📝 Notas adicionales

- Los datos se añaden como nuevas filas (no sobrescribe)
- Cada envío del formulario crea una nueva fila
- La fecha y hora se guarda en formato español (Europe/Madrid)
- Si Google Sheets falla, el formulario sigue funcionando y guarda en logs

