import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

export default defineConfig({
  plugins: [
    sveltekit(),
    purgeCss(),
    Icons({
      compiler: 'svelte'
    })
  ],
  resolve: {
    alias: {}
  }
});
