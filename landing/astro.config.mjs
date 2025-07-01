import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'docs',
  base: '/deep-oled-blackout/',
  site: 'https://devnshankar.github.io',
  trailingSlash: 'ignore'
});