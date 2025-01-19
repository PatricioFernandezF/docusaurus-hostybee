---
sidebar_position: 2
title: Vite Framework
---

# Vite Framework

Vite es una herramienta de compilación moderna que ofrece una experiencia de desarrollo extremadamente rápida.

## Estructura Propuesta

```
📁 proyecto-vite/
├── 📁 server/ (Donde irá el código del servidor)
├── 📁 src/ (Donde irá el código del cliente)
├── 📄 .gitignore (Opcional)
├── 📄 eslint.config.js (Opcional)
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 postcss.config.js (Opcional)
├── 📄 tailwind.config.js (Opcional)
├── 📄 tsconfig.json (Opcional)
├── 📄 tsconfig.node.json (Opcional)
└── 📄 vite.config.ts
```

### Configuración Base

La configuración básica de Vite incluye varios archivos importantes:

#### Vite Config

```js title="vite.config.js"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

#### ESLint Config

```js title="eslint.config.js"
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

#### PostCSS Config

```js title="postcss.config.js"
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### Tailwind Config

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### TypeScript Config

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

```json title="tsconfig.node.json"
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## Más Información

Para una guía completa, visita la [documentación oficial de Vite](https://vitejs.dev).
