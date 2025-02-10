---
sidebar_position: 4
title: ⚡ Next.js Framework
---

# ⚡ Next.js Framework

Next.js es un framework de React que permite crear aplicaciones web full-stack con renderizado híbrido.

## Estructura Propuesta

```
📁 proyecto-nextjs/
├── 📁 app/
│   ├── 📁 api/
│   ├── 📁 components/
│   ├── 📁 lib/
│   └── 📁 (routes)/
├── 📁 public/
├── 📄 .env
├── 📄 .gitignore
├── 📄 next.config.mjs
├── 📄 package.json
├── 📄 tsconfig.json (Opcional)
└── 📄 tailwind.config.ts (Opcional)
```

### Configuración Base

La configuración básica de Next.js incluye varios archivos importantes:

#### Next Config

```js title="next.config.mjs"
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar imágenes de dominios externos
  images: {
    domains: ['example.com'],
  },
  
  // Configuración del entorno
  env: {
    customKey: 'my-value',
  },
  
  // Configuración experimental
  experimental: {
    serverActions: true,
  },
  
  // Redirecciones
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
```

#### TypeScript Config

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Características Principales

- App Router (nuevo sistema de enrutamiento)
- Server Components
- Renderizado híbrido (SSR, SSG, ISR)
- API Routes
- Optimización automática de imágenes
- Soporte para TypeScript
- Zero Config
- Fast Refresh

## Empezando

```bash
# Crear un nuevo proyecto
npx create-next-app@latest

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm start
```

## Recursos

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Ejemplos oficiales](https://github.com/vercel/next.js/tree/canary/examples)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com) (Despliegue optimizado)
