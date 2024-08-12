import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/workouts': {
        target: 'http://localhost:3000', // Backend API URL
        changeOrigin: true,
        
      },
    },
  },
})
