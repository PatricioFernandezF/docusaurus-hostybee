// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '📦 Contenedores',
      items: [
        'contenedores/campos',
        'contenedores/logs'
      ]
    },
    {
      type: 'category',
      label: '📋 Plantillas de Contenedores',
      items: [
        'plantilla/campos',
        {
          type: 'category',
          label: '🚀 Proyectos',
          items: [
            'proyectos/postgres',
            'proyectos/facturascripts',
            'proyectos/n8n',
            'proyectos/wordpress'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '⚡ Tipos de Proyectos (Frameworks)',
      items: [
        {
          type: 'doc',
          id: 'frameworks/astro',
          label: '🚀 Astro'
        },
        {
          type: 'doc', 
          id: 'frameworks/vite',
          label: '⚡ Vite'
        },
        {
          type: 'doc',
          id: 'frameworks/nextjs',
          label: '⚡ Next.js'
        },
        {
          type: 'doc',
          id: 'frameworks/vanilla',
          label: '🌐 Vanilla HTML'
        }
      ]
    }
  ]
};

export default sidebars;
