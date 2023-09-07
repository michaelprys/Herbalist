import { defineStore, acceptHMRUpdate } from "pinia";

export const useStoreRecipes = defineStore("storeRecipes", {
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    async loadRecipes() {
      const response = await import("./recipes.json");
      this.data = response.recipes;
    },
  },
});
// HMR
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreRecipes, import.meta.hot));
}
