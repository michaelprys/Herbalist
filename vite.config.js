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
                @import '@/assets/scss/main.scss';
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
        //         quality: 80,
        //     },
        //     jpeg: {
        //         quality: 80,
        //     },
        //     jpg: {
        //         quality: 80,
        //     },
        //     webp: {
        //         quality: 80,
        //         alphaQuality: 80,
        //         force: false,
        //     },
        //     avif: {
        //         quality: 80,
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
                secure: false,
                ws: true,
                timeout: 10000,
                configure: (proxy, _options) => {
                    proxy.on('error', (err, _req, _res) => {
                        console.log('proxy error', err);
                    });
                    proxy.on('proxyReq', (proxyReq, req, _res) => {
                        console.log(
                            'Sending Request to the Target:',
                            req.method,
                            req.url
                        );
                    });
                    proxy.on('proxyRes', (proxyRes, req, _res) => {
                        console.log(
                            'Received Response from the Target:',
                            proxyRes.statusCode,
                            req.url
                        );
                    });
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@img': fileURLToPath(
                new URL('./src/assets/images', import.meta.url)
            ),
            '@fonts': fileURLToPath(
                new URL('./public/fonts/', import.meta.url)
            ),
        },
    },
});
