import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
