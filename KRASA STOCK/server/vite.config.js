// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'node21.6.1',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
        input:'index.js',
      external: ['express'], 
    },
  },
});
