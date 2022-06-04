import axios from "axios";

const url = "http://127.0.0.1:5000";

export const getAllProducts = async () => {
   const data = await axios.get(`${url}/api/products`);
   return data;
}

export const getSingleProduct = async (id) => {
   const data = await axios.get(`${url}/api/products/${id}`);
   return data;
} 

export const signInUser = async (email, password) => {
   const data = await axios.post(`${url}/api/users/signin`, {email, password});
   return data;
}