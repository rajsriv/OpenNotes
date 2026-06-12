import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Critical for Electron: use relative paths for built assets
});
