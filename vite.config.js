import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Carbon's Sass sources are consumed via `@use '@carbon/react'`.
        // The modern-compiler API (backed by sass-embedded) resolves bare
        // package imports against node_modules using Node package
        // resolution/export maps, which is what Carbon's docs recommend
        // for Vite projects.
        api: 'modern-compiler',
        loadPaths: ['node_modules'],
        quietDeps: true,
      },
    },
  },
});
