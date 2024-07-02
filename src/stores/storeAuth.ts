import { defineStore } from 'pinia';

interface User {
    username: string;
    password: string;
}

interface RegisterUser extends User {
    firstname: string;
    lastname: string;
    email: string;
    confirmPassword: string;
}

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

        async register(user: RegisterUser) {
            try {
                console.log('Tryin with user: ', user);

                const res = await fetch('api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });
                if (!res.ok) {
                    const errorText = await res.text();
                    console.error('Failed to register: ', errorText);
                    throw new Error(`Failed to register: ${errorText}`);
                }

                const data = await res.json();
                console.log("You're successfully registered", data.token);

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
