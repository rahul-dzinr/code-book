import axios from 'axios';

const API_URL = 'http://localhost:3001/products';

export const fetchProducts = async (searchTerm = "") => {
  try {
    // const response = await axios.get(`${API_URL}?name_like=${searchTerm}`);
    const response = await axios.get("http://localhost:3001/products?name_like=react");
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


export const fetchProductById = async (id) => {
    const response = await fetch(`http://localhost:3001/products/${id}`); // Replace with your API URL
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return await response.json();
  };
  