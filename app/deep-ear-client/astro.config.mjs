import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
    port: 8015,
    hmr: {
      clientPort: 9026
    },
    watch: {
      usePolling: true
    }
  },
  integrations: [react()]
});
