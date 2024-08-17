import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});

export const getProducts = async (limit = 10, page = 1) => {
  try {
    const response = await instance.get("/products", {
      params: { limit, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default instance;
