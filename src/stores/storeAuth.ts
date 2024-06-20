import { defineStore } from 'pinia';
import type { User } from '@/types/dbTypes';

interface State {
    user: User | null;
    token: string;
}

export const useStoreAuth = defineStore({
    id: 'storeAuth',
    persist: true,
    state: (): State => ({
        user: null,
        token: localStorage.getItem('token') || '',
    }),
    actions: {
        async login(user: User) {
            try {
                const res = await fetch('api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });
                if (!res.ok) {
                    throw new Error('User Not Found');
                }
                const data = await res.json();
                this.setToken(data.token);
                localStorage.setItem('token', data.token);
            } catch (error) {
                console.error('Error logging in: ', error);
                throw error;
            }
        },

        async register(user: User) {
            try {
                const res = await fetch('api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });
                if (!res.ok) {
                    throw new Error('Failed to register');
                }
                const data = await res.json();
                this.setToken(data.token);
                localStorage.setItem('token', data.token);
            } catch (error) {
                console.error('Error registering: ', error);
                throw error;
            }
        },
        logout() {
            this.token = '';
            this.user = null;
            localStorage.removeItem('token');
        },
        setToken(token: string) {
            this.token = token;
        },
    },
    getters: {
        isAuthenticated: state => !!state.token,
    },
});
