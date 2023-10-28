import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from '@/router/routes.js';

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
