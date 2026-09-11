import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // No production source maps: dist must not ship .map files
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-router')) return 'react';
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('@phosphor-icons')) return 'icons';
          }
          return undefined;
        },
      },
    },
  },
})
