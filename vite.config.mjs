// vite.config.js
import { defineConfig } from 'vite';
// vite.config.js
import sass from 'sass';


export default defineConfig({
  root: './',
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
