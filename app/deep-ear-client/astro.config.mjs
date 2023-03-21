import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: "0.0.0.0",
        hmr: {
        clientPort: import.meta.env.OUTER_PORT_FRONTEND,
        },
        port: import.meta.env.INNER_PORT_FRONTEND_DEV, 
        watch: {
        usePolling: true,
        },
    }
});
