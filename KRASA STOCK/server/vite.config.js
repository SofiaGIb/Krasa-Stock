// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'node',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
        input:'index.js',
      external: ['express'], 
    },
  },
});
