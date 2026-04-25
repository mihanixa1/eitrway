import { defineConfig } from 'vite';

export default defineConfig({
  base: '/eitrway/',
  build: {
    outDir: 'eitrway',
    emptyOutDir: true,
  },
  publicDir: 'public',
});
