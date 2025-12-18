# 🚀 Guía de Deploy: Git + Vercel

Esta guía te ayudará a subir tu proyecto a GitHub y desplegarlo en Vercel.

---

## 📋 Paso 1: Inicializar Git (si no está inicializado)

Si aún no has inicializado Git en tu proyecto:

```bash
git init
```

---

## 🔐 Paso 2: Configurar Git (si no lo tienes configurado)

```bash
git config user.name "Tu Nombre"
git config user.email "tu-email@ejemplo.com"
```

O si quieres configurarlo solo para este repositorio:

```bash
git config --local user.name "Tu Nombre"
git config --local user.email "tu-email@ejemplo.com"
```

---

## 📦 Paso 3: Añadir archivos a Git

**IMPORTANTE:** Asegúrate de que `.env.local` NO se suba a Git (ya está en `.gitignore`).

```bash
# Ver qué archivos se van a añadir (verifica que .env.local NO aparezca)
git status

# Añadir todos los archivos
git add .

# Verificar qué se va a commitear
git status
```

---

## 💾 Paso 4: Hacer el primer commit

```bash
git commit -m "Initial commit - Landing page PlanaBox"
```

---

## 🌐 Paso 5: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en **"+"** (arriba a la derecha) → **"New repository"**
3. **Nombre del repositorio:** `planabox` (o el que prefieras)
4. **Descripción:** "Landing page para PlanaBox - Trasteros inteligentes en Castelló"
5. **Público o Privado:** Elige según prefieras
6. **NO marques** "Initialize with README" (ya tienes archivos)
7. Haz clic en **"Create repository"**

---

## 🔗 Paso 6: Conectar con GitHub

GitHub te mostrará instrucciones. Ejecuta estos comandos:

```bash
# Conectar con tu repositorio remoto
git remote add origin https://github.com/makerdiego/planabox.git

# O si usas SSH:
# git remote add origin git@github.com:makerdiego/planabox.git

# Cambiar a la rama main (si estás en otra)
git branch -M main

# Subir el código
git push -u origin main
```

**Nota:** Si te pide autenticación:
- Puedes usar un **Personal Access Token** de GitHub
- O configurar SSH keys

---

## ✅ Paso 7: Verificar en GitHub

1. Ve a tu repositorio en GitHub: `https://github.com/makerdiego/planabox`
2. Verifica que todos los archivos estén ahí
3. **IMPORTANTE:** Verifica que `.env.local` NO esté en el repositorio

---

## 🚀 Paso 8: Deploy en Vercel

### 8.1. Crear cuenta en Vercel (si no la tienes)

1. Ve a [Vercel](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza Vercel para acceder a tu cuenta de GitHub

### 8.2. Importar proyecto

1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Busca el repositorio `planabox`
3. Haz clic en **"Import"**

### 8.3. Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Next.js:

- **Framework Preset:** Next.js (debería detectarlo automático)
- **Root Directory:** `./` (dejar por defecto)
- **Build Command:** `npm run build` (debería estar automático)
- **Output Directory:** `.next` (debería estar automático)

Haz clic en **"Deploy"**

---

## ⚙️ Paso 9: Configurar Variables de Entorno en Vercel

**MUY IMPORTANTE:** Debes añadir las variables de entorno de Google Sheets.

1. En el dashboard de Vercel, ve a tu proyecto `planabox`
2. Ve a **"Settings"** → **"Environment Variables"**
3. Añade estas 3 variables:

   **Variable 1:**
   - Key: `GOOGLE_SHEET_ID`
   - Value: `1DDJqm6xEcrfFVWBmRAHuxKdYmSnle3R9yHiSLw17S28`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Haz clic en **"Save"**

   **Variable 2:**
   - Key: `GOOGLE_SHEET_NAME`
   - Value: `Hoja 1`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Haz clic en **"Save"**

   **Variable 3:**
   - Key: `GOOGLE_SHEETS_CREDENTIALS`
   - Value: `{"type":"service_account",...}` (el JSON completo en una línea, el mismo que tienes en `.env.local`)
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Haz clic en **"Save"**

4. Opcional - Variable para URL:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://planabox.vercel.app` (o tu dominio personalizado)
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Haz clic en **"Save"**

### 9.1. Redeploy después de añadir variables

Después de añadir las variables de entorno:

1. Ve a la pestaña **"Deployments"**
2. Haz clic en los **3 puntos** del último deployment
3. Selecciona **"Redeploy"**
4. Confirma el redeploy

---

## ✅ Paso 10: Verificar que funciona

1. Vercel te dará una URL tipo: `https://planabox.vercel.app`
2. Visita la URL y verifica que todo funciona
3. Prueba el formulario de lista de espera
4. Verifica que los datos se guarden en Google Sheets

---

## 🔄 Actualizaciones futuras

Cada vez que hagas cambios y quieras actualizar la página:

```bash
# 1. Añadir cambios
git add .

# 2. Hacer commit
git commit -m "Descripción de los cambios"

# 3. Subir a GitHub
git push

# Vercel desplegará automáticamente cuando detecte cambios en GitHub
```

---

## 🎯 Configurar dominio personalizado (opcional)

Si quieres usar un dominio propio (ej: `planabox.es`):

1. En Vercel, ve a **Settings** → **Domains**
2. Añade tu dominio
3. Sigue las instrucciones para configurar los DNS
4. Vercel te guiará en el proceso

---

## 🔒 Verificación final

Antes de hacer push, verifica que:

- ✅ `.env.local` NO está en el repositorio
- ✅ `node_modules/` NO está en el repositorio
- ✅ `.next/` NO está en el repositorio
- ✅ Las variables de entorno están configuradas en Vercel

Para verificar qué se va a subir:

```bash
git status
git ls-files | findstr env.local
```

Si aparece `.env.local`, NO hagas push hasta eliminarlo del índice:

```bash
git reset HEAD .env.local
git restore --staged .env.local
```

---

## 📞 Si tienes problemas

- **Error de autenticación en GitHub:** Configura un Personal Access Token
- **Vercel no detecta cambios:** Verifica que el repositorio esté conectado correctamente
- **El formulario no funciona:** Verifica que las variables de entorno estén configuradas en Vercel
- **Error en el build:** Revisa los logs en Vercel para ver el error específico

---

¡Tu landing page estará online en minutos! 🎉

