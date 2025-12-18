# 🚀 Inicio Rápido - PlanaBox

Guía rápida para tener todo funcionando desde cero.

---

## Paso 1: Configurar Google Sheets (desarrollo local)

Sigue la guía completa: **`GUIA_GOOGLE_SHEETS.md`**

**Resumen rápido:**
1. Crear hoja de Google Sheets
2. Crear cuenta de servicio en Google Cloud
3. Descargar JSON de credenciales
4. Compartir hoja con el email de la cuenta de servicio
5. Crear `.env.local` con las variables

✅ **Resultado:** El formulario funciona en local y guarda datos en Google Sheets.

---

## Paso 2: Subir a Git y Deploy en Vercel

Sigue la guía completa: **`DEPLOY.md`**

**Resumen rápido:**
1. `git init` → `git add .` → `git commit -m "Initial commit"`
2. Crear repositorio en GitHub
3. `git remote add origin ...` → `git push -u origin main`
4. En Vercel: Importar proyecto desde GitHub
5. Deploy automático

✅ **Resultado:** Tu sitio está online en Vercel.

---

## Paso 3: Configurar Variables en Vercel (producción)

**IMPORTANTE:** Sin esto, el formulario NO funcionará en producción.

1. En Vercel → Settings → Environment Variables
2. Añade las 3 variables que tienes en `.env.local`:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME`
   - `GOOGLE_SHEETS_CREDENTIALS`
3. Marca: Production, Preview, Development
4. Redeploy

✅ **Resultado:** El formulario funciona en producción.

---

## Orden de operación recomendado:

1. **Primero:** Configura Google Sheets localmente (`GUIA_GOOGLE_SHEETS.md`)
2. **Segundo:** Sube a Git y despliega en Vercel (`DEPLOY.md`)
3. **Tercero:** Añade las variables de entorno en Vercel (`DEPLOY.md` - Paso 9)

---

## ¿Necesitas ayuda?

- **Google Sheets:** `GUIA_GOOGLE_SHEETS.md`
- **Git + Vercel:** `DEPLOY.md`
- **Problemas:** Revisa la sección "Problemas comunes" en cada guía

