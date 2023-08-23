import { defineStore } from "pinia";

export const useStoreRecipes = defineStore("storeRecipes", {
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    async loadRecipes() {
      const response = await import("./recipes.json");
      this.data = await response.default.recipes;
    },
  },
});
