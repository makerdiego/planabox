# PlanaBox - Landing Page

Landing page para PlanaBox, trasteros inteligentes en Castelló.

## 🚀 Inicio rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del proyecto

```
planabox/
├── app/
│   ├── layout.tsx          # Layout principal con metadatos SEO
│   ├── page.tsx            # Página principal (landing)
│   └── globals.css         # Estilos globales con Tailwind
├── components/
│   ├── Hero.tsx            # Sección hero con CTAs
│   ├── Advantages.tsx      # 4 ventajas principales
│   ├── PricingTable.tsx    # Tabla de precios
│   ├── SizeContents.tsx    # Qué cabe en cada tamaño
│   ├── HowItWorks.tsx      # 3 pasos del proceso
│   ├── Security.tsx        # Características de seguridad
│   ├── FAQ.tsx             # Preguntas frecuentes
│   └── Contact.tsx         # Formulario y contacto
├── lib/
│   └── config.ts           # Configuración centralizada (editar aquí)
└── public/
    └── images/             # Imágenes (ver más abajo)
```

## ⚙️ Configuración

Todo el contenido editable (precios, contactos, FAQs, etc.) está centralizado en `lib/config.ts`. Edita este archivo sin tocar los componentes.

### Datos importantes a configurar:

1. **Contacto**: Reemplaza los placeholders `+34XXXXXXXXX` con números reales
2. **Email**: Actualiza `info@planabox.es` si es necesario
3. **WhatsApp**: El link se genera automáticamente con el número configurado

## 🖼️ Imágenes necesarias

Coloca las siguientes imágenes en `public/images/`:

- `hero-planabox.png` - Imagen principal del hero (recomendado: 1200x800px)
- `sizes-illustration.png` - Ilustración de tamaños (recomendado: 800x400px)
- `security-icon.png` - Icono de seguridad (recomendado: 400x400px)
- `og-planabox.png` - Imagen para Open Graph / Redes sociales (recomendado: 1200x630px)

Si no están disponibles, la app mostrará placeholders con blur.

## 🎨 Branding

Los colores están configurados en `tailwind.config.ts`:

- **Verde magdalenero**: `#1F6B3F` (brand-primary)
- **Fondo oscuro**: `#0B1220` (brand-dark)
- **Fondo claro**: `#F7FAF8` (brand-light)

## 📦 Build y deploy

### Build para producción:

```bash
npm run build
```

### Deploy en Vercel

1. Conecta el repositorio con tu cuenta de GitHub (usuario: `makerdiego`)
2. En Vercel, selecciona este proyecto
3. Vercel detectará automáticamente Next.js y configurará el build
4. El deploy se hará automáticamente en cada push a `main`

### Variables de entorno (opcional)

Si necesitas configurar variables de entorno en Vercel:

- No hay variables obligatorias para el funcionamiento básico
- Para analytics, puedes agregar las keys necesarias en la configuración de Vercel

## 🔍 SEO

- Meta tags configurados en `app/layout.tsx`
- Open Graph configurado
- Estructura semántica HTML
- Imágenes optimizadas con `next/image`

## 📊 Analytics

Los hooks de analytics están preparados en `lib/config.ts` (función `analytics.trackEvent`). Actualmente registra eventos en consola. Para integrar con Google Analytics, Mixpanel, etc., edita esa función.

Eventos trackeados:
- Clicks en WhatsApp
- Clicks en teléfono
- Envío de formulario
- Click en "Ver precios"

## 🛠️ Tecnologías

- **Next.js 14+** con App Router
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📝 Formulario de lista de espera

El formulario guarda los datos automáticamente en Google Sheets.

### Configuración rápida:

1. **Para desarrollo local:** Consulta `GUIA_GOOGLE_SHEETS.md`
2. **Para producción (Vercel):** Consulta `DEPLOY.md` para Git + Vercel (incluye cómo añadir variables en Vercel)
3. **Resumen rápido:** Consulta `INICIO_RAPIDO.md` para ver todos los pasos

### Guías separadas:

- **`GUIA_GOOGLE_SHEETS.md`** - Configurar Google Sheets para desarrollo local
- **`DEPLOY.md`** - Subir a Git y deploy en Vercel (incluye cómo añadir variables en Vercel)
- **`INICIO_RAPIDO.md`** - Resumen rápido de todos los pasos
- **`CONFIGURAR_ENV.md`** - Cómo crear el archivo .env.local

## 📄 Licencia

Privado - PlanaBox

