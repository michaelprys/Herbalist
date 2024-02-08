import { createPinia } from 'pinia';
import { createApp, watch } from 'vue';
import { router } from '@/router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

// watch(
//     () => pinia.state.selectedRecipe,
//     selectedRecipe => {
//         if (selectedRecipe) {
//             localStorage.setItem(
//                 'selectedRecipe',
//                 JSON.stringify(selectedRecipe)
//             );
//         }
//     },
//     { deep: true }
// );
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount('#app');
