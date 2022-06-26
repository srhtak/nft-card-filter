import { defineStore } from "pinia";
import axios from "axios";

export const useNft = defineStore({
  id: "nftSource",
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
