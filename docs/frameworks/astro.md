---
sidebar_position: 1
title: 🚀 Astro Framework
---

# 🚀 Astro Framework

Astro es un framework web moderno diseñado para construir sitios web rápidos y enfocados en el contenido.

## Estructura Propuesta

```
📁 proyecto-astro/
├── 📁 public/
├── 📁 src/
│   ├── 📁 components/
│   ├── 📁 layouts/
│   └── 📁 pages/
├── 📄 .gitignore
├── 📄 astro.config.mjs
├── 📄 package.json
├── 📄 tsconfig.json (Opcional)
└── 📄 tailwind.config.cjs (Opcional)
```

### Configuración Base

La configuración básica de Astro incluye varios archivos importantes:

#### Astro Config

```js title="astro.config.mjs"
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración global del sitio
  site: 'https://mi-sitio.com',
  
  // Integrations
  integrations: [],
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
  },
});
```

#### TypeScript Config

```json title="tsconfig.json"
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

#### Tailwind Config (si se usa Tailwind)

```js title="tailwind.config.cjs"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Características Principales

- Generación de sitios estáticos (SSG)
- Hidratación parcial
- Compatible con múltiples frameworks
- Excelente rendimiento
- Soporte para Markdown y MDX
- Enrutamiento basado en archivos

## Empezando

```bash
# Crear un nuevo proyecto
npm create astro@latest

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Recursos

- [Documentación oficial de Astro](https://docs.astro.build)
- [Ejemplos y plantillas](https://astro.build/themes/)
- [Integraciones](https://astro.build/integrations/)
