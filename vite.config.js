import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        preconnect: false,
        display: 'block',
        injectTo: 'head-prepend',
        families: [
          {
            name: 'Orbitron',
            styles: 'wght@400..900'
          }
        ]
      },
      custom: {
        families: [
          {
            name: 'PostNoBillsJaffnaExtraBold',
            local: 'PostNoBillsJaffnaExtraBold',
            src: './src/assets/fonts/*.ttf' 
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
