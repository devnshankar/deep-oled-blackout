import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: '../docs',
  base: '/deep-oled-blackout/', // this must match repo name if not using a custom domain
});
