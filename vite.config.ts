import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});