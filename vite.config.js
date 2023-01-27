import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://<jorge-73>.github.io/<React-Api-Rick-Morty>/"
})
