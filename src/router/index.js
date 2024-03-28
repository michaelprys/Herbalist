import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes.js';

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition || to.query.page) {
            return savedPosition;
        } else if (to.hash) {
            return new Promise(resolve => {
                if (from.name === 'home') {
                    resolve({ el: to.hash, behavior: 'smooth' });
                } else {
                    setTimeout(() => {
                        resolve({ el: to.hash, behavior: 'smooth' });
                    }, 500);
                }
            });
        } else {
            return { top: 0 };
        }
    },
});
