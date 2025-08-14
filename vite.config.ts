import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],
  base: '/tanstack-example/',  // Указываем имя репозитория на GitHub
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: true, // Открывает браузер при запуске сервера
  }
})
