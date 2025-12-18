# 📝 Configurar el archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto con este contenido:

```
GOOGLE_SHEET_ID=tu_id_de_la_hoja_aqui
GOOGLE_SHEET_NAME=Hoja 1
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"...","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"..."}
NEXT_PUBLIC_SITE_URL=https://planabox.es
```

**Reemplaza los valores:**
- `tu_id_de_la_hoja_aqui` → El ID de tu Google Sheet
- `{...}` → El contenido completo del archivo JSON que descargaste de Google Cloud Console

**IMPORTANTE:**
- El JSON debe estar en UNA SOLA LÍNEA
- Usa: https://jsonformatter.org/json-minify para convertir el JSON a una línea
- NO subas este archivo a Git (ya está en .gitignore)

Para más detalles, consulta `GUIA_GOOGLE_SHEETS.md`

