# ✅ Verificar tu configuración

Ya tienes el archivo `.env.local` creado. Ahora solo falta verificar que todo esté correcto.

## 🔍 Paso 1: Verificar el ID de la hoja

El ID que tienes configurado es: `1DDJqm6xEcrfFVWBmRAHuxKdYmSnle3R9yHiSLw17S28`

**Para verificar que es correcto:**
1. Abre tu Google Sheet
2. Mira la URL, debería ser algo como:
   ```
   https://docs.google.com/spreadsheets/d/1DDJqm6xEcrfFVWBmRAHuxKdYmSnle3R9yHiSLw17S28/edit
   ```
3. Si el ID en la URL coincide con el que está en `.env.local`, ¡perfecto!
4. Si es diferente, cambia `GOOGLE_SHEET_ID` en el archivo `.env.local`

## 🔐 Paso 2: Compartir la hoja con la cuenta de servicio

**MUY IMPORTANTE:** Debes compartir tu Google Sheet con el email de la cuenta de servicio.

1. Abre tu Google Sheet
2. Haz clic en el botón **"Compartir"** (arriba a la derecha)
3. Pega este email: `planabox-cuentaservicio@planabox.iam.gserviceaccount.com`
4. Asegúrate de que dice **"Editor"** (no "Lector")
5. **DESMARCA** "Notificar a las personas"
6. Haz clic en **"Compartir"** o **"Listo"**

✅ **Sin este paso, no funcionará.**

## 📝 Paso 3: Verificar el nombre de la pestaña

Por defecto está configurado como `Hoja 1`.

**Para verificar:**
1. Abre tu Google Sheet
2. Mira el nombre de la pestaña en la parte inferior (puede ser "Hoja 1", "Sheet1", etc.)
3. Si es diferente a "Hoja 1", cambia `GOOGLE_SHEET_NAME` en el archivo `.env.local`

## 🧪 Paso 4: Probar que funciona

1. **Reinicia el servidor** si lo tenías abierto:
   ```bash
   # Detén el servidor (Ctrl+C si está corriendo)
   npm run dev
   ```

2. Ve a: http://localhost:3000

3. Baja hasta el formulario de lista de espera

4. **Rellena el formulario** con datos de prueba:
   - Nombre: Test
   - Teléfono: 123456789
   - Email: test@test.com
   - Tamaño: Cualquiera
   - Mensaje: (opcional)

5. Haz clic en **"Apuntarme a la lista de espera"**

6. Deberías ver un mensaje de confirmación verde

7. **Abre tu Google Sheet** - deberías ver:
   - En la primera fila: encabezados (Fecha y Hora, Nombre, Teléfono, Email, Tamaño, Mensaje)
   - En la segunda fila: los datos que acabas de enviar

## ✅ Si funciona

¡Perfecto! Cada vez que alguien rellene el formulario, los datos se guardarán automáticamente en tu Google Sheet.

## ❌ Si no funciona

Revisa estos puntos:

1. **¿Compartiste la hoja con el email de la cuenta de servicio?** (Paso 2)
2. **¿El ID de la hoja es correcto?** (Paso 1)
3. **¿Reiniciaste el servidor después de crear `.env.local`?**
4. **¿El nombre de la pestaña es correcto?** (Paso 3)

Si sigues teniendo problemas, mira la consola del servidor (donde corre `npm run dev`) para ver los errores específicos.

