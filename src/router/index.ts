import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition || to.query.page) {
            return savedPosition || { left: 0, top: 0 };
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
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ left: 0, top: 0 });
                }, 400);
            });
        }
    },
});
