import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { fileURLToPath, URL } from 'url';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
        @import "@/assets/scss/utils/_variables.scss";
        @import "@/assets/scss/utils/_mixins.scss";
        `,
            },
        },
    },
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        // ViteImageOptimizer({
        //     test: /\.(jpe?g|png|webp|svg|avif)$/i,
        //     includePublic: true,
        //     logStats: true,
        //     ansiColors: true,
        //     png: {
        //         quality: 75,
        //     },
        //     jpeg: {
        //         quality: 75,
        //     },
        //     jpg: {
        //         quality: 75,
        //     },
        //     webp: {
        //         quality: 75,
        //         alphaQuality: 80,
        //         force: false,
        //     },
        //     avif: {
        //         quality: 75,
        //     },
        //     cache: false,
        //     cacheLocation: undefined,
        //     dynamicImport: true,
        // }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@img': fileURLToPath(
                new URL('./src/assets/images', import.meta.url)
            ),
        },
    },
});
