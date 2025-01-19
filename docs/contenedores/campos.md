# 📝 Información Contenedores

Un contenedor es una unidad de lanzamiento de hostybee, un contenedor nos permite convertir una aplicacion desarrollada en una URL en la nube. Dentro de los contenedores tenemos distintos campos.

### Frameworks

En los contenedores podemos desplegar múltiples frameworks y tecnologías, cada uno con su propósito específico. Un framework es una estructura predefinida de herramientas y buenas prácticas que facilita el desarrollo de aplicaciones. A continuación, se listan los frameworks que podemos subir a la aplicación:

- **Astro (🚀):** Framework de desarrollo web estático y moderno, ideal para sitios rápidos.
- **Vite (⚡):** Herramienta de construcción rápida y ligera para frontend. Podemos tener aplicaciones desarrolladas con React o con Vue.
- **Next.js (⚫):** Framework de React para aplicaciones con renderizado del lado del servidor.
- **FacturaScripts (📊):** Herramienta de código abierto para gestión empresarial.
- **Postgres (🐘):** Sistema de gestión de bases de datos relacional potente y escalable.
- **Node.js (🟢):** Entorno de ejecución para JavaScript en el lado del servidor.
- **Vanilla (🌍):** Desarrollo con JavaScript puro sin frameworks.
- **n8n:** Plataforma de automatización de flujos de trabajo.
- **WordPress:** Sistema de gestión de contenidos (CMS) popular para crear sitios web y blogs.

### URLs Asociadas

El contenedor cuenta con URLs principales, a las cuales se les ha asignado un ícono para facilitar su identificación:

1. **URL pública:** 🌐 [https://hostybee.com](https://hostybee.com)

   - Esta URL representa la dirección principal de acceso al contenedor.

2. **Dominio personalizado:** 🏷️ dominio.com (https://dominio.com)

   - Un dominio personalizado asociado al contenedor.

3. **URL alterna:** ☁️ [https://kuwait-delay-planner-chambers.trycloudflare.com](https://kuwait-delay-planner-chambers.trycloudflare.com)

   - Una URL generada por Cloudflare para enmascarar la URL de hostybee.

### Estados de los Contenedores

El estado de un contenedor indica su situación actual y es representado con etiquetas visuales que facilitan la identificación del estado:

- **Iniciando:** Representa un contenedor que está en proceso de iniciarse.
- **Deteniendo:** Indica que el contenedor está en proceso de apagarse.
- **En ejecución:** El contenedor está activo y funcionando correctamente.
- **Error:** Ocurrió un problema en el contenedor.
- **Detenido:** El contenedor está apagado y no está en ejecución.

### Versión de los Contenedores

La versión de un contenedor indica la iteración del software que se encuentra desplegada. Si un contenedor no muestra una etiqueta de versión (por ejemplo, v2.0, v3.0), significa que está ejecutando la **primera versión** de la aplicación.

## Acciones Disponibles

En la interfaz del proyecto, se pueden realizar las siguientes acciones para la gestión del contenedor:

1. **Detener:**
   - Permite detener la ejecución del contenedor.
2. **Eliminar:**
   - Elimina el contenedor y sus recursos asociados.
3. **Logs:**
   - Accede al registro de actividades y eventos del contenedor para monitoreo o resolución de problemas.
4. **Configuración Avanzada:**
   - Proporciona opciones avanzadas para la administración y configuración detallada del contenedor.

