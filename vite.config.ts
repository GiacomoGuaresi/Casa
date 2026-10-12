import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// base = nome del repository, perché il sito è servito da GitHub Pages su
// https://giacomoguaresi.github.io/Casa/. Niente dati e niente accesso: è solo
// l'elenco delle app di casa (src/dominio/app.ts).
export default defineConfig({
  base: '/Casa/',
  plugins: [
    react(),
    tailwindcss(),
    // PWA come nelle altre app: installabile, con la shell in cache, così
    // l'elenco si apre anche senza rete. Le icone le genera `npm run icone` da
    // public/icona.svg.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icona.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: 'Casa',
        short_name: 'Casa',
        description: 'Le app di casa, tutte in un posto',
        lang: 'it',
        display: 'standalone',
        // Come l'intestazione e lo sfondo dell'app (src/index.css).
        theme_color: '#4a4038',
        background_color: '#f5f2ec',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    }),
  ],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
