# 🔒 Resumen de Seguridad - PlanaBox

Este documento resume las medidas de seguridad implementadas en la landing page de PlanaBox.

## ✅ Seguridad Implementada

### 1. Protección del API (`/api/waitlist`)

#### Rate Limiting
- **Límite:** 5 solicitudes por minuto por IP
- **Ventana:** 60 segundos
- **Protección:** Previene ataques de fuerza bruta y spam

#### Validación de Datos
- ✅ Validación de campos requeridos (nombre, teléfono, email)
- ✅ Validación de formato de email (regex + longitud máxima)
- ✅ Validación de formato de teléfono (formato español)
- ✅ Validación de longitud mínima del nombre (2 caracteres)
- ✅ Sanitización de todos los campos de texto
- ✅ Eliminación de caracteres peligrosos (`<`, `>`)
- ✅ Límite de longitud para prevenir ataques

#### Manejo de Errores
- ✅ Mensajes de error claros para el usuario
- ✅ Logs detallados para debugging (sin exponer información sensible)
- ✅ Respuestas HTTP apropiadas (400, 429, 500)

### 2. Protección de Datos Personales

#### Almacenamiento
- ✅ Datos almacenados de forma segura en Google Sheets
- ✅ Acceso restringido mediante cuenta de servicio
- ✅ Credenciales protegidas en variables de entorno
- ✅ Variables de entorno no expuestas en el cliente

#### Privacidad
- ✅ Política de Privacidad completa y accesible
- ✅ Información clara sobre el tratamiento de datos
- ✅ Derechos del usuario explicados
- ✅ Opción de darse de baja de la lista de espera

### 3. Seguridad del Código

#### Variables de Entorno
- ✅ `.env.local` en `.gitignore` (no se sube a Git)
- ✅ Credenciales de Google Sheets protegidas
- ✅ No se exponen secretos en el código fuente

#### Validación Frontend + Backend
- ✅ Validación en el cliente (UX rápida)
- ✅ Validación en el servidor (seguridad real)
- ✅ Nunca confiar solo en la validación del cliente

### 4. Seguridad de la Web

#### HTTPS (en producción)
- ✅ Vercel proporciona HTTPS automático
- ✅ Certificados SSL/TLS gestionados automáticamente

#### Headers de Seguridad
- ✅ Next.js incluye headers de seguridad por defecto
- ✅ Protección XSS básica

## 🔐 Buenas Prácticas Implementadas

1. **Principio de Menor Privilegio:** La cuenta de servicio de Google solo tiene acceso a la hoja específica
2. **Sanitización de Inputs:** Todos los datos de usuario se sanitizan antes de procesarse
3. **Rate Limiting:** Protección contra abuso del servicio
4. **Validación en Capas:** Validación tanto en cliente como servidor
5. **Logging Seguro:** Los logs no exponen información sensible completa
6. **Manejo de Errores:** Errores no exponen detalles internos al usuario

## ⚠️ Mejoras Recomendadas para el Futuro

1. **CSP (Content Security Policy):** Añadir headers CSP más estrictos
2. **CORS:** Configurar CORS si se añaden APIs públicas
3. **Monitoreo:** Implementar alertas para intentos de abuso
4. **Backup:** Backup automático de datos en Google Sheets
5. **Encriptación:** Considerar encriptación adicional si se almacenan datos sensibles
6. **Auditoría:** Revisar periódicamente los accesos y logs

## 📝 Variables de Entorno Protegidas

Las siguientes variables están protegidas y NO deben subirse a Git:

- `GOOGLE_SHEETS_CREDENTIALS` - Credenciales JSON completas
- `GOOGLE_SHEET_ID` - ID de la hoja de cálculo
- `GOOGLE_SHEET_NAME` - Nombre de la pestaña

## 🛡️ Protección Actual

- ✅ **Protección contra spam:** Rate limiting
- ✅ **Protección contra inyección:** Sanitización de inputs
- ✅ **Protección de datos:** Almacenamiento seguro
- ✅ **Protección de credenciales:** Variables de entorno
- ✅ **Cumplimiento legal:** Políticas de privacidad y avisos legales

## 📞 Contacto para Problemas de Seguridad

Si detectas algún problema de seguridad, contacta por WhatsApp: **644 536 626**

