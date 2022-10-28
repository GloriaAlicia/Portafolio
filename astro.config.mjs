import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default {
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      config: { applyBaseStyles: false },
    }),
  ],
};
