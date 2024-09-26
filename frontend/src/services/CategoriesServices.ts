import axios from "axios";
const env = import.meta.env;
const host= env.VITE_API_ROOT || "audio.dialektatlas.ch";
const port = env.VITE_NODE_ENV === "local" ? ":8001" : "";
const scheme = env.VITE_NODE_ENV === "local" ? "http" : "https";

const BASE_URL = `${scheme}://${host}${port ? `:${port}` : ''}/api/v1`;

export const CategoriesServices = {
    async getCategories() {
      try {
        // console.log(`${BASE_URL}/categories`)
        const { status, data } = await axios.get(`${BASE_URL}/categories`);
        // console.log('first')
        if (status === 200) return data;
        throw new Error("Could not fetch data");
      } catch (error) {
        console.error(error);
        // Handle error appropriately here
        return null;
      }
    },
    async getSubCategories() {
      const { status, data } = await axios.get(`${BASE_URL}/categories/subCategory`);
      if (status === 200) return data;
      else throw new Error("Could not fetch data");
    },
    async getPageTitle(pagenumber: string) {
      const { status, data } = await axios.get(`${BASE_URL}/categories/subCategory/${pagenumber}`);
      if (status === 200) return data;
      else throw new Error("Could not fetch data");
    },
    
  };