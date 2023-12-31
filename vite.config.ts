import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<rick-and-morty>/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
