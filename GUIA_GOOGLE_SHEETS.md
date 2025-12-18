# 📋 Guía: Configurar Google Sheets para el Formulario

Esta guía te llevará de la mano para que cuando alguien rellene el formulario, los datos se guarden automáticamente en una hoja de Google Sheets.

> 💡 **Nota:** Esta guía es para configuración **local** (desarrollo). Para producción en Vercel, después de seguir esta guía, consulta `DEPLOY.md` sección "Paso 9" para añadir las variables de entorno en Vercel.

## ✅ Lo que vamos a hacer

Crear un "bot" automático que cuando alguien rellene tu formulario, escriba esos datos en una hoja de Google Sheets que tú eliges.

---

## 📝 PASO 1: Crear la hoja de Google Sheets

1. Ve a [Google Sheets](https://sheets.google.com) en tu navegador
2. Haz clic en **"En blanco"** para crear una hoja nueva
3. Dale un nombre, por ejemplo: **"Lista de Espera PlanaBox"**
4. **IMPORTANTE:** Mira la URL de tu hoja. Verás algo como:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123XYZ456DEF789/edit
   ```
5. **Copia el ID** (la parte larga entre `/d/` y `/edit`). En el ejemplo sería: `1ABC123XYZ456DEF789`
6. **Guarda este ID** en un lugar seguro, lo necesitarás después

✅ **Ya tienes tu hoja lista. No necesitas escribir nada manualmente, se creará automáticamente.**

---

## 🔐 PASO 2: Crear cuenta de servicio en Google Cloud

Esto es como crear un "usuario automático" que puede escribir en tu hoja.

### 2.1. Ir a Google Cloud Console

1. Ve a: https://console.cloud.google.com
2. Si es la primera vez, acepta los términos
3. Haz clic en el selector de proyecto (arriba a la izquierda, donde dice "Seleccionar proyecto")

### 2.2. Crear un proyecto nuevo

1. Haz clic en **"NUEVO PROYECTO"**
2. Nombre del proyecto: `planabox` (o el que quieras)
3. Haz clic en **"Crear"**
4. Espera unos segundos y selecciona el proyecto recién creado

### 2.3. Activar Google Sheets API

1. En el menú lateral izquierdo, busca **"APIs y servicios"** → **"Biblioteca"**
2. En el buscador, escribe: **"Google Sheets API"**
3. Haz clic en **"Google Sheets API"**
4. Haz clic en el botón azul **"HABILITAR"**
5. Espera unos segundos hasta que diga "API habilitada"

✅ **Ya tienes la API activada.**

---

## 👤 PASO 3: Crear la cuenta de servicio (el "bot")

Esta cuenta es como un usuario automático que puede escribir en tu hoja.

### 3.1. Ir a Credenciales

1. En el menú lateral, ve a **"APIs y servicios"** → **"Credenciales"**
2. Arriba, haz clic en **"+ CREAR CREDENCIALES"**
3. Selecciona **"Cuenta de servicio"**

### 3.2. Configurar la cuenta de servicio

1. **Nombre de la cuenta de servicio:** `planabox-sheets` (o el que quieras)
2. Haz clic en **"Crear y continuar"**
3. En el siguiente paso (Opcional), puedes dejarlo vacío y hacer clic en **"Continuar"**
4. Haz clic en **"Listo"**

✅ **Ya tienes la cuenta creada.**

### 3.3. Descargar el archivo JSON (la "contraseña")

1. En la lista de cuentas de servicio, haz clic en el email que acabas de crear (algo como: `planabox-sheets@planabox-123456.iam.gserviceaccount.com`)
2. Ve a la pestaña **"CLAVES"** (Keys)
3. Haz clic en **"Agregar clave"** → **"Crear nueva clave"**
4. Selecciona **"JSON"**
5. Haz clic en **"Crear"**
6. Se descargará un archivo JSON en tu ordenador (algo como: `planabox-123456-abc123.json`)
7. **GUARDA ESTE ARCHIVO EN UN LUGAR SEGURO** (es como una contraseña)

✅ **Ya tienes el archivo JSON descargado.**

---

## 🔓 PASO 4: Dar permiso a la cuenta para escribir en tu hoja

Ahora le decimos a Google Sheets que permita que esta cuenta automática escriba en tu hoja.

1. Abre el archivo JSON que descargaste
2. Busca la línea que dice `"client_email"` (será algo como: `"client_email": "planabox-sheets@planabox-123456.iam.gserviceaccount.com"`)
3. **Copia ese email completo** (sin las comillas)
4. Ve a tu Google Sheet (la que creaste en el Paso 1)
5. Haz clic en el botón **"Compartir"** (arriba a la derecha)
6. Pega el email que copiaste
7. Asegúrate de que dice **"Editor"** (no "Lector")
8. **DESMARCA** la casilla "Notificar a las personas" (no queremos enviar email)
9. Haz clic en **"Compartir"** o **"Listo"**

✅ **Ya le diste permiso para escribir en tu hoja.**

---

## ⚙️ PASO 5: Configurar el código de tu página web

Ahora necesitas decirle a tu página web cómo conectarse a Google Sheets.

### 5.1. Abrir el archivo JSON

1. Abre el archivo JSON que descargaste en el Paso 3
2. **Copia TODO el contenido** del archivo (Ctrl+A, Ctrl+C)

### 5.2. Convertir el JSON a una sola línea

El código necesita que el JSON esté en una sola línea. Vamos a hacerlo:

**Opción A - Online (recomendado):**
1. Ve a: https://jsonformatter.org/json-minify
2. Pega el contenido completo del JSON
3. Haz clic en **"Minify"** o **"Minificar"**
4. Copia el resultado (ahora está en una sola línea)

**Opción B - Manual:**
- Elimina todos los saltos de línea del JSON (debe quedar todo en una línea)

### 5.3. Crear archivo .env.local

1. En la carpeta de tu proyecto `planabox`, crea un archivo llamado: `.env.local`
   - Si usas Windows y no sabes cómo, puedes crearlo como `env.local` y luego renombrarlo a `.env.local`
2. Abre el archivo `.env.local` con un editor de texto (Notepad, VS Code, etc.)
3. Pega este contenido y completa los valores:

```env
# ID de tu hoja de Google Sheets (el que copiaste en el Paso 1)
GOOGLE_SHEET_ID=1ABC123XYZ456DEF789

# Nombre de la pestaña/hoja (normalmente "Hoja 1" o "Sheet1")
GOOGLE_SHEET_NAME=Hoja 1

# Credenciales JSON en una sola línea (el JSON que minificaste)
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"planabox-123456","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"planabox-sheets@planabox-123456.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/planabox-sheets%40planabox-123456.iam.gserviceaccount.com"}
```

**IMPORTANTE:**
- Reemplaza `1ABC123XYZ456DEF789` con el ID de tu hoja (Paso 1)
- Reemplaza todo el contenido después de `GOOGLE_SHEETS_CREDENTIALS=` con el JSON minificado (todo en una línea)
- Si el nombre de tu pestaña no es "Hoja 1", cámbialo (puede ser "Sheet1" en inglés)

✅ **Ya tienes la configuración lista.**

---

## 🧪 PASO 6: Probar que funciona

1. **Reinicia el servidor** si lo tenías abierto:
   - Detén el servidor (Ctrl+C en la terminal)
   - Ejecuta: `npm run dev`
2. Ve a: http://localhost:3000
3. Baja hasta el formulario de lista de espera
4. **Rellena el formulario** con datos de prueba:
   - Nombre: Test
   - Teléfono: 123456789
   - Email: test@test.com
   - Tamaño: Cualquiera
5. Haz clic en **"Apuntarme a la lista de espera"**
6. Deberías ver un mensaje de confirmación
7. **Abre tu Google Sheet** - deberías ver una nueva fila con los datos que acabas de enviar

✅ **¡FUNCIONA!** Los datos se guardan automáticamente.

---

## 🚀 PASO 7: Configurar en producción (Vercel)

Cuando subas tu página a internet (Vercel), también necesitas configurar estas variables.

### 7.1. Ir a Vercel

1. Ve a: https://vercel.com
2. Inicia sesión
3. Selecciona tu proyecto `planabox`

### 7.2. Añadir variables de entorno

1. Ve a **"Settings"** (Configuración)
2. En el menú lateral, haz clic en **"Environment Variables"** (Variables de entorno)
3. Añade estas 3 variables:

   **Variable 1:**
   - Key: `GOOGLE_SHEET_ID`
   - Value: `1ABC123XYZ456DEF789` (tu ID de hoja)
   - Environments: Production, Preview, Development (marca todas)
   - Haz clic en **"Save"**

   **Variable 2:**
   - Key: `GOOGLE_SHEET_NAME`
   - Value: `Hoja 1` (o el nombre de tu pestaña)
   - Environments: Production, Preview, Development (marca todas)
   - Haz clic en **"Save"**

   **Variable 3:**
   - Key: `GOOGLE_SHEETS_CREDENTIALS`
   - Value: `{"type":"service_account",...}` (el JSON completo en una línea)
   - Environments: Production, Preview, Development (marca todas)
   - Haz clic en **"Save"**

4. **Vuelve a hacer deploy** de tu proyecto (Vercel lo hará automáticamente cuando subas cambios, o haz clic en "Redeploy")

✅ **Ya está configurado en producción.**

---

## ❓ Problemas comunes y soluciones

### ❌ Error: "GOOGLE_SHEETS_CREDENTIALS no está configurado"

**Solución:**
- Verifica que el archivo `.env.local` existe en la raíz del proyecto
- Verifica que las variables estén escritas correctamente
- **Reinicia el servidor** después de crear/editar `.env.local`

### ❌ Error: "The caller does not have permission"

**Solución:**
- Asegúrate de haber compartido la hoja con el email de la cuenta de servicio (Paso 4)
- Verifica que le diste permisos de **"Editor"** (no "Lector")

### ❌ Error: "Unable to parse range"

**Solución:**
- Verifica que `GOOGLE_SHEET_NAME` coincida exactamente con el nombre de la pestaña
- Si tu hoja se llama "Sheet1", usa `GOOGLE_SHEET_NAME=Sheet1`
- Si tu hoja se llama "Hoja 1", usa `GOOGLE_SHEET_NAME=Hoja 1`

### ❌ El formulario funciona pero no aparece nada en la hoja

**Solución:**
1. Verifica en la consola del servidor si hay errores
2. Verifica que compartiste la hoja con el email correcto
3. Verifica que el JSON está bien formateado (en una sola línea)
4. Prueba con datos simples primero

### ❌ Error al minificar el JSON

**Solución:**
- Usa la herramienta online: https://jsonformatter.org/json-minify
- O simplemente copia todo el contenido del JSON y quita manualmente los saltos de línea

---

## 📌 Resumen rápido

1. ✅ Crear Google Sheet y copiar ID
2. ✅ Crear proyecto en Google Cloud
3. ✅ Activar Google Sheets API
4. ✅ Crear cuenta de servicio
5. ✅ Descargar archivo JSON
6. ✅ Compartir hoja con email de cuenta de servicio
7. ✅ Crear `.env.local` con las variables
8. ✅ Probar localmente
9. ✅ Configurar variables en Vercel

---

## 🔒 Seguridad

- ⚠️ **NUNCA** subas el archivo JSON a GitHub o lugares públicos
- ⚠️ El archivo `.env.local` ya está en `.gitignore`, así que no se subirá
- ⚠️ En producción, usa las variables de entorno de Vercel

---

¿Tienes dudas en algún paso? ¡Pregunta!

