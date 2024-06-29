import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @use '@/styles/main.scss' as *;
                `,
            },
        },
    },
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        ViteImageOptimizer({
            test: /\.(jpe?g|png|webp|svg|avif)$/i,
            includePublic: true,
            logStats: true,
            ansiColors: true,
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
            webp: {
                quality: 80,
                alphaQuality: 80,
                force: false,
            },
            avif: {
                quality: 80,
            },
            cache: false,
            cacheLocation: undefined,
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
                ws: true,
                timeout: 10000,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@img': fileURLToPath(
                new URL('./src/assets/images', import.meta.url)
            ),
            '@fonts': fileURLToPath(new URL('./fonts/', import.meta.url)),
        },
    },
});
