import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: false, // Vite will use 5174, 5175, etc. if 5173 is busy
  },
   
  
})
