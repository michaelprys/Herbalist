import { defineStore } from 'pinia';
import { state } from './state';
import { actions } from './actions';

export const useStoreRecipe = defineStore({
    id: 'storeRecipe',
    state,
    actions,
    persist: true,
});
