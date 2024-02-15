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
                    }, 20);
                }
            });
        } else {
            // return new Promise(resolve => {
            //     setTimeout(() => {
            //         resolve({ top: 0 });
            //     }, 500);
            // });
            return { top: 0 };
        }
    },
});
