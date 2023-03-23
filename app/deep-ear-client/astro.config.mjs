import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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
  integrations: [react(), tailwind()]
});