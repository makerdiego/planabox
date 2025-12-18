# Configuración del Formulario de Lista de Espera

## Estado Actual

El formulario ahora funciona de dos formas:

1. **API Route** (primario): Intenta enviar los datos a `/api/waitlist`
2. **Mailto fallback**: Si falla el API, abre el cliente de correo como respaldo

## Cómo funciona actualmente

Por defecto, el API endpoint solo guarda los datos en los logs de la consola. Esto es útil para desarrollo, pero en producción necesitarás integrarlo con un servicio real.

## Opciones para integrar en producción

### Opción 1: Formspree (Más fácil, gratuito hasta 50 envíos/mes)
1. Crear cuenta en https://formspree.io
2. Obtener el endpoint de tu formulario
3. Actualizar `app/api/waitlist/route.ts`:

```typescript
const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name,
    phone,
    email,
    size: size || 'No especificado',
    message: message || 'Sin mensaje',
    _subject: `Nueva solicitud lista de espera - ${name}`
  })
});
```

### Opción 2: Google Sheets API (Gratuito, fácil de usar)
1. Crear una Google Sheet
2. Instalar `googleapis` package
3. Configurar credenciales OAuth
4. Guardar directamente en la sheet

### Opción 3: Base de datos (MongoDB, PostgreSQL, etc.)
- Usar un servicio como Vercel Postgres, MongoDB Atlas, o Supabase
- Guardar los datos directamente en la base de datos

### Opción 4: Email service (SendGrid, Resend, etc.)
- Enviar un email automático a tu dirección
- Configurar las credenciales como variables de entorno

### Opción 5: Airtable API
- Crear una base de datos en Airtable
- Usar su API para guardar los registros

## Variables de entorno recomendadas

Crea un archivo `.env.local`:

```env
# Email para notificaciones
ADMIN_EMAIL=tu-email@planabox.es

# Si usas un servicio de email
EMAIL_SERVICE_API_KEY=tu_api_key

# URL del sitio (para metadata)
NEXT_PUBLIC_SITE_URL=https://planabox.es
```

## Testing

Para probar el formulario:

1. Ejecuta `npm run dev`
2. Llena el formulario en http://localhost:3000
3. Revisa la consola del servidor para ver los datos recibidos
4. También puedes revisar la consola del navegador para ver los logs

## Notas importantes

- El formulario tiene validación básica en el frontend
- Los campos requeridos son: nombre, teléfono y email
- El tamaño y mensaje son opcionales
- El formulario muestra un estado de carga mientras se envía
- Si el API falla, automáticamente usa mailto como respaldo

