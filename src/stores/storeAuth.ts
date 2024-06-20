import { defineStore } from 'pinia';
import type { User } from '@/types/dbTypes';

export const useStoreAuth = defineStore({
    id: 'storeAuth',
    persist: true,
    // state: (): State => ({

    // })
    actions: {
        async register(user: User) {
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            return await res.json();
        },

        async login(user: User) {
            const res = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            return await res.json();
        },
    },
});
