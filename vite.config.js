import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path';
import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

export default defineConfig({
  plugins: [sveltekit(), purgeCss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
