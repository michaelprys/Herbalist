import { defineStore } from 'pinia';
import { state } from './state';
import { actions } from './actions';

export const useStoreRecipes = defineStore({
    id: 'storeRecipes',
    state,
    actions,
});
