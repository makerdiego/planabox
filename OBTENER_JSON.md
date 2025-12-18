# 🔑 Cómo obtener el archivo JSON completo

Parece que tienes el email de la cuenta de servicio, pero necesitas el archivo JSON completo con todas las credenciales.

## 📋 Pasos para descargar el JSON

### Paso 1: Ir a Google Cloud Console

1. Ve a: https://console.cloud.google.com
2. Asegúrate de estar en el proyecto correcto (si tienes varios proyectos, selecciona el que usaste para crear la cuenta de servicio)

### Paso 2: Ir a Credenciales

1. En el menú lateral izquierdo, haz clic en **"APIs y servicios"**
2. Luego haz clic en **"Credenciales"**

### Paso 3: Encontrar tu cuenta de servicio

1. Busca en la sección **"Cuentas de servicio"** (Service Accounts)
2. Deberías ver: `planabox-cuentaservicio@planabox.iam.gserviceaccount.com`
3. Haz clic en ese email

### Paso 4: Ir a la pestaña "Claves" (Keys)

1. Una vez dentro de los detalles de la cuenta de servicio
2. Ve a la pestaña **"CLAVES"** o **"KEYS"** (en la parte superior)

### Paso 5: Crear nueva clave JSON

1. Haz clic en **"Agregar clave"** o **"ADD KEY"**
2. Selecciona **"Crear nueva clave"** o **"Create new key"**
3. Selecciona el tipo: **"JSON"**
4. Haz clic en **"Crear"** o **"Create"**

### Paso 6: Descargar el archivo

1. Se descargará automáticamente un archivo JSON
2. El archivo se llamará algo como: `planabox-123456-abc123.json`
3. **Ábrelo** con un editor de texto (Notepad, VS Code, etc.)
4. Deberías ver algo así:

```json
{
  "type": "service_account",
  "project_id": "planabox",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "planabox-cuentaservicio@planabox.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/planabox-cuentaservicio%40planabox.iam.gserviceaccount.com"
}
```

## ✅ Una vez que tengas el archivo JSON

1. **Copia TODO el contenido** del archivo
2. Ve al archivo `GUIA_GOOGLE_SHEETS.md` y sigue desde el PASO 5 (Convertir JSON a una línea)
3. O usa la herramienta: https://jsonformatter.org/json-minify para convertir a una línea

## 🔍 ¿No ves la opción "Agregar clave"?

Si ya creaste una clave antes y no ves cómo descargarla de nuevo:

1. Puedes eliminar la clave antigua (haz clic en los 3 puntos → Eliminar)
2. Crear una nueva clave JSON
3. O si solo tienes una clave pero no el archivo, tendrás que crear una nueva (puedes tener varias)

## ⚠️ Importante

- El archivo JSON contiene información sensible
- NO lo subas a Git
- Guárdalo en un lugar seguro
- Una vez que lo tengas en `.env.local`, puedes borrar el archivo JSON de tu ordenador si quieres

